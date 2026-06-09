"use client";

import { useMemo, useState, Suspense, useRef, useEffect } from "react";
import { ShoppingCart, CheckSquare, Square, Check, ShieldCheck, BadgeDollarSign, Clock, Info } from "lucide-react";
import { FaTiktok, FaInstagram, FaWhatsapp, FaHandshake } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { cn } from "@/lib/utils";

type Platform = "tiktok" | "instagram" | "threads" | "whatsapp" | "mitra";

const platformData = [
  { id: "tiktok", label: "TikTok", desc: "Video short form", icon: FaTiktok },
  { id: "instagram", label: "Instagram", desc: "Feeds, Reels & Story", icon: FaInstagram },
  { id: "threads", label: "Threads", desc: "Dokumentasi", icon: FaThreads },
  { id: "whatsapp", label: "WhatsApp Channel", desc: "Promosi di channel", icon: FaWhatsapp },
  { id: "mitra", label: "Mitra", desc: "Kerja sama", icon: FaHandshake },
] as const;

// DATA PAKET SESUAI RATECARD
const tiktokPackages = [
  { id: "tk_supreme", name: "Supreme Rate", price: 1200000, desc: "Keep 4 Bulan" },
  { id: "tk_superior", name: "Superior Rate", price: 1000000, desc: "Keep 2 Bulan" },
  { id: "tk_deluxe", name: "Deluxe Rate", price: 800000, desc: "Keep 1 Bulan" },
  { id: "tk_standard", name: "Standard Rate", price: 600000, desc: "Keep 1 Bulan" },
];

const instagramPackages = [
  { id: "ig_feed", name: "Post Feeds", price: 800000, desc: "5-10 Foto | Keep 1 Bulan" },
  { id: "ig_reels", name: "Reels", price: 900000, desc: "Video Reels | Keep 1 Bulan" },
  { id: "ig_story", name: "Story", price: 0, desc: "Diunggah dalam kurun 1 minggu" }, // Harga dinamis berdasarkan jumlah
];

const otherPackages = {
  threads: [{ id: "th_main", name: "Threads", price: 500000, desc: "Dokumentasi owner unit | Keep Permanen" }],
  whatsapp: [{ id: "wa_main", name: "Whatsapp Channel", price: 250000, desc: "Dokumentasi pihak kos | Permanen" }],
  mitra: [{ id: "mi_main", name: "Mitra", price: 350000, desc: "WA channel permanen + Rekomendasi | Member 6 Bulan" }],
};

// DATA ADD ONS
const addOns = [
  { id: "pin_7", name: "Pin Konten (7 Hari)", description: "Konten disematkan di profil selama 7 hari", price: 150000 },
  { id: "pin_30", name: "Pin Konten (1 Bulan)", description: "Konten disematkan di profil selama 1 bulan", price: 300000 },
  { id: "keep", name: "Keep Permanen", description: "Khusus yang sudah ambil paket endorse", price: 500000 },
  { id: "take", name: "Take Konten", description: "Tim Baboo Kos visit untuk pengambilan footage", price: 100000 },
];

function StepCard({ step, title, children }: { step: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full">
      <h3 className="flex items-center gap-3 mb-4 font-bold text-zinc-800 text-base md:text-lg">
        <span className="flex justify-center items-center bg-[#495C29] rounded-full w-7 h-7 text-white text-xs md:text-sm">{step}</span>
        {title}
      </h3>
      <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-5 md:p-8 border border-zinc-100 rounded-[1.5rem]">{children}</div>
    </div>
  );
}

