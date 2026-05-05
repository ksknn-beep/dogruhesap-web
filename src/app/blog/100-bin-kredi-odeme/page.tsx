import PageShell from "@/components/ui/PageShell";
import GlassCard from "@/components/ui/GlassCard";

export const metadata = {
  title: "100.000 TL Kredi Aylık Ne Kadar Ödenir?",
  description:
    "100.000 TL kredi için aylık taksit, toplam faiz ve geri ödeme tutarı ne olur? Detaylı hesaplama.",
};

export default function Page() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl">

        <div className="mb-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 sm:p-8">
          <p className="mb-4 text-sm font-semibold text-green-400">
            Finans Rehberi
          </p>

          <h1 className="text-[36px] font-semibold md:text-[52px]">
            100.000 TL Kredi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
              Aylık Ne Kadar?
            </span>
          </h1>

          <p className="mt-5 text-white/70">
            100.000 TL kredi çektiğinde aylık ödeyeceğin tutar faiz oranına ve vadeye göre değişir.
          </p>
        </div>

        <GlassCard className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Örnek Senaryo</h2>

          <div className="space-y-3 text-white/70">
            <div className="flex justify-between"><span>Kredi</span><b>100.000 TL</b></div>
            <div className="flex justify-between"><span>Faiz</span><b>%3,5</b></div>
            <div className="flex justify-between"><span>Vade</span><b>24 Ay</b></div>
          </div>
        </GlassCard>

        <GlassCard className="mb-8 border-green-400/20 bg-green-400/10">
          <h2 className="mb-4 text-2xl font-semibold">Sonuç</h2>

          <p className="text-white/75">
            Faiz oranı arttıkça toplam geri ödeme ciddi şekilde yükselir. Bu yüzden kredi çekerken sadece aylık taksite değil toplam maliyete odaklanmalısın.
          </p>
        </GlassCard>

        <GlassCard>
          <a
            href="/kredi-hesaplama"
            className="inline-block bg-green-500 px-7 py-4 rounded-xl font-bold text-black"
          >
            Kredi Hesapla →
          </a>
        </GlassCard>

      </article>
    </PageShell>
  );
}