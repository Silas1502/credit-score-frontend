import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-blue-600 text-white p-4 flex gap-6">
      <Link href="/">Trang chủ</Link>
      <Link href="/apply">Nộp đơn vay</Link>
      <Link href="/history">Lịch sử</Link>
    </div>
  );
}