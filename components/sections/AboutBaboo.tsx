"use client";

import { useRef, useState, useEffect } from "react";
import { Settings, ChevronLeft, ChevronRight, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutBaboo() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Ubah default ke 2 karena kita akan memposisikan awal di kartu ke-3 (Kanan)
  const [activeIndex, setActiveIndex] = useState(2);

  // State untuk memicu animasi masuk (fade-in)
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  // 1. Efek ketika komponen dimuat dan masuk ke viewport (layar)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // A. Set posisi awal LANGSUNG ke Kartu ke-3 (tanpa animasi)
    const card3 = container.children[2] as HTMLElement;
    if (card3) {
      const pos3 = card3.offsetLeft - (container.clientWidth - card3.clientWidth) / 2;
      container.scrollTo({ left: pos3, behavior: "instant" });
    }

    // B. Buat Observer untuk mendeteksi kapan section ini dilihat user
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        // Jika section terlihat dan belum pernah dianimasikan
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true); // Pemicu teks fade-in

          // C. Tunggu sebentar (600ms) agar user melihat posisi kartu ke-3,
          // lalu geser perlahan (smooth) ke kartu ke-2
          setTimeout(() => {
            const card2 = container.children[1] as HTMLElement;
            if (card2) {
              const pos2 = card2.offsetLeft - (container.clientWidth - card2.clientWidth) / 2;
              container.scrollTo({ left: pos2, behavior: "smooth" });
            }
          }, 600);
        }
      },
      { threshold: 0.25 }, // Akan terpicu ketika 25% section ini masuk ke layar
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // 2. Fungsi untuk mendeteksi kartu mana yang sedang di tengah saat di-swipe
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 1;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const el = child as HTMLElement;
      const childCenter = el.offsetLeft + el.clientWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  // 3. Fungsi untuk tombol prev/next agar scroll tepat ke kartu yang dituju
  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const targetCard = container.children[index] as HTMLElement;

    if (targetCard) {
      const scrollPosition = targetCard.offsetLeft - (container.clientWidth - targetCard.clientWidth) / 2;
      container.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="about"ref={sectionRef} className="flex flex-col items-center py-16 md:py-24 w-full overflow-hidden">
      {/* ========================= */}
      {/* HEADER TITLE (Animated) */}
      {/* ========================= */}
      <div className="flex flex-col items-center mb-12 px-4 text-center">
        <h3 className={cn("mb-2 font-bold text-[#495C29] text-sm md:text-base transition-all duration-700 ease-out", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>About Baboo Kos</h3>

        <h2 className={cn("mb-4 font-bold text-slate-900 text-3xl md:text-4xl lg:text-5xl tracking-tight transition-all duration-700 ease-out delay-150", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Your Ultimate Private Sanctuary
        </h2>

        <p className={cn("font-medium text-zinc-500 text-sm md:text-base transition-all duration-700 ease-out delay-300", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Providing the best service and premium facilities for your vacation.
        </p>
      </div>

      {/* ========================= */}
      {/* CAROUSEL CONTAINER */}
      {/* ========================= */}
      <div className="relative w-full max-w-[100vw]">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="[&::-webkit-scrollbar]:hidden flex items-center gap-4 md:gap-6 px-6 lg:px-[calc(50vw-425px)] pt-4 pb-8 w-full [-ms-overflow-style:none] overflow-x-auto snap-mandatory snap-x [scrollbar-width:none]"
        >
          {/* ========================= */}
          {/* KARTU 1 (Kiri) - Profesional Management */}
          {/* ========================= */}
          <div className="flex flex-col justify-end bg-[#E9F5EB] shadow-sm p-8 rounded-[2rem] md:rounded-[2.5rem] w-[85vw] max-w-[850px] h-[520px] md:h-[420px] overflow-hidden snap-center shrink-0">
            <Briefcase className="mb-3 text-[#495C29]" size={32} />
            <h3 className="mb-2 font-bold text-zinc-900 text-xl">Professional Management</h3>
            <p className="text-zinc-600 text-sm">Kami mengelola properti Anda dengan standar operasional profesional. Meningkatkan nilai aset dan memastikan kenyamanan maksimal bagi setiap penghuni.</p>
          </div>

          {/* ========================= */}
          {/* KARTU 2 (Tengah) - Main Green Card */}
          {/* ========================= */}
          <div className="relative flex flex-col justify-between items-center rounded-[2rem] md:rounded-[2.5rem] w-[90vw] max-w-[850px] h-[520px] md:h-[420px] overflow-hidden snap-center shrink-0 shadow-xl">

            {/* GREEN GRADIENT BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#495C29] to-[#2F3A18]" />

            {/* LINE PATTERN */}
            <div
              className="absolute inset-0 opacity-40 bg-center bg-cover pointer-events-none"
              style={{ backgroundImage: "url('/line2.svg')" }}
            />

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col justify-between items-center px-5 md:px-10 py-8 md:py-10 w-full h-full">

              <p className="font-medium text-[13px] text-white md:text-base text-center">
                We help people find 'kos' easier, while helping <br className="hidden md:block" />
                property owners grow digitally.
              </p>

              <div className="flex md:flex-row flex-col md:justify-center md:items-stretch gap-3 lg:gap-5 mt-4 md:mt-0 w-full">

                {/* Card 1 */}
                <div className="flex flex-col flex-1 bg-white shadow-sm p-4 rounded-2xl md:max-w-[220px]">
                  <p className="font-medium text-[10px] text-zinc-600 xl:text-xs leading-relaxed">
                    <span className="font-bold text-zinc-900">Baboo Kos</span> ikut membangun ekosistem digital properti di Indonesia.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col flex-1 justify-center gap-3 bg-white shadow-sm p-4 rounded-2xl md:max-w-[220px]">
                  <div>
                    <h4 className="mb-0.5 font-bold text-[11px] text-zinc-900 xl:text-xs">Visi</h4>
                    <p className="text-[9px] text-zinc-500 xl:text-[11px] leading-snug">
                      Making living space search friction-less for everyone.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-0.5 font-bold text-[11px] text-zinc-900 xl:text-xs">Misi</h4>
                    <p className="text-[9px] text-zinc-500 xl:text-[11px] leading-snug">
                      Connecting people with curated spaces through great UX & technology.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-row md:flex-col flex-1 gap-3 md:max-w-[220px]">
                  <div className="flex items-center bg-white shadow-sm p-2 md:pr-4 rounded-2xl md:rounded-full w-1/2 md:w-full">
                    <img
                      src="/hero.jpg"
                      alt="Baboo Kos"
                      className="rounded-full w-8 h-8 object-cover shrink-0"
                    />
                    <div className="ml-2">
                      <h4 className="font-bold text-[10px] text-zinc-900 xl:text-xs leading-none">
                        Baboo Kos
                      </h4>
                      <p className="mt-0.5 text-[8px] text-zinc-500 xl:text-[10px]">
                        Find it easier
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center bg-white shadow-sm p-3 md:p-4 rounded-2xl w-1/2 md:w-full md:h-full">
                    <h4 className="mb-0.5 font-bold text-[11px] text-zinc-900 xl:text-xs">
                      Objective
                    </h4>
                    <p className="text-[9px] text-zinc-500 xl:text-[11px] leading-relaxed">
                      Membantu setiap owner kos go digital.
                    </p>
                  </div>
                </div>

              </div>

              <p className="mt-4 md:mt-0 font-medium text-[11px] text-white/90 xl:text-sm text-center">
                Baboo Kos is growing as a nationwide <br className="hidden md:block" />
                platform across Indonesia
              </p>

            </div>
          </div>

          {/* ========================= */}
          {/* KARTU 3 (Kanan) - Partnership */}
          {/* ========================= */}
          <div className="group relative bg-zinc-200 shadow-sm rounded-[2rem] md:rounded-[2.5rem] w-[85vw] max-w-[850px] h-[520px] md:h-[420px] overflow-hidden snap-center shrink-0">
            <img src="/about.jpg" alt="Partnership" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <Settings className="mb-3 text-white" size={32} />
              <h3 className="mb-2 font-bold text-white text-xl">Partnership & Collaborations</h3>
              <p className="text-white/80 text-sm">Membuka peluang kolaborasi bersama pemilik kos, brand, maupun partner lainnya melalui kerja sama profesional yang saling menguntungkan dan berkelanjutan.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* SLIDER CONTROLS */}
      {/* ========================= */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button onClick={() => scrollToCard(Math.max(0, activeIndex - 1))} className="flex justify-center items-center bg-[#EEF3E8] hover:bg-[#dce3d4] shadow-sm rounded-full w-12 h-12 text-[#495C29] active:scale-95 transition-all">
          <ChevronLeft size={24} />
        </button>

        <div className="flex items-center gap-2 bg-[#EEF3E8] shadow-sm px-5 rounded-full h-12">
          {[0, 1, 2].map((index) => (
            <div key={index} onClick={() => scrollToCard(index)} className={cn("hover:bg-[#495C29]/70 rounded-full h-2.5 transition-all duration-300 cursor-pointer", activeIndex === index ? "w-10 bg-[#495C29]" : "w-2.5 bg-zinc-300")} />
          ))}
        </div>

        <button onClick={() => scrollToCard(Math.min(2, activeIndex + 1))} className="flex justify-center items-center bg-[#EEF3E8] hover:bg-[#dce3d4] shadow-sm rounded-full w-12 h-12 text-[#495C29] active:scale-95 transition-all">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
