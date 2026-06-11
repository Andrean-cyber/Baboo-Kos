import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import ScrollToTop from "@/components/sections/ScrollToTop";

export const metadata: Metadata = {
  title: "Babookos - Exclusive Stay",
  description: "Find your perfect stay at Babookos",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light" style={{ colorScheme: 'light'}}>
      <body className="bg-[#F5F5F2] overflow-x-hidden font-sans text-zinc-900 antialiased">
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
