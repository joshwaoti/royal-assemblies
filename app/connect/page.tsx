import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SocialEmbeds } from "@/components/social-embeds";
import { identity, imageAssignments, serviceSchedule, socials } from "@/lib/data";

export default function ConnectPage() {
  return (
    <>
      <PageHero
        copy="Enter the Assembly: visit, follow, contact, and stay connected to the ministry rhythm."
        eyebrow="Connect"
        imageId={imageAssignments.connectHeader}
        title={<>Enter the <em>Assembly</em></>}
      />
      <section className="section pt-0">
        <div className="container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-5">
            <div className="royal-card p-6">
              <MapPin className="mb-4 text-gold" />
              <h2 className="font-cormorant text-4xl italic text-cream">Nairobi, Kenya</h2>
              <p className="text-muted">Physical services are held in Nairobi with an active online congregation across Africa.</p>
            </div>
            <div className="royal-card p-6">
              <Phone className="mb-4 text-gold" />
              <h2 className="font-cormorant text-4xl italic text-cream">{identity.phone}</h2>
              <p className="text-muted">Verified from the official Pastor Favour contact section.</p>
            </div>
            <div className="royal-card p-6">
              <Mail className="mb-4 text-gold" />
              <h2 className="font-cormorant text-4xl italic text-cream">{identity.pastorFavourEmail}</h2>
              <p className="text-muted">For testimonies, appointments, and ministry contact.</p>
            </div>
          </div>
          <form className="royal-card grid gap-4 p-7">
            <p className="eyebrow">Contact Form UI</p>
            <label className="grid gap-2 text-muted">
              Name
              <input className="min-h-12 rounded border border-[var(--line)] bg-transparent px-4 text-cream" type="text" />
            </label>
            <label className="grid gap-2 text-muted">
              Email
              <input className="min-h-12 rounded border border-[var(--line)] bg-transparent px-4 text-cream" type="email" />
            </label>
            <label className="grid gap-2 text-muted">
              Message
              <textarea className="min-h-36 rounded border border-[var(--line)] bg-transparent p-4 text-cream" />
            </label>
            <button className="btn btn-primary" type="button">Send Message</button>
          </form>
        </div>
      </section>
      <section className="section bg-[var(--deep)]">
        <div className="container">
          <p className="eyebrow">Service Schedule</p>
          <div className="mt-6 grid-auto">
            {serviceSchedule.map((service) => (
              <div className="royal-card p-5" key={service.name}>
                <h2 className="font-cormorant text-3xl italic text-cream">{service.name}</h2>
                <p className="text-muted">{service.time} · {service.mode}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Social Constellation</p>
          <div className="mt-8 grid-auto">
            {socials.map((social) => (
              <a className="royal-card p-5 no-underline hover:border-gold" href={social.url} key={social.url}>
                <p className="m-0 font-cinzel text-[0.62rem] uppercase tracking-[0.16em]" style={{ color: social.color }}>{social.platform}</p>
                <h2 className="font-cormorant text-3xl italic text-cream">{social.handle}</h2>
                <p className="text-muted">{social.followers}</p>
              </a>
            ))}
          </div>
          <div className="mt-10">
            <SocialEmbeds />
          </div>
        </div>
      </section>
    </>
  );
}
