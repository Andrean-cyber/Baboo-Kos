"use client"

import React from "react"
import { motion, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

const animationProps: MotionProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
  repeat: Infinity,
  repeatType: "loop",
  repeatDelay: 5, // Menunggu 10 detik setelah kilatan selesai sebelum mulai lagi
  type: "tween",   // Wajib murni tween agar duration berfungsi
  ease: "linear", 
  duration: 2,     // Ubah ke 4 atau 5 detik jika 2 detik dirasa masih terlalu cepat

  // Properti spring di bawah ini khusus untuk efek mengecil saat tombol DIKLIK (whileTap)
  scale: {
    type: "spring",
    stiffness: 200,
    damping: 5,
    mass: 0.5,
  },
},
}

interface ShinyButtonProps
  extends
    Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode
  className?: string
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative dark:bg-[radial-gradient(circle_at_50%_0%,var(--primary)/10%_0%,transparent_60%)] hover:shadow dark:hover:shadow-[0_0_20px_var(--primary)/10%] backdrop-blur-xl px-6 py-2 border rounded-lg font-medium transition-shadow duration-300 ease-in-out cursor-pointer",
        className
      )}
      {...animationProps}
      {...props}
    >
      <span
        className="inline-flex relative items-center gap-2 w-full dark:font-light text-[rgb(0,0,0,65%)] dark:text-[rgb(255,255,255,90%)] text-sm uppercase tracking-wide"
        style={{
          maskImage:
            "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          WebkitMask:
            "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          backgroundImage:
            "linear-gradient(-75deg,var(--primary)/10% calc(var(--x)+20%),var(--primary)/50% calc(var(--x)+25%),var(--primary)/10% calc(var(--x)+100%))",
        }}
        className="block z-10 absolute inset-0 p-px rounded-[inherit]"
      />
    </motion.button>
  )
})

ShinyButton.displayName = "ShinyButton"
