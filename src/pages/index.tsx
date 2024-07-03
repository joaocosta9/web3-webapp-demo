import { useAccount } from "wagmi";
import Title from "../components/Title";
import {
  useReadMockTokenBalanceOf,
  useReadMockTokenTotalSupply,
} from "../generated";
import { formatEther } from "viem";
import Box from "../components/Box";
import TransferBox from "../components/wallet/transfer_box/TransferBox";
import ItemLabelValue from "../components/ItemLabelValue";

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
        <Box className="gap-4">
          <ItemLabelValue
            className="text-md"
            label="Total Supply"
            value={
              totalSupply !== undefined
                ? formatEther(totalSupply)
                : "Unkown"
            }
          />
          <ItemLabelValue
            className="text-md"
            label="My Balance"
            value={
              balance !== undefined
                ? formatEther(balance)
                : "Unkown"
            }
          />
        </Box>
        <TransferBox />
      </div>
    </div>
  );
};

export default MyWallet;
