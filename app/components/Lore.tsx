import Image from "next/image";
import React from "react";
  

const Lore = () => {
  return (
<section className="flex flex-col-reverse md:flex-row items-center justify-center bgred-500 mx-auto container space-y-8 md:space-y-0 md:space-x-8">
  <Image
    src="/img4.png"
    alt="Lore Image"
    width={400}
    height={470}
    className="bggreen-500 w-[300px] sm:w-[200px] md:w-[400px] h-auto"
  />
  <div className="lg:w-[641px] text-center md:text-left text-3xl md:text-5xl font-normal bgyellow-500">
    Can you stand the heat in the Degen Kitchen?
    <p className="font-normal text-sm md:text-xl mt-4 md:mt-8">
      A cool Sphynx cat chef cooking up inspirations by day and tokens by night!
    </p>
  </div>
</section>

  );
};

export default Lore;
