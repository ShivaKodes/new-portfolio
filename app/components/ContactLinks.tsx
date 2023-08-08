import Image from "next/image";
import Link from "next/link";

import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

export default function ContactLinks() {
  return (
    <div className="text-4xl  flex flex-col items-center justify-center">
      <ul className="flex flex-row justify-center items-center">
        <li className="mx-2 text-[#1DA1F2]  ">
          <Link href="https://twitter.com/__shk20_" target={"_blank"} className="">
           <Image src={'/logo.svg'} className="hover:-translate-y-1 transition duration-200 ease-in-out" width={24} height={24} alt="x logo"/>
          </Link>
        </li>
        <li className="mx-2  bg-[linear-gradient(45deg,_#f09433_0%,_#e6683c_25%,_#dc2743_50%,_#cc2366_75%,_#bc1888_100%)] rounded-md drop-shadow-lg hover:-translate-y-1 transition duration-200 ease-in-out ">
          {" "}
          <Link href="https://www.instagram.com/work.shiva" target={"_blank"}>
            <AiFillInstagram className=""/>
          </Link>
        </li>
        <li className="mx-2 text-[#4078c0] drop-shadow-lg shadow-beige">
          {" "}
          <Link href="https://www.github.com/ShivaKodes" target={"_blank"}>
            <AiFillGithub className="hover:-translate-y-1 transition duration-200 ease-in-out"/>
          </Link>
        </li>
        <li className="mx-2 text-[#0077b5] drop-shadow-lg">
          {" "}
          <Link
            href="https://www.linkedin.com/in/shivakumar17"
            target={"_blank"}
          >
            <AiFillLinkedin className="hover:-translate-y-1 transition duration-200 ease-in-out"/>
          </Link>
        </li>
      </ul>
    </div>
  );
}
