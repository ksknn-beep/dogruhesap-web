"use client";

import { useState } from "react";
import PageShell from "@/components/ui/PageShell";
import GlassCard from "@/components/ui/GlassCard";
import SeoHero from "@/components/ui/SeoHero";

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
    <PageShell>
      <Breadcrumb
        items={["Ana Sayfa", "E-Ticaret", "Trendyol Kazanç Hesaplama"]}
      />

      <SeoHero
        label="Trendyol satıcıları için net kâr hesaplama aracı"
        title="Trendyol Kazanç Hesaplama"
        highlight="2026"
        description="Satış fiyatı, ürün maliyeti, Trendyol komisyon oranı, kargo ücreti ve KDV oranını girerek tahmini net kazancını ve kâr marjını anında hesapla."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <GlassCard className="p-5 sm:p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-3xl border border-white/10 bg-[#0B1220]/70 p-5 md:p-6">
                <h2 className="mb-5 text-xl font-semibold">Bilgileri Gir</h2>

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
                  İpucu: Komisyon oranını kendi ürün kategorine göre girersen
                  sonuç daha doğru olur.
                </div>
              </div>

              <div className="rounded-3xl border border-green-400/20 bg-gradient-to-br from-green-500/15 to-blue-500/10 p-6">
                <p className="text-sm font-medium text-white/60">
                  Tahmini Net Kazanç
                </p>

                <div
                  className={`mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl ${
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
                  <ResultRow label="Ürün Maliyeti" value={formatTL(maliyet)} />
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
          </GlassCard>

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
              Satış fiyatı yüksek görünse bile tüm giderler düşüldüğünde net kâr
              beklenenden daha düşük çıkabilir.
            </p>

            <div className="mt-5 rounded-2xl border border-green-400/20 bg-green-400/10 p-5">
              <h3 className="mb-2 font-semibold text-green-300">Formül</h3>
              <p className="text-white/80">
                Net Kazanç = Satış Fiyatı - Ürün Maliyeti - Komisyon - Kargo -
                KDV
              </p>
            </div>
          </ContentCard>

          <ContentCard title="Örnek Trendyol Kazanç Hesaplama">
            <p className="text-white/70">
              1.200 TL satış fiyatı, 650 TL ürün maliyeti, %17 komisyon, 200 TL
              kargo ve %20 KDV ile satış yapan bir satıcı için net kazanç ciddi
              şekilde düşebilir. Bu yüzden ürün fiyatı belirlenirken sadece alış
              maliyetine değil, tüm satış giderlerine birlikte bakılmalıdır.
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

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <GlassCard>
            <h3 className="mb-4 font-semibold">Popüler Araçlar</h3>
            <div className="space-y-3 text-sm">
              <SideLink active href="/trendyol-kazanc-hesaplama">
                Trendyol Kazanç Hesaplama
              </SideLink>
              <SideLink href="/kredi-hesaplama">Kredi Hesaplama</SideLink>
              <SideLink href="/faiz-hesaplama">Faiz Hesaplama</SideLink>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="mb-3 font-semibold">Kısa Bilgi</h3>
            <p className="text-sm leading-6 text-white/65">
              Trendyol’da gerçek kârı görmek için komisyon, kargo, KDV ve ürün
              maliyeti birlikte hesaplanmalıdır.
            </p>
          </GlassCard>

          <div className="flex h-64 items-center justify-center rounded-[28px] border border-dashed border-white/15 bg-white/[0.03] p-6 text-sm text-white/30 sm:rounded-[32px]">
            Reklam Alanı
          </div>
        </aside>
      </div>
    </PageShell>
  );
}

function Breadcrumb({ items }: { items: string[] }) {
  return (
    <div className="mb-6 text-sm text-white/45">
      <a href="/" className="hover:text-green-400">
        {items[0]}
      </a>
      {items.slice(1).map((item) => (
        <span key={item}>
          <span className="mx-2">›</span>
          <span className="text-white/70">{item}</span>
        </span>
      ))}
    </div>
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
    <GlassCard className="mt-8 p-6 md:p-8">
      <h2 className="mb-5 text-2xl font-semibold">{title}</h2>
      {children}
    </GlassCard>
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