import { logoLinks } from "@/lib/constant";
import Image from "next/image";
import React from "react";

const Logos = () => {
  return (
    <div className="mx-auto mt-32 max-w-7xl flex flex-col items-center justify-center">
      <p className="font-normal text-2xl md:text-5xl">
        JOIN DCHEF AND HIS BRIGADE HERE
      </p>
      <div className="mt-8 flex items-center justify-center gap-4 max-w-[90%] ">
        {logoLinks.map((logo) => (
          <div key={logo.id} className="bg-[#6a6a6c] p-3" style={{borderRadius:"15px"}}>
            <Image
              src={logo.image}
              alt="logo"
              width={80}
              height={80}
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;
