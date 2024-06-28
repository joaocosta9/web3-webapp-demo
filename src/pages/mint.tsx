import React from "react";
import Title from "../components/Title";
import { useWriteMockTokenMint } from "../generated";
import Box from "../components/Box";
import Button from "../components/Button";

import { useAccount } from "wagmi";

export default function Mint() {
  const { address, isConnected } = useAccount();

  const { writeContractAsync, isPending } =
    useWriteMockTokenMint();

  const submitMint = () => {
    writeContractAsync({})
      .then(() =>
        alert(
          `Successfully minted to ${address} `,
        ),
      )
      .catch((error) => {
        console.log(error);
        alert("Something went wrong");
      });
  };

  return (
    <div className="flex flex-col items-center">
      <Title>Mint</Title>
      <Box extraStyles="w-80 gap-8">
        {isConnected ? (
          <>
            <span className="text-center text-xs">
              Mint 5 Tokens to the currently
              connect account by clicking the
              button below.
            </span>
            <Button
              isPending={isPending}
              onClick={() => submitMint()}
            >
              MINT
            </Button>
          </>
        ) : (
          <span className="text-center text-sm">
            To be able to mint tokens you first
            need to connect an account
          </span>
        )}
      </Box>
    </div>
  );
}
