import { socials } from "@/lib/data";

export function SocialEmbeds() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="royal-card min-h-[420px] p-6">
        <p className="eyebrow">Live Facebook Page</p>
        <div
          className="fb-page mt-5 overflow-hidden rounded border border-[var(--line)] bg-black/20 p-5"
          data-href="https://www.facebook.com/royalassemblycfmi/"
          data-tabs="timeline"
          data-width="500"
          data-height="430"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <a className="text-gold" href="https://www.facebook.com/royalassemblycfmi/">
            facebook.com/royalassemblycfmi
          </a>
        </div>
        <p className="mt-5 text-muted">
          A place where believers reign and rule in the affairs of life via teachings of pure and true word.
        </p>
      </div>
      <div className="royal-card min-h-[420px] p-6">
        <p className="eyebrow">Live Instagram Account</p>
        <blockquote
          className="instagram-media mt-5 !min-w-0 !w-full rounded border border-[var(--line)] bg-white p-4"
          data-instgrm-permalink="https://www.instagram.com/royal_assembly_church/"
          data-instgrm-version="14"
        >
          <a className="text-gold" href="https://www.instagram.com/royal_assembly_church/">
            View @royal_assembly_church on Instagram
          </a>
        </blockquote>
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
