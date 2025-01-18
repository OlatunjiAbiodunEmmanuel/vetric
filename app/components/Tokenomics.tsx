import { tokenomics } from "@/lib/constant";
import Image from "next/image";
import React from "react";

const Tokenomics = () => {
  return (
    <div className="mx-auto max-w-[90%] md:max-w-7xl flex flex-col md:flex-row items-center justify-between gap8 md:gap24 mt-6 md:mt-20">
      <Image
        src="/tokenomics.png"
        alt="Tokenomics Image"
        width={400}
        height={470}
        className="bggreen-500 w-[300px] sm:w-[200px] md:w-[400px] h-auto mt-8"
      />

      <div className="md:w-[470px] mt-12 md:mt-10">
        <p className="font-normal text-xl md:text-[54px] md:mb-8 text-center md:text-start">
          TOKENOMICS
        </p>
        <p className="font-normal text-base md:text-3xl text-center md:text-start">
          DChef wants as many Degen cooks out there to join the brigade.
        </p>

        <div className="flex flex-col gap-8 mt-8">
          {tokenomics.map((item) => (
            <div
              key={item.label}
              className="bg-[#23341C bg-[#def1d5] dark:bg-[#23341C] flex itemscenter justify-between gap-4 pe-4 roundedlg shadow-md w-auto h-auto rounded-lg"
              style={{borderRadius:"15px"}}
            >
              <p className="break-words ps-8 pt-4">{item.label}</p>
              <div className=" p-4 flex-shrink-0  bg-[#eaeaf1 dark:bg-[#C79576]">
                <Image
                  src={item.image}
                  alt={item.label} 
                  width={136}
                  height={140}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
