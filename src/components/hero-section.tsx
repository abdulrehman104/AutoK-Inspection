"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="h-screen xl:h-[95vh] mt-20 md:mt-0 flex items-center relative">
      <div className="container mx-auto flex flex-col xl:flex-row items-center xl:justify-between h-full px-6 mt-60 md:mt-0">
        {/* Text Section */}
        <div className="text-center xl:text-left xl:max-w-2xl space-y-6">
          <motion.h1
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }} // Runs only once
            className="h1"
          >
            Get a Clear Picture <span className="text-red-600">Before</span> You
            Buy
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }} // Runs only once
            className="text-gray-500 text-base max-w-lg mx-auto xl:mx-0"
          >
            Protect yourself from buying a used car with hidden problems. Our
            comprehensive inspections give you the information you need to make
            a confident decision.
          </motion.p>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }} // Runs only once
            className="flex gap-4 justify-center xl:justify-start"
          >
            <Link href="#report">
              <Button className="px-6 py-3 text-lg font-semibold bg-red-600 hover:bg-red-700 rounded-lg shadow-md">
                Get Report
              </Button>
            </Link>
            <Link href="#about-us">
              <Button className="px-6 py-3 text-lg font-semibold bg-gray-800 text-white hover:bg-gray-900 rounded-lg shadow-md">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }} // Runs only once
          className="relative w-full max-w-[600px] mt-10 xl:mt-0"
        >
          <Image
            src="/images/hero/car.svg"
            alt="Car Rental"
            width={800}
            height={500}
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};
