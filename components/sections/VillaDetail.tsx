"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { getOptimizedImage, getImageSizes } from "@/lib/imageUtils";
import Image from "next/image";
import { 
  Maximize, Bed, Bath, ChefHat, CheckCircle2, X, ChevronLeft, ChevronRight, MapPin, Info,
  Layers, Tv, Music, Thermometer, Car, Box, Shirt, Utensils, Mountain, Building2
} from "lucide-react";
import { FiWifi } from "react-icons/fi";
import { LuHouse } from "react-icons/lu";
import BalconyIcon from '@mui/icons-material/Balcony';

const villaData = {
  pesona: {
    name: "BABOO VILLA PESONA",
    img: "/villa/pesona/villaPesona.webp",
    gallery: [
      "/villa/pesona/pesona3.webp",
      "/villa/pesona/pesona5.webp",
      "/villa/pesona/pesona6.webp",
      "/villa/pesona/pesona7.webp",
      "/villa/pesona/pesona2.webp",
      "/villa/pesona/pesona1.webp",
      "/villa/pesona/pesona8.webp",
      "/villa/pesona/pesona9.webp",
      "/villa/pesona/pesona4.webp",
    ],
    description: '"Baboo Villa Pesona menawarkan kehangatan hunian modern dengan pemandangan alam yang memukau setiap pagi."',
    specs: [
      { label: "2 Lantai", icon: <Layers size={16} /> },
      { label: "3 Kamar Tidur", icon: <Bed size={16} /> },
      { label: "2 Kamar Mandi", icon: <Bath size={16} /> },
      { label: "Kitchen Set", icon: <ChefHat size={16} /> },
      { label: 'Smart TV Samsung 50"', icon: <Tv size={16} /> },
      { label: "Speaker + Karaoke", icon: <Music size={16} /> },
      { label: "Water Heater", icon: <Thermometer size={16} /> },
      { label: "Free Wi-Fi", icon: <FiWifi size={16} /> },
      { label: "Carport Mobil", icon: <Car size={16} /> },
      { label: "Rak Sepatu", icon: <Box size={16} /> },
      { label: "Lemari Pakaian", icon: <Shirt size={16} /> },
      { label: "Meja Makan", icon: <Utensils size={16} /> },
      { label: "Peralatan Memasak", icon: <ChefHat size={16} /> },
      { label: "Balkon", icon: <Building2 size={16} /> },
    ],
    points: [" ⁠3 menit ke BNS dan Jatim Park 2", "5 menit ke Jatim Park 1, Jatim Park 3 dan Museum Angkut", "8 menit ke Alun-alun Kota Batu", "High Ceiling", "Kawasan Villa Strategis", "View Gunung Arjuna"],
    priceWeekday: "350 Ribu",
    priceWeekend: "550 Ribu",
    address: "Pesona Batu Residence Kav. 16 Oro-oro ombo Kota Batu",
    notes: [
      "Kapasitas max Baboo Vila 6 orang dewasa, jika lebih maka akan dikenakan biaya tambahan 30k/orang.",
      "Anak-anak di atas 5 tahun terhitung orang dewasa.",
      "Harga weekend juga berlaku untuk hari libur nasional.",
      "Check-in jam 14.00 dan Check-out max 11.00.",
      "Kendala yang berkaitan langsung dengan pemadaman listrik (PLN) dan air (PDAM) bukan tanggung jawab management villa."
    ]
  },
  kusuma: {
    name: "BABOO VILLA KUSUMA",
    img: "/villa/kusuma/kusuma10.webp",
    gallery: [
      "/villa/kusuma/kusuma0.webp",
      "/villa/kusuma/kusuma12.webp",
      "/villa/kusuma/kusuma13.webp",
      "/villa/kusuma/kusuma3.webp",
      "/villa/kusuma/kusuma2.webp",
      "/villa/kusuma/kusuma1.webp",
      "/villa/kusuma/kusuma5.webp",
      "/villa/kusuma/kusuma11.webp",
      "/villa/kusuma/kusuma4.webp",
      "/villa/kusuma/kusuma9.webp",
      "/villa/kusuma/kusuma6.webp",
      "/villa/kusuma/kusuma7.webp",
      "/villa/kusuma/kusuma8.webp",
      "/villa/kusuma/kusuma14.webp",
    ],
    description: '"Baboo Villa Kusuma menghadirkan hunian eksklusif dengan kemewahan untuk momen relaksasi tanpa batas."',
    specs: [
      { label: "2 Lantai", icon: <Layers size={16} /> },
      { label: "3 Kamar Tidur", icon: <Bed size={16} /> },
      { label: "2 Kamar Mandi", icon: <Bath size={16} /> },
      { label: "All Queen Size Bed", icon: <Bed size={16} /> },
      { label: "Kitchen Set", icon: <ChefHat size={16} /> },
      { label: 'Samsung Smart TV', icon: <Tv size={16} /> },
      { label: "Speaker + Karaoke", icon: <Music size={16} /> },
      { label: "Water Heater", icon: <Thermometer size={16} /> },
      { label: "Free Wi-Fi", icon: <FiWifi size={16} /> },
      { label: "Carport Mobil", icon: <Car size={16} /> },
      { label: "Standing Hanger", icon: <Box size={16} /> },
      { label: "Lemari Pakaian", icon: <Shirt size={16} /> },
      { label: "Meja Makan", icon: <Utensils size={16} /> },
      { label: "Peralatan Memasak & Grill Pan", icon: <ChefHat size={16} /> },
      { label: "Balkon Minimalis", icon: <LuHouse size={16} /> },
      { label: "Lingkungan Ekslusif", icon: <LuHouse size={16} /> },
    ],
    points: ["4 Menit ke Museum Angkut", "4 Menit ke Kusuma Agro Wisata", "5 Menit ke Jatim Park 1 dan Bukit Bintang", "8 Menit ke Alun-Alun Kota Batu", "10 Menit ke Jatim Park 2 dan BNS"],
    priceWeekday: "450 Ribu",
    priceWeekend: "750 Ribu",
    address: "Grand Kusuma Hills A-11, Ngaglik, Kota Batu.",
    notes: [
      "Kapasitas max Baboo Vila 7 orang dewasa, jika lebih maka akan dikenakan biaya tambahan 40k/orang.",
      "Anak-anak di atas 5 tahun terhitung orang dewasa.",
      "Harga weekend juga berlaku untuk hari libur nasional.",
      "Check-in jam 14.00 dan Check-out max 11.00.",
"Kendala yang berkaitan langsung dengan pemadaman listrik (PLN) dan air (PDAM) bukan tanggung jawab management villa."
    ]
  },
};

