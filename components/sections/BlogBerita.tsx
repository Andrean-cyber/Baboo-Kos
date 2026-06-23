"use client";

import { FileText, Users, ArrowUpRight, Quote, Newspaper } from "lucide-react";

// Struktur data jurnal — tinggal nambah objek baru ke array ini kalau ada jurnal lain
const jurnalList = [
  {
    id: "jurnal-1",
    title: "Mengungkapkan Efektivitas Strategi Pemasaran Digital Baboo Kos dengan Analisis Komprehensif Media Sosial",
    authors: ["Assyifa Hasanah", "Amalia Khoirun Nisa'", "Ma'wa Rimas Pawestri"],
    abstract:
      "Perkembangan teknologi saat ini, memicu berbagai pihak untuk merenovasi skema bisnis dari skema konvensional menuju digital. Salah satunya yaitu Baboo Kos yang menerapkan digitalisasi pada bisnisnya, baik dari segi pemanfaatan media sosial sebagai pemasaran sampai dengan digitalisasi operasional. Baboo Kos menjadi bisnis digital penyedia jasa untuk mencari kos, kontrakan, apartemen, dan villa, serta homestay se Indonesia. Metode penelitian yang digunakan yaitu pendekatan kualitatif dan teknik pengumpulan data yang digunakan yaitu melalui teknik wawancara dan dokumentasi. Penelitian ini menghasilkan gambaran rinci mengenai usaha Baboo Kos, pemanfaatan media sosial, penerapan komunikasi bisnis, kendala dan solusi yang dilakukan Baboo Kos agar tetap bertahan hingga saat ini.",
    url: "https://conference.um.ac.id/index.php/nsafe/article/view/8682",
    source: "Conference UM — NSAFE",
  },
  // Tambahkan jurnal berikutnya di sini dengan struktur yang sama
];

export default function BlogBeritaJurnal() {
  return (
    <section className="bg-zinc-50/60 min-h-screen antialiased selection:bg-[#EEF3E8] selection:text-[#495C29]">
      {/* HEADER HERO BANNER */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#EEF3E8] to-transparent pt-40 pb-12 text-center px-4">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(#495C29_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white border border-[#495C29]/20 px-3 py-1 rounded-full text-[11px] font-bold text-[#495C29] mb-4 shadow-sm">
            <Newspaper size={12} />
            <span>JURNAL & PUBLIKASI ILMIAH</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4 leading-tight">
            Blog & Berita
            <br />
            <span className="text-[#495C29]">Riset di Balik Layanan Baboo Kos 📚</span>
          </h1>
          <p className="text-zinc-600 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed px-2 mt-4">
            Kumpulan riset dan publikasi akademik yang membahas perjalanan bisnis Baboo Kos — mulai dari strategi pemasaran digital, pemanfaatan media sosial, hingga praktik komunikasi bisnis di lapangan.
          </p>
        </div>
      </div>

      {/* CORE WRAPPER CONTENT */}
      <div className="mx-auto px-4 md:px-8 pb-24 w-full max-w-[1280px] mt-4">
        {/* LIST JURNAL */}
        <div className="space-y-5">
          {jurnalList.map((jurnal) => (
            <a
              key={jurnal.id}
              href={jurnal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white p-6 md:p-8 rounded-3xl border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(73,92,41,0.06)] hover:border-[#495C29]/20 transition-all duration-300"
            >
              {/* Source tag + arrow */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#495C29] bg-[#EEF3E8] px-2.5 py-1 rounded-full">
                  <FileText size={11} />
                  {jurnal.source}
                </span>
                <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] font-semibold group-hover:text-[#495C29] transition-colors">
                  <span className="hidden sm:inline">Baca jurnal</span>
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-extrabold text-zinc-900 text-base md:text-xl tracking-tight leading-snug mb-3 group-hover:text-[#495C29] transition-colors">
                {jurnal.title}
              </h3>

              {/* Authors */}
              <div className="flex items-start gap-2 mb-4 text-zinc-500 text-xs">
                <Users size={14} className="shrink-0 mt-0.5" />
                <span className="leading-relaxed">{jurnal.authors.join(", ")}</span>
              </div>

              {/* Abstract */}
              <div className="flex gap-3 p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                <Quote size={16} className="shrink-0 text-[#495C29]/40 mt-0.5" />
                <p className="text-zinc-600 text-xs leading-relaxed line-clamp-4">
                  {jurnal.abstract}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
