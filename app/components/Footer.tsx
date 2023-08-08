"use client"

import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Reveal } from "./Reveal";

export default function Footer() {
  return (
    <footer
      className="w-full col-span-full flex flex-col items-center mt-10 text-white"
      id="footer"
    >
      <Reveal>

      <h3 className="text-[#6DD7B9] font-serif text-base md:text-2xl mb-10">
        Crafted with <span className="text-red">&#x2764;</span>
      </h3>
      </Reveal>
      <a href="#header" className="text-base text-white/70">
        back to top
      </a>
      <Marquee
        className="text-white  bg-transprent border-y-2 border-white/30 mt-5 mb-10 overflow-hidden"
        speed={80}
        gradient={false}
      >
        <div className="col-span-full  flex whitespace-nowrap text-lg md:text-3xl font-mulish">
          <p className="after:content after:w-4 after:h-4 after:bg-lime after:inline-block after:rounded-full after:mr-3">
            Available to build{" "}
          </p>
          <p className="after:content after:w-4 after:h-4 after:bg-lime after:inline-block after:rounded-full after:mr-3">
            Get in touch{" "}
          </p>
          <p className="after:content after:w-4 after:h-4 after:bg-lime after:inline-block after:rounded-full after:mr-3">
            Available to build{" "}
          </p>
          <p className="after:content after:w-4 after:h-4 after:bg-lime after:inline-block after:rounded-full after:mr-3">
            Get in touch{" "}
          </p>
          <p className="after:content after:w-4 after:h-4 after:bg-lime after:inline-block after:rounded-full after:mr-3">
            Available to build{" "}
          </p>
          <p className="after:content after:w-4 after:h-4 after:bg-lime after:inline-block after:rounded-full after:mr-3">
            Get in touch{" "}
          </p>
          <p className="after:content after:w-4 after:h-4 after:bg-lime after:inline-block after:rounded-full after:mr-3">
            Available to build{" "}
          </p>
          <p className="after:content after:w-4 after:h-4 after:bg-lime after:inline-block after:rounded-full after:mr-3">
            Get in touch{" "}
          </p>
          <p className="after:content after:w-4 after:h-4 after:bg-lime after:inline-block after:rounded-full after:mr-3">
            Available to build{" "}
          </p>
          <p className="after:content after:w-4 after:h-4 after:bg-lime after:inline-block after:rounded-full after:mr-3">
            Get in touch{" "}
          </p>
        </div>
      </Marquee>
    </footer>
  );
}
