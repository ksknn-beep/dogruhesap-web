export default function SeoHero({
  label,
  title,
  highlight,
  description,
}: {
  label: string;
  title: string;
  highlight?: string;
  description: string;
}) {
  return (
    <section className="mb-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 sm:p-8 md:p-9">
      <span className="mb-5 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300">
        {label}
      </span>

      <h1 className="max-w-4xl text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[56px]">
        {title}{" "}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
            {highlight}
          </span>
        )}
      </h1>

      <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-relaxed">
        {description}
      </p>
    </section>
  );
}