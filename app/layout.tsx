import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import ScrollToTop from "@/components/sections/ScrollToTop";
// import ConfettiIndependence from "@/components/sections/ConfettiIndependence";

export const metadata: Metadata = {
  metadataBase: new URL("https://babookos.com"),

  title: {
    default: "Baboo Kos - Cari Kos Tanpa Ribet",
    template: "%s | Baboo Kos",
  },

  description:
    "Baboo Kos adalah platform pencarian kos yang menghadirkan pilihan hunian terbaik dengan lokasi strategis, harga transparan, dan proses pencarian yang mudah.",

  keywords: [
    "Baboo Kos",
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

  applicationName: "Baboo Kos",

  authors: [
    {
      name: "Baboo Kos",
      url: "https://babookos.com",
    },
  ],

  creator: "Baboo Kos",
  publisher: "Baboo Kos",

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

  // CATATAN: `alternates.canonical` sengaja dihapus dari layout.
  // Taruh canonical di masing-masing halaman (lihat app/page.tsx).

  openGraph: {
    title: "Baboo Kos - Cari Kos Tanpa Ribet",
    description:
      "Temukan kos terbaik dengan lokasi strategis, harga transparan, dan proses pencarian yang mudah bersama Baboo Kos.",
    url: "https://babookos.com",
    siteName: "Baboo Kos",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Baboo Kos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Baboo Kos - Cari Kos Tanpa Ribet",
    description:
      "Temukan kos terbaik dengan lokasi strategis, harga transparan, dan proses pencarian yang mudah bersama Baboo Kos.",
    images: ["/og-image.webp"],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  other: {
    "application-name": "Baboo Kos",
    "apple-mobile-web-app-title": "Baboo Kos",
  },
};

// JSON-LD: WebSite (dipakai Google untuk site name)
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Baboo Kos",
  alternateName: ["BabooKos", "Baboo Kos Malang"],
  url: "https://babookos.com/",
};

// JSON-LD: Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Baboo Kos",
  alternateName: "BabooKos",
  url: "https://babookos.com/",
  logo: "https://babookos.com/icon.png",
  sameAs: [
    "https://www.tiktok.com/@baboo_kos",
    "https://instagram.com/baboo_kos",
    "https://www.facebook.com/profile.php?id=61577834251895",
  ],
};

// Escape "<" agar aman di dalam tag <script>
const toJsonLd = (data: object) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="light"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      style={{ colorScheme: "light" }}
    >
      <body className="bg-[#F5F5F2] overflow-x-hidden font-sans text-zinc-900 antialiased">
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(websiteSchema) }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(organizationSchema) }}
        />

        {/* <ConfettiIndependence /> */}
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
