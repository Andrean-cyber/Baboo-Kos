"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { ShinyButton } from "@/components/magicui/shiny-button"

import { cn } from "@/lib/utils";

export default function HeroKos() {
  // ==========================================
  // STATE ANIMASI LOAD HERO
  // ==========================================
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // ==========================================
  // STATE & LOGIKA ANIMASI TYPING (PLACEHOLDER)
  // ==========================================
  const placeholderPhrases = ["Hi, Baboo Kos...", "Hi, Baboo Villa...", "informasi lebih lanjut..."];
  const [placeholderText, setPlaceholderText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = placeholderPhrases[phraseIndex];
    let typingSpeed = isDeleting ? 50 : 100; // Kecepatan hapus 50ms, ngetik 100ms

    if (!isDeleting && placeholderText === currentPhrase) {
      // Jeda 2 detik saat teks selesai diketik sebelum mulai menghapus
      typingSpeed = 2000;
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && placeholderText === "") {
      // Pindah ke kalimat selanjutnya saat teks sudah habis dihapus
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % placeholderPhrases.length);
      typingSpeed = 500; // Jeda sebelum mulai mengetik kalimat baru
      return;
    }

    const timeout = setTimeout(() => {
      setPlaceholderText(
        currentPhrase.substring(0, placeholderText.length + (isDeleting ? -1 : 1))
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [placeholderText, isDeleting, phraseIndex]);

  // ==========================================
  // LOGIKA WHATSAPP & FILTER KATA KASAR
  // ==========================================
  const [inputValue, setInputValue] = useState("");

  // Daftar kata-kata tidak baik (Silakan tambahkan sesuai kebutuhan Anda)
  const badWordsDictionary = [
    "anjing", "babi", "bangsat", "bodoh", "goblok", "tolol", "jelek", "kasar"
  ];

  const handleWhatsAppRedirect = () => {
    let message = inputValue.trim();

    // Jika input kosong, kirim pesan default
    if (!message) {
      message = "Halo Baboo Kos, saya ingin bertanya...";
    } else {
      // Proses Sensor: Ganti kata tidak baik dengan "***"
      badWordsDictionary.forEach((word) => {
        // Regex 'gi' (Global, Case-Insensitive) agar menyensor huruf besar/kecil
        const regex = new RegExp(`\\b${word}\\b`, "gi"); 
        message = message.replace(regex, "***");
      });
    }

    const whatsappNumber = "6287785338441";
    // Mengkodekan pesan agar aman dikirim lewat URL
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Buka WhatsApp di tab baru
    window.open(waUrl, "_blank");
  };

  // Pemicu saat user menekan tombol 'Enter' di keyboard
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
      <section className="relative flex lg:flex-row flex-col lg:items-start gap-8 lg:gap-10 lg:mx-auto px-4 sm:px-6 md:px-10 lg:px-12 pt-4 lg:pt-6 w-full max-w-[1440px] overflow-hidden">
        
        {/* ========================= */}
        {/* LEFT CONTENT (DESKTOP) */}
        {/* ========================= */}
        <div className="hidden z-10 lg:flex flex-col pt-28 w-[48%]">
          {/* Badge */}
          <ShinyButton
            className={cn(
              "inline-flex items-center gap-2 bg-[#EEF3E8] mb-7 px-4 py-2 rounded-full w-max font-bold text-[#495C29] text-sm transition-all duration-1000 ease-out",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            <Sparkles size={15} className="z-10 relative text-[#495C29]" />
            Unlimited comfort
          </ShinyButton>

          {/* Title */}
          <h1 className={cn("max-w-[720px] font-bold text-[4rem] text-zinc-900 leading-[1.05] tracking-[-0.05em] transition-all duration-1000 ease-out delay-200", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
            A Simplified Way
            <br />
            to Start <span className="text-[#495C29]">Find</span>
            <br />
            <span className="text-[#495C29]">Kos.</span>
          </h1>

          {/* Description */}
          <p className={cn("mt-8 max-w-[430px] font-medium text-zinc-500 text-lg leading-relaxed transition-all duration-1000 ease-out delay-[400ms]", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
            Explore, choose, and book your private sanctuary tailored to your ultimate comfort.
          </p>

          {/* Input Search (Desktop) */}
          <div
            className={cn(
              "flex items-center bg-white shadow-sm mt-9 p-1.5 border border-zinc-200 rounded-full w-full max-w-md transition-all duration-1000 ease-out delay-[600ms]",
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

          {/* Tabs */}
          <div className={cn("flex items-center gap-3 mt-6 transition-all duration-1000 ease-out delay-[800ms]", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
            {["Kos", "Villa", "Holiday", "Enjoy"].map((tab, idx) => (
              <button
                key={idx}
                className={cn("px-6 py-2 border rounded-full font-bold text-sm transition-all", idx === 0 ? "border-[#495C29] bg-white text-[#495C29] shadow-sm" : "border-zinc-200 bg-white text-zinc-400 hover:border-zinc-300")}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ========================= */}
        {/* MOBILE HERO */}
        {/* ========================= */}
        <div className="lg:hidden block relative w-full">
          <div className={cn("relative mt-20 rounded-[1rem] h-[560px] overflow-hidden transition-all duration-1000 ease-out mtshadow-[0_10px_40px_rgba(0,0,0,0.08)]", isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95")}>
            <img src="/hero.jpg" alt="Baboo Kos" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/28" />

            <div className="z-20 absolute inset-0 flex flex-col justify-end px-5 pb-28">
              
              <ShinyButton
            className={cn(
              "inline-flex items-center gap-1.5 bg-[#EEF3E8]/95 backdrop-blur-md mb-4 px-3 py-1.5 rounded-full w-max font-bold text-[#495C29] text-[11px] transition-all duration-1000 ease-out delay-300",
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            <Sparkles size={15} className="z-10 relative text-[#495C29]" />
            Unlimited comfort
          </ShinyButton>

              <h1 className={cn("max-w-[290px] font-bold text-[2rem] text-white leading-[1] tracking-[-0.01em] transition-all duration-1000 ease-out delay-500", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
                A Simplified Way
                <br />
                to Start Find
                <br />
                Kos.
              </h1>
            </div>

            {/* Mobile Floating Card */}
            <div className={cn("bottom-5 left-1/2 z-30 absolute flex items-center w-[85%] transition-all duration-1000 ease-out delay-[800ms]", isLoaded ? "opacity-100 -translate-x-1/2" : "opacity-0 translate-x-[50%]")}>
              <div className="flex flex-1 items-center bg-[#EEF3E8]/95 shadow-xl backdrop-blur-xl py-2 pr-4 pl-2 border border-white/40 rounded-full">
                <img src="/hero.jpg" alt="Agent" className="border-2 border-white rounded-full w-12 h-12 object-cover" />
                <div className="ml-3">
                  <p className="font-extrabold text-[#495C29] text-[15px]">Baboo Kos</p>
                  <p className="font-medium text-[12px] text-zinc-500">Find kos is easier</p>
                </div>
              </div>

              <button className="flex justify-center items-center bg-white/90 shadow-lg backdrop-blur-xl ml-3 border border-white/40 rounded-full w-12 h-12 active:scale-95 transition-all shrink-0">
                <ArrowRight size={18} className="text-[#495C29]" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* DESKTOP IMAGE */}
        {/* ========================= */}
        <div className="hidden lg:block relative w-[52%]">
          <div className={cn("relative shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-[2.5rem] w-full h-[650px] transition-all duration-1000 ease-out", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
              <img src="/hero.jpg" alt="BabooKos" className="brightness-[0.95] w-full h-full object-cover" />
            </div>

            <div className="top-0 right-0 z-10 absolute bg-[#FAFAFA] rounded-bl-[2.5rem] w-[180px] h-[84px]">
              <div className="top-0 -left-[30px] absolute bg-transparent shadow-[15px_-15px_0_15px_#FAFAFA] rounded-tr-[1.5rem] w-[30px] h-[30px]" />
              <div className="right-0 -bottom-[30px] absolute bg-transparent shadow-[15px_-15px_0_15px_#FAFAFA] rounded-tr-[1.5rem] w-[30px] h-[30px]" />
            </div>

            {/* FLOATING LEFT (Membangun Kepercayaan) */}
            <div
              className={cn(
                "top-[55%] left-[-15%] z-20 absolute flex items-center gap-4 bg-white/92 shadow-xl backdrop-blur-xl px-4 py-3 border border-zinc-100 rounded-[1.7rem] transition-all duration-1000 ease-out delay-[600ms]",
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
            <div className={cn("right-8 bottom-8 z-20 absolute flex items-center w-[420px] transition-all duration-1000 ease-out delay-[900ms]", isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24")}>
              <div className="flex flex-1 items-center bg-[#EBF0E6]/95 shadow-xl backdrop-blur-xl py-2 pr-5 pl-2 border border-white/50 rounded-full">
                <img src="/hero.jpg" alt="Agent" className="shadow-sm border-2 border-white rounded-full w-12 h-12 object-cover" />
                <div className="ml-3">
                  <p className="font-bold text-[#495C29] text-[15px]">Baboo Kos</p>
                  <p className="font-medium text-[12px] text-zinc-500">Find Kos is Easier</p>
                </div>
              </div>
              <div className="bg-white shadow-md mx-3 rounded-full w-[6px] h-[6px]" />
              <button className="flex justify-center items-center bg-white/80 hover:bg-white shadow-lg backdrop-blur-xl border border-white/50 rounded-full w-14 h-14 active:scale-95 transition-all">
                <ArrowRight size={18} className="text-[#495C29]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* STATS */}
      {/* ========================= */}
      <section className="mx-auto mt-8 md:mt-14 px-5 md:px-10 lg:px-16 w-full max-w-[1240px]">
        <div className="md:flex md:justify-between md:items-center gap-x-6 gap-y-8 grid grid-cols-2">
          <StatItem endValue={40000} suffix=" +" text={<>Pengguna <br /> Jasa</>} />
          <StatItem endValue={2000} suffix=" +" text={<>Mitra Owner <br /> Kos</>} />
          <StatItem endValue={10} suffix=" +" text={<>Tersebar di <br /> Kota Besar</>} />
          <StatItem endValue={4.8} suffix="/5" decimals={1} isRating text={<>Testimonial <br /> Customer</>} />
        </div>
      </section>

      {/* ========================= */}
      {/* MOBILE SEARCH */}
      {/* ========================= */}
      <section className="lg:hidden mt-10 px-4 md:px-6 pb-10">
        <div className={cn("flex items-center bg-white shadow-sm p-1.5 border border-[#D9E1CE] rounded-full transition-all duration-1000 ease-out", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholderText} 
            className="flex-1 bg-transparent px-5 py-3 outline-none font-semibold text-[#495C29] text-[15px] placeholder:text-[#495C29]/60" 
          />
          {/* Mobile Arrow Button */}
          <button 
            onClick={handleWhatsAppRedirect}
            className={cn("flex justify-center items-center bg-[#495C29] rounded-full w-24 h-14 text-white transition-all duration-1000 ease-out delay-[500ms]", isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10")}
          >
            <ArrowRight size={22} />
          </button>
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
    <div ref={ref} className={cn("flex items-start gap-3 md:gap-4 min-w-[150px] transition-all duration-1000 ease-out", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
      <h3 className="font-bold text-[1.65rem] text-zinc-900 md:text-[2rem] leading-none tracking-[-0.04em] whitespace-nowrap">
        {formattedCount}
        {suffix}
      </h3>

      <div className="flex flex-col justify-center">
        {isRating && <div className="flex mb-1 text-[#F3C546] text-[11px]">★★★★★</div>}
        <p className="max-w-[90px] md:max-w-[100px] font-semibold text-[12px] text-zinc-500 md:text-[14px] leading-[1.15]">{text}</p>
      </div>
    </div>
  );
}