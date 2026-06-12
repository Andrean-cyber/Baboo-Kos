import HandbookAnakRantau from "@/components/sections/HandbookAnakRantau";
import Footer from "@/components/sections/Footer";
import { cn } from "@/lib/utils"; // Pastikan path utils benar

export default function simulationPage() {
  return (
    <main className={""}>
      
      <div>
        <HandbookAnakRantau />

      </div>
      
      <Footer />
    </main>
  );
}