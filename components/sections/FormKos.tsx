"use client";

import {
  Check,
  Calendar,
  Info,
  Search,
  ShieldCheck,
  Clock,
  Handshake,
  Star,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function KosCriteriaSection() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState<string>();
  const [budget, setBudget] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);
  const [recommendation, setRecommendation] = useState<string>();
  const [facilities, setFacilities] = useState<string[]>([]);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const bannedWords = [
  "anjing",
  "bangsat",
  "kontol",
  "memek",
  "ngentot",
  "tai",
  "bajingan",
  "goblok",
];

  const containsBadWord = (text: string) => {
  const normalized = text
    .toLowerCase()
    .replace(/[^a-z]/g, "");

  return bannedWords.some((word) =>
    normalized.includes(word)
  );
};

  const isFormValid =
  name.trim() !== "" &&
  city.trim() !== "" &&
  location.trim() !== "" &&
  gender &&
  recommendation &&
  date;
  const handleSubmit = () => {
      if (containsBadWord(notes)) {
        alert(
          "Catatan tambahan mengandung kata yang tidak diperbolehkan."
        );
        return;
      }

      if (!gender || !recommendation) {
        alert("Silakan lengkapi jenis kos dan jumlah rekomendasi.");
        return;
      }

      const message = `
      Halo Baboo Kos 👋

      Saya ingin mencari kos dengan kriteria berikut:

      *Nama: ${name}*
      *Jenis Kos: ${gender}*
      *Kabupaten/Kota: ${city}*
      *Lokasi Spesifik: ${location}*
      *Fasilitas: ${
        facilities.length > 0
          ? facilities.join(", ")
          : "Tidak ada preferensi khusus"
      }*
      *Budget per Bulan: ${budget ? `Rp ${Number(budget).toLocaleString("id-ID")}` : "-"}*
      *Jumlah Rekomendasi: ${recommendation} Kos*
      *Rencana Tanggal Huni: ${date || "-"}*
      *Catatan Tambahan: ${notes || "-"}*

      Terima kasih 🙏
      `;

      const encoded = encodeURIComponent(message);
      const phone = "6287785338441";
      const url = `https://wa.me/${phone}?text=${encoded}`;

      window.open(url, "_blank");
};

  const toggleFacility = (item: string) => {
    setFacilities((prev) =>
      prev.includes(item)
        ? prev.filter((f) => f !== item)
        : [...prev, item]
    );
  };
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
      {/* ================= HEADER ================= */}
      <div className={cn("flex", "flex-col", "items-center", "mb-10", "max-w-4xl", "text-center")}>
        <h3 className={cn("mb-2 font-bold text-[#495C29] text-sm md:text-base transition-all duration-700 ease-out", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>Form Kriteria Kos</h3>

        <h2 className={cn("mb-4", "font-bold", "text-slate-900", "text-3xl", "md:text-5xl", "tracking-tight", "transition-all", "duration-700", "ease-out", "delay-150", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Temukan Kos Sesuai Kebutuhan Anda
        </h2>

        <p className={cn("mb-6", "font-medium", "text-zinc-500", "text-sm", "md:text-base", "leading-relaxed", "transition-all", "duration-700", "ease-out", "delay-300", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          Isi kriteria kos yang anda inginkan. Tim Baboo Kos akan membantu mencarikan rekomendasi terbaik sesuai kebutuhan dan budget anda.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_420px] gap-10">
        {/* ================= LEFT FORM ================= */}
        <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-zinc-100">
          <h3 className="font-bold text-[#495C29] text-lg mb-10">
            FORM KRITERIA KOS CUSTOMERS BABOO KOS
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Nama */}
            <Input
              label="Nama Lengkap"
              placeholder="Masukkan nama lengkap Anda"
              value={name}
              onChange={setName}
            />
            {/* Jenis Kos */}
            <div>
              <label className="block mb-3 text-sm font-bold text-zinc-800">
                Jenis Kos
              </label>
              <div className="flex flex-wrap gap-3 text-zinc-800">
                {["Putra", "Putri", "Pasutri", "Campur"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setGender(item)}
                    className={cn(
                      "flex-1 flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm",
                      gender === item
                        ? "border-[#495C29] bg-[#EEF3E8]"
                        : "border-zinc-200"
                    )}
                  >
                    <span
                      className={cn(
                        "w-4 h-4 rounded-full border flex items-center justify-center",
                        gender === item
                          ? "border-[#495C29]"
                          : "border-zinc-300"
                      )}
                    >
                      {gender === item && (
                        <span className="w-2 h-2 bg-[#495C29] rounded-full" />
                      )}
                    </span>
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <Input
              label="Kabupaten / Kota Kos"
              placeholder="Pilih kabupaten / kota"
              value={city}
              onChange={setCity}
            />            

            <Input
                label="Lokasi spesifik yang diharapkan"
                placeholder="Contoh: Dekat kampus UGM, Seturan"
                value={location}
                onChange={setLocation}
              />
          </div>

          {/* ================= FASILITAS ================= */}
          <div className="mt-12">
            <label className="block text-sm font-bold mb-4 text-zinc-800">
              Fasilitas yang diinginkan
            </label>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-zinc-800">
              {[
                "Kamar Mandi Dalam",
                "Water Heater",
                "AC",
                "Listrik Token",
                "Dapur Bersama",
                "Parkir",
              ].map((item) => {
                const active = facilities.includes(item);
                return (
                  <button
                    key={item}
                    onClick={() => toggleFacility(item)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl border text-sm text-left",
                      "w-full min-h-[72px] md:min-h-[56px]",
                      active
                        ? "border-[#495C29] bg-[#EEF3E8]"
                        : "border-zinc-200"
                    )}
                  >
                    <span
                      className={cn(
                        "w-5 h-5 shrink-0 rounded-full border flex items-center justify-center",
                        active
                          ? "bg-[#495C29] border-[#495C29]"
                          : "border-zinc-300"
                      )}
                    >
                      {active && <Check size={14} className="text-white" />}
                    </span>
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================= BUDGET & REKOMENDASI ================= */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <label className="block text-sm font-bold mb-3 text-zinc-800">
                Budget per Bulan
              </label>
              <div className="flex items-center border border-zinc-200 rounded-xl overflow-hidden text-zinc-400">
                <span className="px-4 text-zinc-500">Rp</span>
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="Contoh: 1.500.000"
                  className="w-full px-4 py-3 outline-none text-zinc-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-3 text-zinc-800">
                Jumlah Rekomendasi yang diinginkan
              </label>
              <div className="flex gap-4">
                {["3", "4"].map((num) => (
                  <button
                    key={num}
                    onClick={() => setRecommendation(num)}
                    className={cn(
                      "flex-1 flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm text-zinc-800",
                      recommendation === num
                        ? "border-[#495C29] bg-[#EEF3E8]"
                        : "border-zinc-200"
                    )}
                  >
                    <span
                      className={cn(
                        "w-4 h-4 rounded-full border flex items-center justify-center",
                        recommendation === num
                          ? "border-[#495C29]"
                          : "border-zinc-300"
                      )}
                    >
                      {recommendation === num && (
                        <span className="w-2 h-2 bg-[#495C29] rounded-full" />
                      )}
                    </span>
                    {num} Kos
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ================= TANGGAL & CATATAN ================= */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <label className="block text-sm font-bold mb-3 text-zinc-800">
                Rencana tanggal dihuni
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  min={today}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full h-[52px] border border-zinc-200 rounded-xl px-4 outline-none text-zinc-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-3 text-zinc-800">
                Catatan Tambahan (Opsional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Catatan tambahan"
                className="w-full h-[52px] border border-zinc-200 rounded-xl px-4 py-3 outline-none resize-none h-[48px] text-zinc-800"
              />
            </div>
          </div>

          {/* ================= BUTTON ================= */}
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={cn(
              "mt-14 w-full py-4 rounded-2xl font-bold text-lg transition-all shadow-md",
              isFormValid
                ? "bg-[#495C29] hover:bg-[#3e4f23] text-white"
                : "bg-zinc-300 text-zinc-500 cursor-not-allowed"
            )}
          >
            Kirim Kriteria Saya
          </button>
        </div>

          {/* ================= RIGHT PANEL ================= */}
        <div className="flex flex-col gap-6">
          <div className="relative overflow-hidden rounded-[2rem] p-8 text-white shadow-xl bg-gradient-to-br from-[#4B5D2B] to-[#2F3A18]">

            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-40 bg-center bg-cover pointer-events-none"
              style={{ backgroundImage: "url('/line2.svg')" }}
            />

            <div className="relative z-10">
              <h3 className="font-bold text-lg mb-6">
                Mengapa Memilih Baboo Kos?
              </h3>

            <div className="space-y-6 text-sm">
              <RightItem icon={<Search size={18} />} title="Pencarian Sesuai Kebutuhan" />
              <RightItem icon={<ShieldCheck size={18} />} title="Rekomendasi Terkurasi" />
              <RightItem icon={<Handshake size={18} />} title="Dibantu Sampai Deal" />
              <RightItem icon={<Clock size={18} />} title="Hemat Waktu & Tenaga" />
            </div>

            <div className="mt-10 pt-6 border-t border-white/20">
              <div className="flex items-center gap-3">
                <Star className="text-yellow-400" />
                <div>
                  <p className="text-sm">Rata-rata rekomendasi</p>
                  <p className="font-bold text-lg">
                    dikirim dalam 2-6 hari
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-white/80">
                10.000+ Customer Puas
              </p>
            </div>
          </div>
          </div>

          {/* Informasi Penting */}
          <div className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Info size={18} className="text-[#495C29]" />
              <p className="font-bold text-[#495C29]">
                Informasi Penting
              </p>
            </div>

            <ul className="text-sm text-zinc-600 space-y-2 list-disc pl-5">
              <li>Kriteria dan budget harus realistis.</li>
              <li>Kami proses sesuai isi form.</li>
              <li>Customer Service Baboo Kos akan menghubungi Anda melalui WhatsApp dari nomor operasional tim kami.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-bold mb-3 text-zinc-800">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-zinc-200 rounded-xl px-4 py-3 outline-none placeholder:text-zinc-400 text-zinc-900"
      />
    </div>
  );
}

function RightItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-white/10 p-3 rounded-lg">{icon}</div>
      <p className="font-medium">{title}</p>
    </div>
  );
}