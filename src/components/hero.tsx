import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/portfolio";
import {
  ArrowRightIcon,
  MapPinIcon,
  SparklesIcon,
} from "./icons";
import { ResumeButton } from "./resume-button";
import { SocialLinks } from "./social-links";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      <div className="bg-dots pointer-events-none absolute inset-0 -z-20" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-gradient-to-b from-indigo-500/10 via-sky-500/[0.03] to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:px-8">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-slate-300 shadow-sm backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </div>

          <h1 className="mt-6 text-balance text-[clamp(2.6rem,5.4vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
            {profile.name.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-gradient">
              {profile.name.split(" ").slice(-1)}
            </span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-base font-medium text-slate-100 sm:text-lg">
            <span>{profile.designation}</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />
            <span className="text-slate-500">{profile.focus}</span>
          </div>

          <p className="mt-5 max-w-lg text-[15px] leading-7 text-slate-400 sm:text-base sm:leading-8">
            {profile.intro}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              View my work
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <ResumeButton />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-xs font-medium text-slate-500">
              Find me on
            </span>
            <span className="h-px w-6 bg-white/15" />
            <SocialLinks />
          </div>

          <dl className="mt-9 grid max-w-md grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-5">
            {[
              { value: "6+", label: "Projects" },
              { value: "Full-stack", label: "Frontend to API" },
              { value: "Remote", label: "Friendly" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={index === 0 ? "pr-4" : "px-4 last:pr-0"}
              >
                <dt className="text-base font-semibold tracking-tight text-white">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-[11px] font-medium text-slate-500">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-up relative mx-auto w-full max-w-[25rem] [animation-delay:100ms] lg:max-w-[26rem]">
          <div className="absolute -inset-4 rounded-[2.75rem] bg-gradient-to-tr from-indigo-500/15 via-sky-400/10 to-transparent blur-2xl" />

          <div className="relative rounded-[2.25rem] border border-white/10 bg-white/5 p-2.5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-slate-900">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 70vw, 88vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
{/* 
              <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/15 bg-slate-950/50 p-4 text-white backdrop-blur-md">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                      Currently building
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      Next.js 16 · Tailwind CSS 4
                    </p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                    <SparklesIcon className="h-4 w-4" />
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-1.5 border-t border-white/10 pt-3 text-[11px] text-white/65">
                  <MapPinIcon className="h-3.5 w-3.5" />
                  {profile.location}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
