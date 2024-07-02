// // pages/token.tsx
// import React, {
//   useState,
//   useCallback,
// } from "react";
// import { useAccount } from "wagmi";
// // import { ethers } from "ethers";
// import {
//   useReadMockTokenBalanceOf,
//   useReadMockTokenTotalSupply,
//   useWatchMockTokenTransferEvent,
//   useWriteMockTokenTransfer,
// } from "../generated";
// import { formatUnits, parseUnits } from "viem";

// const TokenPage: React.FC = () => {
//   const { address } = useAccount();
//   const [transfers, setTransfers] = useState<
//     { from: string; to: string; amount: string }[]
//   >([]);
//   const [recipient, setRecipient] =
//     useState<string>("");
//   const [amount, setAmount] =
//     useState<string>("");

//   const { data: balance } =
//     useReadMockTokenBalanceOf({
//       args: [address],
//     });

//   const { data: totalSupply } =
//     useReadMockTokenTotalSupply();

//   const handleNewTransfer = useCallback(
//     (logs) => {
//       logs.forEach((event) => {
//         const { from, to, value } = event.args;
//         if (from === address || to === address) {
//           setTransfers((prev) => [
//             ...prev,
//             {
//               from,
//               to,
//               amount: value.toString(),
//             },
//           ]);
//         }
//       });
//     },
//     [address],
//   );

//   useWatchMockTokenTransferEvent({
//     onLogs: handleNewTransfer,
//   });

//   const {
//     write: transfer,
//     isLoading: isTransferring,
//   } = useWriteMockTokenTransfer();

//   const handleTransfer = async (
//     e: React.FormEvent,
//   ) => {
//     e.preventDefault();
//     if (!recipient || !amount) return;

//     const parsedAmount = parseUnits(amount, 18);
//     try {
//       await transfer({
//         args: [recipient, parsedAmount],
//       });
//       setRecipient("");
//       setAmount("");
//     } catch (error) {
//       console.error("Transfer failed", error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="mb-4 text-3xl font-bold">
//         MockToken Dashboard
//       </h1>
//       <div className="mb-4">
//         <h2 className="text-2xl">Your Balance</h2>
//         <p>
//           {balance
//             ? formatUnits(balance, 18)
//             : "Loading..."}{" "}
//           MockToken
//         </p>
//       </div>
//       <div className="mb-4">
//         <h2 className="text-2xl">Total Supply</h2>
//         <p>
//           {totalSupply
//             ? formatUnits(totalSupply, 18)
//             : "Loading..."}{" "}
//           MockToken
//         </p>
//       </div>
//       <div className="mb-4">
//         <h2 className="text-2xl">
//           Transfer Tokens
//         </h2>
//         <form onSubmit={handleTransfer}>
//           <div className="mb-2">
//             <label className="block text-sm font-medium text-gray-700">
//               Recipient Address
//             </label>
//             <input
//               type="text"
//               value={recipient}
//               onChange={(e) =>
//                 setRecipient(e.target.value)
//               }
//               className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               required
//             />
//           </div>
//           <div className="mb-2">
//             <label className="block text-sm font-medium text-gray-700">
//               Amount
//             </label>
//             <input
//               type="number"
//               value={amount}
//               onChange={(e) =>
//                 setAmount(e.target.value)
//               }
//               className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white"
//             disabled={isTransferring}
//           >
//             {isTransferring
//               ? "Transferring..."
//               : "Transfer"}
//           </button>
//         </form>
//       </div>
//       <div>
//         <h2 className="text-2xl">Transfers</h2>
//         <ul>
//           {transfers.map((transfer, index) => (
//             <li key={index}>
//               {transfer.from} → {transfer.to}:{" "}
//               {formatUnits(transfer.amount, 18)}{" "}
//               MockToken
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TokenPage;
