"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { routes } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./logo";
import Link from "next/link";

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--black)_88%,transparent)] backdrop-blur-xl">
      <nav className="container flex h-20 items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-7 lg:flex">
          {routes.slice(1, 7).map((route) => (
            <Link
              className="font-cinzel text-[0.68rem] uppercase tracking-[0.18em] text-muted no-underline transition hover:text-gold"
              href={route.href}
              key={route.href}
            >
              {route.label}
            </Link>
          ))}
          <Link className="btn btn-primary min-h-11 px-4 py-2" href="/give">
            Give
          </Link>
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            aria-expanded={open}
            aria-label="Open navigation menu"
            className="grid h-11 w-11 place-items-center rounded border border-[var(--line)] text-gold"
            type="button"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="border-t border-[var(--line)] bg-[var(--black)] lg:hidden">
          <div className="container grid gap-2 py-6">
            {routes.map((route) => (
              <Link
                className="rounded border border-[var(--line)] px-4 py-4 font-cinzel text-xs uppercase tracking-[0.18em] text-cream no-underline"
                href={route.href}
                key={route.href}
                onClick={() => setOpen(false)}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
