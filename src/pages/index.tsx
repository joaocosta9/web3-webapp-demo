import { ConnectButton } from "@rainbow-me/rainbowkit";
import Title from "../components/Title";

const MyWallet = () => {
  return (
    <div className="flex flex-col justify-center">
      <Title>Wallet</Title>
      <ConnectButton />
    </div>
  );
};

export default MyWallet;
