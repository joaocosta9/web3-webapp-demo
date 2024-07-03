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
      className={`flex w-fit flex-1 flex-col justify-center rounded-lg border border-gray-300 px-8 py-9 shadow ${extraStyles}`}
    >
      {children}
    </div>
  );
};

export default Box;
