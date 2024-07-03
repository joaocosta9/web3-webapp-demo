import { twMerge } from "tailwind-merge";

interface ItemLabelValueProps {
  label: string;
  value: string | undefined;
  className?: string;
}

export default function ItemLabelValue({
  label,
  value,
  className,
}: ItemLabelValueProps) {
  console.log(className);
  return (
    <span
      className={twMerge(
        "text-sm",
        `${className}`,
      )}
    >
      <span className="font-bold">{label}:</span>{" "}
      {value}
    </span>
  );
}
