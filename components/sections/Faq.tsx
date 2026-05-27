"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

// FAQ DATA BARU
const faqData = [
  {
    question: "Apa itu Baboo Kos?",
    answer: "Baboo Kos adalah layanan pencarian kos yang membantu Anda menemukan hunian nyaman, strategis, dan sesuai kebutuhan dengan proses yang lebih praktis, cepat, dan terpercaya.",
  },
  {
    question: "Bagaimana cara kerja Baboo Kos?",
    answer: "Baboo Kos membantu pengguna menemukan pilihan kos terbaik melalui sistem pencarian yang mudah. Anda dapat melihat informasi kos, fasilitas, lokasi, hingga menghubungi owner atau tim kami untuk proses lebih lanjut.",
  },
  {
    question: "Di kota mana saja Baboo Kos tersedia?",
    answer: "Baboo Kos terus berkembang dan tersedia di berbagai kota besar serta area strategis. Informasi wilayah layanan akan terus diperbarui secara berkala.",
  },
  {
    question: "Apakah saya bisa memilih kos berdasarkan budget?",
    answer: "Tentu. Baboo Kos menyediakan berbagai pilihan kos dengan rentang harga yang beragam sehingga dapat disesuaikan dengan kebutuhan dan budget Anda.",
  },
];

export default function Faq() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const hasAnimated = useRef(false);
  const handleWhatsapp = () => {
    const message = encodeURIComponent("Halo kak, bisa tau informasi lebih lanjut tentang Baboo Kos?");

    window.open(`https://wa.me/6287785338441?text=${message}`, "_blank");
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
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className={cn("mx-auto", "flex", "w-full", "max-w-[1280px]", "flex-col", "overflow-hidden", "px-4", "py-16", "md:px-8", "md:py-24")}>
      <div className={cn("flex", "flex-col", "gap-10", "lg:flex-row", "lg:gap-12")}>
        {/* LEFT SIDE */}
        <div className={cn("flex", "w-full", "flex-col", "lg:w-[40%]")}>
          {/* SMALL TITLE */}
          <h3 className={cn("mb-2 font-bold text-[#495C29] text-sm transition-all duration-700 ease-out", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>FAQ</h3>

          {/* BIG TITLE */}
          <h2 className={cn("mb-8 font-bold text-zinc-900 text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight transition-all duration-700 ease-out delay-150", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
            Pertanyaan yang
            <br className="hidden md:block" />
            Sering Diajukan
          </h2>

          {/* CTA BOX */}
          <div
            className={cn("flex flex-col justify-between bg-[#495C29] shadow-sm p-6 md:p-8 rounded-[2rem] text-white transition-all duration-1000 ease-out delay-300", isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0")}
          >
            <div>
              <h4 className="mb-3 font-bold text-xl md:text-2xl">Masih ada pertanyaan lain?</h4>

              <p className="mb-8 font-normal text-zinc-200/80 text-xs md:text-sm leading-relaxed">Tidak menemukan jawaban yang Anda cari? Silakan hubungi tim kami untuk mendapatkan bantuan lebih lanjut.</p>
            </div>

            <button
              onClick={handleWhatsapp}
              className={cn("flex justify-center items-center bg-[#F3C546] py-3.5 rounded-full w-full font-bold text-[#495C29] text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300")}
            >
              Hubungi Kami
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={cn("flex", "w-full", "flex-col", "justify-start", "gap-4", "lg:w-[60%]", "lg:pt-4", "transition-all", "duration-1000", "delay-500", "ease-out", isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0")}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={cn(
                  "bg-[#F8FAFC] shadow-[0_4px_20px_rgba(0,0,0,0.01)] p-5 md:p-6 border border-zinc-100 rounded-[1.5rem] overflow-hidden transition-all duration-300",
                  isOpen && "border-zinc-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]",
                )}
              >
                {/* BUTTON */}
                <button onClick={() => toggleFaq(index)} className="flex justify-between items-center focus:outline-none w-full text-left">
                  <span className={cn("pr-4 font-bold text-zinc-900 text-sm md:text-base transition-colors duration-200")}>{item.question}</span>

                  {/* ICON */}
                  <div
                    className={cn(
                      "flex justify-center items-center bg-white border border-zinc-200 rounded-full w-8 h-8 text-zinc-400 transition-all duration-300 shrink-0",
                      isOpen && "rotate-180 border-[#495C29]/20 bg-[#EEF3E8] text-[#495C29]",
                    )}
                  >
                    <ChevronDown size={16} className="transition-transform duration-300" />
                  </div>
                </button>

                {/* ANSWER */}
                <div className={cn("grid transition-all duration-300 ease-in-out", isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <div className="overflow-hidden">
                    <p className={cn("pt-4 border-zinc-100 border-t font-medium text-zinc-500 text-sm leading-relaxed")}>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
