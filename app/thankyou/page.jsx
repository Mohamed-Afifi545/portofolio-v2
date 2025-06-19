import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col h-[500px] gap-10 justify-center items-center text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">Thank you for your Message!</h1>
      <Link href="/" className="underline text-xl text-accent-500 inline-block">
        Back to Homepage &rarr;
      </Link>
    </div>
  );
}
