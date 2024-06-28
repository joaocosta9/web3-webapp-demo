import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Title: React.FC<LayoutProps> = ({ children }) => {
  return (
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 my-6">
      {children}
    </h1>
  );
};

export default Title;
