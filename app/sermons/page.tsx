import { PageHero } from "@/components/page-hero";
import { SermonFilterGrid } from "@/components/sermon-filter-grid";
import { identity, sectionImages, sermons } from "@/lib/data";

export default function SermonsPage() {
  const latest = sermons[0];

  return (
    <>
      <PageHero
        copy="Every sermon is a building block. Find yours through the verified Royal Assembly sermon archive."
        eyebrow="The Word Archive"
        imageId={sectionImages.sermonsHeader}
        title={<>Watch / <em>Discover</em></>}
      />
      <section className="section pt-0">
        <div className="container">
          <div className="royal-card mb-10 overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
              <iframe
                allowFullScreen
                className="aspect-video h-full w-full"
                src={`https://www.youtube.com/embed/${latest.videoId}`}
                title="Latest Royal Assembly sermon"
              />
              <div className="p-8">
                <p className="eyebrow">Static UI Live Fallback</p>
                <h2 className="font-cormorant text-4xl italic text-cream">{latest.title}</h2>
                <p className="lead text-base">
                  Frontend-only build: live detection is represented as a polished latest-sermon state without backend API polling.
                </p>
                <div className="g-ytsubscribe mt-6 rounded border border-[var(--line)] p-4" data-channelid={identity.youtubeChannelId} data-count="default" data-layout="default">
                  Subscribe at youtube.com/@RoyalAssemblyChurch
                </div>
              </div>
            </div>
          </div>
          <SermonFilterGrid />
        </div>
      </section>
    </>
  );
}
