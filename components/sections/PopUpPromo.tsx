"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "promoClosedAt";
const TWO_DAYS_MS = 2 * 24 * 60 * 60 * 1000; // 2 hari
const OPEN_DELAY_MS = 1200; // delay sebelum pop-up muncul

export default function PopUpPromo() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isDev = process.env.NODE_ENV === "development";

    // Saat development, aturan "sekali per 2 hari" di-skip supaya
    // developer bisa lihat popup tiap reload tanpa hapus localStorage manual.
    // Saat production (build/deploy), aturan 2 hari otomatis aktif lagi.
    if (!isDev) {
      const lastClosed = localStorage.getItem(STORAGE_KEY);
      const now = Date.now();

      if (lastClosed && now - Number(lastClosed) < TWO_DAYS_MS) {
        return; // belum lewat 2 hari sejak terakhir ditutup, jangan tampilkan
      }
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, OPEN_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  };

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        "bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
      )}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Popup Promo"
    >
      {/* Wrapper TANPA bg-white / rounded-2xl, supaya gambar transparan tidak tertutup kotak putih */}
      <div
        className="relative w-full max-w-md animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol close */}
        <button
          onClick={handleClose}
          aria-label="Tutup popup"
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-1.5 shadow hover:bg-white transition-colors"
        >
          <X className="h-5 w-5 text-gray-700" />
        </button>

        {/* Gambar promo, klik akan mengarah ke /simulation */}
        <Link href="/simulation" onClick={handleClose} className="block">
          <Image
            src="/promo.webp"
            alt="Promo"
            width={500}
            height={600}
            className="w-full h-auto object-contain drop-shadow-2xl cursor-pointer"
            priority
          />
        </Link>
      </div>
    </div>
  );
}
