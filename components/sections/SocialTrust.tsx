"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ShieldCheck, Coins, Zap, Handshake } from "lucide-react";
// Import Logo Asli Media Sosial dari React Icons (FaFacebook ditambahkan di sini)
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa6";
import { SiThreads } from "react-icons/si";

const trustItems = [
  { 
    id: 1, 
    name: "WhatsApp Channel", 
    isSosmed: true,
    icon: <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
  },
  { 
    id: 2, 
    name: "Instagram", 
    isSosmed: true,
    icon: <FaInstagram className="w-6 h-6 text-[#E1306C]" />
  },
  { 
    id: 3, 
    name: "Threads", 
    isSosmed: true,
    icon: <SiThreads className="w-5 h-5 text-black" /> 
  },
  { 
    id: 4, 
    name: "TikTok", 
    isSosmed: true,
    icon: <FaTiktok className="w-5 h-5 text-black" /> 
  },
  { 
    id: 9, // ID baru untuk Facebook agar tidak bentrok
    name: "Facebook", 
    isSosmed: true,
    icon: <FaFacebook className="w-6 h-6 text-[#1877F2]" /> 
  },
  { id: 5, name: "Mitra Baboo", icon: <Handshake size={22} className="text-[#495C29]" />, isSosmed: false },
  { id: 6, name: "Aman & Terpercaya", icon: <ShieldCheck size={22} className="text-amber-600" />, isSosmed: false },
  { id: 7, name: "Harga Transparan", icon: <Coins size={22} className="text-amber-600" />, isSosmed: false },
  { id: 8, name: "Proses Cepat", icon: <Zap size={22} className="text-amber-600" />, isSosmed: false },
];

export default function SocialTrust() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-full py-20 md:py-20 overflow-hidden border-zinc-200"
    >
      {/* SUNTIKAN CSS MURNI UNTUK ANIMASI MARQUEE TANPA EDIT CONFIG */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-loop {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-loop:hover {
          animation-play-state: paused;
        }
      `}} />

     
      {/* MARQUEE CONTAINER SLIDER */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 md:before:w-40 before:bg-gradient-to-r before:from-[#f5f5f2] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 md:after:w-40 after:bg-gradient-to-l after:from-[#f5f5f2] after:to-transparent py-2">
        
        {/* Wrapper List Utama */}
        <div className="animate-marquee-loop gap-8 md:gap-12 px-2 items-center">
          
          {/* BARIS PERTAMA (Original) */}
          {trustItems.map((item) => (
            <div
              key={`orig-${item.id}`}
              className="flex items-center gap-3 shrink-0 select-none cursor-default"
            >
              {/* Tempat bersarangnya logo murni tanpa bulatan bg & shadow */}
              <div className="flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <span className="font-bold text-zinc-700 text-sm tracking-tight whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}

          {/* BARIS KEDUA (Duplikasi / Kloning Sempurna agar Loop Mulus Tanpa Jeda Berkedip) */}
          {trustItems.map((item) => (
            <div
              key={`clone-${item.id}`}
              className="flex items-center gap-3 shrink-0 select-none cursor-default"
            >
              {/* Tempat bersarangnya logo murni tanpa bulatan bg & shadow */}
              <div className="flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <span className="font-bold text-zinc-700 text-sm tracking-tight whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}