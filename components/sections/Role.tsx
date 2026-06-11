"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MessageCircle, ClipboardList, CreditCard, Headset, Zap, FileText, CheckCircle2, Handshake, ShieldCheck, Users, Clock, HeadphonesIcon, HeartHandshake, ChevronRight } from "lucide-react";

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
    footerTitle: "Dibantu Sampai Deal",
    footerDesc: "Tim kami siap membantu sampai kamu menemukan kos yang cocok.",
  },
];

// DATA KEUNGGULAN (BOTTOM BANNER)
const features = [
  { icon: ShieldCheck, title: "Terpercaya", desc: "Amanah sejak 2021 dengan ribuan customer." },
  { icon: Users, title: "Banyak Pilihan", desc: "Ribuan pilihan kos terbaik di banyak kota." },
  { icon: Clock, title: "Hemat Waktu", desc: "Kami yang cari, kamu tinggal pilih." },
  { icon: HeadphonesIcon, title: "CS Responsif", desc: "Layanan cepat, ramah, dan selalu siap bantu." },
  { icon: HeartHandshake, title: "Garansi Puas", desc: "Kami pastikan kamu mendapat kos terbaik." },
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
      <div className="relative gap-6 xl:gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mb-12 w-full">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={cn(
              "relative flex flex-col bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl p-6 border border-zinc-100 rounded-3xl transition-all hover:-translate-y-1 duration-1000 ease-out",
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
                <div className="flex justify-center items-center bg-[#495C29] rounded-full w-10 h-10 font-black text-white text-sm">{step.id}</div>
                <div className="flex justify-center items-center bg-green-50 rounded-full w-10 h-10 text-[#495C29]">
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
            <div className="flex-1 mb-6">
              <h4 className="mb-3 font-bold text-zinc-900 text-lg md:text-xl leading-snug">{step.title}</h4>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{step.desc}</p>
            </div>

            {/* UI MOCKUPS (Skeleton visual) */}
            <div className="relative bg-[#F8FAF7] mb-6 p-4 border border-zinc-100 rounded-2xl h-[200px] overflow-hidden">
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
          "flex flex-wrap lg:flex-nowrap justify-between gap-6 md:gap-4 bg-white shadow-sm p-6 md:p-8 border border-zinc-100 rounded-3xl w-full transition-all duration-1000 ease-out delay-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        )}
      >
        {features.map((item, idx) => (
          <div key={idx} className="flex flex-1 items-center gap-3 w-full md:w-auto">
            <div className="flex justify-center items-center border border-zinc-200 rounded-full w-10 h-10 text-[#495C29] shrink-0">
              <item.icon size={18} />
            </div>
            <div className="flex flex-col">
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
      <div className="flex flex-col gap-3 w-full h-full pointer-events-none">
        {/* Header Profile */}
        <div className="flex items-center gap-3 pb-3 border-zinc-200 border-b">
          <div className="relative bg-white rounded-full w-12 h-12 shrink-0 flex items-center justify-center overflow-hidden border border-zinc-200">
            <img 
              src="/icon.png" 
              alt="Baboo Kos" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-zinc-800 text-sm">Baboo Kos</span>
              {/* Centang Biru Verifikasi WhatsApp */}
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#00A5F4"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-zinc-500">
              <div className="bg-[#25D366] rounded-full w-2 h-2"></div>
              <span>Online</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mb-2">
          <div className="flex justify-center items-center gap-1.5 bg-[#25D366] hover:bg-[#20BD5C] rounded-lg w-full h-9 font-semibold text-[9px] text-white transition-colors">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.69-.28-3.88-.78l-.28-.12-2.84.48.48-2.84-.12-.28C4.78 14.69 4.5 13.38 4.5 12c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z"/>
            </svg>
            Kirim Pesan
          </div>
          <div className="flex justify-center items-center bg-zinc-100 hover:bg-zinc-200 rounded-lg w-9 h-9 shrink-0 transition-colors">
            <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-3">
          <div className="text-[10px] text-zinc-500 font-medium">Info Kontak</div>
          
          <div className="flex items-center gap-3">
            <div className="bg-zinc-100 rounded-lg w-8 h-8 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-[11px] text-zinc-800 font-medium">Hunian Nyaman untuk Mahasiswa</div>
              <div className="text-[9px] text-zinc-500 mt-0.5">Kos eksklusif di Yogyakarta</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-zinc-100 rounded-lg w-8 h-8 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-[11px] text-zinc-800 font-medium">Yogyakarta, Indonesia</div>
              <div className="text-[9px] text-zinc-500 mt-0.5">Dekat kampus & fasilitas umum</div>
            </div>
          </div>
        </div>

        {/* Media Gallery */}
        <div className="mt-2">
          <div className="flex justify-between items-center mb-2">
            <div className="text-[10px] text-zinc-500 font-medium">Media & Foto</div>
            <div className="text-[9px] text-[#25D366] font-medium">12</div>
          </div>
          <div className="gap-1 grid grid-cols-3">
            {[
              { bg: "bg-gradient-to-br from-blue-400 to-blue-600" },
              { bg: "bg-gradient-to-br from-green-400 to-green-600" },
              { bg: "bg-gradient-to-br from-orange-400 to-orange-600" },
              { bg: "bg-gradient-to-br from-purple-400 to-purple-600" },
              { bg: "bg-gradient-to-br from-pink-400 to-pink-600" },
              { bg: "bg-gradient-to-br from-teal-400 to-teal-600" },
            ].map((item, i) => (
              <div key={i} className={`${item.bg} rounded-md aspect-square flex items-center justify-center opacity-80`}>
                <svg className="w-5 h-5 text-white opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "chat") {
    return (
      <div className="flex flex-col gap-3 w-full h-full text-[8px] pointer-events-none">
        <div className="bg-white shadow-sm p-2 border border-zinc-200 rounded-xl rounded-tl-none w-[80%] text-zinc-600">halo kak</div>
        <div className="bg-white shadow-sm p-2 border border-zinc-200 rounded-xl rounded-tl-none w-[90%] text-zinc-600">halo kak mau nyari kos di daerah sekitar UGM utk putri budget 1-1,5 jt</div>
        <div className="self-end bg-[#DCF8C6] shadow-sm p-2 border border-green-200 rounded-xl rounded-tr-none w-[80%] text-zinc-800">Bisa yah kakak kami bantu berikan rekomendasi kos...</div>
      </div>
    );
  }

  if (type === "payment") {
    return (
      <div className="flex flex-col items-center justify-between h-full w-full pointer-events-none py-1">
        
        {/* Ilustrasi Centang Berhasil / Terverifikasi */}
        <div className="flex flex-col items-center justify-center flex-1 gap-2">
          <div className="flex items-center justify-center bg-[#EEF3E8] text-[#495C29] rounded-full w-12 h-12 shadow-sm border border-[#E3EBCB]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="font-bold text-zinc-700 text-[11px] tracking-wide mt-1">
            Pembayaran Berhasil! Terverifikasi
          </span>
        </div>

        {/* Informasi Rekening BCA (Melayang di bawah) */}
        <div className="flex items-center gap-2.5 bg-white p-2.5 border border-zinc-200/80 shadow-sm rounded-xl w-full">
          {/* Logo BCA */}
          <div className="bg-[#005EAF] text-white font-black text-[7px] tracking-tighter px-1.5 py-1 rounded-md shrink-0">
            BCA
          </div>
          <div className="flex flex-col min-w-0 text-left">
            <span className="font-bold text-zinc-800 text-[10px] tracking-wide">3680362199</span>
            <span className="text-[8px] text-zinc-500 truncate">a.n Yucha Pratama</span>
          </div>
        </div>

      </div>
    );
  }

  if (type === "list") {
  return (
    <div className="flex flex-col gap-2 w-full h-full pointer-events-none">
      {[
        {
          name: "Baboo Kos Gejayan",
          price: "1.2 Jt",
          facility: "AC, Kasur, Lemari",
          location: "Dekat UGM",
          image: "bg-gradient-to-br from-blue-400 to-blue-600"
        },
        {
          name: "Baboo Kos Seturan",
          price: "1.5 Jt",
          facility: "AC, WiFi, Kamar Mandi Dalam",
          location: "Dekat UPN",
          image: "bg-gradient-to-br from-green-400 to-green-600"
        }
      ].map((kos, i) => (
        <div key={i} className="flex gap-3 bg-white shadow-sm p-2.5 border border-zinc-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
          {/* Image Thumbnail */}
          <div className={`${kos.image} rounded-lg w-20 h-20 shrink-0 flex items-center justify-center relative overflow-hidden`}>
            <svg className="w-8 h-8 text-white opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {/* Badge */}
            <div className="absolute top-1 right-1 bg-[#495C29] px-1.5 py-0.5 rounded text-[7px] text-white font-semibold">
              Ready
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center w-full min-w-0">
            {/* Title */}
            <h4 className="font-bold text-zinc-800 text-[11px] truncate mb-1">
              {kos.name}
            </h4>
            
            {/* Price */}
            <div className="flex items-center gap-1 mb-1.5">
              <span className="font-bold text-[#495C29] text-[10px]">Rp {kos.price}</span>
              <span className="text-[8px] text-zinc-400">/bulan</span>
            </div>

            {/* Facilities */}
            <div className="flex items-center gap-1 mb-1">
              <svg className="w-2.5 h-2.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[9px] text-zinc-500 truncate">{kos.facility}</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1">
              <svg className="w-2.5 h-2.5 text-zinc-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-[9px] text-zinc-400 truncate">{kos.location}</span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center ml-auto">
            <svg className="w-4 h-4 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      ))}

      {/* Info Footer */}
      <div className="flex items-start gap-2 bg-blue-50 mt-1 p-2 border border-blue-200 rounded-lg">
        <svg className="w-3 h-3 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-[8px] text-blue-700 leading-relaxed">
          Tim CS akan menghubungi untuk detail lengkap dan jadwal survei
        </p>
      </div>
    </div>
  );
}
  return null;
}
