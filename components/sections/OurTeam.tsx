"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CalendarDays, Users, Flame, Ship, Heart, Trophy } from "lucide-react";

export default function OurTeam() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

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
      { threshold: 0.15 } // Muncul saat 15% section terlihat
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col items-center mx-auto px-4 md:px-8 py-16 md:py-24 w-full max-w-[1280px] overflow-hidden">
      {/* HEADER TITLE */}
      <div className="flex flex-col items-center mb-10 md:mb-14 text-center">
        <h3 className={cn("mb-2 font-bold text-[#495C29] text-sm md:text-base transition-all duration-700 ease-out", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>Our Team</h3>

        <h2 className={cn("mb-4 font-bold text-slate-900 text-3xl md:text-4xl lg:text-5xl tracking-tight transition-all duration-700 ease-out delay-150", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Stronger Together, Better Every Day
        </h2>

        <p className={cn("font-medium text-zinc-500 text-sm md:text-base transition-all duration-700 ease-out delay-300", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Tim solid yang saling mendukung dan selalu berusaha memberikan yang terbaik
        </p>
      </div>

      {/* MAIN CONTAINER */}
      <div
        className={cn(
          "flex flex-col bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 md:p-8 border border-zinc-100 rounded-[2rem] w-full transition-all duration-1000 ease-out delay-500",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        <div className="flex lg:flex-row flex-col gap-8 lg:gap-10">
          {/* LEFT COLUMN: TIMELINE */}
          <div className="flex flex-col w-full lg:w-[40%]">
            <h4 className="mb-2 font-extrabold text-[#495C29] text-xs uppercase tracking-widest">Our Outing Agenda</h4>
            <h3 className="mb-3 font-bold text-zinc-900 text-2xl md:text-3xl leading-tight">
              Momen Kebersamaan <br className="hidden md:block" />
              yang Memperkuat Tim
            </h3>
            <p className="mb-8 font-medium text-zinc-500 text-sm leading-relaxed">
              Kami percaya, kebersamaan di luar rutinitas membuat kerja sama semakin kuat dan semangat semakin besar.
            </p>

            {/* TIMELINE LIST */}
            <div className="relative flex flex-col gap-6 pl-4 md:pl-6">
              <div className="top-4 bottom-6 left-[27px] md:left-[35px] absolute bg-zinc-200 w-px" />

              <TimelineItem icon={<CalendarDays size={18} className="text-zinc-500" />} date="12 Jan 2024" title="Beach Day 🏖️" desc="Bersantai dan menikmati keindahan pantai bersama." />
              <TimelineItem icon={<Users size={18} className="text-[#495C29]" />} date="24 Mar 2024" title="Team Building 🧩" desc="Games seru untuk membangun kerja sama dan komunikasi tim." isActive />
              <TimelineItem icon={<Flame size={18} className="text-orange-500" />} date="17 Mei 2024" title="Camping & BBQ 🔥" desc="Malam keakraban dengan BBQ dan storytelling." />
              <TimelineItem icon={<Ship size={18} className="text-blue-500" />} date="29 Jul 2024" title="Rafting Adventure 🛶" desc="Tantangan seru yang membuat kami semakin solid!" />
            </div>
          </div>

          {/* RIGHT COLUMN: GALLERY */}
          <div className="flex flex-col gap-4 w-full lg:w-[60%]">
            <div className="rounded-2xl w-full h-[250px] md:h-[350px] overflow-hidden">
              <img
                src="/outbond1-1.jpg"
                alt="Our Team Outing Utama - Baboo Group"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="gap-2 md:gap-4 grid grid-cols-4">
              {[2, 3, 4, 5].map((item) => (
                <div key={item} className="rounded-xl w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden">
                  <img 
                    src={`/outbond1-${item}.jpg`} 
                    alt={`Dokumentasi kegiatan outbond team ke-${item}`} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM STATS */}
        <div className="gap-6 grid grid-cols-2 md:grid-cols-4 bg-[#EEF3E8] mt-8 md:mt-10 p-6 md:p-8 rounded-2xl w-full">
          <StatBox isVisible={isVisible} icon={<CalendarDays size={24} className="text-[#495C29]" />} endValue={12} suffix="+" title="Agenda Outing" desc="Kebersamaan yang selalu kami jaga" />
          <StatBox isVisible={isVisible} icon={<Users size={24} className="text-[#495C29]" />} endValue={25} suffix="+" title="Team Members" desc="Individu hebat dengan tujuan yang sama" />
          <StatBox isVisible={isVisible} icon={<Heart size={24} className="text-[#495C29]" />} endValue={100} suffix="%" title="Teamwork" desc="Kolaborasi, komunikasi, dan kepercayaan" />
          <StatBox isVisible={isVisible} icon={<Trophy size={24} className="text-[#495C29]" />} endValue={1} suffix=" Goal" title="Memberikan yang" desc="terbaik untuk Baboo Kos & Baboo Villa" />
        </div>
      </div>
    </section>
  );
}

// ==========================================
// SUB-COMPONENTS
// ==========================================

function TimelineItem({ icon, date, title, desc, isActive = false }: { icon: React.ReactNode; date: string; title: string; desc: string; isActive?: boolean }) {
  return (
    <div className="z-10 relative flex gap-4 md:gap-6">
      <div className={cn("flex justify-center items-center bg-white border-[3px] rounded-full w-10 md:w-12 h-10 md:h-12 shrink-0", isActive ? "border-[#495C29]" : "border-zinc-100")}>
        {icon}
      </div>
      <div className="flex flex-col pb-2">
        <span className="font-bold text-[10px] text-zinc-400 md:text-xs">{date}</span>
        <h5 className="mt-1 font-bold text-zinc-900 text-sm md:text-base">{title}</h5>
        <p className="mt-1 max-w-[280px] text-zinc-500 text-xs md:text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function StatBox({ 
  icon, 
  endValue, 
  suffix, 
  title, 
  desc, 
  isVisible 
}: { 
  icon: React.ReactNode; 
  endValue: number; 
  suffix: string; 
  title: string; 
  desc: string; 
  isVisible: boolean 
}) {
  const [count, setCount] = useState(0);
  const isAnimated = useRef(false); // Mengunci status agar tidak berjalan berulang kali

  useEffect(() => {
    if (!isVisible || isAnimated.current) return;

    let animationFrameId: number;
    
    const delayTimeout = setTimeout(() => {
      isAnimated.current = true;
      let startTimestamp: number | null = null;
      const duration = 2000;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * endValue));

        if (progress < 1) {
          animationFrameId = window.requestAnimationFrame(step);
        } else {
          setCount(endValue);
        }
      };

      animationFrameId = window.requestAnimationFrame(step);
    }, 1000);

    return () => {
      clearTimeout(delayTimeout);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, endValue]);

  return (
    <div className="flex flex-col gap-2 md:gap-3">
      {icon}
      <div>
        <h4 className="font-bold text-zinc-900 text-2xl md:text-3xl">
          {count}{suffix}
        </h4>
        <p className="mt-1 font-bold text-zinc-800 text-xs md:text-sm">{title}</p>
        <p className="mt-1 font-medium text-[10px] text-zinc-500 md:text-xs leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}