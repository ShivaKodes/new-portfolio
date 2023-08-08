
"use client"
import {useEffect, useState} from "react"
import SectionHeader from "./SectionHeader";
import { BsArrowUpRight } from "react-icons/bs";
import Profile from "./Profile";
import Button from "./Button";
import { Reveal } from "./Reveal";


export default function About() {
  
  const [isMounted,setIsMounted]=useState(false)


  useEffect(()=>{
    setIsMounted(true)
  },[])
  
  if(!isMounted) return null


  return (
    <section
      className="grid grid-cols-12 px-5 tablet:px-10 gap-5 col-span-full max-w-5xl mx-auto"
      id="about"
    >
      <SectionHeader title={"About me"}/>
      <div className="col-span-full ">
          <Reveal width="100%">
        <div className=" col-span-full flex items-center justify-between">

          <Profile />
          <Button text="Download Resume"/>
        </div>
          </Reveal>
        <div className="col-span-full mt-10 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10">
          <div className="text-justify">
            <Reveal>

            <p className="text-2xl font-light font-mulish text-white ">
              It&apos;s really great to see you here. I&apos;m a passionate front end developer based in
              India. I love solving problems and building stuff with JavaScript
              and also, love to tinker around with React.
            </p>
            </Reveal>
          </div>
          <div className=" ">
            <Reveal>

            <p className="text-2xl font-light font-mulish text-white">
              With a solid foundation in web development and a hunger to keep
              learning, I&apos;m excited to see where my skills take me.{" "} 
            <p className="pt-5">Always curious .</p>
            </p>
            </Reveal>
            <Reveal>

            <a
              href="#getintouch"
              className="text-2xl font-mulish flex mt-10 group text-lime font-semibold tracking-wider"
              >
              Let&apos;s Connect{" "}
              <BsArrowUpRight
                style={{ marginLeft: "5px" }}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
                />
            </a>
                </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
