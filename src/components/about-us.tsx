"use client";

import CountUp from "react-countup";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const AboutUs = () => {
  return (
    <section className="py-16" id="about-us">
      <div className="container mx-auto px-6 lg:px-12">
        {/* About Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* Image with Animation */}
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
          >
            <Image
              className="rounded-xl"
              src="/images/about/car01.png"
              width={600}
              height={448}
              alt="Car Inspection"
            />
          </motion.div>

          {/* Text Content with Animations */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="space-y-6"
          >
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="text-sm font-semibold uppercase text-gray-600"
            >
              About Us
            </motion.h2>
            <motion.h3
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="text-4xl font-bold text-gray-900 md:text-5xl"
            >
              Your Trusted Car <br /> Inspection Experts
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="mb-8 max-w-md text-muted-foreground"
            >
              AutoK Inspection: Unbiased car inspections for confident
              decisions. Certified inspectors provide clear, comprehensive
              evaluations of your vehicle&lsquo;s condition.
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="mb-8 max-w-md text-muted-foreground"
            >
              We assess everything from engine to tires, using advanced tools to
              find potential problems. Receive a clear report outlining needed
              repairs or maintenance.
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="mb-8 max-w-md text-muted-foreground"
            >
              AutoK Inspection is committed to integrity and customer
              satisfaction. Our passionate team provides exceptional service,
              building trust and exceeding expectations. Choose AutoK for peace
              of mind.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
            >
              <Link href="#report">
                <Button className="bg-red-600 text-white text-lg font-semibold hover:bg-red-500 rounded-lg shadow-md">
                  Get Your Report
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Text Content with Animation */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="space-y-6"
          >
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="text-sm font-semibold uppercase text-gray-600"
            >
              Our History
            </motion.h2>
            <motion.h3
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="text-4xl font-bold text-gray-900 md:text-5xl"
            >
              Our Journey Through Excellence
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="text-gray-600 leading-relaxed"
            >
              From humble beginnings to a globally trusted automotive service,
              AutoK Inspection has grown by prioritizing customer satisfaction
              and reliable vehicle evaluations.
            </motion.p>
            {/* Vision and Mission Cards with Animation */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    To be the leading provider of trusted and accurate
                    automotive information, empowering vehicle owners worldwide.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    To deliver exceptional car inspection services, exceeding
                    customer expectations through expertise, integrity, and
                    transparency.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Image with Stats and Animations */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="relative"
          >
            <Image
              src="/images/about/offfice.jpg"
              alt="Our team"
              width={800}
              height={500}
              className="rounded-lg object-cover"
            />
            {/* Stats with Animation */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="absolute -bottom-6 left-4 right-4 md:left-8 md:right-8 bg-custom_red p-6 rounded-xl text-white text-center shadow-lg"
            >
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-xl font-bold md:text-4xl">
                    <CountUp start={1900} end={5500} />+
                  </div>
                  <p className="text-sm md:text-base">Projects Completed</p>
                </div>
                <div>
                  <div className="text-xl font-bold md:text-4xl">
                    <CountUp start={0} end={100} />%
                  </div>
                  <p className="text-sm md:text-base">Client Satisfaction</p>
                </div>
                <div>
                  <div className="text-xl font-bold md:text-4xl">
                    <CountUp start={0} end={6} />+
                  </div>
                  <p className="text-sm md:text-base">Years of Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
