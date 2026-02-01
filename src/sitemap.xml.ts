import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap/xml")({
  loader: () => {
    const baseUrl = "https://pawnappetit.com";
    const pages = [
      { url: baseUrl, priority: 1.0, changefreq: "weekly" },
      { url: `${baseUrl}/docs`, priority: 0.9, changefreq: "weekly" },
      { url: `${baseUrl}/docs/installation`, priority: 0.9, changefreq: "monthly" },
      { url: `${baseUrl}/docs/first-steps`, priority: 0.9, changefreq: "monthly" },
      { url: `${baseUrl}/docs/faq`, priority: 0.8, changefreq: "weekly" },
      { url: `${baseUrl}/features`, priority: 0.9, changefreq: "weekly" },
      { url: `${baseUrl}/features/smart-analysis`, priority: 0.8, changefreq: "monthly" },
      { url: `${baseUrl}/features/database`, priority: 0.8, changefreq: "monthly" },
      { url: `${baseUrl}/features/repertoire-training`, priority: 0.8, changefreq: "monthly" },
      { url: `${baseUrl}/blog`, priority: 0.8, changefreq: "weekly" },
      { url: `${baseUrl}/blog/chessbase-free-alternative`, priority: 0.8, changefreq: "monthly" },
      { url: `${baseUrl}/llms.txt`, priority: 0.7, changefreq: "weekly" },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
    )
    .join("")}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  },
});
