"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  Compass, Heart, Map, Users2, Wallet, 
  Sparkles, ChevronRight, Clock, ShieldAlert, CheckCircle2
} from "lucide-react";

// Struktur data handbook agar kode bersih, modular, dan rapi
const handbookSections = [
  {
    id: "berdamai-homesick",
    title: "Bagian 1: Berdamai Dengan Homesick (Mental & Emotional Survival)",
    shortTitle: "Mental & Homesick",
    icon: <Heart size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
          Homesick itu nyata dan bukan berarti kamu lemah. Ini adalah respons emosional yang wajar saat kamu beradaptasi dengan lingkungan baru. Begini cara menghalaunya:
        </p>
        
        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 hover:border-zinc-200/80 transition-colors">
          <strong className="text-zinc-800 text-sm block mb-1">🏠 1. Bawa "Comfort Objects" Dari Rumah</strong>
          <p className="text-zinc-600 text-xs leading-relaxed">Jangan ragu untuk membawa barang personal yang punya nilai memori tinggi dari kamar lamamu. Entah itu bantal kesayangan, selimut, lampu tidur, atau bahkan pajangan kecil. Keberadaan barang-barang familiar ini secara psikologis bisa mengurangi kecemasan di tempat baru yang belum kamu kenal sepenuhnya.</p>
        </div>

        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 hover:border-zinc-200/80 transition-colors">
          <strong className="text-zinc-800 text-sm block mb-1">🎛️ 2. Atur Ritme Komunikasi (Don't Overdo It)</strong>
          <p className="text-zinc-600 text-xs leading-relaxed mb-3">Menghubungi orang rumah atau sahabat lama itu wajib, tapi buatlah jadwal yang sehat. Sering kali, menelpon rumah setiap jam justru bikin kamu makin tenggelam dalam rasa rindu dan membatasi kamu untuk mengeksplorasi dunia barumu. Alihkan energi untuk merancang rutinitas harian yang padat namun menyenangkan.</p>
          <div className="p-3 bg-[#EEF3E8]/40 border-l-2 border-[#495C29] text-zinc-700 font-medium text-xs rounded-r-xl">
            💡 <strong className="text-zinc-800">Pro Tip:</strong> Ganti sesi melamun sore hari dengan berolahraga ringan atau jalan-jalan santai di sekitar area kos untuk membiasakan indramu dengan lingkungan sekitar.
          </div>
        </div>

        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 hover:border-zinc-200/80 transition-colors">
          <strong className="text-zinc-800 text-sm block mb-1">🎨 3. Personalisasi Kamar Kos Jadi "My Safe Space"</strong>
          <p className="text-zinc-600 text-xs leading-relaxed">Kamar kos adalah basecamp utamamu. Estetika dan kerapian kamar punya korelasi langsung dengan kesehatan mentalmu. Atur tata letak meja belajar, pasang aromaterapi yang menenangkan, dan pastikan pencahayaan kamar terasa hangat agar kamu selalu merasa pulang ke tempat yang aman (<span className="italic font-medium text-zinc-700">safe space</span>) setiap kali selesai beraktivitas.</p>
        </div>
      </div>
    )
  },
  {
    id: "memilih-area",
    title: "Bagian 2: Strategi Memilih Area Kosan (Vibe & Walkability Check)",
    shortTitle: "Strategi Memilih Area",
    icon: <Map size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
          Memilih area tempat tinggal bukan cuma soal jarak tempuh ke kampus atau kantor. Suasana lingkungan sekitar (<span className="italic font-medium text-zinc-700">neighborhood vibe</span>) sangat menentukan tingkat betah atau tidaknya kamu di perantauan.
        </p>

        <div className="flex gap-3 items-start p-1">
          <CheckCircle2 size={16} className="text-[#495C29] shrink-0 mt-0.5" />
          <div>
            <strong className="text-zinc-800 text-sm block mb-0.5">📍 1. Cari Area yang "Walkable" & Berdenyut</strong>
            <p className="text-zinc-600 text-xs leading-relaxed">Pilihlah area kosan yang memiliki akses jalan kaki yang baik menuju fasilitas umum harian. Daerah yang hidup biasanya dikelilingi oleh opsi tempat makan yang variatif (dari warung lokal hingga kafe), minimarket, tempat fotokopi, hingga apotek. Berada di lingkungan yang aktif akan mengurangi rasa sepi dibandingkan tinggal di area yang terlalu sunyi terisolasi.</p>
          </div>
        </div>

        <div className="flex gap-3 items-start p-1">
          <CheckCircle2 size={16} className="text-[#495C29] shrink-0 mt-0.5" />
          <div>
            <strong className="text-zinc-800 text-sm block mb-0.5">🌳 2. Dekat dengan Komunitas & Ruang Publik</strong>
            <p className="text-zinc-600 text-xs leading-relaxed">Rekomendasi terbaik bagi anak muda adalah memilih area penyangga universitas atau pusat bisnis yang tergolong "hub" anak muda. Area seperti ini biasanya menyediakan ruang ketiga (<span className="italic font-medium text-zinc-700">third space</span>) seperti taman kota, perpustakaan komunal, atau <span className="italic font-medium text-zinc-700">co-working space</span> mini yang memudahkan kamu untuk keluar kamar dan tetap produktif.</p>
          </div>
        </div>

        <div className="p-4 bg-amber-50/60 border border-amber-200/60 rounded-xl flex gap-3 items-start">
          <ShieldAlert size={16} className="text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-900 text-xs block mb-0.5">Kriteria Area Ideal:</strong>
            <p className="text-amber-800/90 text-xs leading-relaxed">Pastikan sistem pencahayaan jalanan umum di malam hari sangat mumpuni demi meminimalkan <span className="italic font-semibold text-amber-900">anxiety</span> atau kecemasan saat harus pulang larut malam karena tugas kelompok.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "navigasi-pertemanan",
    title: "Bagian 3: Navigasi Pertemanan & Memilih Circle (Setting Boundaries)",
    shortTitle: "Navigasi Pertemanan",
    icon: <Users2 size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
          Bertemu dengan banyak orang baru bisa jadi sangat seru, tapi jangan sampai kamu kehilangan jati diri demi sekadar diterima. Memilih lingkungan pertemanan (<span className="italic font-medium text-zinc-700">circle</span>) di perantauan membutuhkan strategi:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-4 bg-[#EEF3E8]/40 border border-[#495C29]/10 rounded-xl">
            <span className="font-bold text-zinc-800 text-xs block mb-1">🤝 1. Cari yang Satu Frekuensi & Saling Support</span>
            <span className="text-zinc-600 text-xs leading-relaxed block">Di awal merantau, perluas jalinan pertemanan seluas-luasnya, namun mulailah menyeleksi siapa saja yang membawa dampak positif bagi perkembangan dirimu. Cari teman yang suportif saat kamu sedang berjuang menghadapi tugas-tugas sulit, bukan yang hanya ada saat momen hura-hura saja.</span>
          </div>
          
          <div className="p-4 bg-[#EEF3E8]/40 border border-[#495C29]/10 rounded-xl">
            <span className="font-bold text-zinc-800 text-xs block mb-1">🚧 2. Berani Menerapkan Batasan (Setting Boundaries)</span>
            <span className="text-zinc-600 text-xs leading-relaxed block">Menjadi anak kos yang asyik bukan berarti harus selalu mengiyakan semua ajakan. Kamu berhak dan wajib menentukan batasan pribadi demi kesehatan mental dan kestabilan finansialmu.</span>
          </div>
        </div>

        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 space-y-2">
          <div className="flex gap-2 items-start text-xs text-zinc-600">
            <span className="text-[#495C29] font-bold mt-0.5">•</span>
            <p>Berani berkata <strong className="text-zinc-800">"tidak"</strong> secara sopan saat diajak nongkrong jika kondisi dompet sudah menipis atau kamu sedang butuh istirahat.</p>
          </div>
          <div className="flex gap-2 items-start text-xs text-zinc-600">
            <span className="text-[#495C29] font-bold mt-0.5">•</span>
            <p>Komunikasikan dengan tegas dan tenang jika ada kebiasaan teman kos lain yang mulai mengganggu kenyamanan belajarmu di area komunal.</p>
          </div>
        </div>

        <div className="p-3 bg-zinc-100/70 text-zinc-500 font-medium text-xs rounded-xl text-center italic">
          🔒 <strong className="text-zinc-700 not-italic">Anti-Freak Rule:</strong> Teman yang berkualitas tidak akan menjauhimu hanya karena kamu memiliki prinsip hidup dan batasan waktu (<span className="font-semibold text-zinc-600">boundaries</span>) yang jelas.
        </div>
      </div>
    )
  },
  {
    id: "life-hacks",
    title: "Bagian 4: Life Hacks & Financial Discipline (Biar Gak Boncos)",
    shortTitle: "Life Hacks & Finansial",
    icon: <Wallet size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
          Kemandirian sejati diuji dari bagaimana kamu mengelola dua aset paling berharga: waktu dan uang.
        </p>

        <div className="border-l-2 border-[#495C29] pl-3 py-0.5">
          <strong className="text-zinc-800 text-xs block mb-0.5">📊 1. Alokasi Dana dengan Metode Pos-Pos Anggaran</strong>
          <p className="text-zinc-600 text-xs leading-relaxed">Begitu menerima uang saku bulanan atau gaji, langsung pecah ke dalam pos anggaran yang kaku menggunakan aplikasi <span className="italic font-medium text-zinc-700">digital banking</span>. Pisahkan dana untuk kebutuhan mutlak (sewa kos, makan harian, transportasi) dan kebutuhan sekunder (hiburan, nongkrong). Sisa anggaran wajib disisihkan di awal sebagai dana darurat.</p>
        </div>

        <div className="border-l-2 border-[#495C29] pl-3 py-0.5">
          <strong className="text-zinc-800 text-xs block mb-0.5">🍳 2. Kuasai Basic Life Skills</strong>
          <p className="text-zinc-600 text-xs leading-relaxed">Bisa memasak hidangan praktis, mencuci pakaian sendiri, dan merawat kebersihan kamar adalah bentuk investasi terbaik. Menjaga kamar tetap rapi terbukti secara ilmiah mampu mereduksi kadar stres dan membuat pikiran jauh lebih jernih saat menghadapi rutinitas yang padat.</p>
        </div>
      </div>
    )
  }
];

