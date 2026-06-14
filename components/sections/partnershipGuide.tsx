"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Megaphone, Handshake, Users2, Sparkles, 
  ArrowRight, MessageCircle, HelpCircle, CheckCircle2, Info
} from "lucide-react";

export default function PartnershipGuide() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const concepts = [
    {
      id: 1,
      tag: "Promotion Based",
      title: "Endorse itu apa sih? 📣",
      icon: <Megaphone size={24} />,
      quote: "“Kak, boleh endorse tempat kami?”",
      desc: "Endorse tuh kayak nitip promosi ke orang yang udah punya audience. Jadi brand kamu numpang lewat di FYP atau timeline followers mereka.",
      conclusion: "Intinya: \"Tolong promosiin aku ya!\"",
      color: "from-amber-500/10 to-transparent",
      borderColor: "hover:border-amber-500/30",
      iconBg: "bg-amber-100 text-amber-700"
    },
    {
      id: 2,
      tag: "Strategic Agreement",
      title: "Kerjasama / MoU gimana? 📜",
      icon: <Handshake size={24} />,
      quote: "Sinergi Terstruktur & Legalitas",
      desc: "Kalau endorse fokusnya cuma di promosi konten, kerja sama atau MoU (Memorandum of Understanding) biasanya cakupannya lebih luas dan jangka panjang.",
      conclusion: "Intinya: \"Yuk jadi partner & saling bantu dalam periode tertentu!\"",
      color: "from-blue-500/10 to-transparent",
      borderColor: "hover:border-blue-500/30",
      iconBg: "bg-blue-100 text-blue-700"
    },
    {
      id: 3,
      tag: "Long-term Relationship",
      title: "Mitra itu apa? 🤝",
      icon: <Users2 size={24} />,
      quote: "Beyond Just Collaboration",
      desc: "Mitra tuh bukan cuma sekali collab terus selesai, tapi udah jadi teman jalan seiring waktu buat saling dukung dan grow bareng dalam ekosistem bisnis.",
      conclusion: "Intinya: Hubungan atau status resmi sebagai partner kerja sama tetap.",
      color: "from-[#495C29]/15 to-transparent",
      borderColor: "hover:border-[#495C29]/40",
      iconBg: "bg-[#EEF3E8] text-[#495C29]"
    }
  ];

  return (
    <section className="bg-zinc-50/50 min-h-screen py-16 px-4 md:px-8">
      <div className="mx-auto w-full max-w-[1280px]">
        
        {/* ========================================================= */}
        {/* HEADER SECTION                                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EEF3E8] px-3 py-1 rounded-full text-xs font-bold text-[#495C29] mb-4 shadow-sm">
            <Sparkles size={12} />
            <span>Baboo Collab Hub</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
            Gak Kenal Maka Gak <span className="text-[#495C29]">Collab</span> 🚀
          </h1>
          <p className="text-zinc-500 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Biar kita sama-sama satu pemahaman, gak bingung, dan bebas salah paham waktu mau bikin project bareng, yuk kepoin dulu istilah-istilah di bawah ini!
          </p>
        </div>

        {/* ========================================================= */}
        {/* QUICK CHEAT SHEET (RANGKUMAN CEPAT)                       */}
        {/* ========================================================= */}
        <div className="bg-[#F3C546] rounded-3xl p-6 md:p-8 text-[#495C29] mb-10 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-white/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-black/10 pb-4">
            <div className="flex items-center gap-2">
              <Info size={16} className="text-[#495C29]" />

              <h3 className="font-bold text-xs md:text-sm uppercase tracking-wider text-[#495C29]">
                Rangkuman Instan (Biar Gak Ketuker)
              </h3>
            </div>

            <span className="text-[10px] bg-black/10 px-2.5 py-1 rounded-md text-[#495C29] font-semibold">
              💡 Tip Cepat
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#495C29] tracking-widest uppercase block">
                📢 Endorse
              </span>

              <p className="text-sm font-semibold text-zinc-800">
                “Tolong promosiin bisnis aku ya.”
              </p>
            </div>

            <div className="space-y-1 border-y md:border-y-0 md:border-x border-black/10 py-4 md:py-0 md:px-6">
              <span className="text-[10px] font-bold text-[#495C29] tracking-widest uppercase block">
                📜 Kerja Sama / MoU
              </span>

              <p className="text-sm font-semibold text-zinc-800">
                “Yuk sinergi & saling bantu dalam periode tertentu.”
              </p>
            </div>

            <div className="space-y-1 md:pl-2">
              <span className="text-[10px] font-bold text-[#495C29] tracking-widest uppercase block">
                🤝 Mitra
              </span>

              <p className="text-sm font-semibold text-zinc-800">
                Hubungan/status resmi sebagai partner jangka panjang.
              </p>
            </div>
          </div>
        </div>
        {/* ========================================================= */}
        {/* MAIN BENTO GRID PENJELASAN                                */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {concepts.map((card, idx) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={cn(
                "bg-white border border-zinc-100 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.01)] relative overflow-hidden bg-gradient-to-br",
                card.borderColor,
                hoveredCard === idx ? "shadow-[0_20px_40px_rgba(0,0,0,0.03)] -translate-y-1" : "",
                hoveredCard === idx ? card.color : ""
              )}
            >
              <div>
                {/* Tag atas */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-extrabold tracking-wider text-zinc-400 uppercase bg-zinc-50 px-2 py-1 rounded-md border border-zinc-100">
                    {card.tag}
                  </span>
                  <div className={cn("p-2 rounded-xl transition-transform", card.iconBg, hoveredCard === idx ? "scale-110" : "")}>
                    {card.icon}
                  </div>
                </div>

                {/* Judul & Deskripsi */}
                <h2 className="text-lg md:text-xl font-extrabold text-zinc-900 tracking-tight mb-3">
                  {card.title}
                </h2>
                
                {card.id === 1 && (
                  <span className="inline-block bg-amber-50 text-amber-800 border border-amber-100 rounded-xl px-3 py-1.5 font-bold text-xs italic mb-4">
                    {card.quote}
                  </span>
                )}

                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed mb-6">
                  {card.desc}
                </p>
              </div>

              {/* Kesimpulan bawah */}
              <div className="pt-4 border-t border-zinc-100 mt-auto">
                <span className="text-[10px] font-bold text-zinc-400 block mb-1 uppercase tracking-wider">Kesimpulan Pokok</span>
                <p className="text-zinc-800 font-bold text-xs md:text-sm leading-tight">
                  {card.conclusion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* FULL WIDTH CARD: KOLABORASI & EVENT                       */}
        {/* ========================================================= */}
        <div className="bg-white border border-zinc-100 rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.01)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-[#495C29] bg-[#EEF3E8] font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              <Sparkles size={12} />
              <span>Event & Project Invitation</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 tracking-tight leading-none">
              Punya Event, Project, atau Ide Seru? 🎉
            </h2>
            
            <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-2xl">
              Kami terbuka lebar untuk berbagai macam bentuk kolaborasi kreatif yang menguntungkan kedua belah pihak. Mulai dari urusan media partner, pengajuan sponsorship, strategi promosi properti komersial, hingga kolaborasi event seru bareng kampus kamu!
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2">
              {["Media Partner", "Sponsorship", "Promosi Properti", "Kolaborasi Event Kampus"].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-zinc-700 text-xs font-semibold">
                  <CheckCircle2 size={14} className="text-[#495C29]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#495C29] to-[#597034] rounded-2xl p-6 text-white text-center lg:text-left flex flex-col justify-between h-full min-h-[180px]">
            <div>
              <h4 className="font-bold text-sm mb-1">Let&apos;s Build Something Epic!</h4>
              <p className="text-white/80 text-[11px] leading-relaxed mb-6">
                Hubungi kami melalui Direct Message (DM) Instagram atau kontak resmi marketing yang tertera di bio. Siapa tahu kita bisa bikin terobosan keren bareng-bareng!
              </p>
            </div>
            
            <a 
              href="https://wa.me/6287785338441"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 text-[#495C29] font-extrabold text-xs px-5 py-3.5 rounded-xl transition-all shadow-md active:scale-95 w-full lg:w-auto self-start"
            >
              <span>Ajukan Kolaborasi Sekarang</span>
              <ArrowRight size={14} />
            </a>
          </div>

        </div>

        {/* FOOTER NOTE */}
        <div className="text-center mt-12 text-zinc-400 text-[10px] flex items-center justify-center gap-1.5">
          <HelpCircle size={12} />
          <span>Butuh berkas administrasi formal? Silakan hubungi tim HRD/Legal Baboo Kos.</span>
        </div>

      </div>
    </section>
  );
}