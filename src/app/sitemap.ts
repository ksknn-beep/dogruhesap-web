export default function sitemap() {
  const base = "https://dogruhesap.net";

  return [
    // 🔥 Ana sayfa
    { url: base, lastModified: new Date() },

    // 🔥 TOOLS
    { url: base + "/trendyol-kazanc-hesaplama", lastModified: new Date() },
    { url: base + "/kredi-hesaplama", lastModified: new Date() },
    { url: base + "/faiz-hesaplama", lastModified: new Date() },

    // 🔥 BLOG LIST
    { url: base + "/blog", lastModified: new Date() },

    // 🔥 TRENDYOL BLOG
    { url: base + "/blog/trendyol-1000-tl-kar", lastModified: new Date() },
    { url: base + "/blog/trendyol-500-tl-kar", lastModified: new Date() },
    { url: base + "/blog/trendyolda-yuzde-30-kar", lastModified: new Date() },

    // 🔥 KREDİ BLOG
    { url: base + "/blog/300-bin-kredi-hesaplama", lastModified: new Date() },
    { url: base + "/blog/100-bin-kredi-odeme", lastModified: new Date() },
    { url: base + "/blog/kredi-faizi-nasil-hesaplanir", lastModified: new Date() },

    // 🔥 FAİZ BLOG
    { url: base + "/blog/faiz-getirisi-hesaplama", lastModified: new Date() },
    { url: base + "/blog/1-milyon-tl-faiz-getirisi", lastModified: new Date() },
    { url: base + "/blog/bilesik-faiz-nedir", lastModified: new Date() },
  ];
}