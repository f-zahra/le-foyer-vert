import { Phone, Mail, MapPin } from "lucide-react";
import Pretitle from "./Pretitle";

import TestimonialCarousel from "./testimonialCarousel";
import { Testimonial } from "@/lib/testimonials";
import { CompanyInformation } from "@/lib/companyInformation";
import { ServiceArea } from "@/lib/areasServed";

import { getTranslations } from "next-intl/server";

interface ContactProps {
  testimonials: Testimonial[];
  serviceAreas: ServiceArea;
  companyInfo: CompanyInformation;
}
export default async function Contact({
  testimonials,
  serviceAreas,
  companyInfo,
}: ContactProps) {
  const t = await getTranslations("contact");
  const pretitle_t = await getTranslations("navigation");
  return (
    <section id="contact" className="py-20  relative z-20">
      <div className=" mx-auto  min-h-[90vh]  ">
        {/* title */}
        <div className="text-center max-w-[540px] mx-auto xl:mb-10 ">
          <Pretitle text={pretitle_t("contact")} center={true} />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase">
            {t("contact-us")}
          </h2>
        </div>

        <div className="md:grid md:grid-cols-2  items-stretch  sm:py-10 ">
          {/* Testimonials */}
          <div className="bg-white h-[600px] flex flex-col justify-center items-center py-15 lg:py-10 ">
            <h3 className="text-3xl font-bold lg:mb-8 mb-10 ">
              {t("Testimonials")}
            </h3>
            <TestimonialCarousel
              testimonialData={testimonials}
            ></TestimonialCarousel>
          </div>
          {/* contact and service regions */}
          <div className="  text-center bg-[#1f211e]  text-white py-10 ">
            <div className="flex flex-col">
              {/* contact */}
              <h3 className="text-3xl  font-bold mb-6 ">{t("quote")}</h3>
              <div className="flex flex-col lg:flex-row items-center justify-evenly py-6 font-montserrat font text-md font-medium gap-4 lg:gap-2 ">
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
              <h3 className="text-3xl  font-bold mb-8 mt-14">{t("area")}</h3>

              <div className="grid font-md font-montserrat xl:grid-flow-col grid-col-1 auto-rows-max  grid-rows-4  space-x-6 px-10 lg:px-8   justify-center   ">
                {serviceAreas.name.map((region: string, index: number) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-row gap-3  text-lg font-medium xl:mb-0 mb-3  items-center max-w-xs "
                    >
                      <MapPin className="shrink-0" />
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
