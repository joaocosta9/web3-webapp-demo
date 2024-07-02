import { Address } from "viem";

interface ITransferLog {
  transactionIndex: string;
  from: Address;
  to: Address;
  value: string | undefined;
}

export type { ITransferLog };