export default function HandbookAnakRantau() {
  const [activeSection, setActiveSection] = useState(handbookSections[0].id);

  // Efek Scroll-spy untuk melacak posisi bacaan aktif
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of handbookSections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset -80 memberikan margin aman agar heading tidak terpotong navbar
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-zinc-50/60 min-h-screen antialiased selection:bg-[#EEF3E8] selection:text-[#495C29]">
      {/* HEADER HERO BANNER — Menggunakan pt-32 agar posisi teks pengantar agak kebawah sedikit */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#EEF3E8] to-transparent pt-40 pb-12 text-center px-4">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(#495C29_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white border border-[#495C29]/20 px-3 py-1 rounded-full text-[11px] font-bold text-[#495C29] mb-4 shadow-sm">
            <Compass size={12} className="text-[#495C29]" />
            <span>EDISI SURVIVAL & LIFESTYLE — RESOURCES BABOO KOS</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4 leading-tight">
            The Ultimate Anak Rantau Handbook:
            <span className="text-[#495C29]">Panduan Eksklusif Biar Betah Ngekos & Anti-Homesick 🚀</span>
          </h1>
          <p className="text-zinc-600 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed px-2 mt-4">
            Keluar dari zona nyaman dan memulai hidup mandiri di kota orang adalah <span className="italic font-medium text-zinc-700">milestone</span> besar. Rasa cemas, <span className="italic font-medium text-zinc-700">excited</span>, sekaligus kangen rumah (<span className="italic font-medium text-zinc-700">homesick</span>) adalah paket lengkap yang valid dirasakan oleh semua anak rantau pemula. Biar proses adaptasimu berjalan mulus, seru, dan bebas dari drama <span className="italic font-medium text-zinc-700">mental-breakdown</span>, <strong className="text-[#495C29]">Baboo Kos</strong> sudah merangkum panduan taktis transisi hidup mandiri khusus buat generasi masa kini.
          </p>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-zinc-400 text-[11px]">
            <Clock size={12} />
            <span>Baboo Kos — The Ultimate Anak Rantau Handbook Halaman 1 dari 4</span>
          </div>
        </div>
      </div>

      {/* CORE WRAPPER CONTENT */}
      <div className="mx-auto px-4 md:px-8 pb-24 w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
        
        {/* LEFT SIDE: STICKY DESKTOP NAVIGATION */}
        <div className="hidden lg:block lg:col-span-4 sticky top-24 self-start bg-white p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.015)] border border-zinc-100/80">
          <h3 className="font-bold text-zinc-400 text-[11px] mb-4 px-2 uppercase tracking-wider">Modul Panduan</h3>
          <div className="flex flex-col gap-1">
            {handbookSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left text-xs font-semibold tracking-wide transition-all group",
                  activeSection === section.id 
                    ? "bg-[#EEF3E8] text-[#495C29] shadow-sm" 
                    : "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50"
                )}
              >
                <div className={cn(
                  "p-1.5 rounded-lg shrink-0 transition-colors",
                  activeSection === section.id ? "bg-[#495C29] text-white" : "bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200"
                )}>
                  {section.icon}
                </div>
                <span className="truncate flex-1">{section.shortTitle}</span>
                <ChevronRight size={14} className={cn("opacity-0 transition-all -translate-x-1", activeSection === section.id && "opacity-100 translate-x-0 text-[#495C29]")} />
              </button>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-zinc-100 px-2 text-[11px] text-zinc-400 leading-relaxed">
            Gunakan panduan navigasi di atas untuk langsung membaca strategi spesifik seputar manajemen mental, lingkungan area, maupun kedisiplinan keuangan.
          </div>
        </div>

        {/* RIGHT SIDE: CONTENT CARDS */}
        <div className="lg:col-span-8 space-y-6">
          {handbookSections.map((section) => (
            <div 
              key={section.id} 
              id={section.id}
              className={cn(
                "bg-white p-6 md:p-8 rounded-3xl border transition-all duration-300 scroll-mt-20",
                activeSection === section.id 
                  ? "shadow-[0_20px_40px_rgba(73,92,41,0.03)] border-[#495C29]/20" 
                  : "shadow-[0_8px_30px_rgb(0,0,0,0.01)] border-zinc-100"
              )}
            >
              <div className="flex items-center gap-3.5 pb-4 mb-5 border-b border-zinc-100">
                <div className="text-[#495C29] bg-[#EEF3E8] p-2.5 rounded-xl shrink-0">
                  {section.icon}
                </div>
                <h2 className="font-extrabold text-zinc-900 text-base md:text-lg tracking-tight">
                  {section.title}
                </h2>
              </div>

              {/* Isi konten dari tiap section */}
              {section.content}
            </div>
          ))}

          {/* FINAL CONCLUSION BANNER: BABOO KOS CLOSING CTA */}
          <div className="bg-gradient-to-r from-[#495C29] to-[#5a7035] rounded-3xl p-6 md:p-8 text-white shadow-md relative overflow-hidden group transition-all duration-300 hover:shadow-lg">
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-10 translate-y-10 pointer-events-none group-hover:scale-105 transition-transform duration-500">
              <Sparkles size={200} />
            </div>
            
            <div className="relative z-10 max-w-xl">
              <span className="inline-block bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-3">
                🌟 Welcome to the Independence Era!
              </span>
              <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-6">
                Merantau adalah fase transformasi terbaik untuk membentuk mentalitas yang tangguh dan mandiri. Nikmati setiap proses adaptasinya, jangan ragu untuk keluar dan bersosialisasi, serta jadikan kamar kosmu sebagai tempat ternyaman untuk bertumbuh. 
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 mb-6 text-xs leading-relaxed font-medium text-white">
                🚀 Baboo Kos selalu siap menemani langkah awal perjalanan mandirimu dengan menyediakan hunian terbaik yang aman, transparan, dan penuh kenyamanan.
              </div>
              
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10 text-[11px] text-white/70">
                <span className="font-medium text-white/90">Baboo Kos — The Ultimate Anak Rantau Handbook</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}