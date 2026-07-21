import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import ScrollToTop from "@/components/sections/ScrollToTop";

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

  alternates: {
    canonical: "https://babookos.com",
  },

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

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Baboo Kos",
              alternateName: "BabooKos",
              url: "https://babookos.com",
              logo: "https://babookos.com/icon.png",
              sameAs: [
                "https://www.tiktok.com/@baboo_kos"
              ]
            }),
          }}
        />

        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Baboo Kos",
              alternateName: "BabooKos",
              url: "https://babookos.com",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://babookos.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}