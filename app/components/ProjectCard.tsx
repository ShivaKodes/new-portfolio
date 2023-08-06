import { BsArrowUpRight } from "react-icons/bs";
import Pill from "./Pill";
import Link from "next/link";
import { Project, StateProps } from "@/types";

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
          <h3 className="text-[clamp(1.125rem,0.875rem+1.25vw,2rem)] text-lime">
            {project.name}
          </h3>
          <p className="text-[clamp(0.75rem,0.6428571428571428rem+0.5357142857142857vw,1.125rem)]   text-white/70">
            {project.description}
          </p>
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
        </article>
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
      </div>
    </div>
  );

  return cards;
}
