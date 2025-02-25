"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const Hero = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImageGeneration = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt before generating.");
      return;
    }

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
      toast.success("Image generated successfully!");
    } catch (error) {
      toast.error(
        axios.isAxiosError(error) && error.response?.data.message
          ? error.response.data.message
          : "An unexpected error occurred."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadImage = () => {
    if (!image) return;
    const link = document.createElement("a");
    link.href = image;
    link.target = "_blank";
    link.download = "generated-image.jpg";
    link.click();
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4 mt-8 md:mt-16">
      <div className="text-center">
        {/* Hero Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent leading-tight">
          Create a Beautiful Image with <br /> Vetric AI
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-sm md:text-lg font-medium text-gray-300">
          Get started with our AI-powered image generator tools
        </p>

        {/* Input & Button Section */}
        <div className="mt-8 w-full sm:w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] flex items-center bg-gray-700 rounded-lg shadow-lg mx-auto">
          <input
            type="text"
            placeholder="Generate your dream image..."
            className="h-12 md:h-14 flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-4 text-sm md:text-base"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            onClick={handleImageGeneration}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-r-lg shadow-md transition"
            disabled={isLoading}
          >
            {isLoading ? "Generating..." : "Generate"}
          </Button>
        </div>

        {/* Popular Tags */}
        <div className="flex flex-wrap justify-center items-center mt-6 gap-3">
          <p className="bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent font-medium">
            Popular Tags:
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

        {/* Loader (Centered) */}
        {isLoading && (
          <div className="flex justify-center mt-6">
            <Loader className="animate-spin text-gray-300" />
          </div>
        )}

        {/* Generated Image */}
        {image && (
          <div className="mt-8 flex flex-col items-center">
            <img
              src={image}
              alt="Generated AI"
              className="max-w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
            <Button
              onClick={handleDownloadImage}
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md shadow-md transition"
            >
              Download
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
