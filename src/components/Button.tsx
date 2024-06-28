import React from "react";

interface Button {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
}

const Button = ({
  children,
  onClick,
  disabled = false,
}: Button) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="bg-blue-800 rounded px-2 py-1 text-white text-sm"
    >
      {children}
    </button>
  );
};
export default Button;
