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
      <label className="mb-1 text-blue-800 text-xs">
        {label}
      </label>

      <input
        type={type}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className="p-1 shadow rounded border border-gray-400"
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
