
interface PillProps{
  text:string|undefined,
  py?:string,
  my?:string,
  px?:string
}

export default function Pill({ text, py, my, px }:PillProps) {
  return (
    <div
      className={`${px ? px : "px-2"} ${
        py ? py : "py-1"
      } border border-white rounded-full w-fit mr-2 ${
        my && my
      } tablet:px-4 text-xs md:text-xl hover:bg-lime hover:font-semibold hover:border-none hover:text-light-black transition-all duration-300 ease-in-out`}
    >
      {text}
    </div>
  );
}
