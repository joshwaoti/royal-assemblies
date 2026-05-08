"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isLight = mounted && resolvedTheme === "light";

  return (
    <button
      aria-label="Toggle dark and light theme"
      className="grid h-11 w-11 place-items-center rounded border border-[var(--line)] text-gold transition hover:border-gold"
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
