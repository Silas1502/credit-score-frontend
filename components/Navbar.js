import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-blue-600 text-white p-4 flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/apply">Apply Loan</Link>
      <Link href="/history">History</Link>
    </div>
  );
}