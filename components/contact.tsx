import { Phone, Mail, MapPin } from "lucide-react";
import Pretitle from "./Pretitle";

import TestimonialCarousel from "./testimonialCarousel";
import { Testimonial } from "@/lib/testimonials";
import { CompanyInformation } from "@/lib/companyInformation";
import { ServiceArea } from "@/lib/areasServed";

interface ContactProps {
  testimonials: Testimonial[];
  serviceAreas: ServiceArea;
  companyInfo: CompanyInformation;
}
export default function Contact({
  testimonials,
  serviceAreas,
  companyInfo,
}: ContactProps) {
  return (
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
            <h3 className="text-3xl font-bold lg:mb-8 mb-10 ">Testimonials</h3>
            <TestimonialCarousel
              testimonialData={testimonials}
            ></TestimonialCarousel>
          </div>
          {/* contact and service regions */}
          <div className="h-full   text-center bg-[#1f211e]  text-white py-10 ">
            <div className="flex flex-col">
              {/* contact */}
              <div className="flex flex-col lg:flex-row items-center justify-evenly py-6  text-2xl font-medium gap-4 lg:gap-2 ">
                {/* phone */}
                <div className="flex flex-row gap-4 items-center">
                  <Phone size={35} />

                  <div>
                    <span>{companyInfo.phone}</span>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <Mail size={35} /> <div>{companyInfo.email}</div>
                </div>
              </div>
              {/* regions */}
              <h3 className="text-4xl  font-bold mb-8 mt-20">
                Region desservie
              </h3>

              <div className="grid  xl:grid-flow-col grid-col-1 auto-rows-max  grid-rows-4  space-x-8 px-10 lg:px-8 mt-8 lg:mt-6 justify-center ">
                {serviceAreas.name.map((region: string, index: number) => {
                  console.log(region);
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
  );
}
