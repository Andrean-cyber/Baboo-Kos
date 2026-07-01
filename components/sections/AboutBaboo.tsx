"use client";

import { useRef, useState, useEffect } from "react";
import { Settings, ChevronLeft, ChevronRight, UserCheck, TrendingUp, Sparkles, ShieldCheck, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link"; 
import Image from "next/image";
import { AnimatedList } from "@/components/magicui/animated-list";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { ShineBorder } from "@/components/magicui/shine-border"
// Import brand icons murni dari react-icons
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa6";
import { SiThreads } from "react-icons/si";

const managementNotifications = [
  {
    id: 1,
    title: "Booking Berhasil!",
    desc: "Kamar A3 Kos Pak Joko baru saja di-booking via platform.",
    icon: <UserCheck size={14} className="text-[#495C29]" />,
    time: "Baru saja",
  },
  {
    id: 2,
    title: "Laporan Pendapatan",
    desc: "Cuan Owner Kos Bu Sri naik 25% setelah Paket TikTok Deluxe.",
    icon: <TrendingUp size={14} className="text-emerald-600" />,
    time: "2 mnt lalu",
  },
  {
    id: 3,
    title: "Properti Baru Terverifikasi",
    desc: "Kost Sanjaya resmi bergabung dalam jaringan premium.",
    icon: <ShieldCheck size={14} className="text-amber-600" />,
    time: "10 mnt lalu",
  },
  {
    id: 4,
    title: "Konten Siap Tayang",
    desc: "Video editing short-form untuk Kos Green View selesai dikurasi.",
    icon: <Sparkles size={14} className="text-blue-600" />,
    time: "30 mnt lalu",
  },
];

export default function AboutBaboo() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(2);
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState(false); // BARU: untuk play/pause loop animations
  const hasAnimated = useRef(false);

useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  const card3 = container.children[2] as HTMLElement;
  if (card3) {
    const pos3 = card3.offsetLeft - (container.clientWidth - card3.clientWidth) / 2;
    container.scrollTo({ left: pos3, behavior: "instant" });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      setIsInView(entry.isIntersecting); // BARU: selalu update sesuai status terkini

      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        setIsVisible(true);

        setTimeout(() => {
          const card2 = container.children[1] as HTMLElement;
          if (card2) {
            const pos2 = card2.offsetLeft - (container.clientWidth - card2.clientWidth) / 2;
            container.scrollTo({ left: pos2, behavior: "smooth" });
          }
        }, 600);
      }
    },
    { threshold: 0.15 },
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => {
    observer.disconnect();
  };
}, []);

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
    <section id="about" ref={sectionRef} className="flex flex-col items-center py-10 w-full overflow-hidden">
      {/* HEADER TITLE */}
      <div className="flex flex-col items-center mb-12 px-4 text-center">
        <h3 className={cn("mb-2 font-bold text-[#495C29] text-sm md:text-base transition-all duration-700 ease-out", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>About Baboo Kos</h3>
        <h2 className={cn("mb-4 font-bold text-slate-900 text-3xl md:text-4xl lg:text-5xl tracking-tight transition-all duration-700 ease-out delay-150", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Anti-Zonk Cari Kos, Anti-Sepi Cari Penghuni
        </h2>
        <p className={cn("font-medium text-zinc-500 text-sm md:text-base transition-all duration-700 ease-out delay-300", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Platform dua arah yang mempertemukan pencari hunian jujur dengan pemilik kos yang siap go-digital tanpa drama.
        </p>
      </div>

      {/* CAROUSEL CONTAINER */}
      <div className="relative w-full max-w-[100vw]">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="[&::-webkit-scrollbar]:hidden flex items-center gap-4 md:gap-6 px-6 lg:px-[calc(50vw-425px)] pt-4 pb-8 w-full [-ms-overflow-style:none] overflow-x-auto snap-mandatory snap-x [scrollbar-width:none]"
        >
          {/* ======================================================== */}
          {/* KARTU 1 (Tinggi disamakan h-[530px])                     */}
          {/* ======================================================== */}
          <div className="group relative flex flex-col justify-center items-center shadow-md p-4 sm:p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] w-[92vw] max-w-[850px] h-[530px] md:h-[420px] overflow-hidden snap-center shrink-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            >
              <source src="/video.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/40" />
            
            <div className="relative z-10 w-full h-full flex flex-col justify-center items-center py-4 px-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="w-full max-w-[400px] md:max-w-full">
                {/* PERBAIKAN: List baru akan me-render dan menganimasi setelah section di-scroll masuk ke viewport */}
                {isVisible && (
                  <AnimatedList delay={1800}>
                    {managementNotifications.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-2.5 md:gap-3 w-full bg-black/30 backdrop-blur-md p-2.5 md:p-3 rounded-xl border border-white/10 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/5 mb-2"
                      >
                        <div className="p-1.5 md:p-2 rounded-xl bg-white/10 text-white shrink-0">
                          <div className="[&>svg]:text-white [&>svg]:w-3.5 [&>svg]:h-3.5 md:[&>svg]:w-4 md:[&>svg]:h-4">{item.icon}</div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1.5 mb-0.5">
                            <span className="font-bold text-white text-[11px] md:text-xs truncate">{item.title}</span>
                            <span className="text-[9px] md:text-[10px] text-white/60 shrink-0">{item.time}</span>
                          </div>
                          <p className="text-white/80 text-[10px] md:text-[11px] leading-snug break-words line-clamp-2 md:line-clamp-1 md:truncate">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </AnimatedList>
                )}
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* KARTU 2 (Tinggi disamakan h-[530px] + Fix Potong Teks)    */}
          {/* ======================================================== */}
          <div className="relative flex flex-col justify-between items-center rounded-[2rem] md:rounded-[2.5rem] w-[90vw] max-w-[850px] h-[530px] md:h-[420px] overflow-hidden snap-center shrink-0 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#495C29] to-[#2F3A18]" />
            <div className="absolute inset-0 opacity-40 bg-center bg-cover pointer-events-none" style={{ backgroundImage: "url('/line2.svg')" }} />
            
            {/* PERBAIKAN: Menambahkan overflow-y-auto pada wrapper agar aman dari pemotongan teks di device pendek */}
            <div className="relative z-10 flex flex-col justify-between items-center px-4 sm:px-5 md:px-10 py-5 md:py-10 w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <p className="font-medium text-[12px] sm:text-[13px] text-white md:text-base text-center mb-2 md:mb-0 shrink-0">
                We help people find 'kos' easier, while helping <br className="hidden md:block" />
                property owners grow digitally.
              </p>

              {/* PERBAIKAN: Mengurangi gap di mobile dari gap-3 menjadi gap-2.5 agar hemat ruang */}
              <div className="flex md:flex-row flex-col md:justify-center md:items-stretch gap-2.5 lg:gap-5 mt-1 md:mt-0 w-full">
                
                {/* BLOK 1: Orbiting Circles */}
                <div className="relative flex flex-col flex-1 bg-white shadow-sm p-3 md:p-4 rounded-2xl md:max-w-[220px] min-h-[175px] md:min-h-0 justify-between items-center overflow-hidden">
                  <div className="relative flex w-full flex-1 items-center justify-center min-h-[105px] md:min-h-[120px] py-1">
                    <OrbitingCircles radius={45} duration={25} path={true} isPaused={!isInView}>
                      <div className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-emerald-50/60 border border-emerald-100/80 shadow-sm">
                        <FaWhatsapp className="text-[#25D366]" size={11} />
                      </div>
                      <div className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-rose-50/60 border border-rose-100/80 shadow-sm">
                        <FaInstagram className="text-[#E1306C]" size={11} />
                      </div>
                      <div className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-blue-50/60 border border-blue-100/80 shadow-sm">
                        <FaFacebook className="text-[#1877F2]" size={11} />
                      </div>
                    </OrbitingCircles>

                    <OrbitingCircles radius={24} duration={15} reverse path={true} isPaused={!isInView}>
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-50 border border-zinc-100 shadow-sm">
                        <FaTiktok className="text-black" size={9} />
                      </div>
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 shadow-sm">
                        <SiThreads className="text-white" size={9} />
                      </div>
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 border border-blue-100 shadow-sm">
                        <Globe className="text-blue-600" size={9} />
                      </div>
                    </OrbitingCircles>
                  </div>

                  <p className="w-full font-medium text-[9px] text-zinc-600 xl:text-xs leading-relaxed text-center border-t border-zinc-100 pt-1.5 shrink-0">
                    <span className="font-bold text-zinc-900 block mb-0.5">Baboo Kos</span> ikut membangun ekosistem digital properti di Indonesia.
                  </p>
                </div>

                {/* BLOK 2: Visi Misi */}
                <div className="relative flex flex-col flex-1 justify-center gap-2 bg-white shadow-sm p-5.5 rounded-2xl md:max-w-[220px] overflow-hidden group">
                  <div className="relative z-10 space-y-2">
                    <div>
                      <h4 className="mb-0.5 font-bold text-[10px] sm:text-[11px] text-zinc-900 xl:text-xs">Visi</h4>
                      <p className="text-[9px] text-zinc-500 xl:text-[11px] leading-snug">Ngabulin mimpi semua anak kosan: dapet hunian yang pas, jujur dan bebas ribet.</p>
                    </div>
                    <div>
                      <h4 className="mb-0.5 font-bold text-[10px] sm:text-[11px] text-zinc-900 xl:text-xs">Misi</h4>
                      <p className="text-[9px] text-zinc-500 xl:text-[11px] leading-snug">Jadi mak comblang digital yang paling sat-set buat nemuin kamu sama kos impianmu lewat platform yang super user-friendly.</p>
                    </div>
                  </div>
                  <ShineBorder 
                    borderWidth={2} 
                    duration={15} 
                    shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} 
                    className="absolute inset-0 z-0"
                    isPaused={!isInView}
                  />
                </div>

                {/* BLOK 3: Mini Info */}
                <div className="flex flex-row md:flex-col flex-1 gap-2.5 md:max-w-[220px]">
                  <div className="flex items-center bg-white shadow-sm p-2 md:pr-4 rounded-2xl md:rounded-full w-1/2 md:w-full">
                    <Image src="/about.webp" alt="Baboo Kos" width={28} height={28} className="rounded-full w-7 h-7 object-cover shrink-0" />
                    <div className="ml-2">
                      <h4 className="font-bold text-[10px] text-zinc-900 xl:text-xs leading-none">Baboo Kos</h4>
                      <p className="mt-0.5 text-[8px] text-zinc-500 xl:text-[10px]">Find it easier</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center bg-white shadow-sm p-4.5 md:p-4 rounded-2xl w-1/2 md:w-full md:h-full">
                    <h4 className="mb-0.5 font-bold text-[10px] sm:text-[11px] text-zinc-900 xl:text-xs">Objective</h4>
                    <p className="text-[9px] text-zinc-500 xl:text-[11px] leading-tight">Ngebantu pemilik kos naik kelas lewat digitalisasi, biar manajemen kosan jadi se-simple sosmed-an.</p>
                  </div>
                </div>
              </div>

              {/* PERBAIKAN: Teks ini dipastikan aman, tidak akan menempel ke ujung bawah screen karena padding container dijaga */}
              <p className="mt-3 md:mt-0 font-medium text-[10px] sm:text-[11px] text-white/90 xl:text-sm text-center shrink-0">
                Baboo Kos is growing as a nationwide <br className="hidden md:block" />
                platform across Indonesia
              </p>
            </div>
          </div>

          {/* ======================================================== */}
          {/* KARTU 3 (Tinggi disamakan h-[530px])                     */}
          {/* ======================================================== */}
          <Link 
            href="/simulation"
            className="group relative block bg-zinc-200 shadow-sm rounded-[2rem] md:rounded-[2.5rem] w-[85vw] max-w-[850px] h-[530px] md:h-[420px] overflow-hidden snap-center shrink-0 cursor-pointer active:scale-[0.99] transition-transform duration-200"
          >

<Image src="/about.webp" alt="Partnership" fill priority
  sizes="(max-width: 768px) 85vw, 850px"
  className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
              <Settings className="mb-3 text-white group-hover:rotate-45 transition-transform duration-500" size={32} />
              <h3 className="mb-2 font-bold text-white text-lg md:text-xl">Partnership & Collaborations</h3>
              <p className="text-white/80 text-xs md:text-sm">Membuka peluang kolaborasi bersama pemilik kos, brand, maupun partner lainnya melalui kerja sama profesional yang saling menguntungkan dan berkelanjutan.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* SLIDER CONTROLS */}
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