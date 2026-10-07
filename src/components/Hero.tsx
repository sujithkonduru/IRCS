import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import CareLine from "./CareLine";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-page grid grid-cols-1 items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="flex flex-col gap-6 motion-safe:animate-[fadeUp_0.7s_ease-out]">
          <h1 className="text-4xl font-extrabold leading-[1.08] text-[var(--color-ink)] sm:text-5xl lg:text-[3.4rem]">
            IRCS Cancer Hospital
          </h1>
          <p className="text-lg font-medium text-[var(--color-primary)] sm:text-xl">
            Compassionate Care. Trusted Healthcare.
          </p>
          <p className="max-w-lg text-base leading-relaxed text-[var(--color-ink-muted)]">
            IRCS Cancer Hospital is committed to providing compassionate, accessible and
            quality-focused healthcare services while placing patients and their well-being at
            the heart of everything we do.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Link to="/about" className="btn-primary">
              Learn More
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a href="#contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
          <div className="pt-6">
            <CareLine className="max-w-xs" />
          </div>
        </div>

        <div className="relative">
  <img 
    src="https://content.jdmagicbox.com/comp/nellore/l7/9999px861.x861.140319161724.g3l7/catalogue/ircs-cancer-hospital-podalakur-nellore-hospitals-uj7ro97hf5.jpg" 
    alt="Hospital exterior / patient-care photograph"
    className="w-full rounded-2xl object-cover aspect-[5/4]"
  />
</div>
      </div>
    </section>
  );
}
