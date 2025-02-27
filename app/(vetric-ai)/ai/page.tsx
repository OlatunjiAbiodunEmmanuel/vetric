import React from "react";
import Hero from "../components/Hero";
import { ModeToggle } from "@/app/components/toggle";
import RecentImg from "../RecentImage/RecentImg";

const page = () => {
  return (
    <div className="mxauto h-screen">
      <Hero />
      <RecentImg />
      <div className="fixed bottom-4 right-4  md:hidden text-black dark:text-white">
        <ModeToggle />
      </div>
    </div>
  );
};

export default page;
