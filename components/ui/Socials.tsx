import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

interface SocialProps {
    Icon: React.ElementType;
    href: string;
}

const Socials: React.FC<SocialProps> = ({ Icon, href }) => {
  return (
    <div className="flex justify-center items-center mt-2 lg:w-20 w-10 h-10">
      <a
        href={href}
        target="_blank"
        className="flex items-center justify-center rounded-full lg:px-2.5 lg:py-1.5 lg:m-1 px-2 py-1  overflow-hidden relative group 
        curson-pointer border-2 border-[#4ebb9b] font-medium text-[#4ebb9b] "
      >
        
        <span className="relative flex items-center text-[#4ebb9b] font-normal  text-md lg:text-xl gap-2 transition duration-300 group-hover:text-neutral-100 group-hover:scale-110 ">
          <Icon className="w-6 h-6" />
        </span>
      </a>
    </div>
  );
};

export default Socials;
