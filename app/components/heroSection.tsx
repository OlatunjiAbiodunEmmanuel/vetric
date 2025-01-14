import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="mx-auto p-12 bg-blue500"
      style={{
        backgroundImage: "url(/Glow.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className=" mxauto md:flex items-center justify-around bg-red500">
        <div className="lg:w-[641px] text-3xl md:text-5xl  font-normal mxauto bg-yellow500">
          Can you stand the heat in the Degen Kitchen?
          <p className="font-normal text-sm md:text-xl mt-4 md:mt-8">
            A cool Sphynx cat chef cooking up inspirations by day and tokens by
            night!
          </p>
        </div>
       
          <Image
            src="/heroimg.png"
            alt="Hero Image"
            width={400}
            height={470}
            className="bg-green500 mt-8 md:mt-0"
          />
     
      </section>
    </div>
  );
};

export default HeroSection;
