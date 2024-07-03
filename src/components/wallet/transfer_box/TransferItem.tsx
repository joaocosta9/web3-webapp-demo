import React from "react";
import ItemLabelValue from "../../ItemLabelValue";

interface ITransferItem {
  from: string;
  to: string;
  value: string | undefined;
}

export default function TransferItem({
  from,
  to,
  value,
}: ITransferItem) {
  return (
    <ul className="flex flex-row divide-x-2 divide-gray-400 border-t-2 p-2">
      <div className="flex flex-1 flex-col gap-1">
        <ItemLabelValue
          label="From"
          value={from}
        />
        <ItemLabelValue label="To" value={to} />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <ItemLabelValue
          label="Amount"
          value={value}
          className="text-lg"
        />
      </div>
    </ul>
  );
}
