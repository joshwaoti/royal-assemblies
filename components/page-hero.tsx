import { HeroBackground } from "./hero-background";

export function PageHero({
  eyebrow,
  title,
  copy,
  imageId,
  cta
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  imageId?: string;
  cta?: React.ReactNode;
}) {
  return (
    <section className="section min-h-[58vh] overflow-hidden">
      {imageId ? <HeroBackground alt="" imageId={imageId} opacity={0.11} /> : null}
      <span className="light-beam left-[8%]" />
      <span className="light-beam right-[12%] opacity-70" />
      <div className="container max-w-5xl pt-10">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-5">{title}</h1>
        <div className="rule my-8 max-w-xl" />
        <p className="lead max-w-2xl">{copy}</p>
        {cta ? <div className="mt-8 flex flex-wrap gap-4">{cta}</div> : null}
      </div>
    </section>
  );
}
