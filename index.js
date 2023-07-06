const cds = require("./cds");
const { getAppDefinitionFromCDS } = require("./utils");
const {
  config: authentication,
  befores = [],
  afters = [],
} = require("./authentication");

// Chains list
const listChainsHidden = require("./triggers/listChainsHidden");

// Convert CDS to Zapier triggers and actions
const appOperations = getAppDefinitionFromCDS(cds);

const App = {
  version: require("./package.json").version,
  platformVersion: require("zapier-platform-core").version,
  authentication: authentication,
  beforeRequest: [...befores],
  afterResponse: [...afters],
  resources: {},
  triggers: {
    [listChainsHidden.key]: listChainsHidden,
    ...appOperations.triggers,
  },
  searches: {},
  creates: appOperations.actions,
};

module.exports = App;
