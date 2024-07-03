import Box from "../../Box";
import { useTransfer } from "../../context/TransferListenerContext";
import TransferItem from "./TransferItem";
import { Address } from "viem";

export default function TransferBox() {
  const { transfers } = useTransfer();
  return (
    <Box title="Transfers">
      {transfers &&
        transfers.map((transfer) => (
          <TransferItem
            key={transfer.transactionIndex}
            from={truncateHex(transfer.from)}
            to={truncateHex(transfer.to)}
            value={transfer.value}
          />
        ))}
    </Box>
  );
}

export function truncateHex(
  address: Address,
): string {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}
