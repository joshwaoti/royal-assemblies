"use client";

import Image from "next/image";
import { useState } from "react";

export function BookCover({
  book,
  large = false
}: {
  book: { title: string; summary: string; cover: string; coverSource: string };
  large?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div>
      <div className={`book-cover relative overflow-hidden ${large ? "min-h-[420px]" : ""}`}>
        {!failed ? (
          <Image
            alt={`${book.title} book cover`}
            className="object-contain p-4"
            fill
            sizes={large ? "(max-width: 768px) 90vw, 30vw" : "260px"}
            src={book.cover}
            unoptimized
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full flex-col justify-between">
            <p className="font-cinzel text-[0.62rem] uppercase tracking-[0.16em] text-gold">Pastor Favour Adeola</p>
            <h3 className="font-cormorant text-3xl italic leading-none text-cream">{book.title}</h3>
            <p className="text-sm text-muted">{book.summary}</p>
          </div>
        )}
      </div>
      <div className="pt-4">
        <p className="m-0 font-cormorant text-2xl italic leading-tight text-cream">{book.title}</p>
        <p className="m-0 mt-2 font-cinzel text-[0.55rem] uppercase tracking-[0.12em] text-gold-lt">
          {book.coverSource}
        </p>
      </div>
    </div>
  );
}
