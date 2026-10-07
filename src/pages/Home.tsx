import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake, ShieldCheck, Users, Target, Eye } from "lucide-react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import InfoCard from "../components/InfoCard";
import ImagePlaceholder from "../components/ImagePlaceholder";
import CareLine from "../components/CareLine";

const WHY_CHOOSE_US = [
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care",
    description: "Focused on treating patients with dignity, compassion and respect.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Healthcare",
    description: "Committed to responsible and professional healthcare practices.",
  },
  {
    icon: Users,
    title: "Quality & Safety",
    description: "Focused on maintaining appropriate standards of quality and patient safety.",
  },
  {
    icon: HeartHandshake,
    title: "Compassion",
    description: "Supporting patients and families with care and understanding.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Hospital Introduction */}
     <section className="bg-[var(--color-paper)] py-16 md:py-24">
  <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
    <div>
      <img 
        src="https://ircscancerhospital.org/wp-content/uploads/2024/07/image8-scaled.jpg" 
        alt="Patient-care environment photograph"
        className="w-full rounded-lg object-cover shadow-lg aspect-[4/3]"
      />
    </div>
    <div className="flex flex-col gap-5">
      <SectionTitle title="About IRCS Cancer Hospital" />
      <p className="text-base leading-relaxed text-[var(--color-ink-muted)]">
        IRCS Cancer Hospital is dedicated to providing patient-centered healthcare in a
        professional and caring environment. The hospital aims to support patients and
        their families through responsible healthcare practices, qualified healthcare
        services and a commitment to quality.
      </p>
      <Link
        to="/about"
        className="inline-flex w-fit items-center gap-2 font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
      >
        Read More
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </div>
  </div>
</section>

      {/* Mission & Vision */}
      <section className="bg-[var(--color-paper-alt)] py-16 md:py-24">
        <div className="container-page">
          <SectionTitle
            title="Our Mission &amp; Vision"
            description="Editable content — update to reflect the hospital's official mission and vision statements."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-xl border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-soft)]">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-accent-light)] text-[var(--color-primary)]">
                <Target size={22} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold">Mission</h3>
              <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                To provide compassionate and quality-focused healthcare while maintaining
                professionalism, dignity, safety and respect for every patient.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-soft)]">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-accent-light)] text-[var(--color-primary)]">
                <Eye size={22} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold">Vision</h3>
              <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                To contribute to a trusted and patient-centered healthcare environment through
                continuous improvement, responsible practices and modern healthcare approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[var(--color-paper)] py-16 md:py-24">
        <div className="container-page">
          <SectionTitle title="Why Choose Us" align="left" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_US.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-[var(--color-primary)] py-16 text-white md:py-20">
        <div className="container-page flex flex-col items-start gap-6">
          <CareLine className="max-w-xs opacity-90" />
          <h2 className="max-w-xl text-3xl font-bold leading-tight md:text-4xl">
            Your Health Matters
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-[#dbe7e4]">
            Learn more about IRCS Cancer Hospital and our commitment to providing compassionate
            healthcare.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary-dark)] transition-colors hover:bg-[var(--color-accent-light)]"
          >
            About the Hospital
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
