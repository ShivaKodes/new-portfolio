import { StaticImageData } from "next/image";

export interface StateProps{
  active:boolean,
  index:number
}


export interface Project {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  github: string;
  live: string;
  color: string;
  tech: { id: number; name: string }[];
}