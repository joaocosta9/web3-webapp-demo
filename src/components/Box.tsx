import React from "react";
import { twMerge } from "tailwind-merge";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}
export default function Box({
  children,
  className,
  title,
}: LayoutProps) {
  return (
    <div
      className={twMerge(
        "m-2 flex w-fit min-w-80 flex-1 flex-col justify-center rounded-lg border border-gray-300 px-8 py-4 shadow",
        `${className}`,
      )}
    >
      {title && (
        <h1 className="pb-2 text-center text-lg font-bold">
          {title}
        </h1>
      )}
      {children}
    </div>
  );
}
