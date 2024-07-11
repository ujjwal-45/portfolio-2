import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

interface ButtonProps {
  href: string;
}

const LinkButton: React.FC<ButtonProps> = ({ href }) => {
  return (
    <div className="flex justify-center items-center mt-12 w-64">
      <a
        href={href}
        target="_blank"
        className="flex items-center justify-center rounded-full px-3.5 py-2.5 m-1 overflow-hidden relative group w-full
        curson-pointer border-2 border-[#4ebb9b] font-medium bg-green-100 "
      >
        <span
          className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#4ebb9b] 
            top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
        ></span>
        <span className="relative flex items-center text-zinc-800 font-semibold text-lg gap-2 transition duration-300 group-hover:text-neutral-100">
          view <MdArrowOutward className="w-6 h-6" />
        </span>
      </a>
    </div>
  );
};

export default LinkButton;
