export default function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur sm:rounded-[32px] sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}