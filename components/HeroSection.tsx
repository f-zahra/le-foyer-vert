import * as motion from "motion/react-client";
import ButtonContact from "@/components/ButtonContact";
import { HeroItem, getURL } from "@/lib/hero";
import Image from "next/image";

import { getTranslations } from "next-intl/server";

export default async function HeroSection({
  HeroSectiondata,
}: {
  HeroSectiondata: HeroItem;
}) {
  const t = await getTranslations();
  return (
    <section className={`h-[70vh] bg-no-repeat bg-cover bg-center relative`}>
      <Image
        src={getURL(HeroSectiondata.backgroundImage)}
        alt="Background"
        fill // makes image cover the parent
        style={{ objectFit: "cover" }} // ensures it covers the section
        className="-z-10" // send behind content
      />
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
            {HeroSectiondata.title}
          </h1>
          <p className=" md:text-xl mb-8 max-w-2xl text-white font-small font-poppins">
            {HeroSectiondata.subTitle}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ButtonContact text={t("quote")} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
