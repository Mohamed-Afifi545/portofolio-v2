"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { MdArrowRightAlt, MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

const services = [
  {
    icon: "/assets/services/design.svg",
    href: "/work",
    title: "Website Interface Design",
  },
  {
    icon: "/assets/services/frontend.svg",
    href: "/work",
    title: "Frontend Development",
  },
  {
    icon: "/assets/services/seo.svg",
    href: "/work",
    title: "Search Engine Optimization",
  },
  {
    icon: "/assets/services/video.svg",
    href: "/work",
    title: "Video Editing",
  },
];

export default function Services() {
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
      <div className="container mx-auto w-full flex flex-col gap-16 ">
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
          <h2 className="h2 max-w-[480px] text-left xl:mb-0  ">
            Custom <span className="text-accent">Web Solutions</span> To Boost
            Your Business
          </h2>
          <Link
            href={"/work"}
            className=" btn btn-lg btn-accent flex gap-2 cursor-pointer"
          >
            All Services <MdArrowRightAlt className="text-2xl" />
          </Link>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          className="h-[320px]"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-secondary/90 w-full h-[284px] rounded-[20px] px-[30px] py-[40px] flex flex-col justify-between ">
                <div className="flex items-center justify-between mb-12 ">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                  />
                  <Link
                    href={"/contact"}
                    className="w-12 h-12 bg-accent rounded-full flex items-center justify-center cursor-pointer text-2xl hover:rotate-45 transition-all "
                  >
                    <MdOutlineArrowOutward />
                  </Link>
                </div>
                <h5 className="text-[22px] text-center font-medium max-w-[240px]">
                  {service.title}
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}
