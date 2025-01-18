import { Brigade } from "@/lib/constant";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhatCooking = () => {
  return (
    <section className="mx-auto">
      <div className="text-center mt-8 mb-10">
        <p className="font-normal text-2xl md:text-[55px] md:mb-8">
          WHAT&apos;S COOKIN?
        </p>
        <p className="font-normal text-lg md:text-4xl">Join the Brigade</p>
      </div>
      <div className="mx-auto flex flex-col md:flex-row items-center justify-center max-w-[90%] md:max-w-7xl gap-10 mt-8">
        {Brigade.map((item) => (
          <Card
            key={item.desp}
            style={{borderRadius:"15px"}}
            className="border-0 flex flex-col flex-grow flex-shrink-0 basis-[300px] md:h-[455px] justify-between text p-4 shadow-md bg-[#def1d5] dark:bg-[#23341C]"
          >
            <CardHeader className="flex flex-col">
              <Image
                src={item.image}
                alt={item.label}
                width={80}
                height={80}
                className="mb-4"
              />
              <CardTitle className="text-3xl font-normal">
                {item.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-xl font-normal">{item.desp}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WhatCooking;
