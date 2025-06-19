import "swiper/css";
import "swiper/css/pagination";
import dynamic from "next/dynamic";

const SwiperClient = dynamic(() => import("./SwiperClient"), { ssr: false });

const testimonials = [
  {
    message:
      "Mohamed's work is exceptional! He transformed our website into a user-friendly platform that has significantly improved our customer engagement.",
    name: "Salma Yasser",
  },
  {
    message:
      "Working with Mohamed was a game-changer for our business. His attention to detail and innovative design approach made our site stand out.",
    name: "David Smith",
  },
  {
    message:
      "I can't recommend Mohamed enough! His expertise in web development and design is top-notch, and he delivered our project ahead of schedule.",
    name: "Mostafa Ali",
  },
  {
    message:
      "Mohamed's creativity and technical skills are impressive. He took our vision and turned it into a stunning website that exceeded our expectations.",
    name: "Ahmed Ashraf",
  },
];

export default function Testimonials() {
  return <SwiperClient testimonials={testimonials} />;
}
