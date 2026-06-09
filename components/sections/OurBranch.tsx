"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MapPin, Mail, MessageCircle, Home } from "lucide-react";

// Data Cabang dan List Kos (Ditambah properti 'delay' untuk animasi kedip yang tidak barengan)
const branches = [
  {
    id: "medan",
    city: "Medan",
    position: { top: "20%", left: "10%" },
    delay: "0s",
  },
  {
    id: "batam",
    city: "Batam",
    position: { top: "21%", left: "23.8%" },
    delay: "0s",
  },
  {
    id: "jakarta",
    city: "Jakarta",
    position: { top: "71%", left: "34%" },
    delay: "0s",
  },
  {
    id: "bogor",
    city: "Bogor",
    position: { top: "80%", left: "34%" },
    delay: "0.3s",
  },
  {
    id: "bandung",
    city: "Bandung",
    position: { top: "80%", left: "40%" },
    delay: "0.7s",
  },
  {
    id: "semarang",
    city: "Semarang",
    position: { top: "72%", left: "46%" },
    delay: "0.2s",
  },
  {
    id: "jogja",
    city: "Yogyakarta",
    position: { top: "79%", left: "46%" },
    delay: "0.8s",
  },
  {
    id: "surabaya",
    city: "Surabaya",
    position: { top: "76%", left: "50%" },
    delay: "0.5s",
  },
  {
    id: "malang",
    city: "Malang",
    position: { top: "85%", left: "50%" },
    delay: "0.1s",
  },
  {
    id: "jember",
    city: "Jember",
    position: { top: "80%", left: "54%" },
    delay: "0.6s",
  },
  {
    id: "bali",
    city: "Bali",
    position: { top: "85%", left: "60%" },
    delay: "0.4s",
  },
];

export default function OurBranch() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);

  // Animasi saat di-scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true);
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col items-center mx-auto px-4 md:px-8 py-16 md:py-24 w-full max-w-[1280px] overflow-hidden">
      {/* ========================= */}
      {/* HEADER TITLE (Cascade) */}
      {/* ========================= */}
      <div className="flex flex-col items-center mb-10 text-center">
        <h3 className={cn("mb-2 font-bold text-[#495C29] text-sm md:text-base transition-all duration-700 ease-out", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>Our Branch</h3>

        <h2 className={cn("mb-4 font-bold text-slate-900 text-3xl md:text-5xl tracking-tight transition-all duration-700 ease-out delay-150", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          We're a distributed team
        </h2>

        <p className={cn("font-medium text-zinc-500 text-sm md:text-base transition-all duration-700 ease-out delay-300", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>We have teams almost all over Indonesia.</p>
      </div>

      {/* ========================= */}
      {/* MAP CONTAINER (Anti-Geser) */}
      {/* ========================= */}
      <div className={cn("relative mt-8 w-full max-w-[1000px] transition-all duration-1000 ease-out delay-500", isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0")}>
        {/* GAMBAR PETA ASLI */}
        <img src="/map-indonesia.svg" alt="Map Indonesia" className="opacity-50 w-full h-auto pointer-events-none select-none" />

        {/* ========================================================= */}
        {/* AREA TITIK-TITIK LOKASI */}
        {/* ========================================================= */}
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="group z-10 absolute flex justify-center items-center"
            style={{ top: branch.position.top, left: branch.position.left }}
            onMouseEnter={() => setHoveredBranch(branch.id)}
            onMouseLeave={() => setHoveredBranch(null)}
          >
            {/* Animasi Titik (Pulse - Asynchronous) */}
            <div className="relative flex justify-center items-center w-3 md:w-5 h-3 md:h-5 cursor-pointer">
              {/* Lingkaran yang berdenyut dengan delay dinamis */}
              <span className="inline-flex absolute bg-[#495C29] opacity-30 rounded-full w-full h-full animate-ping" style={{ animationDelay: branch.delay }}></span>
              {/* Titik utama */}
              <span className="inline-flex relative bg-[#495C29] rounded-full w-1.5 md:w-2.5 h-1.5 md:h-2.5 group-hover:scale-150 transition-transform duration-300"></span>
            </div>

            {/* Hover Pop-up Card */}
            <div
              className={cn(
                "bottom-full left-1/2 absolute bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] mb-3 p-3 border border-zinc-100 rounded-2xl w-48 transition-all -translate-x-1/2 duration-300 pointer-events-none",
                hoveredBranch === branch.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
              )}
            >
              {/* Segitiga panah kebawah */}
              <div className="-bottom-2 left-1/2 absolute bg-white border-zinc-100 border-r border-b w-4 h-4 rotate-45 -translate-x-1/2" />

              <div className="z-10 relative text-left">
                <div className="flex items-center gap-1.5 mb-2 pb-2 border-zinc-100 border-b">
                  <MapPin size={14} className="text-[#495C29]" />
                  <span className="font-bold text-zinc-900 text-xs">{branch.city}</span>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ========================= */}
      {/* FOOTER CONTACT */}
      {/* ========================= */}
      {/* <div
        className={cn(
          "gap-10 md:gap-6 grid grid-cols-1 md:grid-cols-3 mt-10 md:mt-16 pt-10 border-zinc-100 border-t w-full lg:max-w-[900px] text-center transition-all duration-1000 ease-out delay-700",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        )}
      >

        <div className="flex flex-col items-center gap-2">
          <Mail size={24} className="mb-1 text-[#495C29]" />
          <h4 className="font-bold text-zinc-900 text-sm">Support</h4>
          <p className="font-medium text-zinc-500 text-xs">Our friendly team is here to help.</p>
          <a href="mailto:support@babookos.com" className="mt-1 font-bold text-[#495C29] text-sm hover:underline">
            support@babookos.com
          </a>
        </div>


        <div className="flex flex-col items-center gap-2">
          <Home size={24} className="mb-1 text-[#495C29]" />
          <h4 className="font-bold text-zinc-900 text-sm">Airbnb</h4>
          <p className="font-medium text-zinc-500 text-xs">Questions or queries? Get in touch!</p>
          <a href="mailto:sales@babookos.com" className="mt-1 font-bold text-[#495C29] text-sm hover:underline">
            sales@babookos.com
          </a>
        </div>


        <div className="flex flex-col items-center gap-2">
          <MessageCircle size={24} className="mb-1 text-[#495C29]" />
          <h4 className="font-bold text-zinc-900 text-sm">CP Villa</h4>
          <p className="font-medium text-zinc-500 text-xs">Mon-Fri from 8am to 5pm.</p>
          <a href="tel:+6287785338441" className="mt-1 font-bold text-[#495C29] text-sm hover:underline">
            +6287785338441
          </a>
        </div>
      </div> */}
    </section>
  );
}
