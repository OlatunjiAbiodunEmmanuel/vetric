import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <div className="w-[95%] min-h-screen relative mx-auto mt-8 md:mt-20">
      <div className="relative z-10 flex flex-col items-center textwhite justify-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:7xl font-bold text-center bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent">
          Create a Beautiful Image with Vetric
          <br /> Artificial Intelligence
        </h1>
        <p className="mt-3 text-sm md:text-base font-semibold text-center text-gray300">
          Get started with our AI-powered image generator tools
        </p>
        <div className="h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-gray-600 rounded-lg 
        mt-12 px-2 md:px-6 flex items-center justify-between">
          <input
            type="text"
            placeholder="Generate your dream Image"
            className="h-full outline-none w-full block flex-1 placeholder:text-xs sm:placeholder:text-base bg-transparent rounde"
          />
          <Button className="bg-green-400 rounded-md px-6">Generate</Button>
        </div>
        <div className="flex items-center mt-6 space-x-4 flex-wrap space-y-3">
            <p>
                Popular Tags:
            </p>
            <Button>!</Button>
            <Button>!</Button>
            <Button>!</Button>
            <Button>!</Button>

        </div>
      </div>
    </div>
  );
};

export default Hero;
