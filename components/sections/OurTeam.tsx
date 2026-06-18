"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CalendarDays, Users, Heart, Trophy, X, ChevronLeft, ChevronRight } from "lucide-react";
import { getOptimizedImage, getImageSizes } from "@/lib/imageUtils";

/* ================= TYPES ================= */

interface AgendaItem {
  icon: React.ReactNode;
  date: string;
  title: string;
  desc: string;
  images: string[];
}

/* ================= GALLERY ================= */

function Gallery({ images, onImageClick }: { images: string[]; onImageClick: (img: string, index: number) => void }) {
  // Show max 5 thumbnails (1 main + 4 grid). The 4th grid slot shows "+N" if more exist.
  const mainImage = images[0];
  const gridImages = images.slice(1, 5);
  const extraCount = images.length - 5; // images beyond index 4

  return (
    <div className="flex flex-col gap-4 w-full lg:w-[60%]">
      {/* Main image */}
      <div className="relative rounded-2xl w-full h-[250px] md:h-[350px] overflow-hidden bg-zinc-100 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onImageClick(mainImage, 0)}>
        <Image key={mainImage} src={getOptimizedImage(mainImage, "gallery")} alt="Gallery Main" fill sizes={getImageSizes("gallery")} loading="lazy" className="object-cover hover:scale-105 transition-transform duration-500" />
      </div>

      {/* Thumbnail grid */}
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {gridImages.map((img, index) => {
          const isLastVisible = index === 3 && extraCount > 0;
          const actualIndex = index + 1;
          return (
            <div key={`grid-${index}`} className="relative rounded-xl aspect-[4/5] overflow-hidden bg-zinc-100 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onImageClick(img, actualIndex)}>
              <Image src={getOptimizedImage(img, "thumbnail")} alt={`Gallery Thumbnail ${index + 1}`} fill sizes={getImageSizes("thumbnail")} loading="lazy" className="object-cover hover:scale-110 transition-transform duration-500" />
              {/* Overlay "+N" on last visible thumb if there are more photos */}
              {isLastVisible && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl cursor-pointer hover:bg-black/60 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    onImageClick(images[5], 5);
                  }}
                >
                  <span className="text-white font-bold text-xl">+{extraCount + 1}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function OurTeam() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  const [activeAgenda, setActiveAgenda] = useState(0);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [selectedImgIndex, setSelectedImgIndex] = useState<number | null>(null);

  const agendas: AgendaItem[] = useMemo(
    () => [
      {
        icon: <CalendarDays size={18} className="text-zinc-500" />,
        date: "30 Juli 2025",
        title: "Business Trip Bali 🌴",
        desc: "Perjalanan bisnis sekaligus eksplorasi keindahan Pulau Dewata bersama tim.",
        images: [
          "/outbond/BusinessTripBali/BusinessTripBali1.webp",
          "/outbond/BusinessTripBali/BusinessTripBali2.webp",
          "/outbond/BusinessTripBali/BusinessTripBali3.webp",
          "/outbond/BusinessTripBali/BusinessTripBali4.webp",
          "/outbond/BusinessTripBali/BusinessTripBali5.webp",
        ],
      },
      {
        icon: <Users size={18} className="text-[#495C29]" />,
        date: "5 Juni 2026",
        title: "Business Trip Banyuwangi 🌿",
        desc: "Menjelajahi pesona Banyuwangi sambil mempererat hubungan tim.",
        images: [
          "/outbond/BusinessTripBanyuwangi/BusinessTripBanyuwangi1.webp",
          "/outbond/BusinessTripBanyuwangi/BusinessTripBanyuwangi2.webp",
          "/outbond/BusinessTripBanyuwangi/BusinessTripBanyuwangi3.webp",
          "/outbond/BusinessTripBanyuwangi/BusinessTripBanyuwangi4.webp",
          "/outbond/BusinessTripBanyuwangi/BusinessTripBanyuwangi5.webp",
        ],
      },
      {
        icon: <Heart size={18} className="text-[#495C29]" />,
        date: "3 Mei 2026",
        title: "Interactive Talkshow 🎤",
        desc: "Sesi diskusi interaktif dan berbagi inspirasi bersama seluruh anggota tim.",
        images: [
          "/outbond/InteractiveTalkshow/InteractiveTalkshow1.webp",
          "/outbond/InteractiveTalkshow/InteractiveTalkshow2.webp",
          "/outbond/InteractiveTalkshow/InteractiveTalkshow3.webp",
          "/outbond/InteractiveTalkshow/InteractiveTalkshow4.webp",
          "/outbond/InteractiveTalkshow/InteractiveTalkshow5.webp",
          "/outbond/InteractiveTalkshow/InteractiveTalkshow6.webp",
        ],
      },
      {
        icon: <Trophy size={18} className="text-[#495C29]" />,
        date: "",
        title: "Outing Day 🏕️",
        desc: "Satu hari penuh keseruan dan petualangan bersama seluruh tim.",
        images: [
          "/outbond/OutingDay/OutingDay1.webp",
          "/outbond/OutingDay/OutingDay2.webp",
          "/outbond/OutingDay/OutingDay3.webp",
          "/outbond/OutingDay/OutingDay4.webp",
          "/outbond/OutingDay/OutingDay5.webp",
          "/outbond/OutingDay/OutingDay6.webp",
          "/outbond/OutingDay/OutingDay7.webp",
        ],
      },
      {
        icon: <CalendarDays size={18} className="text-zinc-500" />,
        date: "",
        title: "Work From Anywhere 💻",
        desc: "Fleksibel bekerja dari mana saja sambil tetap produktif dan terhubung.",
        images: [
          "/outbond/WorkFromAnywhere/WorkFromAnywhere1.webp",
          "/outbond/WorkFromAnywhere/WorkFromAnywhere2.webp",
          "/outbond/WorkFromAnywhere/WorkFromAnywhere3.webp",
          "/outbond/WorkFromAnywhere/WorkFromAnywhere4.webp",
          "/outbond/WorkFromAnywhere/WorkFromAnywhere5.webp",
          "/outbond/WorkFromAnywhere/WorkFromAnywhere6.webp",
          "/outbond/WorkFromAnywhere/WorkFromAnywhere7.webp",
          "/outbond/WorkFromAnywhere/WorkFromAnywhere8.webp",
          "/outbond/WorkFromAnywhere/WorkFromAnywhere9.webp",
          "/outbond/WorkFromAnywhere/WorkFromAnywhere10.webp",
        ],
      },
    ],
    [],
  );

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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // Keyboard navigation and body scroll prevention for preview
  useEffect(() => {
    if (!selectedImg) return;

    // Prevent body scroll
    document.body.style.overflow = "hidden";

    // Keyboard navigation
    const handleKey = (e: KeyboardEvent) => {
      if (selectedImgIndex === null) return;

      if (e.key === "ArrowLeft") {
        const newIndex = (selectedImgIndex - 1 + agendas[activeAgenda].images.length) % agendas[activeAgenda].images.length;
        setSelectedImgIndex(newIndex);
        setSelectedImg(agendas[activeAgenda].images[newIndex]);
      } else if (e.key === "ArrowRight") {
        const newIndex = (selectedImgIndex + 1) % agendas[activeAgenda].images.length;
        setSelectedImgIndex(newIndex);
        setSelectedImg(agendas[activeAgenda].images[newIndex]);
      } else if (e.key === "Escape") {
        setSelectedImg(null);
        setSelectedImgIndex(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedImg, selectedImgIndex, activeAgenda, agendas]);

  return (
    <section ref={sectionRef} className="flex flex-col items-center mx-auto px-4 md:px-8 py-16 md:py-24 w-full max-w-[1280px]">
      {/* ========================= */}
      {/* FULLSCREEN PREVIEW MODAL */}
      {/* ========================= */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 transition-all duration-300"
          onClick={() => {
            setSelectedImg(null);
            setSelectedImgIndex(null);
          }}
        >
          <button
            className="fixed top-6 right-6 text-white hover:rotate-90 transition-transform duration-300 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30"
            onClick={() => {
              setSelectedImg(null);
              setSelectedImgIndex(null);
            }}
          >
            <X size={28} />
          </button>

          {/* Navigation Prev */}
          {selectedImgIndex !== null && agendas[activeAgenda].images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                const newIndex = (selectedImgIndex - 1 + agendas[activeAgenda].images.length) % agendas[activeAgenda].images.length;
                setSelectedImgIndex(newIndex);
                setSelectedImg(agendas[activeAgenda].images[newIndex]);
              }}
              className="fixed left-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Counter */}
          {selectedImgIndex !== null && agendas[activeAgenda].images.length > 1 && (
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 text-white text-sm font-medium bg-black/40 px-4 py-2 rounded-full">
              {selectedImgIndex + 1} / {agendas[activeAgenda].images.length}
            </div>
          )}

          {/* Navigation Next */}
          {selectedImgIndex !== null && agendas[activeAgenda].images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                const newIndex = (selectedImgIndex + 1) % agendas[activeAgenda].images.length;
                setSelectedImgIndex(newIndex);
                setSelectedImg(agendas[activeAgenda].images[newIndex]);
              }}
              className="fixed right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          )}

          <div className="relative w-full max-w-5xl h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <Image src={selectedImg} alt="Preview" fill className="rounded-2xl shadow-2xl object-contain" priority sizes="90vw" />
          </div>
        </div>
      )}
      {/* HEADER */}
      <div className="flex flex-col items-center mb-10 md:mb-14 text-center">
        <h3 className={cn("mb-2 font-bold text-[#495C29] text-sm md:text-base transition-[transform,opacity] duration-700", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>Our Team</h3>

        <h2 className={cn("mb-4 font-bold text-slate-900 text-3xl md:text-4xl lg:text-5xl tracking-tight transition-[transform,opacity] duration-700 delay-150", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Stronger Together, Better Every Day
        </h2>

        <p className={cn("font-medium text-zinc-500 text-sm md:text-base transition-[transform,opacity] duration-700 delay-300", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Tim solid yang saling mendukung dan selalu berusaha memberikan yang terbaik
        </p>
      </div>

      {/* MAIN CONTAINER */}
      <div
        className={cn(
          "flex flex-col bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 md:p-8 border border-zinc-100 rounded-[2rem] w-full",
          "transition-[transform,opacity] duration-1000 delay-500",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        )}
      >
        <div className="flex lg:flex-row flex-col gap-8 lg:gap-10">
          {/* LEFT COLUMN */}
          <div className="flex flex-col w-full lg:w-[40%]">
            <h4 className="mb-2 font-extrabold text-[#495C29] text-xs uppercase tracking-widest">Our Outing Agenda</h4>

            <h3 className="mb-3 font-bold text-zinc-900 text-2xl md:text-3xl leading-tight">
              Momen Kebersamaan <br className="hidden md:block" />
              yang Memperkuat Tim
            </h3>

            <p className="mb-6 font-medium text-zinc-500 text-sm leading-relaxed">Kami percaya, kebersamaan di luar rutinitas membuat kerja sama semakin kuat.</p>

            {/* SCROLLABLE TIMELINE */}
            <div ref={timelineRef} className="relative flex flex-col gap-8 max-h-[420px] overflow-y-auto pl-2 pr-4 pb-6 scrollbar-hide">
              {/* Vertical Line */}
              <div className="absolute left-7 md:left-8 top-6 w-px bg-zinc-200" style={{ height: `${agendas.length * 110}px` }} />

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
                  <TimelineItem icon={item.icon} date={item.date} title={item.title} desc={item.desc} isActive={activeAgenda === index} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN GALLERY */}
          <Gallery
            key={activeAgenda}
            images={agendas[activeAgenda].images}
            onImageClick={(img, index) => {
              setSelectedImg(img);
              setSelectedImgIndex(index);
            }}
          />
        </div>

        {/* BOTTOM STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#EEF3E8] mt-10 p-6 md:p-8 rounded-2xl w-full">
          <StatBox icon={<CalendarDays size={24} className="text-[#495C29]" />} endValue={12} suffix="+" title="Agenda Outing" desc="Kebersamaan yang selalu kami jaga" isVisible={isVisible} />
          <StatBox icon={<Users size={24} className="text-[#495C29]" />} endValue={25} suffix="+" title="Team Members" desc="Individu hebat dengan tujuan yang sama" isVisible={isVisible} />
          <StatBox icon={<Heart size={24} className="text-[#495C29]" />} endValue={100} suffix="%" title="Teamwork" desc="Kolaborasi dan kepercayaan" isVisible={isVisible} />
          <StatBox icon={<Trophy size={24} className="text-[#495C29]" />} endValue={1} suffix=" Goal" title="Memberikan yang" desc="Terbaik untuk Baboo Kos & Villa" isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
}

/* ================= TIMELINE ITEM ================= */

function TimelineItem({ icon, date, title, desc, isActive = false }: { icon: React.ReactNode; date: string; title: string; desc: string; isActive?: boolean }) {
  return (
    <div className="relative flex gap-4 md:gap-6 cursor-pointer">
      <div
        className={cn(
          "relative z-10 flex justify-center items-center bg-white rounded-full w-10 h-10 md:w-12 md:h-12 shrink-0 transition-[border-color,border-width] duration-300",
          isActive ? "border-[4px] border-[#495C29]" : "border-[3px] border-zinc-200",
        )}
      >
        {icon}
      </div>

      <div className="flex flex-col pb-2">
        {date && <span className="font-bold text-[10px] md:text-xs text-zinc-400">{date}</span>}
        <h5 className="mt-1 font-bold text-sm md:text-base text-zinc-900">{title}</h5>
        <p className="mt-1 text-xs md:text-sm text-zinc-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ================= STAT BOX ================= */

function StatBox({ icon, endValue, suffix, title, desc, isVisible }: { icon: React.ReactNode; endValue: number; suffix: string; title: string; desc: string; isVisible: boolean }) {
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
          {count}
          {suffix}
        </h4>
        <p className="mt-1 font-bold text-xs md:text-sm text-zinc-800">{title}</p>
        <p className="mt-1 text-[10px] md:text-xs text-zinc-500">{desc}</p>
      </div>
    </div>
  );
}
