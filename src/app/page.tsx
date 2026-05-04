export default function Home() {
  return (
    <main className="bg-[#0B1220] text-white min-h-screen">

      {/* HERO */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 py-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm text-green-300 mb-6">
            Ücretsiz ve hızlı hesaplama araçları
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Türkiye'nin En Doğru <br />
            <span className="text-green-400">Hesaplama Araçları</span>{" "}
            Platformu
          </h1>

          <p className="text-white/70 mt-5 max-w-md">
            Kredi, faiz, e-ticaret kazancı ve daha birçok hesaplama aracını
            sade, hızlı ve anlaşılır şekilde kullan.
          </p>

          <div className="flex flex-wrap gap-6 mt-6 text-sm text-white/70">
            <div>✔ %100 Ücretsiz</div>
            <div>⚡ Hızlı Sonuç</div>
            <div>📊 Net Hesaplama</div>
          </div>

          <div className="flex flex-wrap gap-4 mt-7">
            <a
              href="#araclar"
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-medium transition"
            >
              Hesaplamalara Başla
            </a>

            <a
              href="/trendyol-kazanc-hesaplama"
              className="border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition"
            >
              Trendyol Kazanç Hesapla
            </a>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="w-[430px] rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/50">Örnek hesaplama</p>
                <h3 className="text-xl font-semibold">Net Kazanç</h3>
              </div>
              <div className="rounded-xl bg-green-400/15 px-3 py-2 text-green-300">
                ₺
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between rounded-xl bg-[#111827] px-4 py-3">
                <span className="text-white/60">Satış Fiyatı</span>
                <strong>1.200 TL</strong>
              </div>

              <div className="flex justify-between rounded-xl bg-[#111827] px-4 py-3">
                <span className="text-white/60">Komisyon</span>
                <strong>204 TL</strong>
              </div>

              <div className="flex justify-between rounded-xl bg-[#111827] px-4 py-3">
                <span className="text-white/60">Kargo</span>
                <strong>200 TL</strong>
              </div>

              <div className="flex justify-between rounded-xl border border-green-400/30 bg-green-400/10 px-4 py-4">
                <span>Net Kazanç</span>
                <strong className="text-green-400">146 TL</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="araclar" className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Popüler Hesaplama Araçları
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <a href="/trendyol-kazanc-hesaplama">Trendyol</a>
          <a href="/kredi-hesaplama">Kredi</a>
          <a href="/faiz-hesaplama">Faiz</a>
        </div>
      </section>

    </main>
  );
}