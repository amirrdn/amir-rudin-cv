// app/api/sitemap/route.ts
import { NextResponse } from 'next/server';

// Ganti fungsi ini dengan logika untuk mendapatkan URL dinamis dari database atau API
async function fetchDynamicUrls() {
  // Contoh data URL statis, ganti dengan panggilan API atau query database
  return [
    { loc: `${process.env.URL}`, lastmod: new Date().toISOString() },
    { loc: `${process.env.URL}/project`, lastmod: new Date().toISOString() },
    { loc: `${process.env.URL}/cv/id`, lastmod: new Date().toISOString() },
    { loc: `${process.env.URL}/cv/en`, lastmod: new Date().toISOString() },
    // Tambahkan URL lainnya di sini
  ];
}

export async function GET() {
  const urls = await fetchDynamicUrls();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
        <url>
          <loc>${url.loc}</loc>
          <lastmod>${url.lastmod}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>`
      )
      .join('')}
  </urlset>`;

  return NextResponse.json(sitemap, {
    headers: { 'Content-Type': 'text/xml' },
  });
}
