
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { navLinks } from "@/lib/constant";
import Image from "next/image";
import { ModeToggle } from "./toggle";
import Link from "next/link";

const Hamburger = () => {
  return (
    <div className="">
      <Sheet>
        <SheetTrigger>
          {" "}
          <MenuIcon className="text-[#99e570]"/>
        </SheetTrigger>
        <SheetContent className="bg-[#121212]">
          <SheetHeader>
            <SheetTitle className="mb-6"><Link href="/"><Image src="/llogo.png" alt="Logo" width={100} height={100} /></Link></SheetTitle>
            <SheetDescription className="flex flex-col gap-8 font-bold text-1xl left">
               {navLinks.map((link) => (
                      <span key={link.url}>
                        <a href={link.url} className="text-[#99e570]">{link.label}</a>
                      </span>
                    ))}
            </SheetDescription>
          </SheetHeader>
                    <div className="fixed bottom-4 right-4 text-[#99e570]">
                      <ModeToggle/>
                    </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Hamburger; 