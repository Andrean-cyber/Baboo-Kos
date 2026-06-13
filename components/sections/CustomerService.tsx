"use client";

import { 
  MessageSquare, Globe, Mail, Phone, ShieldCheck, 
  Sparkles, ArrowUpRight, Headphones
} from "lucide-react";

// Struktur data kontak agar modular dan mudah dimaintain jika ada perubahan nomor/link
const digitalChannels = [
  {
    title: "Official Website",
    value: "www.babookos.com",
    desc: "Portal pencarian & eksplorasi unit terverifikasi secara transparan.",
    link: "https://www.babookos.com",
    icon: <Globe size={18} />,
  },
  {
    title: "Email Support",
    value: "babookos@gmail.com",
    desc: "Saluran resmi pengajuan penghapusan data, kendala teknis akun, dan S&K.",
    link: "mailto:babookos@gmail.com",
    icon: <Mail size={18} />,
  }
];

const whatsappChannels = [
  {
    title: "Baboo Kos Line",
    phone: "+62 877-8533-8441",
    desc: "Layanan jasa pencarian kos seluruh Indonesia.",
    link: "https://wa.me/6287785338441",
  },
  {
    title: "Baboo Villa Line",
    phone: "+62 858-5223-7843",
    desc: "Layanan reservasi properti villa, staycation harian, promo bundling, & paket sewa grup.",
    link: "https://wa.me/6285852237843",
  },
  {
    title: "Marketing Baboo Kos",
    phone: "+62 851-7847-6086",
    desc: "Urusan kolaborasi bisnis, pendaftaran mitra pemilik properti kos, iklan, & partnership.",
    link: "https://wa.me/6285178476086",
  },
  {
    title: "HRD Team Line",
    phone: "+62 851-1120-3894",
    desc: "Informasi rekrutmen tim internal, lowongan kerja aktif, magang, & administrasi karier.",
    link: "https://wa.me/6285111203894",
  }
];

export default function CustomerService() {
  return (
    <section className="bg-zinc-50/60 min-h-screen antialiased selection:bg-[#EEF3E8] selection:text-[#495C29]">
      {/* HEADER HERO BANNER */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#EEF3E8] to-transparent pt-40 pb-12 text-center px-4">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(#495C29_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white border border-[#495C29]/20 px-3 py-1 rounded-full text-[11px] font-bold text-[#495C29] mb-4 shadow-sm">
            <Headphones size={12} />
            <span>CUSTOMER CARE — SUPPORT CENTER BABOO KOS</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4 leading-tight">
            Hubungi Tim Baboo Kos<br />
            <span className="text-[#495C29]">(Ngobrol atau Tanya-Tanya) 💬</span>
          </h1>
          <p className="text-zinc-600 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed px-2 mt-4">
            Ada yang masih bikin kamu bingung atau overthinking? Mau komplain kendala teknis, tanya ketersediaan unit, atau butuh panduan sewa aman? Tenang, tim Baboo Kos ready buat dengerin dan bantu kamu sat-set tanpa ribet! Colek tim kita di bawah ini ya:
          </p>
        </div>
      </div>

      {/* CORE WRAPPER CONTENT */}
      <div className="mx-auto px-4 md:px-8 pb-24 w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
        
        {/* LEFT SIDE: KANAL UTAMA DIGITAL */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)]">
            <h3 className="font-bold text-[#495C29] text-[11px] mb-6 uppercase tracking-wider flex items-center gap-2">
              <Sparkles size={14} /> Kanal Utama Digital
            </h3>
            
            <div className="space-y-4">
              {digitalChannels.map((channel, idx) => (
                <a 
                  key={idx}
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-[#EEF3E8]/30 hover:border-[#495C29]/20 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#EEF3E8] text-[#495C29] shrink-0">
                        {channel.icon}
                      </div>
                      <span className="font-extrabold text-zinc-800 text-xs md:text-sm">
                        {channel.title}
                      </span>
                    </div>
                    <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-[#495C29] transition-colors" />
                  </div>
                  <p className="text-[#495C29] font-bold text-xs pl-11 mb-1 break-all">
                    {channel.value}
                  </p>
                  <p className="text-zinc-500 text-[11px] pl-11 leading-relaxed">
                    {channel.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: WHATSAPP CUSTOMER LINE */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)]">
            <h3 className="font-bold text-[#495C29] text-[11px] mb-6 uppercase tracking-wider flex items-center gap-2">
              <MessageSquare size={14} /> Whatsapp Customer Line
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whatsappChannels.map((ws, idx) => (
                <a
                  key={idx}
                  href={ws.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-5 rounded-2xl border border-zinc-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(73,92,41,0.04)] hover:border-[#495C29]/20 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-extrabold text-zinc-900 text-xs tracking-tight">
                        {ws.title}
                      </span>
                      <div className="p-1.5 rounded-lg bg-zinc-50 group-hover:bg-[#EEF3E8] text-zinc-400 group-hover:text-[#495C29] transition-colors">
                        <Phone size={12} />
                      </div>
                    </div>
                    <p className="text-zinc-500 text-[11px] leading-relaxed mb-4">
                      {ws.desc}
                    </p>
                  </div>
                  <div className="text-[#495C29] font-bold text-xs pt-3 border-t border-zinc-100/80 flex items-center justify-between">
                    <span>{ws.phone}</span>
                    <span className="text-[10px] font-medium opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#495C29]">
                      Chat Now →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* PROTEKSI SECURITY BANNER */}
          <div className="bg-gradient-to-r from-[#495C29] to-[#5a7035] rounded-3xl p-6 md:p-8 text-white shadow-md relative overflow-hidden group transition-all duration-300 hover:shadow-lg">
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-10 translate-y-10 pointer-events-none group-hover:scale-105 transition-transform duration-500">
              <ShieldCheck size={200} />
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-3">
                <ShieldCheck size={12} /> Proteksi & Keamanan Pengguna
              </span>
              <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-4">
                Demi menjaga privasi dan keamanan finansial kamu, tim Baboo Kos tidak pernah meminta kredensial akun rahasia seperti <span className="underline decoration-white/40 underline-offset-2 font-medium">password, OTP, atau PIN perbankan</span>.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-xs leading-relaxed">
                🎯 Pastikan segala bentuk transaksi keuangan hanya dilakukan melalui nomor rekening resmi platform yang tertera saat check-out di sistem website utama kami.
              </div>
              
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-2 border-t border-white/10 text-[11px] text-white/70">
                <span>Baboo Kos — Panduan & Direktori Resmi Layanan Pelanggan</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}