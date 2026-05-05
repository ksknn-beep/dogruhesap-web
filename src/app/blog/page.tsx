import PageShell from "@/components/ui/PageShell";
import GlassCard from "@/components/ui/GlassCard";
import SeoHero from "@/components/ui/SeoHero";

export default function Blog() {
  const posts = [
    // 🔥 TRENDYOL
    {
      title: "Trendyol’da 1000 TL’lik Ürün Ne Kadar Kazandırır?",
      desc: "Komisyon, kargo ve KDV sonrası gerçek net kazancı detaylı hesapla.",
      href: "/blog/trendyol-1000-tl-kar",
      tag: "E-Ticaret",
    },
    {
      title: "Trendyol’da 500 TL’lik Ürün Ne Kadar Kazandırır?",
      desc: "Düşük fiyatlı ürünlerde kâr marjı nasıl değişir, detaylı incele.",
      href: "/blog/trendyol-500-tl-kar",
      tag: "E-Ticaret",
    },
    {
      title: "Trendyol’da %30 Kâr Marjı Nasıl Hesaplanır?",
      desc: "Gerçek kâr marjını hesaplamak için tüm giderleri öğren.",
      href: "/blog/trendyolda-yuzde-30-kar",
      tag: "E-Ticaret",
    },

    // 🔥 KREDİ
    {
      title: "300.000 TL Kredi Aylık Ne Kadar Ödenir?",
      desc: "Faiz oranına göre aylık taksit ve toplam geri ödemeyi öğren.",
      href: "/blog/300-bin-kredi-hesaplama",
      tag: "Finans",
    },
    {
      title: "100.000 TL Kredi Aylık Ne Kadar Ödenir?",
      desc: "Küçük tutarlı kredilerde faiz yükü ne kadar olur?",
      href: "/blog/100-bin-kredi-odeme",
      tag: "Finans",
    },
    {
      title: "Kredi Faizi Nasıl Hesaplanır?",
      desc: "Kredi çekmeden önce faiz hesaplamayı öğren.",
      href: "/blog/kredi-faizi-nasil-hesaplanir",
      tag: "Finans",
    },

    // 🔥 FAİZ
    {
      title: "100.000 TL 1 Yılda Ne Kadar Faiz Getirir?",
      desc: "Basit ve bileşik faiz farkını örneklerle karşılaştır.",
      href: "/blog/faiz-getirisi-hesaplama",
      tag: "Yatırım",
    },
    {
      title: "1.000.000 TL 1 Yılda Ne Kadar Faiz Getirir?",
      desc: "Yüksek yatırımlarda faiz getirisi nasıl değişir?",
      href: "/blog/1-milyon-tl-faiz-getirisi",
      tag: "Yatırım",
    },
    {
      title: "Bileşik Faiz Nedir? Nasıl Hesaplanır?",
      desc: "Faizin faizi nasıl çalışır, örneklerle öğren.",
      href: "/blog/bilesik-faiz-nedir",
      tag: "Yatırım",
    },
  ];

  return (
    <PageShell>
      <SeoHero
        label="Hesaplama rehberleri ve içerikler"
        title="Blog"
        highlight="DoğruHesap"
        description="Kredi, faiz ve e-ticaret kazanç hesaplamalarını detaylı anlatan SEO odaklı içerikler. Hesaplama araçlarını daha doğru kullanman için hazırlanmıştır."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <a key={post.href} href={post.href} className="group">
            <GlassCard className="h-full transition duration-300 hover:-translate-y-1 hover:border-green-400/40 hover:bg-white/[0.07]">
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/50">
                  {post.tag}
                </span>

                <span className="text-sm text-white/30">
                  {i + 1}
                </span>
              </div>

              <h2 className="text-xl font-semibold leading-7 tracking-[-0.02em]">
                {post.title}
              </h2>

              <p className="mt-3 min-h-[60px] text-sm leading-6 text-white/55">
                {post.desc}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 font-semibold text-green-400">
                Yazıyı oku
                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </GlassCard>
          </a>
        ))}
      </div>
    </PageShell>
  );
}