import Link from "next/link";
import { MoveUpRight } from "lucide-react";

type ButtonPros = {
  text: string;
};

const ButtonContact = ({ text }: ButtonPros) => {
  return (
    <Link
      href={"#contact"}
      className="max-w-[230px] h-[45px] py-[5px]   flex items-center justify-between  group  bg-red-600  hover:bg-amber-400 hover:scale-105  px-5 "
    >
      <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-sm uppercase text-white">
        {text}
      </div>
      <div className="w-11 h-11 bg-none flex items-center justify-center">
        <MoveUpRight className="text-white text-lg group-hover:rotate-45 transition-all duration-200" />
      </div>
    </Link>
  );
};

export default ButtonContact;
