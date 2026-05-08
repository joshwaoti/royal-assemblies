import { PageHero } from "@/components/page-hero";
import { identity, ministries, sectionImages } from "@/lib/data";
import Image from "next/image";

const timeline = [
  ["Over two decades", "Pastor Adesina Adeola spreads the Gospel across African countries with the message of Faith and Righteousness."],
  ["Royal Assembly", "Christ Foundation Ministries International becomes known publicly as Royal Assembly Church."],
  ["Word Foundation Bible Institute", "WFBI equips believers with structured Christian Bible courses for spiritual growth."],
  ["2025", "Six active ministry arms, weekly services, online streaming, Youth Alive, and 90.7 Truth FM."]
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        copy="The Foundation Stone: a Nairobi-rooted, globally connected ministry built around the creative word of God."
        eyebrow="About Royal Assembly"
        title={<>The Foundation <em>Story</em></>}
      />
      <section className="section pt-0">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="royal-card relative min-h-[460px] overflow-hidden">
            <Image
              alt="Pastor Favour Adeola ministering at Royal Assembly"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              src={sectionImages.aboutHero}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 m-0 text-muted">
              Official Pastor Favour image from pastorfavouradeola.com.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="royal-card p-7">
              <p className="eyebrow">Pastor Adesina Adeola</p>
              <h2 className="m-0 font-cormorant text-4xl italic text-cream">Founder & President</h2>
              <p className="lead text-base">
                Founder and President of Christ Foundation Ministries International, sent to build lives by the Creative Word of God.
              </p>
            </div>
            <div className="royal-card p-7">
              <p className="eyebrow">Pastor Favour Adeola</p>
              <h2 className="m-0 font-cormorant text-4xl italic text-cream">Co-founder & Associate Pastor</h2>
              <p className="lead text-base">
                Word-based life coach, lecturer at WFBI, author of six books, and host of Authentic Relationships Conferences.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section overflow-hidden bg-[var(--deep)]">
        <PageBackground imageId={sectionImages.aboutTimeline} />
        <div className="container">
          <p className="eyebrow">Timeline</p>
          <h2 className="section-title">Built by the <em>Word</em></h2>
          <div className="mt-10 grid gap-4">
            {timeline.map(([year, text]) => (
              <div className="royal-card grid gap-5 p-6 md:grid-cols-[220px_1fr]" key={year}>
                <p className="m-0 font-cinzel text-xs uppercase tracking-[0.16em] text-gold">{year}</p>
                <p className="m-0 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Ministry Arms</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {ministries.map((ministry) => (
              <div className="royal-card p-6" key={ministry.id}>
                <h3 className="font-cormorant text-3xl italic text-cream">{ministry.name}</h3>
                <p className="text-muted">{ministry.description}</p>
              </div>
            ))}
          </div>
          <p className="lead mt-10 max-w-3xl">{identity.vision}</p>
        </div>
      </section>
    </>
  );
}

function PageBackground({ imageId }: { imageId: string }) {
  return <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-[0.1]" style={{ backgroundImage: `url(${imageId})` }} />;
}
