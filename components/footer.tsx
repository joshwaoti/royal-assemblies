import Link from "next/link";
import { identity, routes, serviceSchedule, socials } from "@/lib/data";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--black)] py-14">
      <div className="container grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Logo />
          </div>
          <p className="lead max-w-sm text-base">{identity.vision}</p>
          <p className="mt-8 font-cinzel text-[0.64rem] uppercase tracking-[0.18em] text-muted">
            © 2025 Royal Assembly Church / CFMI. All rights reserved.
          </p>
        </div>
        <div>
          <h2 className="eyebrow">Routes</h2>
          <div className="mt-5 grid gap-3">
            {routes.map((route) => (
              <Link className="text-muted no-underline hover:text-gold" href={route.href} key={route.href}>
                {route.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="eyebrow">Services</h2>
          <div className="mt-5 grid gap-3">
            {serviceSchedule.slice(0, 3).map((service) => (
              <p className="m-0 text-muted" key={service.name}>
                <span className="text-cream">{service.name}</span>
                <br />
                {service.time}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="eyebrow">Follow</h2>
          <div className="mt-5 grid gap-3">
            {socials.slice(0, 4).map((social) => (
              <a className="text-muted no-underline hover:text-gold" href={social.url} key={social.url}>
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
