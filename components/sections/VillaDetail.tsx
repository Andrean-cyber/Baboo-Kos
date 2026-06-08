"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Maximize, Bed, Bath, ChefHat, CheckCircle2, X } from "lucide-react";

const villaData = {
  kusuma: {
    name: "BABOO VILLA KUSUMA",
    img: "/villaKusuma.jpeg",
    gallery: [
      "/galleryKusuma1.jpg",
      "/galleryKusuma2.jpg",
      "/galleryKusuma3.jpg",
    ],
    description: '"Baboo Villa Kusuma menghadirkan hunian eksklusif dengan kemewahan untuk momen relaksasi tanpa batas."',
    specs: [
      { label: "Luas Bangunan", value: "90 m2", icon: <Maximize size={18} /> },
      { label: "Kamar Tidur", value: "3 Room", icon: <Bed size={18} /> },
      { label: "Kamar Mandi", value: "2 Room", icon: <Bath size={18} /> },
      { label: "Dapur", value: "1 Area", icon: <ChefHat size={18} /> },
    ],
    points: ["Konsep Minimalis", "High Ceiling", "Kawasan Wisata"],
    price: "400 Ribuan",
  },
  pesona: {
    name: "BABOO VILLA PESONA",
    img: "/villaPesona.jpeg",
    gallery: [
      "/galleryPesona1.jpg",
      "/galleryPesona2.jpg",
      "/galleryPesona3.jpg",
    ],
    description: '"Baboo Villa Pesona menawarkan kehangatan hunian modern dengan pemandangan alam yang memukau setiap pagi."',
    specs: [
      { label: "Luas Bangunan", value: "110 m2", icon: <Maximize size={18} /> },
      { label: "Kamar Tidur", value: "4 Room", icon: <Bed size={18} /> },
      { label: "Kamar Mandi", value: "3 Room", icon: <Bath size={18} /> },
      { label: "Dapur", value: "1 Area", icon: <ChefHat size={18} /> },
    ],
    points: ["Private Pool", "Smart Home System", "View Gunung"],
    price: "550 Ribuan",
  },
};

export default function VillaDetail() {
  const [activeTab, setActiveTab] = useState<"kusuma" | "pesona">("kusuma");
  const [selectedImg, setSelectedImg] = useState<string | null>(null); // State untuk zoom gambar
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  const handleWhatsapp = () => {
    const message = encodeURIComponent("Halo kak, bisa tau informasi jadwal ketersediaan tentang Baboo Villa?");
    window.open(`https://wa.me/6287785338441?text=${message}`, "_blank");
  };

  const currentVilla = villaData[activeTab];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto px-4 md:px-8 py-16 md:py-24 w-full max-w-[1280px]">
      
      {/* ========================= */}
      {/* LIGHTBOX / ZOOM MODAL */}
      {/* ========================= */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 transition-all duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform duration-300"
            onClick={() => setSelectedImg(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImg} 
            alt="Zoomed Villa" 
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain animate-in zoom-in-95 duration-300"
          />
        </div>
      )}

      <div className="flex flex-col items-center mb-10 text-center">
        <h3 className={cn("mb-2 font-bold text-[#495C29] text-sm md:text-base transition-all duration-700 ease-out", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Baboo Villa Detail
        </h3>
        <h2 className={cn("mb-10 font-bold text-slate-900 text-3xl md:text-5xl tracking-tight transition-all duration-700 ease-out delay-150", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Eksplorasi Keunggulan Unit
        </h2>

        <div className={cn("flex justify-center items-center gap-12 md:gap-20 border-zinc-200 border-b w-full max-w-2xl transition-all duration-700 delay-300", isVisible ? "opacity-100" : "opacity-0")}>
          {["kusuma", "pesona"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "kusuma" | "pesona")}
              className={cn("pb-4 font-bold text-xs md:text-sm uppercase tracking-widest transition-all", activeTab === tab ? "border-b-2 border-[#495C29] text-[#495C29]" : "text-zinc-400 hover:text-zinc-500")}
            >
              Baboo Villa {tab}
            </button>
          ))}
        </div>
      </div>

      <div className={cn("gap-10 lg:gap-12 grid grid-cols-1 lg:grid-cols-12 transition-all duration-1000 delay-500", isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")}>
        
        {/* LEFT: IMAGE & GALLERY */}
        <div className="lg:col-span-5">
          <div 
            className="relative shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-3xl overflow-hidden cursor-zoom-in"
            onClick={() => setSelectedImg(currentVilla.img)}
          >
            <img src={currentVilla.img} alt={currentVilla.name} className="w-full h-[350px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
            <div className="bottom-0 absolute inset-x-0 bg-gradient-to-t from-[#495C29]/80 to-transparent opacity-80 h-32 pointer-events-none" />
            <div className="top-8 right-10 absolute bg-[#495C29]/90 shadow-sm backdrop-blur-md px-4 py-1.5 rounded-full font-bold text-[10px] text-white tracking-wide">Cek Ketersediaan</div>
          </div>

          {/* Sub Gallery */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-6">
            {currentVilla.gallery.map((img, i) => (
              <div 
                key={i} 
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm cursor-zoom-in group"
                onClick={() => setSelectedImg(img)}
              >
                <img
                  src={img}
                  alt={`${currentVilla.name} Gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE: SPECS */}
        <div className="flex flex-col lg:col-span-4 lg:pt-4">
          <h4 className="mb-4 font-bold text-zinc-900 text-lg">Spesifikasi Unit</h4>
          <p className="mb-8 text-[13px] text-zinc-500 italic leading-relaxed">{currentVilla.description}</p>

          <div className="flex flex-col gap-4">
            {currentVilla.specs.map((spec, i) => (
              <div key={i} className="flex justify-between items-center pb-3 border-zinc-100 border-b">
                <div className="flex items-center gap-3 text-zinc-400">
                  {spec.icon}
                  <span className="font-medium text-sm">{spec.label}</span>
                </div>
                <span className="font-bold text-zinc-900 text-sm">{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h4 className="mb-5 font-bold text-[#495C29] text-sm uppercase tracking-wide">Point Plus</h4>
            <div className="flex flex-col gap-3">
              {currentVilla.points.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#495C29]" />
                  <span className="font-bold text-zinc-700 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: PRICING & CTA */}
        <div className="flex flex-col justify-between gap-8 lg:col-span-3 lg:pt-4">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col items-start bg-[#EEF3E8] shadow-sm p-6 md:p-8 rounded-2xl">
              <p className="font-semibold text-zinc-500 text-xs">Harga Mulai</p>
              <h3 className="mt-1 font-extrabold text-[#495C29] text-[1.6rem] tracking-tight">Rp. {currentVilla.price}</h3>
              <button className="bg-white/70 hover:bg-white mt-4 px-4 py-2 rounded-full font-bold text-[#495C29] text-[11px] transition-colors">Dapatkan promo</button>
            </div>
            <p className="px-2 font-medium text-[10px] text-zinc-400">*Harga Termasuk... (syarat & ketentuan berlaku)</p>
          </div>
          
          <button
            onClick={handleWhatsapp}
            className="flex justify-center items-center gap-2 bg-[#495C29] hover:bg-[#44552a] shadow-md mt-auto py-4 rounded-2xl font-bold text-white text-sm active:scale-95 transition-all"
          >
            Cek Ketersediaan
          </button>
        </div>
      </div>
    </section>
  );
}