import SyaratKetentuan from "@/components/sections/syaratKetentuan";
import Footer from "@/components/sections/Footer";
import { cn } from "@/lib/utils"; // Pastikan path utils benar

export default function simulationPage() {
  return (
    <main className={""}>
      
      <div>
        <SyaratKetentuan />

      </div>
      
      <Footer />
    </main>
  );
}