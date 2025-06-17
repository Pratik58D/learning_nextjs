import Link from "next/link";
import { Bebas_Neue } from "next/font/google";

const bebasFont = Bebas_Neue({
  subsets : ['latin'],
  weight : "400"

})

export default function Home() {
  return (
    <div className={`${bebasFont.className} flex gap-4 mt-10 ml-6`}>
      <Link href="/gaming"> Gaming</Link>
      <Link href="/layout-prac"> Layout_Practice</Link>
     
    </div>
  );
}
