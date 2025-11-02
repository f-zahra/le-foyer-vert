import ButtonContact from "./ButtonContact";
import Pretitle from "./Pretitle";
import { Button } from "./ui/button";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
const About = () => {
  return (
    <section className="pt-16 xl:pt-32 mb-16 " id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1">
            <div className="max-w-[600px]">
              {/* pretitle */}
              <Pretitle text="About Us" center={false}></Pretitle>
              <h2 className="h2 mb-6 text-2xl font-bold">
                Write what describes your company
              </h2>
              <p className="">
                small description on your company Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book
              </p>
              <div className="p-8 mb-11">
                <ul className=" pl-5 space-y-2 uppercase font-bold text-md">
                  <li className=" flex gap-4 items-center">
                    <ShieldCheck className="shrink-0" />
                    <p> Devis rapides et gratuits et consultation sur place</p>
                  </li>
                  <li className=" flex gap-4 items-center">
                    <ShieldCheck className="shrink-0" />
                    Travail garanti
                  </li>
                  <li className=" flex gap-4 items-center">
                    <ShieldCheck className="shrink-0" />
                    Respecter la date de début
                  </li>
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
                src={"/images/bathroom.jpg"}
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
