// Safe actions
const gnosisSafeSimpleTransfer = require("./creates/gnosisSafeSimpleTransfer");

// Safe triggers
const safeTransactionExecutedTransferNative = require("./triggers/safeTransactionExecutedTransferNative");

// Authentication
const {
  config: authentication,
  befores = [],
  afters = [],
} = require("./authentication");

// Chains list
const listChainsHidden = require("./triggers/listChainsHidden");

const App = {
  version: require("./package.json").version,
  platformVersion: require("zapier-platform-core").version,
  authentication: authentication,
  beforeRequest: [...befores],
  afterResponse: [...afters],
  resources: {},
  triggers: {
    [listChainsHidden.key]: listChainsHidden,
    [safeTransactionExecutedTransferNative.key]:
      safeTransactionExecutedTransferNative,
  },
  searches: {},
  creates: {
    [gnosisSafeSimpleTransfer.key]: gnosisSafeSimpleTransfer,
  },
};

module.exports = App;
