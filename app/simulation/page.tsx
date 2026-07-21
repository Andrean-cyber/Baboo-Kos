import SimulationPackage from "@/components/sections/SimulationPackage";
import PromoSection from "@/components/sections/PromoSection";
import Footer from "@/components/sections/Footer";
import { cn } from "@/lib/utils"; // Pastikan path utils benar
import PricingPackages from "@/components/sections/PricingPackages";
import PartnershipGuide from "@/components/sections/partnershipGuide";
import TestimonialPartnership from "@/components/sections/TestimonialPartnership";

export default function simulationPage() {
  return (
    <main className={cn("min-h-screen", "overflow-hidden", "bg-[#FAFAFA]")}>
      
      <div className="pt-10 md:pt-10">
        <PromoSection />
        <PricingPackages />
        <SimulationPackage />
        <PartnershipGuide />
        <TestimonialPartnership />
      </div>
      <Footer />
    </main>
  );
}