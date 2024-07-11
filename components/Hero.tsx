'use client'

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { BackgroundBeams } from './ui/Background-beams'
import SplitStringRegex from '@/lib/utils/SplitStringRegex'
import {motion, Variants} from "framer-motion"
import Button from './Button'
import { FloatingNav } from './ui/Floating-navbar'
import { navItems } from '@/data'

const TaglineFirst = "Elevating User Experience,";
const TaglineSecond = "One Pixel at a Time";
const charVariants = {
    hidden: { opacity: 0 },
    reveal : {opacity : 1},
}

const Hero = () => {
    
    const TaglineChars1 = SplitStringRegex(TaglineFirst);
    const TaglineChars2 = SplitStringRegex(TaglineSecond);

  return (
    <div className="pb-20 pt-36 relative">
     
      <div >
        <Spotlight
          className="-top-40 -left-0 md:-right-32 md:-top-20 h-[vh]"
          fill="white"
        />
        
      </div>
      <div>
        <BackgroundBeams />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div
          className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]
              flex flex-col items-center justify-center
              "
        >
          <h3 className="uppercase tracking-widest text-xs text-white max-w-100 lg:mb-[20px] ">
            Made with Next.js & Framer Motion
          </h3>

          <motion.p
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.05 }}
            className="text-[40px] md:text-4xl lg:text-6xl text-center pt-2 md:pd-2 font-semibold text-neutral-100 "
          >
            {TaglineChars1.map((char) => (
              <motion.span
                key={char}
                transition={{ duration: 0.5 }}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.05 }}
            className="text-[40px] md:text-5xl lg:text-6xl text-center pt-2 md:pd-2 font-semibold text-[#4ebb9b]"
          >
            {TaglineChars2.map((char) => (
              <motion.span
                key={char}
                transition={{ duration: 0.5 }}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          <p className="text-center tracking-widest pt-2 md:pt-2 text-lg md:text-lg lg:text-2xl lg:mt-[20px] text-[#d3d9d4]">
            Hi, I&apos;m am <span className='text-[#4ebb9b]'>Ujjwal</span>, a fullstack developer based in India
          </p>

          <Button title="view my work" href="#about" />
        </div>
      </div>
    </div>
  );
}

export default Hero