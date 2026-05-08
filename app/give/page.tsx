import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { givingOptions, sectionImages } from "@/lib/data";

export default function GivePage() {
  return (
    <>
      <PageHero
        copy="The Covenant Partnership: a trust-building, scripture-anchored generosity invitation for the work of the ministry."
        eyebrow="Give & Partner"
        imageId={sectionImages.giveHeader}
        title={<>Give & Build <em>Together</em></>}
      />
      <section className="section pt-0">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="royal-card p-7">
            <p className="eyebrow">M-Pesa Giving</p>
            <h2 className="font-cormorant text-4xl italic text-cream">Awaiting Verified Paybill</h2>
            <p className="lead text-base">
              The PRD requires M-Pesa for the Kenyan audience, but no primary-source Paybill number was available in the provided documents. This UI reserves the correct place without inventing financial details.
            </p>
            <div className="mt-6 rounded border border-dashed border-gold/60 p-5">
              <p className="m-0 font-cinzel text-[0.65rem] uppercase tracking-[0.18em] text-muted">Account Name</p>
              <p className="m-0 font-cormorant text-3xl italic text-gold-lt">Royal Assembly Church / CFMI</p>
            </div>
          </aside>
          <div className="grid gap-5">
            {givingOptions.map((option) => (
              <article className="royal-card p-6" key={option.name}>
                <p className="eyebrow">{option.scripture}</p>
                <h2 className="m-0 font-cormorant text-4xl italic text-cream">{option.name}</h2>
                <p className="text-muted">{option.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-[var(--deep)]">
        <div className="container royal-card p-8 text-center">
          <p className="eyebrow">Partnership</p>
          <h2 className="section-title">Become a Royal <em>Covenant Partner</em></h2>
          <p className="lead mx-auto max-w-2xl">
            Support teaching, radio, conferences, Bible institute work, and the online congregation through recurring partnership.
          </p>
          <Link className="btn btn-primary mt-6" href="/connect">Connect for Giving Details</Link>
        </div>
      </section>
    </>
  );
}
