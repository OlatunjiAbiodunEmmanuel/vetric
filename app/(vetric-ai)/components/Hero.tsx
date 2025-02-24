import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center">
        {/* Hero Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent leading-tight">
          Create a Beautiful Image with <br /> Vetric AI
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-sm md:text-lg font-medium">
          Get started with our AI-powered image generator tools
        </p>

        {/* Input & Button Section (PERFECTLY CENTERED) */}
        <div className="h-14 mx-auto md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-gray-600 rounded-lg 
        mt-12 px-2 md:px-6 flex items-center justify-between">
          <input
            type="text"
            placeholder="Generate your dream image..."
            className="h-full outline-none w-full block flex-1 placeholder:text-xs sm:placeholder:text-base bg-transparent "
          />
          <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-r-lg shadow-md transition">
            Generate
          </Button>
        </div>

        {/* Popular Tags */}
        <div className="flex flex-wrap justify-center items-center mt-6 gap-3">
          <p className="text-white font-medium">Popular Tags :</p>
          {["Nature", "Fantasy", "Cyberpunk", "Anime"].map((tag, index) => (
            <Button key={index} className="bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-full shadow-sm text-sm">
              {tag}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
