import Image from "next/image";
import React from "react";
import Hamburger from "./Hamburger";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div className="p-4 sticky top-0 bg-[#07070A] flex justify-between px0 md:px-10 mxauto items-center bg-red300">
      <Image src="/llogo.png" alt="Logo" width={160} height={100} />
      <div className="hidden md:flex items-center justify-around gap-6 font-semibold text-sm">
        <Button>About us</Button>
        <Button>How to Buy</Button>
        <Button>TOKENOMICS</Button>
        <Button>Contact</Button>
      </div>
      <div className="md:hidden">
        <Hamburger />
      </div>
    </div>
  );
};

export default NavBar;
