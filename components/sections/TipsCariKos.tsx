"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Coins, CameraOff, Search, EyeOff, MapPin, Sparkles, ChevronRight, BookOpen, Clock } from "lucide-react";

// Struktur data panduan agar kode bersih, modular, dan mudah dikelola
const tipsSections = [
  {
    id: "lock-budget",
    title: "1. Lock Budget dari Awal (No FOMO!)",
    shortTitle: "Lock Budget",
    icon: <Coins size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">Jangan gampang tergiur sama kosan estetik kalau ternyata harganya bikin dompet menangis di akhir bulan.</p>
        <div className="p-4 bg-[#EEF3E8]/40 border border-[#495C29]/10 rounded-xl">
          <strong className="text-zinc-800 text-xs block mb-1">💡 Caranya:</strong>
          <p className="text-zinc-600 text-xs leading-relaxed">
            Tentukan nominal maksimal yang sanggup dibayar per bulan. Ingat prinsip utama Baboo Kos: setiap orang berhak dapet tempat tinggal yang nyaman dan fungsional tanpa harus mengorbankan rencana finansial pribadi.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "cek-realita",
    title: "2. Jangan Cuma Percaya Foto Estetik, Cek Realitanya",
    shortTitle: "Cek Realita Foto",
    icon: <CameraOff size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
          Banyak kosan yang kelihatan luas karena difoto pakai lensa <span className="italic font-medium text-zinc-700">wide-angle</span>, tapi aslinya sempit dan pengap.
        </p>
        <div className="p-4 bg-[#EEF3E8]/40 border border-[#495C29]/10 rounded-xl">
          <strong className="text-zinc-800 text-xs block mb-1">📹 Caranya:</strong>
          <p className="text-zinc-600 text-xs leading-relaxed">
            Cari platform atau media sosial yang berani ngasih <span className="italic font-medium text-zinc-700">room tour</span> jujur berbasis video pendek (<span className="italic font-medium text-zinc-700">short-form content</span>).
            Video yang diambil langsung di lokasi (<span className="italic font-medium text-zinc-700">footage gathering</span>) jauh lebih transparan dan meminimalkan risiko kena zonk pas datang langsung.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "bedah-spesifikasi",
    title: '3. Bedah "The Breakdown" Spek Kamar Secara Detail',
    shortTitle: "Bedah Spesifikasi",
    icon: <Search size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">Sebelum menyelesaikan proses booking, pastikan semua isi di dalam kamar dan area komunal sudah jelas.</p>
        <div className="p-4 bg-[#EEF3E8]/40 border border-[#495C29]/10 rounded-xl">
          <strong className="text-zinc-800 text-xs block mb-1">🔍 Caranya:</strong>
          <p className="text-zinc-600 text-xs leading-relaxed">
            Cek spesifikasi fisik unit secara mendetail. Apakah kamar mandinya di dalam atau luar? Ada fasilitas dapur bersama atau tidak? Berapa luas bangunannya? Jangan sampai ada fasilitas krusial yang terlewat hanya karena terburu-buru.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "biaya-tersembunyi",
    title: "4. Spill & Teliti Biaya Tersembunyi (No Gatekeeping)",
    shortTitle: "Biaya Tersembunyi",
    icon: <EyeOff size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">Kadang harga sewa kos kelihatan murah di awal, tapi ternyata belum mencakup banyak hal penting.</p>
        <div className="p-4 bg-[#EEF3E8]/40 border border-[#495C29]/10 rounded-xl">
          <strong className="text-zinc-800 text-xs block mb-1">🔌 Caranya:</strong>
          <p className="text-zinc-600 text-xs leading-relaxed">
            Tanyakan secara terbuka sejak awal apakah harga sewa sudah termasuk token listrik, biaya air, iuran kebersihan/keamanan, atau biaya Wi-Fi. Kosan dengan sistem harga yang jujur dan transparan dari awal adalah tanda bahwa
            pengelolaannya profesional.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "hitung-jarak",
    title: "5. Hitung Jarak Jangkauan (Ongkos vs Harga Kos)",
    shortTitle: "Hitung Jarak & Ongkos",
    icon: <MapPin size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">Kosan yang letaknya agak jauh dari kampus atau kantor biasanya punya harga sewa yang lebih miring. Tapi, apakah benar-benar hemat?</p>
        <div className="p-4 bg-[#EEF3E8]/40 border border-[#495C29]/10 rounded-xl">
          <strong className="text-zinc-800 text-xs block mb-1">📍 Caranya:</strong>
          <p className="text-zinc-600 text-xs leading-relaxed">
            Selalu kombinasikan harga kos dengan estimasi ongkos transportasi harian. Kalau harga kosnya murah tapi ongkos transportasinya mahal (ditambah habis waktu di jalan), mending pilih kosan yang sedikit lebih tinggi harganya tapi
            lokasinya strategis.
          </p>
        </div>
      </div>
    ),
  },
];

