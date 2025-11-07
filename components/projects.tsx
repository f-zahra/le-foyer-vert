import Image from "next/image";
import { getURL, ProjectImageItem } from "@/lib/projectGallery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Pretitle from "./Pretitle";

export default function Projects({
  projectGallery,
}: {
  projectGallery: ProjectImageItem;
}) {
  return (
    <>
      <section className="py-20  min-h-[70vh] px-4 sm:px-6 lg:px-8  relative z-20">
        <div className="max-w-7xl mx-auto  ">
          <div className="text-center max-w-[540px] mx-auto xl:mb-20">
            <Pretitle text="Our work" center={true} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Discover our projects
            </h2>
            <p>small introduction</p>
          </div>

          <Carousel className="">
            <CarouselContent className="-ml-4">
              {projectGallery.image.map(
                (item: ProjectImageItem, index: number) => {
                  return (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/3 relative h-[250px]  w-full"
                    >
                      {/* Wrap everything in a Dialog */}
                      <Dialog>
                        {/* ---- Trigger (the clickable image) ---- */}
                        <DialogTrigger asChild>
                          <Image
                            src={getURL(item)}
                            fill
                            alt=""
                            className="object-cover pl-4"
                          ></Image>
                        </DialogTrigger>

                        {/* ---- Popup content ---- */}
                        <DialogContent className="p-0 bg-transparent border-none shadow-none  ">
                          <div className="">
                            <DialogTitle>Edit profile</DialogTitle>
                            <Image
                              src={getURL(item)}
                              alt="Full size"
                              width={1200}
                              height={500}
                              className="max-w-full h-max-[90vh] py-8"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CarouselItem>
                  );
                }
              )}
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
