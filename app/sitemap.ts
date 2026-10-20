import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://babookos.com';
  const currentDate = new Date().toISOString(); // Menggunakan format ISO string yang disukai Google

  return [
    { 
      url: baseUrl, 
      lastModified: currentDate, 
      changeFrequency: 'daily', 
      priority: 1.0 
    },
    { 
      url: `${baseUrl}/aboutus`, 
      lastModified: currentDate, 
      changeFrequency: 'monthly', 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/career`, 
      lastModified: currentDate, 
      changeFrequency: 'monthly', 
      priority: 0.5 
    },
    { 
      url: `${baseUrl}/villa`, 
      lastModified: currentDate, 
      changeFrequency: 'weekly', 
      priority: 0.9 
    },
    { 
      url: `${baseUrl}/syaratKetentuan`, 
      lastModified: currentDate, 
      changeFrequency: 'yearly', 
      priority: 0.3 
    },
    { 
      url: `${baseUrl}/privacyPolicy`, 
      lastModified: currentDate, 
      changeFrequency: 'yearly', 
      priority: 0.3 
    },
    { 
      url: `${baseUrl}/serviceCustomer`, 
      lastModified: currentDate, 
      changeFrequency: 'monthly', 
      priority: 0.5 
    },
  ]
}