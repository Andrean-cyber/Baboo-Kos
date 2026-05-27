// Lokasi file: app/career/page.tsx

import Career from "@/components/sections/Career";
import Footer from "@/components/sections/Footer";
import { cn } from "@/lib/utils"; // Pastikan path utils benar

export default function CareerPage() {
  return (
    <main className={cn("min-h-screen", "overflow-hidden", "bg-[#FAFAFA]", "pb-16")}>
      {/* Tambahkan padding-top agar bagian atas komponen Career tidak tertutup Navbar yang melayang */}
      <div className="pt-10 md:pt-10">
        <Career />
      </div>
      
      {/* Footer tetap ada di bawah halaman Career */}
      <Footer />
    </main>
  );
}