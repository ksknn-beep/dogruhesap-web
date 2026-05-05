import PageShell from "@/components/ui/PageShell";
import GlassCard from "@/components/ui/GlassCard";

export const metadata = {
  title: "1.000.000 TL 1 Yılda Ne Kadar Faiz Getirir?",
  description:
    "1 milyon TL mevduatın yıllık faiz getirisi ne kadar? Farklı faiz oranlarına göre kazanç hesaplama.",
};

export default function Page() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl">

        <div className="mb-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 sm:p-8">
          <p className="mb-4 text-sm font-semibold text-green-400">
            Yatırım Rehberi
          </p>

          <h1 className="text-[36px] font-semibold md:text-[52px]">
            1.000.000 TL{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
              1 Yılda Ne Kadar Faiz Getirir?
            </span>
          </h1>

          <p className="mt-5 text-white/70">
            1 milyon TL gibi yüksek bir ana para ile faiz getirisi oldukça ciddi seviyelere ulaşabilir. Ancak kazanç, faiz oranına göre büyük değişiklik gösterir.
          </p>
        </div>

        <GlassCard className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Örnek Faiz Senaryoları
          </h2>

          <div className="space-y-3 text-white/70">
            <div className="flex justify-between"><span>%30 Faiz</span><b>300.000 TL</b></div>
            <div className="flex justify-between"><span>%40 Faiz</span><b>400.000 TL</b></div>
            <div className="flex justify-between"><span>%50 Faiz</span><b>500.000 TL</b></div>
          </div>
        </GlassCard>

        <GlassCard className="mb-8 border-green-400/20 bg-green-400/10">
          <h2 className="mb-4 text-2xl font-semibold">Gerçek Kazanç</h2>

          <p className="text-white/75">
            Banka faizinden elde edilen kazançtan stopaj kesintisi yapılabilir. Ayrıca faiz oranları kampanya, vade ve bankaya göre değişir.
          </p>
        </GlassCard>

        <GlassCard className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Nelere Dikkat Etmelisin?
          </h2>

          <ul className="space-y-3 text-white/70">
            <li>• Faiz oranı sabit mi değişken mi?</li>
            <li>• Stopaj oranı ne kadar?</li>
            <li>• Vade süresi ne kadar?</li>
            <li>• Günlük mü aylık mı işliyor?</li>
          </ul>
        </GlassCard>

        <GlassCard>
          <a
            href="/faiz-hesaplama"
            className="inline-block bg-green-500 px-7 py-4 rounded-xl font-bold text-black"
          >
            Faiz Hesapla →
          </a>
        </GlassCard>

      </article>
    </PageShell>
  );
}