"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/lib/variants";

const testimonialData = [
  {
    name: "John",
    position: "CEO",
    avatar: "/images/testimonial/avatar.png",
    message:
      "They truly exceeded my expectations and made my car rental experience a delight",
  },
  {
    name: "Abraham",
    position: "CEO",
    avatar: "/images/testimonial/avatar.png",
    message:
      "They truly exceeded my expectations and made my car rental experience a delight",
  },
  {
    name: "Harry",
    position: "CEO",
    avatar: "/images/testimonial/avatar.png",
    message:
      "They truly exceeded my expectations and made my car rental experience a delight",
  },
  {
    name: "David",
    position: "CEO",
    avatar: "/images/testimonial/avatar.png",
    message:
      "They truly exceeded my expectations and made my car rental experience a delight",
  },
];

export default function TestimonialSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      {" "}
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[400px]"
      >
        {testimonialData.map((person, index) => {
          const { message, avatar, name, position } = person;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-5xl text-custom_red mb-6" />
                <div className="text-lg xl:text-2xl max-w-[874px] mb-12 font-medium">
                  {message}
                </div>
                <Image
                  src={avatar}
                  width={64}
                  height={64}
                  alt=""
                  className="mb-4"
                />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-muted-foreground">{position}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
