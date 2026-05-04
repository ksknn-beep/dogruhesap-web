"use client";

import { useState } from "react";

export default function FaizHesaplama() {
  const [anaPara, setAnaPara] = useState("");
  const [faizOrani, setFaizOrani] = useState("");
  const [sure, setSure] = useState("");
  const [tip, setTip] = useState("basit");

  const principal = Number(anaPara) || 0;
  const rate = (Number(faizOrani) || 0) / 100;
  const years = Number(sure) || 0;

  const basitFaiz = principal * rate * years;
  const bilesikToplam = principal * Math.pow(1 + rate, years);
  const bilesikFaiz = bilesikToplam - principal;

  const faizTutari = tip === "basit" ? basitFaiz : bilesikFaiz;
  const toplamTutar = principal + faizTutari;

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-sm text-white/50 mb-6">
          <a href="/" className="hover:text-green-400">Ana Sayfa</a>
          <span className="mx-2">›</span>
          <span>Finans</span>
          <span className="mx-2">›</span>
          <span className="text-white/80">Faiz Hesaplama</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          <div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <span className="inline-block rounded-full bg-green-400/10 border border-green-400/20 px-4 py-2 text-sm text-green-300 mb-5">
                Finans hesaplama aracı
              </span>

              <h1 className="text-3xl md:text-4xl font-bold">
                Faiz Hesaplama
              </h1>

              <p className="text-white/65 mt-4 max-w-3xl">
                Ana para, yıllık faiz oranı ve süre bilgilerini girerek basit
                faiz veya bileşik faiz sonucunu hesapla.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="rounded-2xl bg-[#111827] border border-white/10 p-6">
                  <label className="block text-sm text-white/70 mb-2">
                    Ana Para (TL)
                  </label>
                  <input
                    value={anaPara}
                    onChange={(e) => setAnaPara(e.target.value)}
                    type="number"
                    placeholder="Örn: 100000"
                    className="w-full mb-5 rounded-lg bg-[#0B1220] border border-white/10 px-4 py-3 outline-none focus:border-green-400"
                  />

                  <label className="block text-sm text-white/70 mb-2">
                    Yıllık Faiz Oranı (%)
                  </label>
                  <input
                    value={faizOrani}
                    onChange={(e) => setFaizOrani(e.target.value)}
                    type="number"
                    placeholder="Örn: 40"
                    className="w-full mb-5 rounded-lg bg-[#0B1220] border border-white/10 px-4 py-3 outline-none focus:border-green-400"
                  />

                  <label className="block text-sm text-white/70 mb-2">
                    Süre (Yıl)
                  </label>
                  <input
                    value={sure}
                    onChange={(e) => setSure(e.target.value)}
                    type="number"
                    placeholder="Örn: 2"
                    className="w-full mb-5 rounded-lg bg-[#0B1220] border border-white/10 px-4 py-3 outline-none focus:border-green-400"
                  />

                  <label className="block text-sm text-white/70 mb-2">
                    Hesaplama Tipi
                  </label>
                  <select
                    value={tip}
                    onChange={(e) => setTip(e.target.value)}
                    className="w-full rounded-lg bg-[#0B1220] border border-white/10 px-4 py-3 outline-none focus:border-green-400"
                  >
                    <option value="basit">Basit Faiz</option>
                    <option value="bilesik">Bileşik Faiz</option>
                  </select>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-green-500/15 to-blue-500/10 border border-green-400/20 p-6">
                  <h2 className="text-xl font-semibold mb-6">
                    Hesaplama Sonucu
                  </h2>

                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-white/60">Ana Para</span>
                      <strong>{principal.toFixed(2)} TL</strong>
                    </div>

                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-white/60">Faiz Tutarı</span>
                      <strong className="text-green-400">
                        {faizTutari.toFixed(2)} TL
                      </strong>
                    </div>

                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-white/60">Süre</span>
                      <strong>{years.toFixed(0)} Yıl</strong>
                    </div>

                    <div className="rounded-xl bg-[#0B1220]/70 p-4 mt-5">
                      <div className="flex justify-between text-lg">
                        <span>Toplam Tutar</span>
                        <strong className="text-green-400">
                          {toplamTutar.toFixed(2)} TL
                        </strong>
                      </div>

                      <div className="flex justify-between text-sm mt-2 text-white/70">
                        <span>Hesaplama Tipi</span>
                        <strong>
                          {tip === "basit" ? "Basit Faiz" : "Bileşik Faiz"}
                        </strong>
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
                <a href="/faiz-hesaplama" className="block rounded-xl bg-green-400/10 border border-green-400/20 px-4 py-3 text-green-300">
                  Faiz Hesaplama
                </a>
                <a href="/kredi-hesaplama" className="block rounded-xl bg-white/5 border border-white/10 px-4 py-3 hover:border-green-400/40">
                  Kredi Hesaplama
                </a>
                <a href="/trendyol-kazanc-hesaplama" className="block rounded-xl bg-white/5 border border-white/10 px-4 py-3 hover:border-green-400/40">
                  Trendyol Kazanç Hesaplama
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.03] p-6 h-64 flex items-center justify-center text-white/30 text-sm">
              Reklam Alanı
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}