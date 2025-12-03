import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { CompanyInformation } from "@/lib/companyInformation";
const Footer = ({ companyInfo }: { companyInfo: CompanyInformation }) => {
  return (
    <footer className="bg-[#b4c2bb]">
      <div className="@container px-10 mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 md:gap-4 py-5 border-t-2 border-gray-300/10 text-foreground">
          <div className="py-8 px-4 space-y-4 ">
            {/* logo & text  */}
            <div className="">
              <Link href="/">
                <Image
                  src="/images/logo-2.png"
                  width={300}
                  height={40}
                  quality={100}
                  alt=""
                ></Image>
              </Link>
              <p className="">{companyInfo.slogan}</p>
              <div className="flex items-center justify-start gap-5 mt-6">
                <Link href={companyInfo.socials.instagram}>
                  <FaInstagram className="text-3xl" />
                </Link>
                <Link href={companyInfo.socials.facebook}>
                  <FaFacebook className="text-3xl" />
                </Link>
              </div>
            </div>
          </div>
          {/* contact */}
          <div className="py-8 px-4 space-y-4 md:ml-14">
            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5 uppercase">
              contact
            </h1>
            <ul className="space-y-4 text-foreground-muted">
              <li className="flex items-center gap-4">
                <MapPin size={16} strokeWidth={2} className="shrink-0" />
                <p>{companyInfo.address} </p>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={16} strokeWidth={2} className="shrink-0" />
                <p>{companyInfo.email}</p>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={16} strokeWidth={2} className="shrink-0" />
                <p>{companyInfo.phone}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
