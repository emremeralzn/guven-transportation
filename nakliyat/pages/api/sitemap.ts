import { NextApiRequest, NextApiResponse } from 'next';
import { getSiteData, getAllServices } from '@/lib/data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const siteData = getSiteData();
  const services = getAllServices();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';

  const staticPages = [
    '',
    '/hakkimizda',
    '/hizmetlerimiz',
    '/galeri',
    '/iletisim',
  ];

  const servicePages = services.map(service => `/hizmetlerimiz/${service.slug}`);

  const allPages = [...staticPages, ...servicePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allPages.map(page => {
  const url = `${baseUrl}${page}`;
  const lastmod = new Date().toISOString().split('T')[0];
  const priority = page === '' ? '1.0' : page === '/hizmetlerimiz' ? '0.9' : '0.8';
  const changefreq = page === '' ? 'weekly' : 'monthly';
  
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <image:image>
      <image:loc>${siteData.logo}</image:loc>
      <image:title>${siteData.siteName}</image:title>
      <image:caption>${siteData.description}</image:caption>
    </image:image>
  </url>`;
}).join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(sitemap);
}
