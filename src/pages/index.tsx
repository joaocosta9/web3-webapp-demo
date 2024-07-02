import { useAccount } from "wagmi";
import Title from "../components/Title";
import {
  useReadMockTokenBalanceOf,
  useReadMockTokenTotalSupply,
} from "../generated";
import { formatEther } from "viem";
import Box from "../components/Box";
import TransferBox from "../components/wallet/transfer_box/TransferBox";

const MyWallet = () => {
  const { isConnected, address } = useAccount();

  const { data: totalSupply } =
    useReadMockTokenTotalSupply();

  const { data: balance } =
    useReadMockTokenBalanceOf({
      args: [address ?? "0x0"],
    });

  console.log(balance);

  if (!isConnected) {
    return <h1>Please Connect to your wallet</h1>;
  }

  if (totalSupply)
    console.log(
      "total supply " + formatEther(totalSupply),
    );

  return (
    <div className="flex flex-col justify-center">
      <Title>Wallet - Mock Token</Title>
      <div className="flex flex-row justify-evenly">
        <Box>
          <span className="text-sm text-black">
            Total Supply:{" "}
            {totalSupply
              ? formatEther(totalSupply)
              : "Unkown"}
          </span>
          <span className="text-sm text-black">
            My balance:{" "}
            {balance
              ? formatEther(balance)
              : "Unkown"}
          </span>
        </Box>
        {/* <TransferBox address={address} /> */}
      </div>
    </div>
  );
};

export default MyWallet;
