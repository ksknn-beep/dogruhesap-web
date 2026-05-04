export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        
        <a href="/" className="text-xl font-bold">
          Doğru<span className="text-green-400">Hesap</span>
        </a>

        <nav className="hidden md:flex gap-8 text-sm text-white/80">
          <a href="/" className="hover:text-green-400">Anasayfa</a>
          <a href="/trendyol-kazanc-hesaplama" className="hover:text-green-400">
            Trendyol
          </a>
          <a href="/kredi-hesaplama" className="hover:text-green-400">
            Kredi
          </a>
          <a href="/faiz-hesaplama" className="hover:text-green-400">
            Faiz
          </a>
        </nav>

        <a
          href="/trendyol-kazanc-hesaplama"
          className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg text-sm font-medium"
        >
          Hesapla
        </a>

      </div>
    </header>
  );
}