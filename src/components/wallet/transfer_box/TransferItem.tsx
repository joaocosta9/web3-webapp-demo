import React from "react";
import { ITransferLog } from "../../../data/interfaces/transfersInterface";
import { Address } from "viem";

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
      <div className="flex flex-col gap-1">
        <ItemLabelValue
          label="From"
          value={from}
        />
        <ItemLabelValue label="To" value={to} />
      </div>
      <div className="flex flex-col items-center">
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
