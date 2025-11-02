import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#afc0db] text-blue-950">
      <div className="@container px-10 mx-auto">
        <div className="py-16 xl:py-4 flex flex-col xl:flex-row gap-[60px] xl:gap-[30px] xl:items-center justify-evenly mb-6">
          {/* logo & text  */}
          <div className=" mb-6">
            <Link href="/">
              <Image
                src="/images/logo-2.svg"
                width={480}
                height={40}
                alt=""
              ></Image>
            </Link>
            <p className="max-w-[500px] ml-10">
              Your satisfaction is our priority! The entire Protech Peinture
              team is committed to providing you with high-quality service.
            </p>
          </div>
          {/* contact */}

          <div className="text-xl">
            <h4 className="font-bold text-xl text-black mb-10 ">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <MapPin size={16} strokeWidth={1} />
                <p>1234 , yellowstreet , montreal , qc </p>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={16} strokeWidth={1} />
                <p>info@lefoyervert.com </p>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={16} strokeWidth={1} />
                <p>+1 514-000-0000</p>
              </li>
              <li className="flex items-center gap-4 mt-10  text-2xl">
                <Link href={"https://www.google.com/"}>
                  <FaInstagram />
                </Link>
                <Link href={"https://www.google.com/"}>
                  {" "}
                  <FaFacebook />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
