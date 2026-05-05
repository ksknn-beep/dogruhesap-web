import PageShell from "@/components/ui/PageShell";
import GlassCard from "@/components/ui/GlassCard";

export const metadata = {
  title: "Trendyol’da 500 TL’lik Ürün Ne Kadar Kazandırır?",
  description:
    "500 TL satış fiyatı ile Trendyol’da komisyon, kargo ve KDV sonrası net kazanç ne kadar olur?",
};

export default function Page() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl">
        <div className="mb-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 sm:p-8">
          <p className="mb-4 text-sm font-semibold text-green-400">
            E-Ticaret Rehberi
          </p>

          <h1 className="text-[36px] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[52px]">
            Trendyol’da 500 TL’lik Ürün{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
              Ne Kadar Kazandırır?
            </span>
          </h1>

          <p className="mt-5 text-lg text-white/70">
            Düşük fiyatlı ürünlerde kâr marjı daha hassastır. Komisyon ve kargo
            giderleri kazancı ciddi şekilde etkileyebilir.
          </p>
        </div>

        <GlassCard className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Örnek Hesaplama</h2>

          <div className="space-y-3 text-white/70">
            <div className="flex justify-between"><span>Satış</span><b>500 TL</b></div>
            <div className="flex justify-between"><span>Maliyet</span><b>300 TL</b></div>
            <div className="flex justify-between"><span>Komisyon</span><b>%17</b></div>
            <div className="flex justify-between"><span>Kargo</span><b>100 TL</b></div>
          </div>
        </GlassCard>

        <GlassCard className="mb-8 border-green-400/20 bg-green-400/10">
          <h2 className="mb-4 text-2xl font-semibold">Sonuç</h2>

          <p className="text-white/75">
            500 TL satışta kâr marjı çok daha düşüktür. Bu yüzden düşük fiyatlı
            ürünlerde kargo ve komisyon kontrolü çok önemlidir.
          </p>
        </GlassCard>

        <GlassCard>
          <a
            href="/trendyol-kazanc-hesaplama"
            className="inline-block rounded-2xl bg-green-500 px-7 py-4 font-bold text-black"
          >
            Hesaplama Aracını Aç →
          </a>
        </GlassCard>
      </article>
    </PageShell>
  );
}