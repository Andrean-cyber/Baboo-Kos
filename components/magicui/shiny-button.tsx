"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, type MotionProps, useAnimation } from "motion/react";

import { cn } from "@/lib/utils";

interface ShinyButtonProps extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>, MotionProps {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(({ children, className, ...props }, ref) => {
  const innerRef = useRef<HTMLButtonElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  // Gabungkan forwarded ref dengan innerRef
  React.useImperativeHandle(ref, () => innerRef.current as HTMLButtonElement);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (innerRef.current) observer.observe(innerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        "--x": "-100%",
        scale: 1,
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 5,
          type: "tween",
          ease: "linear",
          duration: 2,
        },
      });
    } else {
      controls.stop(); // Hentikan animasi saat tidak terlihat
    }
  }, [isVisible, controls]);

  return (
    <motion.button
      ref={innerRef}
      className={cn(
        "relative dark:bg-[radial-gradient(circle_at_50%_0%,var(--primary)/10%_0%,transparent_60%)] hover:shadow dark:hover:shadow-[0_0_20px_var(--primary)/10%] backdrop-blur-xl px-6 py-2 border rounded-lg font-medium transition-shadow duration-300 ease-in-out cursor-pointer",
        className,
      )}
      initial={{ "--x": "100%", scale: 0.8 }}
      animate={controls}
      whileTap={{
        scale: 0.95,
        transition: { type: "spring", stiffness: 200, damping: 5, mass: 0.5 },
      }}
      {...props}
    >
      <span
        className="inline-flex relative items-center gap-2 w-full dark:font-light text-sm uppercase tracking-wide"
        style={{
          maskImage: "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          WebkitMask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          backgroundImage: "linear-gradient(-75deg,var(--primary)/10% calc(var(--x)+20%),var(--primary)/50% calc(var(--x)+25%),var(--primary)/10% calc(var(--x)+100%))",
        }}
        className="block z-10 absolute inset-0 p-px rounded-[inherit]"
      />
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";