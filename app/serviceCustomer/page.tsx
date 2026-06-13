import CustomerService from "@/components/sections/CustomerService";
import Footer from "@/components/sections/Footer";
import { cn } from "@/lib/utils"; // Pastikan path utils benar

export default function simulationPage() {
  return (
    <main className={cn("")}>
      
      <div>
        <CustomerService />

      </div>
      
      <Footer />
    </main>
  );
}