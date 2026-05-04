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

  const formatTL = (v: number) =>
    v.toLocaleString("tr-TR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " TL";

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <section className="mx-auto max-w-7xl px-6 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-white/45">
          <a href="/" className="hover:text-green-400">
            Ana Sayfa
          </a>
          <span className="mx-2">›</span>
          <span>E-Ticaret</span>
          <span className="mx-2">›</span>
          <span className="text-white/80">Trendyol Kazanç Hesaplama</span>
        </div>

        {/* SEO HERO */}
        <div className="mb-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-7 md:p-9">
          <span className="mb-5 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300">
            Trendyol satıcıları için net kâr hesaplama aracı
          </span>

          <h1 className="max-w-4xl text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[56px]">
            Trendyol Kazanç Hesaplama{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
              2026
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/70">
            Satış fiyatı, ürün maliyeti, Trendyol komisyon oranı, kargo ücreti
            ve KDV oranını girerek tahmini net kazancını ve kâr marjını anında
            hesapla.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            {/* CALCULATOR */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.05] p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                {/* Form */}
                <div className="rounded-3xl border border-white/10 bg-[#0B1220]/70 p-5 md:p-6">
                  <h2 className="mb-5 text-xl font-semibold">
                    Bilgileri Gir
                  </h2>

                  <div className="grid gap-5">
                    <Field
                      label="Satış Fiyatı (TL)"
                      value={satisFiyati}
                      setValue={setSatisFiyati}
                      placeholder="Örn: 1200"
                    />

                    <Field
                      label="Ürün Maliyeti (TL)"
                      value={urunMaliyeti}
                      setValue={setUrunMaliyeti}
                      placeholder="Örn: 650"
                    />

                    <div className="grid gap-5 sm:grid-cols-3">
                      <Field
                        label="Komisyon (%)"
                        value={komisyon}
                        setValue={setKomisyon}
                        placeholder="17"
                      />

                      <Field
                        label="Kargo (TL)"
                        value={kargo}
                        setValue={setKargo}
                        placeholder="200"
                      />

                      <Field
                        label="KDV (%)"
                        value={kdv}
                        setValue={setKdv}
                        placeholder="20"
                      />
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-green-400/20 bg-green-400/10 p-4 text-sm text-green-200">
                    İpucu: Komisyon oranını kendi ürün kategorine göre
                    girersen sonuç daha doğru olur.
                  </div>
                </div>

                {/* Result */}
                <div className="rounded-3xl border border-green-400/20 bg-gradient-to-br from-green-500/15 to-blue-500/10 p-6">
                  <p className="text-sm font-medium text-white/60">
                    Tahmini Net Kazanç
                  </p>

                  <div
                    className={`mt-3 text-5xl font-semibold tracking-[-0.04em] ${
                      netKazanc >= 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {formatTL(netKazanc)}
                  </div>

                  <div className="mt-3 text-white/70">
                    Kâr marjı:{" "}
                    <strong
                      className={
                        karMarji >= 0 ? "text-green-400" : "text-red-400"
                      }
                    >
                      %{karMarji.toFixed(2)}
                    </strong>
                  </div>

                  <div className="mt-7 grid gap-3">
                    <ResultRow label="Satış Fiyatı" value={formatTL(satis)} />
                    <ResultRow
                      label="Ürün Maliyeti"
                      value={formatTL(maliyet)}
                    />
                    <ResultRow
                      label="Trendyol Komisyonu"
                      value={formatTL(komisyonTutari)}
                    />
                    <ResultRow label="Kargo" value={formatTL(kargoUcreti)} />
                    <ResultRow label="KDV" value={formatTL(kdvTutari)} />
                    <ResultRow
                      label="Toplam Gider"
                      value={formatTL(toplamGider)}
                      strong
                    />
                  </div>

                  <div
                    className={`mt-6 rounded-2xl p-4 text-sm font-medium ${
                      netKazanc >= 0
                        ? "bg-green-400/10 text-green-300"
                        : "bg-red-400/10 text-red-300"
                    }`}
                  >
                    {netKazanc >= 0
                      ? "Bu satış kârlı görünüyor. Yine de reklam, iade ve paketleme giderlerini ayrıca düşün."
                      : "Bu satış zarar ettiriyor. Satış fiyatını, kargo maliyetini veya komisyon oranını tekrar kontrol et."}
                  </div>
                </div>
              </div>
            </div>

            {/* DETAIL TABLE */}
            <ContentCard title="Detaylı Gider Tablosu">
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
                        <td className="px-4 py-4 text-white/65">{label}</td>
                        <td className="px-4 py-4 text-right font-semibold">
                          {formatTL(value as number)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ContentCard>

            <ContentCard title="Trendyol Kazanç Nasıl Hesaplanır?">
              <p className="text-white/70">
                Trendyol kazanç hesaplamasında satış fiyatından ürün maliyeti,
                Trendyol komisyonu, kargo ücreti ve KDV gibi giderler düşülür.
                Satış fiyatı yüksek görünse bile tüm giderler düşüldüğünde net
                kâr beklenenden daha düşük çıkabilir.
              </p>

              <div className="mt-5 rounded-2xl border border-green-400/20 bg-green-400/10 p-5">
                <h3 className="mb-2 font-semibold text-green-300">Formül</h3>
                <p className="text-white/80">
                  Net Kazanç = Satış Fiyatı - Ürün Maliyeti - Komisyon - Kargo
                  - KDV
                </p>
              </div>
            </ContentCard>

            <ContentCard title="Örnek Trendyol Kazanç Hesaplama">
              <p className="text-white/70">
                1.200 TL satış fiyatı, 650 TL ürün maliyeti, %17 komisyon, 200
                TL kargo ve %20 KDV ile satış yapan bir satıcı için net kazanç
                ciddi şekilde düşebilir. Bu yüzden ürün fiyatı belirlenirken
                sadece alış maliyetine değil, tüm satış giderlerine birlikte
                bakılmalıdır.
              </p>
            </ContentCard>

            <ContentCard title="Sık Sorulan Sorular">
              <div className="space-y-5">
                <FAQ
                  q="Trendyol komisyon oranı sabit mi?"
                  a="Hayır. Komisyon oranı ürün kategorisine göre değişebilir. Bu yüzden hesaplama yaparken kendi kategorindeki güncel oranı girmelisin."
                />
                <FAQ
                  q="KDV satış fiyatından mı hesaplanır?"
                  a="Bu araç satış fiyatı KDV dahil varsayımıyla tahmini KDV tutarını ayırır. Net muhasebe sonucu için mali müşavire danışılmalıdır."
                />
                <FAQ
                  q="Reklam giderleri dahil mi?"
                  a="Hayır. Reklam, iade, paketleme, fire ve kampanya maliyetleri ayrıca değerlendirilmelidir."
                />
                <FAQ
                  q="Trendyol’da kâr marjı kaç olmalı?"
                  a="Ürün grubuna göre değişir. Ancak komisyon, kargo, KDV ve iade riski olan ürünlerde çok düşük marjla satış yapmak sürdürülebilir olmayabilir."
                />
              </div>
            </ContentCard>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 font-semibold">Popüler Araçlar</h3>
              <div className="space-y-3 text-sm">
                <SideLink active href="/trendyol-kazanc-hesaplama">
                  Trendyol Kazanç Hesaplama
                </SideLink>
                <SideLink href="/kredi-hesaplama">Kredi Hesaplama</SideLink>
                <SideLink href="/faiz-hesaplama">Faiz Hesaplama</SideLink>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 font-semibold">Kısa Bilgi</h3>
              <p className="text-sm leading-6 text-white/65">
                Trendyol’da gerçek kârı görmek için komisyon, kargo, KDV ve
                ürün maliyeti birlikte hesaplanmalıdır.
              </p>
            </div>

            <div className="flex h-64 items-center justify-center rounded-3xl border border-dashed border-white/15 bg-white/[0.03] p-6 text-sm text-white/30">
              Reklam Alanı
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  value,
  setValue,
  placeholder,
}: {
  label: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/70">{label}</span>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="number"
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-[#0B1220] px-4 py-3 outline-none transition focus:border-green-400"
      />
    </label>
  );
}

function ResultRow({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex justify-between border-b border-white/10 pb-3 text-sm last:border-0">
      <span className="text-white/60">{label}</span>
      <strong className={strong ? "text-green-300" : "text-white"}>
        {value}
      </strong>
    </div>
  );
}

function ContentCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
      <h2 className="mb-5 text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div>
      <h3 className="font-semibold text-green-300">{q}</h3>
      <p className="mt-2 text-white/65">{a}</p>
    </div>
  );
}

function SideLink({
  href,
  children,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      className={`block rounded-xl border px-4 py-3 ${
        active
          ? "border-green-400/20 bg-green-400/10 text-green-300"
          : "border-white/10 bg-white/5 hover:border-green-400/40"
      }`}
    >
      {children}
    </a>
  );
}