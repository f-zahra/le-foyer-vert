import { ProjectImageItem } from "@/lib/projectGallery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Pretitle from "./Pretitle";
import { getTranslations } from "next-intl/server";
import LightBoxItem from "./LightBoxItem";

export default async function Projects({
  projectGallery,
}: {
  projectGallery: ProjectImageItem[];
}) {
  const t = await getTranslations("projects");
  const pretitle_t = await getTranslations("navigation");
  return (
    <>
      <section
        id="projects"
        className="py-20  min-h-[70vh] px-4 sm:px-6 lg:px-8  relative z-20"
      >
        <div className="max-w-7xl mx-auto  ">
          <div className="text-center max-w-[540px] mx-auto xl:mb-20">
            <Pretitle text={pretitle_t("projects")} center={true} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("title")}
            </h2>
            <p className="mb-6 font-poppins  text-muted-foreground">
              {t("subTitle")}
            </p>
          </div>

          <Carousel className="">
            <CarouselContent className="-ml-4 gap-3">
              {projectGallery.map((item: ProjectImageItem, index: number) => {
                return (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/3 relative h-[250px]  w-full "
                  >
                    <LightBoxItem
                      photoItem={item}
                      projectTitle={item.projectTitle}
                    ></LightBoxItem>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            {/* --- CUSTOM POSITIONING for arrows --- */}
            <CarouselPrevious
              className="
            absolute left-4 top-1/2 -translate-y-1/2
            bg-black/40 hover:bg-black/60 text-white rounded-full
            z-10
          "
            />
            <CarouselNext
              className="
            absolute right-4 top-1/2 -translate-y-1/2
            bg-black/40 hover:bg-black/60 text-white rounded-full
            z-10
          "
            />
          </Carousel>
        </div>
      </section>
    </>
  );
}
