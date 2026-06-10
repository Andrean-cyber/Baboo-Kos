import PrivacyPolicy from "@/components/sections/privacyPolicy";
import Footer from "@/components/sections/Footer";
import { cn } from "@/lib/utils"; // Pastikan path utils benar

export default function simulationPage() {
  return (
    <main className={cn("")}>
      
      <div>
        <PrivacyPolicy />

      </div>
      
      <Footer />
    </main>
  );
}