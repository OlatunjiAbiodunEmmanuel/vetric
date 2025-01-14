import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="mx-auto p12 pt-8 pb-4 md:pb-28 bg-cover md:bg-contain"
      style={{
        backgroundImage: "url(/Glow.png)",
        // backgroundSize: "contain",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center",
      }}
    >
      <section className="flex flex-col md:flex-row items-center justify-center md:gap-24 mx-auto space-y-8 md:space-y-0 md:space-x-8">
        <div className="lg:w-[641px] text-center md:text-left text-3xl md:text-5xl font-normal bgyellow-500">
          Can you stand the heat in the Degen Kitchen?
          <p className="font-normal text-sm md:text-xl mt-4 md:mt-8">
            A cool Sphynx cat chef cooking up inspirations by day and tokens by
            night!
          </p>
        </div>
        <Image
          src="/heroimg.png"
          alt="Lore Image"
          width={400}
          height={470}
          className="bggreen-500 w-[300px] sm:w-[200px] md:w-[400px] h-auto"
        />
      </section>
    </div>
  );
};

export default HeroSection;
