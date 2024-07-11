'use client'

import React, { useState } from 'react'
import { projects } from '@/data'
import Button from './Button';
import LinkButton from './ui/LinkButton';
import { AnimatePresence, motion } from 'framer-motion';

const RecentProjects = () => {
   let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 mb-[100px]" id="project">
      <h1 className="heading text-neutral-100">
        Recent <span className="text-[#4ebb9b]">Projects</span>
      </h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 gap-16 mt-10">
        {projects.map(({ id, title, subTitle, img, link }) => (
          <div
            className="flex flex-col relative group items-center justify-center rounded-xl bg-[#191e23] w-full "
            key={id}
            onMouseEnter={() => setHoveredIndex(id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === id && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
              <div className="relative flex items-center justify-center w-full lg:h-[25rem] h-[15rem] group-hover:border-slate-700 z-20 ">
                <div className="relative w-full h-full rounded-[10%] overflow-hidden ">
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0 w-full h-full object-cover p-2 lg:rounded-[2rem] rounded-[2rem] "
                  />
                </div>
              </div>
              <div
                className="flex items-center
                    justify-between p-5 gap-[5rem] rounded-xl border-1 border-[#4ebb9b] w-full shadow-custom bg-white group-hover:border-slate-700 z-20"
              >
                <div>
                  <h1 className="font-bold text-base lg:text-3xl md:text-xl line-clamp-1">
                    {title}
                  </h1>
                  <h2 className="lg:text-md lg:font-medium text-sm font-medium line-clamp-2">
                    {subTitle}
                  </h2>
                </div>
                <LinkButton href={link} />
              </div>
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[0.5rem] md:mt-[2rem]">
        <Button title="More Work" href="https://github.com/ujjwal-45/" />
      </div>
    </section>
  );
}

export default RecentProjects