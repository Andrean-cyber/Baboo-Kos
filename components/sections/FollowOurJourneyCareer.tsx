"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Home, Briefcase, Users, ArrowRight, ThumbsUp, MessageSquare, Repeat2, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

// =======================
// DATA STATIC (MOCKUP)
// =======================
const liPosts = [
  {
    id: 1,
    img: "/sosmed/linkedin/lkd1.jpeg",
    caption: "Meski perayaannya sudah lewat, keceriaan dan energi positifnya masih terbawa sampai ke meja kerja hari ini! 🧧",
    time: "3mo",
  },
  {
    id: 2,
    img: "/sosmed/linkedin/lkd2.jpeg",
    caption: "Work is better when we do it together! ✨",
    time: "3mo",
  },
  {
    id: 3,
    img: "/sosmed/linkedin/lkd3.jpeg",
    caption: "Kadang sebagai HRD, aku mikir… ternyata nggak semua orang seberuntung ini.",
    time: "4mo",

  },
];

// =======================
// COUNT UP COMPONENT
// =======================
function CountUp({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(progress * end);
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  const formatted = end >= 1000 ? count.toLocaleString("id-ID") : Number(count.toFixed(1));

  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}

export default function FollowOurJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "flex flex-col items-center bg-[#FAFAFA] mx-auto px-4 md:px-8 py-16 md:py-24 w-full max-w-[1280px] overflow-hidden",
      )}
    >
      {/* HEADER */}
      <div className={cn("flex", "flex-col", "items-center", "mb-10", "max-w-[1280px]", "text-center")}>
        <h3 className={cn("mb-2 font-bold text-[#495C29] text-sm md:text-base transition-all duration-700 ease-out", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>Follow Our Journey</h3>

        <h2
          className={cn(
            "mb-4",
            "flex",
            "flex-wrap",
            "items-center",
            "justify-center",
            "gap-3",
            "font-bold",
            "text-slate-900",
            "text-3xl",
            "md:text-5xl",
            "tracking-tight",
            "transition-all",
            "duration-700",
            "ease-out",
            "delay-150",
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          )}
        >
          <span>Stay Connected with</span>

          <Image src="/babookos.png" alt="Baboo Kos" width={120} height={56} className="h-10 md:h-14 w-auto object-contain" />
        </h2>

        <p className={cn("mb-6", "font-medium", "text-zinc-500", "text-sm", "md:text-base", "leading-relaxed", "transition-all", "duration-700", "ease-out", "delay-300", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Ikuti keseruan, aktivitas terbaru dan momen terbaik kami secara real-time di Instagram & Tiktok
        </p>
      </div>
      {/* LINKEDIN CARD — full width, single column */}
      <div className="w-full max-w-[860px]">
        <div className="flex flex-col bg-white shadow-sm p-6 md:p-8 border border-zinc-200 rounded-[2rem]">

          {/* PROFILE HEADER */}
          <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
            <div className="flex items-center gap-4">
              {/* LinkedIn icon circle */}
              <div className="flex justify-center items-center bg-[#0A66C2] rounded-xl w-14 h-14 text-white shrink-0">
                <FaLinkedin size={30} />
              </div>

              <div>
                <h4 className="font-semibold text-zinc-900 text-sm">LinkedIn</h4>
                <div className="font-semibold text-[13px] text-zinc-700">Baboo Kos</div>
                <p className="mt-0.5 font-medium text-[9px] text-zinc-500 leading-tight">
                  Baboo Kos! Cari Kos Tanpa Ribet, Sesuai Budget!
                  <br />
                  Information Services · 11–50 employees
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 text-center shrink-0">
              <div className="flex flex-col">
                <span className="font-bold text-zinc-900 text-sm">
                  <CountUp end={14} />
                </span>
                <span className="text-[10px] text-zinc-500">Followers</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-zinc-900 text-sm">11–50</span>
                <span className="text-[10px] text-zinc-500">Employees</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-zinc-900 text-sm">2021</span>
                <span className="text-[10px] text-zinc-500">Founded</span>
              </div>
            </div>
          </div>

          {/* OVERVIEW */}
          <div className="mb-6 bg-zinc-50 p-4 border border-zinc-100 rounded-xl">
            <h5 className="mb-1 font-semibold text-zinc-700 text-xs">Overview</h5>
            <p className="font-medium text-[10px] text-zinc-500 leading-relaxed line-clamp-3">
              Baboo Kos is a digital platform, established on July 8, 2021, specializing in boarding house search
              services and the provision of reliable rental information. Founded in response to the common difficulty
              faced by students and young professionals in finding accommodations that fit both their needs and budget.
            </p>
          </div>

          {/* PAGE POSTS */}
          <h5 className="mb-3 font-semibold text-zinc-700 text-xs">Page posts</h5>
          <div className="gap-3 grid grid-cols-3">
            {liPosts.map((post) => (
              <div key={post.id} className="group flex flex-col cursor-pointer">
                {/* Thumbnail */}
                <div className="relative bg-zinc-100 rounded-xl w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Caption */}
                <p className="mt-2 font-semibold text-[10px] text-zinc-900 line-clamp-2">{post.caption}</p>
                <span className="mt-0.5 font-medium text-[9px] text-zinc-400">{post.time}</span>

                
              </div>
            ))}
          </div>

          {/* FOOTER BUTTON */}
          <a
            href="https://www.linkedin.com/company/babookos/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 bg-blue-50/50 hover:bg-blue-100/50 mt-8 py-3 rounded-xl w-full font-semibold text-[11px] text-[#0A66C2] transition-colors"
          >
            View more on LinkedIn <FaLinkedin size={14} /> <ArrowRight size={14} />
          </a>
        </div>
      </div>

      
    </section>
  );
}
