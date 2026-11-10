import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/portfolio";
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  GithubIcon,
} from "./icons";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title} details`}
        className="relative block aspect-[16/10] overflow-hidden bg-slate-900"
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1200}
          height={800}
          unoptimized
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm backdrop-blur">
          {project.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-base font-semibold tracking-tight text-white transition group-hover:text-indigo-300">
              {project.title}
            </h3>
          </Link>
          <span className="mt-0.5 shrink-0 font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            {project.year}
          </span>
        </div>

        <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-slate-400">
          {project.tagline}
        </p>

        <ul className="mt-3.5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-400"
            >
              {tech}
            </li>
          ))}
          {project.tech.length > 3 ? (
            <li className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-500">
              +{project.tech.length - 3}
            </li>
          ) : null}
        </ul>

        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 transition group-hover:gap-2.5 hover:text-indigo-300"
          >
            View details
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>

          <div className="flex items-center gap-1">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} on GitHub`}
                className="flex h-7 w-7 items-center justify-center rounded-full text-slate-500 transition hover:bg-white/5 hover:text-white"
              >
                <GithubIcon className="h-3.5 w-3.5" />
              </a>
            ) : null}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} live site`}
                className="flex h-7 w-7 items-center justify-center rounded-full text-slate-500 transition hover:bg-indigo-500/10 hover:text-indigo-300"
              >
                <ExternalLinkIcon className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
