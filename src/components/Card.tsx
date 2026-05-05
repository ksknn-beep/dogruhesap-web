export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl3 border border-border bg-glass backdrop-blur p-5 sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}