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
  const maliyetOrani = kredi > 0 ? (toplamFaiz / kredi) * 100 : 0;

  const formatTL = (v: number) =>
    v.toLocaleString("tr-TR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " TL";

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6 text-sm text-white/45">
          <a href="/" className="hover:text-green-400">
            Ana Sayfa
          </a>
          <span className="mx-2">›</span>
          <span>Finans</span>
          <span className="mx-2">›</span>
          <span className="text-white/80">Kredi Hesaplama</span>
        </div>

        <div className="mb-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-7 md:p-9">
          <span className="mb-5 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300">
            İhtiyaç, taşıt ve konut kredisi için hesaplama aracı
          </span>

          <h1 className="max-w-4xl text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[56px]">
            Kredi Hesaplama{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
              2026
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/70">
            Kredi tutarı, aylık faiz oranı, vade ve ek masraf bilgilerini gir;
            tahmini aylık taksit, toplam faiz ve toplam geri ödeme tutarını
            anında hesapla.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="rounded-[32px] border border-white/10 bg-white/[0.05] p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-3xl border border-white/10 bg-[#0B1220]/70 p-5 md:p-6">
                  <h2 className="mb-5 text-xl font-semibold">
                    Kredi Bilgilerini Gir
                  </h2>

                  <div className="grid gap-5">
                    <Field
                      label="Kredi Tutarı (TL)"
                      value={krediTutari}
                      setValue={setKrediTutari}
                      placeholder="Örn: 300000"
                    />

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Aylık Faiz Oranı (%)"
                        value={faizOrani}
                        setValue={setFaizOrani}
                        placeholder="Örn: 3.49"
                      />

                      <Field
                        label="Vade (Ay)"
                        value={vade}
                        setValue={setVade}
                        placeholder="Örn: 36"
                      />
                    </div>

                    <Field
                      label="Dosya / Ek Masraf (TL)"
                      value={masraf}
                      setValue={setMasraf}
                      placeholder="Örn: 1500"
                    />
                  </div>

                  <div className="mt-5 rounded-2xl border border-green-400/20 bg-green-400/10 p-4 text-sm text-green-200">
                    İpucu: Bankaların faiz oranları, tahsis ücreti ve sigorta
                    masrafları değişebilir. Sonucu tahmini değerlendirmelisin.
                  </div>
                </div>

                <div className="rounded-3xl border border-green-400/20 bg-gradient-to-br from-green-500/15 to-blue-500/10 p-6">
                  <p className="text-sm font-medium text-white/60">
                    Tahmini Aylık Taksit
                  </p>

                  <div className="mt-3 text-5xl font-semibold tracking-[-0.04em] text-green-400">
                    {formatTL(aylikTaksit)}
                  </div>

                  <div className="mt-3 text-white/70">
                    Toplam maliyet oranı:{" "}
                    <strong className="text-green-400">
                      %{maliyetOrani.toFixed(2)}
                    </strong>
                  </div>

                  <div className="mt-7 grid gap-3">
                    <ResultRow label="Kredi Tutarı" value={formatTL(kredi)} />
                    <ResultRow label="Vade" value={`${ay} Ay`} />
                    <ResultRow
                      label="Toplam Faiz"
                      value={formatTL(toplamFaiz)}
                    />
                    <ResultRow label="Ek Masraf" value={formatTL(dosyaMasrafi)} />
                    <ResultRow
                      label="Toplam Geri Ödeme"
                      value={formatTL(toplamOdeme)}
                      strong
                    />
                  </div>

                  <div className="mt-6 rounded-2xl bg-green-400/10 p-4 text-sm font-medium text-green-300">
                    Bu hesaplama yaklaşık sonuç verir. Banka teklifinde sigorta,
                    tahsis ücreti ve ek ürünler toplam maliyeti değiştirebilir.
                  </div>
                </div>
              </div>
            </div>

            <ContentCard title="Kredi Geri Ödeme Tablosu">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Kredi Tutarı", kredi],
                      ["Aylık Taksit", aylikTaksit],
                      ["Toplam Taksit Ödemesi", toplamTaksitOdeme],
                      ["Toplam Faiz", toplamFaiz],
                      ["Dosya / Ek Masraf", dosyaMasrafi],
                      ["Toplam Geri Ödeme", toplamOdeme],
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

            <ContentCard title="Kredi Hesaplama Nasıl Yapılır?">
              <p className="text-white/70">
                Kredi hesaplamasında kredi tutarı, aylık faiz oranı ve vade
                kullanılarak aylık taksit bulunur. Vade uzadıkça aylık taksit
                düşebilir; ancak toplam faiz maliyeti genellikle artar.
              </p>

              <div className="mt-5 rounded-2xl border border-green-400/20 bg-green-400/10 p-5">
                <h3 className="mb-2 font-semibold text-green-300">Mantık</h3>
                <p className="text-white/80">
                  Toplam Geri Ödeme = Aylık Taksit × Vade + Ek Masraflar
                </p>
              </div>
            </ContentCard>

            <ContentCard title="Örnek Kredi Hesaplama">
              <p className="text-white/70">
                300.000 TL kredi, %3,49 aylık faiz ve 36 ay vade ile
                hesaplandığında aylık taksit ve toplam geri ödeme tutarı faiz
                yüküne göre ciddi şekilde değişebilir. Bu yüzden sadece aylık
                taksite değil, toplam geri ödemeye de bakmak gerekir.
              </p>
            </ContentCard>

            <ContentCard title="Sık Sorulan Sorular">
              <div className="space-y-5">
                <FAQ
                  q="Aylık faiz oranı mı yıllık faiz oranı mı girilmeli?"
                  a="Bu araç aylık faiz oranı ile hesaplama yapar. Bankanın verdiği oran yıllıksa aylık karşılığını ayrıca değerlendirmek gerekir."
                />
                <FAQ
                  q="Dosya masrafı toplam ödemeye dahil mi?"
                  a="Evet. Dosya veya ek masraf alanına yazılan tutar toplam geri ödeme hesabına eklenir."
                />
                <FAQ
                  q="Konut, taşıt ve ihtiyaç kredisi için kullanılabilir mi?"
                  a="Evet. Kredi tutarı, vade ve faiz oranını doğru girdiğin sürece tahmini hesaplama yapılabilir."
                />
                <FAQ
                  q="Sonuç banka teklifiyle birebir aynı olur mu?"
                  a="Hayır. Bankaların sigorta, tahsis ücreti, vergi ve ek ürün maliyetleri değişebileceği için sonuç tahmini kabul edilmelidir."
                />
              </div>
            </ContentCard>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 font-semibold">Popüler Araçlar</h3>
              <div className="space-y-3 text-sm">
                <SideLink active href="/kredi-hesaplama">
                  Kredi Hesaplama
                </SideLink>
                <SideLink href="/trendyol-kazanc-hesaplama">
                  Trendyol Kazanç Hesaplama
                </SideLink>
                <SideLink href="/faiz-hesaplama">Faiz Hesaplama</SideLink>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 font-semibold">Kısa Bilgi</h3>
              <p className="text-sm leading-6 text-white/65">
                Kredi karşılaştırırken yalnızca aylık taksite değil, toplam geri
                ödeme ve toplam faiz maliyetine de bakılmalıdır.
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