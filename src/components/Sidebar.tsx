import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="min-h-screen w-64 bg-gray-800 text-white">
      <ul className="space-y-2 py-4">
        <li className="py-2 pl-4 hover:bg-gray-700">
          <Link
            href="/"
            passHref
            className="block p-2"
          >
            Wallet
          </Link>
        </li>
        <li className="py-2 pl-4 hover:bg-gray-700">
          <Link
            href="/mint"
            passHref
            className="block p-2"
          >
            Mint
          </Link>
        </li>
      </ul>
    </div>
  );
}
