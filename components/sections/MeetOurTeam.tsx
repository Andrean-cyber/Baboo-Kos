"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const teamMembers = [
  {
    name: "Yucha Pratama",
    role: "Chief Executive Officer (CEO)",
    img: "/team/yuca.jpg",
  },
  {
    name: "Afifa Nur Aulia Viranti",
    role: "Human Resources Development (HRD)",
    img: "/team/afifa.jpg",
  },
  {
    name: "Pranayama Sukma Fritzie Wisnu",
    role: "Administrator (ADM)",
    img: "/team/pran.jpg",
  },
  {
    name: "Atikah Azra Wahdah",
    role: "Social Media Specialist (SMS)",
    img: "/team/tika.jpg",
  },
  {
    name: "Kisfa Azka Khalisa",
    role: "Content Manager (CM)",
    img: "/team/lisa.jpg",
  },
  {
    name: "Meliani Ananda Ginting",
    role: "Head of Customer Service (HCS)",
    img: "/team/meli.jpg",
  },
  {
    name: "Muchammad Akmal Mustofa",
    role: "Head of Content Creator (HCC)",
    img: "/team/akmal.jpg",
  },
  {
    name: "Dominikus Ivan Ardianto",
    role: "Content Creative (CCR)",
    img: "/team/ivan.jpg",
  },
  {
    name: "Dominikus Ivan Ardianto",
    role: "Content Creative (CCR)",
    img: "/team/ivan.jpg",
  },
  {
    name: "Andrean Yogha Saputra",
    role: "Web Developer / Digital Support (IT)",
    img: "/team/andre.jpg",
  },
];

function TeamCard({
  member,
  index,
  isVisible,
  delayBase = 0,
}: {
  member: (typeof teamMembers)[0];
  index: number;
  isVisible: boolean;
  delayBase?: number;
}) {
  return (
    <div
      className={cn(
        "flex flex-col bg-[#FAFAFA] shadow-sm border border-zinc-100 rounded-[2rem] w-full max-w-[340px] overflow-hidden",
        "transition-[transform,opacity] duration-1000 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
      )}
      style={{ transitionDelay: isVisible ? `${delayBase + index * 150}ms` : "0ms" }}
    >
      <div className="relative w-full h-[420px] overflow-hidden">
        <Image
          src={member.img}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 90vw, 340px"
          {...(index === 0 ? { priority: true, loading: "eager" } : {})}
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="flex flex-col flex-1 justify-between items-center bg-[#FDFDFD] p-6 text-center">
        <div>
          <h4 className="font-bold text-zinc-900 text-lg">{member.name}</h4>
          <p className="mt-1 font-bold text-[#495C29] text-xs">{member.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function MeetOurTeam() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

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
    <section
      ref={sectionRef}
      className="flex flex-col items-center mx-auto px-4 md:px-8 py-16 md:py-24 w-full max-w-[1280px]"
    >
      {/* HEADER */}
      <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
        <h3
          className={cn(
            "mb-2 font-bold text-[#495C29] text-sm md:text-base transition-[transform,opacity] duration-700 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          Meet Our Team
        </h3>

        <h2
          className={cn(
            "mb-4 font-bold text-slate-900 text-3xl md:text-4xl lg:text-5xl tracking-tight transition-[transform,opacity] duration-700 ease-out delay-150",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          The Minds Behind Baboo Kos
        </h2>

        <p
          className={cn(
            "max-w-xl font-medium text-zinc-500 text-sm md:text-base leading-relaxed transition-[transform,opacity] duration-700 ease-out delay-300",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          Bukan sekedar tim dibalik layar. Kami adalah kombinasi kreator, marketer dan tech-enthusiast
          yang berambisi mengubah cara orang mencari dan mempromosikan kos jadi jauh lebih seru.
        </p>
      </div>

      {/* TEAM CARDS */}
      <div className="flex flex-col items-center gap-6 md:gap-8 w-full">

        {/* DESKTOP: CEO di tengah atas */}
        <div className="hidden md:flex justify-center w-full">
          <TeamCard
            member={teamMembers[0]}
            index={0}
            isVisible={isVisible}
            delayBase={400}
          />
        </div>

        {/* DESKTOP: Anggota lainnya */}
        <div className="hidden md:flex flex-wrap justify-center gap-6 md:gap-8 w-full">
          {teamMembers.slice(1).map((member, index) => (
            <TeamCard
              key={index + 1}
              member={member}
              index={index + 1}
              isVisible={isVisible}
              delayBase={400}
            />
          ))}
        </div>

        {/* MOBILE: Semua anggota */}
        <div className="flex flex-wrap md:hidden justify-center gap-6 w-full">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              member={member}
              index={index}
              isVisible={isVisible}
              delayBase={400}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
