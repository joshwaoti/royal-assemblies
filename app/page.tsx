import Link from "next/link";
import { ArrowRight, Mail, Play } from "lucide-react";
import { featuredSermons, ministries, books, sectionImages } from "@/lib/data";
import { HeroBackground } from "@/components/hero-background";
import { SermonCard } from "@/components/sermon-card";
import { SocialEmbeds } from "@/components/social-embeds";
import { BookCover } from "@/components/book-cover";
import { Logo } from "@/components/logo";

const stats = [
  ["20+", "Years of Ministry"],
  ["6", "Ministry Arms"],
  ["3", "Weekly Services"],
  ["90.7", "Truth FM"]
];

export default function HomePage() {
  return (
    <>
      <section className="section relative min-h-[calc(100vh-80px)] overflow-hidden">
        <HeroBackground alt="Royal Assembly worship team ministering" imageId={sectionImages.homeHero} opacity={0.28} />
        <span className="light-beam left-[14%]" />
        <span className="light-beam right-[18%] opacity-80" />
        <div className="container grid min-h-[calc(100vh-220px)] items-center gap-12 py-12 lg:grid-cols-[1.1fr_0.8fr]">
          <div>
            <p className="eyebrow">Royal Assembly Church · Nairobi, Kenya</p>
            <h1 className="display mt-6">Where Lives Are <em>Built</em>.</h1>
            <div className="rule my-8 max-w-xl" />
            <p className="lead max-w-2xl">
              Christ Foundation Ministries International is a word-based ministry building lives by the creative word of God.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link className="btn btn-primary" href="/sermons">
                <Play size={17} /> Join Live Service
              </Link>
              <Link className="btn btn-ghost" href="/sermons">
                Watch Sermons <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <div className="royal-card logo-backdrop p-8">
            <div className="mx-auto w-fit scale-125">
              <Logo compact />
            </div>
            <p className="mt-8 text-center font-cormorant text-3xl italic text-gold-lt">
              A royal assembly of believers who reign in life through God&apos;s word.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-navy py-6">
        <div className="container flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <span className="h-3 w-3 animate-pulse rounded-full bg-red-600" />
            <div>
              <p className="eyebrow m-0">Live Now / Next Service</p>
              <p className="m-0 text-xl text-cream">Sunday Service · 9:00 AM EAT · YouTube LIVE</p>
            </div>
          </div>
          <Link className="btn btn-primary" href="/sermons">Watch Live</Link>
        </div>
      </section>

      <section className="bg-[var(--navy)] py-10">
        <div className="container grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div className="royal-card p-6 text-center" key={label}>
              <p className="m-0 font-cormorant text-5xl italic text-gold-lt">{value}</p>
              <p className="m-0 font-cinzel text-[0.62rem] uppercase tracking-[0.16em] text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Featured Sermons</p>
              <h2 className="section-title">The Word That <em>Builds</em></h2>
            </div>
            <Link className="btn btn-ghost" href="/sermons">View All Sermons</Link>
          </div>
          <div className="grid-auto">
            {featuredSermons.map((sermon) => (
              <SermonCard featured key={sermon.videoId} sermon={sermon} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--deep)]">
        <div className="container">
          <p className="eyebrow">Our Ministries</p>
          <h2 className="section-title max-w-3xl">Six arms. One <em>creative word.</em></h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {ministries.map((ministry) => {
              const Icon = ministry.icon;
              return (
                <Link className="royal-card group p-6 no-underline hover:border-gold" href={`/ministries#${ministry.id}`} key={ministry.id}>
                  <div className="mb-8 flex items-center justify-between">
                    <Icon className="text-gold" size={28} />
                    <span className="font-cormorant text-4xl italic text-gold/40">{ministry.label}</span>
                  </div>
                  <h3 className="m-0 font-cormorant text-3xl italic text-cream">{ministry.name}</h3>
                  <p className="text-muted">{ministry.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section overflow-hidden">
        <HeroBackground alt="" imageId={sectionImages.homeTestimonials} opacity={0.11} />
        <div className="container max-w-4xl text-center">
          <p className="eyebrow">Testimonies</p>
          <blockquote className="font-cormorant text-[clamp(2.2rem,6vw,5rem)] italic leading-none text-cream">
            The word of God is not only heard here. It builds people, families, businesses, and purpose.
          </blockquote>
          <div className="mx-auto mt-8 flex w-fit gap-2">
            <span className="h-2 w-8 rounded bg-gold" />
            <span className="h-2 w-2 rounded bg-muted" />
            <span className="h-2 w-2 rounded bg-muted" />
          </div>
        </div>
      </section>

      <section className="section bg-[var(--black)]">
        <div className="container">
          <div className="mb-10">
            <p className="eyebrow">Socials</p>
            <h2 className="section-title">Follow the <em>Assembly</em></h2>
          </div>
          <SocialEmbeds />
        </div>
      </section>

      <section className="section bg-gradient-to-b from-[var(--black)] to-[var(--deep)]">
        <div className="container">
          <p className="eyebrow">Pastor Favour&apos;s Books</p>
          <h2 className="section-title">The Bookshelf</h2>
          <div className="mt-10 flex gap-5 overflow-x-auto pb-4">
            {books.map((book) => (
              <a className="w-[260px] shrink-0 no-underline" href={book.url} key={book.url}>
                <BookCover book={book} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container royal-card grid gap-6 p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Newsletter</p>
            <h2 className="section-title">Receive the Word <em>Directly</em></h2>
          </div>
          <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input className="min-h-12 rounded border border-[var(--line)] bg-transparent px-4 text-cream" id="newsletter-email" placeholder="you@example.com" type="email" />
            <button className="btn btn-primary" type="button"><Mail size={17} /> Join the Assembly</button>
          </form>
        </div>
      </section>
    </>
  );
}
