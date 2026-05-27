"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleWhatsapp = () => {
    const message = encodeURIComponent("Halo kak, bisa tau informasi lebih lanjut tentang Baboo Kos?");

    window.open(`https://wa.me/6287785338441?text=${message}`, "_blank");
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
    { name: "About", href: "/#about" },
    { name: "Endorsement", href: "/#endorsement" },
    { name: "Career", href: "/career" },
    { name: "Contact us", href: "/#contact" },
  ];

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
            "flex justify-between items-center h-16 transition-all duration-500 ease-out pointer-events-auto",
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
              <img src="/babookos.png" alt="Baboo Kos Logo" className="w-auto h-7 md:h-10 object-contain" />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="font-bold text-[14px] text-zinc-600 hover:text-[#495C29] transition-all duration-300">
                  {link.name}
                </Link>
              ))}
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
              
              Booking →
              
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
                <button className="bg-[#495C29] shadow-lg rounded-full h-14 font-bold text-[15px] text-white active:scale-[0.98] transition-transform">Booking Now</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
