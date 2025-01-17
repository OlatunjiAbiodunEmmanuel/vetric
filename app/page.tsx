import HeroSection from "./components/heroSection";
import HowToBuy from "./components/HowToBuy";
import Logos from "./components/Logos";
import Lore from "./components/Lore";
import Tokenomics from "./components/Tokenomics";
import WhatCooking from "./components/WhatCooking";





export default function Home() {
  return (
    <div className="mx-auto ">
      <HeroSection/>
      <Lore/>
      <WhatCooking/>
      <Tokenomics/>
      <HowToBuy/>
      <Logos/>
    </div>
  );
}
