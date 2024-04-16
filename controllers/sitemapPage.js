const config = require("../config/config");
const baseUrl = require("../utilities/baseUrl");
const getResponse = require("../utilities/getResponse");

async function generateUrlElement(url, websiteUrl) {
  const { loc, lastmod, priority = 1 } = url;
  const formattedLastmod = lastmod ?? new Date().toISOString();

  return `
    <url>
      <loc>${websiteUrl}${loc}</loc>
      <lastmod>${formattedLastmod}</lastmod>
      <priority>${priority}</priority>
    </url>`;
}

async function articleFromDevTo() {
  const data = await getResponse(
    `https://dev.to/api/articles?username=${config.USERNAME}`
  );
  return data.map((d) => ({
    loc: `/article/${d.slug}`,
    lastmod: d.edited_at ?? d.published_at,
  }));
}

async function sitemapPage(req, res, next) {
  try {
    const websiteUrl = baseUrl(req);
    let urls = [
      { loc: "/", priority: 1.0 },
      { loc: "/contact", priority: 0.8 },
      { loc: "/work", priority: 1.0 },
      { loc: "/about", priority: 1.0 },
    ];
    const data = await articleFromDevTo();
    urls = [...urls, ...data];
    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
    for (const url of urls) {
      const urlElement = await generateUrlElement(url, websiteUrl);
      sitemapXml += urlElement;
    }
    sitemapXml += `</urlset>`;
    res.header("Content-Type", "application/xml");
    res.send(sitemapXml);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    next(error);
  }
}

module.exports = sitemapPage;
