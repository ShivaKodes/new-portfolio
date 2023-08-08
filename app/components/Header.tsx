"use client"
import Link from "next/link";
import { Reveal } from "./Reveal";

export default function Header() {
  return (
    <Reveal>

    <header
      className="w-full  text-[#fff] font-serif grid grid-cols-12 gap-5  py-4 text-lg px-2 md:text-3xl tablet:px-0"
      id="header"
      >
      <ul className="flex justify-evenly items-center w-full col-start-1 col-span-full  ">
        <li className="hover:underline underline-offset-4 transition duration-200 decoration-lime decoration-dashed after:content after:w-2 after:h-2 after:bg-[#6DD7B9] after:inline-block after:rounded-full after:ml-2">
          <Link href="#about">About Me</Link>
        </li>
        <li className="hover:underline underline-offset-4 transition duration-200 decoration-lime decoration-dashed after:content after:w-2 after:h-2 after:bg-[#6DD7B9] after:inline-block after:rounded-full after:ml-2">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="hover:underline underline-offset-4 transition duration-200 decoration-lime decoration-dashed after:content after:w-2 after:h-2 after:bg-[#6DD7B9] after:inline-block after:rounded-full after:ml-2">
          <Link href="#skills">Skills</Link>
        </li>

        <li className="hover:underline underline-offset-4 transition duration-200 decoration-lime decoration-dashed after:content after:w-2 after:h-2 after:bg-[#6DD7B9] after:inline-block after:rounded-full after:ml-2">
          <Link href="#getintouch">Contact</Link>
        </li>
      </ul>
    </header>
      </Reveal>
  );
}
