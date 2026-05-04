"use client";

import { useState } from "react";

export default function KrediHesaplama() {
  const [krediTutari, setKrediTutari] = useState("");
  const [faizOrani, setFaizOrani] = useState("");
  const [vade, setVade] = useState("");
  const [masraf, setMasraf] = useState("");

  const kredi = Number(krediTutari) || 0;
  const aylikFaiz = (Number(faizOrani) || 0) / 100;
  const ay = Number(vade) || 0;
  const dosyaMasrafi = Number(masraf) || 0;

  const aylikTaksit =
    kredi > 0 && aylikFaiz > 0 && ay > 0
      ? (kredi * aylikFaiz * Math.pow(1 + aylikFaiz, ay)) /
        (Math.pow(1 + aylikFaiz, ay) - 1)
      : 0;

  const toplamTaksitOdeme = aylikTaksit * ay;
  const toplamOdeme = toplamTaksitOdeme + dosyaMasrafi;
  const toplamFaiz = toplamTaksitOdeme - kredi;

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-sm text-white/50 mb-6">
          <a href="/" className="hover:text-green-400">Ana Sayfa</a>
          <span className="mx-2">›</span>
          <span>Finans</span>
          <span className="mx-2">›</span>
          <span className="text-white/80">Kredi Hesaplama</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          <div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <span className="inline-block rounded-full bg-green-400/10 border border-green-400/20 px-4 py-2 text-sm text-green-300 mb-5">
                Finans hesaplama aracı
              </span>

              <h1 className="text-3xl md:text-4xl font-bold">
                Kredi Hesaplama
              </h1>

              <p className="text-white/65 mt-4 max-w-3xl">
                Kredi tutarı, aylık faiz oranı, vade ve masraf bilgilerini
                girerek tahmini aylık taksit, toplam faiz ve toplam geri ödeme
                tutarını hesapla.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="rounded-2xl bg-[#111827] border border-white/10 p-6">
                  <label className="block text-sm text-white/70 mb-2">
                    Kredi Tutarı (TL)
                  </label>
                  <input
                    value={krediTutari}
                    onChange={(e) => setKrediTutari(e.target.value)}
                    type="number"
                    placeholder="Örn: 300000"
                    className="w-full mb-5 rounded-lg bg-[#0B1220] border border-white/10 px-4 py-3 outline-none focus:border-green-400"
                  />

                  <label className="block text-sm text-white/70 mb-2">
                    Aylık Faiz Oranı (%)
                  </label>
                  <input
                    value={faizOrani}
                    onChange={(e) => setFaizOrani(e.target.value)}
                    type="number"
                    placeholder="Örn: 3.49"
                    className="w-full mb-5 rounded-lg bg-[#0B1220] border border-white/10 px-4 py-3 outline-none focus:border-green-400"
                  />

                  <label className="block text-sm text-white/70 mb-2">
                    Vade (Ay)
                  </label>
                  <input
                    value={vade}
                    onChange={(e) => setVade(e.target.value)}
                    type="number"
                    placeholder="Örn: 36"
                    className="w-full mb-5 rounded-lg bg-[#0B1220] border border-white/10 px-4 py-3 outline-none focus:border-green-400"
                  />

                  <label className="block text-sm text-white/70 mb-2">
                    Dosya / Ek Masraf (TL)
                  </label>
                  <input
                    value={masraf}
                    onChange={(e) => setMasraf(e.target.value)}
                    type="number"
                    placeholder="Örn: 1500"
                    className="w-full rounded-lg bg-[#0B1220] border border-white/10 px-4 py-3 outline-none focus:border-green-400"
                  />
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-green-500/15 to-blue-500/10 border border-green-400/20 p-6">
                  <h2 className="text-xl font-semibold mb-6">
                    Hesaplama Sonucu
                  </h2>

                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-white/60">Aylık Taksit</span>
                      <strong className="text-green-400">
                        {aylikTaksit.toFixed(2)} TL
                      </strong>
                    </div>

                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-white/60">Toplam Faiz</span>
                      <strong>{toplamFaiz.toFixed(2)} TL</strong>
                    </div>

                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-white/60">Masraf</span>
                      <strong>{dosyaMasrafi.toFixed(2)} TL</strong>
                    </div>

                    <div className="rounded-xl bg-[#0B1220]/70 p-4 mt-5">
                      <div className="flex justify-between text-lg">
                        <span>Toplam Geri Ödeme</span>
                        <strong className="text-green-400">
                          {toplamOdeme.toFixed(2)} TL
                        </strong>
                      </div>

                      <div className="flex justify-between text-sm mt-2 text-white/70">
                        <span>Vade</span>
                        <strong>{ay} Ay</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-4">Popüler Araçlar</h3>
              <div className="space-y-3 text-sm">
                <a href="/kredi-hesaplama" className="block rounded-xl bg-green-400/10 border border-green-400/20 px-4 py-3 text-green-300">
                  Kredi Hesaplama
                </a>
                <a href="/trendyol-kazanc-hesaplama" className="block rounded-xl bg-white/5 border border-white/10 px-4 py-3 hover:border-green-400/40">
                  Trendyol Kazanç Hesaplama
                </a>
                <a href="/faiz-hesaplama" className="block rounded-xl bg-white/5 border border-white/10 px-4 py-3 hover:border-green-400/40">
                  Faiz Hesaplama
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}