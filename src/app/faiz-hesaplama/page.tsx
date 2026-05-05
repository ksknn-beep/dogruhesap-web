import ClientPage from "./ClientPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faiz Hesaplama 2026 (Basit + Bileşik Faiz)",
  description:
    "Ana para, yıllık faiz oranı ve süreye göre basit faiz ve bileşik faiz hesapla. Toplam getiri ve kazancını anında öğren. Güncel 2026 faiz hesaplama aracı.",

  keywords: [
    "faiz hesaplama",
    "bileşik faiz hesaplama",
    "basit faiz hesaplama",
    "faiz getirisi hesaplama",
    "para ne kadar kazandırır",
    "mevduat faiz hesaplama",
  ],

  alternates: {
    canonical: "https://dogruhesap.net/faiz-hesaplama",
  },

  openGraph: {
    title: "Faiz Hesaplama 2026",
    description:
      "Basit ve bileşik faiz hesaplama aracı ile toplam kazancını anında öğren.",
    url: "https://dogruhesap.net/faiz-hesaplama",
    siteName: "DoğruHesap",
    locale: "tr_TR",
    type: "website",
  },
};

export default function Page() {
  return <ClientPage />;
}