export default function TipsCariKos() {
  const [activeSection, setActiveSection] = useState(tipsSections[0].id);

  // Efek Scroll-spy untuk melacak posisi bacaan aktif
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of tipsSections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-zinc-50/60 min-h-screen antialiased selection:bg-[#EEF3E8] selection:text-[#495C29]">
      {/* HEADER HERO BANNER */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#EEF3E8] to-transparent pt-40 pb-12 text-center px-4">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(#495C29_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white border border-[#495C29]/20 px-3 py-1 rounded-full text-[11px] font-bold text-[#495C29] mb-4 shadow-sm">
            <BookOpen size={12} />
            <span>EDISI PANDUAN RESMI — RESOURCES BABOO KOS</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4 leading-tight">
            Tips Cari Kos Anti-Zonk:
            <br />
            <span className="text-[#495C29]">Sat-Set Dapat Tempat Ideal Tanpa Drama 🚀</span>
          </h1>
          <p className="text-zinc-600 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed px-2 mt-4">
            Cari kosan baru sering kali jadi momen yang bikin overthinking. Dari takut dapet foto yang "ekspektasi vs realita"-nya jauh banget, sampai takut boncos di ongkos. Biar proses cari tempat tinggal baru berjalan mulus dan minim
            drama, ini contekan strategi cari kos ala <strong className="text-[#495C29]">Baboo Kos</strong> yang wajib diikuti:
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-zinc-400 text-[11px]">
            <Clock size={12} />
            <span>Baboo Kos — Panduan Cari Kos Anti-Zonk</span>
          </div>
        </div>
      </div>

      {/* CORE WRAPPER CONTENT */}
      <div className="mx-auto px-4 md:px-8 pb-24 w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
        {/* LEFT SIDE: STICKY DESKTOP NAVIGATION */}
        <div className="hidden lg:block lg:col-span-4 sticky top-24 self-start bg-white p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.015)] border border-zinc-100/80">
          <h3 className="font-bold text-zinc-400 text-[11px] mb-4 px-2 uppercase tracking-wider">Strategi Panduan</h3>
          <div className="flex flex-col gap-1">
            {tipsSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left text-xs font-semibold tracking-wide transition-all group",
                  activeSection === section.id ? "bg-[#EEF3E8] text-[#495C29] shadow-sm" : "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50",
                )}
              >
                <div className={cn("p-1.5 rounded-lg shrink-0 transition-colors", activeSection === section.id ? "bg-[#495C29] text-white" : "bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200")}>{section.icon}</div>
                <span className="truncate flex-1">{section.shortTitle}</span>
                <ChevronRight size={14} className={cn("opacity-0 transition-all -translate-x-1", activeSection === section.id && "opacity-100 translate-x-0 text-[#495C29]")} />
              </button>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-zinc-100 px-2 text-[11px] text-zinc-400 leading-relaxed">Ikuti 5 tips di atas agar pengalaman mencari kos kamu nyaman, transparan, dan sesuai dengan target finansialmu.</div>
        </div>

        {/* RIGHT SIDE: CONTENT CARDS */}
        <div className="lg:col-span-8 space-y-6">
          {tipsSections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className={cn(
                "bg-white p-6 md:p-8 rounded-3xl border transition-all duration-300 scroll-mt-20",
                activeSection === section.id ? "shadow-[0_20px_40px_rgba(73,92,41,0.03)] border-[#495C29]/20" : "shadow-[0_8px_30px_rgb(0,0,0,0.01)] border-zinc-100",
              )}
            >
              <div className="flex items-center gap-3.5 pb-4 mb-5 border-b border-zinc-100">
                <div className="text-[#495C29] bg-[#EEF3E8] p-2.5 rounded-xl shrink-0">{section.icon}</div>
                <h2 className="font-extrabold text-zinc-900 text-base md:text-lg tracking-tight">{section.title}</h2>
              </div>

              {/* Isi konten dari tiap section */}
              {section.content}
            </div>
          ))}

          {/* THE ULTIMATE HACK: BABOO KOS CTA CARD */}
          <div className="bg-gradient-to-r from-[#495C29] to-[#5a7035] rounded-3xl p-6 md:p-8 text-white shadow-md relative overflow-hidden group transition-all duration-300 hover:shadow-lg">
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-10 translate-y-10 pointer-events-none group-hover:scale-105 transition-transform duration-500">
              <Sparkles size={200} />
            </div>

            <div className="relative z-10 max-w-xl">
              <span className="inline-block bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-3">💡 The Ultimate Hack</span>
              <h3 className="font-extrabold text-xl md:text-2xl mb-3 flex items-center gap-2">Cari via Baboo Kos Aja!</h3>
              <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-6">
                Daripada pusing keliling kota panas-panasan atau lelah <span className="italic font-medium text-white/90">scrolling</span> di grup pencarian yang infonya simpang siur, serahkan semuanya ke <strong>Baboo Kos</strong>. Kami
                memotong semua proses lama yang bertele-tele biar pencarian hunian jadi lebih praktis, transparan, dan pastinya pas dengan rencana finansial.
              </p>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 mb-6 text-xs leading-relaxed">
                🎯 Tinggal pilih lokasi, tonton video riilnya, dan amankan kamarnya se-praktis itu. <strong>Happy hunting! 🙌</strong>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10 text-[11px] text-white/70">
                <span>Baboo Kos — Panduan Cari Kos Anti-Zonk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
