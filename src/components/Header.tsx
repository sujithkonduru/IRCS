import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Cross } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile drawer whenever the route changes size class (resize to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? "text-[var(--color-primary)]"
        : "text-[var(--color-ink-muted)] hover:text-[var(--color-primary)]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-white/95 backdrop-blur">
  <div className="container-page flex h-16 items-center justify-between md:h-20">
    <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
      {/* Logo image */}
      <img 
        src="https://ircscancerhospital.org/wp-content/uploads/2024/07/logo11.png" 
        alt="IRCS Cancer Hospital Logo"
        className="h-10 w-10 shrink-0 rounded-lg border border-[var(--color-line)] bg-[var(--color-paper-alt)] object-contain p-1"
      />
      <span className="flex flex-col leading-tight">
        <span className="font-[var(--font-display)] text-base font-bold text-[var(--color-ink)] md:text-lg">
          IRCS Cancer Hospital
        </span>
        <span className="text-[11px] font-medium uppercase tracking-wide text-[var(--color-ink-soft)]">
          [IRCS HOSPITAL LOGO]
        </span>
      </span>
    </NavLink>

    {/* Desktop navigation */}
    <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
      {NAV_LINKS.map((link) => (
        <NavLink key={link.to} to={link.to} className={navLinkClasses} end={link.to === "/"}>
          {link.label}
        </NavLink>
      ))}
    </nav>

    {/* Mobile toggle */}
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-ink)] md:hidden"
      aria-expanded={open}
      aria-controls="mobile-menu"
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={() => setOpen((v) => !v)}
    >
      {open ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {/* Mobile drawer */}
  <div
    id="mobile-menu"
    className={`overflow-hidden border-t border-[var(--color-line)] bg-white transition-[max-height] duration-300 ease-in-out md:hidden ${
      open ? "max-h-96" : "max-h-0 border-t-0"
    }`}
  >
    <nav className="container-page flex flex-col gap-1 py-3" aria-label="Mobile">
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === "/"}
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `rounded-lg px-3 py-3 text-base font-medium transition-colors ${
              isActive
                ? "bg-[var(--color-accent-light)] text-[var(--color-primary)]"
                : "text-[var(--color-ink)] hover:bg-[var(--color-paper-alt)]"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  </div>
</header>
  );
}
