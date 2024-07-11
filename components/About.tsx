'use client'

import React from 'react'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { slideUp, opacity } from '@/lib/utils/animation'
import NewButton from './ui/NewButton'
import Link from 'next/link'

const About = () => {
    const description = useRef(null);
    const isInView = useInView(description);
    const phrase =
        "Hi, I’m Ujjwal Choudhary, a B.Tech student at NIT Rourkela. Skilled in C++, JavaScript, Python, Solidity, and TypeScript, I develop real-time apps and decentralized platforms. I'm passionate about cutting-edge, pixel-perfect and beautiful interfaces and also have excelled in coding contests and been a part of Innovision 2022.";
  return (
    <section id="about">
      <div
        ref={description}
        className="flex  justify-center mt-[4rem] mb-[4rem] gap-10"
      >
        
          <div className="max-w-7xl flex">
            <p className="lg:text-2xl text-sm font-light leading-6 text-neutral-100 max-w-[800px] flex flex-wrap gap-2">
              {phrase.split(" ").map((word, index) => {
                return (
                  <span key={index} className="relative overflow-hidden flex">
                    <motion.span
                      variants={slideUp}
                      custom={index}
                      animate={isInView ? "open" : "closed"}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
          </div>

          <div className="text-white items-center">
            <img
              className="rounded-[50%] object-cover lg:w-[200px] lg:h-[200px]"
              src="/MyPic.jpeg"
              alt="my pic"
            />
          </div>
        
      </div>
    </section>
  );
}

export default About