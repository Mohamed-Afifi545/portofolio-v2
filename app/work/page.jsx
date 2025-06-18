"use client";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    category: "Frontend",
    title: "The Wild Oasis Website",
    description: "A modern website for a fictional travel agency.",
    image: "/assets/work/thumb1.png",
    link: "https://wild-oasis-website-afifi.netlify.app",
    github: "",
    tech: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    category: "Frontend",
    title: "The ",
    description: "A modern website for a fictional travel agency.",
    image: "/assets/work/thumb1.png",
    link: "https://the-wild-oasis.com",
    github: "",
    tech: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 3,
    category: "Frontend",
    title: "The Wild ",
    description: "A modern website for a fictional travel agency.",
    image: "/assets/work/thumb1.png",
    link: "https://the-wild-oasis.com",
    github: "",
    tech: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 4,
    category: "Full-stack",
    title: " Oasis Website",
    description: "A modern website for a fictional travel agency.",
    image: "/assets/work/thumb1.png",
    link: "https://the-wild-oasis.com",
    github: "",
    tech: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 5,
    category: "Full-stack",
    title: " Website",
    description: "A modern website for a fictional travel agency.",
    image: "/assets/work/thumb1.png",
    link: "https://the-wild-oasis.com",
    github: "",
    tech: ["React", "Next.js", "Tailwind CSS"],
  },
];

const categories = ["Frontend", "Full-stack"];

export default function Work() {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0 "
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center ">
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px] ">
          My Latest <span className="text-accent">Projects</span>
        </h2>
        <Tabs
          defaultValue="Frontend"
          className="w-full flex flex-col gap-6 xl:gap-12 "
        >
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="capitalize border border-white/20 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer "
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible ">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination]}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    slidesPerView={1.1}
                    spaceBetween={1}
                    className="h-max xl:h-[460px] "
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => (
                        <SwiperSlide key={project.id} className="h-full ">
                          <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 mx-5 rounded-2xl border-2 border-accent/60 bg-secondary/80 shadow-lg transition-all duration-300 hover:border-accent">
                            <div className="w-full max-w-[350px] flex flex-col gap-6 xl:gap-8 xl:pt-6 pl-6 pb-6 order-2 xl:order-none ">
                              <h3 className="h3">{project.title}</h3>
                              <div className="xl:mb-4 max-w-[300px] min-h-[130px] ">
                                <p className="mb-4">Technologies Used</p>
                                <ul className="flex flex-wrap gap-4 ">
                                  {project.tech.map((item, index) => {
                                    return (
                                      <li
                                        key={index}
                                        className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full "
                                      >
                                        {item}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                              <div className="flex flex-col sm:flex-row gap-4 items-start ">
                                <Link href={project.link}>
                                  <button className="btn btn-sm btn-accent flex gap-x-[5px] ">
                                    <MdArrowOutward className="text-lg " />
                                    <span>Live Project</span>
                                  </button>
                                </Link>
                                <Link href={project.github}>
                                  <button className="btn btn-sm btn-white flex gap-2 ">
                                    <FaGithub className="text-lg " />
                                    <span>Github Repo</span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                            <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative order-1 xl:order-none rounded-lg overflow-hidden  ">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-center"
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}
