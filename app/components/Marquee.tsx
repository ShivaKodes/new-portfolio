"use client"

import Marquee from "react-fast-marquee";
import { Reveal } from "./Reveal";

export default function MarqueeText() {
  return (
    <Reveal>
    <Marquee
      className="text-white border-y-2 border-white/30 bg-transprent mt-10 overflow-hidden"
      speed={50}
      gradient={false}
    >
      <div className="col-span-full  flex whitespace-nowrap text-lg md:text-4xl font-serif">
        <p className="after:content after:w-4 after:h-4 after:bg-lime after:inline-block after:rounded-full after:mx-3">
          Let&apos;s build something{" "}
          <span className="font-mulish text-lg md:text-4xl italic text-lime">
            Amazing!
          </span>{" "}
         
        </p>
        <p className="after:content after:w-4 after:h-4 after:bg-lime after:inline-block after:rounded-full after:mx-3">
          Let&apos;s build something{" "}
          <span className="font-mulish text-lg md:text-4xl italic text-lime">
            Amazing!
          </span>{" "}
         
        </p>
        <p className="after:content after:w-4 after:h-4 after:bg-lime after:inline-block after:rounded-full after:mx-3">
          Let&apos;s build something{" "}
          <span className="font-mulish text-lg md:text-4xl italic text-lime">
            Amazing!
          </span>{" "}
         
        </p>
      </div>
    </Marquee>
    </Reveal>
  );
}
