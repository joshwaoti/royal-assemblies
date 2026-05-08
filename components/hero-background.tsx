import { unsplash } from "@/lib/data";

export function HeroBackground({
  imageId,
  alt,
  opacity = 0.12
}: {
  imageId: string;
  alt: string;
  opacity?: number;
}) {
  return (
    <div
      aria-label={alt || undefined}
      className="hero-bg"
      role={alt ? "img" : undefined}
      style={
        {
          "--image-opacity": opacity,
          backgroundImage: `linear-gradient(90deg, color-mix(in srgb, var(--black) 92%, transparent), color-mix(in srgb, var(--deep) 82%, transparent)), url(${unsplash(imageId)})`
        } as React.CSSProperties
      }
    />
  );
}
