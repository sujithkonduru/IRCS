import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  UserCheck,
  BadgeCheck,
  TrendingUp,
  Stethoscope,
  Activity,
  Microscope,
  ScanLine,
  Hospital,
  Clock3,
  Phone,
  Mail,
  MapPin,
  Users,
  Utensils,
  Megaphone,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";
import CareLine from "../components/CareLine";

const COMMITMENTS = [
  {
    icon: UserCheck,
    title: "Patient-Centered Care",
    description:
      "Providing care with attention to the needs, dignity and well-being of patients and their families.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "Supporting patients throughout their cancer-care journey with compassion and understanding.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Cancer Care",
    description:
      "Providing specialized cancer diagnosis and treatment through dedicated oncology services.",
  },
  {
    icon: ShieldCheck,
    title: "Patient Safety",
    description:
      "Maintaining a safe and supportive healthcare environment for patients and their families.",
  },
  {
    icon: Sparkles,
    title: "Modern Healthcare",
    description:
      "Continuously adopting modern medical technologies and treatment facilities for cancer care.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Development",
    description:
      "Working with healthcare professionals, donors and the community to further improve cancer services.",
  },
];

const SERVICES = [
  {
    icon: Stethoscope,
    title: "Surgical Oncology",
    description:
      "Specialized surgical care for patients requiring cancer-related surgical treatment.",
  },
  {
    icon: Activity,
    title: "Radiation Oncology",
    description:
      "Radiation treatment services supported by modern radiotherapy technology.",
  },
  {
    icon: Hospital,
    title: "Medical Oncology",
    description:
      "Medical cancer treatment including chemotherapy, immunotherapy and targeted therapy.",
  },
  {
    icon: ScanLine,
    title: "Radiology",
    description:
      "Diagnostic imaging services supporting cancer diagnosis, treatment planning and monitoring.",
  },
  {
    icon: Microscope,
    title: "Pathology & Biochemistry",
    description:
      "Laboratory services supporting diagnosis and clinical evaluation.",
  },
  {
    icon: Users,
    title: "Gynaec & Breast Clinic",
    description:
      "Dedicated services supporting women's health, breast care, screening and cancer awareness.",
  },
];

const FACILITIES = [
  "Linear Accelerator",
  "CT Machine",
  "Digital Mammogram",
  "Colposcope",
  "Harmonic Scalpel",
  "Laparoscope",
  "HDR Brachytherapy",
  "Ultrasound",
];

