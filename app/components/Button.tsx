import Link from "next/link";

interface ButtonProps{
  text:string
}

export default function Button({text}:ButtonProps) {
  return (
    <Link
      href="https://shrtco.de/X4899P"
      target={"_blank"}
      rel="noreferrer"
      className="font-mulish w-fit px-4 tablet:px-5 rounded-full text-sm md:text-base py-1 tablet:text-lg text-white border-2 border-lime border-double hover:bg-lime hover:text-black hover:font-semibold transition-all duration-200 ease-in-out text-center"
    >
      {text}
    </Link>
  );
}
