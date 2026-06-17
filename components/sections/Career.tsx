"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Briefcase, GraduationCap, MapPin, ChevronRight, Users2, TrendingUp, Award, Gift, Home, Building, Smile } from "lucide-react";

// Data Pekerjaan
const jobData = {
  fulltime: {
    babooKos: [
      { title: "Digital Marketing Specialist", type: "Full-time", loc: "Remote / Bali", dept: "Marketing" },
      { title: "Content Creator", type: "Full-time", loc: "Bali (On-site)", dept: "Marketing" },
      { title: "Customer Relationship Officer", type: "Full-time", loc: "Bali (On-site)", dept: "Customer Service" },
      { title: "Property Consultant", type: "Full-time", loc: "Bali (On-site)", dept: "Sales" },
    ],
    babooVilla: [
      { title: "Villa Operation Manager", type: "Full-time", loc: "Bali (On-site)", dept: "Operations" },
      { title: "Reservation Staff", type: "Full-time", loc: "Bali (On-site)", dept: "Hospitality" },
      { title: "Housekeeping Supervisor", type: "Full-time", loc: "Bali (On-site)", dept: "Operations" },
      { title: "Social Media Specialist", type: "Full-time", loc: "Remote / Bali", dept: "Marketing" },
    ],
  },
  internship: {
    babooKos: [
      { title: "Marketing Intern", type: "Internship", loc: "Remote", dept: "Marketing" },
      { title: "Business Development Intern", type: "Internship", loc: "Bali", dept: "Sales" },
    ],
    babooVilla: [
      { title: "Hospitality Management Intern", type: "Internship", loc: "Bali (On-site)", dept: "Operations" },
      { title: "Creative Intern", type: "Internship", loc: "Remote", dept: "Marketing" },
    ],
  },
};

