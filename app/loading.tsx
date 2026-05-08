import Image from "next/image";
import { localImages } from "@/lib/data";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[var(--black)]" aria-label="Loading Royal Assembly page">
      <div className="text-center">
        <Image
          alt="Royal Assembly Church logo"
          className="mx-auto animate-spin rounded-full border border-gold/50"
          height={86}
          src={localImages.logo}
          width={86}
        />
        <p className="mt-5 font-cinzel text-[0.65rem] uppercase tracking-[0.2em] text-gold">Loading Royal Assembly</p>
      </div>
    </div>
  );
}
