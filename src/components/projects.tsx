import { projects, socialLinks } from "@/data/portfolio";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";
import { ArrowUpRightIcon, GithubIcon } from "./icons";

const githubUrl =
  socialLinks.find((link) => link.icon === "github")?.href ??
  "https://github.com/sazzad10023";

export function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-white/5 bg-black py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects I've built and learned from."
            description="A mix of full-stack products, data experiments, and games. Each one started with a question and ended with something I could use."
          />
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-[13px] font-semibold text-slate-300 shadow-sm transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <GithubIcon className="h-4 w-4" />
            More on GitHub
            <ArrowUpRightIcon className="h-3.5 w-3.5 text-slate-400" />
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
