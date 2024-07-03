import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Title({
  children,
}: LayoutProps) {
  return (
    <h1 className="my-6 text-center text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
      {children}
    </h1>
  );
}
