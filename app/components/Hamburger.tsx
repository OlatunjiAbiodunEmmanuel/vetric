import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { logoLinks, navLinks } from "@/lib/constant";
import Image from "next/image";
import { ModeToggle } from "./toggle";
import Link from "next/link";

const Hamburger = () => {
  return (
    <div className="">
      <Sheet>
        <SheetTrigger>
          {" "}
          <MenuIcon className="text-[#99e570 text-white" />
        </SheetTrigger>
        <SheetContent className="bg-[#121212]">
          <SheetHeader className="">
            <SheetTitle className="mb-6">
              <Link href="/">
                <Image src="/llogo.png" alt="Logo" width={100} height={100} />
              </Link>
            </SheetTitle>
            <SheetDescription className="flex flex-col text-start gap-8 font-bold text-sm">
              {navLinks.map((link) => (
                <span key={link.url}>
                  <a href={link.url} className="text-[#99e570 text-white">
                    {link.label}
                  </a>
                </span>
              ))}
            </SheetDescription>
          </SheetHeader>
          <div className="mx-auto h-[0.1px] w-[90%] bg-gray500 bg-white  mt-8"></div>
              {/* <p className="text-1xl text-center mt-4 text-white">
                Our Socials
              </p> */}
          <div className="mt-4 grid grid-cols-3 gap-4 max-w-[90% ">
            {logoLinks.map((logo) => (
              <div
                key={logo.id}
                className="bg-[#6a6a6c] h-auto w-auto p-2 textcenter flex items-center justify-center"
                style={{ borderRadius: "15px" }}
              >
                <Link href={logo.url}>
                  {" "}
                  <Image
                    src={logo.image}
                    alt="logo"
                    width={40}
                    height={40}
                    className=""
                  />
                </Link>
              </div>
            ))}
          </div>
          <div className="mx-auto h-[0.1px] w-[1107px w-[90%] bg-gray500 bg-white mt-4"></div>


          {/* <div className="mt-20 grid grid-cols-4 items-center w-[90%] mx-auto gap-8 text-white">
            <Link href="/">Support</Link>
            <Link href="/">Partnership</Link>
            <Link href="/">Listing</Link>
            <Link href="/">Legal</Link>
            <Link href="/">About Us</Link>
          </div> */}

          <div className="fixed bottom-4 right-4 text-[#99e570]">
            <ModeToggle />
          </div>
          <div className="fixed bottom-4  text-[#99e570] flex items-center justify-between">
            <Image src="/llogo.png" alt="Logo" width={100} height={100} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Hamburger;
