const NexusClient = require("grindery-nexus-client").default;

const ENVIRONMENT = process.env.ENVIRONMENT;

const workflowSource = {
  staging: "urn:grindery-staging:zapier-safe",
  production: "urn:grindery:zapier-safe",
};

const getCreatorId = (token) => {
  try {
    const client = new NexusClient(token);
    const user = client.user.get();
    return user.id;
  } catch (error) {
    //force token refresh if invalid
    if (error.message === "Invalid access token") {
      throw new z.errors.RefreshAuthError();
    } else {
      z.console.log("Error in getCreatorId function", error.message);
    }
  }
};

const uniqueID = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4();
};

const getOutputFields = async (z, bundle, operationKey, operationType) => {
  const client = new NexusClient(bundle.authData.access_token);

  let outputFields;
  let sample;
  try {
    const connector = await client.connector.get({
      driverKey: "safe",
      environment: ENVIRONMENT,
      enrich: true,
    });
    outputFields =
      connector[operationType].find(
        (operation) => operation.key === operationKey
      ).operation.outputFields || [];
    sample =
      connector[operationType].find(
        (operation) => operation.key === operationKey
      ).operation.sample || {};
  } catch (error) {
    if (error.message === "Invalid access token") {
      throw new z.errors.RefreshAuthError();
    } else {
      z.console.log("getConnector err", error);
    }
  }

  return outputFields && outputFields.length > 0
    ? outputFields.map((field) => ({
        key: field.key,
        label: field.label || field.key || "",
        sample: (sample && sample[field.key]) || "Sample value",
      }))
    : sample && object.keys(sample).length > 0
    ? object.keys(sample).map((key) => ({
        key: key,
        label: key,
        sample: sample[key],
      }))
    : [];
};

const getInputFields = async (z, bundle, operationKey, operationType) => {
  const client = new NexusClient(bundle.authData.access_token);
  let inputFields;
  try {
    const connector = await client.connector.get({
      driverKey: "safe",
      environment: ENVIRONMENT,
      enrich: true,
    });
    inputFields =
      connector[operationType].find(
        (operation) => operation.key === operationKey
      ).operation.inputFields || [];
  } catch (error) {
    if (error.message === "Invalid access token") {
      throw new z.errors.RefreshAuthError();
    } else {
      z.console.log("getConnector err", error);
    }
  }

  function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; i++) rv[arr[i].value] = arr[i].label;
    return rv;
  }

  const fields =
    (inputFields &&
      inputFields.map((field) => {
        let input = {
          key: field.key,
          label: field.label || field.key || "",
        };

        let type = "";
        switch (field.type) {
          case "boolean":
            type = "boolean";
            break;
          case "text":
            type = "text";
            break;
          case "file":
            type = "file";
            break;
          case "password":
            type = "password";
            break;
          case "integer":
            type = "integer";
            break;
          case "number":
            type = "number";
            break;
          case "datetime":
            type = "datetime";
            break;
          default:
            type = "string";
        }
        input.type = type;
        if (field.required) {
          input.required = true;
        }
        if (field.choices) {
          input.choices = toObject(field.choices);
        }
        if (field.default) {
          if (type === "boolean") {
            if (field.default === "true") {
              input.default = field.default;
            }
          } else {
            input.default = field.default;
          }
        }
        if (field.helpText) {
          input.helpText = field.helpText;
        }
        if (
          field.key === "_grinderyChain" &&
          !field.choices &&
          !field.default
        ) {
          input.dynamic = "list_chains_trigger.key";
        }
        return input;
      })) ||
    [];
  return fields;
};

