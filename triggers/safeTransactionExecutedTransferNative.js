const {
  getOutputFields,
  getInputFields,
  subscribeHook,
  unsubscribeHook,
  performTransactionList,
} = require("../utils");

// Copy this file and update constants to add new trigger.
const key = "safeTransactionExecutedTransferNative";
const noun = "Native Token Transfer";
const label = "Transaction Executed - Transfer Native Token";
const description =
  "Triggers when a transaction is executed - Transfer native token.";
const sample = {
  _grinderyTransactionHash:
    "0x1df651e07a2af1b2b21bd93815786ab563bbe2246899c7f19c69d63cc3f12450",
  _grinderyChainId: "5",
  _grinderyContractAddress: "0xb6D3145b1Fd6fDa048A39BE5D82EB76a00706DC6",
  _grinderyChain: "eip155:5",
  type: "transfer_native_coin",
  submittedAt: 1677059469747,
  nonce: 28,
  safeTxGas: "0",
  baseGas: "0",
  gasPrice: "0",
  gasToken: "0x0000000000000000000000000000000000000000",
  safeTxHash:
    "0x734273d8a0fd2995548d208e2dbd53ec1daaec3d9adff1f3a39be6acd2929477",
  confirmationsRequired: 1,
  trusted: true,
  value: "10000000000000000",
  valueFormatted: "0.01",
  sender: "0xb6D3145b1Fd6fDa048A39BE5D82EB76a00706DC6",
  recipient: "0x8c17e35218dC6d17Ce7EBf3532B4AEDBC88e98f9",
  direction: "OUTGOING",
};

// Keep all the rest as it is

const perform = async (z, bundle) => {
  const payload = {
    ...bundle.cleanedRequest,
  };
  delete payload.querystring;
  return [payload];
};

const performList = async (z, bundle) => {
  return await performTransactionList(z, bundle, key);
};

const performSubscribe = async (z, bundle) => {
  return await subscribeHook(z, bundle, key);
};

const performUnsubscribe = async (z, bundle) => {
  return await unsubscribeHook(z, bundle);
};

module.exports = {
  key: key,
  noun: noun,
  display: {
    label: label,
    description: description,
  },
  operation: {
    type: "hook",
    perform: perform,
    performSubscribe: performSubscribe,
    performUnsubscribe: performUnsubscribe,
    performList: performList,
    inputFields: [
      async (z, bundle) => {
        return await getInputFields(z, bundle, key, "triggers");
      },
    ],
    sample: sample,
    outputFields: [
      async (z, bundle) => {
        return await getOutputFields(z, bundle, key, "triggers");
      },
    ],
  },
};
