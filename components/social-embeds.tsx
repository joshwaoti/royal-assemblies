import { socials } from "@/lib/data";

export function SocialEmbeds() {
  return (
    <div className="social-live-embeds grid gap-5 lg:grid-cols-2">
      <div className="royal-card min-h-[620px] p-6">
        <p className="eyebrow">Live Facebook Page</p>
        <iframe
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className="mt-5 h-[520px] w-full rounded border border-[var(--line)] bg-white"
          loading="lazy"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Froyalassemblycfmi%2F&tabs=timeline&width=500&height=520&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
          title="Royal Assembly Church live Facebook feed"
        />
        <p className="mt-5 text-muted">
          A place where believers reign and rule in the affairs of life via teachings of pure and true word.
        </p>
      </div>
      <div className="royal-card min-h-[620px] p-6">
        <p className="eyebrow">Live Instagram Account</p>
        <iframe
          className="mt-5 h-[520px] w-full rounded border border-[var(--line)] bg-white"
          loading="lazy"
          src="https://www.instagram.com/royal_assembly_church/embed"
          title="Royal Assembly Church live Instagram profile"
        />
        <div className="mt-5 flex flex-wrap gap-3">
          {socials.slice(2, 6).map((social) => (
            <a
              className="rounded border px-3 py-2 font-cinzel text-[0.58rem] uppercase tracking-[0.14em] no-underline"
              href={social.url}
              key={social.url}
              style={{ borderColor: social.color, color: social.color }}
            >
              {social.handle}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
