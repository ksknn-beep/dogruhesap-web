export function PrimaryButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-block rounded-2xl bg-primary px-6 py-3 font-bold text-[#03110A] shadow-glow transition hover:bg-green-400"
    >
      {children}
    </a>
  );
}

export function GhostButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-block rounded-2xl border border-border bg-white/[0.05] px-6 py-3 font-semibold transition hover:bg-white/[0.09]"
    >
      {children}
    </a>
  );
}