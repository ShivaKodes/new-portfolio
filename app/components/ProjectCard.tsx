import { BsArrowUpRight } from "react-icons/bs";
import Pill from "./Pill";
import Link from "next/link";
import { Project, StateProps } from "@/types";
import { Reveal } from "./Reveal";

interface ProjectCardProps{
  project:Project,
  index:number
  setModal:React.Dispatch<React.SetStateAction<StateProps>>
}

export default function ProjectCard({ project, index, setModal }:ProjectCardProps) {
  const cards = (
   
    <div
      className="text-white flex items-center col-span-full w-full border-t border-white/50 pt-5 font-mulish user-select-none hover:opacity-70 group transition duration-200 ease-linear"
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
    >
      <div className="w-full flex items-center h-full">
        
        <article className="flex flex-col self-start flex-1  w-1/2 tablet:gap-2 group-hover:translate-x-3 transition duration-200 ease-linear">
          <Reveal width="100%">
          <h3 className="text-xl md:text-3xl lg:text-4xl text-lime">
            {project.name}
          </h3>
          </Reveal>
          <Reveal>
          <p className="text-xs md:text-lg   text-white/70">
            {project.description}
          </p>
          </Reveal>
          <Reveal>
          <div className="flex flex-wrap w-full ">
            

            
            {project.tech.map((tech) => (
              <Pill
                key={tech.id}
                text={tech.name}
                py={"py-0"}
                my={"my-1"}
                px={"px-3"}
              />
            ))}
          </div>
            </Reveal>
        </article>
        <Reveal>
        <div className="col-start-10 flex flex-col items-end gap-2 tablet:gap-4 font-bold italic text-[clamp(0.75rem,0.3928571428571429rem+1.7857142857142856vw,2rem)] group-hover:-translate-x-3 transition duration-200 ease-linear">
          <Link
            href={`https://${project.github}`}
            className="flex items-center group"
            
          >
            github{" "}
            <span className="group-hover:scale-110">
              <BsArrowUpRight />
            </span>
          </Link>
          <Link
            href={`https://${project.live}`}
            className="flex items-center group"
             
          >
            try here
            <span className="group-hover:scale-110">
              <BsArrowUpRight />
            </span>
          </Link>
        </div>
      </Reveal>
      </div>
    </div>
   
  );

  return cards;
}
