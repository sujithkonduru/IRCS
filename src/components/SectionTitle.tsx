interface SectionTitleProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionTitle({ title, description, align = "left" }: SectionTitleProps) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left";
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      <h2 className="text-3xl font-bold text-[var(--color-ink)] md:text-4xl">{title}</h2>
      {description && (
        <p className="text-base leading-relaxed text-[var(--color-ink-muted)] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
