/* eslint-disable @typescript-eslint/no-explicit-any */
// src/context/TransferContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { useWatchMockTokenTransferEvent } from "../../generated";
import { ITransferLog } from "../../data/interfaces/transfersInterface";
import {
  WatchContractEventOnLogsParameter,
  formatEther,
} from "viem";
import { useAccount } from "wagmi";

interface ITransferProviderProps {
  children: ReactNode;
}

interface TransferContextProps {
  transfers: ITransferLog[];
}

const TransferContext = createContext<
  TransferContextProps | undefined
>(undefined);

export default function TransferProvider({
  children,
}: ITransferProviderProps) {
  const { address, isConnected } = useAccount();
  const [transfers, setTransfers] = useState<
    ITransferLog[]
  >([]);

  const handleNewTransfer = useCallback(
    (logs: WatchContractEventOnLogsParameter) => {
      logs.forEach((event: any) => {
        console.log(event);
        const { from, to, value } = event.args;
        const { transactionIndex } = event;
        if (from === address || to === address) {
          setTransfers((prevTransfers) => [
            {
              transactionIndex,
              from,
              to,
              value: formatEther(value),
            },
            ...prevTransfers,
          ]);
        }
      });
    },
    [address],
  );

  useWatchMockTokenTransferEvent({
    enabled: true,
    onLogs: handleNewTransfer,
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <TransferContext.Provider
      value={{ transfers }}
    >
      {children}
    </TransferContext.Provider>
  );
}

export const useTransfer =
  (): TransferContextProps => {
    const context = useContext(TransferContext);
    if (!context) {
      throw new Error(
        "useTransfer must be used within a TransferProvider",
      );
    }
    return context;
  };
