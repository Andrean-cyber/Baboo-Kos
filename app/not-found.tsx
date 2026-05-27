// Lokasi file: app/not-found.tsx

import Link from "next/link";
import Footer from "@/components/sections/Footer";
import { cn } from "@/lib/utils";
import { ArrowLeft, MapPinOff } from "lucide-react";

export default function NotFound() {
  return (
    <main className={cn("flex flex-col justify-between bg-[#FAFAFA] min-h-screen overflow-hidden")}>
      {/* Konten 404 - Mengisi ruang tengah antara Navbar dan Footer */}
      <div className="flex flex-col flex-grow justify-center items-center px-6 pt-22 md:pt-30 pb-20 w-full text-center">
        {/* Ikon atau Ilustrasi (Opsional) */}
        <div className="flex justify-center items-center bg-[#EEF3E8] mb-8 rounded-full w-24 h-24 text-[#495C29]">
          <MapPinOff size={40} strokeWidth={1.5} />
        </div>

        <h1 className="mb-2 font-black text-zinc-900 text-6xl md:text-8xl tracking-tighter">404</h1>

        <h2 className="mb-4 font-bold text-zinc-800 text-2xl md:text-3xl">Oops! Halaman tidak ditemukan.</h2>

        <p className="mb-10 max-w-md font-medium text-zinc-500 text-sm md:text-base leading-relaxed">Sepertinya Anda tersesat. Halaman yang Anda cari mungkin telah dihapus, dipindahkan, atau Anda salah memasukkan URL.</p>

        {/* Tombol Kembali ke Beranda */}
        <Link href="/" className="flex items-center gap-2 bg-[#495C29] hover:bg-[#3d4d22] shadow-md hover:shadow-lg px-8 py-3.5 rounded-full font-bold text-white active:scale-95 transition-all">
          <ArrowLeft size={18} />
          Kembali ke Beranda
        </Link>
      </div>

      {/* Footer di bagian bawah */}
      <Footer />
    </main>
  );
}
