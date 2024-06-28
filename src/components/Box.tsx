import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  extraStyles?: string;
}
const Box: React.FC<LayoutProps> = ({
  children,
  extraStyles,
}) => {
  return (
    <div
      className={`rounded flex flex-col justify-center shadow border w-fit border-gray-300 py-9 px-8 ${extraStyles}`}
    >
      {children}
    </div>
  );
};

export default Box;
