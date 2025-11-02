"use client";
import * as motion from "motion/react-client";

import { Button } from "./ui/button";
import ButtonContact from "@/components/ButtonContact";

export default function HeroSection() {
  return (
    <section className="h-[70vh] bg-no-repeat bg-cover bg-center relative bg-[url('/images/background.jpg')] ">
      {/* Background Images */}
      {/* <BackgroundSlides /> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via black/50 to-black/70 z-10" />

      {/* text overlay */}
      <div className="@container px-16 h-full flex mx-auto items-center relative z-20 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left ml-10  flex flex-col items-center justify-between lg:items-start"
        >
          <h1 className=" text-3xl md:text-3xl   lg:text-4xl  font-bold text-white  leading-tight mb-6 uppercase">
            Building robust lasting solutions
          </h1>
          <p className=" md:text-lg mb-8 max-w-2xl text-white ">
            Eco-friendly home renovations & custom decks/pergolas. Sustainable
            style, expert craftsmanship.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ButtonContact text="get a quote" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
