import ClientPage from "./ClientPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kredi Hesaplama 2026 (Aylık Taksit + Toplam Geri Ödeme)",
  description:
    "Kredi tutarı, aylık faiz oranı ve vadeye göre aylık taksit, toplam faiz ve toplam geri ödeme tutarını anında hesapla. Güncel 2026 kredi hesaplama aracı.",

  keywords: [
    "kredi hesaplama",
    "kredi taksit hesaplama",
    "ihtiyaç kredisi hesaplama",
    "taşıt kredisi hesaplama",
    "konut kredisi hesaplama",
    "kredi geri ödeme hesaplama",
  ],

  alternates: {
    canonical: "https://dogruhesap.net/kredi-hesaplama",
  },

  openGraph: {
    title: "Kredi Hesaplama 2026",
    description:
      "Kredi tutarı, faiz oranı ve vadeye göre aylık taksit ve toplam geri ödeme tutarını hesapla.",
    url: "https://dogruhesap.net/kredi-hesaplama",
    siteName: "DoğruHesap",
    locale: "tr_TR",
    type: "website",
  },
};

export default function Page() {
  return <ClientPage />;
}