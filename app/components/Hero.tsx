"use client";

import { useRef } from "react";
import HeroText from "./HeroText";


export default function Hero() {
  const data = ["F", "r", "o", "n", "t", "e", "n", "d"];
  const frontendRef = useRef(null);
  const developerRef = useRef(null);

  // const splitFrontend =
  // const splitDeveloper = new SplitType(developerRef.current);
  // console.log(frontendRef);
  // gsap.to(frontendRef.current, {
  //   duration: 0.1,
  //   y: 0,
  //   stagger: 0.05,
  //   delay: 0.2,
  // });

  return (
    <section
      className="w-full  text-[#fff]  pt-10  col-span-full select-none grid grid-cols-6 px-2 tablet:px-10 gap-5 tablet:grid-cols-12 "
      id="project"
    >
      <div className="max-w-1/2 z-10 text-white mx-auto text-center col-span-full">
        <h1
          className="text-[clamp(1.5rem,1rem+10vw,6rem)]
         font-serif text-lime flex flex-col items-center"
        >
          <span className="m-0">
            {data.map((item, index) => (
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
          <span
            className="leading-tight
          "
          >
            Developer
          </span>
        </h1>
      </div>
      <HeroText />
    </section>
  );
}
