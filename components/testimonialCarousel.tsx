"use client";
import { ElfsightWidget } from "react-elfsight-widget";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { Testimonial } from "@/lib/testimonials";
interface TestimonialsProps {
  testimonialData: Testimonial[];
}
const TestimonialCarousel = ({ testimonialData }: TestimonialsProps) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-w-full relative "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className=" ">
        <CarouselItem>
          <ElfsightWidget
            className="px-10"
            widgetId="6a80d6f1-1f29-450f-8887-c4eab1b455a3"
          ></ElfsightWidget>
        </CarouselItem>
      </CarouselContent>
      {/* Bottom buttons container */}
    </Carousel>
  );
};

export default TestimonialCarousel;
