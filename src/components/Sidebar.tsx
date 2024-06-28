import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen">
      <ul className="space-y-2 py-4">
        <li className="pl-4 py-2 hover:bg-gray-700">
          <Link href="/" passHref className="block p-2">
            Wallet
          </Link>
        </li>
        <li className="pl-4 py-2 hover:bg-gray-700">
          <Link href="/mint" passHref className="block p-2">
            Mint
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