export default function VillaDetail() {
  const [activeTab, setActiveTab] = useState<"kusuma" | "pesona">("pesona");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  const handleWhatsapp = () => {
    const villaName = activeTab === "pesona" ? "Baboo Villa Pesona" : "Baboo Villa Kusuma";
    const message = encodeURIComponent(`Halo kak, bisa tau informasi jadwal ketersediaan tentang ${villaName}?`);
    window.open(`https://wa.me/6285852237843?text=${message}`, "_blank");
  };

  const currentVilla = villaData[activeTab];

  // Handler untuk navigasi gallery
  const handleNextGallery = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % currentVilla.gallery.length);
  };

  const handlePrevGallery = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + currentVilla.gallery.length) % currentVilla.gallery.length);
  };

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

  // Reset gallery index saat tab berubah
  useEffect(() => {
    setCurrentGalleryIndex(0);
    setShowAllGallery(false);
  }, [activeTab]);

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
          <div className="relative w-full max-w-4xl h-[85vh]">
            <Image
              src={getOptimizedImage(currentVilla.img, "gallery")}
              alt={currentVilla.name}
              fill
              priority
              sizes={getImageSizes("gallery")}
              quality={75}
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      )}

      {/* ========================= */}
      {/* GALLERY MODAL (SLIDER) */}
      {/* ========================= */}
      {showAllGallery && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setShowAllGallery(false)}
        >
          <button 
            className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform duration-300 z-10"
            onClick={() => setShowAllGallery(false)}
          >
            <X size={40} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevGallery();
            }}
            className="absolute left-4 md:left-10 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white transition-all"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextGallery();
            }}
            className="absolute right-4 md:right-10 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white transition-all"
          >
            <ChevronRight size={32} />
          </button>

          {/* Main Image */}
          <div className="relative max-w-5xl w-full h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={getOptimizedImage(currentVilla.gallery[currentGalleryIndex], "gallery")} 
              alt={`Gallery ${currentGalleryIndex + 1}`}
              fill
              className="rounded-2xl shadow-2xl object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4 py-2">
            {currentVilla.gallery.map((img, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrentGalleryIndex(i); }}
                className={cn(
                  "relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all",
                  currentGalleryIndex === i ? "ring-2 ring-white scale-110" : "opacity-50 hover:opacity-100"
                )}
              >
                <Image src={getOptimizedImage(img, "thumbnail")} alt={`Thumb ${i + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col items-center mb-10 text-center">
        <h3 className={cn("mb-2 font-bold text-[#495C29] text-sm md:text-base transition-all duration-700 ease-out", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Property Breakdown
        </h3>
        <h2 className={cn("mb-15 font-bold text-slate-900 text-3xl md:text-5xl tracking-tight transition-all duration-700 ease-out delay-150", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Vibes-nya Dapet, Spek-nya Jelas ✨
        </h2>

        <div className={cn("flex justify-center items-center gap-12 md:gap-20 border-zinc-200 border-b w-full max-w-2xl transition-all duration-700 delay-300", isVisible ? "opacity-100" : "opacity-0")}>
          {["pesona", "kusuma"].map((tab) => (
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
            className="relative shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-3xl overflow-hidden cursor-zoom-in h-[350px] md:h-[500px] min-h-[350px]"
    onClick={() => setSelectedImg(currentVilla.img)}
          >
            <Image 
              src={getOptimizedImage(currentVilla.img, "gallery")} 
              alt={currentVilla.name} 
              fill
              priority
              sizes={getImageSizes("gallery")}
              className="object-cover hover:scale-105 transition-transform duration-700" 
            />
            <div className="bottom-0 absolute inset-x-0 bg-gradient-to-t from-[#495C29]/80 to-transparent opacity-80 h-32 pointer-events-none" />
            <div className="top-8 right-10 absolute bg-[#495C29]/90 shadow-sm backdrop-blur-md px-4 py-1.5 rounded-full font-bold text-[10px] text-white tracking-wide">Cek Ketersediaan</div>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-6">
            {currentVilla.gallery.slice(0, 2).map((img, i) => (
              <div 
                key={i} 
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm cursor-zoom-in group"
                onClick={() => setSelectedImg(img)}
              >
                <Image
                  src={getOptimizedImage(img, "thumbnail")}
                  alt={`${currentVilla.name} Gallery ${i + 1}`}
                  fill
                  sizes={getImageSizes("thumbnail")}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
            
            {/* More Button */}
            <button
              onClick={() => setShowAllGallery(true)}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-zinc-900/80 hover:bg-zinc-900/90 flex flex-col items-center justify-center gap-2 transition-all group"
            >
              <span className="text-white text-2xl font-bold">+{currentVilla.gallery.length - 2}</span>
              <span className="text-white text-xs font-medium">Lihat Semua</span>
            </button>
          </div>
        </div>

        {/* MIDDLE: SPECS (GRID 2 KOLOM) */}
        <div className="flex flex-col lg:col-span-4 lg:pt-4">
          <h4 className="mb-3 font-bold text-zinc-900 text-lg">Fasilitas Unit</h4>
          <p className="mb-6 text-[13px] text-zinc-500 italic leading-relaxed">{currentVilla.description}</p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            {currentVilla.specs.map((spec, i) => (
              <div key={i} className="flex items-center gap-2.5 pb-2 border-zinc-100 border-b">
                <div className="text-[#495C29] bg-[#EEF3E8] p-1.5 rounded-lg shrink-0">
                  {spec.icon}
                </div>
                <span className="font-semibold text-zinc-700 text-xs truncate leading-tight">{spec.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h4 className="mb-4 font-bold text-[#495C29] text-sm uppercase tracking-wide">Point Plus</h4>
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

        {/* RIGHT: PRICING (WEEKDAY & WEEKEND) & CTA */}
        <div className="flex flex-col justify-between gap-6 lg:col-span-3 lg:pt-4">
          <div className="flex flex-col gap-3">
            {/* HARGA CARD */}
            <div className="flex flex-col items-start bg-[#EEF3E8] shadow-sm p-5 md:p-6 rounded-2xl">
              <p className="font-bold text-zinc-700 text-xs mb-3">Informasi Harga</p>
              
              <div className="flex justify-between items-center w-full border-zinc-200/60 border-b pb-2.5 mb-2.5">
                <span className="font-medium text-zinc-500 text-xs">Weekday</span>
                <div className="text-right">
                  <span className="font-extrabold text-[#495C29] text-base">Rp {currentVilla.priceWeekday}</span>
                  <span className="text-[10px] text-zinc-400 block -mt-0.5">/ malam</span>
                </div>
              </div>

              <div className="flex justify-between items-center w-full">
                <span className="font-medium text-zinc-500 text-xs">Weekend / Libur</span>
                <div className="text-right">
                  <span className="font-extrabold text-[#495C29] text-base">Rp {currentVilla.priceWeekend}</span>
                  <span className="text-[10px] text-zinc-400 block -mt-0.5">/ malam</span>
                </div>
              </div>

              <button className="bg-white/80 hover:bg-white mt-4 w-full py-2 rounded-full font-bold text-[#495C29] text-[11px] shadow-sm transition-colors text-center">
                Dapatkan promo
              </button>
            </div>
            <p className="px-2 font-medium text-[10px] text-zinc-400 mb-1">*Syarat & ketentuan berlaku</p>

            {/* ADDRESS CARD */}
            <div className="bg-white border border-zinc-100 shadow-sm p-4 rounded-2xl flex items-start gap-3">
              <MapPin size={20} className="text-[#495C29] shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-bold text-zinc-800 text-xs mb-1">Alamat</span>
                <span className="text-zinc-500 text-[11px] leading-relaxed">
                  {currentVilla.address}
                </span>
              </div>
            </div>

            {/* NOTES CARD */}
            <div className="bg-amber-50/70 border border-amber-100/80 p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Info size={16} className="text-amber-600" />
                <span className="font-bold text-amber-900 text-xs">Catatan Penting</span>
              </div>
              <ul className="text-amber-800/90 text-[11px] space-y-2 list-none">
                {currentVilla.notes.map((note, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-amber-500 mt-0.5">•</span> 
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
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