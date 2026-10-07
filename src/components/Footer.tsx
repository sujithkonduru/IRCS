
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-primary-dark)] text-[#e7edeb]">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <span className="font-[var(--font-display)] text-lg font-bold text-white">
            IRCS Cancer Hospital
          </span>

          <p className="max-w-xs text-sm leading-relaxed text-[#c3d2ce]">
            Compassionate, patient-centered healthcare, delivered with dignity and care.
          </p>

          <Link
            to="/about"
            className="mt-1 w-fit text-sm font-medium text-white underline decoration-[var(--color-accent)] decoration-2 underline-offset-4 hover:text-[var(--color-accent-light)]"
          >
            About Us
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#c3d2ce]">
            Quick Links
          </h3>

          <nav className="flex flex-col gap-2 text-sm">
            <Link to="/" className="text-[#e7edeb] hover:text-white">
              Home
            </Link>

            <Link to="/about" className="text-[#e7edeb] hover:text-white">
              About
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#c3d2ce]">
            Legal
          </h3>

          <nav className="flex flex-col gap-2 text-sm">
            <Link
              to="/privacy-policy"
              className="text-[#e7edeb] hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="text-[#e7edeb] hover:text-white"
            >
              Terms &amp; Conditions
            </Link>

            {/* Delete Account */}
            <Link
              to="/delete-account"
              className="mt-1 w-fit rounded-md bg-white/10 px-3 py-2 font-medium text-white transition hover:bg-white/20 hover:text-[var(--color-accent-light)]"
            >
              Delete Account
            </Link>
          </nav>
        </div>

        <div
          id="contact"
          className="flex scroll-mt-24 flex-col gap-3"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#c3d2ce]">
            Contact
          </h3>

          <ul className="flex flex-col gap-3 text-sm text-[#e7edeb]">
            <li className="flex items-start gap-2">
              <MapPin
                size={16}
                className="mt-0.5 shrink-0 text-[var(--color-accent-light)]"
                aria-hidden="true"
              />
              <span>
                podalakur Road, Nellore, Andhra Pradesh - 5240024
              </span>
            </li>

            <li className="flex items-start gap-2">
              <Phone
                size={16}
                className="mt-0.5 shrink-0 text-[var(--color-accent-light)]"
                aria-hidden="true"
              />
              <span>9392341714</span>
            </li>

            <li className="flex items-start gap-2">
              <Mail
                size={16}
                className="mt-0.5 shrink-0 text-[var(--color-accent-light)]"
                aria-hidden="true"
              />
              <span>info@ircscancerhospital.org</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-[#aebfba] sm:flex-row">
          <p>© {year} IRCS Cancer Hospital. All Rights Reserved.</p>

          <p className="flex items-center gap-2">
            <Link
              to="/privacy-policy"
              className="hover:text-white"
            >
              Privacy Policy
            </Link>

            <span aria-hidden="true">|</span>

            <Link
              to="/terms-and-conditions"
              className="hover:text-white"
            >
              Terms &amp; Conditions
            </Link>

            <span aria-hidden="true">|</span>

            <Link
              to="/delete-account"
              className="hover:text-white"
            >
              Delete Account
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

