"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Sparkles, ChevronRight, Clock, ShieldAlert,
  CheckCircle2, FileText, ListChecks, Search,
  CreditCard, AlertTriangle, Shield
} from "lucide-react";

const panduanSections = [
  {
    id: "alur-sewa-resmi",
    title: "Bagian 1: Alur Sewa Resmi & Terverifikasi (The Safe Flow)",
    shortTitle: "Alur Sewa Resmi",
    icon: <CheckCircle2 size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
          Biar transaksi kamu 100% aman dan terhindar dari oknum tidak bertanggung jawab, selalu pastikan proses sewa kamu melewati tahapan standarisasi berikut:
        </p>

        <div className="flex flex-col gap-3">
          {[
            {
              num: "1",
              title: "Eksplorasi Unit Secara Objektif",
              desc: "Pelajari seluruh spesifikasi fisik properti secara detail di platform terpercaya — mulai dari luas bangunan, fasilitas kamar, opsi kamar mandi, hingga ketersediaan area komunal. Jangan hanya terpaku pada satu foto estetis tanpa kejelasan breakdown fasilitas.",
            },
            {
              num: "2",
              title: "Validasi Keaslian Lewat Konten Video",
              desc: "Pastikan kamu melihat dokumentasi visual riil berupa room tour berbasis video pendek. Video dokumentasi langsung dari lokasi jauh lebih sulit dimanipulasi dibandingkan dengan foto komersial yang beredar di internet.",
            },
            {
              num: "3",
              title: "Cek Ketersediaan & Penawaran Resmi",
              desc: "Lakukan konfirmasi ketersediaan unit dan pengajuan promosi secara langsung melalui sistem form atau kontak resmi yang terintegrasi di website. Hindari bertukar pesan atau bertransaksi dengan nomor personal asing yang tidak terdaftar di platform utama.",
            },
            {
              num: "4",
              title: "Transaksi Menggunakan Rekening Resmi",
              desc: "Segala bentuk pembayaran, baik uang muka (DP) maupun pelunasan, wajib disalurkan melalui rekening korporat atau sistem payment resmi platform. Jangan pernah mentransfer dana ke rekening pribadi atas nama perorangan yang mengklaim dirinya sebagai perantara tak resmi.",
            },
          ].map((step) => (
            <div key={step.num} className="flex gap-3 items-start p-4 bg-zinc-50 rounded-xl border border-zinc-100 hover:border-zinc-200/80 transition-colors">
              <div className="flex justify-center items-center bg-[#495C29] text-white rounded-lg w-6 h-6 text-[11px] font-extrabold shrink-0 mt-0.5">
                {step.num}
              </div>
              <div>
                <strong className="text-zinc-800 text-xs block mb-0.5">{step.title}</strong>
                <p className="text-zinc-600 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "modus-penipuan",
    title: "Bagian 2: Bedah Modus Penipuan Properti (Scam Breakdowns)",
    shortTitle: "Modus Penipuan",
    icon: <AlertTriangle size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
          Penipu kos zaman sekarang makin cerdik dan sering memanfaatkan psikologis pencari kos yang sedang terburu-buru atau tergiur harga murah. Berikut anatomi modus penipuan yang paling sering terjadi di lapangan — wajib kamu waspadai:
        </p>

        <div className="flex flex-col gap-3">
          {[
            {
              emoji: "🚨",
              title: 'Modus 1: Trik DP Instan demi "Nomor Kwitansi"',
              cara: 'Pelaku akan mendesak kamu untuk segera mentransfer sejumlah uang sebagai Uang Muka (DP) dengan alasan unit sangat terbatas dan banyak yang mengantre. Mereka sering kali menggunakan dalih: "Harus transfer DP sekarang kak, supaya sistem kami bisa menerbitkan nomor kwitansi resmi/nomor booking."',
              fakta: "Ini murni tekanan psikologis. Platform atau pengelola profesional tidak akan pernah menerbitkan kuitansi valid dari uang yang ditransfer ke rekening pribadi tanpa adanya kejelasan kontrak atau verifikasi unit terlebih dahulu. Jika dipaksa transfer sebelum survei atau sebelum validasi sistem, itu 100% scam.",
            },
            {
              emoji: "🚨",
              title: "Modus 2: Pencurian Konten & Kloning Identitas Kos",
              cara: "Penipu mengunduh video room tour, footage original, atau foto estetis milik platform terpercaya (seperti konten resmi Instagram/TikTok Baboo Kos). Konten curian tersebut kemudian diunggah ulang di media sosial pribadi mereka, Facebook Marketplace, atau grup pencarian alternatif dengan menurunkan harga sewa secara tidak logis.",
              fakta: "Pelaku bertindak seolah-olah sebagai pemilik langsung atau agen resmi. Selalu lakukan cross-check: pastikan akun yang mengunggah video memiliki reputasi resmi, tautan website yang valid, dan watermark yang konsisten. Jangan gampang tergiur harga murah di luar platform resmi.",
            },
            {
              emoji: "🚨",
              title: 'Modus 3: Alasan Klasik "Pemilik di Luar Kota atau Sibuk"',
              cara: "Saat kamu meminta untuk melihat kondisi kamar atau melakukan survei langsung ke lokasi, pelaku akan mengeluarkan serangkaian alasan — dari sedang dinas di luar kota, sibuk mengurus keluarga di rumah sakit, hingga mengaku sebagai orang tua yang kurang paham teknologi. Ujungnya, mereka meminta kamu langsung melakukan pelunasan.",
              fakta: "Pengelola atau pemilik kos yang sah pasti memiliki representasi di lokasi — baik penjaga kos, pengelola lingkungan, maupun perwakilan platform resmi yang siap menemani survei fisik atau memberikan live video call secara transparan.",
            },
            {
              emoji: "🚨",
              title: "Modus 4: Phishing & Formulir Identitas Palsu",
              cara: "Sebelum proses sewa dimulai, pelaku mengirimkan tautan (link) tidak resmi yang sekilas mirip dengan form booking platform digital. Di sana, kamu diminta mengisi data sensitif hingga informasi perbankan dengan alasan verifikasi data awal penyewa.",
              fakta: "Selalu periksa domain URL yang tertera di browser kamu. Pastikan pengisian formulir hanya terjadi di domain resmi platform utama. Pengumpulan data dari Baboo Kos dilakukan secara transparan dan aman tanpa meminta informasi kredensial yang bersifat rahasia.",
            },
          ].map((modus, i) => (
            <div key={i} className="p-4 bg-red-50/40 border border-red-100/80 rounded-xl space-y-2">
              <div className="flex items-center gap-2">
                <ShieldAlert size={14} className="text-red-500 shrink-0" />
                <strong className="text-zinc-800 text-xs">{modus.title}</strong>
              </div>
              <div className="pl-5 space-y-2">
                <div>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-0.5">Cara Kerja</span>
                  <p className="text-zinc-600 text-xs leading-relaxed">{modus.cara}</p>
                </div>
                <div className="p-3 bg-[#EEF3E8]/60 border-l-2 border-[#495C29] rounded-r-xl">
                  <span className="text-[10px] font-bold text-[#495C29] uppercase tracking-wider block mb-0.5">Faktanya</span>
                  <p className="text-zinc-700 text-xs leading-relaxed">{modus.fakta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "checklist-keamanan",
    title: "Bagian 3: Checklist Keamanan Sebelum Transaksi (The Golden Rules)",
    shortTitle: "Checklist Keamanan",
    icon: <ListChecks size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
          Sebelum kamu menekan tombol kirim atau mentransfer dana sepeser pun untuk hunian barumu, pastikan kamu mencentang semua daftar periksa berikut demi keamanan finansialmu:
        </p>

        <div className="flex flex-col gap-3">
          {[
            {
              icon: <Search size={13} />,
              title: "Logika Harga",
              desc: "Apakah harga sewa yang ditawarkan masuk akal dengan fasilitas yang dijanjikan? Jika terlalu murah dibanding pasaran sekitar, tingkatkan kewaspadaanmu.",
            },
            {
              icon: <CreditCard size={13} />,
              title: "Verifikasi Rekening",
              desc: "Apakah nama pemilik rekening tujuan transfer sesuai dengan nama perusahaan platform atau nama pemilik sah di dokumen kontrak? Tolak transfer jika nama rekening terus berubah-ubah.",
            },
            {
              icon: <Shield size={13} />,
              title: "Konfirmasi Media Sosial",
              desc: "Periksa apakah nomor WhatsApp atau akun media sosial pengiklan pernah dilaporkan sebagai penipu melalui platform pelacak nomor tepercaya.",
            },
            {
              icon: <FileText size={13} />,
              title: "Transparansi Biaya",
              desc: "Pastikan tidak ada komponen biaya siluman yang mendadak muncul setelah uang muka ditransfer. Semua spek biaya harus tertulis jelas di awal.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start p-4 bg-[#EEF3E8]/40 border border-[#495C29]/10 rounded-xl">
              <div className="flex justify-center items-center bg-[#495C29] text-white rounded-lg w-6 h-6 shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div>
                <strong className="text-zinc-800 text-xs block mb-0.5">{item.title}</strong>
                <p className="text-zinc-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function PanduanSewaAman() {
  const [activeSection, setActiveSection] = useState(panduanSections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of panduanSections) {
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
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-zinc-50/60 min-h-screen antialiased selection:bg-[#EEF3E8] selection:text-[#495C29]">
      {/* HERO BANNER */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#EEF3E8] to-transparent pt-40 pb-12 text-center px-4">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(#495C29_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white border border-[#495C29]/20 px-3 py-1 rounded-full text-[11px] font-bold text-[#495C29] mb-4 shadow-sm">
            <FileText size={12} />
            <span>EDISI PROTEKSI PENGGUNA — RESOURCES BABOO KOS</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4 leading-tight">
            Panduan Sewa Aman Transparan:
            <span className="text-[#495C29] block md:inline"> Bebas Overthinking & Kebal Modus Scamming 🛡️</span>
          </h1>

          <p className="text-zinc-600 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed px-2 mt-4">
            Mendapatkan hunian yang ideal dan nyaman seharusnya menjadi momen yang menyenangkan, bukan malah memicu stres akibat takut tertipu. Di <strong className="text-[#495C29]">Baboo Kos</strong>, kami memegang teguh prinsip keterbukaan mutlak demi kenyamanan bersama. Panduan ini disusun untuk membekali kamu dengan pemahaman mendalam mengenai alur sewa yang valid serta cara mendeteksi sekaligus menghindari berbagai modus penipuan properti yang kian marak di luar sana.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-zinc-400 text-[11px]">
            <Clock size={12} />
            <span>Baboo Kos — Panduan Sewa Aman & Bebas Scam</span>
          </div>
        </div>
      </div>

      {/* CORE CONTENT */}
      <div className="mx-auto px-4 md:px-8 pb-24 w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">

        {/* LEFT: STICKY NAV */}
        <div className="hidden lg:block lg:col-span-4 sticky top-24 self-start bg-white p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.015)] border border-zinc-100/80">
          <h3 className="font-bold text-zinc-400 text-[11px] mb-4 px-2 uppercase tracking-wider">Modul Panduan</h3>
          <div className="flex flex-col gap-1">
            {panduanSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left text-xs font-semibold tracking-wide transition-all group",
                  activeSection === section.id
                    ? "bg-[#EEF3E8] text-[#495C29] shadow-sm"
                    : "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50",
                )}
              >
                <div className={cn(
                  "p-1.5 rounded-lg shrink-0 transition-colors",
                  activeSection === section.id ? "bg-[#495C29] text-white" : "bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200",
                )}>
                  {section.icon}
                </div>
                <span className="truncate flex-1">{section.shortTitle}</span>
                <ChevronRight size={14} className={cn("opacity-0 transition-all -translate-x-1", activeSection === section.id && "opacity-100 translate-x-0 text-[#495C29]")} />
              </button>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-zinc-100 px-2 text-[11px] text-zinc-400 leading-relaxed">
            Gunakan panduan ini untuk memahami alur sewa resmi, mengenali modus penipuan, dan memastikan setiap transaksi berjalan aman.
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="lg:col-span-8 space-y-6">
          {panduanSections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className={cn(
                "bg-white p-6 md:p-8 rounded-3xl border transition-all duration-300 scroll-mt-20",
                activeSection === section.id
                  ? "shadow-[0_20px_40px_rgba(73,92,41,0.03)] border-[#495C29]/20"
                  : "shadow-[0_8px_30px_rgb(0,0,0,0.01)] border-zinc-100",
              )}
            >
              <div className="flex items-center gap-3.5 pb-4 mb-5 border-b border-zinc-100">
                <div className="text-[#495C29] bg-[#EEF3E8] p-2.5 rounded-xl shrink-0">
                  {section.icon}
                </div>
                <h2 className="font-extrabold text-zinc-900 text-base md:text-lg tracking-tight">
                  {section.title}
                </h2>
              </div>
              {section.content}
            </div>
          ))}

          {/* CTA BANNER */}
          <div className="bg-gradient-to-r from-[#495C29] to-[#5a7035] rounded-3xl p-6 md:p-8 text-white shadow-md relative overflow-hidden group transition-all duration-300 hover:shadow-lg">
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-10 translate-y-10 pointer-events-none group-hover:scale-105 transition-transform duration-500">
              <Sparkles size={200} />
            </div>

            <div className="relative z-10 max-w-xl">
              <span className="inline-block bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-3">
                ✨ Komitmen Baboo Kos
              </span>

              <h3 className="font-extrabold text-lg md:text-xl mb-2">
                Transparan, Aman, Tanpa Drama.
              </h3>

              <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-6">
                Di Baboo Kos, kami berkomitmen memotong seluruh rantai birokrasi lama yang berbelit-belit sekaligus membasmi ruang gerak para oknum penipu. Dengan sistem pengelolaan yang terintegrasi, video room tour yang riil tanpa manipulasi, dan komitmen keterbukaan harga sejak awal, pencarian tempat tinggal barumu dijamin berjalan dengan aman, tenang, dan sepenuhnya sesuai rencana.
              </p>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 mb-6 text-xs leading-relaxed font-medium text-white">
                🎯 Designed with absolute transparency and mutual comfort ✨
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10 text-[11px] text-white/70">
                <span className="font-medium text-white/90">Baboo Kos — Panduan Sewa Aman & Bebas Scam</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
