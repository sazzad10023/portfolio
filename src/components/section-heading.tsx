type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-400 sm:text-[1.0625rem] sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
