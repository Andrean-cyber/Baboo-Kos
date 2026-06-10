import SimulationPackage from "@/components/sections/SimulationPackage";
import Footer from "@/components/sections/Footer";
import { cn } from "@/lib/utils"; // Pastikan path utils benar
import PricingPackages from "@/components/sections/PricingPackages";
import PartnershipGuide from "@/components/sections/partnershipGuide";

export default function simulationPage() {
  return (
    <main className={cn("min-h-screen", "overflow-hidden", "bg-[#FAFAFA]", "pb-16")}>
      
      <div className="pt-10 md:pt-10">
        <PricingPackages />
        <SimulationPackage />
        <PartnershipGuide />
      </div>
      
      <Footer />
    </main>
  );
}