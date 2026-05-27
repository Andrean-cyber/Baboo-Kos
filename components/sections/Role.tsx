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
    charImg: "/ill1.webp",
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
    charImg: "/ill2.webp",
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
    charImg: "/ill3.webp",
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
    charImg: "/ill4.webp",
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
    <section ref={sectionRef} className="flex flex-col items-center bg-[#FAFBFA] mx-auto px-4 md:px-8 py-16 md:py-24 w-full max-w-[1400px] overflow-hidden">
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
      <div className="flex flex-col gap-3 opacity-80 w-full h-full pointer-events-none">
        <div className="flex items-center gap-3 pb-2 border-zinc-200 border-b">
          <div className="bg-zinc-200 rounded-full w-10 h-10 shrink-0"></div>
          <div className="flex flex-col gap-1 w-full">
            <div className="bg-zinc-200 rounded-full w-1/2 h-3"></div>
            <div className="bg-zinc-200 rounded-full w-1/3 h-2"></div>
          </div>
        </div>
        <div className="flex gap-2 mb-1">
          <div className="flex justify-center items-center bg-blue-500/10 rounded-lg w-full h-8 font-bold text-[8px] text-blue-600">Kirim Pesan</div>
          <div className="bg-zinc-200 rounded-lg w-8 h-8 shrink-0"></div>
        </div>
        <div className="gap-1 grid grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-zinc-200 rounded-md aspect-square"></div>
          ))}
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
      <div className="flex flex-col justify-center items-center gap-3 h-full pointer-events-none">
        <div className="flex justify-center items-center bg-[#EEF3E8] rounded-full w-12 h-12 text-[#495C29]">
          <CheckCircle2 size={24} />
        </div>
        <div className="text-center">
          <div className="text-[10px] text-zinc-500">Total Pembayaran</div>
          <div className="font-bold text-zinc-900 text-sm">Rp150.000</div>
        </div>
        <div className="my-1 border-zinc-300 border-t border-dashed w-full"></div>
        <div className="bg-white p-2 border border-zinc-200 rounded-lg w-full text-[8px] text-zinc-500 text-center">
          Pembayaran diterima <br />
          <span className="font-semibold text-[#495C29]">BCA - 1234 5678</span>
        </div>
      </div>
    );
  }

  if (type === "list") {
    return (
      <div className="flex flex-col gap-2 w-full h-full pointer-events-none">
        {[1, 2].map((i) => (
          <div key={i} className="flex gap-2 bg-white shadow-sm p-2 border border-zinc-200 rounded-xl overflow-hidden">
            <div className="bg-zinc-200 rounded-lg w-16 h-16 shrink-0"></div>
            <div className="flex flex-col justify-center w-full">
              <div className="bg-zinc-200 mb-1.5 rounded-full w-3/4 h-3"></div>
              <div className="bg-[#495C29]/20 mb-2 rounded-full w-1/2 h-2"></div>
              <div className="flex flex-col gap-1">
                <div className="bg-zinc-100 rounded-full w-full h-1.5"></div>
                <div className="bg-zinc-100 rounded-full w-4/5 h-1.5"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}
