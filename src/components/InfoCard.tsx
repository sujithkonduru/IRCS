import type { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function InfoCard({ icon: Icon, title, description }: InfoCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-accent-light)] text-[var(--color-primary)]">
        <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="text-lg font-semibold text-[var(--color-ink)]">{title}</h3>
      <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">{description}</p>
    </div>
  );
}
