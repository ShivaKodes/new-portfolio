

export interface StateProps{
  active:boolean,
  index:number
}


export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  github: string;
  live: string;
  color: string;
  tech: { id: number; name: string }[];
}