"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MessageCircle, ClipboardList, CreditCard, Headset, Zap, FileText, CheckCircle2, Handshake, ShieldCheck, Users, Clock, HeadphonesIcon, HeartHandshake, ChevronRight, Wallet } from "lucide-react";

// ==========================================
// DATA ALUR JASA
// ==========================================
const steps = [
  {
    id: "01",
    headerIcon: MessageCircle,
    title: "Menghubungi Whatsapp Baboo Kos",
    desc: "Kamu bisa menghubungi Admin Baboo Kos tertera di link tree dan bio semua akun sosial media kami (Instagram, TikTok, dan Threads).",
    charImg: "/ilustrasi/ill1.webp",
    mockupType: "social",
    footerIcon: Zap,
    footerTitle: "Fast Response",
    footerDesc: "Admin akan merespon secepat mungkin.",
  },
  {
    id: "02",
    headerIcon: ClipboardList,
    title: "Menyampaikan Kriteria Kos",
    desc: "Admin akan memandu kamu untuk menyampaikan kriteria kos sesuai dengan kebutuhan dan budget yang dimiliki berdasarkan request customer.",
    charImg: "/ilustrasi/ill2.webp",
    mockupType: "chat",
    footerIcon: FileText,
    footerTitle: "Detail Kriteria",
    footerDesc: "Lokasi, budget, fasilitas, tipe kamar, dan kebutuhan lainnya.",
  },
  {
    id: "03",
    headerIcon: CreditCard,
    title: "Pembayaran & Proses Pencarian",
    desc: "Setelah pembayaran, Admin Baboo Kos akan memberikan estimasi hari untuk mencari kos yang sesuai kriteria.",
    charImg: "/ilustrasi/ill3.webp",
    mockupType: "payment",
    footerIcon: CheckCircle2,
    footerTitle: "Proses Cepat & Transparan",
    footerDesc: "Tim kami akan mencari dan memilihkan opsi kos terbaik untukmu.",
  },
  {
    id: "04",
    headerIcon: Headset,
    title: "Mendapatkan Rekomendasi Kos",
    desc: "Customer akan dihubungi oleh tim CS (Customer Service) untuk mengirimkan list kos berdasarkan form kriteria yang telah diisi sesuai estimasi waktu.",
    charImg: "/ilustrasi/ill4.webp",
    mockupType: "list",
    footerIcon: Handshake,
    footerTitle: "Rekomendasi Variatif",
    footerDesc: "Tim kami siap membantu kamu menemukan rekomendasi kos yang terbaik.",
  },
];

// DATA KEUNGGULAN (BOTTOM BANNER)
const features = [
  { icon: ShieldCheck, title: "Terpercaya", desc: "Amanah sejak 2021 dengan ribuan customer." },
  { icon: Users, title: "Banyak Pilihan", desc: "Ribuan pilihan kos terbaik di banyak kota." },
  { icon: Clock, title: "Hemat Waktu", desc: "Kami yang cari, kamu tinggal pilih." },
  { icon: HeadphonesIcon, title: "CS Responsif", desc: "Layanan cepat, ramah, dan selalu siap bantu." },
  { icon: HeartHandshake, title: "Garansi Puas", desc: "Kami pastikan kamu mendapat kos terbaik." },
  { icon: Wallet, title: "Harga Transparan", desc: "Tidak ada markup harga, harga asli dari pihak kos." },
];

