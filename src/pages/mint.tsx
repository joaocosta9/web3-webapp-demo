import React, { useState } from "react";
import Title from "../components/Title";
import { useWriteMockTokenMint } from "../generated";
import Box from "../components/Box";
import Button from "../components/Button";

import { useAccount } from "wagmi";

export default function ExternalWallet() {
  const { address } = useAccount();
  console.log(address);

  const {
    writeContractAsync,
    data,
    error,
    isPending,
  } = useWriteMockTokenMint();

  const submitMint = () => {
    if (address != undefined) {
      writeContractAsync({
        address:
          "0x5fbdb2315678afecb367f032d93f642f64180aa3",
      })
        .then(() =>
          alert(
            `Successfully minted to ${address} `,
          ),
        )
        .catch((error) => console.log(error));
    } else {
      alert("Invalid address");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Title>Mint</Title>
      <Box extraStyles="gap-8">
        <Button
          disabled={isPending}
          onClick={() => submitMint()}
        >
          SEND
        </Button>
      </Box>
    </div>
  );
}
