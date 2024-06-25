import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import { useAccount } from "wagmi";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const { address } = useAccount();

  return <div className="flex">My wallet</div>;
};

export default Home;
