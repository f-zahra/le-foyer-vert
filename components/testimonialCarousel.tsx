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
      className="max-w-full relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className=" text-center">
        {testimonialData.map((item, index: number) => {
          return (
            <CarouselItem key={index}>
              <div className=" flex-colum  p-8 mx-8">
                <p className="mb-10 text-lg">{item.comment}</p>
                <h3 className="text-2xl">{`- ${item.name}`}</h3>
              </div>
            </CarouselItem>
          );
        })}
        <CarouselItem>
          <ElfsightWidget widgetId="6a80d6f1-1f29-450f-8887-c4eab1b455a3"></ElfsightWidget>
        </CarouselItem>
      </CarouselContent>
      {/* Bottom buttons container */}
      <div className=" bottom-0 left-18 right-18 absolute -top-15">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default TestimonialCarousel;
