export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-bg text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        {children}
      </div>
    </main>
  );
}