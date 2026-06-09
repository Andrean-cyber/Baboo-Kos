import SimulationPackage from "@/components/sections/SimulationPackage";
import Footer from "@/components/sections/Footer";
import { cn } from "@/lib/utils"; // Pastikan path utils benar
import VillaDetail from "@/components/sections/VillaDetail";
import TestimonialVilla from "@/components/sections/TestimonialVilla";
import FollowOurJourneyVilla from "@/components/sections/FollowOurJourneyVilla";


export default function simulationPage() {
  return (
    <main className={cn("min-h-screen", "overflow-hidden", "bg-[#FAFAFA]", "pb-16")}>
      
      <div className="pt-10 md:pt-10">
        <VillaDetail />
        <TestimonialVilla />
        <FollowOurJourneyVilla />
      </div>
      
      <Footer />
    </main>
  );
}