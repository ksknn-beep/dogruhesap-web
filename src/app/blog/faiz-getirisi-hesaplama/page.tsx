import PageShell from "@/components/ui/PageShell";
import GlassCard from "@/components/ui/GlassCard";

export const metadata = {
  title: "100.000 TL 1 Yılda Ne Kadar Faiz Getirir?",
  description:
    "100.000 TL ana para 1 yılda ne kadar faiz getirir? Basit ve bileşik faiz örnekleriyle hesaplama.",
};

export default function Page() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl">
        <ArticleHero
          category="Yatırım Rehberi"
          title="100.000 TL"
          highlight="1 Yılda Ne Kadar Faiz Getirir?"
          desc="100.000 TL’nin 1 yılda ne kadar faiz getireceği faiz oranına, hesaplama tipine ve kesintilere göre değişir."
        />

        <GlassCard className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Örnek Faiz Senaryoları</h2>
          <InfoRows
            rows={[
              ["%30 yıllık faiz", "30.000 TL brüt getiri"],
              ["%40 yıllık faiz", "40.000 TL brüt getiri"],
              ["%50 yıllık faiz", "50.000 TL brüt getiri"],
            ]}
          />
        </GlassCard>

        <GlassCard className="mb-8 border-green-400/20 bg-green-400/10">
          <h2 className="mb-4 text-2xl font-semibold">Gerçek Getiri</h2>
          <p className="leading-relaxed text-white/75">
            Banka mevduatlarında stopaj, kampanya koşulları ve vade yapısı
            sonucu değiştirebilir. Bu nedenle hesaplama sonucu tahmini olarak
            değerlendirilmelidir.
          </p>
        </GlassCard>

        <CTA href="/faiz-hesaplama" text="Faiz Hesapla →" />
      </article>
    </PageShell>
  );
}

function ArticleHero({ category, title, highlight, desc }: any) {
  return (
    <div className="mb-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 sm:p-8">
      <p className="mb-4 text-sm font-semibold text-green-400">{category}</p>
      <h1 className="text-[36px] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[52px]">
        {title}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
          {highlight}
        </span>
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-white/70">{desc}</p>
    </div>
  );
}

function InfoRows({ rows }: { rows: string[][] }) {
  return (
    <div className="grid gap-3">
      {rows.map(([label, value]) => (
        <div key={label} className="flex justify-between rounded-2xl border border-white/10 bg-[#0B1220]/70 px-4 py-3">
          <span className="text-white/65">{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </div>
  );
}

function CTA({ href, text }: { href: string; text: string }) {
  return (
    <GlassCard>
      <a href={href} className="inline-block rounded-2xl bg-green-500 px-7 py-4 font-bold text-[#03110A] transition hover:bg-green-400">
        {text}
      </a>
    </GlassCard>
  );
}