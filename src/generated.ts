import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from "wagmi/codegen";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: "error",
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
      {
        name: "allowance",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "needed",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
  },
  {
    type: "error",
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
      },
      {
        name: "balance",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "needed",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
  },
  {
    type: "error",
    inputs: [
      {
        name: "approver",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
  },
  {
    type: "error",
    inputs: [
      {
        name: "receiver",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
  },
  {
    type: "error",
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
  },
  {
    type: "error",
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "from",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "to",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
  {
    type: "function",
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        internalType: "uint8",
        type: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        internalType: "string",
        type: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        internalType: "string",
        type: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "to",
        internalType: "address",
        type: "address",
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "from",
        internalType: "address",
        type: "address",
      },
      {
        name: "to",
        internalType: "address",
        type: "address",
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsAbi = [
  {
    type: "error",
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
      },
      {
        name: "balance",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "needed",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "ERC1155InsufficientBalance",
  },
  {
    type: "error",
    inputs: [
      {
        name: "approver",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC1155InvalidApprover",
  },
  {
    type: "error",
    inputs: [
      {
        name: "idsLength",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "valuesLength",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "ERC1155InvalidArrayLength",
  },
  {
    type: "error",
    inputs: [
      {
        name: "operator",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC1155InvalidOperator",
  },
  {
    type: "error",
    inputs: [
      {
        name: "receiver",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC1155InvalidReceiver",
  },
  {
    type: "error",
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC1155InvalidSender",
  },
  {
    type: "error",
    inputs: [
      {
        name: "operator",
        internalType: "address",
        type: "address",
      },
      {
        name: "owner",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC1155MissingApprovalForAll",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20Abi = [
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "from",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "to",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
  {
    type: "function",
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "to",
        internalType: "address",
        type: "address",
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "from",
        internalType: "address",
        type: "address",
      },
      {
        name: "to",
        internalType: "address",
        type: "address",
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsAbi = [
  {
    type: "error",
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
      {
        name: "allowance",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "needed",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
  },
  {
    type: "error",
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
      },
      {
        name: "balance",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "needed",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
  },
  {
    type: "error",
    inputs: [
      {
        name: "approver",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
  },
  {
    type: "error",
    inputs: [
      {
        name: "receiver",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
  },
  {
    type: "error",
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
  },
  {
    type: "error",
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataAbi = [
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "from",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "to",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
  {
    type: "function",
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        internalType: "uint8",
        type: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        internalType: "string",
        type: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        internalType: "string",
        type: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "to",
        internalType: "address",
        type: "address",
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "from",
        internalType: "address",
        type: "address",
      },
      {
        name: "to",
        internalType: "address",
        type: "address",
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsAbi = [
  {
    type: "error",
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "owner",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
  },
  {
    type: "error",
    inputs: [
      {
        name: "operator",
        internalType: "address",
        type: "address",
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
  },
  {
    type: "error",
    inputs: [
      {
        name: "approver",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
  },
  {
    type: "error",
    inputs: [
      {
        name: "operator",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
  },
  {
    type: "error",
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
  },
  {
    type: "error",
    inputs: [
      {
        name: "receiver",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
  },
  {
    type: "error",
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
  },
  {
    type: "error",
    inputs: [
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const mockTokenAbi = [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "error",
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
      {
        name: "allowance",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "needed",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
  },
  {
    type: "error",
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
      },
      {
        name: "balance",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "needed",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
  },
  {
    type: "error",
    inputs: [
      {
        name: "approver",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
  },
  {
    type: "error",
    inputs: [
      {
        name: "receiver",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
  },
  {
    type: "error",
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
  },
  {
    type: "error",
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "from",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "to",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
  {
    type: "function",
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        internalType: "uint8",
        type: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "mint",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        internalType: "string",
        type: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        internalType: "string",
        type: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "to",
        internalType: "address",
        type: "address",
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "from",
        internalType: "address",
        type: "address",
      },
      {
        name: "to",
        internalType: "address",
        type: "address",
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
] as const;

/**
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const mockTokenAddress = {
  31337:
    "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  84532:
    "0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991",
} as const;

/**
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const mockTokenConfig = {
  address: mockTokenAddress,
  abi: mockTokenAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Todos
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xE97dD088aEFFC18723609A0D57f830d0B69f940e)
 */
export const todosAbi = [
  {
    type: "function",
    inputs: [
      {
        name: "_text",
        internalType: "string",
        type: "string",
      },
    ],
    name: "addTodo",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "_index",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "getTodo",
    outputs: [
      {
        name: "",
        internalType: "struct Todos.Todo",
        type: "tuple",
        components: [
          {
            name: "text",
            internalType: "string",
            type: "string",
          },
          {
            name: "completed",
            internalType: "bool",
            type: "bool",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "todos",
    outputs: [
      {
        name: "text",
        internalType: "string",
        type: "string",
      },
      {
        name: "completed",
        internalType: "bool",
        type: "bool",
      },
    ],
    stateMutability: "view",
  },
] as const;

/**
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xE97dD088aEFFC18723609A0D57f830d0B69f940e)
 */
export const todosAddress = {
  31337:
    "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  84532:
    "0xE97dD088aEFFC18723609A0D57f830d0B69f940e",
} as const;

/**
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xE97dD088aEFFC18723609A0D57f830d0B69f940e)
 */
export const todosConfig = {
  address: todosAddress,
  abi: todosAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20Abi,
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20Abi,
    functionName: "allowance",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20Abi,
    functionName: "balanceOf",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20Abi,
    functionName: "decimals",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20Abi,
    functionName: "name",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20Abi,
    functionName: "symbol",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20Abi,
    functionName: "totalSupply",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20Abi,
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20Abi,
    functionName: "approve",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20Abi,
    functionName: "transfer",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20Abi,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: "approve",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: "transfer",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: "Approval",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: "Transfer",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useReadIerc20 =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20Abi,
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20Allowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20Abi,
    functionName: "allowance",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20BalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20Abi,
    functionName: "balanceOf",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20TotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20Abi,
    functionName: "totalSupply",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWriteIerc20 =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20Abi,
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20Approve =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20Abi,
    functionName: "approve",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20Transfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20Abi,
    functionName: "transfer",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20Abi,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useSimulateIerc20 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: "approve",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: "transfer",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWatchIerc20Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
    eventName: "Approval",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
    eventName: "Transfer",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useReadIerc20Metadata =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20MetadataAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: "allowance",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: "balanceOf",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadIerc20MetadataDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: "decimals",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc20MetadataName =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: "name",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc20MetadataSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: "symbol",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20MetadataTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: "totalSupply",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWriteIerc20Metadata =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: "approve",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20MetadataTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: "transfer",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useSimulateIerc20Metadata =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: "approve",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20MetadataTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: "transfer",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWatchIerc20MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: "Approval",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: "Transfer",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockTokenAbi}__
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useReadMockToken =
  /*#__PURE__*/ createUseReadContract({
    abi: mockTokenAbi,
    address: mockTokenAddress,
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useReadMockTokenAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: mockTokenAbi,
    address: mockTokenAddress,
    functionName: "allowance",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useReadMockTokenBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: mockTokenAbi,
    address: mockTokenAddress,
    functionName: "balanceOf",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useReadMockTokenDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: mockTokenAbi,
    address: mockTokenAddress,
    functionName: "decimals",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"name"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useReadMockTokenName =
  /*#__PURE__*/ createUseReadContract({
    abi: mockTokenAbi,
    address: mockTokenAddress,
    functionName: "name",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useReadMockTokenSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: mockTokenAbi,
    address: mockTokenAddress,
    functionName: "symbol",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useReadMockTokenTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: mockTokenAbi,
    address: mockTokenAddress,
    functionName: "totalSupply",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockTokenAbi}__
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useWriteMockToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockTokenAbi,
    address: mockTokenAddress,
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"approve"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useWriteMockTokenApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockTokenAbi,
    address: mockTokenAddress,
    functionName: "approve",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"mint"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useWriteMockTokenMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockTokenAbi,
    address: mockTokenAddress,
    functionName: "mint",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useWriteMockTokenTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockTokenAbi,
    address: mockTokenAddress,
    functionName: "transfer",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useWriteMockTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockTokenAbi,
    address: mockTokenAddress,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockTokenAbi}__
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useSimulateMockToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockTokenAbi,
    address: mockTokenAddress,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"approve"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useSimulateMockTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockTokenAbi,
    address: mockTokenAddress,
    functionName: "approve",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"mint"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useSimulateMockTokenMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockTokenAbi,
    address: mockTokenAddress,
    functionName: "mint",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useSimulateMockTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockTokenAbi,
    address: mockTokenAddress,
    functionName: "transfer",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useSimulateMockTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockTokenAbi,
    address: mockTokenAddress,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockTokenAbi}__
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useWatchMockTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockTokenAbi,
    address: mockTokenAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useWatchMockTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockTokenAbi,
    address: mockTokenAddress,
    eventName: "Approval",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991)
 */
export const useWatchMockTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockTokenAbi,
    address: mockTokenAddress,
    eventName: "Transfer",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link todosAbi}__
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xE97dD088aEFFC18723609A0D57f830d0B69f940e)
 */
export const useReadTodos =
  /*#__PURE__*/ createUseReadContract({
    abi: todosAbi,
    address: todosAddress,
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link todosAbi}__ and `functionName` set to `"getTodo"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xE97dD088aEFFC18723609A0D57f830d0B69f940e)
 */
export const useReadTodosGetTodo =
  /*#__PURE__*/ createUseReadContract({
    abi: todosAbi,
    address: todosAddress,
    functionName: "getTodo",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link todosAbi}__ and `functionName` set to `"todos"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xE97dD088aEFFC18723609A0D57f830d0B69f940e)
 */
export const useReadTodosTodos =
  /*#__PURE__*/ createUseReadContract({
    abi: todosAbi,
    address: todosAddress,
    functionName: "todos",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link todosAbi}__
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xE97dD088aEFFC18723609A0D57f830d0B69f940e)
 */
export const useWriteTodos =
  /*#__PURE__*/ createUseWriteContract({
    abi: todosAbi,
    address: todosAddress,
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link todosAbi}__ and `functionName` set to `"addTodo"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xE97dD088aEFFC18723609A0D57f830d0B69f940e)
 */
export const useWriteTodosAddTodo =
  /*#__PURE__*/ createUseWriteContract({
    abi: todosAbi,
    address: todosAddress,
    functionName: "addTodo",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link todosAbi}__
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xE97dD088aEFFC18723609A0D57f830d0B69f940e)
 */
export const useSimulateTodos =
  /*#__PURE__*/ createUseSimulateContract({
    abi: todosAbi,
    address: todosAddress,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link todosAbi}__ and `functionName` set to `"addTodo"`
 *
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xE97dD088aEFFC18723609A0D57f830d0B69f940e)
 */
export const useSimulateTodosAddTodo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: todosAbi,
    address: todosAddress,
    functionName: "addTodo",
  });
