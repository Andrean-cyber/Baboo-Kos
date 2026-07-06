"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "promoClosedAt";
const TWO_DAYS_MS = 2 * 24 * 60 * 60 * 1000; // 2 hari
const OPEN_DELAY_MS = 1200; // delay sebelum pop-up muncul
const DRAG_CLICK_THRESHOLD = 6; // px, batas geser sebelum dianggap "drag" bukan "klik"

const WIDGET_WIDTH = 168; // lebar widget

// ⚠️ Ganti angka ini sesuai dimensi ASLI file promo.webp kamu (lebar x tinggi).
// Ini penting supaya gambar tidak "letterbox" dan menyisakan area kosong putih.
const IMAGE_NATURAL_WIDTH = 422;
const IMAGE_NATURAL_HEIGHT = 652;
const WIDGET_HEIGHT = Math.round(
  WIDGET_WIDTH * (IMAGE_NATURAL_HEIGHT / IMAGE_NATURAL_WIDTH),
);

const EDGE_MARGIN = 12; // jarak minimum dari tepi layar

export default function PopUpPromo() {
  const [isOpen, setIsOpen] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const dragState = useRef({
    dragging: false,
    startClientX: 0,
    startClientY: 0,
    startX: 0,
    startY: 0,
    moved: 0,
  });

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
      // Posisi awal: pojok kanan bawah
      if (typeof window !== "undefined") {
        setPos({
          x: window.innerWidth - WIDGET_WIDTH - EDGE_MARGIN,
          y: window.innerHeight - WIDGET_HEIGHT - EDGE_MARGIN - 72, // sedikit di atas bottom nav
        });
      }
      setIsOpen(true);
    }, OPEN_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  };

  const clamp = (value: number, size: number, viewportSize: number) => {
    const min = EDGE_MARGIN;
    const max = viewportSize - size - EDGE_MARGIN;
    return Math.min(Math.max(value, min), Math.max(min, max));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (!pos) return;
    dragState.current.dragging = true;
    dragState.current.startClientX = e.clientX;
    dragState.current.startClientY = e.clientY;
    dragState.current.startX = pos.x;
    dragState.current.startY = pos.y;
    dragState.current.moved = 0;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragState.current.dragging) return;
    const deltaX = e.clientX - dragState.current.startClientX;
    const deltaY = e.clientY - dragState.current.startClientY;
    dragState.current.moved = Math.max(
      dragState.current.moved,
      Math.hypot(deltaX, deltaY),
    );

    if (typeof window === "undefined") return;
    setPos({
      x: clamp(dragState.current.startX + deltaX, WIDGET_WIDTH, window.innerWidth),
      y: clamp(dragState.current.startY + deltaY, WIDGET_HEIGHT, window.innerHeight),
    });
  };

  const onPointerUp = () => {
    dragState.current.dragging = false;
  };

  // Cegah klik/navigasi terpicu kalau user sedang menggeser widget
  const onClickCapture = (e: React.MouseEvent) => {
    if (dragState.current.moved > DRAG_CLICK_THRESHOLD) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  if (!isOpen || !pos) return null;

  return (
    <div
      className="fixed z-50 select-none touch-none animate-pulse-soft"
      style={{ left: pos.x, top: pos.y, width: WIDGET_WIDTH }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="dialog"
      aria-label="Popup Promo"
    >
      <div
        className={cn(
          "relative cursor-grab active:cursor-grabbing",
          "animate-in fade-in zoom-in-95 duration-300",
        )}
      >
        {/* Tombol close */}
        <button
          onClick={handleClose}
          aria-label="Tutup popup"
          className="absolute -right-2 -top-2 z-10 rounded-full bg-white p-1 shadow-md hover:bg-gray-100 transition-colors"
        >
          <X className="h-4 w-4 text-gray-700" />
        </button>

        {/* Gambar promo, klik akan mengarah ke /simulation (kecuali sedang digeser) */}
        <Link
          href="/simulation"
          onClick={onClickCapture}
          className="block leading-none"
          draggable={false}
        >
          <Image
            src="/promo.webp"
            alt="Promo"
            width={IMAGE_NATURAL_WIDTH}
            height={IMAGE_NATURAL_HEIGHT}
            className="w-full h-auto pointer-events-none select-none"
            priority
          />
        </Link>
      </div>
    </div>
  );
}
