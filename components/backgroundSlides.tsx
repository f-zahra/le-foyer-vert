"use client";
import * as motion from "motion/react-client";

import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/images/kitchen.jpg",
    title: (
      <>
        Construction <br /> and renovation
      </>
    ),
    description:
      "Eco-friendly home renovations & custom decks/pergolas. Sustainable style, expert craftsmanship.",
  },
  {
    id: 2,
    image: "/images/bathroom.jpg",
    title: (
      <>
        Elegant <br /> interiors
      </>
    ),
    description:
      "Transform your home with modern, sustainable interior design that combines beauty and comfort.",
  },
  {
    id: 3,
    image: "/images/blueprint.jpg",
    title: (
      <>
        Functional <br /> design
      </>
    ),
    description:
      "Expert craftsmanship for spaces that are both functional and aesthetically pleasing.",
  },
];

const SlideSection = ({ image, title, description }: any) => (
  <section
    className={`h-[70vh] bg-no-repeat bg-cover bg-center relative`}
    style={{ backgroundImage: `url(${image})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-white/60" />

    {/* Text overlay */}
    <div className="@container px-8 h-full flex items-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center lg:text-left ml-10"
      >
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground leading-tight mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-muted-foreground font-medium">
          {description}
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="font-medium text-lg hover:scale-105 hover:bg-amber-400 transition-all ease-in-out duration-300 rounded-none cursor-pointer"
          >
            Get a quote
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const BackgroundSlides = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      effect="fade" // ✨ smooth fade transition
      fadeEffect={{ crossFade: true }}
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      speed={1000}
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      className="w-full"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <SlideSection
            image={slide.image}
            title={slide.title}
            description={slide.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BackgroundSlides;
