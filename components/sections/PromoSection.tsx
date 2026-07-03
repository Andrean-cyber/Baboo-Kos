"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, Tag, CheckCircle, ArrowRight, Zap, Gift, CalendarClock } from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

// =======================
// DATA PROMO
// =======================
const promos = [
  {
    id: 1,
    badge: "Bundle Package",
    discount: "10%",
    // Badge bonus terpisah — dipasang seperti "stiker tambahan" di samping angka diskon utama
    bonusBadge: {
      label: "Diskon Juni",
      value: "+10%",
      color: "#F3C546",
      textColor: "#3D2A00",
    },
    title: "Paket A",
    description: "Hemat lebih banyak dengan paket bundling terbaik kami!",
    features: [
      { icon: <FaTiktok size={13} />, label: "TikTok (Reels / Feeds)" },
      { icon: <FaInstagram size={13} />, label: "Instagram (Reels / Feeds)" },
      { icon: <CheckCircle size={13} />, label: "Diskon 10% dari total harga" },
      { icon: <CalendarClock size={13} />, label: "Extra 10% khusus bulan Juni" },
    ],
    color: "from-[#495C29] to-[#6B8A3A]",
    accentColor: "bg-[#D4E6A5]",
    accentText: "text-[#2D3E15]",
    tag: "Promo Aktif",
  },
];

// Duplikat untuk marquee infinite (isi bisa ditambah nanti)
const marqueeItems = [
  { label: "Bundle Package", icon: <Tag size={14} /> },
  { label: "Hemat 10%", icon: <Sparkles size={14} /> },
  { label: "+10% Diskon Juni", icon: <Gift size={14} /> },
  { label: "TikTok + Instagram", icon: <Zap size={14} /> },
  { label: "Paket A Tersedia", icon: <Gift size={14} /> },
  { label: "Promo Aktif Sekarang", icon: <CheckCircle size={14} /> },
  { label: "Bundle Package", icon: <Tag size={14} /> },
  { label: "Hemat 10%", icon: <Sparkles size={14} /> },
  { label: "+10% Diskon Juni", icon: <Gift size={14} /> },
  { label: "TikTok + Instagram", icon: <Zap size={14} /> },
  { label: "Paket A Tersedia", icon: <Gift size={14} /> },
  { label: "Promo Aktif Sekarang", icon: <CheckCircle size={14} /> },
];

