import Link from "next/link";

export default function Header() {
  return (
    <header
      className="w-full  text-[#fff] font-serif grid grid-cols-12 gap-5  py-4 text-xl px-2 tablet:text-3xl tablet:px-0"
      id="header"
    >
      <ul className="flex justify-evenly items-center w-full col-start-1 col-span-full text-3xl  ">
        <li className="hover:underline underline-offset-4 transition duration-200 decoration-lime decoration-dashed">
          <Link href="#about">About Me</Link>
        </li>
        <li className="hover:underline underline-offset-4 transition duration-200 decoration-lime decoration-dashed">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="hover:underline underline-offset-4 transition duration-200 decoration-lime decoration-dashed">
          <Link href="#skills">Skills</Link>
        </li>

        <li className="hover:underline underline-offset-4 transition duration-200 decoration-lime decoration-dashed">
          <Link href="#getintouch">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
