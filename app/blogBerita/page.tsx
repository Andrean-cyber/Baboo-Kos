import BlogBerita from "@/components/sections/BlogBerita";
import Footer from "@/components/sections/Footer";
import { cn } from "@/lib/utils"; // Pastikan path utils benar

export default function simulationPage() {
  return (
    <main className={cn("")}>
      
      <div>
        <BlogBerita />

      </div>
      
      <Footer />
    </main>
  );
}