// =======================
// MARQUEE STRIP COMPONENT
// =======================
function MarqueeStrip() {
  return (
    <div className="relative w-full overflow-hidden bg-[#495C29] py-3 select-none">
      {/* Fade kiri */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#495C29] to-transparent z-10 pointer-events-none" />
      {/* Fade kanan */}
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#495C29] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {/* Render 4x untuk smooth loop tanpa jeda */}
        {[...Array(4)].map((_, dupIdx) => (
          <div key={dupIdx} className="flex items-center">
            {marqueeItems.map((item, i) => (
              <div
                key={`${dupIdx}-${i}`}
                className="flex items-center gap-2 px-6 text-white/90 text-xs font-semibold whitespace-nowrap"
              >
                <span className="text-[#D4E6A5]">{item.icon}</span>
                {item.label}
                <span className="mx-2 text-white/30">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// =======================
// PROMO CARD COMPONENT
// =======================
function PromoCard({ promo }: { promo: (typeof promos)[0] }) {
  return (
    <div className="relative flex flex-col md:flex-row items-stretch bg-white border border-zinc-200 rounded-[1.75rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-[720px]">
      {/* Sisi kiri — gradient */}
      <div
        className={cn(
          "relative flex flex-col justify-between p-7 md:p-8 bg-gradient-to-br",
          promo.color,
          "md:w-[260px] shrink-0",
        )}
      >
        {/* Badge utama */}
        <div>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold",
              promo.accentColor,
              promo.accentText,
            )}
          >
            <Sparkles size={10} />
            {promo.badge}
          </span>

          <div className="mt-5 flex items-start gap-3">
            <div>
              <p className="text-white/70 text-[10px] font-semibold uppercase tracking-widest mb-1">Hemat hingga</p>
              <p className="text-white font-black text-6xl leading-none">{promo.discount}</p>
            </div>

            {/* Stiker bonus diskon Juni — ditempel miring di samping angka utama */}
            {promo.bonusBadge && (
              <div
                className="relative mt-1 flex flex-col items-center justify-center rounded-xl px-2.5 py-1.5 shadow-[0_4px_10px_rgba(0,0,0,0.25)] rotate-[-7deg] animate-[wiggle_4s_ease-in-out_infinite]"
                style={{ backgroundColor: promo.bonusBadge.color, color: promo.bonusBadge.textColor }}
              >
                <span className="text-sm font-black leading-none">{promo.bonusBadge.value}</span>
                <span className="text-[8px] font-bold uppercase tracking-wide leading-none mt-0.5 whitespace-nowrap">
                  {promo.bonusBadge.label}
                </span>
                {/* Notch kecil ala label harga, memperkuat kesan "stiker tempel" */}
                <span
                  className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"
                  style={{ boxShadow: `0 0 0 2px ${promo.bonusBadge.color}` }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Tag bawah */}
        <div className="mt-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D4E6A5] animate-pulse" />
          <span className="text-white/80 text-[10px] font-semibold">{promo.tag}</span>
        </div>
      </div>

      {/* Sisi kanan — detail */}
      <div className="flex flex-col justify-between p-7 md:p-8 flex-1">
        <div>
          <h3 className="font-bold text-zinc-900 text-xl mb-1">{promo.title}</h3>
          <p className="text-zinc-500 text-xs mb-5 leading-relaxed">{promo.description}</p>

          <ul className="flex flex-col gap-2.5">
            {promo.features.map((f, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#F0F6E4] text-[#495C29] shrink-0">
                  {f.icon}
                </span>
                <span className="text-zinc-700 text-xs font-medium">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#contact"
          className="mt-7 flex items-center justify-center gap-2 bg-[#495C29] hover:bg-[#3a4a20] text-white text-xs font-bold py-3 rounded-xl transition-colors duration-200"
        >
          Dapatkan Promo <ArrowRight size={13} />
        </a>
      </div>

      {/* Ornamen sudut kanan atas */}
      <div className="absolute top-0 right-0 w-28 h-28 rounded-bl-full bg-[#F0F6E4]/30 pointer-events-none" />
    </div>
  );
}

// =======================
// MAIN SECTION
// =======================
export default function PromoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full overflow-hidden">

      {/* ── Konten utama ── */}
      <div className="flex flex-col items-center mx-auto px-4 md:px-8 py-16 md:py-24 w-full max-w-[1280px]">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h3
            className={cn(
              "mb-2 font-bold text-[#495C29] text-sm md:text-base transition-all duration-700 ease-out",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            Promo & Event
          </h3>

          <h2
            className={cn(
              "mb-4 font-bold text-slate-900 text-3xl md:text-5xl tracking-tight transition-all duration-700 ease-out delay-150",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            Penawaran Spesial
          </h2>

          <p
            className={cn(
              "font-medium text-zinc-500 text-sm md:text-base transition-all duration-700 max-w-[1280px] ease-out delay-300",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            Promo terbatas! Gabungkan layanan kami dan hemat lebih banyak sekarang juga.
          </p>
        </div>

        {/* Promo Cards */}
        <div
          className={cn(
            "flex flex-col items-center gap-6 w-full transition-all duration-700 ease-out delay-500",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          {promos.map((promo) => (
            <PromoCard key={promo.id} promo={promo} />
          ))}
        </div>
      </div>

      {/* ── Marquee Strip bawah (arah sama) ── */}
      <MarqueeStrip />
    </section>
  );
}

/*
  Tambahkan keyframe berikut ke globals.css (sekali saja, di luar komponen):

  @keyframes wiggle {
    0%, 100% { transform: rotate(-7deg); }
    50% { transform: rotate(-3deg); }
  }
*/
