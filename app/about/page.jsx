"use client";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Stats from "@/_components/Stats";
import Testimonials from "@/_components/Testimonials";
import Info from "@/_components/Info";
import Journey from "@/_components/Journey";
import Skills from "@/_components/Skills";
import Blob from "@/_components/Blob";
import Socials from "@/_components/Socials";

export default function About() {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto h-[90%] flex flex-col justify-center items-center px-0 ">
        <div className="flex flex-col xl:flex-row items-center gap-28 w-full h-[690px]">
          <div className="hidden flex-col gap-20  xl:flex w-full h-full pt-14 max-w-[430px] relative mt-32 ">
            <Image
              src="/assets/avatar.png"
              width={320}
              height={496}
              alt="Avatar"
              className="z-20 relative top-[26px] rounded-4xl"
            />
            <div className="w-[350px] h-[60px] absolute left-0 top-[360px] right-0 bg-gradient-to-t from-primary via-primary/90 z-30 "></div>
            <div className="absolute top-[30px] -left-15 z-10 ">
              <Blob containerStyles="w-[420px] h-[420px] " />
            </div>
            <Socials
              containerStyles="flex gap-4 z-40 w-max transform translate-x-[80px]"
              iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[40px] h-[40px] flex items-center justify-center rounded-full text-[22px] shadow-md hover:shadow-lg cursor-pointer"
            />
          </div>
          <ScrollArea className="w-full mt-11 lg:mt-0 h-[600px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p className="text-xl">About me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Mohamed</span> Afifi
              </h2>
              <p className="max-w-[540px] mb-12">
                I focus on crafting visually stunning, user-friendly web
                experiences that not only look great but also function
                seamlessly. With a keen eye for design and a passion for coding,
                I bring ideas to life through innovative web solutions, ensuring
                every detail is carefully designed and executed to perfection.
              </p>
              <div className="flex flex-col items-start gap-16">
                <Stats />
                <Testimonials />
                <Info />
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
}
