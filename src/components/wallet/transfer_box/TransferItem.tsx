import React from "react";

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
    <ul className="flex flex-row divide-x-2 divide-gray-400 p-2">
      <div className="flex flex-1 flex-col gap-1">
        <ItemLabelValue
          label="From"
          value={from}
        />
        <ItemLabelValue label="To" value={to} />
      </div>
      <div className="flex flex-1 flex-col items-center">
        {value}
      </div>
    </ul>
  );
}

interface ItemLabelValueProps {
  label: string;
  value: string | undefined;
}

function ItemLabelValue({
  label,
  value,
}: ItemLabelValueProps) {
  return (
    <span className="text-sm">
      <span className="font-bold">{label}:</span>{" "}
      {value}
    </span>
  );
}
