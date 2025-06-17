"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ImQuotesLeft } from "react-icons/im";

export default function SwiperClient({ testimonials }) {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full self-center max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="flex px-8 py-6 gap-8">
            <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
            <div className="flex flex-col gap-2">
              <p>{testimonial.message}</p>
              <p className="self-end text-accent font-semibold">
                {testimonial.name}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
