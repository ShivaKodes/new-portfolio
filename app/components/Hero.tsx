"use client";

import { useRef } from "react";
import HeroText from "./HeroText";
import { Reveal } from "./Reveal";



export default function Hero() {
  
// opacity-80 bg-[radial-gradient(#fff_0.5px,transparent_0.5px)] bg-[length:10px_10px]
  return (
    
    <section
      className="w-full  text-[#fff]  pt-10  col-span-full select-none grid grid-cols-6 px-2 tablet:px-10 gap-5 tablet:grid-cols-12  "
      id="project"
    >
      <div className="max-w-1/2 z-10 text-white mx-auto text-center col-span-full">
        
        
        <h1
          className={`text-5xl md:text-8xl xl font-serif
          text-lime flex flex-col items-center py-4`}
        >
          {/* <span className="m-0"> */}
            {/* {data.map((item, index) => (
              <span
                key={index}
                className="leading-tight"
                ref={frontendRef}
                style={{ transform: "translateY(100%)" }}
              >
                {item}
              </span>
            ))}
          </span>{" "}
          </Reveal>
          <Reveal>
         
          <span
            className="leading-tight
          "
          >
            Developer */}
            Hey, I&apos;m Shiva. 
          {/* </span> */}
        </h1>
           
           <Reveal>

        <p className="max-w-xl text-justify text-base md:text-xl px-5 md:px-0">I&apos;m a <span className="text-lime">frontend developer</span> with a knack of design. Over the span of last one year, I have built many frontend and full-stack applications which has made me a better developer. I </p>
           </Reveal>
      </div>
      <HeroText />
    </section>
  );
}
