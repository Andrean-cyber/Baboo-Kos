"use client";

import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Headset} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";


export default function Navbar() {
  const pathname = usePathname();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      exploreRef.current &&
      !exploreRef.current.contains(event.target as Node)
    ) {
      setIsExploreOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  const getWhatsappConfig = () => {
  if (pathname.startsWith("/villa")) {
    return {
      phone: "6285852237843",
      message:
        "Halo kak, saya ingin mendapatkan informasi lebih lanjut tentang Baboo Villa."
    };
  }

  if (pathname.startsWith("/career")) {
    return {
      phone: "6285111203894",
      message:
        "Halo kak, saya ingin mendapatkan informasi mengenai karir di Baboo."
    };
  }

  if (pathname.startsWith("/simulation")) {
    return {
      phone: "6285178476086",
      message:
        "Halo kak, saya ingin mendapatkan informasi mengenai Partnership Baboo."
    };
  }

  return {
    phone: "6287785338441",
    message:
      "Halo kak, saya ingin mendapatkan informasi lebih lanjut tentang Baboo Kos."
  };
};

  const getBookingLabel = () => {
    if (pathname.startsWith("/villa")) return "Reservasi →";
    if (pathname.startsWith("/career")) return "Tanya HRD →";
    if (pathname.startsWith("/simulation")) return "Tanya Marketing →";
    if (pathname.startsWith("/aboutus")) return (
      <div className="flex items-center gap-2">
        <Headset size={18} />
        <span>Support →</span>
      </div>
    );
    return "Cari Kos →";
  };

const handleWhatsapp = () => {
  const config = getWhatsappConfig();

  window.open(
    `https://wa.me/${config.phone}?text=${encodeURIComponent(
      config.message
    )}`,
    "_blank"
  );
};

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Baboo Kos", href: "/" },
    { name: "Baboo Villa", href: "/villa" },
    { name: "Partnership", href: "/simulation" },
    { name: "Career", href: "/career" },
    { name: "About Us", href: "/aboutus" },
  ];

  // Cek apakah user sedang berada di halaman sub-page
  const isSubPage = 
    pathname.startsWith("/villa") || 
    pathname.startsWith("/simulation") || 
    pathname.startsWith("/career") || 
    pathname.startsWith("/aboutus") ||
    pathname.startsWith("/serviceCustomer") ||
    pathname.startsWith("/syaratKetentuan") ||
    pathname.startsWith("/privacyPolicy") ||
    pathname.startsWith("/handbookAnakRantau") ||
    pathname.startsWith("/tipsCariKos") ||
    pathname.startsWith("/panduanCariKos"); 

  // Cek apakah sedang di homepage
  const isHomePage = pathname === "/" || pathname === "/#home";

  // Tentukan apakah harus menampilkan semua menu horizontal
  const showAllMenusHorizontal = isSubPage || (isHomePage && isScrolled);

  return (
    <>
      {/* ========================= */}
      {/* NAVBAR */}
      {/* ========================= */}
      <nav className="top-0 z-[100] fixed inset-x-0 flex justify-center pt-4 md:pt-6 pointer-events-none">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={cn(
            "flex justify-between items-center h-16 transition-all duration-500 ease-out pointer-events-auto relative",
            isScrolled
              ? "w-[95%] max-w-5xl rounded-full border border-white/40 bg-white/80 px-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl md:px-8"
              : "w-full max-w-[1280px] rounded-full border border-transparent bg-transparent px-5 shadow-none md:px-8 lg:px-12",
          )}
        >
          {/* ========================= */}
          {/* LEFT */}
          {/* ========================= */}
          <div className="flex items-center gap-12 lg:gap-16">
            {/* LOGO */}
            <Link href="/" className="flex justify-center items-center bg-white/80 md:bg-transparent shadow-md md:shadow-none backdrop-blur-xl md:backdrop-blur-none p-2 md:p-0 border border-white/50 md:border-0 rounded-full md:rounded-none w-11 md:w-auto h-11 md:h-auto">
              <Image src="/babookos.png" alt="Baboo Kos Logo" width={120} height={40} priority className="w-auto h-7 md:h-10 object-contain" />
            </Link>

            {/* DESKTOP MENU - Menggunakan Posisi Dinamis */}
            <div 
              className={cn(
                "hidden md:flex items-center gap-2 lg:gap-4 transition-all duration-300",
                showAllMenusHorizontal
                  ? "absolute left-1/2 -translate-x-1/2 justify-center" 
                  : "justify-start"
              )}
            >
              {showAllMenusHorizontal ? (
                // TAMPILAN JIKA DI SUB-PAGE ATAU HOME SCROLLED (Semua Menu Sejajar)
                <>
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                          "rounded-full px-3 py-2 font-bold text-[14px] transition-all duration-300 whitespace-nowrap",
                          isActive
                            ? "bg-[#EEF3E8] text-[#495C29]"
                            : "text-zinc-600 hover:bg-[#EEF3E8] hover:text-[#495C29]"
                        )}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </>
              ) : (
                // TAMPILAN AWAL/DEFAULT (Menggunakan Dropdown Explore)
                <>
                  <Link
                    href="/"
                    className="rounded-full px-3 py-2 font-bold text-[14px] text-zinc-600 hover:bg-[#EEF3E8] hover:text-[#495C29] transition-all duration-300"
                  >
                    Baboo Kos
                  </Link>

                  <Link
                    href="/villa"
                    className="rounded-full px-3 py-2 font-bold text-[14px] text-zinc-600 hover:bg-[#EEF3E8] hover:text-[#495C29] transition-all duration-300"
                  >
                    Baboo Villa
                  </Link>

                  <Link
                    href="/simulation"
                    className="rounded-full px-3 py-2 font-bold text-[14px] text-zinc-600 hover:bg-[#EEF3E8] hover:text-[#495C29] transition-all duration-300"
                  >
                    Partnership
                  </Link>

                  {/* EXPLORE DROPDOWN */}
                  <div ref={exploreRef} className="relative">
                    <button
                      onClick={() => setIsExploreOpen(!isExploreOpen)}
                      className={cn(
                        "group flex items-center gap-2 rounded-full px-3 py-2 font-bold text-[14px] transition-all duration-300",
                        isExploreOpen
                          ? "bg-[#EEF3E8] text-[#495C29]"
                          : "text-zinc-600 hover:bg-[#EEF3E8] hover:text-[#495C29]"
                      )}
                    >
                      Explore

                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-transform duration-300",
                          isExploreOpen && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {isExploreOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.96 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full z-50 mt-3 w-[260px] overflow-hidden rounded-2xl border border-[#495C29]/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                        >
                          {/* MENU */}
                          <div className="p-2">
                            <Link
                              href="/career"
                              className="group flex items-center justify-between rounded-xl px-4 py-3 text-[14px] font-medium text-zinc-700 transition-all hover:bg-[#EEF3E8] hover:text-[#495C29]"
                            >
                              <span>Career</span>
                              <span className="opacity-0 transition-opacity group-hover:opacity-100">
                                →
                              </span>
                            </Link>

                            <Link
                              href="/aboutus"
                              className="group flex items-center justify-between rounded-xl px-4 py-3 text-[14px] font-medium text-zinc-700 transition-all hover:bg-[#EEF3E8] hover:text-[#495C29]"
                            >
                              <span>About Us</span>
                              <span className="opacity-0 transition-opacity group-hover:opacity-100">
                                →
                              </span>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ========================= */}
          {/* RIGHT */}
          {/* ========================= */}
          <div className="flex items-center gap-3">
            {/* DESKTOP BUTTON */}
            <button
              onClick={handleWhatsapp}
              className={cn(
                "hidden md:flex justify-center items-center bg-white/80 hover:bg-[#495C29] backdrop-blur-md px-8 py-3 border border-[#495C29]/20 rounded-full font-bold text-[#495C29] text-[15px] hover:text-white transition-all",
              )}
            >
              {getBookingLabel()}
            </button>

            {/* MOBILE HAMBURGER */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden flex justify-center items-center bg-white/80 shadow-md backdrop-blur-xl border border-white/50 rounded-full w-11 h-11">
              {isMobileMenuOpen ? <X size={22} className="text-zinc-900" /> : <Menu size={22} className="text-zinc-900" />}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* ========================= */}
      {/* MOBILE MENU */}
      {/* ========================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileMenuOpen(false)} className="z-[90] fixed inset-0 bg-black/30 backdrop-blur-sm" />

            {/* SHEET */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                type: "spring",
                damping: 22,
                stiffness: 180,
              }}
              className="bottom-0 z-[100] fixed inset-x-0 bg-white shadow-2xl p-8 pb-10 rounded-t-[2rem]"
            >
              <div className="flex flex-col gap-5 pt-2">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-[22px] text-zinc-900 hover:text-[#495C29] tracking-tight transition-colors">
                    {link.name}
                  </a>
                ))}

                {/* DIVIDER */}
                <div className="bg-zinc-200 my-2 w-full h-px" />

                {/* MOBILE BUTTON */}
                <button onClick={handleWhatsapp} className="bg-[#495C29] shadow-lg rounded-full h-14 font-bold text-[15px] text-white active:scale-[0.98] transition-transform">
                  {getBookingLabel()}
                </button>
                
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
