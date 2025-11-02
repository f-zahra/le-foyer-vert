import { Card, CardContent, CardHeader } from "./ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Pretitle from "./Pretitle";
import { LucideIcon } from "lucide-react";
import { House, Wrench, Hammer } from "lucide-react";

interface ServiceItem {
  icon: LucideIcon;
  img: string;
  title: string;
  details: string[];
}

const serviceItems: ServiceItem[] = [
  {
    icon: House,
    img: "/images/house-exterior.jpg",
    title: "Exterior Work",
    details: [
      "Deck - On the ground",
      "Exterior renovations - Shed",
      "Exterior siding",
      "Fence",
    ],
  },
  {
    icon: Wrench,
    img: "/images/house-interior.jpg",
    title: "Interior Work",
    details: [
      "Drywall finishing",
      "Interior Wall Insulation",
      "Exterior siding",
      "Tiling",
      "Woodworking",
    ],
  },

  {
    icon: Hammer,
    img: "/images/renovation-projects.jpg",
    title: "Renovation Projects",
    details: [
      "Interior renovations - Without plumbing, electricity, or structure",
      "Renovations - After disaster",
      "Renovations - Basement,Bathroom , Kitchen  (without electricity / plumbing)",
      "Tiling",
      "Woodworking",
    ],
  },
  {
    icon: Hammer,
    img: "/images/renovation-projects.jpg",
    title: "Renovation Projects",
    details: [
      "Interior renovations - Without plumbing, electricity, or structure",
      "Renovations - After disaster",
      "Renovations - Basement,Bathroom , Kitchen  (without electricity / plumbing)",
      "Tiling",
      "Woodworking",
    ],
  },
  {
    icon: Hammer,
    img: "/images/renovation-projects.jpg",
    title: "Renovation Projects",
    details: [
      "Interior renovations - Without plumbing, electricity, or structure",
      "Renovations - After disaster",
      "Renovations - Basement,Bathroom , Kitchen  (without electricity / plumbing)",
      "Tiling",
      "Woodworking",
    ],
  },
];

export default function Services() {
  //get posts

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto">
        <Pretitle text="our services" center={true}></Pretitle>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Discover our services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            small description of the quality of the service
          </p>
        </div>
        {/* service list */}
        <div className="flex flex-col  md:flex-row gap-6  justify-center flex-wrap  items-center md:items-stretch">
          {/* loop  through list */}
          {serviceItems.map((item: ServiceItem, index: number) => {
            const Icon = item.icon;
            return (
              <div key={index}>
                <Card className="w-[300px] h-full rounded-none group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-xs py-0 gap-0 ">
                  <CardHeader className="p-0">
                    <div>
                      <Image
                        alt=""
                        width={300}
                        height={300}
                        src={item.img}
                        className="w-full h-48 transition-transform duration-300 group-hover:scale-105 object-cover"
                      ></Image>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-foreground">
                      <Icon />
                      <h3 className="text-xl font-bold   group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>

                    <div className="text-muted-foreground mb-4">
                      <ul className="list-disc pl-6">
                        {item.details.map((item: string) => {
                          return <li key={item}>{item}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="flex items-center text-primary font-medium group-hover:underline">
                      learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 " />
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
