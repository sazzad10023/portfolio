import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/portfolio";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  CheckCircleIcon,
  ExternalLinkIcon,
  GithubIcon,
  LayersIcon,
  SparklesIcon,
} from "@/components/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="bg-black pb-20 pt-24 sm:pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-white"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to projects
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-300">
                {project.category}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                {project.year}
              </span>
            </div>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-[3.5rem]">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {project.tagline}
            </p>

            <ul className="mt-6 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <ExternalLinkIcon className="h-4 w-4" />
                  View live project
                </a>
              ) : (
                <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[13px] font-semibold text-slate-400">
                  <LayersIcon className="h-4 w-4" />
                  Case study
                </span>
              )}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[13px] font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <GithubIcon className="h-4 w-4" />
                  View code
                </a>
              ) : null}
            </div>
          </div>

          <div
            className={`relative rounded-3xl bg-gradient-to-br ${project.gradient} p-2 shadow-2xl shadow-black/60`}
          >
            <div className="overflow-hidden rounded-[1.25rem] bg-black">
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={1200}
                height={800}
                unoptimized
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
          <div>
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Overview
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-7 text-slate-400">
                {project.description.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                What I built
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-[13px] leading-6 text-slate-400"
                  >
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Challenges
              </h2>
              <div className="mt-4 space-y-3">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={challenge}
                    className="flex gap-4 rounded-2xl border border-amber-400/15 bg-amber-400/[0.06] p-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400/10 font-mono text-xs font-bold text-amber-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-6 text-slate-300">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                What&apos;s next
              </h2>
              <ul className="mt-4 space-y-3">
                {project.improvements.map((improvement) => (
                  <li
                    key={improvement}
                    className="flex gap-3 text-sm leading-6 text-slate-400"
                  >
                    <SparklesIcon className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                    {improvement}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Project details
              </p>

              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="text-xs font-medium text-slate-500">Role</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-100">
                    {project.role}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-slate-500">
                    Timeline
                  </dt>
                  <dd className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-100">
                    <CalendarIcon className="h-4 w-4 text-slate-500" />
                    {project.timeline}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-slate-500">Stack</dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Links
                </p>
                <div className="mt-2 space-y-1">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-indigo-300"
                    >
                      Live site
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-indigo-300"
                    >
                      Source code
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  ) : null}
                  <Link
                    href="/#contact"
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-indigo-300"
                  >
                    Discuss this project
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Next project
              </p>
              <p className="mt-1 text-lg font-semibold tracking-tight text-white">
                {nextProject.title}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {nextProject.tagline}
              </p>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-950 transition group-hover:bg-indigo-500 group-hover:text-white">
              <ArrowRightIcon className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
