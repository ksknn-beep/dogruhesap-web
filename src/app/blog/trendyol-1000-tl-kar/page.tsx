import PageShell from "@/components/ui/PageShell";
import GlassCard from "@/components/ui/GlassCard";

export const metadata = {
  title: "Trendyol’da 1000 TL Ürün Ne Kadar Kazandırır?",
  description:
    "1000 TL’lik bir ürün Trendyol’da satıldığında komisyon, kargo, KDV ve ürün maliyeti sonrası ne kadar net kâr kalır?",
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
            Trendyol’da 1000 TL’lik Ürün{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
              Ne Kadar Kazandırır?
            </span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Trendyol’da satış yaparken ürün fiyatı tek başına kârı belirlemez.
            Komisyon, kargo, KDV ve ürün maliyeti düşüldüğünde gerçek net kazanç
            ortaya çıkar.
          </p>
        </div>

        <GlassCard className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Örnek Hesaplama</h2>

          <div className="grid gap-3 text-white/70">
            {[
              ["Satış fiyatı", "1000 TL"],
              ["Ürün maliyeti", "500 TL"],
              ["Komisyon oranı", "%17"],
              ["Kargo gideri", "100 TL"],
              ["KDV oranı", "%20"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between rounded-2xl border border-white/10 bg-[#0B1220]/70 px-4 py-3"
              >
                <span>{label}</span>
                <strong className="text-white">{value}</strong>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="mb-8 border-green-400/20 bg-green-400/10">
          <h2 className="mb-4 text-2xl font-semibold">Yaklaşık Sonuç</h2>

          <p className="leading-relaxed text-white/75">
            Bu örnekte 1000 TL satıştan komisyon, kargo, KDV ve ürün maliyeti
            düşüldüğünde net kâr ciddi şekilde azalır. Bu yüzden satıcıların ürün
            fiyatı belirlerken tüm giderleri hesaba katması gerekir.
          </p>
        </GlassCard>

        <GlassCard className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Trendyol Kâr Hesabında Nelere Dikkat Edilmeli?
          </h2>

          <p className="leading-relaxed text-white/70">
            Trendyol’da kârlı satış yapabilmek için yalnızca alış fiyatına bakmak
            yeterli değildir. Komisyon oranı, kargo ücreti, KDV, paketleme, iade
            ve reklam giderleri de hesaba katılmalıdır.
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="mb-4 text-2xl font-semibold">
            Kendi Ürünün İçin Hesapla
          </h2>

          <p className="mb-6 leading-relaxed text-white/70">
            Ürün fiyatın, kargo giderin ve komisyon oranın farklıysa en doğru
            sonucu hesaplama aracıyla alırsın.
          </p>

          <a
            href="/trendyol-kazanc-hesaplama"
            className="inline-block rounded-2xl bg-green-500 px-7 py-4 font-bold text-[#03110A] transition hover:bg-green-400"
          >
            Trendyol Kazancını Hesapla →
          </a>
        </GlassCard>
      </article>
    </PageShell>
  );
}