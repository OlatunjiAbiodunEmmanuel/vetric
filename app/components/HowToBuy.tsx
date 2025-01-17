import Image from "next/image";
import React from "react";

const HowToBuy = () => {
  return (
    <div
      className="flex flex-col md:flex items-center justify-between max-w-[90%] md:max-w-7xl mx-auto mt-32 border-2 border-[#22341c]
      "
      style={{
        backgroundImage: "url(/buy.png)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        borderRadius: "15px",
      }}
    >
      <div className="">
        <Image
          src="/buyimg.png"
          alt="Lore Image"
          width={400}
          height={470}
          className="bggreen-500 w-[300px] sm:w-[200px] md:w-[400px] h-auto mt-8"
        />
      </div>
    </div>
  );
};

export default HowToBuy;
