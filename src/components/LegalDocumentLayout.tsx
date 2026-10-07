import type { ReactNode } from "react";

interface LegalSection {
  id: string;
  heading: string;
  content: ReactNode;
}

interface LegalDocumentLayoutProps {
  title: string;
  intro?: string;
  lastUpdated: string;
  sections: LegalSection[];
  legalNotice: string;
}

export default function LegalDocumentLayout({
  title,
  intro,
  lastUpdated,
  sections,
  legalNotice,
}: LegalDocumentLayoutProps) {
  return (
    <div className="bg-[var(--color-paper)]">
      <div className="container-page grid grid-cols-1 gap-10 py-14 md:py-20 lg:grid-cols-[240px_1fr] lg:gap-16">
        {/* Table of contents - desktop only */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 flex flex-col gap-1 border-l border-[var(--color-line)] pl-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
              On this page
            </p>
            <nav className="flex flex-col gap-2 text-sm" aria-label="Document sections">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-primary)]"
                >
                  {section.heading}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="min-w-0">
          <header className="mb-10 border-b border-[var(--color-line)] pb-8">
            <h1 className="text-3xl font-bold text-[var(--color-ink)] md:text-4xl">{title}</h1>
            {intro && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-ink-muted)]">
                {intro}
              </p>
            )}
            <p className="mt-4 text-sm font-medium text-[var(--color-ink-soft)]">
              Last Updated: {lastUpdated}
            </p>
          </header>

          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="mb-3 text-xl font-semibold text-[var(--color-ink)] md:text-2xl">
                  {section.heading}
                </h2>
                <div className="flex flex-col gap-3 text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-xl border border-[var(--color-line)] bg-[var(--color-paper-alt)] p-6">
            <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
              <strong className="text-[var(--color-ink)]">Legal Notice:</strong> {legalNotice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
