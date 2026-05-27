"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // --- FUNGSI YANG DIPERBARUI ---
  const scrollToTop = () => {
    // 1. Scroll mulus ke atas
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // 2. Menghapus hash (#endorsement, #about, dll) dari URL tanpa me-refresh halaman
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "right-8 bottom-8 z-[90] fixed flex justify-center items-center bg-[#495C29] hover:bg-[#3d4d22] shadow-lg rounded-full focus:outline-none w-12 h-12 text-white hover:scale-110 active:scale-95 transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none",
      )}
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} strokeWidth={2.5} />
    </button>
  );
}
