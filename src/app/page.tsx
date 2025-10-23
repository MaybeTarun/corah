import Centers from "@/sections/Centers";
import Hero from "@/sections/Hero";
import Quote from "@/sections/Quote";
import Services from "@/sections/Services";
import Balance from "@/sections/Balance";
import Video from "@/sections/Video";
import Treatment from "@/sections/Treatment";
import Location from "@/sections/Location";
import Help from "@/sections/Help";
import Experts from "@/sections/Experts";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <Hero />
      <Quote/>
      <Centers/>
      <Balance/>
      <Services/>
      <Video/>
      <Treatment/>
      <Location/>
      <Help/>
      <Experts/>
    </main>
  );
}
