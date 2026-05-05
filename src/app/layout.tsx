import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dogruhesap.net"), // domainini buraya yaz

  title: {
    default: "DoğruHesap - Ücretsiz Hesaplama Araçları",
    template: "%s | DoğruHesap",
  },

  description:
    "Kredi hesaplama, faiz hesaplama ve Trendyol kazanç hesaplama araçları ile net sonuçları saniyeler içinde öğrenin.",

  keywords: [
    "hesaplama araçları",
    "kredi hesaplama",
    "faiz hesaplama",
    "trendyol kazanç hesaplama",
    "kar hesaplama",
    "e ticaret hesaplama",
  ],

  authors: [{ name: "DoğruHesap" }],

  openGraph: {
    title: "DoğruHesap - Ücretsiz Hesaplama Araçları",
    description:
      "Kredi, faiz ve e-ticaret hesaplamalarını hızlı ve doğru şekilde yap.",
    url: "https://dogruhesap.net",
    siteName: "DoğruHesap",
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DoğruHesap",
    description:
      "Kredi, faiz ve kazanç hesaplamalarını hızlı ve doğru şekilde yap.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-[#0B1220] text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}