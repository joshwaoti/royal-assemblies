"use client";

import { useMemo, useState } from "react";
import { sermonFilters, sermons, type SermonCategory } from "@/lib/data";
import { SermonCard } from "./sermon-card";

export function SermonFilterGrid() {
  const [filter, setFilter] = useState<SermonCategory>("ALL");
  const visible = useMemo(
    () => sermons.filter((sermon) => filter === "ALL" || sermon.category === filter),
    [filter]
  );

  return (
    <div>
      <div className="relative z-10 mb-8 flex gap-3 overflow-x-auto pb-2" role="tablist" aria-label="Sermon filters">
        {sermonFilters.map((item) => (
          <button
            className={`min-h-12 shrink-0 rounded border px-4 font-cinzel text-[0.62rem] uppercase tracking-[0.16em] transition ${
              filter === item.value
                ? "border-gold bg-gold text-black"
                : "border-[var(--line)] text-muted hover:border-gold hover:text-gold"
            }`}
            key={item.value}
            role="tab"
            type="button"
            aria-selected={filter === item.value}
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="grid-auto">
        {visible.map((sermon) => (
          <SermonCard key={sermon.videoId} sermon={sermon} />
        ))}
      </div>
    </div>
  );
}
