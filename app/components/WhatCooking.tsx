import { Brigade } from '@/lib/constant';
import Image from 'next/image';
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const WhatCooking = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row items-center justify-center max-w-[90%] gap-10 mt-8">
      {Brigade.map((item) => (
        <Card
          key={item.desp}
          className="border-0 rounded-t-md flex flex-col flex-grow flex-shrink-0 basis-[300px] md:h-[455px] justify-between text p-4 shadow-md bg-[#23341C] text-white"
        >
          <CardHeader className="flex flex-col">
            <Image
              src={item.image}
              alt={item.label}
              width={80}
              height={80}
              className="mb-4"
            />
            <CardTitle className="text-3xl font-normal">{item.label}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-xl font-normal">{item.desp}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default WhatCooking;
