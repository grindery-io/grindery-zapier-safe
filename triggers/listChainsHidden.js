const NexusClient = require("grindery-nexus-client").default;

const ENVIRONMENT = process.env.ENVIRONMENT;

// This is a hidden trigger to get a list of blockchains.

const perform = async (z, bundle) => {
  const client = new NexusClient();
  try {
    let chains = await client.chain.list({
      type: "evm",
      environment: ENVIRONMENT,
    });
    if (chains) {
      var result = [];
      chains.map((chain) => {
        result.push({
          id: chain.value,
          key: chain.value,
          title: chain.label,
        });
      });
      return result;
    } else {
      return [];
    }
  } catch (error) {
    z.console.log(
      "Auth Error in List Chains Triggers (Zapier)-Trigger (listChains.js)",
      error.message
    );
    if (error.message === "Invalid access token") {
      throw new z.errors.RefreshAuthError();
    }
  }
};

module.exports = {
  key: "list_chains_trigger",
  noun: "List_chains_trigger",
  display: {
    label: "New List_chains_triggers",
    description: "Triggers when a new list_chains_triggers is created.",
    hidden: true,
  },
  operation: {
    perform,
    inputFields: [],
    sample: {
      id: 1,
      name: "Test",
    },
    outputFields: [
      { key: "id", label: "Chain" },
      { key: "title", label: "Chain Name" },
    ],
  },
};
