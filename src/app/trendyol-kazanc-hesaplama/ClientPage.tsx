"use client";

import { useState } from "react";

export default function TrendyolKazancHesaplama() {
  const [satisFiyati, setSatisFiyati] = useState("");
  const [urunMaliyeti, setUrunMaliyeti] = useState("");
  const [komisyon, setKomisyon] = useState("17");
  const [kargo, setKargo] = useState("");
  const [kdv, setKdv] = useState("20");

  const satis = Number(satisFiyati) || 0;
  const maliyet = Number(urunMaliyeti) || 0;
  const komisyonOrani = Number(komisyon) || 0;
  const kargoUcreti = Number(kargo) || 0;
  const kdvOrani = Number(kdv) || 0;

  const komisyonTutari = satis * (komisyonOrani / 100);
  const kdvTutari = satis - satis / (1 + kdvOrani / 100);
  const toplamGider = maliyet + komisyonTutari + kargoUcreti + kdvTutari;
  const netKazanc = satis - toplamGider;
  const karMarji = satis > 0 ? (netKazanc / satis) * 100 : 0;

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-sm text-white/50 mb-6">
          <a href="/" className="hover:text-green-400">
            Ana Sayfa
          </a>
          <span className="mx-2">›</span>
          <span>E-Ticaret</span>
          <span className="mx-2">›</span>
          <span className="text-white/80">Trendyol Kazanç Hesaplama</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          <div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <span className="inline-block rounded-full bg-green-400/10 border border-green-400/20 px-4 py-2 text-sm text-green-300 mb-5">
                E-ticaret hesaplama aracı
              </span>

              <h1 className="text-3xl md:text-4xl font-bold">
                Trendyol Kazanç Hesaplama
              </h1>

              <p className="text-white/65 mt-4 max-w-3xl">
                Satış fiyatı, ürün maliyeti, komisyon, kargo ve KDV oranını
                girerek Trendyol satışından tahmini net kazancını ve kâr
                marjını hesapla.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="rounded-2xl bg-[#111827] border border-white/10 p-6">
                  <label className="block text-sm text-white/70 mb-2">
                    Satış Fiyatı (TL)
                  </label>
                  <input
                    value={satisFiyati}
                    onChange={(e) => setSatisFiyati(e.target.value)}
                    type="number"
                    placeholder="Örn: 1200"
                    className="w-full mb-5 rounded-lg bg-[#0B1220] border border-white/10 px-4 py-3 outline-none focus:border-green-400"
                  />

                  <label className="block text-sm text-white/70 mb-2">
                    Ürün Maliyeti (TL)
                  </label>
                  <input
                    value={urunMaliyeti}
                    onChange={(e) => setUrunMaliyeti(e.target.value)}
                    type="number"
                    placeholder="Örn: 650"
                    className="w-full mb-5 rounded-lg bg-[#0B1220] border border-white/10 px-4 py-3 outline-none focus:border-green-400"
                  />

                  <label className="block text-sm text-white/70 mb-2">
                    Komisyon Oranı (%)
                  </label>
                  <input
                    value={komisyon}
                    onChange={(e) => setKomisyon(e.target.value)}
                    type="number"
                    className="w-full mb-5 rounded-lg bg-[#0B1220] border border-white/10 px-4 py-3 outline-none focus:border-green-400"
                  />

                  <label className="block text-sm text-white/70 mb-2">
                    Kargo Ücreti (TL)
                  </label>
                  <input
                    value={kargo}
                    onChange={(e) => setKargo(e.target.value)}
                    type="number"
                    placeholder="Örn: 200"
                    className="w-full mb-5 rounded-lg bg-[#0B1220] border border-white/10 px-4 py-3 outline-none focus:border-green-400"
                  />

                  <label className="block text-sm text-white/70 mb-2">
                    KDV Oranı (%)
                  </label>
                  <input
                    value={kdv}
                    onChange={(e) => setKdv(e.target.value)}
                    type="number"
                    className="w-full rounded-lg bg-[#0B1220] border border-white/10 px-4 py-3 outline-none focus:border-green-400"
                  />
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-green-500/15 to-blue-500/10 border border-green-400/20 p-6">
                  <h2 className="text-xl font-semibold mb-6">
                    Hesaplama Sonucu
                  </h2>

                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-white/60">Satış Fiyatı</span>
                      <strong>{satis.toFixed(2)} TL</strong>
                    </div>

                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-white/60">Toplam Gider</span>
                      <strong>{toplamGider.toFixed(2)} TL</strong>
                    </div>

                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-white/60">Komisyon</span>
                      <strong>{komisyonTutari.toFixed(2)} TL</strong>
                    </div>

                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-white/60">KDV</span>
                      <strong>{kdvTutari.toFixed(2)} TL</strong>
                    </div>

                    <div className="rounded-xl bg-[#0B1220]/70 p-4 mt-5">
                      <div className="flex justify-between text-lg">
                        <span>Net Kazanç</span>
                        <strong
                          className={
                            netKazanc >= 0 ? "text-green-400" : "text-red-400"
                          }
                        >
                          {netKazanc.toFixed(2)} TL
                        </strong>
                      </div>

                      <div className="flex justify-between text-sm mt-2 text-white/70">
                        <span>Kâr Marjı</span>
                        <strong>{karMarji.toFixed(2)}%</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-5">
                Detaylı Gider Tablosu
              </h2>

              <div className="overflow-hidden rounded-2xl border border-white/10">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Ürün Maliyeti", maliyet],
                      ["Trendyol Komisyonu", komisyonTutari],
                      ["Kargo Ücreti", kargoUcreti],
                      ["KDV Tutarı", kdvTutari],
                      ["Toplam Gider", toplamGider],
                      ["Net Kazanç", netKazanc],
                    ].map(([label, value]) => (
                      <tr
                        key={label as string}
                        className="border-b border-white/10 last:border-0"
                      >
                        <td className="px-4 py-3 text-white/65">{label}</td>
                        <td className="px-4 py-3 text-right font-semibold">
                          {(value as number).toFixed(2)} TL
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">
                Trendyol Kazanç Nasıl Hesaplanır?
              </h2>

              <p className="text-white/70 mb-5">
                Net kazanç hesaplanırken satış fiyatından ürün maliyeti,
                komisyon, kargo ve KDV gibi giderler düşülür. Bu yüzden sadece
                satış fiyatına bakmak yanıltıcıdır; önemli olan satış sonunda
                cebinde kalan gerçek tutardır.
              </p>

              <div className="rounded-2xl border border-green-400/20 bg-green-400/10 p-5">
                <h3 className="font-semibold text-green-300 mb-2">Formül</h3>
                <p className="text-white/75">
                  Net Kazanç = Satış Fiyatı - Ürün Maliyeti - Komisyon - Kargo
                  - KDV
                </p>
              </div>
            </section>

            <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-5">Örnek Hesaplama</h2>

              <p className="text-white/70">
                1.200 TL satış fiyatı, 650 TL ürün maliyeti, %17 komisyon, 200
                TL kargo ve %20 KDV ile satış yapan bir satıcı için net kazanç
                yaklaşık 146 TL seviyesine düşebilir. Bu yüzden ürün fiyatı
                belirlerken tüm giderleri aynı anda hesaba katmak gerekir.
              </p>
            </section>

            <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-5">
                Sık Sorulan Sorular
              </h2>

              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-green-300">
                    Trendyol komisyon oranı sabit mi?
                  </h3>
                  <p className="text-white/65 mt-2">
                    Hayır. Komisyon oranı kategoriye göre değişebilir. Bu yüzden
                    hesaplama yaparken kendi ürün kategorindeki oranı
                    girmelisin.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-green-300">
                    KDV satış fiyatından mı hesaplanır?
                  </h3>
                  <p className="text-white/65 mt-2">
                    Bu araç satış fiyatı KDV dahil varsayımıyla tahmini KDV
                    tutarını ayırır. Muhasebe açısından kesin bilgi için mali
                    müşavire danışılmalıdır.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-green-300">
                    Reklam giderleri dahil mi?
                  </h3>
                  <p className="text-white/65 mt-2">
                    Hayır. Reklam, iade, paketleme ve fire gibi ek giderlerin
                    ayrıca hesaba katılması gerekir.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-4">Popüler Araçlar</h3>

              <div className="space-y-3 text-sm">
                <a
                  href="/trendyol-kazanc-hesaplama"
                  className="block rounded-xl bg-green-400/10 border border-green-400/20 px-4 py-3 text-green-300"
                >
                  Trendyol Kazanç Hesaplama
                </a>

                <a
                  href="/kredi-hesaplama"
                  className="block rounded-xl bg-white/5 border border-white/10 px-4 py-3 hover:border-green-400/40"
                >
                  Kredi Hesaplama
                </a>

                <a
                  href="/faiz-hesaplama"
                  className="block rounded-xl bg-white/5 border border-white/10 px-4 py-3 hover:border-green-400/40"
                >
                  Faiz Hesaplama
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-3">Kısa Bilgi</h3>
              <p className="text-sm text-white/65">
                Trendyol’da kârlı satış için komisyon, kargo, KDV ve ürün
                maliyetini birlikte değerlendirmek gerekir.
              </p>
            </div>

            <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.03] p-6 h-64 flex items-center justify-center text-white/30 text-sm">
              Reklam Alanı
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-3">Benzer Konular</h3>

              <ul className="text-sm text-white/65 space-y-3">
                <li>Trendyol komisyon oranı nasıl hesaplanır?</li>
                <li>E-ticarette kâr marjı kaç olmalı?</li>
                <li>Kargo maliyeti ürün fiyatına nasıl eklenir?</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}