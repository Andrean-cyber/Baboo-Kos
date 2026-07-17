"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { ShinyButton } from "@/components/magicui/shiny-button"
import { DiaTextReveal } from "@/components/magicui/dia-text-reveal"
import {
  Star,
  StarHalf,
} from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";

// Data sampel gambar avatar untuk Avatar Circles
const avatarImages = [
  "/avatar/avatar1.webp",
  "/avatar/avatar2.webp",
  "/avatar/avatar3.webp",
  "/avatar/avatar4.webp",
  "/avatar/avatar5.webp",
  "/avatar/avatar6.webp",
];

export default function HeroKos() {
  // ==========================================
  // STATE ANIMASI LOAD HERO
  // ==========================================
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Observer untuk mendeteksi apakah hero section terlihat
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSectionVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ==========================================
  // STATE & LOGIKA ANIMASI TYPING (PLACEHOLDER)
  // ==========================================
  const placeholderPhrases = ["Hi, Baboo Kos...", "Mau dicariin kos donggg..."];
  const [placeholderText, setPlaceholderText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    // Berhenti total kalau section tidak terlihat
    if (!isSectionVisible) return;

    const currentPhrase = placeholderPhrases[phraseIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && placeholderText === currentPhrase) {
      typingSpeed = 2000;
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && placeholderText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % placeholderPhrases.length);
      typingSpeed = 500;
      return;
    }

    const timeout = setTimeout(() => {
      setPlaceholderText(
        currentPhrase.substring(0, placeholderText.length + (isDeleting ? -1 : 1))
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [placeholderText, isDeleting, phraseIndex, isSectionVisible]);

  // ==========================================
  // LOGIKA WHATSAPP & FILTER KATA KASAR
  // ==========================================
  const [inputValue, setInputValue] = useState("");

  const badWordsDictionary = [
    "anjing", "babi", "bangsat", "bodoh", "goblok", "tolol", "jelek", "kasar", "jancok", "memek", "kontol", "lol", "bajingan"
  ];

  const handleWhatsAppRedirect = () => {
    let message = inputValue.trim();

    if (!message) {
      message = "Halo Baboo Kos, aku mau dicariin kos dong...";
    } else {
      badWordsDictionary.forEach((word) => {
        const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(`\\b${escapedWord}\\b`, "gi");
        message = message.replace(regex, "***");
      });
    }

    const whatsappNumber = "6287785338441";
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(waUrl, "_blank");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleWhatsAppRedirect();
    }
  };

  return (
    <>
      {/* ========================= */}
      {/* HERO SECTION */}
      {/* ========================= */}
      <section id="home" ref={sectionRef} className="relative flex lg:flex-row flex-col lg:items-start gap-8 lg:gap-10 lg:mx-auto px-4 sm:px-6 md:px-10 lg:px-12 pt-4 lg:pt-6 w-full max-w-[1280px] overflow-hidden">
        
        {/* ========================= */}
        {/* LEFT CONTENT (DESKTOP) */}
        {/* PERBAIKAN: Mengubah flex menjadi hidden lg:flex agar tidak muncul di mobile */}
        {/* ========================= */}
        <div className="z-10 hidden lg:flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[48%] mt-8 lg:mt-25">   
          {/* Badge */}
          <ShinyButton
            className={cn(
              "inline-flex items-center gap-2 bg-[#FAFAFA] mb-5 lg:mb-7 px-4 py-2 rounded-full w-max font-bold text-[#495C29] text-sm transition-all duration-1000 ease-out border border-zinc-200",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            <Sparkles size={15} className="z-10 relative text-[#495C29]" />
            Trustworthy Warranty
          </ShinyButton>

          {/* Title */}
          <h1
            className={cn(
              "max-w-[720px] font-bold leading-[1.05] tracking-[-0.05em] transition-all duration-1000 ease-out delay-200",
              "text-2xl sm:text-4xl md:text-5xl lg:text-[4rem]",
              "text-center lg:text-left",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            Cari Kos
            <span className="text-yellow-500"> Tanpa Ribet,</span> 
            <DiaTextReveal text=" Sesuai Budget!" textColor="#495C29" className="font-bold tracking-[-0.05em]" />
          </h1>

          {/* Description */}
          <p className={cn("mt-6 max-w-[430px] font-medium text-zinc-500 text-base leading-relaxed transition-all duration-1000 ease-out delay-[400ms]", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
            Standar baru cari tempat tinggal anak muda. Prosesnya digital, fasilitasnya riil, dan harganya transparan dari awal sampai kamu terima kunci.
          </p>

          {/* Input Search (Desktop) */}
          <div
            className={cn(
              "flex items-center bg-white shadow-sm mt-8 p-1.5 border border-zinc-200 rounded-full w-full max-w-md transition-all duration-1000 ease-out delay-[600ms]",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholderText} 
              className="flex-1 bg-transparent px-5 py-3 outline-none font-medium text-zinc-800 placeholder:text-zinc-400" 
            />

            {/* Arrow Button */}
            <button
              onClick={handleWhatsAppRedirect}
              className={cn(
                "flex justify-center items-center bg-[#495C29] hover:bg-[#44552a] rounded-full w-24 h-12 text-white transition-all duration-1000 ease-out delay-[1000ms]",
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
              )}
            >
              <ArrowRight size={20} />
            </button>
          </div>

          {/* ========================================== */}
          {/* AVATAR CIRCLES (Menggantikan Tabs Lama)   */}
          {/* ========================================== */}
          <div className={cn("flex items-center gap-4 mt-8 transition-all duration-1000 ease-out delay-[800ms]", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
            <div className="flex -space-x-3.5 overflow-hidden object-cover">
              {avatarImages.map((src, idx) => (
                <Image key={idx} width={40} height={40} className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src={src} alt={`User avatar ${idx + 1}`} />
              ))}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black font-bold text-white text-xs ring-2 ring-white">
                +99
              </div>
            </div>
            
            <div className="flex flex-col justify-center leading-tight">
              <p className="font-extrabold text-zinc-800 text-xs md:text-sm">Dipercayai oleh 40k+ pencari hunian</p>
              <p className="text-zinc-400 text-[11px] font-medium">Rating kepuasan 4.7/5 di seluruh Indonesia</p>
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* MOBILE HERO                */}
        {/* ========================= */}
        <div className="lg:hidden block relative w-full">
          {/* Hero Image */}
          <div className={cn("relative mt-20 rounded-[1rem] h-[420px] overflow-hidden transition-all duration-1000 ease-out shadow-[0_10px_40px_rgba(0,0,0,0.08)]", isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95")}>
            <Image src="/hero.webp" sizes="(max-width: 1024px) 100vw, 0vw" alt="Baboo Kos" fill className="object-cover" priority loading="eager" />
            <div className="absolute inset-0 bg-black/20" />

            <div className="z-20 absolute inset-0 flex flex-col justify-end px-5 pb-6">
              
              {/* Badge kanan atas */}
              <ShinyButton
                className={cn(
                  "absolute top-6 right-6 z-30",
                  "inline-flex items-center gap-1.5",
                  "bg-[#FAFAFA]/20 backdrop-blur-md",
                  "px-3 py-2 rounded-full",
                  "font-bold text-[#FFFFFF] text-[0.85rem]",
                  "transition-all duration-1000 ease-out delay-300",
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
                )}
              >
                <Sparkles size={12} className="relative z-10 text-[#FFFFFF]" />
                Trustworthy Warranty
              </ShinyButton>

              <h1
                className={cn(
                  "max-w-[1440px] text-center font-bold text-white leading-[1.05] tracking-[-0.01em] transition-all duration-1000 ease-out delay-500",
                  "text-[1.8rem] sm:text-[2rem] md:text-[2.5rem]",
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
              >
                Cari Kos Tanpa Ribet{" "}
                <span className="inline-flex items-center gap-1 bg-white px-4 py-0 rounded-full text-[#495C29]">
                <span className="text-yellow-500">Sesuai</span>
                <span>Budget!</span>
              </span>
              </h1>
            </div>
          </div>

          {/* Deskripsi — ditampilkan di mobile */}
          <p className={cn("mt-5 text-center font-medium text-zinc-500 text-sm leading-relaxed transition-all duration-1000 ease-out delay-[500ms]", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
            Standar baru cari tempat tinggal anak muda. Prosesnya digital, fasilitasnya riil, dan harganya transparan dari awal sampai kamu terima kunci.
          </p>

          {/* Form Pencarian Mobile — dipindah masuk ke dalam hero section */}
          <div className={cn("flex items-center bg-white shadow-sm mt-5 p-1 border border-zinc-200 rounded-full w-full transition-all duration-1000 ease-out delay-[600ms]", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholderText} 
              className="flex-1 bg-transparent px-4 py-2.5 outline-none font-semibold text-[#495C29] text-[14px] placeholder:text-[#495C29]/60" 
            />
            <button 
              onClick={handleWhatsAppRedirect}
              className={cn("flex justify-center items-center gap-1.5 bg-[#495C29] px-5 rounded-full h-11 shrink-0 font-semibold text-white text-[13px] transition-all duration-1000 ease-out delay-[500ms]", isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10")}
            >
              Kirim
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Avatar Circles — ditampilkan di mobile, avatar & teks sejajar, blok di-center di layar */}
          <div className={cn("flex justify-center mt-6 mb-2 transition-all duration-1000 ease-out delay-[800ms]", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
            <div className="flex items-center gap-3 max-w-[350px]">
              <div className="flex -space-x-3.5 overflow-hidden shrink-0">
                {avatarImages.map((src, idx) => (
                  <Image key={idx} width={36} height={36} className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src={src} alt={`User avatar ${idx + 1}`} />
                ))}
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black font-bold text-white text-[10px] ring-2 ring-white">
                  +99
                </div>
              </div>

              <div className="flex flex-col justify-center leading-tight text-left">
                <p className="font-extrabold text-zinc-800 text-xs">Dipercayai oleh 40k+ pencari hunian</p>
                <p className="text-zinc-400 text-[10px] font-medium">Rating kepuasan 4.7/5 di seluruh Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* DESKTOP IMAGE */}
        {/* ========================= */}
        <div className="hidden lg:block relative w-[52%]">
          <div className={cn("relative rounded-[2.5rem] w-full h-[650px] transition-all duration-1000 ease-out", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
              <Image src="/hero.webp" sizes="52vw" alt="BabooKos" fill className="brightness-[0.95] object-cover" priority loading="eager" />
            </div>

            <div className="top-0 right-0 z-5 absolute bg-[#FAFAFA] rounded-bl-[2.5rem] w-[180px] h-[84px]">
              <div className="top-0 -left-[30px] absolute bg-transparent shadow-[15px_-15px_0_15px_#FAFAFA] rounded-tr-[1.5rem] w-[30px] h-[30px]" />
              <div className="right-0 -bottom-[30px] absolute bg-transparent shadow-[15px_-15px_0_15px_#FAFAFA] rounded-tr-[1.5rem] w-[30px] h-[30px]" />
            </div>

            {/* FLOATING LEFT (Membangun Kepercayaan) */}
            <div
              className={cn(
                "top-[55%] left-[-15%] z-20 absolute flex items-center gap-4 bg-white/92 shadow-xl backdrop-blur-xl px-4 py-3 border border-zinc-100 rounded-3xl transition-all duration-1000 ease-out delay-[600ms]",
                isLoaded ? "opacity-100 translate-y-0 -translate-x-6" : "opacity-0 translate-y-16 -translate-x-6",
              )}
            >
              <div className="flex justify-center items-center bg-yellow-50 rounded-2xl w-12 h-12 text-yellow-500">
                <CheckCircle2 size={22} className="fill-yellow-100" />
              </div>
              <div>
                <p className="font-bold text-[15px] text-zinc-900">Membangun</p>
                <div className="flex items-center gap-3 mt-1 font-semibold text-[11px] text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <span className="bg-[#495C29] rounded-full w-2 h-2" />
                    Kepercayaan
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="bg-yellow-500 rounded-full w-2 h-2" />
                    Kenyamanan
                  </span>
                </div>
              </div>
            </div>

            {/* FLOATING BOTTOM RIGHT */}
            {/* <div className={cn("right-8 bottom-8 z-20 absolute flex items-center w-[420px] transition-all duration-1000 ease-out delay-[900ms]", isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24")}>
              <div className="flex flex-1 items-center bg-[#FAFAFA]/95 shadow-xl backdrop-blur-xl py-2 pr-5 pl-2 border border-white/50 rounded-full">
                <Image src="/hero.webp" sizes="52vw" alt="Agent" width={48} height={48} className="shadow-sm border-2 border-white rounded-full w-12 h-12 object-cover"  loading="eager" />
                <div className="ml-3">
                  <p className="font-bold text-[#495C29] text-[15px]">Baboo Kos</p>
                  <p className="font-medium text-[12px] text-zinc-500">Find Kos is Easier</p>
                </div>
              </div>
              <div className="bg-white shadow-md mx-3 rounded-full w-[6px] h-[6px]" />
              <button className="flex justify-center items-center bg-white/80 hover:bg-white shadow-lg backdrop-blur-xl border border-white/50 rounded-full w-14 h-14 active:scale-95 transition-all">
                <ArrowRight size={18} className="text-[#495C29]" />
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* STATS */}
      {/* ========================= */}
      <section className="mx-auto mt-8 md:mt-14 px-5 md:px-10 lg:px-16 w-full max-w-[1240px]">
        <div className="md:flex md:justify-between md:items-center gap-x-8 gap-y-8 grid grid-cols-2 justify-items-center">
          <StatItem endValue={40000} suffix=" +" text={<>Pengguna <br /> Jasa</>} />
          <StatItem endValue={8000} suffix=" +" text={<>Mitra Owner <br /> Kos</>} />
          <StatItem endValue={137} suffix=" +" text={<>Networking Accros <br /> Indonesia</>} />
          <StatItem endValue={4.7} suffix="/5" decimals={1} isRating text={<>Testimonial <br /> Customer</>} />
        </div>
      </section>
    </>
  );
}

// ==========================================
// SUB-COMPONENTS DENGAN COUNT UP
// ==========================================

function StatItem({ endValue, suffix, text, isRating = false, decimals = 0 }: { endValue: number; suffix: string; text: React.ReactNode; isRating?: boolean; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount(easeProgress * endValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, endValue]);

  const formattedCount = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString("id-ID");

  return (
    <div ref={ref} className={cn("flex items-center gap-3 md:gap-4 min-w-[150px] transition-all duration-1000 ease-out", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
      <h3 className="font-bold text-[1.65rem] text-zinc-900 md:text-[2rem] leading-none tracking-[-0.04em] whitespace-nowrap">
        {formattedCount}
        {suffix}
      </h3>

      <div className="flex flex-col justify-center text-left">
        {isRating && (
          <div className="flex items-center gap-0.5 mb-1 text-[#F3C546]">
            <Star size={12} fill="currentColor" strokeWidth={1.5} />
            <Star size={12} fill="currentColor" strokeWidth={1.5} />
            <Star size={12} fill="currentColor" strokeWidth={1.5} />
            <Star size={12} fill="currentColor" strokeWidth={1.5} />
            <StarHalf size={12} fill="currentColor" strokeWidth={1.5} />
          </div>
        )}
        <p className="max-w-[90px] md:max-w-[100px] font-semibold text-[12px] text-zinc-500 md:text-[14px] leading-[1.15]">{text}</p>
      </div>
    </div>
  );
}
