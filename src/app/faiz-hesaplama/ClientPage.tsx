"use client";

import { useState } from "react";
import PageShell from "@/components/ui/PageShell";
import GlassCard from "@/components/ui/GlassCard";
import SeoHero from "@/components/ui/SeoHero";

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
  const getiriOrani = principal > 0 ? (faizTutari / principal) * 100 : 0;

  const formatTL = (v: number) =>
    v.toLocaleString("tr-TR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " TL";

  return (
    <PageShell>
      <Breadcrumb items={["Ana Sayfa", "Finans", "Faiz Hesaplama"]} />

      <SeoHero
        label="Basit faiz ve bileşik faiz hesaplama aracı"
        title="Faiz Hesaplama"
        highlight="2026"
        description="Ana para, yıllık faiz oranı ve süre bilgilerini girerek basit faiz veya bileşik faiz yöntemiyle toplam getiri ve toplam tutarı anında hesapla."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <GlassCard className="p-5 sm:p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-3xl border border-white/10 bg-[#0B1220]/70 p-5 md:p-6">
                <h2 className="mb-5 text-xl font-semibold">
                  Faiz Bilgilerini Gir
                </h2>

                <div className="grid gap-5">
                  <Field
                    label="Ana Para (TL)"
                    value={anaPara}
                    setValue={setAnaPara}
                    placeholder="Örn: 100000"
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Yıllık Faiz Oranı (%)"
                      value={faizOrani}
                      setValue={setFaizOrani}
                      placeholder="Örn: 40"
                    />

                    <Field
                      label="Süre (Yıl)"
                      value={sure}
                      setValue={setSure}
                      placeholder="Örn: 2"
                    />
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-sm text-white/70">
                      Hesaplama Tipi
                    </span>
                    <select
                      value={tip}
                      onChange={(e) => setTip(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-[#0B1220] px-4 py-3 outline-none transition focus:border-green-400"
                    >
                      <option value="basit">Basit Faiz</option>
                      <option value="bilesik">Bileşik Faiz</option>
                    </select>
                  </label>
                </div>

                <div className="mt-5 rounded-2xl border border-green-400/20 bg-green-400/10 p-4 text-sm text-green-200">
                  İpucu: Bileşik faiz, faizin de tekrar faize dahil olduğu
                  hesaplama türüdür. Uzun vadede basit faizden daha yüksek sonuç
                  verebilir.
                </div>
              </div>

              <div className="rounded-3xl border border-green-400/20 bg-gradient-to-br from-green-500/15 to-blue-500/10 p-6">
                <p className="text-sm font-medium text-white/60">
                  Toplam Tutar
                </p>

                <div className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-green-400 sm:text-5xl">
                  {formatTL(toplamTutar)}
                </div>

                <div className="mt-3 text-white/70">
                  Getiri oranı:{" "}
                  <strong className="text-green-400">
                    %{getiriOrani.toFixed(2)}
                  </strong>
                </div>

                <div className="mt-7 grid gap-3">
                  <ResultRow label="Ana Para" value={formatTL(principal)} />
                  <ResultRow
                    label="Faiz Tutarı"
                    value={formatTL(faizTutari)}
                  />
                  <ResultRow
                    label="Süre"
                    value={`${years.toLocaleString("tr-TR")} Yıl`}
                  />
                  <ResultRow
                    label="Hesaplama Tipi"
                    value={tip === "basit" ? "Basit Faiz" : "Bileşik Faiz"}
                  />
                  <ResultRow
                    label="Toplam Tutar"
                    value={formatTL(toplamTutar)}
                    strong
                  />
                </div>

                <div className="mt-6 rounded-2xl bg-green-400/10 p-4 text-sm font-medium text-green-300">
                  Bu hesaplama tahmini sonuç verir. Vergi, stopaj, banka
                  kesintisi veya kampanya koşulları dahil edilmemiştir.
                </div>
              </div>
            </div>
          </GlassCard>

          <ContentCard title="Faiz Detay Tablosu">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["Ana Para", principal],
                    ["Faiz Tutarı", faizTutari],
                    ["Toplam Tutar", toplamTutar],
                    ["Getiri Oranı", getiriOrani],
                  ].map(([label, value]) => (
                    <tr
                      key={label as string}
                      className="border-b border-white/10 last:border-0"
                    >
                      <td className="px-4 py-4 text-white/65">{label}</td>
                      <td className="px-4 py-4 text-right font-semibold">
                        {label === "Getiri Oranı"
                          ? `%${(value as number).toFixed(2)}`
                          : formatTL(value as number)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ContentCard>

          <ContentCard title="Faiz Hesaplama Nasıl Yapılır?">
            <p className="text-white/70">
              Faiz hesaplama, ana para üzerinden belirlenen faiz oranı ve süre
              dikkate alınarak yapılır. Basit faiz yönteminde faiz sadece ana
              para üzerinden hesaplanır. Bileşik faiz yönteminde ise oluşan faiz
              de tekrar ana paraya eklenir.
            </p>

            <div className="mt-5 rounded-2xl border border-green-400/20 bg-green-400/10 p-5">
              <h3 className="mb-2 font-semibold text-green-300">Formül</h3>
              <p className="text-white/80">
                Basit Faiz = Ana Para × Faiz Oranı × Süre
              </p>
              <p className="mt-2 text-white/80">
                Bileşik Toplam = Ana Para × (1 + Faiz Oranı) ^ Süre
              </p>
            </div>
          </ContentCard>

          <ContentCard title="Basit Faiz ve Bileşik Faiz Farkı">
            <p className="text-white/70">
              Basit faiz daha sade bir hesaplama yöntemidir ve faiz yalnızca
              başlangıçtaki ana para üzerinden hesaplanır. Bileşik faiz ise
              önceki dönemlerde oluşan faizi de hesaba kattığı için özellikle
              uzun vadede daha yüksek toplam tutar oluşturabilir.
            </p>
          </ContentCard>

          <ContentCard title="Örnek Faiz Hesaplama">
            <p className="text-white/70">
              100.000 TL ana para, yıllık %40 faiz oranı ve 2 yıl süre ile
              hesaplandığında basit faiz ile bileşik faiz sonucu farklı çıkar.
              Bileşik faiz seçildiğinde ilk yıl oluşan getiri ikinci yıl yeniden
              hesaba dahil edilir.
            </p>
          </ContentCard>

          <ContentCard title="Sık Sorulan Sorular">
            <div className="space-y-5">
              <FAQ
                q="Basit faiz nedir?"
                a="Basit faiz, faizin yalnızca ana para üzerinden hesaplandığı yöntemdir."
              />
              <FAQ
                q="Bileşik faiz nedir?"
                a="Bileşik faiz, oluşan faizin sonraki dönemlerde ana paraya eklenerek tekrar faiz getirmesi mantığıyla hesaplanır."
              />
              <FAQ
                q="Bu hesaplama mevduat getirisiyle birebir aynı mı?"
                a="Hayır. Stopaj, banka kesintisi ve kampanya koşulları değişebileceği için sonuç tahmini kabul edilmelidir."
              />
              <FAQ
                q="Faiz oranı yıllık mı girilmeli?"
                a="Evet. Bu araç yıllık faiz oranı ve yıl cinsinden süre ile hesaplama yapar."
              />
            </div>
          </ContentCard>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <GlassCard>
            <h3 className="mb-4 font-semibold">Popüler Araçlar</h3>
            <div className="space-y-3 text-sm">
              <SideLink active href="/faiz-hesaplama">
                Faiz Hesaplama
              </SideLink>
              <SideLink href="/kredi-hesaplama">Kredi Hesaplama</SideLink>
              <SideLink href="/trendyol-kazanc-hesaplama">
                Trendyol Kazanç Hesaplama
              </SideLink>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="mb-3 font-semibold">Kısa Bilgi</h3>
            <p className="text-sm leading-6 text-white/65">
              Basit faiz kısa ve sade hesaplamalar için; bileşik faiz ise faizin
              tekrar değerlendirilmesini görmek için kullanılır.
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