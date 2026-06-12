"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  ShieldAlert, Users, Home, Megaphone, CreditCard, 
  Copyright, RefreshCw, MessageSquare, Scale, HelpCircle,
  Clock, ArrowRight, CheckCircle2, ChevronRight
} from "lucide-react";

// Struktur data tetap terjaga rapi dan aman
const tcSections = [
  {
    id: "ketentuan-umum",
    title: "1. Ketentuan Umum & Etika Pengguna",
    shortTitle: "Etika Pengguna",
    icon: <Users size={20} />,
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100/80 hover:border-zinc-200/80 transition-colors">
          <strong className="text-zinc-800 text-sm block mb-1">🔞 Batasan Usia</strong>
          <p className="text-zinc-600 text-xs leading-relaxed">Kamu wajib berusia minimal 18 tahun atau sudah memiliki KTP sah untuk melakukan transaksi atau menggunakan layanan berbayar di platform ini.</p>
        </div>
        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100/80 hover:border-zinc-200/80 transition-colors">
          <strong className="text-zinc-800 text-sm block mb-1">✍️ Kejujuran & Validitas Data</strong>
          <p className="text-zinc-600 text-xs leading-relaxed">Pas kamu ngisi formulir pencarian, pengajuan paket promosi, atau proses booking unit villa, pastikan semua data yang kamu masukin (seperti nama, kontak WhatsApp, dan detail request lainnya) itu asli, akurat, dan aktif. Baboo Kos gak bertanggung jawab kalau proses transaksimu terhambat akibat salah input data.</p>
        </div>
        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100/80 hover:border-zinc-200/80 transition-colors">
          <strong className="text-zinc-800 text-sm block mb-1">🤝 Etika Berinteraksi (Keep it Respectful)</strong>
          <p className="text-zinc-600 text-xs leading-relaxed">Platform ini dibuat untuk mempermudah komunikasi. Kami sangat menghargai interaksi yang sehat dan profesional. Segala bentuk spamming, penipuan berkedok transaksi, atau bahasa yang kasar saat menghubungi tim kami maupun mitra properti tidak akan kami toleransi.</p>
        </div>
        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100/80 hover:border-zinc-200/80 transition-colors">
          <strong className="text-zinc-800 text-sm block mb-1">⚖️ Penggunaan yang Sah</strong>
          <p className="text-zinc-600 text-xs leading-relaxed">Pengguna dilarang keras menggunakan platform Baboo Kos untuk tindakan penipuan, menyebarkan informasi palsu mengenai properti, atau tindakan lain yang melanggar hukum di Indonesia.</p>
        </div>
        <div className="p-4 bg-red-50/50 rounded-xl border border-red-100/80">
          <strong className="text-red-900 text-sm block mb-1">🔒 Penggunaan Platform yang Sehat</strong>
          <p className="text-red-800/90 text-xs leading-relaxed">Gunakan platform Baboo Kos sebagaimana mestinya untuk mencari tempat tinggal atau memesan paket media sosial. Tindakan ilegal seperti mencoba meretas (hacking), menyalin data secara massal (scraping) tanpa izin, atau merusak sistem website akan langsung kami bawa ke jalur hukum.</p>
        </div>
      </div>
    )
  },
  {
    id: "layanan-seekers",
    title: "2. Layanan bagi Pencari Kos & Villa (Seekers)",
    shortTitle: "Pencari Kos & Villa",
    icon: <Home size={20} />,
    content: (
      <div className="space-y-4">
        <div className="flex gap-3 items-start p-1">
          <CheckCircle2 size={16} className="text-[#495C29] shrink-0 mt-0.5" />
          <div>
            <strong className="text-zinc-800 text-sm block mb-0.5">Akurasi Informasi</strong>
            <p className="text-zinc-600 text-xs leading-relaxed">Baboo Kos selalu berusaha menyajikan data unit, spesifikasi, fasilitas, dan harga seakurat mungkin berdasarkan data asli yang sudah dikurasi oleh tim. Namun, perubahan kondisi dan ketersediaan unit di luar kendali kami bisa saja terjadi.</p>
          </div>
        </div>
        <div className="flex gap-3 items-start p-1">
          <CheckCircle2 size={16} className="text-[#495C29] shrink-0 mt-0.5" />
          <div>
            <strong className="text-zinc-800 text-sm block mb-0.5">Sistem Booking & Ketersediaan</strong>
            <p className="text-zinc-600 text-xs leading-relaxed">Tombol "Booking" atau "Cek Ketersediaan" di platform kami mengarahkan kamu pada sistem reservasi langsung. Status ketersediaan unit bersifat <span className="italic font-semibold text-[#495C29]">real-time</span> dan kamar baru dianggap "aman" jika kamu sudah menyelesaikan proses administrasi resmi sesuai alur yang difinalisasi dengan pembayaran.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "layanan-owners",
    title: "3. Layanan Pemilik Properti & Paket Promosi TikTok",
    shortTitle: "Pemilik Properti & TikTok",
    icon: <Megaphone size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-zinc-500 text-xs italic mb-2">Bagian ini berlaku khusus untuk pemilik unit yang bekerja sama atau membeli produk media sosial kami:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-4 bg-[#EEF3E8]/40 border border-[#495C29]/10 rounded-xl">
            <span className="font-bold text-zinc-800 text-xs block mb-1">📊 Skema Paket</span>
            <span className="text-zinc-600 text-xs leading-relaxed block">Baboo Kos menyediakan beberapa pilihan paket konten short-form (<span className="font-semibold text-[#495C29]">Standart, Deluxe, Superior, Supreme Rate</span>) dengan masa tayang (keep slot) tertentu.</span>
          </div>
          <div className="p-4 bg-[#EEF3E8]/40 border border-[#495C29]/10 rounded-xl">
            <span className="font-bold text-zinc-800 text-xs block mb-1">📹 Kunjungan Lokasi (Footage Gathering)</span>
            <span className="text-zinc-600 text-xs leading-relaxed block">Untuk paket Deluxe, Superior, dan Supreme, tim kreator kami akan datang langsung melakukan visit ke lokasi kos untuk pengambilan video. Pemilik wajib memastikan unit dalam keadaan bersih, rapi, dan memberikan akses penuh saat jadwal syuting yang disepakati.</span>
          </div>
        </div>
        <div className="p-4 bg-amber-50/60 border border-amber-200/60 rounded-xl">
          <strong className="text-amber-900 text-xs block mb-1">📌 Paket Standart (S&K Khusus)</strong>
          <p className="text-amber-800/90 text-xs leading-relaxed">Untuk Paket Standart, aset video sepenuhnya dikirim oleh pemilik unit, dan tim Baboo Kos hanya bertanggung jawab pada proses penyuntingan (editing). Namun, pihak Baboo Kos juga memiliki hak penuh atas penentuan standart kualitas konten laik upload atau tidak. Jika tidak, maka akan diberikan opsi untuk <span className="font-semibold">add on syuting langsung</span> dengan Content Creator kami.</p>
        </div>
        <div className="text-zinc-500 text-xs flex items-center gap-1.5 pt-1">
          <HelpCircle size={14} className="text-zinc-400 shrink-0" />
          <span>Detail pertanyaan paket dan kerjasama lainnya bisa ditanyakan via WhatsApp Marketing.</span>
        </div>
      </div>
    )
  },
  {
    id: "kebijakan-pembayaran",
    title: "4. Kebijakan Pembayaran & Pembatalan (Refund)",
    shortTitle: "Pembayaran & Refund",
    icon: <CreditCard size={20} />,
    content: (
      <div className="space-y-4">
        <div className="border-l-2 border-[#495C29] pl-3 py-0.5">
          <strong className="text-zinc-800 text-xs block mb-0.5">💳 Pembayaran Paket</strong>
          <p className="text-zinc-600 text-xs leading-relaxed">Semua transaksi pembelian paket promosi media sosial wajib diselesaikan di awal (<span className="font-bold text-[#495C29]">full payment</span>) sebelum tim kami menjadwalkan syuting atau memulai proses editing.</p>
        </div>
        <div className="border-l-2 border-red-500 pl-3 py-0.5">
          <strong className="text-red-900 text-xs block mb-0.5">⚠️ Kebijakan Pembatalan</strong>
          <p className="text-zinc-600 text-xs leading-relaxed">Pembatalan sepihak sebelum/setelah tim Baboo Kos melakukan kunjungan lokasi dan/ setelah proses editing dimulai, <span className="font-semibold text-red-600">tidak dapat di-refund dengan alasan apa pun.</span></p>
        </div>
        <div className="border-l-2 border-amber-500 pl-3 py-0.5">
          <strong className="text-amber-900 text-xs block mb-0.5">🗓️ Reschedule Jadwal</strong>
          <p className="text-zinc-600 text-xs leading-relaxed">Reschedule jadwal syuting maksimal dilakukan <span className="font-semibold">1x24 jam</span> sebelum hari-H yang disepakati.</p>
        </div>
      </div>
    )
  },
  {
    id: "batasan-tanggungjawab",
    title: "5. Batasan Tanggung Jawab (Limitation of Liability)",
    shortTitle: "Batasan Tanggung Jawab",
    icon: <ShieldAlert size={20} />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
          <span className="font-bold text-zinc-800 text-xs block mb-1">⚖️ Status Platform</span>
          <p className="text-zinc-500 text-xs leading-relaxed">Baboo Kos berfungsi sebagai platform digital penghubung dan penyedia layanan promosi kreatif. Kami tidak bertanggung jawab atas sengketa hukum, kerusakan properti, atau pelanggaran kontrak sewa yang terjadi secara internal antara Pemilik Kos dan Penyewa di kemudian hari.</p>
        </div>
        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
          <span className="font-bold text-zinc-800 text-xs block mb-1">📈 Performa Konten</span>
          <p className="text-zinc-500 text-xs leading-relaxed">Kami memproduksi konten secara profesional menggunakan strategi algoritma terbaru agar berpotensi besar masuk FYP (viral). Namun, Baboo Kos tidak menjamin angka pasti atau target mutlak jumlah penyewa yang masuk, karena keputusan akhir booking sepenuhnya ada di tangan calon penyewa.</p>
        </div>
      </div>
    )
  },
  {
    id: "hak-kekayaan",
    title: "6. Hak Kekayaan Intelektual (Copyright)",
    shortTitle: "Hak Cipta Konten",
    icon: <Copyright size={20} />,
    content: (
      <div className="space-y-3">
        <div className="flex gap-3 items-start bg-zinc-50 p-3 rounded-xl border border-zinc-100/80">
          <div className="w-2 h-2 rounded-full bg-[#495C29] mt-1.5 shrink-0" />
          <p className="text-zinc-600 text-xs leading-relaxed flex-1">
            <strong className="text-zinc-800 block mb-0.5">Kepemilikan Konten:</strong> Semua hasil produksi digital berupa video short-form, foto, logo, dan teks yang dibuat oleh tim Baboo Kos merupakan hak milik intelektual Baboo Kos.
          </p>
        </div>
        <div className="flex gap-3 items-start bg-zinc-50 p-3 rounded-xl border border-zinc-100/80">
          <div className="w-2 h-2 rounded-full bg-[#495C29] mt-1.5 shrink-0" />
          <p className="text-zinc-600 text-xs leading-relaxed flex-1">
            <strong className="text-zinc-800 block mb-0.5">Hak Guna Pemilik Kos:</strong> Pemilik kos diberikan hak penuh untuk menggunakan atau repost konten tersebut demi kepentingan promosi unitnya selama masa aktif kontrak paket promosi yang dibeli masih berlaku.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "perubahan-sk",
    title: "7. Perubahan Syarat & Ketentuan",
    shortTitle: "Perubahan S&K",
    icon: <RefreshCw size={20} />,
    content: (
      <p className="text-zinc-600 text-xs leading-relaxed bg-zinc-50 p-4 rounded-xl border border-zinc-100">
        Baboo Kos berhak untuk mengubah, menambah, atau memperbarui isi S&K ini sewaktu-waktu tanpa pemberitahuan tertulis sebelumnya. Versi terbaru akan langsung dipublikasikan di halaman ini, dan penggunaan platform secara berkelanjutan berarti kamu menyetujui perubahan tersebut.
      </p>
    )
  }
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState(tcSections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of tcSections) {
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
      // Offset disesuaikan menjadi -80 agar judul section tidak terlalu mepet ke atas
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    // Menghapus `dark:bg-zinc-50` agar warna background bersih di light-mode bawaan komponen ini
    <section className="bg-zinc-50/60 min-h-screen antialiased selection:bg-[#EEF3E8] selection:text-[#495C29]">
      {/* HEADER HERO BANNER */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#EEF3E8] to-transparent pt-40 pb-12 text-center px-4">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(#495C29_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white border border-[#495C29]/20 px-3 py-1 rounded-full text-[11px] font-bold text-[#495C29] mb-4 shadow-sm">
            <Scale size={12} />
            <span>Documentasi Legal</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
            Syarat & Ketentuan <span className="text-[#495C29]">Baboo Kos</span>
          </h1>
          <p className="text-zinc-600 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed px-2">
            Selamat datang di <strong className="text-[#495C29]">Baboo Kos!</strong> Biar kita sama-sama nyaman, transparan, dan bebas dari salah paham, mohon luangkan waktu sebentar buat membaca Syarat dan Ketentuan (S&K) ini.
          </p>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-zinc-400 text-[11px]">
            <Clock size={12} />
            <span>Terakhir Diperbarui: Juni 2026</span>
          </div>
        </div>
      </div>

      {/* CORE WRAPPER CONTENT */}
      <div className="mx-auto px-4 md:px-8 pb-24 w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
        
        {/* LEFT SIDE: STICKY DESKTOP NAVIGATION */}
        <div className="hidden lg:block lg:col-span-4 sticky top-24 self-start bg-white p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.015)] border border-zinc-100/80">
          <h3 className="font-bold text-zinc-400 text-[11px] mb-4 px-2 uppercase tracking-wider">Daftar Isi</h3>
          <div className="flex flex-col gap-1">
            {tcSections.map((section) => (
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
            Dengan mengakses, menjelajahi, melakukan order jasa, booking unit, atau membeli paket promosi di platform kami, kamu dianggap menyetujui seluruh aturan di halaman ini.
          </div>
        </div>

        {/* RIGHT SIDE: CONTENT CARDS */}
        <div className="lg:col-span-8 space-y-6">
          {tcSections.map((section) => (
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

          {/* HUBUNGI KAMI CTA CARD */}
          <div className="bg-gradient-to-r from-[#495C29] to-[#5a7035] rounded-3xl p-6 md:p-8 text-white shadow-md relative overflow-hidden group transition-all duration-300 hover:shadow-lg">
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-10 translate-y-10 pointer-events-none group-hover:scale-105 transition-transform duration-500">
              <MessageSquare size={200} />
            </div>
            
            <div className="relative z-10 max-w-xl">
              <h3 className="font-extrabold text-lg md:text-xl mb-2 flex items-center gap-2">
                <MessageSquare size={22} />
                Ada Pertanyaan Seputar S&K?
              </h3>
              <p className="text-white/80 text-xs leading-relaxed mb-6">
                Punya pertanyaan atau butuh penjelasan lebih lanjut mengenai Syarat & Ketentuan ini? Silakan langsung klik tombol di bawah untuk tersambung ke layanan bantuan kami.
              </p>
              
              <a 
                href="https://wa.me/6287785338441"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-zinc-50 text-[#495C29] font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-sm active:scale-95 group-hover:gap-3"
              >
                <span>Hubungi Kami Resmi</span>
                <ArrowRight size={14} className="transition-all" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}