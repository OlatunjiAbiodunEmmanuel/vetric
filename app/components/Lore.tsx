import Image from "next/image";
import React from "react";

const Lore = () => {
  return (
    <section className="md:pt-12 flex flex-col-reverse md:flex-row items-center justify-center md:gap-24 mx-auto space-y-8 md:space-y-0 md:space-x-8">
      <Image
        src="/img4.png"
        alt="Lore Image"
        width={400}
        height={470}
        className="bggreen-500 w-[300px] sm:w-[200px] md:w-[400px] h-auto mt-8"
      />
      <div className="lg:w-[641px] text-center md:text-left text-3xl md:text-5xl font-normal container">
        THE DCHEF LORE
        <p className="mt-4 font-normal text-xl">
          Who&apos;s serving up these Dichelin Stars?
        </p>
        <p className="font-normal text-sm md:text-xl mt-4 md:mt-8">
          Dgen Chef was born in a chaotic depths of the internet, where only the
          boldest degens thrive.
        </p>
        <p className="font-normal text-sm md:text-xl mt-4 md:mt-8">
          A hairless cunning sphynx cat grinding through the levels of a French
          kitchen brigade, he realised that it was not Michelin stars but Degen
          stars is where he would make his mark.
        </p>
        <p className="font-normal text-sm md:text-xl mt-4 md:mt-8">
          Cooking up degen recipes every day such as Kimchi Carbonara or Chicken
          Tikka Pizza, its DChef&apos;s dream to launch a 5 star restaurant,
          serving up great food to the loyal community of DChef tokenolders and
          frens.
        </p>
      </div>
    </section>
  );
};

export default Lore;
