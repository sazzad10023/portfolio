import { education, profile } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import {
  CodeIcon,
  GraduationCapIcon,
  MailIcon,
  MapPinIcon,
  SparklesIcon,
} from "./icons";

const facts = [
  {
    icon: MapPinIcon,
    label: "Based in",
    value: profile.location,
  },
  {
    icon: MailIcon,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: CodeIcon,
    label: "Focus",
    value: "React, Next.js & TypeScript",
  },
  {
    icon: SparklesIcon,
    label: "Outside code",
    value: "Football, photography & travel",
  },
];

export function About() {
  const degree = education.find((item) => item.degree.startsWith("B.Sc."));

  return (
    <section
      id="about"
      className="border-y border-white/5 bg-black py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="About me"
              title="A developer who cares about the details."
              description="I enjoy the space where clean design, solid engineering, and real people meet."
            />

            <div className="mt-7 space-y-4 text-[15px] leading-7 text-slate-400 sm:text-base sm:leading-8">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="mt-7 border-l-2 border-indigo-400 pl-5 text-[15px] font-medium leading-7 text-slate-200">
              &ldquo;I learn best by building. Every project is a chance to
              understand the problem a little more clearly and leave the next
              version simpler than the last.&rdquo;
            </blockquote>

            <div className="mt-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                A few things I enjoy
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {profile.interests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-2">
              {facts.map((fact) => {
                const Icon = fact.icon;

                return (
                  <div
                    key={fact.label}
                    className="group flex items-center gap-3 rounded-2xl px-3.5 py-3 transition hover:bg-white/5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-slate-400 transition group-hover:bg-indigo-500/10 group-hover:text-indigo-300">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {fact.label}
                      </p>
                      {fact.href ? (
                        <a
                          href={fact.href}
                          className="mt-0.5 block break-all text-sm font-semibold text-slate-100 transition hover:text-indigo-300"
                        >
                          {fact.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-semibold text-slate-100">
                          {fact.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 p-6 text-white">
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
              <div className="flex items-start justify-between gap-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                  Education
                </p>
                <GraduationCapIcon className="h-4 w-4 text-white/60" />
              </div>
              <p className="mt-3 text-base font-semibold leading-6 tracking-tight">
                B.Sc. in Computer Science & Engineering
              </p>
              <p className="mt-1.5 text-xs leading-5 text-white/70">
                {profile.university}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white/80">
                <span className="h-1 w-1 rounded-full bg-emerald-300" />
                {degree?.period ?? "2023 — Present"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
