import TipsCariKos from "@/components/sections/TipsCariKos";
import Footer from "@/components/sections/Footer";
import { cn } from "@/lib/utils"; // Pastikan path utils benar

export default function simulationPage() {
  return (
    <main className={""}>
      
      <div>
        <TipsCariKos />

      </div>
      
      <Footer />
    </main>
  );
}