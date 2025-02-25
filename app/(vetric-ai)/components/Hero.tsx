"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const Hero = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImageGeneration = async () => {
    setIsLoading(true);
    const options = {
      method: "POST",
      url: "https://ai-text-to-image-generator-api.p.rapidapi.com/realistic",
      headers: {
        "x-rapidapi-key": "1d2d75d357msha14bedbb0794437p15c30ejsn1a4f8155a608",
        "x-rapidapi-host": "ai-text-to-image-generator-api.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        inputs: prompt,
      },
    };
    try {
      const response = await axios.request(options);
      setImage(response?.data.url);
      toast.success("Image generated successfully");
      console.log(response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        toast.error(error.response?.data.message);
      } else {
        toast.error("an unexpected error occured");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadImage=()=>{
    const link = document.createElement("a");
    link.target="_blank";
    link.href=image;
    link.download="generated-img.jpg";
    link.click()

  }

  return (
    <div className="w-full min-h-screen relative mx-auto mt-8 md:mt-20">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent leading-tight">
          Create a Beautiful Image with <br /> Vetric AI
        </h1>

        <p className="mt-4 text-sm md:text-lg font-medium">
          Get started with our AI-powered image generator tools
        </p>

        <div
          className="h-14 mx-auto md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-gray-600 rounded-lg 
        mt-12 px-2 md:px-6 flex items-center justify-between"
        >
          <input
            type="text"
            placeholder="Generate your dream image..."
            className="h-full outline-none w-full block flex-1 placeholder:text-xs sm:placeholder:text-base bg-transparent "
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            onClick={handleImageGeneration}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-r-lg shadow-md transition"
          >
            Generate
          </Button>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-6 gap-3">
          <p className="bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent font-medium">
            Popular Tags :
          </p>
          {["Nature", "Fantasy", "Cyberpunk", "Anime"].map((tag, index) => (
            <Button
              key={index}
              className="bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-full shadow-sm text-sm"
            >
              {tag}
            </Button>
          ))}
        </div>

        {isLoading && (
          <div>
            <Loader className="animate-spin mt-6 text-center" />
          </div>
        )}
        {image && (
          <div className="mt-8 flex flex-col items-center">
            <img
              src={image}
              alt="Ai image"
              className="max-w-full h-[500px] rounded-lg shadow-lg"
            />
            <Button onClick={handleDownloadImage} className="bg-orange-500-500 hover:bg-orange-800 bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent  px-6 py-3 ">
              Download
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
