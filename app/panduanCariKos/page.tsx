import PanduanCariKos from "@/components/sections/PanduanCariKos";
import Footer from "@/components/sections/Footer";
import { cn } from "@/lib/utils"; // Pastikan path utils benar

export default function simulationPage() {
  return (
    <main className={cn("")}>
      
      <div>
        <PanduanCariKos />

      </div>
      
      <Footer />
    </main>
  );
}