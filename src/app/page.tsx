const tools = [
  {
    icon: "🛒",
    title: "Trendyol Kazanç",
    desc: "Komisyon, KDV, kargo ve ürün maliyetinden sonra gerçek net kârını hesapla.",
    href: "/trendyol-kazanc-hesaplama",
    metric: "Net kâr",
  },
  {
    icon: "🏦",
    title: "Kredi Hesaplama",
    desc: "Kredi tutarı, faiz ve vadeye göre aylık taksit ile toplam ödemeyi gör.",
    href: "/kredi-hesaplama",
    metric: "Aylık taksit",
  },
  {
    icon: "📈",
    title: "Faiz Hesaplama",
    desc: "Basit ve bileşik faiz getirini saniyeler içinde karşılaştır.",
    href: "/faiz-hesaplama",
    metric: "Toplam getiri",
  },
];

const blogPosts = [
  {
    title: "Trendyol’da 1000 TL’lik ürün ne kadar kazandırır?",
    href: "/blog/trendyol-1000-tl-kar",
  },
  {
    title: "300.000 TL kredi aylık ne kadar ödenir?",
    href: "/blog/300-bin-kredi-hesaplama",
  },
  {
    title: "100.000 TL 1 yılda ne kadar faiz getirir?",
    href: "/blog/faiz-getirisi-hesaplama",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07111d] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 sm:opacity-30"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(34,197,94,0.20),transparent_32%),linear-gradient(180deg,#07111d_0%,#0B1220_100%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:py-20">
          <div>
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-2 text-xs font-medium text-green-300 sm:mb-7 sm:px-4 sm:text-sm">
              <span className="h-2 w-2 shrink-0 rounded-full bg-green-400 shadow-[0_0_18px_rgba(74,222,128,0.9)]" />
              <span className="truncate">
                Ücretsiz finans ve e-ticaret hesaplama platformu
              </span>
            </div>

            <h1 className="max-w-4xl text-[40px] font-semibold leading-[1.04] tracking-[-0.055em] sm:text-[54px] md:text-[64px] lg:text-[72px]">
              Hesaplamaları{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
                tek ekranda
              </span>{" "}
              netleştir.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:mt-6 sm:text-lg sm:leading-8">
              Kredi, faiz ve Trendyol kazanç hesaplamalarını sade arayüz,
              anlaşılır sonuçlar ve SEO odaklı rehberlerle tek yerde kullan.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#araclar"
                className="rounded-2xl bg-green-500 px-6 py-4 text-center font-bold text-[#03110A] shadow-[0_20px_60px_rgba(34,197,94,0.28)] transition hover:bg-green-400 sm:px-7"
              >
                Araçları Kullan →
              </a>

              <a
                href="/blog"
                className="rounded-2xl border border-white/15 bg-white/[0.05] px-6 py-4 text-center font-semibold text-white backdrop-blur transition hover:bg-white/[0.09] sm:px-7"
              >
                Rehberleri İncele
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3 sm:mt-10 sm:gap-4">
              {[
                ["3", "Aktif araç"],
                ["0₺", "Ücretsiz"],
                ["Hızlı", "Anında sonuç"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-3 backdrop-blur sm:p-4"
                >
                  <strong className="text-lg font-semibold sm:text-2xl">
                    {value}
                  </strong>
                  <p className="mt-1 text-xs text-white/50 sm:text-sm">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DASHBOARD MOCKUP */}
          <div className="relative mt-2 lg:mt-0">
            <div className="absolute inset-0 rounded-full bg-green-400/15 blur-3xl" />

            <div className="relative rounded-[28px] border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-xl sm:rounded-[36px] sm:p-4">
              <div className="rounded-[22px] border border-white/10 bg-[#0B1220] p-4 sm:rounded-[28px] sm:p-5">
                <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
                  <div>
                    <p className="text-xs text-white/45 sm:text-sm">
                      DoğruHesap Panel
                    </p>
                    <h2 className="mt-1 text-lg font-semibold sm:text-xl">
                      Canlı hesap özeti
                    </h2>
                  </div>

                  <div className="rounded-2xl bg-green-400/10 px-3 py-2 text-xs font-semibold text-green-300 sm:px-4 sm:text-sm">
                    Aktif
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                  {[
                    ["Kazanç", "146 TL", "🛒"],
                    ["Taksit", "14.820 TL", "🏦"],
                    ["Getiri", "40.000 TL", "📈"],
                  ].map(([label, value, icon]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                    >
                      <div className="mb-3 text-2xl sm:mb-4">{icon}</div>
                      <p className="text-xs text-white/45 sm:text-sm">
                        {label}
                      </p>
                      <strong className="mt-1 block text-lg sm:text-xl">
                        {value}
                      </strong>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-3xl border border-green-400/20 bg-green-400/10 p-4 sm:mt-5 sm:p-5">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-green-300">Öne çıkan araç</p>
                      <h3 className="mt-1 text-base font-semibold sm:text-lg">
                        Trendyol Kazanç Hesaplama
                      </h3>
                    </div>
                    <span className="text-3xl">🛒</span>
                  </div>

                  <div className="space-y-3">
                    {[
                      ["Satış fiyatı", "1.200 TL"],
                      ["Komisyon", "%17"],
                      ["Kargo", "200 TL"],
                      ["Net kazanç", "146 TL"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex justify-between rounded-xl bg-[#0B1220]/70 px-4 py-3 text-sm"
                      >
                        <span className="text-white/55">{label}</span>
                        <strong>{value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2">
                  <a
                    href="/trendyol-kazanc-hesaplama"
                    className="rounded-2xl bg-green-500 px-5 py-4 text-center font-bold text-[#03110A] transition hover:bg-green-400"
                  >
                    Aracı Aç →
                  </a>
                  <a
                    href="#araclar"
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center font-semibold transition hover:bg-white/[0.08]"
                  >
                    Tüm Araçlar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* TOOLS */}
      <section id="araclar" className="bg-[#0B1220] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold text-green-400">
                Hesaplama araçları
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Az araç, net sonuç.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/55 sm:text-base">
              Siteyi kalabalık göstermiyoruz. Gerçekten işe yarayan hesaplama
              araçlarını güçlü sonuç ekranlarıyla sunuyoruz.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
            {tools.map((tool) => (
              <a
                key={tool.title}
                href={tool.href}
                className="group rounded-[26px] border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:-translate-y-1 hover:border-green-400/35 hover:bg-white/[0.07] sm:rounded-[32px] sm:p-6"
              >
                <div className="mb-6 flex items-center justify-between gap-4 sm:mb-7">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-green-400/10 text-3xl sm:h-16 sm:w-16">
                    {tool.icon}
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/50">
                    {tool.metric}
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-[-0.025em]">
                  {tool.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/55 md:min-h-[72px]">
                  {tool.desc}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 font-semibold text-green-400">
                  Hesapla
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="bg-[#07111d] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-4">
            <div className="rounded-[26px] border border-white/10 bg-white/[0.045] p-6 sm:rounded-[32px] sm:p-7 lg:col-span-2">
              <p className="mb-3 text-sm font-semibold text-green-400">
                Platform mantığı
              </p>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                Hesaplama + rehber + sonuç mantığı bir arada.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                DoğruHesap sadece form doldurulan bir site değil. Her araç,
                kullanıcıya sonucu açıklayan içeriklerle desteklenir.
              </p>
            </div>

            {[
              ["⚡", "Hızlı kullanım", "Gereksiz adım yok, sonuç direkt."],
              ["🧮", "Net tablo", "Gider ve sonuç kırılımı anlaşılır."],
              ["🔍", "SEO rehberleri", "Tool sayfalarını blog içerikleri besler."],
              ["🔓", "Ücretsiz", "Üyelik veya ödeme gerektirmez."],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="rounded-[26px] border border-white/10 bg-white/[0.045] p-6 sm:rounded-[32px] sm:p-7"
              >
                <div className="mb-4 text-3xl sm:mb-5">{icon}</div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="bg-white py-12 text-[#0B1220] sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold text-green-600">
                Blog ve rehberler
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Trafik çeken hesaplama içerikleri.
              </h2>
            </div>

            <a
              href="/blog"
              className="font-semibold text-green-600 hover:text-green-700"
            >
              Tüm yazıları gör →
            </a>
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <a
                key={post.title}
                href={post.href}
                className="rounded-[26px] border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-xl sm:rounded-[32px] sm:p-7"
              >
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-green-100 text-green-700 sm:mb-6">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold leading-7 sm:text-xl">
                  {post.title}
                </h3>
                <p className="mt-5 text-sm font-semibold text-green-600">
                  Rehberi oku →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SEO TEXT */}
      <section className="bg-white pb-12 text-[#0B1220] sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-[28px] border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 sm:rounded-[36px] sm:p-10">
            <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              Ücretsiz hesaplama araçlarıyla hızlı ve anlaşılır sonuçlar
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              DoğruHesap; kredi hesaplama, faiz hesaplama ve Trendyol kazanç
              hesaplama gibi günlük finans ve e-ticaret kararlarında ihtiyaç
              duyulan araçları tek yerde sunar. Sade arayüzü sayesinde karmaşık
              formüllerle uğraşmadan, saniyeler içinde net sonuçlara
              ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}