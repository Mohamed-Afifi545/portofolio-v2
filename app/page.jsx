"use client";

import Blob from "@/_components/Blob";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

import avatarImage from "@/public/assets/avatar.png";
import Image from "next/image";
import Socials from "@/_components/Socials";
import Pattern from "@/_components/Pattern";
import Link from "next/link";

export default function Home() {
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
      className="h-screen flex items-center"
    >
      <Pattern />

      <div className="flex flex-col xl:flex-row items-center justify-between w-full ">
        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="h1 flex-1 mb-[28px]">
            {" "}
            HI! I'm MOHAMED
            <br />
            <TypeAnimation
              sequence={["Web Developer", 2000, "Web Designer", 2000]}
              wrapper="span"
              speed={40}
              className="text-accent"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="max-w-[500px] mb-[44px]">
            I build visually captivating, user-friendly websites and web apps
            that transform your ideas into seamless, engaging digital
            experiences.
          </p>

          <Link href={"/contact"} className="btn btn-lg btn-accent mb-16">
            <div className="flex items-center gap-3">
              <span>Let's talk</span>
              <MdArrowOutward className="text-xl" />
            </div>
          </Link>

          <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-8">
            <Link
              href="https://wa.me/+201061989545?text="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg"
            >
              <span className="text-accent">
                <FaWhatsapp
                  className="text-xl
                "
                />
              </span>
              <span>+20 1061989545</span>
            </Link>
            <Link
              href="mailto:mada2010545@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg"
            >
              <span className="text-accent">
                <HiOutlineMail
                  className="text-xl
                "
                />
              </span>
              <span>mada2010545@gmail.com</span>
            </Link>
          </div>
          <Socials
            containerStyles="flex 2xl:flex-col gap-6 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-10 2xl:transform 2xl:translate-x-1/2 2xl:-translate-y-1/2 "
            iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[40px] h-[40px] flex items-center justify-center rounded-full text-[22px] shadow-md hover:shadow-lg cursor-pointer"
          />
        </div>
        <div className="hidden xl:block flex-1 relative z-20">
          <Blob containerStyles="w-[560px] h-[560px]" />
          <Image
            src={avatarImage}
            width={440}
            height={600}
            alt="Avatar"
            quality={100}
            className="absolute -top-4 left-20 rounded-4xl "
          />
          <div className="w-full h-[220px] absolute bottom-10 left-0 right-0 bg-gradient-to-t from-primary via-primary/90"></div>
        </div>
      </div>
    </motion.section>
  );
}
