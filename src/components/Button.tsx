import React from "react";
import LoadingSpinner from "./LoadingSpinner";

interface Button {
  children: React.ReactNode;
  onClick: () => void;
  isDisabled?: boolean;
  isPending?: boolean;
}

const Button = ({
  children,
  onClick,
  isDisabled = false,
  isPending = false,
}: Button) => {
  return (
    <button
      disabled={isDisabled || isPending}
      onClick={onClick}
      className={`h-8 rounded bg-blue-800 px-2 text-sm text-white ${(isPending || isDisabled) && "opacity-45"}`}
    >
      {isPending ? <LoadingSpinner /> : children}
    </button>
  );
};
export default Button;
