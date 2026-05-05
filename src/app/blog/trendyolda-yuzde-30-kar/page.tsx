import PageShell from "@/components/ui/PageShell";
import GlassCard from "@/components/ui/GlassCard";

export const metadata = {
  title: "Trendyol’da %30 Kâr Marjı Nasıl Hesaplanır?",
  description:
    "Trendyol’da %30 kâr hedefi için satış fiyatı, ürün maliyeti, komisyon, kargo ve KDV nasıl hesaplanır?",
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
            Trendyol’da{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
              %30 Kâr Marjı
            </span>{" "}
            Nasıl Hesaplanır?
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Trendyol’da kârlı satış yapmak için sadece alış fiyatına bakmak
            yetmez. Komisyon, kargo, KDV, paketleme ve reklam giderlerini de
            hesaba katman gerekir.
          </p>
        </div>

        <GlassCard className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            %30 Kâr Marjı Ne Demek?
          </h2>

          <p className="leading-relaxed text-white/70">
            %30 kâr marjı, satış fiyatından tüm giderler düşüldükten sonra kalan
            net kazancın satış fiyatına oranıdır. Örneğin 1.000 TL satıştan 300
            TL net kâr kalıyorsa kâr marjı %30’dur.
          </p>
        </GlassCard>

        <GlassCard className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Örnek Gider Kalemleri
          </h2>

          <div className="grid gap-3">
            {[
              ["Ürün maliyeti", "Alış / üretim maliyeti"],
              ["Trendyol komisyonu", "Kategoriye göre değişir"],
              ["Kargo gideri", "Desi ve anlaşmaya göre değişir"],
              ["KDV", "Satış fiyatı içinde değerlendirilir"],
              ["Reklam ve paketleme", "Ek maliyet olarak eklenmelidir"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between gap-4 rounded-2xl border border-white/10 bg-[#0B1220]/70 px-4 py-3"
              >
                <span className="text-white/65">{label}</span>
                <strong className="text-right text-white">{value}</strong>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="mb-8 border-green-400/20 bg-green-400/10">
          <h2 className="mb-4 text-2xl font-semibold">Kritik Nokta</h2>

          <p className="leading-relaxed text-white/75">
            Trendyol’da %30 kâr hedefliyorsan satış fiyatını belirlemeden önce
            tüm giderleri birlikte hesaplamalısın. Aksi halde ürün yüksek
            fiyattan satılsa bile net kârın düşük kalabilir.
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="mb-4 text-2xl font-semibold">
            Kendi Ürünün İçin Hesapla
          </h2>

          <p className="mb-6 leading-relaxed text-white/70">
            Ürün maliyetin, kargo giderin ve komisyon oranın farklıysa en doğru
            sonucu hesaplama aracıyla görebilirsin.
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