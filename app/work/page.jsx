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
    category: "Full-stack",
    title: "The Wild Oasis Website",
    image: "/assets/work/thumb1.png",
    link: "https://wild-oasis-website-afifi.netlify.app",
    github: "https://github.com/Mohamed-Afifi545/the-wild-oasis-website",
    tech: ["React.js", "Next.js", "Tailwind CSS", "Supabase"],
  },
  {
    id: 2,
    category: "Full-stack",
    title: "The Wild Oasis Dashboard",
    image: "/assets/work/thumb2.png",
    link: "https://wild-oasis-afifi.netlify.app",
    github: "https://github.com/Mohamed-Afifi545/the-wild-oasis",
    tech: ["React.js", "Tailwind CSS", "Supabase"],
  },
  {
    id: 3,
    category: "Frontend",
    title: "MG-Builders",
    image: "/assets/work/thumb3.png",
    link: "https://mg-builders-v343434.netlify.app",
    github: "https://github.com/Mohamed-Afifi545/mg-builders",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    category: "Frontend",
    title: "Forkify",
    image: "/assets/work/thumb4.png",
    link: "https://forkify-afifi.netlify.app",
    github: "https://github.com/Mohamed-Afifi545/forkify",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    category: "Frontend",
    title: "OmniFood",
    image: "/assets/work/thumb5.png",
    link: "https://omnifood-afifi.netlify.app",
    github: "https://github.com/Mohamed-Afifi545/omnifood",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    category: "Frontend",
    title: "Fast Pizza",
    image: "/assets/work/thumb6.png",
    link: "https://pizza-afifi.netlify.app/",
    github: "https://github.com/Mohamed-Afifi545/fast-react-pizza2",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 7,
    category: "Frontend",
    title: "Natours",
    image: "/assets/work/thumb7.png",
    link: "https://natours-afifi.netlify.app",
    github: "https://github.com/Mohamed-Afifi545/natours",
    tech: ["HTML", "CSS", "JavaScript"],
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
          delay: 0.3,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="h-screen flex items-center "
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center ">
        <h2 className="h3 mb-5 xl:mb-12 max-w-[600px] ">
          My Latest <span className="text-accent">Projects</span>
        </h2>
        <Tabs
          defaultValue="Frontend"
          className="w-full flex flex-col gap-6 xl:gap-12 "
        >
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-2 xl:mb-0">
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
          <div className="h-max  xl:overflow-y-visible ">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    slidesPerView={1.1}
                    spaceBetween={20}
                    autoplay={{
                      delay: 2500,
                      pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    className="h-max xl:h-[460px] "
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => (
                        <SwiperSlide key={project.id} className="h-full">
                          <div className="flex flex-col xl:flex-row gap-4 xl:gap-12 rounded-2xl border-2 border-accent/60 bg-secondary/80 shadow-lg transition-all duration-300 hover:border-accent">
                            <div className="w-full max-w-[350px] flex flex-col gap-2 xl:gap-5 xl:pt-6 pl-6 pb-6 order-2 xl:order-none justify-between">
                              <h3 className="h3">{project.title}</h3>
                              <div className="xl:mb-2 max-w-[300px] min-h-fit ">
                                <p className="mb-4">Technologies Used:</p>
                                <ul className="flex flex-wrap gap-3 ">
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
                              <div className="flex flex-col sm:flex-row gap-3 items-start ">
                                <Link href={project.link} target="_blank">
                                  <button className="btn btn-sm btn-accent flex gap-x-[5px] ">
                                    <MdArrowOutward className="text-lg " />
                                    <span>Live Project</span>
                                  </button>
                                </Link>
                                <Link href={project.github} target="_blank">
                                  <button className="btn btn-sm btn-white flex gap-x-[5px] ">
                                    <FaGithub className="text-lg " />
                                    <span>Github Repo.</span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                            <div className="w-full h-[150px] md:h-[300px] xl:h-[400px] relative order-1 xl:order-none rounded-2xl overflow-hidden  ">
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
