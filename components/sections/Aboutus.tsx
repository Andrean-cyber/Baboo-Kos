"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Target, Compass, Rocket } from "lucide-react";

// ==========================================
// DATA VISI, MISI & OBJECTIVE
// ==========================================
const pillars = [
  {
    id: "01",
    icon: Compass,
    title: "Visi",
    desc: "Ngabulin mimpi semua anak kosan: dapet hunian yang pas, jujur dan bebas ribet.",
  },
  {
    id: "02",
    icon: Target,
    title: "Misi",
    desc: "Jadi mak comblang digital yang paling sat-set buat nemuin kamu sama kos impianmu lewat platform yang super user-friendly.",
  },
  {
    id: "03",
    icon: Rocket,
    title: "Objective",
    desc: "Ngebantu pemilik kos naik kelas lewat digitalisasi, biar manajemen kosan jadi se-simple sosmed-an.",
  },
];

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center bg-[#FAFBFA] mx-auto px-4 md:px-8 py-16 md:py-24 w-full max-w-[1400px] mt-5 overflow-hidden"
    >
      {/* DECORATIVE BACKGROUND BLOBS */}
      <div className="-top-24 -left-24 absolute bg-[#495C29]/[0.04] blur-3xl rounded-full w-72 h-72 pointer-events-none" />
      <div className="-right-24 -bottom-24 absolute bg-[#495C29]/[0.05] blur-3xl rounded-full w-96 h-96 pointer-events-none" />

      {/* INTRO TEXT */}
      <div className="z-10 relative flex flex-col items-center mb-14 md:mb-16 w-full text-center">
        <h3
          className={cn(
            "mb-2 font-bold text-[#495C29] text-sm md:text-base transition-all duration-700 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
        >
          About Baboo Kos
        </h3>

        <h2
          className={cn(
            "mb-4 max-w-4xl font-bold text-slate-900 text-3xl md:text-4xl lg:text-5xl tracking-tight transition-[transform,opacity] duration-700 ease-out delay-150",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
        >
          We help people find &apos;kos&apos; easier, while helping property owners grow digitally.
        </h2>

        <p
          className={cn(
            "max-w-2xl font-medium text-zinc-500 text-sm md:text-base leading-relaxed transition-all duration-700 ease-out delay-300",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
        >
          Baboo Kos ikut membangun ekosistem digital properti di Indonesia — menjembatani anak kos yang cari hunian jujur dengan pemilik kos yang ingin naik kelas lewat digitalisasi.
        </p>
      </div>

      {/* VISI, MISI, OBJECTIVE — HORIZONTAL CARDS */}
      <div className="z-10 relative gap-6 grid grid-cols-1 md:grid-cols-3 w-full">
        {pillars.map((item, idx) => (
          <div
            key={item.id}
            className={cn(
              "group relative flex flex-col bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl p-7 border border-zinc-100 rounded-3xl transition-all hover:-translate-y-1 duration-1000 ease-out overflow-hidden",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
            )}
            style={{ transitionDelay: isVisible ? `${400 + idx * 150}ms` : "0ms" }}
          >
            {/* Number watermark */}
            <span className="top-4 right-5 absolute font-black text-zinc-50 text-5xl select-none">{item.id}</span>

            {/* Icon */}
            <div className="z-10 relative flex justify-center items-center bg-green-50 group-hover:bg-[#495C29] mb-5 rounded-2xl w-12 h-12 text-[#495C29] group-hover:text-white transition-colors duration-300">
              <item.icon size={22} />
            </div>

            {/* Title */}
            <h4 className="z-10 relative mb-2 font-bold text-zinc-900 text-lg md:text-xl">{item.title}</h4>

            {/* Desc */}
            <p className="z-10 relative text-zinc-500 text-sm leading-relaxed">{item.desc}</p>

            {/* Bottom accent line */}
            <div className="bottom-0 left-7 absolute bg-[#495C29] rounded-t-full w-0 group-hover:w-10 h-1 transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
