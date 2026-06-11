"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MapPin, Mail, MessageCircle, Home } from "lucide-react";

  // Data Cabang dan List Kos (Telah ditambahkan daerah baru secara presisi berdasarkan acuan)
const branches = [
  // --- BASELINE/DATA AWAL ANDA (TIDAK DIUBAH) ---
  { id: "Aceh", city: "Aceh", position: { top: "10%", left: "1%" }, delay: "0s" },
  { id: "medan", city: "Medan", position: { top: "20%", left: "10%" }, delay: "0s" },
  { id: "batam", city: "Batam", position: { top: "21%", left: "23.8%" }, delay: "0s" },
  { id: "Bangka", city: "Bangka", position: { top: "48%", left: "27%" }, delay: "0s" },
  { id: "Bengkulu", city: "Bengkulu", position: { top: "62%", left: "16%" }, delay: "0s" },
  { id: "Bukit Tinggi", city: "Bukit Tinggi", position: { top: "52%", left: "11%" }, delay: "0s" },
  { id: "jakarta", city: "Jakarta", position: { top: "71%", left: "34%" }, delay: "0s" },
  { id: "Cengkareng", city: "Cengkareng", position: { top: "71%", left: "33%" }, delay: "0s" },
  { id: "Cawang", city: "Cawang", position: { top: "73%", left: "34.4%" }, delay: "0s" },
  { id: "Bekasi", city: "Bekasi", position: { top: "73%", left: "35%" }, delay: "0s" },
  { id: "Cikarang", city: "Cikarang", position: { top: "72%", left: "34.5%" }, delay: "0s" },
  { id: "Banten", city: "Banten", position: { top: "75%", left: "32%" }, delay: "0s" },
  { id: "cilegon", city: "Cilegon", position: { top: "72%", left: "32%" }, delay: "0s" },
  { id: "bogor", city: "Bogor", position: { top: "80%", left: "34%" }, delay: "0.3s" },
  { id: "Cibinong", city: "Cibinong", position: { top: "78%", left: "34%" }, delay: "0.3s" },
  { id: "Cianjur", city: "Cianjur", position: { top: "82%", left: "35%" }, delay: "0.3s" },
  { id: "bandung", city: "Bandung", position: { top: "80%", left: "40%" }, delay: "0.7s" },
  { id: "semarang", city: "Semarang", position: { top: "72%", left: "46%" }, delay: "0.2s" },
  { id: "jogja", city: "Yogyakarta", position: { top: "79%", left: "46%" }, delay: "0.8s" },
  { id: "Boyolali", city: "Boyolali", position: { top: "77%", left: "46%" }, delay: "0.8s" },
  { id: "Wonosobo", city: "Wonosobo", position: { top: "79%", left: "45%" }, delay: "0.8s" },
  { id: "Bantul", city: "Bantul", position: { top: "82%", left: "45.7%" }, delay: "0.8s" },
  { id: "Banjarnegara", city: "Banjarnegara", position: { top: "76%", left: "43%" }, delay: "0.8s" },
  { id: "Brebes", city: "Brebes", position: { top: "74%", left: "40%" }, delay: "0.8s" },
  { id: "surabaya", city: "Surabaya", position: { top: "76%", left: "50%" }, delay: "0.5s" },
  { id: "Cepu", city: "Cepu", position: { top: "76%", left: "48%" }, delay: "0.5s" },
  { id: "Bojonegoro", city: "Bojonegoro", position: { top: "78%", left: "48%" }, delay: "0.5s" },
  { id: "Bangil", city: "Bangil", position: { top: "80%", left: "50.8%" }, delay: "0.5s" },
  { id: "malang", city: "Malang", position: { top: "85%", left: "50%" }, delay: "0.1s" },
  { id: "Batu", city: "Batu", position: { top: "84.7%", left: "49%" }, delay: "0.1s" },
  { id: "Blitar", city: "Blitar", position: { top: "86%", left: "48%" }, delay: "0.1s" },
  { id: "jember", city: "Jember", position: { top: "80%", left: "54%" }, delay: "0.6s" },
  { id: "Bulukumba", city: "Bulukumba", position: { top: "70%", left: "60%" }, delay: "0.6s" },
  { id: "Banyuwangi", city: "Banyuwangi", position: { top: "89%", left: "56%" }, delay: "0.6s" },
  { id: "bali", city: "Bali", position: { top: "85%", left: "60%" }, delay: "0.4s" },
  { id: "Ambon", city: "Ambon", position: { top: "52%", left: "67%" }, delay: "0.4s" },
  { id: "Balikpapan", city: "Balikpapan", position: { top: "43%", left: "47%" }, delay: "0.4s" },
  { id: "Banjarmasin", city: "Banjarmasin", position: { top: "50%", left: "40%" }, delay: "0.4s" },

  // --- PENAMBAHAN DAERAH BARU (BERDASARKAN ACUAN) ---
  // Kluster Sumatra & Luar Jawa Utama
  { id: "jambi", city: "Jambi", position: { top: "45%", left: "17%" }, delay: "0.2s" },
  { id: "padang", city: "Padang", position: { top: "40%", left: "10%" }, delay: "0.5s" },
  { id: "palembang", city: "Palembang", position: { top: "53%", left: "21%" }, delay: "0.1s" },
  { id: "pekanbaru", city: "Pekanbaru", position: { top: "31%", left: "13%" }, delay: "0.6s" },
  { id: "lampung", city: "Lampung", position: { top: "67%", left: "28%" }, delay: "0.3s" },

  // Kluster Jabodetabek & Jawa Barat
  { id: "jakarta-barat", city: "Jakarta Barat", position: { top: "70%", left: "33.3%" }, delay: "0.4s" },
  { id: "jakarta-timur", city: "Jakarta Timur", position: { top: "72%", left: "34.2%" }, delay: "0.2s" },
  { id: "jakarta-selatan", city: "Jakarta Selatan", position: { top: "73%", left: "33.8%" }, delay: "0.7s" },
  { id: "depok", city: "Depok", position: { top: "75%", left: "33.9%" }, delay: "0.1s" },
  { id: "tangerang", city: "Tangerang", position: { top: "71%", left: "32.5%" }, delay: "0.5s" },
  { id: "serang", city: "Serang", position: { top: "71%", left: "31.5%" }, delay: "0.3s" },
  { id: "karawang", city: "Karawang", position: { top: "73%", left: "35.8%" }, delay: "0.6s" },
  { id: "purwakarta", city: "Purwakarta", position: { top: "75%", left: "37%" }, delay: "0.2s" },
  { id: "subang", city: "Subang", position: { top: "75%", left: "38.2%" }, delay: "0.4s" },
  { id: "sukabumi", city: "Sukabumi", position: { top: "81%", left: "35.5%" }, delay: "0.8s" },
  { id: "cimahi", city: "Cimahi", position: { top: "79.2%", left: "39.5%" }, delay: "0.1s" },
  { id: "jatinangor", city: "Jatinangor", position: { top: "80.5%", left: "41.2%" }, delay: "0.3s" },
  { id: "sumedang", city: "Sumedang", position: { top: "79.5%", left: "41.8%" }, delay: "0.5s" },
  { id: "garut", city: "Garut", position: { top: "83%", left: "41%" }, delay: "0.7s" },
  { id: "tasikmalaya", city: "Tasikmalaya", position: { top: "83.5%", left: "42.5%" }, delay: "0.2s" },
  { id: "cirebon", city: "Cirebon", position: { top: "75.5%", left: "42.8%" }, delay: "0.6s" },
  { id: "kuningan", city: "Kuningan", position: { top: "77.5%", left: "43.2%" }, delay: "0.4s" },

  // Kluster Jawa Tengah & Yogyakarta
  { id: "tegal", city: "Tegal", position: { top: "73.5%", left: "41.5%" }, delay: "0.3s" },
  { id: "pemalang", city: "Pemalang", position: { top: "73.8%", left: "42.5%" }, delay: "0.1s" },
  { id: "kendal", city: "Kendal", position: { top: "72.5%", left: "44.8%" }, delay: "0.5s" },
  { id: "demak", city: "Demak", position: { top: "71.5%", left: "47.2%" }, delay: "0.7s" },
  { id: "jepara", city: "Jepara", position: { top: "68.5%", left: "47%" }, delay: "0.2s" },
  { id: "pati", city: "Pati", position: { top: "71%", left: "48.2%" }, delay: "0.4s" },
  { id: "purwokerto", city: "Purwokerto", position: { top: "77%", left: "42.2%" }, delay: "0.6s" },
  { id: "purbalingga", city: "Purbalingga", position: { top: "76.5%", left: "42.8%" }, delay: "0.8s" },
  { id: "purworejo", city: "Purworejo", position: { top: "79.5%", left: "44.2%" }, delay: "0.1s" },
  { id: "salatiga", city: "Salatiga", position: { top: "75.5%", left: "46.5%" }, delay: "0.3s" },
  { id: "sleman", city: "Sleman", position: { top: "78%", left: "45.8%" }, delay: "0.5s" },
  { id: "solo", city: "Solo", position: { top: "76.8%", left: "47.1%" }, delay: "0.2s" },
  { id: "surakarta", city: "Surakarta", position: { top: "77.2%", left: "47.2%" }, delay: "0.4s" },
  { id: "karanganyar", city: "Karanganyar", position: { top: "77%", left: "47.8%" }, delay: "0.6s" },
  { id: "klaten", city: "Klaten", position: { top: "78.2%", left: "46.6%" }, delay: "0.8s" },

  // Kluster Jawa Timur
  { id: "ngawi", city: "Ngawi", position: { top: "77.5%", left: "48.5%" }, delay: "0.1s" },
  { id: "madiun", city: "Madiun", position: { top: "79.5%", left: "48.8%" }, delay: "0.3s" },
  { id: "magetan", city: "Magetan", position: { top: "79.8%", left: "48.2%" }, delay: "0.5s" },
  { id: "ponorogo", city: "Ponorogo", position: { top: "81.5%", left: "48.6%" }, delay: "0.7s" },
  { id: "pacitan", city: "Pacitan", position: { top: "84.5%", left: "47.5%" }, delay: "0.2s" },
  { id: "trenggalek", city: "Trenggalek", position: { top: "84.5%", left: "49.5%" }, delay: "0.4s" },
  { id: "kediri", city: "Kediri", position: { top: "81.5%", left: "49.8%" }, delay: "0.6s" },
  { id: "nganjuk", city: "Nganjuk", position: { top: "79.5%", left: "49.5%" }, delay: "0.8s" },
  { id: "jombang", city: "Jombang", position: { top: "79%", left: "50.1%" }, delay: "0.1s" },
  { id: "mojokerto", city: "Mojokerto", position: { top: "78.5%", left: "50.5%" }, delay: "0.3s" },
  { id: "lamongan", city: "Lamongan", position: { top: "74.5%", left: "50%" }, delay: "0.5s" },
  { id: "gresik", city: "Gresik", position: { top: "74.8%", left: "50.6%" }, delay: "0.7s" },
  { id: "sidoarjo", city: "Sidoarjo", position: { top: "77.5%", left: "50.8%" }, delay: "0.2s" },
  { id: "pandaan", city: "Pandaan", position: { top: "81%", left: "50.4%" }, delay: "0.4s" },
  { id: "pasuruan", city: "Pasuruan", position: { top: "80%", left: "51.5%" }, delay: "0.6s" },
  { id: "probolinggo", city: "Probolinggo", position: { top: "80.5%", left: "52.8%" }, delay: "0.8s" },
  { id: "lumajang", city: "Lumajang", position: { top: "84%", left: "52.5%" }, delay: "0.1s" },
  { id: "situbondo", city: "Situbondo", position: { top: "79%", left: "55.5%" }, delay: "0.3s" },

  // Kluster Kalimantan, Sulawesi, Maluku & Papua
  { id: "pontianak", city: "Pontianak", position: { top: "38%", left: "36%" }, delay: "0.5s" },
  { id: "palangkaraya", city: "Palangkaraya", position: { top: "43%", left: "42%" }, delay: "0.2s" },
  { id: "samarinda", city: "Samarinda", position: { top: "39%", left: "48.5%" }, delay: "0.6s" },
  { id: "kalimantan", city: "Kalimantan", position: { top: "35%", left: "43%" }, delay: "0.4s" }, // Titik tengah pulau
  { id: "sulawesi", city: "Sulawesi", position: { top: "45%", left: "57%" }, delay: "0.3s" }, // Titik tengah pulau
  { id: "makassar", city: "Makassar", position: { top: "66%", left: "58.5%" }, delay: "0.7s" },
  { id: "palu", city: "Palu", position: { top: "43%", left: "57.5%" }, delay: "0.1s" },
  { id: "manado", city: "Manado", position: { top: "27%", left: "63%" }, delay: "0.8s" },
  { id: "ternate", city: "Ternate", position: { top: "33%", left: "68%" }, delay: "0.5s" },
  { id: "sorong", city: "Sorong", position: { top: "41%", left: "75%" }, delay: "0.2s" },

  // Kluster Nusa Tenggara & Bali
  { id: "lombok", city: "Lombok", position: { top: "85.5%", left: "62.2%" }, delay: "0.4s" },
  { id: "mataram", city: "Mataram", position: { top: "85.5%", left: "61.5%" }, delay: "0.6s" },
  { id: "nusa-tenggara-barat", city: "Nusa Tenggara Barat", position: { top: "86%", left: "63.5%" }, delay: "0.1s" },
  { id: "kupang", city: "Kupang", position: { top: "89%", left: "71%" }, delay: "0.8s" },
];

