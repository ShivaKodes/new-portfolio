import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import me from "@/public/pass-pic.png";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="col-span-3 flex flex-row items-center gap-6 text-white/80 h-[128px]">
      <Image src={me} alt="" className="w-[30%] max-w-[200px] rounded-full " />
      <Link
        href="https://www.linkedin.com/in/shivakumar17"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#0077b5] drop-shadow-lg"
      >
        <BsLinkedin size={24} />
      </Link>
      <Link
        href="https://www.github.com/ShivaKodes"
        target="_blank"
        rel="noopener noreferrer "
        className="hover:text-[#4078c0]"
      >
        <BsGithub size={24} />
      </Link>
      <Link
        href="https://twitter.com/__shk20_"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#1DA1F2]"
      >
        <BsTwitter size={24} />
      </Link>
    </div>
  );
}
