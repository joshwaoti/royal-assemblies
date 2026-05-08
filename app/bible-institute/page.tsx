import Link from "next/link";
import { BookOpen } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { sectionImages } from "@/lib/data";

export default function BibleInstitutePage() {
  return (
    <>
      <PageHero
        copy="The School of the Word: the Bible School arm of Royal Assembly, equipping believers with Christian Bible courses for spiritual growth."
        eyebrow="Word Foundation Bible Institute"
        imageId={sectionImages.bibleInstitute}
        title={<>The School of the <em>Word</em></>}
      />
      <section className="section pt-0">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="royal-card grid place-items-center p-10 text-center">
            <BookOpen className="mb-6 text-gold" size={54} />
            <h2 className="font-cormorant text-5xl italic text-cream">WFBI</h2>
            <p className="text-muted">Pastor Favour Adeola serves as lecturer.</p>
          </div>
          <div className="royal-card p-8">
            <p className="eyebrow">Academic Gravitas · Faith Warmth</p>
            <h2 className="section-title">Built for <em>Spiritual Growth</em></h2>
            <p className="lead">
              WFBI exists to equip believers through structured Christian Bible courses, keeping the word of God at the centre of spiritual formation.
            </p>
            <Link className="btn btn-primary mt-6" href="/connect">Register Interest</Link>
          </div>
        </div>
      </section>
    </>
  );
}
