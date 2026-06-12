"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  Shield, Database, Eye, Share2, Lock, Fingerprint, 
  Cookie, MessageCircle, RefreshCw, Mail, Globe, Clock, 
  ChevronRight, ArrowRight, UserCheck
} from "lucide-react";

const privacySections = [
  {
    id: "data-kumpul",
    title: "1. Data yang Kita Kumpulin (Kepo Buat Kebaikan)",
    shortTitle: "Data yang Dikumpulkan",
    icon: <Database size={20} />,
    content: (
      <div className="space-y-6">
        <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
          Kita cuma minta data yang beneran butuh aja kok demi kelancaran kamu dapet kosan impian. Data ini dibagi jadi dua cara:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-[#EEF3E8]/40 border border-[#495C29]/10 rounded-2xl">
            <span className="font-bold text-zinc-950 text-sm block mb-3 text-[#495C29]">🙋‍♂️ A. Data yang Kamu Kasih Secara Sadar:</span>
            <ul className="space-y-2.5 text-zinc-600 text-xs leading-relaxed">
              <li className="flex gap-2"><span className="text-[#495C29] font-bold">•</span> <span><strong className="text-zinc-800">Profil Kamu:</strong> Nama lengkap, alamat email, dan nomor WhatsApp aktif (biar gampang dihubungin sama Customer Support kami).</span></li>
              <li className="flex gap-2"><span className="text-[#495C29] font-bold">•</span> <span><strong className="text-zinc-800">Verifikasi Identitas:</strong> Foto KTP atau identitas lainnya (khusus buat tamu villa dan owner kos yang mau promosi kos-kosannya, biar komunitas kita aman dari penipu).</span></li>
              <li className="flex gap-2"><span className="text-[#495C29] font-bold">•</span> <span><strong className="text-zinc-800">Data Kosan:</strong> Kalau kamu owner kos, kita bakal minta data detail kosan kamu, foto, harga, dan lokasi kosan.</span></li>
            </ul>
          </div>

          <div className="p-5 bg-zinc-50 border border-zinc-100 rounded-2xl">
            <span className="font-bold text-zinc-950 text-sm block mb-3 text-zinc-700">🤖 B. Data yang Kekumpul Otomatis (Tech Stuff):</span>
            <div className="p-3 bg-white rounded-xl border border-zinc-100 mb-2">
              <p className="text-zinc-600 text-xs leading-relaxed">
                IP address, jenis device yang kamu pakai (HP atau laptop), jenis browser, dan halaman website mana aja yang sering kamu klik pas lagi nyari informasi kita.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "tujuan-data",
    title: "2. Buat Apa Sih Data Kamu Kita Pakai?",
    shortTitle: "Tujuan Penggunaan Data",
    icon: <Eye size={20} />,
    content: (
      <div className="space-y-3">
        <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mb-2">
          Data yang udah kekumpul gak bakal kita anggurin atau salah gunakan. Kita pakai data itu buat:
        </p>
        {[
          "Bantu kamu verifikasi 2 langkah untuk penyewa villa kami dengan lancar tanpa ribet.",
          "Nghubungin kamu terkait status booking kosan atau update penting dari platform kita.",
          "Proses pembayaran uang jasa pencarian kos biar aman dan tervalidasi lewat sistem verifikasi resmi.",
          "Bikin platform Baboo Kos makin pinter lewat analisis performa, jadi websitenya gak lemot pas kamu akses.",
          "Menjaga keamanan bareng-bareng supaya gak ada akun bodong atau penipuan berkedok sewa kos."
        ].map((item, idx) => (
          <div key={idx} className="flex gap-3 items-start bg-zinc-50 p-3 rounded-xl border border-zinc-100/70">
            <div className="w-5 h-5 rounded-full bg-[#EEF3E8] text-[#495C29] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
              {idx + 1}
            </div>
            <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    )
  },
  {
    id: "bagi-data",
    title: "3. Bagi-Bagi Data? Gak Bakal Dijual!",
    shortTitle: "Keamanan Data Pihak Ke-3",
    icon: <Share2 size={20} />,
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-emerald-50 text-emerald-900 font-bold rounded-xl border border-emerald-100 text-xs md:text-sm">
          🔒 Satu hal yang pasti: Kita gak bakal pernah ngejual data pribadi kamu ke pihak ketiga cuma demi iklan yang gak jelas.
        </div>
        <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
          Data kamu cuma bakal dishare ke pihak yang emang krusial banget, yaitu:
        </p>

        <div className="space-y-3">
          <div className="p-5 border-l-4 border-[#495C29] bg-zinc-50 rounded-r-xl">
            <div className="flex items-center gap-2 mb-1.5">
              <UserCheck size={16} className="text-[#495C29]" />
              <strong className="text-zinc-800 text-xs md:text-sm">Owner Kos</strong>
            </div>
            <p className="text-zinc-600 text-xs leading-relaxed">
              Khusus buat kamu yang mendaftarkan properti sebagai Owner Kos, kita mewajibkan verifikasi pakai foto KTP. Kenapa harus se-strict ini? Jawabannya simpel: buat menjaga keamanan bareng-bareng. Kita mau mastiin platform kita bersih dari akun bodong atau penipuan berkedok sewa kos yang sering bikin cemas pencari kos. Dengan KTP yang terverifikasi, kamu membantu ngebangun ekosistem Baboo Kos yang legit dan tepercaya, jadi anak kos pun merasa aman dan gak ragu buat langsung transaksi sama kamu.
            </p>
          </div>

          <div className="p-4 border-l-4 border-zinc-400 bg-zinc-50 rounded-r-xl">
            <strong className="text-zinc-800 text-xs md:text-sm block mb-1">💳 Payment Gateway</strong>
            <p className="text-zinc-600 text-xs leading-relaxed">
              Kalau ada transaksi digital, data pembayaran akan diselaraskan dengan hasil mutasi rekening untuk rekap pembukuan keuangan.
            </p>
          </div>

          <div className="p-4 border-l-4 border-red-400 bg-red-50/30 rounded-r-xl">
            <strong className="text-red-950 text-xs md:text-sm block mb-1">⚖️ Pihak Berwenang</strong>
            <p className="text-zinc-600 text-xs leading-relaxed">
              Kita cuma bakal buka data kamu kalau diwajibkan oleh hukum resmi atau perintah pengadilan dari pemerintah Indonesia *(amit-amit ya, jangan sampai ada masalah hukum)*.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "keamanan-cloud",
    title: "4. Penyimpanan & Keamanan (Tenang, Aman Banget)",
    shortTitle: "Penyimpanan & Keamanan",
    icon: <Lock size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
          Kita nyimpen data kamu menggunakan infrastruktur cloud terpercaya lewat platform <span className="font-bold text-zinc-900">Vercel</span> dan database terenkripsi modern. Kita selalu berusaha sekuat tenaga pakai standar keamanan digital terbaik biar data kamu gak bocor atau diintip orang gak bertanggung jawab.
        </p>
        <div className="p-4 bg-amber-50 text-amber-800 rounded-xl border border-amber-100 text-xs leading-relaxed">
          💡 <strong>Tips Aman:</strong> Perlu diingat juga ya, dunia internet itu dinamis banget. Jadi, selain kita jagain dari dalem, pastikan kamu juga jangan sembarangan bagiin password akun Baboo Kos kamu ke siapa pun.
        </div>
      </div>
    )
  },
  {
    id: "hak-pemilik",
    title: "5. Hak Kamu Sebagai Pemilik Data (You're the Boss)",
    shortTitle: "Hak Kendali Data Anda",
    icon: <Fingerprint size={20} />,
    content: (
      <div className="space-y-3">
        <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mb-2">
          Sesuai aturan UU PDP, kamu punya kendali penuh atas data kamu sendiri. Kamu berhak buat:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl text-center">
            <span className="text-xl mb-1 block">🔍</span>
            <p className="text-zinc-600 text-xs font-medium">Ngeliat data apa aja sih yang kita simpen tentang kamu (pernah dikirimkan ke WhatsApp).</p>
          </div>
          <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl text-center">
            <span className="text-xl mb-1 block">🛠️</span>
            <p className="text-zinc-600 text-xs font-medium">Ngebenerin data kalau ada yang typo, ganti nomor WhatsApp, atau ganti alamat email.</p>
          </div>
          <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl text-center">
            <span className="text-xl mb-1 block">❌</span>
            <p className="text-zinc-600 text-xs font-medium">Menarik kembali persetujuan penggunaan data kapan saja kamu mau.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "tentang-cookies",
    title: "6. Tentang Cookies (Bukan Camilan Ya)",
    shortTitle: "Kebijakan Cookies",
    icon: <Cookie size={20} />,
    content: (
      <p className="text-zinc-600 text-xs md:text-sm leading-relaxed bg-zinc-50 p-4 rounded-xl border border-zinc-100">
        Website Baboo Kos pakai cookies (file teks kecil yang nempel di browser kamu). Fungsinya simpel banget: biar sistem kita bisa inget preferensi kamu, contohnya unit villa yang sempet kamu masukin ke daftar wishlist atau order jasa pencarian kos bahkan paket promosi favorit kamu. Kalau kamu ngerasa keganggu, kamu bisa matiin fitur cookies ini lewat settingan browser kamu kok, tapi konsekuensinya beberapa fitur personalisasi di web kita mungkin jadi agak kurang optimal.
      </p>
    )
  },
  {
    id: "wa-komunikasi",
    title: "7. Komunikasi Lewat WhatsApp",
    shortTitle: "Integrasi WhatsApp",
    icon: <MessageCircle size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
          Karena kita tahu anak muda zaman sekarang lebih suka yang instan, Baboo Kos banyak integrasi pakai WhatsApp buat ngirim notifikasi penawaran, verifikasi, atau obrolan seru dengan Admin kita *(free consultation)*. Dengan mendaftarkan nomor HP kamu, kamu setuju buat dapet update story dari kita. Kita gak bakal spamming hal-hal gak penting kok, pure cuma info kosan kamu aja.
        </p>
        <div className="pt-2">
          <a 
            href="#" // Silakan isi link saluran WA asli di sini
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold text-xs bg-emerald-50 px-4 py-2 rounded-xl transition-all"
          >
            <span>💬 Follow Saluran Resmi WhatsApp Kami</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    )
  },
  {
    id: "ubah-kebijakan",
    title: "8. Perubahan Kebijakan Ini",
    shortTitle: "Perubahan Dokumen",
    icon: <RefreshCw size={20} />,
    content: (
      <p className="text-zinc-600 text-xs md:text-sm leading-relaxed bg-zinc-50 p-4 rounded-xl border border-zinc-100">
        Kadang-kadang, kita bakal update dokumen Kebijakan Privasi ini kalau ada fitur baru di website atau ada penyesuaian regulasi hukum terbaru. Kalau ada perubahan yang signifikan, kita bakal kasih tahu lewat pengumuman di web atau email kamu. Pastikan kamu cek halaman ini berkala ya biar tetep up-to-date.
      </p>
    )
  }
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(privacySections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (const section of privacySections) {
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
      const offsetTop = element.offsetTop - 40;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-zinc-50/50 min-h-screen">
      {/* HERO BANNER */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#EEF3E8] to-transparent pt-40 pb-12 text-center px-4">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(#495C29_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white border border-[#495C29]/20 px-3 py-1 rounded-full text-[11px] font-bold text-[#495C29] mb-4 shadow-sm">
            <Shield size={12} />
            <span>Privacy & Data Protection</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
            Kebijakan Privasi <span className="text-[#495C29]">Baboo Kos</span>
          </h1>
          <p className="text-zinc-600 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed px-2">
            Halo! Selamat datang di <strong className="text-[#495C29]">Baboo Kos</strong>. Pas kamu lagi asyik nyari kosan atau pakai layanan kita, kita berkomitmen penuh buat ngejaga data pribadi kamu tetap aman dan terlindungi. Kebijakan Privasi ini dibikin sesuai dengan Undang-Undang Perlungan Data Pribadi (UU PDP) No. 27 Tahun 2022. No drama, no tipu-tipu, semua hal tentang data kamu bakal dibahas transparan di sini.
          </p>
          <p className="text-zinc-500 text-xs max-w-xl mx-auto mt-3 italic">
            "Tenang, bahasanya sengaja dibikin santai biar kamu gak pusing bacanya!"
          </p>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-zinc-400 text-[11px]">
            <Clock size={12} />
            <span>Terakhir Diperbarui: 9 Juni 2026</span>
          </div>
        </div>
      </div>

      {/* CORE WRAPPER CONTENT */}
      <div className="mx-auto px-4 md:px-8 pb-24 w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
        
        {/* DESKTOP SIDEBAR NAVIGATION */}
        <div className="hidden lg:block lg:col-span-4 sticky top-6 self-start bg-white p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-zinc-100">
          <h3 className="font-bold text-zinc-400 text-xs mb-4 px-2 uppercase tracking-wider">Daftar Regulasi</h3>
          <div className="flex flex-col gap-1">
            {privacySections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "flex items-center gap-3 w-full px-3 py-3 rounded-xl text-left text-xs font-semibold tracking-wide transition-all group",
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
                <ChevronRight size={14} className={cn("opacity-0 transition-transform -translate-x-1", activeSection === section.id && "opacity-100 translate-y-0")} />
              </button>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-zinc-100 px-2 text-[10px] text-zinc-400 leading-relaxed">
            Dengan tetap lanjut scrolling dan pakai platform Baboo Kos, berarti kamu udah paham dan setuju sama poin S&K ini.
          </div>
        </div>

        {/* RIGHT SIDE CONTENT CARDS */}
        <div className="lg:col-span-8 space-y-6">
          {privacySections.map((section) => (
            <div 
              key={section.id} 
              id={section.id}
              className={cn(
                "bg-white p-6 md:p-8 rounded-3xl border transition-all duration-300",
                activeSection === section.id 
                  ? "shadow-[0_20px_40px_rgba(73,92,41,0.04)] border-[#495C29]/20" 
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

              {section.content}
            </div>
          ))}

          {/* SECTION 9: KONTAK KITA GRID CARD */}
          <div id="kontak-kita" className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)]">
            <div className="flex items-center gap-3.5 pb-4 mb-6 border-b border-zinc-100">
              <div className="text-[#495C29] bg-[#EEF3E8] p-2.5 rounded-xl shrink-0">
                <MessageCircle size={20} />
              </div>
              <h2 className="font-extrabold text-zinc-900 text-base md:text-lg tracking-tight">
                9. Kontak Kita (Ngobrol atau Tanya-Tanya)
              </h2>
            </div>
            
            <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mb-6">
              Kalau ada yang masih bikin kamu bingung, mau komplain, atau pengen minta hapus data pribadi kamu dari database Baboo Kos, langsung aja colek tim kita di sini:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-zinc-50 rounded-2xl border border-zinc-100/70">
                <div className="p-2 bg-zinc-200 text-zinc-700 rounded-xl"><Globe size={16} /></div>
                <div>
                  <span className="text-[10px] text-zinc-400 block font-medium">Official Website</span>
                  <a href="https://www.babookos.com" target="_blank" rel="noreferrer" className="text-xs font-bold text-zinc-800 hover:underline">www.babookos.com</a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-zinc-50 rounded-2xl border border-zinc-100/70">
                <div className="p-2 bg-zinc-200 text-zinc-700 rounded-xl"><Mail size={16} /></div>
                <div>
                  <span className="text-[10px] text-zinc-400 block font-medium">Email Support</span>
                  <a href="mailto:babookos@gmail.com" className="text-xs font-bold text-zinc-800 hover:underline">babookos@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-[#EEF3E8]/30 rounded-2xl border border-[#495C29]/10">
              <span className="text-[11px] font-bold text-[#495C29] block mb-3 uppercase tracking-wide">WhatsApp Customer Line:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { name: "Baboo Kos Line", num: "+62 877-8533-8441", link: "6287785338441" },
                  { name: "Baboo Villa Line", num: "+62 858-5223-7843", link: "6285852237843" },
                  { name: "Marketing Baboo Kos", num: "+62 851-7847-6086", link: "6285178476086" },
                  { name: "HRD Team Line", num: "+62 851-1120-3894", link: "6285111203894" }
                ].map((wa, i) => (
                  <a 
                    key={i}
                    href={`https://wa.me/${wa.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center bg-white p-3 rounded-xl border border-zinc-100 shadow-sm hover:border-[#495C29]/30 transition-all group"
                  >
                    <div>
                      <span className="font-semibold text-zinc-800 text-xs block">{wa.name}</span>
                      <span className="text-zinc-500 text-[11px] block mt-0.5">{wa.num}</span>
                    </div>
                    <MessageCircle size={14} className="text-zinc-300 group-hover:text-[#495C29] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}