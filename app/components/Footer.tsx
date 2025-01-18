import {
  Facebook,
  Instagram,
  LinkedinIcon,
  LucideTwitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#0D0E14] flex flex-col items-center justify-center p-10 gap-8">
      <Image
        src="/llogo.png"
        alt="Logo"
        width={100}
        height={100}
        className=""
      />
      <Image
        src="/footer.png"
        alt="Logo"
        width={228}
        height={158}
        className=""
      />
      <div className="w-7xl h-[0.1px] w-[1107px w-[80%] bg-gray-500  mt-3"></div>

      <footer className="mt-6 w-full px-4 text-center flex justify-between max-w-[80%] items-center">
        <p className="text-sm font-light flex items-center justify-between ">
          <Image
            src="/llogo.png"
            alt="Logo"
            width={100}
            height={100}
            className="me-2"
          />{" "}
          @ 2024
        </p>

        <div className="md:flex items-center justify-center gap-4 mt-4 hidden">
          <Instagram className="text-white hover:text-gray-400 cursor-pointer" />
          <Facebook className="text-white hover:text-gray-400 cursor-pointer" />
          <Youtube className="text-white hover:text-gray-400 cursor-pointer" />
          <LinkedinIcon className="text-white hover:text-gray-400 cursor-pointer" />
          <LucideTwitter className="text-white hover:text-gray-400 cursor-pointer" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
