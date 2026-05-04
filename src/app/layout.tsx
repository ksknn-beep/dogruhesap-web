import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DoğruHesap - Ücretsiz Hesaplama Araçları",
  description:
    "Kredi hesaplama, faiz hesaplama ve Trendyol kazanç hesaplama gibi ücretsiz araçlarla hızlı ve anlaşılır hesaplama yapın.",
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