import HeroSection from "./components/heroSection";
import Lore from "./components/Lore";
import WhatCooking from "./components/WhatCooking";





export default function Home() {
  return (
    <div className="h-screen max-h-screen mx-auto ">
      <HeroSection/>
      <Lore/>
      <WhatCooking/>
    </div>
  );
}
