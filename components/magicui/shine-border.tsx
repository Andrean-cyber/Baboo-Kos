"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Ketebalan border dalam pixel
   * @default 1.5
   */
  borderWidth?: number;
  /**
   * Durasi animasi dalam detik (semakin kecil semakin cepat)
   * @default 3
   */
  duration?: number;
  /**
   * Warna border, bisa berupa satu warna string atau array warna
   * @default ["#495C29", "#F3C546"]
   */
  shineColor?: string | string[];
}

/**
 * Shine Border (Conic Rotation)
 *
 * Efek animasi border melingkar mulus yang dapat disesuaikan.
 */
export function ShineBorder({
  borderWidth = 1.5,
  duration = 3, // Durasi 3 detik sangat pas untuk tombol Navbar
  shineColor = ["#495C29", "#F3C546"],
  className,
  style,
  ...props
}: ShineBorderProps) {
  
  // Membuat format warna untuk efek "ekor cahaya"
  const gradientColors = Array.isArray(shineColor)
    ? `transparent 40%, ${shineColor[0]} 70%, ${shineColor[1]} 100%`
    : `transparent 60%, ${shineColor} 100%`;

  return (
    <div
      style={{
        "--border-width": `${borderWidth}px`,
        // CSS Mask ini melubangi bagian tengah sehingga HANYA area padding (border) yang terlihat
        mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
        WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: "var(--border-width)",
        ...style,
      } as React.CSSProperties}
      className={cn(
        "absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none",
        className
      )}
      {...props}
    >
      {/* 
        Elemen Inner: Kotak besar berisi gradient melingkar (conic) 
        yang terus berputar (spin) searah jarum jam. 
      */}
      <div
        className="top-1/2 left-1/2 absolute w-[200%] aspect-square -translate-x-1/2 -translate-y-1/2"
        style={{
          background: `conic-gradient(from 0deg, ${gradientColors})`,
          animation: `spin ${duration}s linear infinite`,
        }}
      />
    </div>
  );
}