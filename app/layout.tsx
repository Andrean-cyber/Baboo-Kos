import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import ScrollToTop from "@/components/sections/ScrollToTop";

export const metadata: Metadata = {
  title: "Babookos",
  description: "Platform pencarian kos yang menghadirkan pilihan hunian terbaik dengan kenyamanan, lokasi strategis, dan pengalaman mencari tempat tinggal yang praktis untuk keseharian Anda.",
  metadataBase: new URL('https://babookos.com'), // Ganti dengan domain asli Anda
  openGraph: {
    title: "Babookos",
    description: "Platform pencarian kos yang menghadirkan pilihan hunian terbaik dengan kenyamanan, lokasi strategis, dan pengalaman mencari tempat tinggal yang praktis untuk keseharian Anda.",
    url: 'https://babookos.com',
    siteName: 'Babookos',
    images: [
      {
        url: '/og-image.png', // Pastikan Anda punya gambar ini di folder public
        width: 1200,
        height: 630,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning className="light" style={{ colorScheme: 'light'}}>
      <body className="bg-[#F5F5F2] overflow-x-hidden font-sans text-zinc-900 antialiased">
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
