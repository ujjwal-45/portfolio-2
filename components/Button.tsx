import React from 'react'

interface ButtonProps{
  title: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({title, href}) => {
  return (
    <div className='flex justify-center items-center mt-12 w-64'>
          <a href={href} className='flex items-center justify-center rounded-full px-3.5 py-2.5 m-1 overflow-hidden relative group w-full
        curson-pointer border-2 border-[#4ebb9b] font-medium text-neutral-100 '
        >
              <span className='absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#4ebb9b] 
            top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease'>
            </span>
              <span className='relative text-neutral-100 transition duration-300 group-hover:text-white'>{title}</span>
        </a> 
    </div>
  )
}

export default Button