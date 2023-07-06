const cds = {
  key: "safe",
  name: "Safe",
  version: "2.0.0",
  platformVersion: "1.0.0",
  triggers: [
    {
      key: "safeTransactionExecutedTransferNative",
      name: "Transaction executed - Transfer native token",
      display: {
        label: "Transaction executed - Transfer native token",
        description: "",
        instructions: "",
        featured: false,
      },
      operation: {
        type: "polling",
        operation: {
          url: "ws://grindery-nexus-connector-web3-staging:3000/",
        },
        inputFields: [
          {
            key: "_grinderyChain",
            type: "string",
            label: "Chain",
            required: true,
          },
          {
            key: "_grinderyContractAddress",
            type: "address",
            label: "Safe Address",
            placeholder: "Enter your safe address",
            required: true,
          },
        ],
        outputFields: [],
        sample: {
          _grinderyTransactionHash:
            "0x1df651e07a2af1b2b21bd93815786ab563bbe2246899c7f19c69d63cc3f12450",
          _grinderyChainId: "5",
          _grinderyContractAddress:
            "0xb6D3145b1Fd6fDa048A39BE5D82EB76a00706DC6",
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
        },
      },
    },
    {
      key: "safeTransactionExecutedTransferERC20",
      name: "Transaction executed - Transfer ERC20 token",
      display: {
        label: "Transaction executed - Transfer ERC20 token",
        description: "",
        instructions: "",
        featured: false,
      },
      operation: {
        type: "polling",
        operation: {
          url: "ws://grindery-nexus-connector-web3-staging:3000/",
        },
        inputFields: [
          {
            key: "_grinderyChain",
            type: "string",
            label: "Chain",
            required: true,
          },
          {
            key: "_grinderyContractAddress",
            type: "address",
            label: "Safe Address",
            placeholder: "Enter your safe address",
            required: true,
          },
        ],
        outputFields: [],
        sample: {
          _grinderyTransactionHash:
            "0x1df651e07a2af1b2b21bd93815786ab563bbe2246899c7f19c69d63cc3f12450",
          _grinderyChainId: "5",
          _grinderyContractAddress:
            "0xb6D3145b1Fd6fDa048A39BE5D82EB76a00706DC6",
          _grinderyChain: "eip155:5",
          type: "transfer_erc20",
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
          value: "1000000",
          valueFormatted: "1.0",
          sender: "0xb6D3145b1Fd6fDa048A39BE5D82EB76a00706DC6",
          recipient: "0x8c17e35218dC6d17Ce7EBf3532B4AEDBC88e98f9",
          direction: "OUTGOING",
          logoUri:
            "https://safe-transaction-assets.safe.global/tokens/logos/0x07865c6E87B9F70255377e024ace6630C1Eaa37F.png",
          decimals: 6,
          tokenAddress: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F",
          tokenName: "USD Coin",
          tokenSymbol: "USDC",
        },
      },
    },
    {
      key: "safeTransactionExecutedAddOwner",
      name: "Transaction executed - Add owner",
      display: {
        label: "Transaction executed - Add owner",
        description: "",
        instructions: "",
        featured: false,
      },
      operation: {
        type: "polling",
        operation: {
          url: "ws://grindery-nexus-connector-web3-staging:3000/",
        },
        inputFields: [
          {
            key: "_grinderyChain",
            type: "string",
            label: "Chain",
            required: true,
          },
          {
            key: "_grinderyContractAddress",
            type: "address",
            label: "Safe Address",
            placeholder: "Enter your safe address",
            required: true,
          },
        ],
        outputFields: [],
        sample: {
          _grinderyTransactionHash:
            "0x1df651e07a2af1b2b21bd93815786ab563bbe2246899c7f19c69d63cc3f12450",
          _grinderyChainId: "5",
          _grinderyContractAddress:
            "0xb6D3145b1Fd6fDa048A39BE5D82EB76a00706DC6",
          _grinderyChain: "eip155:5",
          type: "add_owner",
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
          owner: "0xb6D3145b1Fd6fDa048A39BE5D82EB76a00706DC6",
        },
      },
    },
    {
      key: "safeTransactionExecutedRemoveOwner",
      name: "Transaction executed - Remove owner",
      display: {
        label: "Transaction executed - Remove owner",
        description: "",
        instructions: "",
        featured: false,
      },
      operation: {
        type: "polling",
        operation: {
          url: "ws://grindery-nexus-connector-web3-staging:3000/",
        },
        inputFields: [
          {
            key: "_grinderyChain",
            type: "string",
            label: "Chain",
            required: true,
          },
          {
            key: "_grinderyContractAddress",
            type: "address",
            label: "Safe Address",
            placeholder: "Enter your safe address",
            required: true,
          },
        ],
        outputFields: [],
        sample: {
          _grinderyTransactionHash:
            "0x1df651e07a2af1b2b21bd93815786ab563bbe2246899c7f19c69d63cc3f12450",
          _grinderyChainId: "5",
          _grinderyContractAddress:
            "0xb6D3145b1Fd6fDa048A39BE5D82EB76a00706DC6",
          _grinderyChain: "eip155:5",
          type: "remove_owner",
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
          owner: "0xb6D3145b1Fd6fDa048A39BE5D82EB76a00706DC6",
        },
      },
    },
    {
      key: "safeTransactionExecutedThresholdChanged",
      name: "Transaction executed - Threshold changed",
      display: {
        label: "Transaction executed - Threshold changed",
        description: "",
        instructions: "",
        featured: false,
      },
      operation: {
        type: "blockchain:event",
        signature: "event ChangedThreshold(uint256 threshold)",
        inputFields: [
          {
            key: "_grinderyChain",
            type: "string",
            label: "Chain",
            required: true,
          },
          {
            key: "_grinderyContractAddress",
            type: "address",
            label: "Safe Address",
            placeholder: "Enter your safe address",
            required: true,
          },
        ],
        outputFields: [],
        sample: {
          _grinderyTransactionHash:
            "0x1df651e07a2af1b2b21bd93815786ab563bbe2246899c7f19c69d63cc3f12450",
          _grinderyChainId: "5",
          _grinderyContractAddress:
            "0xb6D3145b1Fd6fDa048A39BE5D82EB76a00706DC6",
          _grinderyChain: "eip155:5",
          threshold: "2",
        },
      },
    },
    {
      key: "safeTransactionExecutedOther",
      name: "Transaction executed - Other",
      display: {
        label: "Transaction executed - Other",
        description: "",
        instructions: "",
        featured: false,
      },
      operation: {
        type: "polling",
        operation: {
          url: "ws://grindery-nexus-connector-web3-staging:3000/",
        },
        inputFields: [
          {
            key: "_grinderyChain",
            type: "string",
            label: "Chain",
            required: true,
          },
          {
            key: "_grinderyContractAddress",
            type: "address",
            label: "Safe Address",
            placeholder: "Enter your safe address",
            required: true,
          },
        ],
        outputFields: [],
        sample: {
          _grinderyTransactionHash:
            "0x1df651e07a2af1b2b21bd93815786ab563bbe2246899c7f19c69d63cc3f12450",
          _grinderyChainId: "5",
          _grinderyContractAddress:
            "0xb6D3145b1Fd6fDa048A39BE5D82EB76a00706DC6",
          _grinderyChain: "eip155:5",
          type: "remove_owner",
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
        },
      },
    },
    {
      key: "safeDepositReceivedNative",
      name: "Deposit received - Native token",
      display: {
        label: "Deposit received - Native token",
        description: "",
        instructions: "",
        featured: false,
      },
      operation: {
        type: "polling",
        operation: {
          url: "ws://grindery-nexus-connector-web3-staging:3000/",
        },
        inputFields: [
          {
            key: "_grinderyChain",
            type: "string",
            label: "Chain",
            required: true,
          },
          {
            key: "_grinderyContractAddress",
            type: "address",
            label: "Safe Address",
            placeholder: "Enter your safe address",
            required: true,
          },
        ],
        outputFields: [],
        sample: {
          _grinderyTransactionHash:
            "0x76992d8df4ef20c9b5a6da80e9a95c5e8882f610b2794ecb1fbec8ee715d5402",
          _grinderyChainId: "5",
          _grinderyContractAddress:
            "0xb6D3145b1Fd6fDa048A39BE5D82EB76a00706DC6",
          _grinderyChain: "eip155:5",
          sender: "0x8c17e35218dC6d17Ce7EBf3532B4AEDBC88e98f9",
          value: "10000000000000000",
          valueFormatted: "0.01",
        },
      },
    },
    {
      key: "safeDepositReceivedERC20",
      name: "Deposit received - ERC20 token",
      display: {
        label: "Deposit received - ERC20 token",
        description: "",
        instructions: "",
        featured: false,
      },
      operation: {
        type: "polling",
        operation: {
          url: "ws://grindery-nexus-connector-web3-staging:3000/",
        },
        inputFields: [
          {
            key: "_grinderyChain",
            type: "string",
            label: "Chain",
            required: true,
          },
          {
            key: "_grinderyContractAddress",
            type: "address",
            label: "Safe Address",
            placeholder: "Enter your safe address",
            required: true,
          },
        ],
        outputFields: [],
        sample: {
          _grinderyTransactionHash:
            "0x76992d8df4ef20c9b5a6da80e9a95c5e8882f610b2794ecb1fbec8ee715d5402",
          _grinderyChainId: "5",
          _grinderyContractAddress:
            "0xb6D3145b1Fd6fDa048A39BE5D82EB76a00706DC6",
          _grinderyChain: "eip155:5",
          sender: "0x8c17e35218dC6d17Ce7EBf3532B4AEDBC88e98f9",
          value: "1000000",
          tokenAddress: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F",
          tokenName: "USD Coin",
          tokenSymbol: "USDC",
          logoUri:
            "https://safe-transaction-assets.safe.global/tokens/logos/0x07865c6E87B9F70255377e024ace6630C1Eaa37F.png",
          decimals: 6,
          valueFormatted: "1.0",
        },
      },
    },
  ],
  actions: [
    {
      key: "gnosisSafeSimpleTransfer",
      name: "Transfer to Address",
      display: {
        label: "Transfer to Address",
        description: "Transfer a native token to address",
        instructions:
          "Use this to transfer a native token (e.g. ETH) to address",
        featured: false,
      },
      operation: {
        type: "api",
        operation: {
          url: "ws://grindery-nexus-connector-web3-staging:3000/",
        },
        inputFields: [
          {
            key: "to",
            label: "Recipient",
            type: "string",
            placeholder: "Enter recipient's wallet address",
            list: false,
            required: true,
            helpText: "",
            default: "",
            computed: false,
          },
          {
            key: "value",
            label: "Amount",
            type: "string",
            placeholder: "Enter the amount of token you want to transfer",
            list: false,
            required: true,
            helpText: "",
            default: "",
            computed: false,
          },
          {
            key: "_grinderyUnitConversion_value",
            type: "string",
            default: "ether->wei",
            list: false,
            computed: true,
          },
        ],
        outputFields: [],
        sample: {},
      },
    },
    {
      key: "gnosisSafeSimpleTransferToken",
      name: "Transfer Token to Address",
      display: {
        label: "Transfer Token to Address",
        description: "Transfer an ERC-20 token to address",
        instructions:
          "Use this to transfer an ERC-20 token (e.g. USDC) to address",
        featured: false,
      },
      operation: {
        type: "api",
        operation: {
          url: "ws://grindery-nexus-connector-web3-staging:3000/",
        },
        inputFields: [
          {
            key: "to",
            label: "Recipient",
            type: "string",
            placeholder: "Enter recipient's wallet address",
            list: false,
            required: true,
            helpText: "",
            default: "",
            computed: false,
          },
          {
            key: "tokenContractAddress",
            label: "Token Contract Address",
            type: "string",
            placeholder: "Enter the token's contract address",
            list: false,
            required: true,
            helpText: "",
            default: "",
            computed: false,
          },
          {
            key: "value",
            label: "Amount",
            type: "string",
            placeholder: "Enter the amount of token you want to transfer",
            list: false,
            required: true,
            helpText: "",
            default: "",
            computed: false,
          },
          {
            key: "_grinderyUnitConversion_value",
            type: "string",
            default: "erc20Decimals[tokenContractAddress]",
            list: false,
            computed: true,
          },
        ],
        outputFields: [],
        sample: {},
      },
    },
  ],
  authentication: {
    type: "oauth2",
    test: {
      method: "POST",
      url: "http://grindery-nexus-orchestrator:3000/webhook/web3/callSmartContract/echo?_grinderyEnvironment=staging",
      headers: {
        "Content-Type": "application/json",
      },
      body: '{"address":"{{ auth.safe }}"}',
    },
    defaultDisplayName: "[{{ auth.chainName }}] {{ auth.safe }}",
    authenticatedRequestTemplate: {
      headers: {
        "Content-Type": "application/json",
      },
      body: '{"safe":"{{ auth.safe }}","owner":"{{ auth.owner }}","chainId":"{{ auth.chainId }}"}',
    },
    allowedHosts: ["grindery-nexus-orchestrator:3000"],
    oauth2Config: {
      authorizeUrl:
        "https://microsites.grindery.org/grindery-nexus-connector-web3-microsite/?path=safe&_grinderyEnvironment=staging",
      getAccessToken: {
        method: "POST",
        url: "http://grindery-nexus-orchestrator:3000/webhook/web3/callSmartContract/clientModeOAuthComplete?_grinderyEnvironment=staging",
        headers: {
          "Content-Type": "application/json",
        },
        body: '{"code":"{{ code }}"}',
      },
    },
  },
  icon: "data:image/png;base64,AAABAAMAEBAAAAEAIABoBAAANgAAACAgAAABACAAKBEAAJ4EAAAwMAAAAQAgAGgmAADGFQAAKAAAABAAAAAgAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/AAZ9/xE7fv8RmoD/EtqA/xL6gP8S+oD/EtmA/xGWe/8OOID/AAYAAAAAAAAAAAAAAAAAAAAAAAAAAHn/DBWA/xGYgP8S8oH/Ev6A/xL/gP8S/4D/Ev+A/xL/gf8S/oD/EvKA/xGYef8MFQAAAAAAAAAAAAAAAHn/DBWA/xGvgf8S/H35Ev9RmxL/SIgS/0iIEv9IiBL/SIgS/0yQEv905hL/gf8S/ID/Ea95/wwVAAAAAID/AAaA/xGYgf8S/ID/Ev958BL/GSMS/xITEv8SExL/EhMS/xITEv8VGRL/XLES/4D/Ev+B/xL8gP8RmID/AAZ7/w44gP8S8oD/Ev+A/xL/e/QS/yhDEv8YIRL/GCES/xghEv8YIRL/GCES/z1vEv9csRL/dOUS/4D/EvJ9/xE7gP8RloH/Ev6A/xL/gP8S/4D+Ev979BL/efAS/3nwEv958BL/efAS/23WEv8ZIRL/FBgS/0uNEv+B/xL+fv8RmoD/EtqA/xL/gP8S/4D/Ev+A/xL/gP8S/334Ev9lxRL/ZMMS/334Ev958BL/GCES/xITEv9IiBL/gP8S/4D/EtmA/xL6gP8S/376Ev958BL/e/QS/4D+Ev9kwxL/GSMS/xkjEv9lxRL/e/QS/yhDEv8ZJBL/VKES/4D/Ev+A/xL6gP8S+oD/Ev9UoRL/GSQS/yhDEv979BL/ZcUS/xkjEv8ZIxL/ZMMS/4D+Ev979BL/efAS/376Ev+A/xL/gP8S+oD/EtmA/xL/SIgS/xITEv8YIRL/efAS/334Ev9kwxL/ZcUS/334Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Etl+/xGagf8S/kuNEv8UGBL/GSES/23WEv958BL/efAS/3nwEv958BL/e/QS/4D+Ev+A/xL/gP8S/4H/Ev6A/xGWff8RO4D/EvJ05RL/XLES/z1vEv8ZIRL/GCES/xghEv8YIRL/GCES/yhDEv979BL/gP8S/4D/Ev+A/xLxe/8SOID/AAaA/xKYgf8S/ID/Ev9bsRL/FBkS/xITEv8SExL/EhMS/xITEv8ZIxL/efAS/4D/Ev+B/xL8gP8SmID/AAYAAAAAef8MFYD/Ea+B/xL8dOYS/0yQEv9IiBL/SIgS/0iIEv9IiBL/UZsS/335Ev+B/xL8gP8Rr3n/DBUAAAAAAAAAAAAAAAB5/wwVgP8SmID/EvGB/xL+gP8S/4D/Ev+A/xL/gP8S/4H/Ev6A/xLygP8SmHn/DBUAAAAAAAAAAAAAAAAAAAAAAAAAAID/AAZ9/xM3gP8RloD/EtmA/xL6gP8S+oD/Etl+/xGaff8RO4D/AAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAACAAAABAAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZv8ABXn/DBV9/w8zfv8QcYD/Eal//xLTf/8S74D/Ev2A/xL9f/8S74D/EtKA/xGpfv8QcX3/EDF5/w0TZv8ABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP8ABID/DRR9/xA/f/8RlX//ENl//xHrf/8S84D/EfmB/xL8gP8S/4D/Ev+B/xL8gP8R+YD/EvJ//xLpgP8RzoD/EYp9/xE9gP8NFID/AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/AAh9/xAvgP8SioD/EtqA/xLygP8S/YD/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL7f/8S8YD/EtqA/xKKff8QL4D/AAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0/wALgP8QQH//EruA/xHtgP8S/YD/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/YD/Ee1//xK7gP8QQHT/AAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdP8AC37/EUmA/xG/gP8S9YH/Ev6A/xL/f/wS/3brEv9y4hL/cuES/3LhEv9y4RL/cuES/3LhEv9y4RL/cuES/3LhEv9y4RL/dOUS/3v0Ev+A/hL/gf8S/oD/EvWA/xG/fv8RSXT/AAsAAAAAAAAAAAAAAAAAAAAAAAAAAID/AAiA/xBAgP8Rv4D/EvWB/xL+gP8S/4D/Ev926xL/O2sS/yI2Ev8fMBL/HzAS/x8wEv8fMBL/HzAS/x8wEv8fMBL/HzAS/yAxEv8rSRL/W68S/3v2Ev+A/xL/gf8S/oD/EvWA/xG/gP8QQID/AAgAAAAAAAAAAAAAAACA/wAEff8QL3//EruA/xL1gf8S/oD/Ev+A/xL/gP8S/3LiEv8iNhL/EhQS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xggEv9CehL/eO0S/4D/Ev+A/xL/gf8S/oD/EvV//xK7ff8QL4D/AAQAAAAAAAAAAID/DRSA/xKKgP8R7YH/Ev6A/xL/gP8S/4D/Ev+A/xL/cuES/x8wEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/Fx0S/z5xEv937BL/gP8S/4D/Ev+A/xL/gf8S/oD/Ee2A/xKKgP8NFAAAAABm/wAFff8RPYD/EtqA/xL9gP8S/4D/Ev+A/xL/gP8S/4D/Ev9z4xL/JDoS/xIUEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8WGxL/NV8S/23YEv937BL/eO0S/3v2Ev+A/hL/gP8S/YD/EtqA/xA+Zv8ABXn/DROA/xGKf/8S8YD/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/3jvEv9GgxL/JDoS/x8wEv8fMBL/HzAS/x8wEv8fMBL/HzAS/x8wEv8fMBL/Hy8S/xsoEv8bJxL/Nl8S/z5xEv9CeRL/Wq4S/3v0Ev+A/xL/gP8S8oD/EZSA/w0Uff8QMYD/Ec6A/xL7gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/f/0S/3jvEv9z4xL/cuES/3LhEv9y4RL/cuES/3LhEv9y4RL/cuES/3LhEv9v2xL/VqYS/xwoEv8WGxL/Fx0S/xcfEv8nQRL/c+QS/4D/Ev+A/xL9f/8S2X3/DzN+/xBxf/8S6YD/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D+Ev9v2xL/Hy8S/xITEv8SExL/EhMS/x8wEv9y4RL/gP8S/4D/Ev9//xHrfv8QcYD/Eal//xLzgP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev9//RL/e/US/3nwEv958BL/evMS/3/9Ev+A/xL/gP8S/3LhEv8fMBL/EhMS/xITEv8SExL/HzAS/3LhEv+A/xL/gP8S/4D/EvKA/xGpf/8S04D/EfmA/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/f/0S/3XpEv9XphL/SYsS/0mKEv9TnhL/dekS/3/9Ev+A/xL/cuES/x8wEv8SExL/EhMS/xITEv8fMBL/cuES/4D/Ev+A/xL/gP8R+YD/EtJ//xLvgf8S/ID/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev968xL/U54S/yE0Ev8ZIhL/GCIS/yE0Ev9XphL/e/US/4D/Ev9z4xL/JDoS/xIUEv8SExL/EhQS/yM4Ev9z4hL/gP8S/4D/Ev+B/xL8f/8S74D/Ev2A/xL/gP8S/4D/Ev9//RL/eO0S/3PiEv9y4RL/c+MS/3jvEv9//RL/gP8S/3nwEv9JihL/GCIS/xITEv8SExL/GSIS/0mLEv958BL/gP8S/3jvEv9GgxL/JDoS/x8wEv8jOBL/Q3wS/3jtEv+A/xL/gP8S/4D/Ev+A/xL9gP8S/YD/Ev+A/xL/gP8S/3jtEv9CfBL/IzgS/x8wEv8kOhL/RoMS/3jvEv+A/xL/efAS/0mLEv8ZIhL/EhMS/xITEv8YIhL/SYoS/3nwEv+A/xL/f/0S/3jvEv9z4xL/cuES/3PiEv947RL/f/0S/4D/Ev+A/xL/gP8S/4D/Ev1//xLvgf8S/ID/Ev+A/xL/c+IS/yM4Ev8SFBL/EhMS/xIUEv8kOhL/c+MS/4D/Ev979RL/V6YS/yE0Ev8YIhL/GSIS/yE0Ev9TnhL/evMS/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+B/xL8f/8S74D/EtKA/xH5gP8S/4D/Ev9y4RL/HzAS/xITEv8SExL/EhMS/x8wEv9y4RL/gP8S/3/9Ev916RL/U54S/0mKEv9JixL/V6YS/3XpEv9//RL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/EfmA/xLSgP8SqYD/EvKA/xL/gP8S/3LhEv8fMBL/EhMS/xITEv8SExL/HzAS/3LhEv+A/xL/gP8S/3/9Ev968xL/efAS/3nwEv979RL/f/0S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S8oD/Eal+/xBxf/8R64D/Ev+A/xL/cuES/x8wEv8SExL/EhMS/xITEv8fLxL/b9sS/4D+Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev9//xLpfv8QcX3/DzN//xLZgP8S/YD/Ev9z5BL/J0ES/xcfEv8XHRL/FhsS/xwoEv9WphL/b9sS/3LhEv9y4RL/cuES/3LhEv9y4RL/cuES/3LhEv9y4RL/c+MS/3jvEv9//RL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S+4D/Ec59/xAxgP8NFID/E5SA/xLygP8S/3v0Ev9arhL/QnkS/z5xEv82XxL/GycS/xwoEv8fLxL/HzAS/x8wEv8fMBL/HzAS/x8wEv8fMBL/HzAS/x8wEv8kOhL/RoMS/3jvEv+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev9//xLxgP8Sinn/DRNm/wAFgP8QPoD/EtqA/xL9gP4S/3v2Ev947RL/d+wS/27YEv81XxL/FhsS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xIUEv8kOhL/c+MS/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/YD/Etl9/xE9Zv8ABQAAAACA/w0UgP8TiYD/Ee2B/xL+gP8S/4D/Ev+A/xL/d+wS/z1xEv8WHRL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/x8wEv9y4RL/gP8S/4D/Ev+A/xL/gP8S/4H/Ev6A/xHtgP8TiYD/DRQAAAAAAAAAAID/AAR9/xYvf/8Su4D/EvWB/xL+gP8S/4D/Ev947RL/QXoS/xggEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SFBL/IjYS/3LiEv+A/xL/gP8S/4D/Ev+B/xL+gP8S9X//Ert9/xYvgP8ABAAAAAAAAAAAAAAAAID/AAiA/xRAgP8Rv4D/EvWB/xL+gP8S/3v2Ev9arxL/K0kS/yAxEv8fMBL/HzAS/x8wEv8fMBL/HzAS/x8wEv8fMBL/HzAS/yI2Ev87axL/dusS/4D/Ev+A/xL/gf8S/oD/EvWA/xG/gP8UQID/AAgAAAAAAAAAAAAAAAAAAAAAAAAAAHT/AAt+/xFJgP8Rv4D/EvWB/xL+gP4S/3v0Ev905RL/cuES/3LhEv9y4RL/cuES/3LhEv9y4RL/cuES/3LhEv9y4RL/cuIS/3brEv9//BL/gP8S/4H/Ev6A/xL1gP8Rv37/EUl0/wALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHT/AAuA/xRAf/8Su4D/Ee2A/xL9gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL9gP8R7X//EruA/xRAdP8ACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/AAh9/xYvgP8TiYD/Etl//xLxgP8S+4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL9gP8S8oD/EtqA/xOJff8WL4D/AAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/AASA/w0Uff8RPYD/E4mA/xHOf/8S6YD/EvKA/xH5gf8S/ID/Ev+A/xL/gf8S/ID/EfmA/xLyf/8R63//EtmA/xOUgP8QPoD/DRSA/wAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABm/wAFef8NE33/EDF+/xBxgP8RqYD/EtJ//xLvgP8S/YD/Ev1//xLvgP8S0oD/Eql+/xBxff8PM4D/DRRm/wAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAADAAAABgAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAGA/wAEZv8ACoD/FRh9/xA/gP8QcH//EZmA/xC6f/8S1YD/EeqA/xL2gf8S/oH/Ev6A/xL2gP8R6n//EtWA/xG5gP8RmID/EHB9/xA/df8VGHH/AAmA/wAE//8AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVf8AA3f/EQ96/xAwfv8RWYD/EH5//xCbgP8RtID/EMl//xHbgP8S6YD/EvOB/xL6gP8S/4D/Ev+B/xL6gP8S84D/EumA/xLagP8QyX7/EbR//xGXgf8RdYD/E1B9/xIrd/8RD1X/AAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/AAR4/wARgP8NJn7/EkeA/xB8f/8St4D/EeWA/xL3gP8R+YH/EvqA/xL8gP8S/YH/Ev6A/xL/gP8S/4D/Ev+A/xL/gf8S/oD/Ev2A/xL8gf8S+oD/Efh//xLwgf8S2oD/Eqx//xF2fv8SR4D/DSZ4/w8RgP8ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wABZv8ABYD/GhSA/xJGf/8RhX//Eb9//xHegP8R7YD/EvuA/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL9gP8S93//EeuA/xHcf/8Rv3//EYWA/xJGgP8aFGb/AAUA/wABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAFt/wAHgP8OJH7/EmV//xKfgP8Rz4D/EvOA/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S84D/Es9//xKffv8SZYD/DiRt/wAHAP8AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAYD/AAqA/xMogv8SYn//Eb+A/xHrgP8R+oD/Ev6A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/oD/EfqA/xHrf/8Rv4L/EmKA/xMogP8ACv//AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wABgP8ACoP/EymA/xJygP8RwIH/EeqB/xL7gP8S/4D/Ev+A/xL/f/0S/335Ev989hL/e/US/3v1Ev979RL/e/US/3v1Ev979RL/e/US/3v1Ev979RL/e/US/3v1Ev979RL/e/US/3v1Ev979RL/fPcS/377Ev9//RL/gP8S/4D/Ev+B/xL7gf8R6oD/EcCA/xJyg/8TKYD/AAoA/wABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAFt/wAHgP8TKID/EnJ//xK7gP8S7YH/EvuA/xL/gP8S/4D/Ev+A/xL/d+wS/1+4Ev9PlxL/SYkS/0iIEv9IiBL/SIgS/0iIEv9IiBL/SIgS/0iIEv9IiBL/SIgS/0iIEv9IiBL/SIgS/0mIEv9KjBL/U58S/2jMEv937BL/f/0S/4D/Ev+A/xL/gf8S+4D/Eu1//xK7gP8ScoD/Eyht/wAHAP8AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGb/AAWA/w4kgv8SYoD/EcCA/xLtgf8S/ID/Ev+A/xL/gP8S/4D/Ev+A/xL/btkS/zxtEv8hMxL/Fx8S/xcdEv8XHRL/Fx0S/xcdEv8XHRL/Fx0S/xcdEv8XHRL/Fx0S/xcdEv8XHRL/Fx0S/xcdEv8ZIhL/KEMS/02SEv9s1BL/fvsS/4D/Ev+A/xL/gP8S/4H/EvyA/xLtgP8RwIL/EmKA/w4kZv8ABQAAAAAAAAAAAAAAAAAAAAAAAAAAgP8ABID/GhR+/xJlf/8Rv4H/EeqB/xL7gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/atAS/y1NEv8UGRL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SFBL/HSoS/ztrEv9hvBL/ffkS/4D/Ev+A/xL/gP8S/4D/Ev+B/xL7gf8R6n//Eb9+/xJlgP8aFID/AAQAAAAAAAAAAAAAAAAAAAAAeP8AEYD/EkZ//xKfgP8R64H/EvuA/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/ac0S/yhDEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/GiQS/zZfEv9dtBL/ffkS/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gf8S+4D/Eet//xKfgP8SRnj/DxEAAAAAAAAAAAAAAABV/wADgP8NJn//EYWA/xHPgP8R+oD/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/ac0S/yhDEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/GiQS/zVdEv9dsxL/ffkS/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/EfqA/xLPf/8RhYD/DSZV/wADAAAAAP//AAF3/xEPfv8SR3//Eb+A/xLzgP8S/oD/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/ac4S/ypHEv8TFRL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/GSIS/zBUEv9YqhL/evIS/335Ev99+RL/ffkS/377Ev9//RL/gP8S/4D/Ev6A/xLzf/8Rv37/Ekd3/xEP//8AAYD/AAR9/xIrf/8RdoD/EdyA/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/btgS/zpqEv8dLBL/ExUS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/FRoS/yE1Ev8+chL/WKoS/12zEv9dtBL/YbwS/2zUEv937BL/f/0S/4D/Ev+A/xL/f/8R3oD/EHx9/xAvgP8ABHH/AAmA/xNQgP8SrH//EeuA/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/degS/1akEv86ahL/KkcS/yhDEv8oQxL/KEMS/yhDEv8oQxL/KEMS/yhDEv8oQxL/KEMS/yhDEv8oQxL/KEMS/yhDEv8mPRL/IDES/xggEv8hNRL/MFQS/zVdEv82XxL/O2sS/0yQEv9oyhL/fvsS/4D/Ev+A/xL/gP8R7X//EreA/xFYZv8ACnX/FRiB/xF1gf8S2oD/EveA/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/ffkS/3XoEv9u2BL/ac4S/2nNEv9pzRL/ac0S/2nNEv9pzRL/ac0S/2nNEv9pzRL/ac0S/2nNEv9pzRL/ac0S/2jLEv9ftxL/R4US/yAxEv8VGhL/GSIS/xokEv8aJBL/HCkS/yQ6Ev9QmRL/fPYS/4D/Ev+A/xL/gP8S+4D/EuWA/xJ+gP8VGH3/ED9//xGXf/8S8ID/Ev2A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/3/+Ev948BL/X7cS/yY9Ev8SExL/EhMS/xITEv8SExL/EhMS/xcdEv9IiBL/e/US/4D/Ev+A/xL/gP8S/4D/Evd//xCbff8QP4D/EHB+/xG0gP8R+ID/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev9//hL/aMsS/yhDEv8SExL/EhMS/xITEv8SExL/EhMS/xcdEv9IiBL/e/US/4D/Ev+A/xL/gP8S/4D/EfmA/xG0gP8QcH//EZmA/xDJgf8S+oD/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP4S/3/8Ev9++xL/fvoS/376Ev9++hL/fvsS/4D+Ev+A/xL/gP8S/4D/Ev+A/xL/ac0S/yhDEv8SExL/EhMS/xITEv8SExL/EhMS/xcdEv9IiBL/e/US/4D/Ev+A/xL/gP8S/4H/EvqA/xDJgP8RmID/ELp//xHbgP8S/ID/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/e/US/2/bEv9nyxL/ZMQS/2TDEv9mxxL/bNYS/3v0Ev+A/xL/gP8S/4D/Ev+A/xL/ac0S/yhDEv8SExL/EhMS/xITEv8SExL/EhMS/xcdEv9IiBL/e/US/4D/Ev+A/xL/gP8S/4D/EvyA/xLagP8RuX//EtWA/xLpgP8S/YD/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D+Ev979BL/bdYS/1OeEv9FgBL/P3YS/z91Ev9CehL/T5YS/23WEv979RL/gP4S/4D/Ev+A/xL/ac0S/yhDEv8SExL/EhMS/xITEv8SExL/EhMS/xcdEv9IiBL/e/US/4D/Ev+A/xL/gP8S/4D/Ev2A/xLpf/8S1YD/EeqA/xLzgf8S/oD/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/377Ev9s1hL/T5YS/yxLEv8eLhL/HSsS/x0rEv8eLRL/LEsS/1OeEv9v2xL/f/wS/4D/Ev+A/xL/ac4S/ypHEv8TFRL/EhMS/xITEv8SExL/EhQS/xgfEv9JihL/e/US/4D/Ev+A/xL/gP8S/4H/Ev6A/xLzgP8R6oD/EvaB/xL6gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/376Ev9mxxL/QnoS/x4tEv8SExL/EhMS/xITEv8SExL/Hi4S/0WAEv9nyxL/fvsS/4D/Ev+A/xL/btgS/zpqEv8dLBL/ExUS/xITEv8SExL/FhwS/yY+Ev9TnxL/fPcS/4D/Ev+A/xL/gP8S/4D/Ev+B/xL6gP8S9oH/Ev6A/xL/gP8S/4D/Ev+A/xL/gP8S/3/+Ev948BL/cN0S/2vREv9pzRL/ac0S/2nOEv9u2BL/degS/335Ev+A/xL/gP8S/376Ev9kwxL/P3US/x0rEv8SExL/EhMS/xITEv8SExL/HSsS/z92Ev9kxBL/fvoS/4D/Ev+A/xL/degS/1akEv86ahL/KkcS/yhDEv8oQxL/L1ES/0R+Ev9kwhL/fvoS/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gf8S/oH/Ev6A/xL/gP8S/4D/Ev+A/xL/gP8S/376Ev9kwhL/Q34S/y9REv8oQxL/KEMS/ypHEv86ahL/VqQS/3XoEv+A/xL/gP8S/376Ev9kxBL/P3YS/x0rEv8SExL/EhMS/xITEv8SExL/HSsS/z91Ev9kwxL/fvoS/4D/Ev+A/xL/ffkS/3XoEv9u2BL/ac4S/2nNEv9pzRL/a9ES/3DdEv948BL/f/4S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gf8S/oD/EvaB/xL6gP8S/4D/Ev+A/xL/gP8S/3z3Ev9TnxL/Jj4S/xYcEv8SExL/EhMS/xMVEv8dLBL/OmoS/27YEv+A/xL/gP8S/377Ev9nyxL/RYAS/x4uEv8SExL/EhMS/xITEv8SExL/Hi0S/0J6Ev9mxxL/fvoS/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+B/xL6gP8S9oD/EeqA/xLzgf8S/oD/Ev+A/xL/gP8S/3v1Ev9JihL/GB8S/xIUEv8SExL/EhMS/xITEv8TFRL/KkcS/2nOEv+A/xL/gP8S/3/8Ev9v2xL/U54S/yxLEv8eLRL/HSsS/x0rEv8eLhL/LEsS/0+WEv9s1hL/fvsS/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4H/Ev6A/xLzgP8R6n//EtWA/xLpgP8S/YD/Ev+A/xL/gP8S/3v1Ev9IiBL/Fx0S/xITEv8SExL/EhMS/xITEv8SExL/KEMS/2nNEv+A/xL/gP8S/4D+Ev979RL/bdYS/0+WEv9CehL/P3US/z92Ev9FgBL/U54S/23WEv979BL/gP4S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev2A/xLpf/8S1YD/ErmA/xLagP8S/ID/Ev+A/xL/gP8S/3v1Ev9IiBL/Fx0S/xITEv8SExL/EhMS/xITEv8SExL/KEMS/2nNEv+A/xL/gP8S/4D/Ev+A/xL/e/QS/2zWEv9mxxL/ZMMS/2TEEv9nyxL/b9sS/3v1Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/EvyA/xLagP8RuYD/EpiA/xLJgf8S+oD/Ev+A/xL/gP8S/3v1Ev9IiBL/Fx0S/xITEv8SExL/EhMS/xITEv8SExL/KEMS/2nNEv+A/xL/gP8S/4D/Ev+A/xL/gP4S/377Ev9++hL/fvoS/376Ev9++xL/f/wS/4D+Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4H/EvqA/xDJgP8RmID/EHCA/xG0gP8R+YD/Ev+A/xL/gP8S/3v1Ev9IiBL/Fx0S/xITEv8SExL/EhMS/xITEv8SExL/KEMS/2jLEv9//hL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Efh+/xG0gP8QcH3/ED9//xCbgP8S94D/Ev+A/xL/gP8S/3v1Ev9IiBL/Fx0S/xITEv8SExL/EhMS/xITEv8SExL/Jj0S/1+3Ev948BL/f/4S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/X//EvB//xGXff8QP4D/FRiA/xB+gP8S5YD/EvuA/xL/gP8S/3z2Ev9QmRL/JDoS/xwpEv8aJBL/GiQS/xkiEv8VGhL/IDES/0eFEv9ftxL/aMsS/2nNEv9pzRL/ac0S/2nNEv9pzRL/ac0S/2nNEv9pzRL/ac0S/2nNEv9pzRL/ac0S/2nOEv9u2BL/degS/335Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S94H/EtqB/xF1df8VGGb/AAqA/xFYf/8Ut4D/Ee2A/xL/gP8S/377Ev9oyhL/TJAS/ztrEv82XxL/NV0S/zBUEv8iNRL/GCAS/yAxEv8mPRL/KEMS/yhDEv8oQxL/KEMS/yhDEv8oQxL/KEMS/yhDEv8oQxL/KEMS/yhDEv8oQxL/KEMS/ypHEv86ahL/VqQS/3XoEv+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/f/8R64D/E6yA/xNQcf8ACYD/AAR9/xAvgP8TfH//Ed6A/xL/gP8S/3/9Ev937BL/bNQS/2G8Ev9dtBL/XbMS/1mqEv8/chL/IjUS/xUaEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xMVEv8dLBL/OmoS/27YEv+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8R3H//E3Z9/xIrgP8ABP//AAF3/xEPfv8SR3//Eb+A/xLzgP8S/oD/Ev9//RL/fvsS/335Ev99+RL/ffkS/3ryEv9YqhL/MFQS/xkiEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8TFRL/KkcS/2nOEv+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev6A/xLzgP8Rvn7/Ekd3/xEP//8AAQAAAABV/wADgP8NJoD/EYSA/xLPgP8R+oD/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/335Ev9csxL/NF0S/xkkEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/KEMS/2nNEv+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/EfqA/xLPgP8RhID/DSZV/wADAAAAAAAAAAAAAAAAgP8QEIH/EkV//xKfgP8R64H/EvuA/xL/gP8S/4D/Ev+A/xL/gP8S/335Ev9ctBL/NV8S/xkkEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/KEMS/2nNEv+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gf8S+4D/Eet//xKfgf8SRYD/EBAAAAAAAAAAAAAAAAAAAAAAgP8ABID/GhR+/xRlf/8Rv4H/EeqB/xL7gP8S/4D/Ev+A/xL/gP8S/335Ev9hvBL/OmsS/x0qEv8SFBL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8SExL/EhMS/xITEv8UGRL/LU0S/2rQEv+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+B/xL7gf8R6n//Eb9+/xRlgP8aFID/AAQAAAAAAAAAAAAAAAAAAAAAAAAAAGb/AAWA/xUkgv8VYoD/EcCA/xLtgf8S/ID/Ev+A/xL/gP8S/377Ev9r1BL/TZIS/yhDEv8ZIhL/Fx0S/xcdEv8XHRL/Fx0S/xcdEv8XHRL/Fx0S/xcdEv8XHRL/Fx0S/xcdEv8XHRL/Fx0S/xcfEv8hMxL/PG0S/27ZEv+A/xL/gP8S/4D/Ev+A/xL/gP8S/4H/EvyA/xLtgP8RwIL/FWKA/xUkZv8ABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAFt/wAHgP8TKID/EnJ//xK7gP8S7YH/EvuA/xL/gP8S/3/9Ev937BL/aMwS/1OfEv9KjBL/SYgS/0iIEv9IiBL/SIgS/0iIEv9IiBL/SIgS/0iIEv9IiBL/SIgS/0iIEv9IiBL/SIgS/0mJEv9PlxL/X7gS/3fsEv+A/xL/gP8S/4D/Ev+A/xL/gf8S+4D/Eu1//xK7gP8ScoD/Eyht/wAHAP8AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wABgP8ACoP/EymA/xJygP8RwIH/EeqB/xL7gP8S/4D/Ev9//RL/fvsS/3z3Ev979RL/e/US/3v1Ev979RL/e/US/3v1Ev979RL/e/US/3v1Ev979RL/e/US/3v1Ev979RL/e/US/3v1Ev989hL/ffkS/3/9Ev+A/xL/gP8S/4D/Ev+B/xL7gf8R6oD/EcCA/xJyg/8TKYD/AAoA/wABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAYD/AAqA/xMogv8VYn//Eb+A/xHrgP8R+oD/Ev6A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/oD/EfqA/xHrf/8Rv4L/FWKA/xMogP8ACv//AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAFt/wAHgP8VJH7/FGV//xKfgP8Sz4D/EvOA/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S84D/Es9//xKffv8UZYD/FSRt/wAHAP8AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wABZv8ABYD/GhSB/xJFgP8RhID/Eb6A/xHcf/8R64D/EveA/xL9gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S/4D/Ev+A/xL/gP8S+4D/Ee1//xHef/8Rv4D/EYSB/xJFgP8aFGb/AAUA/wABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/AASA/xAQgP8NJn7/Ekd//xN2gP8Tq4H/Etp//xLwgP8R+IH/EvqA/xL8gP8S/YH/Ev6A/xL/gP8S/4D/Ev+A/xL/gf8S/oD/Ev2A/xL8gf8S+oD/EfmA/xL3gP8S5X//FLeA/xN8fv8SR4D/DSaA/xAQgP8ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVf8AA4D/Eg59/xIrgP8TUIH/EXV//xGXfv8RtID/EMmA/xLagP8S6YD/EvOB/xL6gP8S/4D/Ev+B/xL6gP8S84D/EumA/xLagP8SyYD/EbR//xCbgP8SfoD/EVh9/xAvd/8RD1X/AAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAGA/wAEcf8ACXX/FRh9/xA/gP8QcID/EZiA/xG5f/8S1YD/EeqA/xL2gf8S/oH/Ev6A/xL2gP8R6n//EtWA/xK5gP8SmID/EHB9/xA/gP8VGGb/AAqA/wAE//8AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
  type: "web3",
  user: "eip155:1:0x4245cd11b5a9E54F57bE19B643E564AA4Ee86D1b",
  workspace: "ws-499e41a8-c813-4d6a-aaa8-4ecf686e5e9d",
  access: "Private",
  contributor: "SAPikachu",
  description: "",
  triggersDescription: "",
  actionsDescription: "",
};

module.exports = cds;