export default function Role() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="alurJasa" ref={sectionRef} className="flex flex-col items-center bg-[#FAFBFA] mx-auto px-4 md:px-8 py-16 md:py-24 w-full max-w-[1400px] overflow-hidden">
      {/* HEADER TITLE */}
      <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
        <h3 className={cn("mb-2 font-bold text-[#495C29] text-sm md:text-base transition-all duration-700 ease-out", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>Alur Jasa</h3>

        <h2 className={cn("mb-4 font-bold text-slate-900 text-3xl md:text-4xl lg:text-5xl tracking-tight transition-all duration-700 ease-out delay-150", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Alur Jasa Pencarian Baboo Kos
        </h2>

        <p className={cn("max-w-2xl font-medium text-zinc-500 text-sm md:text-base leading-relaxed transition-all duration-700 ease-out delay-300", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Proses mudah, cepat dan terpercaya untuk menemukan kos terbaik sesuai kebutuhanmu
        </p>
      </div>

      {/* CARDS CONTAINER */}
      <div className="relative gap-6 xl:gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mb-12 w-full items-stretch">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={cn(
              "relative flex flex-col h-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl p-6 border border-zinc-100 rounded-3xl transition-all hover:-translate-y-1 duration-1000 ease-out",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
            )}
            style={{ transitionDelay: isVisible ? `${400 + index * 150}ms` : "0ms" }}
          >
            {/* ARROW CONNECTOR (Desktop Only) */}
            {index < steps.length - 1 && (
              <div className="hidden top-1/2 -right-[22px] z-10 absolute xl:flex justify-center items-center bg-[#495C29] shadow-md rounded-full w-10 h-10 text-white -translate-y-1/2">
                <ChevronRight size={20} strokeWidth={3} />
              </div>
            )}

            {/* CARD HEADER (Angka, Icon, Character) */}
            <div className="relative flex justify-between items-start mb-6 min-h-[80px]">
              <div className="flex items-center gap-2">
                <div className="flex justify-center items-center bg-[#495C29] rounded-full w-10 h-10 font-black text-white text-sm shrink-0">{step.id}</div>
                <div className="flex justify-center items-center bg-green-50 rounded-full w-10 h-10 text-[#495C29] shrink-0">
                  <step.headerIcon size={20} />
                </div>
              </div>

              {/* Character Image Container */}
              <div className="-top-10 right-0 absolute w-28 h-28 pointer-events-none">
                <Image
                  src={step.charImg}
                  alt={`Karakter langkah ${step.id}`}
                  fill
                  sizes="(max-width: 1080px) 112px, 112px"
                  className="object-contain"
                  priority={index < 2} // Mengutamakan loading gambar pertama dan kedua
                />
              </div>
            </div>

            {/* CARD TEXT */}
            <div className="mb-6">
              <h4 className="mb-3 font-bold text-zinc-900 text-lg md:text-xl leading-snug">{step.title}</h4>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{step.desc}</p>
            </div>

            {/* UI MOCKUPS (Skeleton visual) */}
            <div aria-hidden="true" className="relative bg-[#F8FAF7] mb-6 p-4 border border-zinc-100 rounded-2xl h-[200px] min-h-[200px] overflow-hidden">
              <MockupRenderer type={step.mockupType} />
            </div>

            {/* CARD FOOTER BANNER */}
            <div className="flex items-start gap-3 bg-[#FAFBFA] mt-auto p-4 border border-zinc-100 rounded-2xl">
              <div className="mt-0.5 text-[#495C29] shrink-0">
                <step.footerIcon size={20} />
              </div>
              <div className="flex flex-col">
                <span className="mb-1 font-bold text-zinc-900 text-xs">{step.footerTitle}</span>
                <span className="text-[10px] text-zinc-500 md:text-xs leading-relaxed">{step.footerDesc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM FEATURES BANNER */}
      <div
        className={cn(
          "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 bg-white shadow-sm p-6 md:p-8 border border-zinc-100 rounded-3xl w-full transition-all duration-1000 ease-out delay-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        )}
      >
        {features.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 w-full">
            <div className="flex justify-center items-center border border-zinc-200 rounded-full w-10 h-10 text-[#495C29] shrink-0">
              <item.icon size={18} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-zinc-900 text-xs md:text-sm">{item.title}</span>
              <span className="mt-0.5 text-[10px] text-zinc-500 leading-tight">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ==========================================
// MOCKUP RENDERER (Skeleton UI)
// ==========================================
function MockupRenderer({ type }: { type: string }) {
  if (type === "social") {
    return (
      <div className="flex flex-col gap-2.5 w-full h-full pointer-events-none">
        {/* Header Profile */}
        <div className="flex items-center gap-3 pb-2.5 border-zinc-200 border-b">
          <div className="relative bg-white rounded-full w-10 h-10 shrink-0 flex items-center justify-center overflow-hidden border border-zinc-200">
            <Image src="/icon.png" alt="Baboo Kos" fill sizes="40px" className="object-cover" />
          </div>
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-zinc-800 text-sm truncate">Baboo Kos</span>
              {/* Centang Biru Verifikasi WhatsApp */}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 48 48" className="shrink-0">
                <polygon
                  fill="#42a5f5"
                  points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
                ></polygon>
                <polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"></polygon>
              </svg>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-zinc-500">
              <div className="bg-[#25D366] rounded-full w-2 h-2 shrink-0"></div>
              <span>Online</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <div className="flex justify-center items-center gap-1.5 bg-[#25D366] hover:bg-[#20BD5C] rounded-lg w-full h-8 font-semibold text-[9px] text-white transition-colors">
            <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.69-.28-3.88-.78l-.28-.12-2.84.48.48-2.84-.12-.28C4.78 14.69 4.5 13.38 4.5 12c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z" />
            </svg>
            Kirim Pesan
          </div>
          <div className="flex justify-center items-center bg-zinc-100 hover:bg-zinc-200 rounded-lg w-8 h-8 shrink-0 transition-colors">
            <svg className="w-3.5 h-3.5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-2">
          <div className="text-[10px] text-zinc-500 font-medium">Info Kontak</div>

          <div className="flex items-start gap-2.5">
            <div className="bg-zinc-100 rounded-lg w-7 h-7 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] text-zinc-800 font-medium leading-snug truncate">Hunian Nyaman untuk Mahasiswa</div>
              <div className="text-[9px] text-zinc-500 mt-0.5 truncate">Kos eksklusif di Yogyakarta</div>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="bg-zinc-100 rounded-lg w-7 h-7 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] text-zinc-800 font-medium leading-snug truncate">Yogyakarta, Indonesia</div>
              <div className="text-[9px] text-zinc-500 mt-0.5 truncate">Dekat kampus & fasilitas umum</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "chat") {
    return (
      <div className="flex flex-col gap-2.5 w-full h-full text-[9px] leading-relaxed pointer-events-none">
        <div className="bg-white shadow-sm p-2 border border-zinc-200 rounded-xl rounded-tl-none w-[75%] text-zinc-600">halo kak</div>
        <div className="bg-white shadow-sm p-2 border border-zinc-200 rounded-xl rounded-tl-none w-[92%] text-zinc-600">halo kak mau nyari kos di daerah sekitar UGM utk putri budget 1-1,5 jt</div>
        <div className="self-end bg-[#DCF8C6] shadow-sm p-2 border border-green-200 rounded-xl rounded-tr-none w-[85%] text-zinc-800">Bisa yah kakak, kami bantu berikan rekomendasi kos sesuai kriteria ya kak</div>
      </div>
    );
  }

  if (type === "payment") {
    return (
      <div className="flex flex-col justify-center items-center gap-3 w-full h-[200px] min-h-[200px] pointer-events-none">
        <div className="text-center">
          <div className="text-[10px] text-zinc-500">Total Pembayaran</div>
          <div className="font-bold text-zinc-900 text-sm">Rp110.000</div>
        </div>
        <div className="my-1 border-zinc-300 border-t border-dashed w-full"></div>
        <div className="bg-white p-2.5 border border-zinc-200 rounded-lg w-full text-[9px] text-zinc-500 text-center leading-relaxed">
          Pembayaran diterima <br />
          <span className="font-semibold text-[#495C29]">BCA - a.n Yucha Pratama</span>
        </div>
      </div>
    );
  }

  if (type === "list") {
    const items = [
      {
        name: "Kos Assyfa",
        price: "1.2 Jt",
        facility: "AC, Kasur, Lemari",
        location: "Malang",
        image: "/fasad.webp",
      },
      {
        name: "Kos Anasera Putri",
        price: "1.5 Jt",
        facility: "AC, WiFi, K. Mandi Dalam",
        location: "Malang",
        image: "/kamar.webp",
      },
    ];

    return (
      <div className="flex flex-col gap-2 w-full h-full pointer-events-none">
        {items.map((kos, i) => (
          <div key={i} className="flex gap-2.5 bg-white shadow-sm p-2 border border-zinc-200 rounded-xl overflow-hidden">
            {/* Image Thumbnail */}
            <div className="relative bg-zinc-100 rounded-lg w-14 h-14 shrink-0 overflow-hidden">
              <Image src={kos.image} alt={kos.name} fill sizes="56px" className="object-cover object-bottom" />
              {/* Badge */}
              <div className="absolute top-0.5 right-0.5 bg-[#495C29] px-1 py-0.5 rounded text-[6px] text-white font-semibold z-10 leading-none">Ready</div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center w-full min-w-0 gap-0.5">
              {/* Title */}
              <h4 className="font-bold text-zinc-800 text-[10px] truncate">{kos.name}</h4>

              {/* Price */}
              <div className="flex items-center gap-1">
                <span className="font-bold text-[#495C29] text-[9px]">Rp {kos.price}</span>
                <span className="text-[7px] text-zinc-400">/bulan</span>
              </div>

              {/* Facilities */}
              <div className="flex items-center gap-1 min-w-0">
                <svg className="w-2 h-2 text-zinc-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[8px] text-zinc-500 truncate">{kos.facility}</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1 min-w-0">
                <svg className="w-2 h-2 text-zinc-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[8px] text-zinc-400 truncate">{kos.location}</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center shrink-0">
              <svg className="w-3.5 h-3.5 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}

        {/* Info Footer */}
        <div className="flex items-start gap-2 bg-blue-50 p-2 border border-blue-200 rounded-lg">
          <svg className="w-3 h-3 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-[8px] text-blue-700 leading-relaxed">Tim CS akan menghubungi untuk detail lengkap dan jadwal survei</p>
        </div>
      </div>
    );
  }
  return null;
}