export default function OurBranch() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);

  // Animasi saat di-scroll
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col items-center mx-auto px-4 md:px-8 py-16 md:py-24 w-full max-w-[1280px] overflow-hidden">
      {/* ========================= */}
      {/* HEADER TITLE (Cascade) */}
      {/* ========================= */}
      <div className="flex flex-col items-center mb-10 text-center">
        <h3 className={cn("mb-2 font-bold text-[#495C29] text-sm md:text-base transition-all duration-700 ease-out", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>Our Networks</h3>

        <h2 className={cn("mb-4 font-bold text-slate-900 text-3xl md:text-5xl tracking-tight transition-all duration-700 ease-out delay-150", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          We're a distributed team
        </h2>

        <p className={cn("font-medium text-zinc-500 text-sm md:text-base transition-all duration-700 ease-out delay-300", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>We have teams almost all over Indonesia.</p>
      </div>

      {/* ========================= */}
      {/* MAP CONTAINER (Anti-Geser) */}
      {/* ========================= */}
      <div className={cn("relative mt-8 w-full max-w-[1000px] transition-all duration-1000 ease-out delay-500", isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0")}>
        {/* GAMBAR PETA ASLI */}
        <img src="/map-indonesia.svg" alt="Map Indonesia" className="opacity-50 w-full h-auto pointer-events-none select-none" />

        {/* ========================================================= */}
        {/* AREA TITIK-TITIK LOKASI */}
        {/* ========================================================= */}
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="group z-10 absolute flex justify-center items-center"
            style={{ top: branch.position.top, left: branch.position.left }}
            onMouseEnter={() => setHoveredBranch(branch.id)}
            onMouseLeave={() => setHoveredBranch(null)}
          >
            {/* Animasi Titik (Pulse - Asynchronous) */}
            <div className="relative flex justify-center items-center w-3 md:w-5 h-3 md:h-5 cursor-pointer">
              {/* Lingkaran yang berdenyut dengan delay dinamis */}
              <span className="inline-flex absolute bg-[#495C29] opacity-30 rounded-full w-full h-full animate-ping" style={{ animationDelay: branch.delay }}></span>
              {/* Titik utama */}
              <span className="inline-flex relative bg-[#495C29] rounded-full w-1.5 md:w-2.5 h-1.5 md:h-2.5 group-hover:scale-150 transition-transform duration-300"></span>
            </div>

            {/* Hover Pop-up Card */}
            <div
              className={cn(
                "bottom-full left-1/2 absolute bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] mb-3 p-3 border border-zinc-100 rounded-2xl w-48 transition-all -translate-x-1/2 duration-300 pointer-events-none",
                hoveredBranch === branch.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
              )}
            >
              {/* Segitiga panah kebawah */}
              <div className="-bottom-2 left-1/2 absolute bg-white border-zinc-100 border-r border-b w-4 h-4 rotate-45 -translate-x-1/2" />

              <div className="z-10 relative text-left">
                <div className="flex items-center gap-1.5 mb-2 pb-2 border-zinc-100 border-b">
                  <MapPin size={14} className="text-[#495C29]" />
                  <span className="font-bold text-zinc-900 text-xs">{branch.city}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ========================= */}
      {/* FOOTER CONTACT */}
      {/* ========================= */}
      {/* <div
        className={cn(
          "gap-10 md:gap-6 grid grid-cols-1 md:grid-cols-3 mt-10 md:mt-16 pt-10 border-zinc-100 border-t w-full lg:max-w-[900px] text-center transition-all duration-1000 ease-out delay-700",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        )}
      >

        <div className="flex flex-col items-center gap-2">
          <Mail size={24} className="mb-1 text-[#495C29]" />
          <h4 className="font-bold text-zinc-900 text-sm">Support</h4>
          <p className="font-medium text-zinc-500 text-xs">Our friendly team is here to help.</p>
          <a href="mailto:support@babookos.com" className="mt-1 font-bold text-[#495C29] text-sm hover:underline">
            support@babookos.com
          </a>
        </div>


        <div className="flex flex-col items-center gap-2">
          <Home size={24} className="mb-1 text-[#495C29]" />
          <h4 className="font-bold text-zinc-900 text-sm">Airbnb</h4>
          <p className="font-medium text-zinc-500 text-xs">Questions or queries? Get in touch!</p>
          <a href="mailto:sales@babookos.com" className="mt-1 font-bold text-[#495C29] text-sm hover:underline">
            sales@babookos.com
          </a>
        </div>


        <div className="flex flex-col items-center gap-2">
          <MessageCircle size={24} className="mb-1 text-[#495C29]" />
          <h4 className="font-bold text-zinc-900 text-sm">CP Villa</h4>
          <p className="font-medium text-zinc-500 text-xs">Mon-Fri from 8am to 5pm.</p>
          <a href="tel:+6287785338441" className="mt-1 font-bold text-[#495C29] text-sm hover:underline">
            +6287785338441
          </a>
        </div>
      </div> */}
    </section>
  );
}
