"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sparkles, Tag, CheckCircle, Zap, Gift } from "lucide-react";

// ========================
// MARQUEE ITEMS
// ========================
const marqueeItems = [
  { label: "Bundle Merdeka", icon: <Tag size={14} /> },
  { label: "Hemat 17%", icon: <Sparkles size={14} /> },
  { label: "TikTok + Instagram", icon: <Zap size={14} /> },
  { label: "Paket Hemat Tersedia", icon: <Gift size={14} /> },
  { label: "Promo Aktif Sekarang", icon: <CheckCircle size={14} /> },
  { label: "Bundle Merdeka", icon: <Tag size={14} /> },
  { label: "Hemat 17%", icon: <Sparkles size={14} /> },
  { label: "TikTok + Instagram", icon: <Zap size={14} /> },
  { label: "Paket Hemat Tersedia", icon: <Gift size={14} /> },
  { label: "Promo Aktif Sekarang", icon: <CheckCircle size={14} /> },
];

// ========================
// MARQUEE STRIP COMPONENT
// ========================

function MarqueeStrip() {
  return (
    <div className="relative w-full overflow-hidden bg-[#495C29] py-3 select-none">
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#495C29] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#495C29] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {[...Array(4)].map((_, dupIdx) => (
          <div key={dupIdx} className="flex items-center">
            {marqueeItems.map((item, i) => (
              <div key={`${dupIdx}-${i}`} className="flex items-center gap-2 px-6 text-white/90 text-xs font-semibold whitespace-nowrap">
                <span className="text-[#FFFFFF]">{item.icon}</span>
                {item.label}
                <span className="mx-2 text-white/30">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ========================
// MAIN SECTION
// ========================

export default function PromoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
    <section ref={sectionRef} className="w-full overflow-hidden">
      {/* Konten Utama */}
      <div className="flex flex-col items-center mx-auto px-4 md:px-8 py-16 md:py-24 w-full max-w-[1280px]">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h3 className={cn("mb-2 font-bold text-[#495C29] text-sm md:text-base transition-all duration-700 ease-out", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>Promo & Event</h3>
          <h2 className={cn("mb-4 font-bold text-slate-900 text-3xl md:text-5xl tracking-tight transition-all duration-700 ease-out delay-150", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
            Penawaran Spesial Kemerdekaan
          </h2>
          <p className={cn("font-medium text-zinc-500 text-sm md:text-base transition-all duration-700 max-w-[1280px] ease-out delay-300", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
            Promo terbatas ! Gabungkan layanan kami dan hemat lebih banyak sekarang juga.
          </p>
        </div>

        {/* Image Promotion */}
        <div className={cn("relative w-full max-w-[860px] rounded-[1.75rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-700 ease-out delay-500", isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
          <a href="#calculation" className="block">
            <Image src="/promo-september.webp" alt="Promo September" width={2976} height={1674} className="w-full h-auto" priority />
          </a>
        </div>
      </div>
      <MarqueeStrip />
    </section>
  );
}
