import Link from "next/link";
import { PhoneOutgoing } from "lucide-react";

const PhoneCall = ({ phoneNumber }: { phoneNumber: string }) => {
  return (
    <>
      <Link
        href={`tel:${phoneNumber}`}
        className=" items-center space-x-2 md:flex p-3 hover:scale-105   bg-red-600 border-none  hover:bg-black transition-colors duration-300 ease-in-out "
      >
        {/* Icon */}
        <span className="flex items-center justify-center ">
          <PhoneOutgoing size={16} color="#ffffff" />
        </span>

        {/* Text: hidden on small screens */}
        <span className="hidden md:inline text-white font-medium text-sm">
          <a>{phoneNumber}</a>
        </span>
      </Link>
    </>
  );
};

export default PhoneCall;
