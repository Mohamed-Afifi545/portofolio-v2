import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-[28px] font-normal">
      Afifi<span className="text-accent text-4xl">.</span>
    </Link>
  );
}
