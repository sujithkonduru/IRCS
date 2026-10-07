interface CareLineProps {
  flip?: boolean;
  className?: string;
}

/**
 * A single recurring visual motif: two gently interwoven lines,
 * evoking a supportive, unhurried presence. Used sparingly.
 */
export default function CareLine({ flip = false, className = "" }: CareLineProps) {
  return (
    <svg
      viewBox="0 0 400 40"
      preserveAspectRatio="none"
      className={`h-8 w-full ${flip ? "-scale-y-100" : ""} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0 28 C 60 8, 120 8, 180 22 S 320 40, 400 14"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M0 18 C 70 34, 140 34, 200 16 S 340 -2, 400 24"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}
