import { BsArrowDownRight, BsArrowUpLeft } from "react-icons/bs";
import { Reveal } from "./Reveal";

export default function HeroText() {
  return (
    <Reveal width="col-span-full mx-auto">
    <div className="flex  col-span-full  gap-8  px-10 py-9 text-base md:text-3xl">
      

      
      <p className=" font-mulish font-light flex flex-col items-center relative">
        

        <span className="flex">
          <BsArrowUpLeft
            className="absolute top-[0px] -left-[18px] text-[20px] md:text-[30px] md:-left-[18px]"
            />
          Portfolio of
        </span>
        
        
        <span> Shiva Kumar</span>
        
      </p>
      <div className="w-1  bg-white"></div>
      <p className=" font-mulish font-light flex flex-col items-center relative">
        <span>Happy to see</span>
        <span className="flex">
          {" "}
          you here
          <BsArrowDownRight
            
            className="absolute bottom-[0px] -right-[8px] text-[20px] md:text-[30px] md:-right-[16px] md:bottom-[5px]"
            />
        </span>
      </p>
    </div>
            </Reveal>
  );
}
