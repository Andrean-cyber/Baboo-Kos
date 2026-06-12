"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation"; 
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaWhatsapp, FaInstagram, FaTiktok, FaThreads } from "react-icons/fa6";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);
  const pathname = usePathname();
  
  const getFooterConfig = () => {
    if (pathname.startsWith("/villa")) {
      return {
        title: "A secret space, a gentle price, your hidden slice of paradise 🚀",
        phone: "6285852237843",
        message:
          "Halo kak,\n\nBisa tau informasi lebih lanjut tentang Baboo Villa?\nTerima kasih 🙏",
      };
    }

    return {
      title: "Cari Kos Tanpa Ribet,\nSesuai Budget 🥇",
      phone: "6287785338441",
      message:
        "Halo kak,\n\nBisa tau informasi lebih lanjut tentang Baboo Kos?\nTerima kasih 🙏",
    };
  };

  const footerConfig = getFooterConfig();
  const message = encodeURIComponent(footerConfig.message);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="bg-slate-50/50 px-4 md:px-6 pt-4 pb-4 md:pb-6 w-full">
      <footer ref={footerRef} className={cn("relative bg-[#495C29] shadow-lg mx-auto px-6 md:px-12 lg:px-16 pt-12 pb-8 md:pt-14 md:pb-8 rounded-3xl md:rounded-[2rem] w-full max-w-[1360px] overflow-hidden text-white")}>
        {/* ========================================================= */}
        {/* BACKGROUND ABSTRACT SVG                                   */}
        {/* ========================================================= */}
        <div className="top-0 left-1/2 absolute opacity-40 w-screen h-full -translate-x-1/2 pointer-events-none">
          <Image src="/line2.svg" alt="Abstract Background" fill className="object-cover" priority />
        </div>

        {/* ========================================================= */}
        {/* TOP SECTION: BANNER (Heading & CTA Button)                */}
        {/* ========================================================= */}
        <div className={cn("z-10 relative flex md:flex-row flex-col justify-between items-start md:items-center gap-6 pb-10 md:pb-12 border-white/20 border-b")}>
          <h2
            className={cn(
              "max-w-xl font-bold text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight transition-all duration-700 ease-out",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
          >
            {pathname.startsWith("/villa") ? (
              footerConfig.title
            ) : (
              <>
                Cari Kos Tanpa Ribet,
                <br />
                Sesuai Budget 🥇
              </>
            )}
          </h2>

          <a
            href={`https://wa.me/${footerConfig.phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "block bg-[#F3C546] shadow-md px-8 py-3.5 rounded-xl w-full md:w-auto font-bold text-zinc-900 text-sm text-center hover:scale-105 active:scale-95 transition-all duration-700 ease-out delay-150 shrink-0",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            Pesan Sekarang
          </a>
        </div>

        {/* ========================================================= */}
        {/* MIDDLE SECTION: LINKS & BRAND INFO                        */}
        {/* ========================================================= */}
        <div
          className={cn(
            "z-10 relative gap-10 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 pt-8 pb-10 transition-all duration-1000 ease-out delay-300 text-center lg:text-left border-white/10 border-b",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          )}
        >
          {/* Kolom 1 & 2 (Span 2): Tentang Brand */}
          <div className={cn("flex flex-col items-center lg:items-start gap-4 lg:col-span-2")}>
            <h4 className={cn("font-bold text-sm tracking-wide")}>About Baboo Kos</h4>
            <p className={cn("max-w-sm font-normal text-zinc-200/80 text-xs leading-relaxed")}>
              Platform pencarian kos yang menghadirkan pilihan hunian terbaik dengan kenyamanan, lokasi strategis, dan pengalaman mencari tempat tinggal yang praktis untuk keseharian Anda.
            </p>

            {/* Social Media Icons dengan Link Aktif */}
            <div className={cn("flex items-center justify-center lg:justify-start gap-5 mt-4 text-zinc-200")}>
              <a href="https://wa.me/6287785338441" target="_blank" rel="noopener noreferrer" className={cn("hover:text-[#F3C546] text-lg transition-colors")} aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://instagram.com/baboo_kos" target="_blank" rel="noopener noreferrer" className={cn("hover:text-[#F3C546] text-lg transition-colors")} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://tiktok.com/@baboo_kos" target="_blank" rel="noopener noreferrer" className={cn("hover:text-[#F3C546] text-lg transition-colors")} aria-label="TikTok">
                <FaTiktok />
              </a>
              <a href="https://threads.net/@baboo_kos" target="_blank" rel="noopener noreferrer" className={cn("hover:text-[#F3C546] text-lg transition-colors")} aria-label="Threads">
                <FaThreads />
              </a>
            </div>
          </div>

          {/* Kolom 3: Company Links */}
          <div className={cn("flex flex-col items-center lg:items-start gap-3")}>
            <h4 className={cn("font-bold text-sm tracking-wide")}>Company</h4>
            <ul className="flex flex-col gap-2.5 text-zinc-200/70 text-xs">
              <li>
                <Link href="/aboutus" className="hover:text-[#F3C546] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/simulation" className="hover:text-[#F3C546] transition-colors">
                  Partnership
                </Link>
              </li>
              <li>
                <Link href="/belum-tersedia" className="hover:text-[#F3C546] transition-colors">
                  Mitra Kos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F3C546] transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Help Links */}
          <div className={cn("flex flex-col gap-3 items-center lg:items-start")}>
            <h4 className={cn("font-bold text-sm tracking-wide")}>Help</h4>
            <ul className="flex flex-col gap-2.5 text-zinc-200/70 text-xs text-center lg:text-left">
              <li>
                <Link href="/belum-tersedia" className="hover:text-[#F3C546] transition-colors">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="/#alurJasa" className="hover:text-[#F3C546] transition-colors">
                  Alur Pencarian
                </Link>
              </li>
              <li>
                <Link href="/syaratKetentuan" className="hover:text-[#F3C546] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacyPolicy" className="hover:text-[#F3C546] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 5: Resources Links */}
          <div className={cn("flex flex-col gap-3 items-center lg:items-start")}>
            <h4 className={cn("font-bold text-sm tracking-wide")}>Resources</h4>
            <ul className="flex flex-col gap-2.5 text-zinc-200/70 text-xs text-center lg:text-left">
              <li>
                <Link href="/handbookAnakRantau" className="hover:text-[#F3C546] transition-colors">
                  Handbook Anak Rantau
                </Link>
              </li>
              <li>
                <Link href="/tipsCariKos" className="hover:text-[#F3C546] transition-colors">
                  Tips Cari Kos
                </Link>
              </li>
              <li>
                <Link href="/panduanCariKos" className="hover:text-[#F3C546] transition-colors">
                  Panduan Cari Kos
                </Link>
              </li>
              <li>
                <Link href="/belum-tersedia" className="hover:text-[#F3C546] transition-colors">
                  Blog & Berita
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM SECTION: COPYRIGHT                                 */}
        {/* ========================================================= */}
        <div className="z-10 relative pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-zinc-300/60 text-[11px] font-medium tracking-wide">
            &copy; 2026 Baboo Kos Platform. All Rights Reserved. Aman, Transparan, Nyaman.
          </p>
          <p className="text-zinc-300/40 text-[10px]">
            Designed with absolute transparency and mutual comfort ✨
          </p>
        </div>
      </footer>
    </section>
  );
}