const {
  getOutputFields,
  getInputFields,
  performAsyncAction,
  performResumeAction,
} = require("../utils");

// Copy this file and update constants to add new action.
const key = "gnosisSafeSimpleTransfer";
const noun = "Transfer to Address";
const label = "Transfer to Address";
const description = "Transfer a native token to address";
const sample = {
  test: "1",
};

// Keep all the rest as it is

const perform = async (z, bundle) => {
  return await performAsyncAction(z, bundle, key);
};

module.exports = {
  key: key,
  noun: noun,
  display: {
    label: label,
    description: description,
  },
  operation: {
    perform: perform,
    performResume: performResumeAction,
    inputFields: [
      async (z, bundle) => {
        return await getInputFields(z, bundle, key, "actions");
      },
    ],
    sample: sample,
    outputFields: [
      async (z, bundle) => {
        return await getOutputFields(z, bundle, key, "actions");
      },
    ],
  },
};
