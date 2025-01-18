import { logoLinks } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logos = () => {
  return (
    <div className="mx-auto mt-32 mb-32 max-w7xl flex flex-col items-center justify-center">
      <p className="font-normal text-2xl md:text-5xl text-center">
        JOIN DCHEF AND HIS BRIGADE HERE
      </p>
      <div className="mt-8 grid grid-cols-4 md:grid-cols-8 justifycenter gap-4 max-w-[90%] ">
        {logoLinks.map((logo) => (
          <div
            key={logo.id}
            className="bg-[#6a6a6c] p-3"
            style={{ borderRadius: "15px" }}
          >
            <Link href={logo.url}>
              {" "}
              <Image
                src={logo.image}
                alt="logo"
                width={80}
                height={80}
                className=""
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;
