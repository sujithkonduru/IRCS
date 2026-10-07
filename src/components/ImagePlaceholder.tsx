import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspect?: string;
}

/**
 * Visible, honest placeholder for hospital-supplied imagery.
 * Replace with an <img> tag and a real, official photograph before publishing.
 */
export default function ImagePlaceholder({
  label,
  className = "",
  aspect = "aspect-[4/3]",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder for image: ${label}`}
      className={`placeholder-box ${aspect} w-full ${className}`}
    >
      <ImageIcon size={28} strokeWidth={1.5} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
