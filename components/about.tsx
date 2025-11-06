import ButtonContact from "./ButtonContact";
import Pretitle from "./Pretitle";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import { AboutItem, getURL } from "@/lib/aboutData";

const About = async ({ aboutData }: { aboutData: AboutItem }) => {
  return (
    <section className="pt-16 xl:pt-32 mb-16 " id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1">
            <div className="max-w-[600px]">
              {/* pretitle */}
              <Pretitle text="About Us" center={false}></Pretitle>
              <h2 className="h2 mb-6 text-2xl font-bold">{aboutData.title}</h2>
              <p>{aboutData.content}</p>
              <div className="p-8 mb-11">
                <ul className=" pl-5 space-y-2 uppercase font-bold text-md">
                  {aboutData.details &&
                    aboutData.details.map((item: string, index: number) => {
                      return (
                        <li key={index} className=" flex gap-4 items-center">
                          <ShieldCheck className="shrink-0" />
                          <p> {item}</p>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <ButtonContact text="Contact us" />
            </div>
          </div>
          {/* img */}
          <div className="flex-1 xl:flex xl:justify-center">
            <div className="xl:w-[444px] xl:h-[493px] relative">
              {/* bg */}
              <div className="hidden xl:flex w-[444px] h-[490px] bg-accent absolute -top-6 -left-4 -z-8"></div>
              <Image
                src={getURL(aboutData.image)}
                width={444}
                height={490}
                alt=""
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
