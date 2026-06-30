"use client";

import { memo, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { getOptimizedImage, getImageSizes } from "@/lib/imageUtils";

const teamMembers = [
  {
    name: "Yucha Pratama",
    role: "Chief Executive Officer (CEO)",
    img: "/team/yuca.webp",
  },
  {
    name: "Afifa Nur Aulia Viranti",
    role: "Human Resources Development (HRD)",
    img: "/team/afifa.webp",
  },
  {
    name: "Pranayama Sukma Fritzie Wisnu",
    role: "Administrator (ADM)",
    img: "/team/pran.webp",
  },
  {
    name: "Atikah Azra Wahdah",
    role: "Social Media Specialist (SMS)",
    img: "/team/tika.webp",
  },
  {
    name: "Kisfa Azka Khalisha",
    role: "Content Manager (CM)",
    img: "/team/lisa.webp",
  },
  {
    name: "Meliani Ananda Ginting",
    role: "Head of Customer Service (HCS)",
    img: "/team/meli.webp",
  },
  {
    name: "Muchammad Akmal Mustofa",
    role: "Head of Content Creator (HCC)",
    img: "/team/akmal.webp",
  },
  {
    name: "Dominikus Ivan Ardianto",
    role: "Content Creative (CCR)",
    img: "/team/ivan.webp",
  },
  {
    name: "Difa Aisyah Putri",
    role: "Marketing Executive (ME)",
    img: "/team/diva.webp",
  },
  {
    name: "Andrean Yogha Saputra",
    role: "Web Developer / Digital Support (IT)",
    img: "/team/andre.webp",
  },
];

/* ================= TEAM CARD ================= */

const TeamCard = memo(function TeamCard({ member, index, isVisible, delayBase = 0 }: { member: (typeof teamMembers)[0]; index: number; isVisible: boolean; delayBase?: number }) {
  return (
    <div
      className={cn(
        // Tambahkan w-[calc(50%-8px)] untuk mobile, kembalikan max-w di md ke atas
        "flex flex-col bg-[#FAFAFA] shadow-sm border border-zinc-100 rounded-[1.5rem] overflow-hidden",
        "w-[calc(50%-8px)] md:w-full md:max-w-[340px]",  // ← ini kuncinya
        "transition-[transform,opacity] duration-1000 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
      )}
      style={{ transitionDelay: isVisible ? `${delayBase + index * 100}ms` : "0ms" }}
    >
      <div className="relative w-full h-[200px] md:h-[420px] overflow-hidden">
        <Image
          src={getOptimizedImage(member.img, "card")}
          alt={member.name}
          fill
          sizes={getImageSizes("card")}
          priority={index === 0}
          fetchPriority={index === 0 ? "high" : "low"}
          loading={index === 0 ? "eager" : "lazy"}
          className="object-cover md:hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="flex flex-col flex-1 justify-between items-center bg-[#FDFDFD] p-3 md:p-6 text-center">
        <div>
          <h4 className="font-bold text-zinc-900 text-sm md:text-lg">{member.name}</h4>
          <p className="mt-1 font-bold text-[#495C29] text-[10px] md:text-xs">{member.role}</p>
        </div>
      </div>
    </div>
  );
});

/* ================= MAIN COMPONENT ================= */

export default function MeetOurTeam() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.scrollY < 100) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -50px 0px" },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

   return (
    <section ref={sectionRef} className="flex flex-col items-center mx-auto px-4 md:px-8 py-16 md:py-24 w-full max-w-[1280px]">

      {/* HEADER ← ini yang hilang, sekarang dikembalikan */}
      <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
        <h3 className={cn("mb-2 font-bold text-[#495C29] text-sm md:text-base transition-[transform,opacity] duration-700 ease-out", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Meet Our Team
        </h3>
        <h2 className={cn("mb-4 font-bold text-slate-900 text-3xl md:text-4xl lg:text-5xl tracking-tight transition-[transform,opacity] duration-700 ease-out delay-150", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          The Minds Behind Baboo Kos
        </h2>
        <p className={cn("max-w-xl font-medium text-zinc-500 text-sm md:text-base leading-relaxed transition-[transform,opacity] duration-700 ease-out delay-300", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Bukan sekedar tim dibalik layar. Kami adalah kombinasi kreator, marketer dan tech-enthusiast yang berambisi mengubah cara orang mencari dan mempromosikan kos jadi jauh lebih seru.
        </p>
      </div>
{/* TEAM CARDS */}
<div className="flex flex-col items-center gap-4 md:gap-8 w-full">

  {/* CEO - selalu di atas sendiri */}
  <div className="flex justify-center w-full pb-0 md:pb-2">
    <TeamCard member={teamMembers[0]} index={0} isVisible={isVisible} delayBase={200} fullWidth />
  </div>

  {/* Anggota lainnya */}
  <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
    {teamMembers.slice(1).map((member, index) => (
      <TeamCard key={index + 1} member={member} index={index + 1} isVisible={isVisible} delayBase={200} />
    ))}
  </div>

</div>


    </section>
  );
}
