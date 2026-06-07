"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Data Tim untuk mempermudah render
const teamMembers = [
  {
    name: "Yucha Pratama",
    role: "Chief Executive Officer (CEO)",
    img: "/yuca.jpg",
  },
  {
    name: "Pranayama Sukma Fritzie Wisnu",
    role: "administrasi (ADM)",
    img: "/pran.jpg",
  },
  {
    name: "Afifa Nur Aulia Viranti",
    role: "Human Resources Development (HRD)",
    img: "/afifa.jpg",
  },
  {
    name: "Atikah Azra Wahdah",
    role: "Social Media Specialist (SMS)",
    img: "/tika.jpg",
  },
  {
    name: "Kisfa Azka Khalisa",
    role: "Content Manager (CM)",
    img: "/lisa.jpg",
  },
  {
    name: "Meliani Ananda Ginting",
    role: "Head of Customer Service (HCS)",
    img: "/meli.jpg",
  },
  {
    name: "Muchammad Akmal Mustofa",
    role: "Head of Content Creator (HCC)",
    img: "/akmal.jpg",
  },
  {
    name: "Andrean Yogha Saputra",
    role: "WEB DEV / Digital Support (IT)",
    img: "/andre.jpg",
  },
];

export default function MeetOurTeam() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  // Animasi Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true);
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col items-center mx-auto px-4 md:px-8 py-16 md:py-24 w-full max-w-[1280px]">
      {/* ========================= */}
      {/* HEADER TITLE */}
      {/* ========================= */}
      <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
        <h3 className={cn("mb-2 font-bold text-[#495C29] text-sm md:text-base transition-all duration-700 ease-out", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>Meet Our Team</h3>

        <h2 className={cn("mb-4 font-bold text-slate-900 text-3xl md:text-4xl lg:text-5xl tracking-tight transition-all duration-700 ease-out delay-150", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Kenali Tim Profesional Kami
        </h2>

        <p className={cn("max-w-xl font-medium text-zinc-500 text-sm md:text-base leading-relaxed transition-all duration-700 ease-out delay-300", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Kami adalah individu yang berdedikasi dan profesional, siap memberikan pengalaman terbaik untuk Anda.
        </p>
      </div>

      {/* ========================= */}
      {/* TEAM CARDS GRID */}
      {/* ========================= */}
      {/* Menggunakan flex-wrap dan justify-center agar formasi otomatis menjadi 3 baris atas dan 2 baris bawah di tengah */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col bg-[#FAFAFA] shadow-sm border border-zinc-100 rounded-[2rem] w-full max-w-[340px] overflow-hidden transition-all duration-1000 ease-out",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
            )}
            // Inline style digunakan agar nilai delay bisa dikalkulasi dinamis per kartu
            style={{ transitionDelay: isVisible ? `${400 + index * 150}ms` : "0ms" }}
          >
            {/* Image Section */}
            <div className="w-full h-[420px] overflow-hidden">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 justify-between items-center bg-[#FDFDFD] p-6 text-center">
              <div>
                <h4 className="font-bold text-zinc-900 text-lg">{member.name}</h4>
                <p className="mt-1 font-bold text-[#495C29] text-xs">{member.role}</p>
                <p className="mt-3 text-[13px] text-zinc-500 leading-relaxed">{member.desc}</p>
              </div>

              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
