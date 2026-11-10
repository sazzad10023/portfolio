import { profile } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { SocialLinks } from "./social-links";
import {
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsappIcon,
} from "./icons";

const contactCards = [
  {
    icon: MailIcon,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    value: profile.phone,
    href: `https://wa.me/${profile.whatsapp}`,
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: profile.location,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-black py-20 text-white sm:py-24"
    >
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="bg-grid-dark pointer-events-none absolute inset-0 -z-10 opacity-25" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something great together."
              description="Have a project in mind, a role to fill, or just want to say hello? My inbox is always open."
            />

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <MailIcon className="h-4 w-4" />
                Email me
              </a>
              <a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[13px] font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <WhatsappIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-xs font-medium text-slate-500">
                Or find me here
              </span>
              <span className="h-px w-6 bg-white/15" />
              <SocialLinks />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-sky-300 ring-1 ring-white/10 transition group-hover:bg-white/10">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="mt-4 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {card.label}
                  </span>
                  <span className="mt-1 block break-words text-[13px] font-semibold text-slate-100">
                    {card.value}
                  </span>
                </>
              );

              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("https://") ? "_blank" : undefined}
                  rel={
                    card.href.startsWith("https://")
                      ? "noreferrer noopener"
                      : undefined
                  }
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={card.label}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
