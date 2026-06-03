"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Testimonial() {
  return (
    <section className="bg-[#F7F8F6] py-24 px-6 overflow-hidden">

      {/* ================= TOP IMAGE GRID ================= */}
      <div className="mx-auto mb-20 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "overflow-hidden rounded-2xl shadow-md",
                i % 2 === 0 ? "h-[220px]" : "h-[260px]"
              )}
            >
              <Image
                src={`/t${i + 1}.jpg`}
                alt="Gallery"
                width={400}
                height={500}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= HEADER ================= */}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <p className="mb-4 font-semibold text-[#495C29] text-sm">
          Testimonial
        </p>

        <h2 className="mb-6 font-bold text-4xl md:text-6xl text-slate-900 leading-tight">
          Apa kata mereka tentang{" "}
          <span className="text-[#495C29]">Baboo Villa</span>
        </h2>

        <p className="text-zinc-500 text-lg">
          Bergabunglah dengan puluhan orang yang sudah menikmati pengalaman dengan kami
        </p>
      </div>

      {/* ================= TESTIMONIAL CONTENT ================= */}
      <div className="mx-auto grid lg:grid-cols-[320px_1fr] gap-12 max-w-7xl">

        {/* LEFT QUOTE */}
        <div>
          <div className="text-[140px] text-[#495C29]/20 leading-none">“</div>
          <h3 className="mt-6 font-bold text-4xl text-slate-900 leading-tight">
            What our <br />
            customers are <br />
            Saying
          </h3>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            text="Sesuai banget sama jargonnya, beneran NYAMAN! Udara sejuk dan pemandangan luar biasa."
            name="Hendra Wijaya"
            image="/avatar1.jpg"
          />
          <TestimonialCard
            text="Proses reservasi simpel banget dan pelayanan sangat profesional."
            name="Budi Santoso"
            image="/avatar2.jpg"
          />
          <TestimonialCard
            text="Tempat pelarian sempurna. Interior modern dan estetik banget."
            name="Amalia & Rian"
            image="/avatar3.jpg"
          />
        </div>
      </div>

      {/* ================= CAROUSEL ================= */}
      <PropertyCarousel />

    </section>
  );
}

/* ================= TESTIMONIAL CARD ================= */

function TestimonialCard({
  text,
  name,
  image,
}: {
  text: string;
  name: string;
  image: string;
}) {
  return (
    <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300">
      <p className="text-zinc-600 text-sm leading-relaxed mb-8">{text}</p>

      <div className="flex items-center gap-4 pt-6 border-t border-zinc-100">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-full w-12 h-12 object-cover"
        />

        <div>
          <p className="font-bold text-slate-900">{name}</p>
          <div className="flex gap-1 mt-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= PROPERTY CAROUSEL ================= */

function PropertyCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const properties = [
    { img: "/villa1.jpg", location: "Tokyo, Japan", price: "$3,500/mo" },
    { img: "/villa2.jpg", location: "Barcelona, Spain", price: "$1,200/mo" },
    { img: "/villa3.jpg", location: "Rome, Italy", price: "$1,300/mo" },
    { img: "/villa4.jpg", location: "Dubai, UAE", price: "$2,800/mo" },
  ];

  useEffect(() => {
    if (!scrollRef.current) return;
    centerCard(activeIndex);
  }, []);

  const centerCard = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const target = container.children[index] as HTMLElement;

    if (!target) return;

    const scrollPosition =
      target.offsetLeft -
      (container.clientWidth - target.clientWidth) / 2;

    container.scrollTo({ left: scrollPosition, behavior: "smooth" });
  };

  const scrollToCard = (index: number) => {
    setActiveIndex(index);
    centerCard(index);
  };

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

  return (
    <div className="mt-28">

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-0 justify-center scrollbar-hide"
      >
        {properties.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              onClick={() => scrollToCard(index)}
              className={cn(
                "relative snap-center shrink-0 cursor-pointer rounded-3xl overflow-hidden transition-all duration-500",
                isActive
                  ? "w-[300px] h-[420px] scale-100 opacity-100 shadow-xl"
                  : "w-[260px] h-[380px] scale-95 opacity-70"
              )}
            >
              <Image
                src={item.img}
                alt={item.location}
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm opacity-80">{item.location}</p>
                <h4 className="font-bold text-lg">{item.price}</h4>
              </div>
            </div>
          );
        })}
      </div>

      {/* CONTROLS */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
          className="bg-white shadow-md rounded-full w-12 h-12 flex items-center justify-center"
        >
          <ChevronLeft />
        </button>

        <div className="flex gap-2">
          {properties.map((_, index) => (
            <div
              key={index}
              onClick={() => scrollToCard(index)}
              className={cn(
                "h-2 rounded-full transition-all cursor-pointer",
                activeIndex === index
                  ? "w-8 bg-[#495C29]"
                  : "w-2 bg-zinc-300"
              )}
            />
          ))}
        </div>

        <button
          onClick={() =>
            scrollToCard(Math.min(properties.length - 1, activeIndex + 1))
          }
          className="bg-white shadow-md rounded-full w-12 h-12 flex items-center justify-center"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}