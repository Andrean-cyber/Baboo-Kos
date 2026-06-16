import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Berlaku untuk semua crawler (Google, Bing, dll)
      allow: '/',     // Mengizinkan akses ke semua halaman
    },
    // Mengarahkan robot ke file sitemap yang sudah Anda buat
    sitemap: 'https://babookos.com/sitemap.xml',
  }
}