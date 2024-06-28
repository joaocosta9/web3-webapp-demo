import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

export default function TopBar() {
  return (
    <div className="flex w-full justify-center bg-gray-800 p-4">
      <ConnectButton />
    </div>
  );
}
