export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1220] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-bold">
              Doğru<span className="text-green-400">Hesap</span>
            </div>
            <p className="text-white/60 text-sm mt-3">
              Ücretsiz, hızlı ve anlaşılır hesaplama araçları.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Hesaplama Araçları</h3>
            <div className="space-y-2 text-sm text-white/60">
              <a href="/trendyol-kazanc-hesaplama" className="block hover:text-green-400">
                Trendyol Kazanç Hesaplama
              </a>
              <a href="/kredi-hesaplama" className="block hover:text-green-400">
                Kredi Hesaplama
              </a>
              <a href="/faiz-hesaplama" className="block hover:text-green-400">
                Faiz Hesaplama
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Bilgilendirme</h3>
            <p className="text-white/60 text-sm">
              Hesaplamalar tahminidir. Finansal kararlar için resmi kurum,
              banka veya mali müşavir bilgileri esas alınmalıdır.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-5 text-sm text-white/40">
          © 2026 DoğruHesap. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}