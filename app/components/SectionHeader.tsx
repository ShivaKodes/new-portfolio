"use client"

import { twMerge } from "tailwind-merge";
import { Reveal } from "./Reveal";


interface SectionHeaderProps{
  title:string,
  mb?:string,
  flexDir?:string
}



export default function SectionHeader({ title, mb,flexDir="flex-row" }:SectionHeaderProps) {
  return (
      <Reveal width="col-span-full">
    <div className={twMerge(`col-span-full flex  items-center pb-7 pt-20 `,flexDir)}>

      <h2
        className={twMerge(`text-2xl md:text-4xl font-serif text-lime  col-span-full whitespace-nowrap  `,flexDir==='flex-row'?'pr-5 after:content after:w-2 after:h-2 after:bg-[#6DD7B9] after:inline-block after:rounded-full after:ml-2':'pl-5 before:content before:w-2 before:h-2 before:bg-[#6DD7B9] before:inline-block before:rounded-full before:mr-2')}
        >
        {title}
      </h2>
      <hr className="text-white w-full"/>
    </div>
          </Reveal>
  );
}
