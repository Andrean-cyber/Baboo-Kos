import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import ScrollToTop from "@/components/sections/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://babookos.com"),

  title: {
    default: "BabooKos - Cari Kos Tanpa Ribet",
    template: "%s | BabooKos",
  },

  description:
    "BabooKos adalah platform pencarian kos yang menghadirkan pilihan hunian terbaik dengan lokasi strategis, harga transparan, dan proses pencarian yang mudah.",

  keywords: [
    "BabooKos",
    "Kos",
    "Cari Kos",
    "Kos Indonesia",
    "Kos Murah",
    "Kos Putra",
    "Kos Putri",
    "Kos Campur",
    "Sewa Kos",
    "Tempat Tinggal",
  ],

  applicationName: "BabooKos",

  authors: [
    {
      name: "BabooKos",
      url: "https://babookos.com",
    },
  ],

  creator: "BabooKos",
  publisher: "BabooKos",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://babookos.com",
  },

  openGraph: {
    title: "BabooKos - Cari Kos Tanpa Ribet",
    description:
      "Temukan kos terbaik dengan lokasi strategis, harga transparan, dan proses pencarian yang mudah bersama BabooKos.",
    url: "https://babookos.com",
    siteName: "BabooKos",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BabooKos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BabooKos - Cari Kos Tanpa Ribet",
    description:
      "Temukan kos terbaik dengan lokasi strategis, harga transparan, dan proses pencarian yang mudah bersama BabooKos.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className="light"
      style={{ colorScheme: "light" }}
    >
      <body className="bg-[#F5F5F2] overflow-x-hidden font-sans text-zinc-900 antialiased">
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}