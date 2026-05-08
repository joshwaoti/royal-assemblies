import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { sectionImages, upcomingEvents } from "@/lib/data";

export default function EventsPage() {
  return (
    <>
      <PageHero
        copy="The Royal Calendar: services, radio, conferences, and recurring gatherings in the Royal Assembly rhythm."
        eyebrow="Events"
        imageId={sectionImages.eventsHero}
        title={<>Attend / <em>RSVP</em></>}
      />
      <section className="section pt-0">
        <div className="container grid gap-5">
          {upcomingEvents.map((event) => {
            const Icon = event.icon;
            return (
              <article className="royal-card grid gap-5 p-6 md:grid-cols-[auto_1fr_auto] md:items-center" key={event.title}>
                <Icon className="text-gold" size={34} />
                <div>
                  <p className="eyebrow m-0">{event.date}</p>
                  <h2 className="m-0 font-cormorant text-4xl italic text-cream">{event.title}</h2>
                  <p className="m-0 text-muted">{event.time}</p>
                </div>
                <Link className="btn btn-ghost" href={event.title.includes("Radio") ? "/connect" : "/sermons"}>
                  {event.action}
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
