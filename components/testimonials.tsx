"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import Pretitle from "./Pretitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Testimonial = {
  name: String;
  comment: String;
};

const testimonials: Testimonial[] = [
  {
    name: "jane doe",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th s industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    name: "jane doe",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th s industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    name: "jane doe",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th s industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];

const regions: String[] = [
  "Montreal",
  "Laval",
  "Saint-Léonard à Notre Dame de Grâce",
  "Anjou au pont",
  "Saint-Laurent à Montréal-Nord",
  "Pierrefonds à Senneville",
  "Lachine à Verdun",
];

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      <section id="contact" className="py-20  min-h-[90vh] relative z-20">
        <div className=" mx-auto  ">
          {/* title */}
          <div className="text-center max-w-[540px] mx-auto xl:mb-10 ">
            <Pretitle text="Contact us" center={true} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase">
              get in touch with Us
            </h2>
          </div>

          <div className="md:grid md:grid-cols-2  items-center   sm:py-10 ">
            {/* Testimonials */}
            <div className="bg-white h-full flex flex-col justify-center items-center py-15 lg:py-10 ">
              <h3 className="text-3xl font-bold lg:mb-8 mb-10 ">
                Testimonials
              </h3>
              <Carousel
                plugins={[plugin.current]}
                className="max-w-full relative"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent className=" text-center">
                  {testimonials.map((item: Testimonial, index: number) => {
                    return (
                      <CarouselItem key={index}>
                        <div className=" flex-colum  p-8 mx-8">
                          <p className="mb-10 text-lg">{item.comment}</p>
                          <h3 className="text-2xl">{`- ${item.name}`}</h3>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                {/* Bottom buttons container */}
                <div className=" bottom-0 left-18 right-18 absolute -top-15">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>
            </div>
            {/* contact and service regions */}
            <div className="h-full   text-center bg-[#1f211e]  text-white py-10 ">
              <div className="flex flex-col">
                {/* contact */}
                <div className="flex flex-col lg:flex-row items-center justify-evenly py-6  text-2xl font-medium gap-4 lg:gap-2 ">
                  {/* phone */}
                  <div className="flex flex-row gap-4 items-center">
                    <Phone size={35} />

                    <div>514-488-5600</div>
                  </div>
                  <div className="flex flex-row gap-4 items-center">
                    <Mail size={35} /> <div>info@lefoyervert.com</div>
                  </div>
                </div>
                {/* regions */}
                <h3 className="text-4xl  font-bold mb-8 mt-20">
                  Region desservie
                </h3>

                <div className="grid  xl:grid-flow-col grid-col-1 auto-rows-max  grid-rows-4  space-x-8 px-10 lg:px-8 mt-8 lg:mt-6 justify-center ">
                  {regions.map((region: String, index: number) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row gap-2 mb-3 text-lg font-medium  items-center max-w-xs "
                      >
                        <MapPin />
                        <h4 className="text-left">{region}</h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
