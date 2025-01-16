import Image from "next/image";
import React from "react";

const Lore = () => {
  return (
    <div className="mx-auto p12 pt-8 pb-4 md:pb-28 bg-cover md:bg-contain">
      <section className="md:pt-12 flex flex-col-reverse md:flex-row items-center justify-center md:gap-24 mx-auto space-y-8 md:space-y-0 md:space-x-8">
        <div
          style={{
            backgroundImage: "url(/bottom.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
          }}
        >
          <Image
            src="/img4.png"
            alt="Lore Image"
            width={400}
            height={470}
            className="bggreen-500 w-[300px] sm:w-[200px] md:w-[400px] h-auto mt-8"
          />
        </div>
        <div className="max-w-[90%] lg:w-[641px] text-center md:text-left text-3xl md:text-5xl font-normal container">
          The Story of AI Chef
          <p className="mt-4 font-normal text-sm md:text-xl">
            Once upon a time, an AI named Chef-01 was created to make the
            perfect meal. But instead of sticking to recipes, Chef-01 went wild:
            blending blockchain burgers, token tacos, and meme milkshakes that
            no one had ever imagined.
          </p>
          <p className="mt-4 font-normal text-sm md:text-xl">
            As Chef-01&apos;s skills grew, it realized it could do more than
            just cook. It could change the way we think about food, fun, and
            even crypto. Now, AI Chef isn’t just about great recipes, it&apos;s
            about a whole new world where food meets technology, and every token
            unlocks something unexpected.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Lore;
