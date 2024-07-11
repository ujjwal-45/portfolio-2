'use client'
import React from 'react'
import LinkButton from './ui/LinkButton'
import NewButton from './ui/NewButton';
import Button from './Button';
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import Socials from './ui/Socials';



const Footer = () => {
  
  return (
    <footer className="w-full pt-20 pb-10 text-white  fixed-footer" id="contact">
      <div className="flex flex-col justify-center content ">
        <div className="flex justify-between items-center p-10 ">
          <div>
            <div className='flex items-center gap-2'>
                
                <img src="/MyPic.jpeg"  className='rounded-[50%] lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] object-cover' />
                <p className="lg:text-6xl text-2xl ">
                Let's <span className="text-[#4ebb9b]">Work </span>
                </p>
            </div>
            <p className='lg:text-6xl text-2xl mt-0'>together</p>
          </div>

          <NewButton title="Hire me" href="mailto:ujjwal0568@gmail.com" />
        </div>
        <hr className="md:mt-[50px] mt-[20px] opacity-25" />

        <div className="mt-[30px] ml-9 flex gap-6">
          <Button
            title="ujjwal0568@gmail.com"
            href="mailto:ujjwal0568@gmail.com"
          />
          <Button title="Resume" href="/Ujjwal Choudhary_CV.pdf" />
        </div>
        <hr className="md:mt-[50px] mt-[20px] opacity-25" />
        <div className="flex justify-between items-center mt-[60px]">
          <p className="ml-9 text-xs lg:text-base">Copywright© 2024 Ujjwal Choudhary</p>
          <div className="flex mr-9 gap-1">
            <Socials 
              Icon={CiLinkedin}
              href="https://www.linkedin.com/in/ujjwalchoudhary7/"
            />
            <Socials Icon={LuGithub} href="https://github.com/ujjwal-45/" />
            <Socials Icon={FiTwitter} href="https://x.com/UjjwalC25583140" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer