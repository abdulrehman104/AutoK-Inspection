"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

interface Testimonial {
  quote: string;
  name: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: `"AutosCheckup's safety updates were invaluable. Knowing my car's recall status keeps my family safe on the road."`,
    name: "Andrei Petrov",
    image: "/clients/Andrei.png",
  },
  {
    quote: `"I've relied on Autos Checkup for years now, and they never disappoint. Their accurate data has helped me maintain my vehicle's performance and value."`,
    name: "Luca Bianchi",
    image: "/clients/Luca.png",
  },
  {
    quote: `"Thanks to Autos Checkup, I was able to make an informed decision about my car purchase. Their insights were invaluable throughout the process."`,
    name: "Rufus Stewart",
    image: "/clients/Rufus.png",
  },
  {
    quote: `"Autos Checkup provided reliable support every step of the way. Their team guided me through the process with patience and expertise."`,
    name: "Jan Kowalski",
    image: "/clients/Jan.png",
  },
  {
    quote: `"I was amazed by the depth of information Autos Checkup provided about my vehicle's history. It gave me confidence in my purchase decision."`,
    name: "Maria Rossi",
    image: "/clients/Maria.png",
  },
  {
    quote: `"The detailed inspections provided by Autos Checkup gave me peace of mind. I could trust their thorough assessment of my vehicle's condition."`,
    name: "Sophie Müller",
    image: "/clients/Sophie.png",
  },
  {
    quote: `"I appreciate Autos Checkup's commitment to accuracy. Their data helped me confidently navigate the automotive market."`,
    name: "Jamie Chastain",
    image: "/clients/Jamie.png",
  },
  {
    quote: `"Choosing Autos Checkup was the best decision I made. Their service was top-notch, and I felt reassured knowing my vehicle was in good hands."`,
    name: "Dani Martinez",
    image: "/clients/Dani.png",
  },
  {
    quote: `"From the moment I contacted Autos Checkup, I was impressed by their professionalism and expertise. Their service exceeded my expectations."`,
    name: "Ana Silva",
    image: "/clients/Ana.png",
  },
];

export const TestimonialsSection = () => {
  return (
    <motion.section
      className="bg-custom_red py-16 md:py-24 overflow-visible"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      id="testimonial"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h2 className="text-white text-sm font-semibold uppercase mb-4">
            TESTIMONIAL
          </h2>
          <h3 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Our Client Success Stories
          </h3>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Discover what our satisfied customers have to say about their
            experience with Autos Checkup.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name}>
              <Card className="bg-white p-6 rounded-lg shadow-lg">
                <blockquote className="mb-6">
                  <p className="text-muted-foreground text-sm">
                    {testimonial.quote}
                  </p>
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">Client</div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        {/* <motion.div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        > */}
        {/* </motion.div> */}
      </div>
    </motion.section>
  );
};
