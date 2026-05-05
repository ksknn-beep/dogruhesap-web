import ClientPage from "./ClientPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trendyol Kazanç Hesaplama 2026 (Komisyon + KDV + Kargo)",
  description:
    "Trendyol’da satıştan ne kadar kazanırsın? Komisyon, kargo, KDV ve ürün maliyetine göre net kârını anında hesapla. Güncel 2026 hesaplama aracı.",

  keywords: [
    "trendyol kazanç hesaplama",
    "trendyol komisyon hesaplama",
    "trendyol kar hesaplama",
    "trendyol ne kadar kazanırım",
    "e ticaret kar hesaplama",
  ],

  alternates: {
    canonical: "https://dogruhesap.net/trendyol-kazanc-hesaplama",
  },

  openGraph: {
    title: "Trendyol Kazanç Hesaplama 2026",
    description:
      "Trendyol’da satıştan net kazancını hesapla. Komisyon, KDV ve kargo dahil gerçek kârını öğren.",
    url: "https://dogruhesap.net/trendyol-kazanc-hesaplama",
    siteName: "DoğruHesap",
    locale: "tr_TR",
    type: "website",
  },
};

export default function Page() {
  return <ClientPage />;
}