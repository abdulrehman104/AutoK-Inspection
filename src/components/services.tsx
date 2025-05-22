"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { ServicesBentoGrid } from "./services-bento-gird";

export const Services = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className="my-20"
      id="services"
    >
      <div className="mx-auto container space-y-8">
        {/* Title & Description with Animation */}
        <motion.div
          className="space-y-6 text-center"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.p
            className="text-sm font-semibold uppercase text-gray-600"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
          >
            OUR SERVICES
          </motion.p>

          <motion.h2
            className="text-4xl font-bold text-gray-900 md:text-5xl"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
          >
            Comprehensive
            <br />
            Automotive Solutions
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg"
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
          >
            Get detailed vehicle reports, safety updates, inspections, and
            expert guidance for informed automotive decisions.
          </motion.p>
        </motion.div>

        {/* Service Grid Animation */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ServicesBentoGrid />
        </motion.div>
      </div>
    </motion.section>
  );
};
