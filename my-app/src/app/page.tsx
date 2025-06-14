import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-4 mt-10 ml-6">

      <Link href="/gaming"> Gaming</Link>
      <Link href="/layout-prac"> Layout_Practice</Link>
     
    </div>
  );
}