export default function About() {
  return (
    <div className="bg-[var(--color-paper)]">
      {/* ================================================================
          PAGE HEADER
      ================================================================= */}
      <section className="border-b border-[var(--color-line)] bg-white py-16 md:py-20">
        <div className="container-page flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            About Us
          </p>

          <h1 className="text-4xl font-extrabold text-[var(--color-ink)] md:text-5xl">
            IRCS Cancer Hospital
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-[var(--color-ink-muted)] md:text-lg">
            IRCS Cancer Hospital began in 2001 as a Cancer Detection Centre
            established by the Nellore Red Cross Team to support people,
            particularly those from underprivileged communities. Over the
            years, it has developed into a full-fledged cancer therapy centre
            providing specialized cancer diagnosis and treatment services.
          </p>

          <CareLine className="max-w-xs" />
        </div>
      </section>

      {/* ================================================================
          WHO WE ARE
      ================================================================= */}
      <section className="py-16 md:py-20">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 flex flex-col gap-5 lg:order-1">
            <SectionTitle title="Who We Are" />

            <p className="text-base leading-relaxed text-[var(--color-ink-muted)]">
              IRCS Cancer Hospital is a cancer-care institution supported by
              the Indian Red Cross and serving patients from Nellore and
              surrounding districts and other areas.
            </p>

            <p className="text-base leading-relaxed text-[var(--color-ink-muted)]">
              The hospital has developed its surgical, radiation and medical
              oncology services over the years and provides a range of
              diagnostic and treatment facilities for cancer patients.
            </p>

            <p className="text-base leading-relaxed text-[var(--color-ink-muted)]">
              Experienced oncology professionals, nurses, technical staff and
              other healthcare personnel work together to provide coordinated
              care to patients.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src="https://ircscancerhospital.org/wp-content/uploads/2024/07/image13-scaled.jpg"
              alt="IRCS Cancer Hospital"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ================================================================
          OUR JOURNEY
      ================================================================= */}
      <section className="bg-[var(--color-paper-alt)] py-16 md:py-20">
        <div className="container-page">
          <SectionTitle
            title="Our Journey"
            description="From a cancer detection centre to a full-fledged cancer therapy centre."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <p className="text-3xl font-extrabold text-[var(--color-primary)]">
                2001
              </p>

              <h3 className="mt-3 font-semibold text-[var(--color-ink)]">
                Cancer Detection Centre
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                Started as a Cancer Detection Centre by the Nellore Red Cross
                Team.
              </p>
            </div>

            <div className="rounded-xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <p className="text-3xl font-extrabold text-[var(--color-primary)]">
                2006
              </p>

              <h3 className="mt-3 font-semibold text-[var(--color-ink)]">
                Radiation Therapy
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                Radiation therapy services commenced following the development
                of the Radiation Department.
              </p>
            </div>

            <div className="rounded-xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <p className="text-3xl font-extrabold text-[var(--color-primary)]">
                2019
              </p>

              <h3 className="mt-3 font-semibold text-[var(--color-ink)]">
                Medical Oncology
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                The Medical Oncology Department was established and expanded
                the hospital's cancer treatment services.
              </p>
            </div>

            <div className="rounded-xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <p className="text-3xl font-extrabold text-[var(--color-primary)]">
                2023
              </p>

              <h3 className="mt-3 font-semibold text-[var(--color-ink)]">
                Advanced Radiotherapy
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                CT Scan and modern LINAC radiotherapy machines were installed
                in collaboration with the ICON Group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          CANCER CARE SERVICES
      ================================================================= */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionTitle
            title="Cancer Care Services"
            description="Specialized departments supporting diagnosis, treatment and comprehensive cancer care."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(
              ({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 rounded-xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent-light)] text-[var(--color-primary)]">
                    <Icon
                      size={22}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>

                  <h3 className="text-base font-semibold text-[var(--color-ink)]">
                    {title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                    {description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================================================================
          FACILITIES
      ================================================================= */}
      <section className="bg-[var(--color-paper-alt)] py-16 md:py-20">
        <div className="container-page">
          <SectionTitle
            title="Medical Facilities & Technology"
            description="The hospital lists a range of diagnostic, surgical and radiotherapy equipment supporting cancer care."
          />

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {FACILITIES.map((facility) => (
              <div
                key={facility}
                className="flex min-h-[90px] items-center justify-center rounded-xl border border-[var(--color-line)] bg-white p-5 text-center shadow-[var(--shadow-soft)]"
              >
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  {facility}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          PATIENT CARE
      ================================================================= */}
      <section className="py-16 md:py-20">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle title="Patient Care & Community Support" />

            <div className="mt-6 flex flex-col gap-5">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-light)] text-[var(--color-primary)]">
                  <HeartHandshake size={20} />
                </span>

                <div>
                  <h3 className="font-semibold text-[var(--color-ink)]">
                    Nursing Care
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                    Dedicated nursing support focused on patient comfort,
                    safety, treatment support and family guidance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-light)] text-[var(--color-primary)]">
                  <Utensils size={20} />
                </span>

                <div>
                  <h3 className="font-semibold text-[var(--color-ink)]">
                    Annaprasadam
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                    The hospital provides nutritious food to inpatients through
                    its Annaprasadam scheme.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-light)] text-[var(--color-primary)]">
                  <Megaphone size={20} />
                </span>

                <div>
                  <h3 className="font-semibold text-[var(--color-ink)]">
                    Cancer Awareness
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                    Regular cancer awareness programmes and screening
                    activities are conducted in schools, colleges and villages.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-soft)]">
            <h3 className="text-xl font-semibold text-[var(--color-ink)]">
              Healthcare at IRCS Cancer Hospital
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">
              The hospital combines specialized cancer treatment with
              diagnostic services, nursing care, community awareness
              programmes and support for patients and families.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-[var(--color-paper-alt)] p-4">
                <p className="text-2xl font-bold text-[var(--color-primary)]">
                  24/7
                </p>
                <p className="mt-1 text-xs text-[var(--color-ink-muted)]">
                  Medical Service
                </p>
              </div>

              <div className="rounded-lg bg-[var(--color-paper-alt)] p-4">
                <p className="text-2xl font-bold text-[var(--color-primary)]">
                  2001
                </p>
                <p className="mt-1 text-xs text-[var(--color-ink-muted)]">
                  Established
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          OUR COMMITMENT
      ================================================================= */}
      <section className="bg-[var(--color-paper-alt)] py-16 md:py-20">
        <div className="container-page">
          <SectionTitle
            title="Our Commitment"
            description="The hospital's work is focused on accessible, compassionate and specialized cancer care."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMMITMENTS.map(
              ({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex flex-col gap-3 rounded-xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent-light)] text-[var(--color-primary)]">
                    <Icon
                      size={20}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>

                  <h3 className="text-base font-semibold text-[var(--color-ink)]">
                    {title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                    {description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================================================================
          OUTPATIENT CONSULTATION
      ================================================================= */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="rounded-2xl border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-soft)] md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                  Outpatient Consultation
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[var(--color-ink)] md:text-3xl">
                  Mon - Sat: 10:00 AM - 5:00 PM
                </h2>

                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
                  Sunday Closed
                </p>
              </div>

              <a
                href="tel:+918612341714"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                <Phone size={18} />
                Call for Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          CONTACT
      ================================================================= */}
      <section
        id="contact"
        className="scroll-mt-24 bg-[var(--color-paper-alt)] py-16 md:py-20"
      >
        <div className="container-page">
          <SectionTitle
            title="Get in Touch"
            description="Contact IRCS Cancer Hospital for appointments and further information."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Address */}
            <div className="rounded-xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-accent-light)] text-[var(--color-primary)]">
                <MapPin size={21} />
              </span>

              <h3 className="mt-4 font-semibold text-[var(--color-ink)]">
                Hospital Address
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                Podalakur Road,
                <br />
                Nellore 524004,
                <br />
                Andhra Pradesh, India
              </p>
            </div>

            {/* Phone */}
            <div className="rounded-xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-accent-light)] text-[var(--color-primary)]">
                <Phone size={21} />
              </span>

              <h3 className="mt-4 font-semibold text-[var(--color-ink)]">
                Contact Numbers
              </h3>

              <div className="mt-2 flex flex-col gap-1 text-sm">
                <a
                  href="tel:+918612341714"
                  className="text-[var(--color-ink-muted)] hover:text-[var(--color-primary)]"
                >
                  +91 861 234 1714
                </a>

                <a
                  href="tel:+918612322365"
                  className="text-[var(--color-ink-muted)] hover:text-[var(--color-primary)]"
                >
                  +91 861 232 2365
                </a>

                <a
                  href="tel:+919392341714"
                  className="text-[var(--color-ink-muted)] hover:text-[var(--color-primary)]"
                >
                  +91 93923 41714
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-accent-light)] text-[var(--color-primary)]">
                <Mail size={21} />
              </span>

              <h3 className="mt-4 font-semibold text-[var(--color-ink)]">
                Email
              </h3>

              <a
                href="mailto:info@ircscancerhospital.org"
                className="mt-2 block break-all text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-primary)]"
              >
                info@ircscancerhospital.org
              </a>
            </div>
          </div>

          {/* Quick contact information */}
          <div className="mt-6 rounded-xl border border-[var(--color-line)] bg-white p-6">
            <div className="flex flex-col gap-4 text-sm text-[var(--color-ink-muted)] md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-2">
                <Clock3
                  size={18}
                  className="text-[var(--color-primary)]"
                />
                <span>
                  Outpatient Consultation: Mon - Sat, 10:00 AM - 5:00 PM
                </span>
              </div>

              <a
                href="https://ircscancerhospital.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--color-primary)] hover:underline"
              >
                Visit Official Website
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}