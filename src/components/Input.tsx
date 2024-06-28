import React from "react";

interface InputProps {
  type?: string;
  label?: string;
  value: string;
  onChange: (newValue: string) => void;
}

const Input = ({
  type,
  label,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="flex flex-col pb-1">
      <label className="mb-1 text-xs text-blue-800">
        {label}
      </label>

      <input
        type={type}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className="rounded border border-gray-400 p-1 shadow"
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
