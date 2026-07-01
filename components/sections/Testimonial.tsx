"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { getOptimizedImage, getImageSizes } from "@/lib/imageUtils";

export default function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  // ✅ TAMBAHAN UNTUK ANIMASI HEADER
  const [isVisible, setIsVisible] = useState(false);

  // ✅ START dari gambar 10 (index 9)
  const [activeIndex, setActiveIndex] = useState(9);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const properties = Array.from({ length: 15 }).map((_, i) => ({
    img: `/testimoni/kos/Testimoni - PRAT 3 - Testimoni - ${i + 1}.webp`,
  }));

  /* ================= CENTER HELPER ================= */
  const centerCard = (index: number, smooth = true) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const target = container.children[index] as HTMLElement;
    if (!target) return;

    const scrollPosition =
      target.offsetLeft -
      (container.clientWidth - target.clientWidth) / 2;

    container.scrollTo({
      left: scrollPosition,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  /* ================= INITIAL POSITION ================= */
  useEffect(() => {
    centerCard(9, false);
  }, []);

  /* ================= ANIMASI MASUK SECTION ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // ✅ animasi header
          setIsVisible(true);

          // ✅ animasi carousel
          setTimeout(() => {
            setActiveIndex(2);
            centerCard(2, true);
          }, 600);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  /* ================= DETECT CENTER ================= */
  const handleScroll = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const center = container.scrollLeft + container.clientWidth / 2;

    let closest = 0;
    let minDist = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const el = child as HTMLElement;
      const childCenter = el.offsetLeft + el.clientWidth / 2;
      const dist = Math.abs(center - childCenter);

      if (dist < minDist) {
        minDist = dist;
        closest = index;
      }
    });

    setActiveIndex(closest);
  };

  /* ================= ARROWS ================= */
  const scrollToCard = (index: number) => {
    const safeIndex = Math.max(
      0,
      Math.min(properties.length - 1, index)
    );
    setActiveIndex(safeIndex);
    centerCard(safeIndex);
  };

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center py-16 md:py-24 w-full overflow-hidden"
    >

      {/* ✅ HEADER DITAMBAHKAN DI ATAS CAROUSEL */}
      <div className="flex flex-col items-center mb-12 px-6 text-center max-w-4xl">

        <h3
          className={cn(
            "mb-2 font-bold text-[#495C29] text-sm md:text-base transition-all duration-700 ease-out",
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          )}
        >
          Testimonial
        </h3>

        <h2
          className={cn(
            "mb-4 font-bold text-slate-900 text-3xl md:text-4xl lg:text-5xl tracking-tight transition-all duration-700 ease-out delay-150",
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          )}
        >
          How did they{" "}
          <span className="text-[#495C29]">Experience</span>
        </h2>

        <p
          className={cn(
            "font-medium text-zinc-500 text-sm md:text-base transition-all duration-700 ease-out delay-300",
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          )}
        >
          Bergabunglah dengan puluhan orang yang sudah menikmati pengalaman dengan kami
        </p>

      </div>

      {/* ================= CAROUSEL ================= */}
      <div className="relative w-full">

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex items-center gap-6 overflow-x-auto snap-x snap-mandatory px-6 scrollbar-hide"
        >
          {properties.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onClick={() => {
                  scrollToCard(index);
                  setPreviewImage(item.img);
                }}
                // Pastikan "relative" ada di sini sebagai class utama
                className={cn(
                  "relative snap-center shrink-0 rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer",
                  isActive
                    ? "w-[300px] h-[420px] scale-100 opacity-100 shadow-xl"
                    : "w-[250px] h-[360px] scale-95 opacity-60"
                )}
              >
                <Image
                  src={getOptimizedImage(item.img, "gallery")}
                  alt={`Testimoni ${index + 1}`}
                  fill
                  // Tambahkan priority hanya pada gambar yang benar-benar ada di posisi pertama
                  // Dan hapus loading="eager" secara manual, karena priority sudah otomatis menjadikannya eager
                  priority={index === 9} // Karena Anda memulai dengan activeIndex 9, prioritaskan gambar ini
                  sizes={getImageSizes("gallery")}
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>

        {/* ================= CONTROLS ================= */}
        <div className="shrink-0 flex justify-center items-center gap-6 mt-8">

          <button
            onClick={() => scrollToCard(activeIndex - 1)}
            className="shrink-0 flex justify-center items-center bg-[#EEF3E8] hover:bg-[#dce3d4] shadow-sm rounded-full w-12 h-12 text-[#495C29]"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex md:hidden items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => {
              const current = Math.floor((activeIndex / (properties.length - 1)) * 4);

              return (
                <div
                  key={i}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    current === i ? "bg-[#495C29]" : "bg-zinc-300"
                  )}
                />
              );
            })}
          </div>

          <button
            onClick={() => scrollToCard(activeIndex + 1)}
            className="shrink-0 flex justify-center items-center bg-[#EEF3E8] hover:bg-[#dce3d4] shadow-sm rounded-full w-12 h-12 text-[#495C29]"
          >
            <ChevronRight size={24} />
          </button>

        </div>
      </div>
      {/* ================= PREVIEW MODAL ================= */}
      {previewImage && (
              <div onClick={() => setPreviewImage(null)} className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
                <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center">
                  <Image
                    src={getOptimizedImage(
                      previewImage,
                      "fullscreen"
                    )}
                    alt="Preview"
                    fill
                    sizes="90vw"
                    quality={80}
                    className="object-contain"
                  />
                  <button onClick={() => setPreviewImage(null)} className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-full w-10 h-10 flex items-center justify-center text-black font-bold shadow-md z-10">✕</button>
                </div>
              </div>
            )}
    </section>
  );
}