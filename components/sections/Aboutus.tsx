"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function AboutUs() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
 <section
  ref={sectionRef}
  className="relative mx-auto mt-0 flex w-full max-w-[1400px] flex-col items-center overflow-hidden bg-[#FAFBFA] px-6 pt-16 pb-10 md:px-6 md:pt-20 md:pb-16"
>
      {/* INTRO TEXT */}
      <div className="z-10 relative flex flex-col items-center mb-4 md:mb-6 w-full text-center">
        <h2
          className={cn(
            "mb-4 max-w-4xl font-bold text-slate-900 text-2xl md:text-4xl lg:text-5xl tracking-tight transition-[transform,opacity] duration-700 ease-out delay-150",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          About Us
        </h2>
      </div>

      {/* Body Text */}
      <div
        className={cn(
          "max-w-5xl text-justify hyphens-auto text-sm leading-6 text-zinc-600 transition-all duration-700 delay-300 md:text-center md:text-[16px] md:leading-8 md:hyphens-none",
          "[&_strong]:font-semibold",
          "[&_strong]:text-zinc-900",
          "[&_em]:italic",
          "[&_em]:text-[#495C29]",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        )}
      >
        <p>
          Jujur, nyari kosan yang pas itu sering bikin{" "}
          <strong>boncos energi</strong>, waktu, plus emosi. Harus
          mondar-mandir ngecek lokasi di bawah terik matahari, belum lagi
          kalau dapet yang <em>zonk</em> atau harganya gak ngotak.{" "}
          <em>We totally feel you!</em> Berawal di tahun 2021 dari kota
          Malang, Baboo Kos lahir buat jadi <em>support system</em> utama
          kamu biar bisa nge-<em>skip</em> semua drama itu.
        </p>

        <br />

        <p>
          Dari yang dulunya cuma main di area lokal, sekarang kita udah{" "}
          <em>level up</em> untuk melayani seluruh Indonesia. Konsep kita
          simpel: kamu tinggal <em>spill</em> kriteria dan budget, kita yang
          bakal <em>sat-set</em> cariin <em>dream kos</em> kamu sampai dapet
          yang sesuai <em>request</em> kamu. Gak cuma bantuin para pencari
          kos (<em>hi, Baboo Bestie!</em>), kita juga jadi partner andalan
          para pemilik kos buat nge-<em>boost</em> properti mereka lewat
          strategi promosi digital yang <em>hype</em>. So, mau nyari tempat
          rebahan ternyaman atau mau kosanmu cepet <em>sold out</em>?
          Serahin semuanya ke Baboo Kos!
        </p>
      </div>
    </section>
  );
}