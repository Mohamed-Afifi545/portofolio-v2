"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import Socials from "@/_components/Socials";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Mohamed Afifi";
  }, [document.title]);

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xyzjprke", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    setLoading(false);
    if (res.ok) {
      router.push("/thankyou");
    } else {
      alert("Failed to send message.");
    }
  }

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
      className="h-screen flex items-center py-24 xl:py-0
       "
    >
      <div className="container mx-auto w-full h-[90%] flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible ">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6 ">
            <div className="flex-1 xl:w-[600px] flex flex-col gap-12 ">
              <div>
                <h2 className="h2 mb-4">
                  Get in <span className="text-accent">Touch</span>
                </h2>
                <p className="max-w-[460px]">
                  If you have a project in mind or need any of my services, feel
                  free to send me a message using the form. I'll get back to you
                  as soon as possible!
                </p>
              </div>
              <div className="flex flex-col gap-4 xl:gap-8 mb-6 xl:mb-0">
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlinePhone className="text-2xl" />
                  </span>
                  <span>+20 1061989545</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMail className="text-2xl" />
                  </span>
                  <span>mada2010545@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMapPin className="text-2xl" />
                  </span>
                  <span>Cairo, Egypt</span>
                </div>
                <Socials
                  containerStyles="hidden xl:flex gap-4 z-40 w-max transform translate-x-[80px]"
                  iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[40px] h-[40px] flex items-center justify-center rounded-full text-[22px] shadow-md hover:shadow-lg cursor-pointer"
                />
              </div>
            </div>
            <div className="flex-1">
              <form
                onSubmit={handleSubmit}
                name="contact"
                className="flex flex-col gap-6 items-start"
              >
                <div className="flex flex-col xl:flex-row gap-6 w-full ">
                  <div className="w-full  ">
                    <Label htmlFor="name">
                      Firstname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="name">
                      Lastname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="lastname"
                      type="text"
                      name="lastname"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
                <div className="w-full  ">
                  <Label htmlFor="name">
                    Email <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="youremail@gmail.com"
                    required
                  />
                </div>
                <div className="w-full">
                  <Label htmlFor="name">
                    I'm interested in <span className="text-accent">*</span>
                  </Label>
                  <Select type="select" name="service" required>
                    <SelectTrigger
                      id="service"
                      className="w-full !h-12 bg-white/5 border-white/10 px-4"
                    >
                      <SelectValue placeholder="Choose here" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="webdev">Web Development</SelectItem>
                      <SelectItem value="uiux">UI & UX Design</SelectItem>
                      <SelectItem value="video">Video Editing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full">
                  <Label htmlFor="name">
                    Message <span className="text-accent">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    type="text"
                    name="message"
                    maxLength={1000}
                    placeholder="Write your message.."
                    className="xl:max-w-[523px] min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white "
                  />
                </div>
                <button type="submit" className="btn btn-lg btn-accent ">
                  <div className="flex items-center gap-3">
                    <span className="font-medium ">Send message</span>
                    <HiOutlineArrowLongRight className="text-xl" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
