import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Title: React.FC<LayoutProps> = ({
  children,
}) => {
  return (
    <h1 className="my-6 text-center text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
      {children}
    </h1>
  );
};

export default Title;
