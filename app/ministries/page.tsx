import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ministries, sectionImages } from "@/lib/data";

export default function MinistriesPage() {
  return (
    <>
      <PageHero
        copy="Each ministry arm carries the same vision: building lives by the creative word of God."
        eyebrow="The Five Pillars + Radio"
        imageId={sectionImages.ministriesHeader}
        title={<>Join a <em>Ministry</em></>}
      />
      <section className="section pt-0">
        <div className="container grid gap-5 lg:grid-cols-3">
          {ministries.map((ministry) => {
            const Icon = ministry.icon;
            return (
              <article className="royal-card p-7" id={ministry.id} key={ministry.id}>
                <div className="mb-8 flex items-center justify-between">
                  <Icon className="text-gold" size={34} />
                  <span className="font-cormorant text-5xl italic text-gold/40">{ministry.label}</span>
                </div>
                <h2 className="font-cormorant text-4xl italic text-cream">{ministry.name}</h2>
                <p className="lead text-base">{ministry.description}</p>
                <Link className="btn btn-ghost mt-5" href="/connect">Join This Arm</Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
