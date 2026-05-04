export default function Home() {
  const tools = [
    {
      icon: "🏦",
      title: "Kredi Hesaplama",
      desc: "İhtiyaç, taşıt ve konut kredisi için aylık taksit ve toplam geri ödeme hesapla.",
      href: "/kredi-hesaplama",
    },
    {
      icon: "🛒",
      title: "Trendyol Kazanç",
      desc: "Komisyon, kargo, KDV ve maliyete göre net kazancını hesapla.",
      href: "/trendyol-kazanc-hesaplama",
    },
    {
      icon: "📈",
      title: "Faiz Hesaplama",
      desc: "Basit ve bileşik faiz hesabını saniyeler içinde yap.",
      href: "/faiz-hesaplama",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden text-white min-h-[480px] bg-[#020817]">
        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-bg.png')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/80 to-[#020817]/10" />

        {/* ❌ BEYAZ FADE KALDIRILDI */}

        <div className="relative max-w-7xl mx-auto px-6 py-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-400/10 px-4 py-2 text-sm text-green-300 mb-6">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_16px_rgba(74,222,128,0.9)]" />
              Ücretsiz ve hızlı hesaplama platformu
            </div>

            <h1 className="text-[38px] md:text-[56px] font-semibold leading-[1.08] tracking-[-0.04em]">
              Türkiye'nin En Doğru <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
                Hesaplama Araçları
              </span>{" "}
              Platformu
            </h1>

            <p className="text-white/70 mt-5 text-lg max-w-xl leading-relaxed">
              Kredi, faiz ve e-ticaret hesaplamalarını hızlı ve anlaşılır şekilde yap.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-3 gap-5 mt-8 max-w-2xl">
              {[
                ["🛡️", "%100 Güvenilir"],
                ["⚡", "Hızlı & Kolay"],
                ["🔓", "Ücretsiz"],
              ].map(([icon, title]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition hover:bg-white/[0.06]"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/10 text-2xl">
                    <span className="drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]">
                      {icon}
                    </span>
                  </div>

                  <strong className="text-sm text-white">{title}</strong>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#araclar"
                className="group relative overflow-hidden bg-green-500 hover:bg-green-400 text-[#03110a] px-7 py-4 rounded-xl font-bold transition shadow-[0_18px_45px_rgba(34,197,94,0.28)]"
              >
                <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-[100%]" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  Hesaplamalara Başla
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </a>

              <a
                href="#araclar"
                className="group border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] px-7 py-4 rounded-xl font-semibold transition backdrop-blur-xl"
              >
                <span className="inline-flex items-center gap-2">
                  Tüm Araçları Gör
                  <span className="text-green-300 transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="araclar" className="bg-white text-[#0B1220] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <p className="text-green-600 font-semibold text-sm">
              Popüler Araçlar
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-1">
              En çok kullanılan hesaplamalar
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((tool) => (
              <a
                key={tool.title}
                href={tool.href}
                className="rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="text-3xl mb-4">{tool.icon}</div>
                <h3 className="font-bold text-lg">{tool.title}</h3>
                <p className="text-gray-500 text-sm mt-2">
                  {tool.desc}
                </p>
              </a>
            ))}
          </div>

          {/* STATS */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              ["👥", "500K+", "Aylık Ziyaretçi"],
              ["🧮", "25+", "Hesaplama Aracı"],
              ["✅", "%100", "Doğru Sonuç"],
              ["⭐", "4.9/5", "Memnuniyet"],
            ].map(([icon, value, label]) => (
              <div key={label}>
                <div className="text-3xl mb-2">{icon}</div>
                <strong className="text-2xl">{value}</strong>
                <p className="text-gray-500 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}