function SimulationContent() {
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
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // STATES
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([]);
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const [igStoryUpload, setIgStoryUpload] = useState<1 | 2 | 3>(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const formatPrice = (price: number) => new Intl.NumberFormat("id-ID").format(price);

  // LOGIC: Toggle Platform
  const handlePlatformToggle = (platformId: Platform) => {
    setSelectedPlatforms((prev) => {
      if (prev.includes(platformId)) {
        // hapus platform
        setSelectedPackages((pkgs) =>
          pkgs.filter((id) => {
            if (platformId === "tiktok") return !id.startsWith("tk_");
            if (platformId === "instagram") return !id.startsWith("ig_");
            if (platformId === "threads") return !id.startsWith("th_");
            if (platformId === "whatsapp") return !id.startsWith("wa_");
            if (platformId === "mitra") return !id.startsWith("mi_");
            return true;
          }),
        );

        return prev.filter((x) => x !== platformId);
      } else {
        return [...prev, platformId];
      }
    });
  };
  // LOGIC: Toggle Package
  const handlePackageToggle = (pkgId: string) => {
    setSelectedPackages((prev) => (prev.includes(pkgId) ? prev.filter((id) => id !== pkgId) : [...prev, pkgId]));
  };

  // CALCULATIONS
  const getStoryPrice = (uploads: number) => {
    if (uploads === 1) return 200000;
    if (uploads === 2) return 300000;
    if (uploads === 3) return 400000;
    return 0;
  };

  const subtotal = useMemo(() => {
    let total = 0;
    const allPackages = [...tiktokPackages, ...instagramPackages, ...otherPackages.threads, ...otherPackages.whatsapp, ...otherPackages.mitra];

    selectedPackages.forEach((id) => {
      const pkg = allPackages.find((p) => p.id === id);
      if (pkg) {
        if (id === "ig_story") {
          total += getStoryPrice(igStoryUpload);
        } else {
          total += pkg.price;
        }
      }
    });

    selectedAddons.forEach((id) => {
      const addon = addOns.find((a) => a.id === id);
      if (addon) total += addon.price;
    });

    return total;
  }, [selectedPackages, selectedAddons, igStoryUpload]);

  // Syarat Bundling: Minimal 1 TikTok + (1 IG Feeds ATAU Reels)
  const hasTikTok = selectedPackages.some((id) => id.startsWith("tk_"));
  const hasIgMain = selectedPackages.includes("ig_feed") || selectedPackages.includes("ig_reels");
  const isBundle = hasTikTok && hasIgMain;

  const discount = isBundle ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  // Cek apakah ada paket yang dipilih
  const hasSelectedPackages = selectedPackages.length > 0;

  // BUILD WHATSAPP MESSAGE
  const buildWA = () => {
    let message = "Halo Baboo Kos, saya ingin memesan paket promosi:\n\n";

    const allPackages = [...tiktokPackages, ...instagramPackages, ...otherPackages.threads, ...otherPackages.whatsapp, ...otherPackages.mitra];

    // === DETAIL PER PLATFORM ===
    selectedPlatforms.forEach((platform) => {
      const prefix = platform === "tiktok" ? "tk_" : platform === "instagram" ? "ig_" : platform === "threads" ? "th_" : platform === "whatsapp" ? "wa_" : "mi_";

      const platformPackages = selectedPackages.filter((id) => id.startsWith(prefix));

      if (platformPackages.length === 0) return;

      message += `*${platform.toUpperCase()}*\n`;

      platformPackages.forEach((id) => {
        const pkg = allPackages.find((p) => p.id === id);
        if (!pkg) return;

        if (id === "ig_story") {
          const price = getStoryPrice(igStoryUpload);
          message += `- ${pkg.name} (${igStoryUpload}x Upload) = Rp${formatPrice(price)}\n`;
        } else {
          message += `- ${pkg.name} = Rp${formatPrice(pkg.price)}\n`;
        }
      });

      message += "\n";
    });

    // === ADD ONS ===
    if (selectedAddons.length > 0) {
      message += "*ADD ON*\n";

      selectedAddons.forEach((id) => {
        const addon = addOns.find((a) => a.id === id);
        if (!addon) return;
        message += `- ${addon.name} = Rp${formatPrice(addon.price)}\n`;
      });

      message += "\n";
    }

    // === TOTAL SECTION ===
    message += `Subtotal: Rp${formatPrice(subtotal)}\n`;

    if (discount > 0) {
      message += `Diskon Bundling (10%): -Rp${formatPrice(discount)}\n`;
    }

    message += `Total Estimasi: *Rp${formatPrice(total)}*`;

    return encodeURIComponent(message);
  };

  return (
    <section ref={sectionRef} className="bg-[#FAFAFA] px-4 md:px-8 py-16 md:py-24 overflow-hidden">
      {/* HEADER TITLE */}
      <div className="flex flex-col items-center mb-10 md:mb-14 text-center">
        <h3 className={cn("mb-2 font-bold text-[#495C29] text-sm md:text-base transition-all duration-700 ease-out", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>Simulasi Paket Endorse</h3>
        <h2 className={cn("mb-4 font-bold text-slate-900 text-3xl md:text-4xl lg:text-5xl tracking-tight transition-all duration-700 ease-out delay-150", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Hitung Estimasi Biaya Promosi Anda
        </h2>
        <p className={cn("font-medium text-zinc-500 text-sm md:text-base transition-all duration-700 ease-out delay-300", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Sesuaikan Paket Promosi Anda (Bisa pilih lebih dari 1 paket)
        </p>
      </div>

      <div className="gap-8 lg:gap-10 grid lg:grid-cols-[1fr_400px] mx-auto w-full max-w-[1280px]">
        <div className="space-y-10">
          {/* STEP 1: PILIH PLATFORM */}
          <StepCard step={1} title="Pilih Platform Promosi">
            <div className="gap-3 grid grid-cols-2 lg:grid-cols-5">
              {platformData.map((platform) => {
                const Icon = platform.icon;
                const active = selectedPlatforms.includes(platform.id);
                return (
                  <button
                    key={platform.id}
                    onClick={() => handlePlatformToggle(platform.id)}
                    className={cn("relative p-4 border rounded-xl text-left transition-all", active ? "border-[#495C29] bg-[#EEF3E8]" : "border-zinc-200 bg-white hover:border-zinc-300")}
                  >
                    {active && (
                      <div className="top-2 right-2 absolute bg-[#495C29] rounded-md text-white">
                        <Check size={14} className="p-0.5" />
                      </div>
                    )}
                    <Icon size={22} className={cn("mb-2", active ? "text-[#495C29]" : "text-zinc-600")} />
                    <p className="font-bold text-zinc-900 text-xs">{platform.label}</p>
                    <p className="mt-1 text-[10px] text-zinc-500 leading-tight">{platform.desc}</p>
                  </button>
                );
              })}
            </div>
          </StepCard>

          {/* STEP 2: PILIH PAKET */}
          {selectedPlatforms.length > 0 && (
            <StepCard step={2} title="Pilih Paket Sesuai Platform">
              <div className="space-y-8">
                {/* TIKTOK SECTION */}
                {selectedPlatforms.includes("tiktok") && (
                  <div className="pb-8 last:pb-0 border-zinc-100 last:border-0 border-b">
                    <div className="flex items-center gap-2 mb-4">
                      <FaTiktok size={18} className="text-zinc-900" />
                      <h4 className="font-bold text-zinc-900 text-sm">TikTok</h4>
                    </div>

                    <div className="gap-3 grid grid-cols-2 md:grid-cols-4">
                      {tiktokPackages.map((pkg) => {
                        const active = selectedPackages.includes(pkg.id);
                        return (
                          <button key={pkg.id} onClick={() => handlePackageToggle(pkg.id)} className={cn("relative p-4 border rounded-xl text-left transition-all", active ? "border-[#495C29] bg-[#EEF3E8]" : "border-zinc-200 bg-white")}>
                            <div className="flex items-start gap-2 mb-1">
                              {active ? <CheckSquare size={16} className="mt-0.5 text-[#495C29] shrink-0" /> : <Square size={16} className="mt-0.5 text-zinc-300 shrink-0" />}
                              <div>
                                <p className="font-bold text-zinc-900 text-xs">{pkg.name}</p>
                                <p className="text-[10px] text-zinc-500">{pkg.desc}</p>
                              </div>
                            </div>
                            <p className="mt-3 font-bold text-zinc-900 text-sm">Rp{formatPrice(pkg.price)}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* INSTAGRAM SECTION */}
                {selectedPlatforms.includes("instagram") && (
                  <div className="pb-8 last:pb-0 border-zinc-100 last:border-0 border-b">
                    <div className="flex items-center gap-2 mb-4">
                      <FaInstagram size={18} className="text-zinc-900" />
                      <h4 className="font-bold text-zinc-900 text-sm">Instagram</h4>
                    </div>

                    <div className="gap-4 grid md:grid-cols-3">
                      {instagramPackages.map((pkg) => {
                        const active = selectedPackages.includes(pkg.id);
                        const isStory = pkg.id === "ig_story";

                        return (
                          <div key={pkg.id} className="flex flex-col gap-2">
                            <button onClick={() => handlePackageToggle(pkg.id)} className={cn("flex-1 p-4 border rounded-xl text-left transition-all", active ? "border-[#495C29] bg-[#EEF3E8]" : "border-zinc-200 bg-white")}>
                              <div className="flex justify-between items-start mb-2">
                                <div className="flex items-start gap-2">
                                  {active ? <CheckSquare size={16} className="mt-0.5 text-[#495C29] shrink-0" /> : <Square size={16} className="mt-0.5 text-zinc-300 shrink-0" />}
                                  <div>
                                    <p className="font-bold text-zinc-900 text-xs">{pkg.name}</p>
                                    <p className="mt-1 text-[10px] text-zinc-500">{pkg.desc}</p>
                                  </div>
                                </div>
                              </div>
                              <p className="mt-2 font-bold text-zinc-900 text-sm">Rp{formatPrice(isStory ? getStoryPrice(igStoryUpload) : pkg.price)}</p>
                            </button>

                            {/* Khusus Opsi Upload untuk Story */}
                            {isStory && active && (
                              <div className="flex bg-white shadow-sm border border-zinc-200 rounded-lg overflow-hidden">
                                {[1, 2, 3].map((num) => (
                                  <button
                                    key={num}
                                    onClick={() => setIgStoryUpload(num as 1 | 2 | 3)}
                                    className={cn("flex-1 py-2 last:border-0 border-r font-semibold text-xs transition-all", igStoryUpload === num ? "bg-[#495C29] text-white" : "bg-white text-zinc-600 hover:bg-zinc-50")}
                                  >
                                    {num}x Upload
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* THREADS / WA / MITRA (Bila Dipilih) */}
                {["threads", "whatsapp", "mitra"].map((platId) => {
                  if (!selectedPlatforms.includes(platId as Platform)) return null;

                  const pkgs = otherPackages[platId as keyof typeof otherPackages];
                  return (
                    <div key={platId} className="pb-8 last:pb-0 border-zinc-100 last:border-0 border-b">
                      <div className="flex items-center gap-2 mb-4">
                        <h4 className="font-bold text-zinc-900 text-sm capitalize">{platId}</h4>
                      </div>
                      <div className="gap-3 grid grid-cols-1 md:grid-cols-2">
                        {pkgs.map((pkg) => {
                          const active = selectedPackages.includes(pkg.id);
                          return (
                            <button key={pkg.id} onClick={() => handlePackageToggle(pkg.id)} className={cn("relative p-4 border rounded-xl text-left transition-all", active ? "border-[#495C29] bg-[#EEF3E8]" : "border-zinc-200 bg-white")}>
                              <div className="flex items-start gap-2 mb-1">
                                {active ? <CheckSquare size={16} className="mt-0.5 text-[#495C29] shrink-0" /> : <Square size={16} className="mt-0.5 text-zinc-300 shrink-0" />}
                                <div>
                                  <p className="font-bold text-zinc-900 text-xs">{pkg.name}</p>
                                  <p className="text-[10px] text-zinc-500">{pkg.desc}</p>
                                </div>
                              </div>
                              <p className="mt-3 font-bold text-zinc-900 text-sm">Rp{formatPrice(pkg.price)}</p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </StepCard>
          )}

          {/* STEP 3: ADD ON */}
          <StepCard step={3} title="Add On (Opsional)">
            <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-2 mb-6">
              {addOns.map((addon) => {
                const active = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => setSelectedAddons((prev) => (prev.includes(addon.id) ? prev.filter((x) => x !== addon.id) : [...prev, addon.id]))}
                    className={cn("relative flex flex-col p-4 border rounded-xl text-left transition-all", active ? "border-[#495C29] bg-[#EEF3E8]" : "border-zinc-200 bg-white")}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      {active ? <CheckSquare size={16} className="mt-0.5 text-[#495C29] shrink-0" /> : <Square size={16} className="mt-0.5 text-zinc-300 shrink-0" />}
                      <div>
                        <p className="flex items-center gap-2 font-bold text-zinc-900 text-xs">
                          {addon.name}
                          <span className="bg-[#FDF9DC] px-1.5 py-0.5 rounded text-[#A69B56] text-[9px]">Add on</span>
                        </p>
                        <p className="mt-1 text-[10px] text-zinc-500 leading-tight">{addon.description}</p>
                      </div>
                    </div>
                    <div className="mt-auto pt-3 text-right">
                      <p className="font-bold text-zinc-900 text-sm">Rp{formatPrice(addon.price)}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 bg-[#F6F8F3] p-3 border border-[#E3EBCB] rounded-lg">
              <Info size={16} className="text-[#495C29] shrink-0" />
              <p className="text-[11px] text-zinc-600 md:text-xs">
                Setiap paket bundling endorse TikTok + Instagram (Reels/Feeds) akan mendapat <span className="font-bold">diskon 10%</span> dari total harga.
              </p>
            </div>
          </StepCard>
        </div>

        {/* SUMMARY SIDEBAR */}
        <aside className="top-24 sticky h-fit">
          <div className="bg-[#41512A] shadow-xl p-6 md:p-8 rounded-[1.5rem] text-white">
            <h3 className="mb-6 font-bold text-lg">Ringkasan Estimasi</h3>

            <div className="space-y-4">
              {/* TIKTOK SUMMARY */}
              {hasTikTok && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FaTiktok size={14} />
                    <span className="font-bold text-sm">TikTok</span>
                  </div>
                  <ul className="space-y-2 ml-[22px] text-white/80 text-xs">
                    {tiktokPackages
                      .filter((p) => selectedPackages.includes(p.id))
                      .map((pkg) => (
                        <li key={pkg.id} className="flex justify-between items-center">
                          <span className="flex items-center gap-2">
                            <span className="bg-white/50 rounded-full w-1 h-1 shrink-0" /> {pkg.name}
                          </span>
                          <span className="font-semibold text-white">Rp{formatPrice(pkg.price)}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              )}

              {/* INSTAGRAM SUMMARY */}
              {selectedPackages.some((id) => id.startsWith("ig_")) && (
                <div>
                  <div className="flex items-center gap-2 mt-4 mb-2">
                    <FaInstagram size={14} />
                    <span className="font-bold text-sm">Instagram</span>
                  </div>
                  <ul className="space-y-2 ml-[22px] text-white/80 text-xs">
                    {instagramPackages
                      .filter((p) => selectedPackages.includes(p.id))
                      .map((pkg) => {
                        const isStory = pkg.id === "ig_story";
                        return (
                          <li key={pkg.id} className="flex justify-between items-center">
                            <span className="flex items-center gap-2">
                              <span className="bg-white/50 rounded-full w-1 h-1 shrink-0" />
                              {pkg.name} {isStory && `(${igStoryUpload}x Upload)`}
                            </span>
                            <span className="font-semibold text-white">Rp{formatPrice(isStory ? getStoryPrice(igStoryUpload) : pkg.price)}</span>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}

              {/* OTHER PLATFORMS SUMMARY */}
              {["threads", "whatsapp", "mitra"].map((platId) => {
                const pkgs = otherPackages[platId as keyof typeof otherPackages];
                const selectedOthers = pkgs.filter((p) => selectedPackages.includes(p.id));

                if (selectedOthers.length === 0) return null;
                return (
                  <div key={platId} className="mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-sm capitalize">{platId}</span>
                    </div>
                    <ul className="space-y-2 ml-[12px] text-white/80 text-xs">
                      {selectedOthers.map((pkg) => (
                        <li key={pkg.id} className="flex justify-between items-center">
                          <span className="flex items-center gap-2">
                            <span className="bg-white/50 rounded-full w-1 h-1 shrink-0" /> {pkg.name}
                          </span>
                          <span className="font-semibold text-white">Rp{formatPrice(pkg.price)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}

              {selectedAddons.length > 0 && <div className="my-4 border-white/10 border-t"></div>}

              {/* ADD ONS SUMMARY */}
              {selectedAddons.length > 0 && (
                <div>
                  <p className="mb-3 font-bold text-[#FDF9DC] text-sm">Add On</p>
                  <ul className="space-y-2 ml-[10px] text-white/80 text-xs">
                    {selectedAddons.map((id) => {
                      const addon = addOns.find((a) => a.id === id);
                      if (!addon) return null;
                      return (
                        <li key={id} className="flex justify-between items-center">
                          <span className="flex items-center gap-2">
                            <span className="bg-white/50 rounded-full w-1 h-1 shrink-0" /> {addon.name}
                          </span>
                          <span className="font-semibold text-white">Rp{formatPrice(addon.price)}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>

            <div className="my-6 border-white/20 border-t" />

            <div className="space-y-2 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-white/80">Subtotal</span>
                <span className="font-bold">Rp{formatPrice(subtotal)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-[#B3CF58]">
                  <span>Diskon Bundling (10%)</span>
                  <span className="font-bold">- Rp{formatPrice(discount)}</span>
                </div>
              )}
            </div>

            <div className="text-center">
              <p className="mb-1 font-semibold text-white/80 text-xs">Total Estimasi</p>
              <p className="font-extrabold text-[#F3C546] text-3xl md:text-4xl">Rp{formatPrice(total)}</p>
              <p className="mt-2 text-[10px] text-white/60">Harga sudah termasuk pajak jika berlaku</p>
            </div>

            {hasSelectedPackages ? (
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://wa.me/6285178476086?text=${buildWA()}`}
                className="flex justify-center items-center gap-2 bg-[#F3C546] hover:bg-[#e0b641] mt-6 py-3.5 rounded-xl font-bold text-zinc-900 text-sm transition-colors"
              >
                <ShoppingCart size={18} />
                Checkout Sekarang
              </a>
            ) : (
              <button
                disabled
                className="flex justify-center items-center gap-2 bg-zinc-400 cursor-not-allowed mt-6 py-3.5 rounded-xl w-full font-bold text-zinc-600 text-sm"
              >
                <ShoppingCart size={18} />
                Pilih Paket Terlebih Dahulu
              </button>
            )}

            <p className="mt-4 px-2 text-[10px] text-white/60 text-center leading-relaxed">
              {hasSelectedPackages 
                ? "Tim Baboo Kos akan menghubungi Anda melalui WhatsApp untuk konfirmasi detail." 
                : "Silakan pilih minimal 1 paket untuk melanjutkan checkout."}
            </p>

            {/* Trust Badges */}
            <div className="gap-2 grid grid-cols-3 mt-6 pt-6 border-white/10 border-t text-white/70">
              <div className="flex flex-col items-center gap-1.5 text-center">
                <ShieldCheck size={18} />
                <span className="font-medium text-[9px] leading-tight">
                  Aman &<br />
                  Terpercaya
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center">
                <BadgeDollarSign size={18} />
                <span className="font-medium text-[9px] leading-tight">
                  Harga
                  <br />
                  Transparan
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center">
                <Clock size={18} />
                <span className="font-medium text-[9px] leading-tight">
                  Proses
                  <br />
                  Cepat
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default function SimulationPackage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen font-bold text-zinc-400">Memuat Simulasi...</div>}>
      <SimulationContent />
    </Suspense>
  );
}