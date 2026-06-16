"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Heart, Play, CheckCircle, ArrowRight, Home, Copy, Clapperboard } from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

// =======================
// DATA STATIC (MOCKUP)
// =======================
const igFeeds = [
  {
    id: 1,
    img: "/sosmed/babookos/igthumb1.jpg",
    title: "Top 3 + 1 Penipu Kos",
    time: "1 Years ago",
    type: "carousel",
  },
  {
    id: 2,
    img: "/sosmed/babookos/igthumb2.jpg",
    title: "BABOO VILLA by Baboo Kos",
    time: "2 Years ago",
    type: "reels",
  },
  {
    id: 3,
    img: "/sosmed/babookos/igthumb3.jpg",
    title: "BABOO VILLA KUSUMA",
    time: "1 Years ago",
    type: "carousel",
  },
];

const tkFeeds = [
  {
    id: 1,
    img: "/sosmed/babookos/ttthumb1.png",
    title: "Kost Putri Bu ella Batununggal",
    time: "2 Years ago",
    views: "29.7K",
  },
  {
    id: 2,
    img: "/sosmed/babookos/ttthumb2.png",
    title: "🏡Kos Campur Graha Pura 5",
    time: "1 Years ago",
    views: "50.2K",
  },
  {
    id: 3,
    img: "/sosmed/babookos/ttthumb3.png",
    title: "Kost Campur Bebas LV Ijan 14",
    time: "2 Years ago",
    views: "307.1K",
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

      const value = progress * end;

      setCount(value);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
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
    <section ref={sectionRef} className={cn("flex", "flex-col", "items-center", "bg-[#FAFAFA]", "mx-auto", "px-4", "md:px-8", "py-16", "md:py-24", "w-full", "max-w-[1280px]", "overflow-hidden")}>
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

      {/* GRID */}
      <div className={cn("gap-6", "lg:gap-8", "grid", "grid-cols-1", "lg:grid-cols-2", "w-full")}>
        {/* INSTAGRAM */}
        <div className={cn("flex", "flex-col", "bg-white", "shadow-sm", "p-6", "md:p-8", "border", "border-zinc-200", "rounded-[2rem]")}>
          {/* HEADER */}
          <div className={cn("flex", "flex-wrap", "justify-between", "items-center", "gap-4", "mb-6")}>
            <div className={cn("flex", "items-center", "gap-4")}>
              <div className={cn("flex", "justify-center", "items-center", "bg-gradient-to-tr", "from-yellow-400", "via-pink-500", "to-purple-600", "rounded-full", "w-14", "h-14", "text-white")}>
                <FaInstagram size={30} />
              </div>

              <div>
                <h4 className="font-semibold text-zinc-900 text-sm">Instagram</h4>

                <div className="flex items-center gap-1 font-semibold text-[13px] text-zinc-700">
                  @baboo_kos
                  <CheckCircle size={14} className="fill-blue-500 text-white" />
                </div>

                <p className="mt-0.5 font-medium text-[9px] text-zinc-500 leading-tight">
                  SPESIALIS JASA PENCARIAN KOS SE-INDONESIA
                  <br />
                  • Guaranteed & Trusted Since 2021
                  <br />
                  • Info Layanan | Endorse | Kerjasama👇🏻
                  <br />
                  087785338441
                  <br />
                  @baboo_villa
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-center shrink-0">
              <div className="flex flex-col">
                <span className="font-bold text-zinc-900 text-sm">
                  <CountUp end={2003} />
                </span>
                <span className="text-[10px] text-zinc-500">Posts</span>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-zinc-900 text-sm">
                  <CountUp end={239} suffix="K" />
                </span>
                <span className="text-[10px] text-zinc-500">Followers</span>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-zinc-900 text-sm">
                  <CountUp end={2} />
                </span>
                <span className="text-[10px] text-zinc-500">Following</span>
              </div>
            </div>
          </div>

       

          {/* POSTS */}
          <div className="gap-3 grid grid-cols-3">
            {igFeeds.map((feed) => (
              <div key={feed.id} className="group flex flex-col cursor-pointer">
                <div className="relative bg-zinc-100 rounded-xl w-full aspect-[3/4] overflow-hidden">
                 <Image src={feed.img} alt={feed.title} fill sizes="(max-width: 768px) 33vw, 20vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />

                  <div className="top-2 right-2 absolute drop-shadow-md text-white">{feed.type === "reels" ? <Clapperboard size={16} fill="white" /> : <Copy size={16} fill="white" />}</div>
                </div>

                <h5 className="mt-2 font-semibold text-[10px] text-zinc-900 line-clamp-1">{feed.title}</h5>

                <p className="font-medium text-[9px] text-zinc-400">{feed.time}</p>
              </div>
            ))}
          </div>

          {/* FOOTER BUTTON */}
          <a href="https://instagram.com/baboo_kos" target="_blank" className="flex justify-center items-center gap-2 bg-pink-50/50 hover:bg-pink-100/50 mt-8 py-3 rounded-xl w-full font-semibold text-[11px] text-pink-600 transition-colors">
            View more on Instagram <FaInstagram size={14} /> <ArrowRight size={14} />
          </a>
        </div>

        {/* TIKTOK */}
        <div className="flex flex-col bg-white shadow-sm p-6 md:p-8 border border-zinc-200 rounded-[2rem]">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center bg-black rounded-full w-14 h-14 text-white">
                <FaTiktok size={26} />
              </div>

              <div>
                <h4 className="font-semibold text-zinc-900 text-sm">TikTok</h4>

                <div className="flex items-center gap-1 font-semibold text-[13px] text-zinc-700">
                  @baboo_kos
                </div>

                <p className="mt-0.5 font-medium text-[9px] text-zinc-500 leading-tight">
                  Cari Kos WA 087785338441
                  <br />
                  atau hub. admin via link di bawah ya
                  <br />
                  ⬇️⬇️
                  <br />
                  linktr.ee/baboo_kos
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-center shrink-0">
              <div className="flex flex-col">
                <span className="font-bold text-zinc-900 text-sm">
                  <CountUp end={10} />
                </span>
                <span className="text-[10px] text-zinc-500">Following</span>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-zinc-900 text-sm">
                  <CountUp end={112} suffix="K" />
                </span>
                <span className="text-[10px] text-zinc-500">Followers</span>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-zinc-900 text-sm">
                  <CountUp end={4.8} suffix="M" />
                </span>
                <span className="text-[10px] text-zinc-500">Likes</span>
              </div>
            </div>
          </div>

          {/* POSTS */}
          <div className="gap-3 grid grid-cols-3">
            {tkFeeds.map((feed) => (
              <div key={feed.id} className="group flex flex-col cursor-pointer">
                <div className="relative bg-zinc-100 rounded-xl w-full aspect-[3/4] overflow-hidden">
                  <Image src={feed.img} alt={feed.title} fill sizes="(max-width: 768px) 33vw, 20vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  <div className="bottom-2 left-2 absolute flex items-center gap-1 font-semibold text-[10px] text-white">
                    <Play size={10} fill="white" /> {feed.views}
                  </div>
                </div>

                <h5 className="mt-2 font-semibold text-[10px] text-zinc-900 line-clamp-1">{feed.title}</h5>

                <p className="font-medium text-[9px] text-zinc-400">{feed.time}</p>
              </div>
            ))}
          </div>

          <a href="https://tiktok.com/@baboo_kos" target="_blank" className="flex justify-center items-center gap-2 bg-zinc-50 hover:bg-zinc-100 mt-8 py-3 rounded-xl w-full font-semibold text-[11px] text-zinc-700 transition-colors">
            View more on TikTok <FaTiktok size={14} /> <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* BOTTOM STATS */}
      <div className={cn("gap-6", "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-5", "bg-[#F8F9F5]", "shadow-sm", "mt-10", "p-6", "border", "border-[#495C29]/10", "rounded-[2rem]", "w-full")}>
        <div className="flex items-center gap-4 md:col-span-2">
          <div className="flex justify-center items-center bg-[#495C29] rounded-full w-14 h-14 text-white shrink-0">
            <Home size={24} />
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 text-sm">Baboo Kos</h4>

            <p className="mt-0.5 font-medium text-[10px] text-zinc-500 leading-relaxed">Menciptakan pengalaman mencari kos yang mudah dan praktis.</p>
          </div>
        </div>

        <div className="flex lg:justify-center items-center gap-4 pl-6 lg:pl-0 border-zinc-200/50 border-l lg:border-l-0">
          <div className="flex justify-center items-center bg-white shadow-sm rounded-full w-10 h-10 text-zinc-400">
            <FaInstagram size={18} />
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 text-lg leading-none">
              <CountUp end={239} suffix="K" />
            </h4>

            <p className="mt-1 font-medium text-[10px] text-zinc-500">Instagram Followers</p>
          </div>
        </div>

        <div className="flex lg:justify-center items-center gap-4 pl-6 lg:pl-0 border-zinc-200/50 border-l lg:border-l-0">
          <div className="flex justify-center items-center bg-white shadow-sm rounded-full w-10 h-10 text-zinc-900">
            <FaTiktok size={16} />
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 text-lg leading-none">
              <CountUp end={112} suffix="K" />
            </h4>

            <p className="mt-1 font-medium text-[10px] text-zinc-500">TikTok Followers</p>
          </div>
        </div>

        <div className="flex lg:justify-center items-center gap-4 pl-6 lg:pl-0 border-zinc-200/50 border-l lg:border-l-0">
          <div className="flex justify-center items-center bg-white shadow-sm rounded-full w-10 h-10 text-zinc-400">
            <Heart size={18} />
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 text-lg leading-none">
              <CountUp end={4.8} suffix="M" />
            </h4>

            <p className="mt-1 font-medium text-[10px] text-zinc-500">TikTok Likes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