const subscribeHook = async (z, bundle, operationKey) => {
  let token = uniqueID(); //generate a unique_id and register the webhook
  const options = {
    url: `https://connex-zapier-grindery.herokuapp.com/webhooks`,
    method: "POST",
    body: {
      url: bundle.targetUrl,
      token: token,
    },
  };

  // create nexus workflow with zapier action
  return z.request(options).then(async (response) => {
    // create workflow
    try {
      const client = new NexusClient(bundle.authData.access_token);
      const outputFields = await getOutputFields(
        z,
        bundle,
        operationKey,
        "triggers"
      );

      // trigger input object
      let input = {
        ...bundle.inputData,
      };

      // output object from trigger
      let output = {};

      outputFields.map((outField) => {
        output = {
          ...output,
          [outField.key]: `{{trigger.${[outField.key]}}}`,
        };
      });

      // trigger object
      let trigger = {
        type: "trigger",
        connector: "safe",
        operation: operationKey,
        input: input,
      };

      // find the creator id from the access_token
      let creator = getCreatorId(bundle.authData.access_token);

      // action after creating trigger
      let action = [
        {
          type: "action",
          connector: "zapier",
          operation: "triggerZap",
          input: {
            token: token,
            data: JSON.stringify(output),
          },
        },
      ];

      // main workflow object
      let workflow = {
        state: "on",
        title: `Trigger a Safe by Grindery Zap`,
        creator: creator,
        actions: action,
        trigger: trigger,
        source: workflowSource[ENVIRONMENT] || workflowSource[0],
      };

      const create_workflow_response = await client.workflow.create({
        workflow,
      });
      const data = await z.JSON.parse(response.content);
      const response_object = {
        workflow_key: create_workflow_response.key,
        ...data,
      };

      // save workflow
      const save_options = {
        url: `https://connex-zapier-grindery.herokuapp.com/saveWorkflow`,
        method: "POST",
        body: {
          id: data.id,
          workflow: workflow,
        },
      };

      return z.request(save_options).then(async (response) => {
        z.console.log("saving workflow response: ", response);
        z.console.log(
          "Returned Object from Subscribe Action: ",
          response_object
        );
        return response_object;
      });
    } catch (error) {
      if (error.message === "Invalid access token") {
        z.console.log(
          "Line 216 - Auth Error in Subscribe Method (trigger_from_a_grindery_workflow)",
          error.message
        );
        throw new z.errors.RefreshAuthError();
      } else {
        z.console.log(
          "Error occured in trigger from a grindery workflow: ",
          error.message
        );
      }
    }
  });
};

const unsubscribeHook = async (z, bundle) => {
  const hookId = bundle.subscribeData.id;
  const workflow_key = bundle.subscribeData.workflow_key;
  z.console.log("unsubscribe hook: ", hookId);

  const options = {
    url: `https://connex-zapier-grindery.herokuapp.com/webhooks/${hookId}/${workflow_key}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${bundle.authData.access_token}`,
      accept: "application/json",
    },
  };

  const unsub_response = await z.request(options);
  if (unsub_response.status !== 200) {
    z.console.log(unsub_response);
  } else {
    return { message: "Unsubscribed: ", hookId };
  }
};

const performTransactionList = async (z, bundle, operationKey) => {
  try {
    const data = await getOutputFields(z, bundle, operationKey, "triggers");

    if (data.length === 0) {
      return [];
    } else {
      let obj = {};
      data.map((field) => {
        obj = {
          ...obj,
          [field.key]: field.sample || "Sample value",
        };
      });
      return [obj];
    }
  } catch (error) {
    return [];
  }
};

const performAsyncAction = async (z, bundle, operationKey) => {
  const client = new NexusClient(bundle.authData.access_token);

  const step = {
    type: "action",
    connector: "safe",
    operation: operationKey,
  };
  const input = bundle.inputData;

  let nexus_response;
  if (bundle.meta.isLoadingSample) {
    try {
      nexus_response = await client.connector.testAction({
        step,
        input: input,
        environment: ENVIRONMENT,
      });
    } catch (error) {
      if (error.message === "Invalid access token") {
        throw new z.errors.RefreshAuthError();
      } else {
        z.console.log("perform performAsyncAction error", error);
        throw new z.errors.Error(error.message);
      }
    }
  } else {
    const callbackUrl = z.generateCallbackUrl();

    try {
      nexus_response = await client.connector.runActionAsync({
        callbackUrl,
        step,
        input: input,
        environment: ENVIRONMENT,
      });
    } catch (error) {
      if (error.message === "Invalid access token") {
        throw new z.errors.RefreshAuthError();
      } else {
        z.console.log("perform performAsyncAction error", error);
        throw new z.errors.Error(error.message);
      }
    }
  }

  z.console.log(
    "Response from runActionAsync (performAsyncAction): ",
    nexus_response
  );
  if (nexus_response) {
    return nexus_response;
  }
};

const performResumeAction = async (z, bundle) => {
  z.console.log(
    "Response from runActionAsync callback: ",
    bundle.cleanedRequest
  );
  if (
    bundle.cleanedRequest &&
    bundle.cleanedRequest.success &&
    bundle.cleanedRequest.result
  ) {
    return bundle.cleanedRequest.result;
  } else {
    return {};
  }
};

module.exports = {
  getCreatorId,
  uniqueID,
  getOutputFields,
  getInputFields,
  subscribeHook,
  unsubscribeHook,
  performTransactionList,
  performAsyncAction,
  performResumeAction,
};
