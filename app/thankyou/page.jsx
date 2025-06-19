"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.title = "Thank You!";
  }, [document.title]);

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
    >
      <div className="flex flex-col h-[500px] gap-10 justify-center items-center text-center space-y-6 mt-4">
        <h1 className="text-3xl font-semibold">Thank you for your Message!</h1>
        <Link
          href="/"
          className="underline text-xl text-accent-500 inline-block"
        >
          Back to Homepage &rarr;
        </Link>
      </div>
    </motion.section>
  );
}
