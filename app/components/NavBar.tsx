"use client";

import Image from "next/image";
import React from "react";
import { navLinks } from "@/lib/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hamburger from "./Hamburger";

const NavBar = () => {
  const pathname = usePathname();
  const isAiPage = pathname === "/ai"; 

  return (
    <nav className="p-4 sticky top-0 z-50 shadow-md bg-[#07070A] flex items-center justify-between md:px-10">
      {isAiPage ? (
        
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <Image src="/llogo.png" alt="Logo" width={160} height={100} />
          </Link>
        </div>
      ) : (
     
        <>
          <Link href="/">
            <Image src="/llogo.png" alt="Logo" width={160} height={100} />
          </Link>

          <div className="hidden md:flex items-center justify-around gap-6 font-semibold text-sm">
            {navLinks.map((link) => (
              <div
                key={link.url}
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#99e570] after:w-full
                after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300"
              >
                <Link href={link.url} className="text-[#99e570]">
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <Hamburger />
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
