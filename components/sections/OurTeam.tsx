"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  CalendarDays,
  Users,
  Heart,
  Trophy,
} from "lucide-react";

export default function OurTeam() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  const [activeAgenda, setActiveAgenda] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const agendas = [
    {
      icon: <CalendarDays size={18} className="text-zinc-500" />,
      date: "12 Jan 2024",
      title: "Beach Day 🏖️",
      desc: "Bersantai dan menikmati keindahan pantai bersama.",
      images: [
        "/outbond/BusinessTripBali/BusinessTripBali1.JPG",
        "/outbond/BusinessTripBali/BusinessTripBali2.JPG",
        "/outbond/BusinessTripBali/BusinessTripBali3.JPG",
        "/outbond/BusinessTripBali/BusinessTripBali4.JPG",
        "/outbond/BusinessTripBali/BusinessTripBali4.JPG",
      ],
    },
    {
      icon: <Users size={18} className="text-[#495C29]" />,
      date: "24 Mar 2024",
      title: "Team Building 🧩",
      desc: "Games seru untuk membangun kerja sama dan komunikasi tim.",
      images: [
        "/outbond/BusinessTripBali/BusinessTripBali1.JPG",
        "/outbond/BusinessTripBali/BusinessTripBali2.JPG",
        "/outbond/BusinessTripBali/BusinessTripBali3.JPG",
        "/outbond/BusinessTripBali/BusinessTripBali4.JPG",
        "/outbond/BusinessTripBali/BusinessTripBali4.JPG",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center mx-auto px-4 md:px-8 py-16 md:py-24 w-full max-w-[1280px]"
    >
      {/* HEADER */}
      <div className="flex flex-col items-center mb-10 md:mb-14 text-center">
        <h3
          className={cn(
            "mb-2 font-bold text-[#495C29] text-sm md:text-base transition-[transform,opacity] duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          Our Team
        </h3>

        <h2
          className={cn(
            "mb-4 font-bold text-slate-900 text-3xl md:text-4xl lg:text-5xl tracking-tight transition-[transform,opacity] duration-700 delay-150",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          Stronger Together, Better Every Day
        </h2>

        <p
          className={cn(
            "font-medium text-zinc-500 text-sm md:text-base transition-[transform,opacity] duration-700 delay-300",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          Tim solid yang saling mendukung dan selalu berusaha memberikan yang terbaik
        </p>
      </div>

      {/* MAIN CONTAINER — NO transition-all, hanya translate-y & opacity untuk scroll-in */}
      <div
        className={cn(
          "flex flex-col bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 md:p-8 border border-zinc-100 rounded-[2rem] w-full",
          "transition-[transform,opacity] duration-1000 delay-500",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        <div className="flex lg:flex-row flex-col gap-8 lg:gap-10">
          {/* LEFT COLUMN */}
          <div className="flex flex-col w-full lg:w-[40%]">
            <h4 className="mb-2 font-extrabold text-[#495C29] text-xs uppercase tracking-widest">
              Our Outing Agenda
            </h4>

            <h3 className="mb-3 font-bold text-zinc-900 text-2xl md:text-3xl leading-tight">
              Momen Kebersamaan <br className="hidden md:block" />
              yang Memperkuat Tim
            </h3>

            <p className="mb-6 font-medium text-zinc-500 text-sm leading-relaxed">
              Kami percaya, kebersamaan di luar rutinitas membuat kerja sama semakin kuat.
            </p>

            {/* SCROLLABLE TIMELINE */}
            <div
              ref={timelineRef}
              className="relative flex flex-col gap-8 max-h-[380px] overflow-y-auto pl-2 pr-4 pb-6 scrollbar-hide"
            >
              {/* Vertical Line */}
              <div
                className="absolute left-7 md:left-8 top-6 w-px bg-zinc-200"
                style={{ height: `${agendas.length * 110}px` }}
              />

              {agendas.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setActiveAgenda(index);
                    const el = timelineRef.current?.children[index + 1] as HTMLElement;
                    if (el && timelineRef.current) {
                      timelineRef.current.scrollTo({
                        top: el.offsetTop - 40,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  <TimelineItem
                    icon={item.icon}
                    date={item.date}
                    title={item.title}
                    desc={item.desc}
                    isActive={activeAgenda === index}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN GALLERY */}
          <div className="flex flex-col gap-4 w-full lg:w-[60%]">
            {/* Gambar utama — pakai key agar hanya img yang re-mount, bukan container */}
            <div className="rounded-2xl w-full h-[250px] md:h-[350px] overflow-hidden bg-zinc-100">
              <img
                key={agendas[activeAgenda].images[0]}
                src={agendas[activeAgenda].images[0]}
                alt="Gallery"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {agendas[activeAgenda].images.slice(1, 5).map((img, index) => (
                <div
                  key={`${activeAgenda}-${index}`}
                  className="rounded-xl aspect-[4/5] overflow-hidden bg-zinc-100"
                >
                  <img
                    src={img}
                    alt="Gallery"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#EEF3E8] mt-10 p-6 md:p-8 rounded-2xl w-full">
          <StatBox
            icon={<CalendarDays size={24} className="text-[#495C29]" />}
            endValue={12}
            suffix="+"
            title="Agenda Outing"
            desc="Kebersamaan yang selalu kami jaga"
            isVisible={isVisible}
          />
          <StatBox
            icon={<Users size={24} className="text-[#495C29]" />}
            endValue={25}
            suffix="+"
            title="Team Members"
            desc="Individu hebat dengan tujuan yang sama"
            isVisible={isVisible}
          />
          <StatBox
            icon={<Heart size={24} className="text-[#495C29]" />}
            endValue={100}
            suffix="%"
            title="Teamwork"
            desc="Kolaborasi dan kepercayaan"
            isVisible={isVisible}
          />
          <StatBox
            icon={<Trophy size={24} className="text-[#495C29]" />}
            endValue={1}
            suffix=" Goal"
            title="Memberikan yang"
            desc="Terbaik untuk Baboo Kos & Villa"
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
}

/* ================= TIMELINE ITEM ================= */

function TimelineItem({
  icon,
  date,
  title,
  desc,
  isActive = false,
}: {
  icon: React.ReactNode;
  date: string;
  title: string;
  desc: string;
  isActive?: boolean;
}) {
  return (
    <div className="relative flex gap-4 md:gap-6 cursor-pointer">
      <div
        className={cn(
          "relative z-10 flex justify-center items-center bg-white rounded-full w-10 h-10 md:w-12 md:h-12 shrink-0 transition-[border-color,border-width] duration-300",
          isActive
            ? "border-[4px] border-[#495C29]"
            : "border-[3px] border-zinc-200"
        )}
      >
        {icon}
      </div>

      <div className="flex flex-col pb-2">
        <span className="font-bold text-[10px] md:text-xs text-zinc-400">
          {date}
        </span>
        <h5 className="mt-1 font-bold text-sm md:text-base text-zinc-900">
          {title}
        </h5>
        <p className="mt-1 text-xs md:text-sm text-zinc-500 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

/* ================= STAT BOX ================= */

function StatBox({
  icon,
  endValue,
  suffix,
  title,
  desc,
  isVisible,
}: {
  icon: React.ReactNode;
  endValue: number;
  suffix: string;
  title: string;
  desc: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  const isAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || isAnimated.current) return;

    isAnimated.current = true;
    let startTimestamp: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, endValue]);

  return (
    <div className="flex flex-col gap-3">
      {icon}
      <div>
        <h4 className="font-bold text-zinc-900 text-2xl md:text-3xl">
          {count}{suffix}
        </h4>
        <p className="mt-1 font-bold text-xs md:text-sm text-zinc-800">{title}</p>
        <p className="mt-1 text-[10px] md:text-xs text-zinc-500">{desc}</p>
      </div>
    </div>
  );
}