export default function Career() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);
  const handleWhatsapp = () => {
  const message = encodeURIComponent(
    "Halo kak, bisa tau informasi lebih lanjut tentang lowongan pekerjaan di Baboo Kos?"
  );

  window.open(
    `https://wa.me/6285111203894?text=${message}`,
    "_blank"
  );
};

  // State untuk Tab Aktif (Tombol Lowongan / Internship)
  const [activeTab, setActiveTab] = useState<"fulltime" | "internship">("fulltime");

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

  const currentJobs = jobData[activeTab];

  return (
    <section ref={sectionRef} className="flex flex-col items-center mx-auto px-4 md:px-8 py-16 md:py-24 w-full max-w-[1280px]">
      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}
      <div className="flex flex-col items-center mb-10 max-w-3xl text-center">
        <h3 className={cn("mb-2 font-bold text-[#495C29] text-sm md:text-base transition-all duration-700 ease-out", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>Career</h3>
        <h2 className={cn("mb-5 font-bold text-slate-900 text-3xl md:text-4xl lg:text-5xl tracking-tight transition-all duration-700 ease-out delay-150", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Join the squad: Tempatnya Ide Gila Dikasih Panggung
        </h2>
        <p className={cn("font-medium text-zinc-500 text-sm md:text-base leading-relaxed transition-all duration-700 ease-out delay-300", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Kami bukan sekadar rekan kerja, tapi kolektif anak muda yang ambisius buat ngubah industri properti lokal. Bawa talenta terbaik lo, nikmati work-life balance yang proper, dan mari berkembang bareng tanpa drama.
        </p>

        {/* ========================= */}
        {/* TAB BUTTONS (Interaktif) */}
        {/* ========================= */}
        <div className={cn("flex flex-wrap justify-center gap-4 mt-8 transition-all duration-700 ease-out delay-500", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          {/* Tombol Lowongan Kerja */}
          <button
            onClick={() => setActiveTab("fulltime")}
            className={cn(
              "flex items-center gap-3 px-6 py-2 border rounded-full transition-all duration-300",
              activeTab === "fulltime" ? "border-[#495C29]/20 bg-[#F4F7EF] shadow-sm" : "border-zinc-200 bg-white text-zinc-400 hover:bg-zinc-50",
            )}
          >
            <Briefcase size={20} className={activeTab === "fulltime" ? "text-[#495C29]" : "text-zinc-400"} />
            <div className="text-left">
              <div className={cn("font-bold text-xs leading-tight", activeTab === "fulltime" ? "text-[#495C29]" : "text-zinc-500")}>Lowongan Kerja</div>
              <div className={cn("font-medium text-[9px]", activeTab === "fulltime" ? "text-[#495C29]/70" : "text-zinc-400")}>Full-time & Part-time</div>
            </div>
          </button>

          {/* Tombol Internship */}
          <button
            onClick={() => setActiveTab("internship")}
            className={cn(
              "flex items-center gap-3 px-6 py-2 border rounded-full transition-all duration-300",
              activeTab === "internship" ? "border-zinc-700/20 bg-zinc-800 shadow-sm" : "border-zinc-200 bg-white text-zinc-400 hover:bg-zinc-50",
            )}
          >
            <GraduationCap size={20} className={activeTab === "internship" ? "text-white" : "text-zinc-400"} />
            <div className="text-left">
              <div className={cn("font-bold text-xs leading-tight", activeTab === "internship" ? "text-white" : "text-zinc-500")}>Internship</div>
              <div className={cn("font-medium text-[9px]", activeTab === "internship" ? "text-zinc-300" : "text-zinc-400")}>Program Magang</div>
            </div>
          </button>
        </div>
      </div>

      {/* ========================= */}
      {/* CAREER CARDS GRID */}
      {/* ========================= */}
      <div className={cn("gap-6 lg:gap-8 grid grid-cols-1 lg:grid-cols-2 w-full transition-all duration-1000 ease-out delay-[600ms]", isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")}>
        {/* CARD: BABOO KOS */}
        <div className="flex flex-col bg-white shadow-sm p-6 md:p-8 border border-zinc-200 rounded-[2rem]">
          <div className="flex items-center gap-4 mb-6 pb-6 border-zinc-100 border-b">
            <div className="flex justify-center items-center bg-[#495C29] rounded-full w-12 h-12 text-white shrink-0">
              <Home size={24} />
            </div>
            <div>
              <h3 className="font-bold text-zinc-900 text-xl">Baboo Kos</h3>
              <p className="mt-1 font-medium text-[11px] text-zinc-500">Menghubungkan kos berkualitas dengan penyewa, menciptakan kenyamanan dan pengalaman terbaik.</p>
            </div>
          </div>

          {/* Job List */}
          <div className="flex flex-col gap-4">
            {currentJobs.babooKos.map((job, i) => (
              <JobRow key={i} {...job} theme="green" />
            ))}
            {currentJobs.babooKos.length === 0 && <p className="py-4 text-zinc-400 text-sm text-center">Belum ada posisi yang tersedia.</p>}
          </div>

          {/* Footer Card */}
          <div className="flex items-center gap-3 bg-[#EEF3E8] mt-6 p-4 rounded-2xl text-[#495C29]">
            <Users2 size={24} className="shrink-0" />
            <p className="font-bold text-[11px] leading-relaxed">Jadilah bagian dari tim yang membantu ribuan orang menemukan kos terbaik setiap hari.</p>
          </div>
        </div>

        {/* CARD: BABOO VILLA */}
        <div className="flex flex-col bg-[#FFFCF5] shadow-sm p-6 md:p-8 border border-yellow-200/60 rounded-[2rem]">
          <div className="flex items-center gap-4 mb-6 pb-6 border-yellow-200/50 border-b">
            <div className="flex justify-center items-center bg-[#F3C546] rounded-full w-12 h-12 text-white shrink-0">
              <Building size={24} />
            </div>
            <div>
              <h3 className="font-bold text-zinc-900 text-xl">Baboo Villa</h3>
              <p className="mt-1 font-medium text-[11px] text-zinc-500">Mengelola villa terbaik dengan standar pelayanan tinggi untuk pengalaman menginap yang tak terlupakan.</p>
            </div>
          </div>

          {/* Job List */}
          <div className="flex flex-col gap-4">
            {currentJobs.babooVilla.map((job, i) => (
              <JobRow key={i} {...job} theme="yellow" />
            ))}
            {currentJobs.babooVilla.length === 0 && <p className="py-4 text-zinc-400 text-sm text-center">Belum ada posisi yang tersedia.</p>}
          </div>

          {/* Footer Card */}
          <div className="flex items-center gap-3 bg-yellow-100/50 mt-6 p-4 rounded-2xl text-[#F3C546]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <p className="font-bold text-[11px] leading-relaxed">Bersama kami, ciptakan pengalaman menginap terbaik dan layanan hospitality yang berkesan.</p>
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* VALUES (Horizontal Layout) */}
      {/* ========================= */}
      <div className={cn("gap-4 md:gap-6 grid grid-cols-2 md:grid-cols-4 mt-10 w-full transition-all duration-1000 ease-out delay-[800ms]", isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")}>
        <ValueItem icon={<Users2 size={18} className="text-[#495C29]" />} bg="bg-[#EEF3E8]" label="Lingkungan Positif" desc="Bekerja dalam tim yang suportif dan kolaboratif." />
        <ValueItem icon={<TrendingUp size={18} className="text-white" />} bg="bg-[#F4B740]" label="Pengembangan Diri" desc="Kesempatan belajar dan berkembang secara berkelanjutan." />
        <ValueItem icon={<Award size={18} className="text-white" />} bg="bg-[#495C29]" label="Karier yang Bertumbuh" desc="Peluang karier dan jenjang yang jelas." />
        <ValueItem icon={<Gift size={18} className="text-[#F3C546]" />} bg="bg-yellow-100/60" label="Benefit Menarik" desc="Tunjangan kompetitif dan benefit menarik lainnya." />
      </div>

      {/* ========================= */}
      {/* BOTTOM SECTION (Complex Grid) */}
      {/* ========================= */}
      <div className={cn("gap-6 grid grid-cols-1 md:grid-cols-3 mt-10 w-full transition-all duration-1000 ease-out delay-[1000ms]", isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")}>
        {/* Left Column (Spans 2 cols on Desktop) */}
        <div className="flex flex-col gap-6 md:col-span-2">
          {/* Top Row: Text & Image */}
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center bg-white shadow-sm p-8 border border-zinc-100 rounded-[2rem]">
              <MacDots />
              <h4 className="mt-6 mb-3 font-bold text-zinc-900 text-xl">Apa yang Akan Anda Dapatkan?</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">Kami tidak hanya peduli pada hasil kerja, tetapi juga pada kesejahteraan dan perkembangan karir jangka panjang Anda.</p>
            </div>

            <div className="group relative shadow-sm rounded-[2rem] h-[220px] overflow-hidden">
              <Image 
                src="/outbond/BusinessTripBali/BusinessTripBali2.JPG" 
                alt="Work Culture" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="bottom-4 left-1/2 absolute flex items-center gap-3 bg-white/95 shadow-lg backdrop-blur-md px-4 py-2.5 rounded-2xl -translate-x-1/2">
                <div className="bg-[#495C29] p-1.5 rounded-md text-white">
                  <Smile size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[11px] text-zinc-900 leading-none">BUDAYA KERJA</span>
                  <span className="mt-1 font-medium text-[8px] text-zinc-500">Lingkungan Kerja yang Suportif & Nyaman</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner (10+) */}
          <div className="flex items-center gap-6 bg-[#EEF3E8] shadow-sm p-6 md:px-10 rounded-[2rem]">
            <h2 className="font-extrabold text-[#495C29] text-5xl md:text-6xl tracking-tighter">10+</h2>
            <p className="max-w-[280px] font-medium text-[#495C29] text-[13px] leading-relaxed">Cabang yang tersebar di seluruh wilayah Indonesia dan bergabunglah menjadi bagian dari kami</p>
          </div>
        </div>

        {/* Right Column: Peluang Karir */}
        <div className="flex flex-col bg-white shadow-sm p-8 border border-zinc-100 rounded-[2rem]">
          <MacDots />
          <h4 className="mt-6 mb-3 font-bold text-zinc-900 text-lg uppercase tracking-wider">PELUANG KARIR</h4>
          <p className="mb-8 text-zinc-500 text-xs leading-relaxed">Jelajahi lowongan pekerjaan yang saat ini tersedia dan jadilah bagian dari perjalanan sukses manajemen Baboo Villa.</p>

          <div className="flex flex-col gap-3 mt-auto">
            <button className="hover:bg-yellow-50 py-3.5 border-[#F3C546] border-2 rounded-full w-full font-bold text-[#F3C546] text-[11px] transition-colors">Jadilah bagian dari kami</button>
            <button
              onClick={handleWhatsapp}
              className={cn(
                "bg-[#F3C546] hover:bg-[#e0a232] shadow-md py-3.5 rounded-full w-full font-bold text-[11px] text-white active:scale-95 transition-all"
              )}
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// SUB-COMPONENTS
// ==========================================

function JobRow({ title, type, loc, dept, theme }: { title: string; type: string; loc: string; dept: string; theme: "green" | "yellow" }) {
  const isGreen = theme === "green";
  return (
    <div className="flex justify-between items-center pb-4 last:pb-0 border-zinc-100 last:border-0 border-b">
      <div className="flex flex-col gap-2">
        <h5 className="font-bold text-[13px] text-zinc-900">{title}</h5>
        <div className="flex flex-wrap items-center gap-4 font-medium text-[10px] text-zinc-500">
          <span className="flex items-center gap-1.5">
            <Briefcase size={12} /> {type}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={12} /> {loc}
          </span>
          <span className={cn("font-bold", isGreen ? "text-[#495C29]" : "text-[#F3C546]")}>{dept}</span>
        </div>
      </div>
      <button
        className={cn(
          "flex items-center gap-1.5 px-4 py-1.5 border rounded-full font-bold text-[10px] transition-all shrink-0",
          isGreen ? "border-[#495C29] text-[#495C29] hover:bg-[#495C29] hover:text-white" : "border-[#F3C546] text-[#F3C546] hover:bg-[#F3C546] hover:text-white",
        )}
      >
        Lihat Detail <ChevronRight size={14} />
      </button>
    </div>
  );
}

function ValueItem({ icon, bg, label, desc }: { icon: React.ReactNode; bg: string; label: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className={cn("flex justify-center items-center shadow-sm rounded-full w-10 h-10 shrink-0", bg)}>{icon}</div>
      <div className="flex flex-col pt-0.5">
        <h5 className="font-bold text-[11px] text-zinc-900">{label}</h5>
        <p className="mt-1 pr-2 font-medium text-[9px] text-zinc-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function MacDots() {
  return (
    <div className="flex gap-1.5">
      <div className="bg-[#E5625E] rounded-full w-2.5 h-2.5"></div>
      <div className="bg-[#F3C546] rounded-full w-2.5 h-2.5"></div>
      <div className="bg-[#5EC554] rounded-full w-2.5 h-2.5"></div>
    </div>
  );
}
