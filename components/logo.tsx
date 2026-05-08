import Image from "next/image";
import Link from "next/link";
import { localImages } from "@/lib/data";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="flex items-center gap-3 no-underline" href="/" aria-label="Royal Assembly Church home">
      <Image
        alt="Royal Assembly Church logo"
        className="rounded-full border border-gold/50 object-cover"
        height={compact ? 48 : 64}
        priority
        src={localImages.logo}
        width={compact ? 48 : 64}
      />
      {!compact ? (
        <span className="leading-none">
          <span className="block font-cinzel text-xs uppercase tracking-[0.3em] text-cream">Royal</span>
          <span className="block font-cormorant text-lg italic text-gold-lt">Assembly</span>
        </span>
      ) : null}
    </Link>
  );
}
