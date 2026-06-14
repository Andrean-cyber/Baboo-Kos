"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image"; // Pastikan Image di-import
import { cn } from "@/lib/utils";
import {
  Star,
  Gift,
  Users,
  ShieldCheck,
  Navigation,
  Clock,
  Image as ImageIcon,
  Clapperboard,
  PlaySquare,
  PhoneCall,
} from "lucide-react";

import { FaWhatsapp, FaInstagram, FaThreads, FaTiktok } from "react-icons/fa6";

export default function PricingPackages() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    
    <section id="endorsement"ref={sectionRef} className="flex flex-col items-center bg-[#FAFAFA] mx-auto px-4 md:px-8 py-16 md:py-24 w-full max-w-[1280px] overflow-hidden">
      
      {/* HEADER TITLE */}
      <div className="flex flex-col items-center mb-10 text-center">
        <h3 className={cn("mb-2 font-bold text-[#495C29] text-sm md:text-base transition-all duration-700 ease-out", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>Pricing & Packages</h3>
        <h2 className={cn("mb-4 font-bold text-slate-900 text-3xl md:text-5xl tracking-tight transition-all duration-700 ease-out delay-150", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Spill Kamar Kos mu, Biar Netizen yang Rebutan! 💅🏻
        </h2>
        <p className={cn("max-w-2xl font-medium text-zinc-500 text-sm md:text-base leading-relaxed transition-all duration-700 ease-out delay-300", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Gak zaman lagi sebar brosur di tiang listrik. Pilih paket promosi sosial media kita dan biarkan algoritma yang kerja keras buat penuhin kosan mu!
        </p>
      </div>

      {/* GRID LAYOUT */}
      <div className="gap-4 md:gap-6 grid grid-cols-1 lg:grid-cols-3 w-full">
        
        {/* KOLOM 1: TIKTOK & BUNDLE */}
        <div className={cn("flex flex-col gap-4 md:gap-6 transition-all duration-1000 ease-out delay-[400ms]", isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")}>
          <div className="flex flex-col bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 border border-zinc-200 rounded-[1.5rem]">
            <div className="flex justify-between items-start mb-6 pb-4 border-zinc-100 border-b">
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center bg-black rounded-xl w-12 h-12 text-white">
                  <FaTiktok className="text-[20px]" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-lg">TikTok</h4>
                  <p className="font-medium text-[11px] text-zinc-500">Video Short Form</p>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-zinc-50 px-2 py-1 border border-zinc-200 rounded-md">
                <Star size={10} className="text-zinc-400" />
                <span className="font-bold text-[9px] text-zinc-500">Paling Populer</span>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <PricingRow title="Supreme Rate" desc="Konten dari tim Baboo kos, visit untuk pengambilan footage room" price="Rp. 1.200.000" duration="Keep 4 Bulan" />
              <PricingRow title="Superior Rate" desc="Konten dari tim Baboo kos, visit untuk pengambilan footage room" price="Rp. 1.000.000" duration="Keep 2 Bulan" />
              <PricingRow title="Deluxe Rate" desc="Konten dari tim Baboo kos, visit untuk pengambilan footage room" price="Rp. 800.000" duration="Keep 1 Bulan" />
              <PricingRow title="Standart Rate" desc="Video dari owner unit dan akan diedit oleh tim Baboo kos" price="Rp. 600.000" duration="Keep 1 Bulan" />
            </div>
          </div>

          <div className="flex flex-col bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 border border-zinc-200 rounded-[1.5rem]">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <Gift size={24} className="text-zinc-700" />
                <h4 className="font-bold text-zinc-900 text-lg">Bundle Package</h4>
              </div>
              <span className="bg-orange-100 px-2 py-1 rounded-md font-bold text-[9px] text-orange-600">Hemat 10%</span>
            </div>
            <div className="bg-zinc-50/50 p-4 border border-zinc-100 rounded-xl">
              <h5 className="mb-2 font-bold text-zinc-900 text-xs">Paket A</h5>
              <ul className="flex flex-col gap-1 pl-3 text-[10px] text-zinc-500 marker:text-zinc-300 list-disc">
                <li>Tiktok + Instagram (Reels/ Feeds)</li>
                <li>Dapatkan diskon potongan 10% dari total harga</li>
              </ul>
            </div>
          </div>
        </div>

        {/* KOLOM 2: INSTAGRAM & WA */}
        <div className={cn("flex flex-col gap-4 md:gap-6 transition-all duration-1000 ease-out delay-[550ms]", isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")}>
          <div className="flex flex-col bg-white shadow-[0_4px_20px_rgb(245,176,65,0.1)] p-6 border border-orange-100 rounded-[1.5rem]">
            <div className="flex justify-between items-start mb-6 pb-4 border-zinc-100 border-b">
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-xl w-12 h-12 text-white">
                  <FaInstagram className="text-[22px]" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-lg">Instagram</h4>
                  <p className="font-medium text-[11px] text-zinc-500">Feed, Reels & Story</p>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-pink-50 px-2 py-1 border border-pink-200 rounded-md">
                <Star size={10} className="text-pink-500" />
                <span className="font-bold text-[9px] text-pink-600">Paling Banyak Dipilih</span>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <PricingRow icon={<ImageIcon size={16} className="text-zinc-400" />} title="Post Feeds" desc="5 - 10 Foto" price="Rp. 800.000" duration="Keep 1 Bulan" color="yellow" />
              <PricingRow icon={<Clapperboard size={16} className="text-zinc-400" />} title="Reels" desc="Video Reels" price="Rp. 900.000" duration="Keep 1 Bulan" color="yellow" />

              <div className="flex justify-between items-start pt-1">
                <div className="flex gap-3 max-w-[50%]">
                  <div className="mt-0.5">
                    <PlaySquare size={16} className="text-zinc-400" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-zinc-900 text-sm">Story</h4>
                    <p className="mt-1 text-[10px] text-zinc-500 leading-snug">* Diupload dalam kurun waktu 1 minggu</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <PriceBadge price="Rp. 200.000" duration="1 Kali Upload" color="yellow" />
                  <PriceBadge price="Rp. 300.000" duration="2 Kali Upload" color="yellow" />
                  <PriceBadge price="Rp. 400.000" duration="3 Kali Upload" color="yellow" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 border border-zinc-200 rounded-[1.5rem]">
            <div className="flex items-center gap-3 mb-4">
              <FaWhatsapp className="text-[#25D366] text-[26px]" />
              <div>
                <h4 className="font-bold text-zinc-900 text-base">Whatsapp Channel</h4>
                <p className="text-[10px] text-zinc-500">Promosi di Channel</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-zinc-50/50 p-4 border border-zinc-100 rounded-xl">
              <div>
                <h5 className="mb-1 font-bold text-zinc-900 text-xs">Paket A</h5>
                <ul className="pl-3 text-[9px] text-zinc-500 marker:text-zinc-300 list-disc">
                  <li>Dokumentasi dari owner unit</li>
                </ul>
              </div>
              <PriceBadge price="Rp. 250.000" duration="Member 6 Bulan" />
            </div>
          </div>
        </div>

        {/* KOLOM 3: THREADS & ADDONS */}
        <div className={cn("flex flex-col gap-4 md:gap-6 lg:row-span-2 transition-all duration-1000 ease-out delay-[700ms]", isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")}>
          <div className="flex flex-col bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 border border-zinc-200 rounded-[1.5rem]">
            <div className="flex items-center gap-3 mb-4">
              <FaThreads className="text-[22px] text-zinc-900" />
              <div>
                <h4 className="font-bold text-zinc-900 text-base">Threads</h4>
                <p className="text-[10px] text-zinc-500">Dokumentasi</p>
              </div>
            </div>
            <div className="flex justify-between bg-zinc-50/50 p-4 border border-zinc-100 rounded-xl">
              <div>
                <h5 className="mb-1 font-bold text-zinc-900 text-xs">Paket A</h5>
                <ul className="pl-3 text-[9px] text-zinc-500 marker:text-zinc-300 list-disc">
                  <li>Dokumentasi dari owner unit</li>
                </ul>
              </div>
              <PriceBadge price="Rp. 500.000" duration="Keep Permanent" />
            </div>
          </div>

          <div className="flex flex-col bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 border border-zinc-200 rounded-[1.5rem]">
            <div className="flex items-center gap-3 mb-4">
              <Users size={22} className="text-zinc-700" />
              <div>
                <h4 className="font-bold text-zinc-900 text-base">Mitra</h4>
                <p className="text-[10px] text-zinc-500">Kerja Sama</p>
              </div>
            </div>
            <div className="flex justify-between items-start bg-zinc-50/50 p-4 border border-zinc-100 rounded-xl">
              <div className="max-w-[55%]">
                <h5 className="mb-1 font-bold text-zinc-900 text-xs">Paket A</h5>
                <ul className="flex flex-col gap-1 pl-3 text-[9px] text-zinc-500 marker:text-zinc-300 list-disc">
                  <li>Dokumentasi dari owner unit</li>
                  <li>Whatsapp channel permanen + Rekomendasi</li>
                </ul>
              </div>
              <PriceBadge price="Rp. 300.000" duration="Member 6 Bulan" />
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <AddOnCard label="Add On" title="Pin Konten" price="Rp. 150.000" duration="7 hari" />
            <AddOnCard label="Add On" title="Pin Konten" price="Rp. 300.000" duration="1 Bulan" />

            <div className="flex justify-between items-center bg-[#F4F7EF] shadow-sm p-4 border border-[#495C29]/20 rounded-[1rem]">
              <div className="flex flex-col">
                <h4 className="font-bold text-[13px] text-zinc-900">Keep Permanen</h4>
                <p className="mt-0.5 font-medium text-[9px] text-zinc-600">Khusus yang sudah ambil paket endorse</p>
              </div>
              <PriceBadge price="Rp. 500.000" duration="Konten" />
            </div>

            <div className="flex justify-between items-center bg-[#F4F7EF] shadow-sm p-4 border border-[#495C29]/20 rounded-[1rem]">
              <div className="flex flex-col">
                <h4 className="font-bold text-[13px] text-zinc-900">Take Konten</h4>
                <p className="mt-0.5 max-w-[130px] font-medium text-[9px] text-zinc-600 leading-snug">Tim Baboo kos visit untuk pengambilan footage room</p>
              </div>
              <PriceBadge price="Rp. 100.000" duration="Konten" />
            </div>
          </div>
        </div>

        {/* FEATURES ROW */}
        <div className="flex sm:flex-row flex-col gap-4 md:gap-6 col-span-1 lg:col-span-2">
          <FeatureBadge icon={<ShieldCheck size={18} />} title="Aman & Terpercaya" desc="Transaksi aman dan terpercaya" />
          <FeatureBadge icon={<Navigation size={18} />} title="Harga Transparan" desc="Tidak ada biaya tersembunyi" />
          <FeatureBadge icon={<Clock size={18} />} title="Proses Cepat" desc="Tim kami siap membantu Anda" />
        </div>
      </div>

      {/* ========================= */}
      {/* NOTES SECTION DENGAN SVG BACKGROUND */}
      {/* ========================= */}
      <div 
        className={cn(
          "relative bg-[#495C29] shadow-lg mt-8 md:mt-12 p-8 md:p-10 rounded-[2rem] w-full overflow-hidden transition-all duration-1000 ease-out delay-[900ms]", 
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}
      >
        {/* Background SVG - Positioned absolute */}
        <div className="top-0 left-1/2 absolute opacity-40 w-screen h-full -translate-x-1/2 pointer-events-none">
                  <Image src="/line2.svg" alt="Abstract Background" fill className="object-cover" priority />
                </div>

        {/* Konten Notes - Diberi relative z-10 agar berada di atas SVG */}
        <div className="z-10 relative">
          {/* Mac-style Dots */}
          <div className="flex gap-2 mb-6">
            <div className="bg-red-400 rounded-full w-3 h-3"></div>
            <div className="bg-yellow-400 rounded-full w-3 h-3"></div>
            <div className="bg-green-400 rounded-full w-3 h-3"></div>
          </div>

          <h3 className="mb-4 font-bold text-white text-xl">Notes :</h3>
          <ul className="flex flex-col gap-2.5 pl-5 text-white/90 marker:text-white/50 text-sm md:text-base leading-relaxed list-disc">
            <li>
              Footage dari owner yang <strong className="font-extrabold text-white">tidak memenuhi standart</strong> harus mengambil <strong className="font-extrabold text-white">add on take konten</strong>
            </li>
            <li>
              Setiap endorse villa/appart wajib menyediakan <strong className="font-extrabold text-white">satu malam free</strong> untuk direview oleh tim Baboo kos
            </li>
            <li>
              Endorse selain kos, kontrakan, villa dan apart <strong className="font-extrabold text-white">hanya bisa via instagram</strong>
            </li>
            <li>
              Khusus untuk <strong className="font-extrabold text-white">brand</strong> wajib mengambil paket <strong className="font-extrabold text-white">bundling Tiktok Supreme & Reels</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// SUB-COMPONENTS
// ==========================================

function PricingRow({ icon, title, desc, price, duration, color = "green" }: any) {
  return (
    <div className="flex justify-between items-start pt-4 first:pt-0 border-zinc-100 first:border-0 border-t">
      <div className="flex gap-3 max-w-[60%]">
        {icon && <div className="mt-0.5">{icon}</div>}
        <div className="flex flex-col">
          <h4 className="font-bold text-zinc-900 text-sm">{title}</h4>
          <p className="mt-1 text-[10px] text-zinc-500 leading-snug">{desc}</p>
        </div>
      </div>
      <PriceBadge price={price} duration={duration} color={color} />
    </div>
  );
}

function PriceBadge({ price, duration, color = "green" }: { price: string; duration: string; color?: "green" | "yellow" }) {
  const isGreen = color === "green";
  return (
    <div className="flex flex-col items-center shrink-0">
      <div className={cn("shadow-sm px-3 py-1.5 rounded-md font-bold text-xs", isGreen ? "bg-[#495C29] text-white" : "bg-[#F3C546] text-white")}>{price}</div>
      <span className="mt-1 font-medium text-[9px] text-zinc-500">{duration}</span>
    </div>
  );
}

function AddOnCard({ label, title, price, duration }: any) {
  return (
    <div className="flex justify-between items-center bg-white shadow-[0_2px_15px_rgb(0,0,0,0.02)] p-4 border border-zinc-200 rounded-[1rem]">
      <div className="flex items-center gap-3">
        <span className="bg-zinc-100 px-2 py-1 border border-zinc-200 rounded-[4px] font-bold text-[9px] text-zinc-500">{label}</span>
        <h4 className="font-bold text-[13px] text-zinc-900">{title}</h4>
      </div>
      <PriceBadge price={price} duration={duration} />
    </div>
  );
}

function FeatureBadge({ icon, title, desc }: any) {
  return (
    <div className="flex flex-1 items-center gap-3 bg-[#EEF3E8] shadow-sm p-4 border border-[#495C29]/10 rounded-2xl">
      <div className="flex justify-center items-center bg-[#495C29] rounded-full w-10 h-10 text-white shrink-0">{icon}</div>
      <div className="flex flex-col">
        <h4 className="font-bold text-[13px] text-zinc-900">{title}</h4>
        <p className="font-medium text-[10px] text-zinc-600">{desc}</p>
      </div>
    </div>
  );
}