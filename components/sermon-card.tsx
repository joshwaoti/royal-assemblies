"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

export function SermonCard({
  sermon,
  featured = false
}: {
  sermon: { title: string; speaker: string; date: string; videoId: string };
  featured?: boolean;
}) {
  const [src, setSrc] = useState(`https://img.youtube.com/vi/${sermon.videoId}/maxresdefault.jpg`);

  return (
    <a
      className="royal-card group block overflow-hidden no-underline transition hover:-translate-y-1 hover:border-gold"
      href={`https://www.youtube.com/watch?v=${sermon.videoId}`}
      rel="noreferrer"
      target="_blank"
    >
      <div className="relative aspect-video overflow-hidden bg-navy">
        <Image
          alt={`${sermon.title} sermon thumbnail`}
          className="object-cover transition duration-500 group-hover:scale-105"
          fill
          unoptimized
          sizes="(max-width: 768px) 90vw, 33vw"
          src={src}
          onError={() => {
            setSrc((current) =>
              current.includes("maxresdefault")
                ? `https://img.youtube.com/vi/${sermon.videoId}/hqdefault.jpg`
                : "/images/sermon-fallback.svg"
            );
          }}
        />
        <span className="absolute inset-0 grid place-items-center bg-black/20 opacity-0 transition group-hover:opacity-100">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-gold text-black">
            <Play fill="currentColor" size={22} />
          </span>
        </span>
        {featured ? (
          <span className="absolute left-4 top-4 rounded bg-gold px-3 py-1 font-cinzel text-[0.58rem] uppercase tracking-[0.16em] text-black">
            Featured
          </span>
        ) : null}
      </div>
      <div className="p-5">
        <p className="m-0 font-cormorant text-2xl italic leading-tight text-cream">{sermon.title}</p>
        <p className="mt-3 font-cinzel text-[0.62rem] uppercase tracking-[0.16em] text-muted">
          {sermon.speaker} · {sermon.date}
        </p>
      </div>
    </a>
  );
}
