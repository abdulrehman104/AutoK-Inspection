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
        <div className="w-full flex flex-col items-center justify-center mt-16 text-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="text-sm font-semibold uppercase text-gray-600 mb-2"
          >
            Our History
          </motion.h2>
          <motion.h3
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="text-4xl font-bold text-gray-900 md:text-5xl mb-4"
          >
            Our Journey Through Excellence
          </motion.h3>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
          >
            From humble beginnings to a globally trusted automotive service, AutoK Inspection has grown by prioritizing customer satisfaction and reliable vehicle evaluations.
          </motion.p>
          {/* Vision and Mission Cards with Animation */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="flex flex-col md:flex-row gap-4 w-full max-w-2xl mx-auto"
          >
            <Card className="">
              <CardHeader>
                <CardTitle>Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To be the leading provider of trusted and accurate automotive information, empowering vehicle owners worldwide.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="">
              <CardHeader>
                <CardTitle>Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To deliver exceptional car inspection services, exceeding customer expectations through expertise, integrity, and transparency.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
