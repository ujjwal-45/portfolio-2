import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

interface ButtonProps {
    href: string;
    title: string,
}

const NewButton: React.FC<ButtonProps> = ({ href, title }) => {
  return (
    <div className="flex justify-center items-center mt-2 lg:w-64 w-46">
      <a
        href={href}
        target="_blank"
        className="flex items-center justify-center rounded-full px-3.5 py-2.5 m-1 overflow-hidden relative group w-full
        curson-pointer border-2 border-[#4ebb9b] font-medium bg-[#4ebb9b] "
      >
        <span
          className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#4ebb9b] 
            top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
        ></span>
        <span className="relative flex items-center text-neutral-800 font-normal  text-md lg:text-xl gap-2 transition duration-300 group-hover:text-neutral-100">
          {title} <MdArrowOutward className="lg:w-8 lg:h-8 h-6 w-6" />
        </span>
      </a>
    </div>
  );
};

export default NewButton;
