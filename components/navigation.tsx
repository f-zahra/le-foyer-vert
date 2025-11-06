import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/navItems";
import MobileNavigation from "@/components/MobileNavigation";
import PhoneCall from "@/components/phoneCall";
import { CompanyInformation } from "@/lib/companyInformation";

export default function Navigation({
  companyInfo,
}: {
  companyInfo: CompanyInformation;
}) {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md  border-border/20 ">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          <div className="flex justify-between pt-4 h-20   items-center pb-4">
            {/* logo */}

            <div className="shrink-0">
              <Image
                src="/images/logo-2.svg"
                alt="Logo"
                width={200}
                className="pb-3"
                height={60}
              />
            </div>

            {/* desktop nav */}
            <div className="flex flex-row justify-end">
              <div className="text-md  hidden md:flex items-center space-x-8 mr-8 ">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    className=" font-medium text-muted-foreground hover:text-green-900  hover:scale-105 transition-colors duration-200"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <PhoneCall phoneNumber={companyInfo.phone} />
              <MobileNavigation />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
