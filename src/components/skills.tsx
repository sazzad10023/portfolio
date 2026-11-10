import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { CheckCircleIcon, skillGroupIcons, techIcons } from "./icons";

const exploring = [
  "React Server Components",
  "Advanced TypeScript",
  "System design",
  "Testing with Vitest",
];

const groupStyles = {
  code: {
    icon: "text-sky-300",
    iconSurface: "border-sky-400/20 bg-sky-400/10",
    line: "from-sky-400/80 via-cyan-400/40 to-transparent",
    tile: "hover:border-sky-400/25 hover:bg-sky-400/[0.055]",
    bar: "from-sky-400 to-cyan-300",
  },
  server: {
    icon: "text-emerald-300",
    iconSurface: "border-emerald-400/20 bg-emerald-400/10",
    line: "from-emerald-400/80 via-teal-400/40 to-transparent",
    tile: "hover:border-emerald-400/25 hover:bg-emerald-400/[0.055]",
    bar: "from-emerald-400 to-teal-300",
  },
  tools: {
    icon: "text-amber-300",
    iconSurface: "border-amber-400/20 bg-amber-400/10",
    line: "from-amber-400/80 via-orange-400/40 to-transparent",
    tile: "hover:border-amber-400/25 hover:bg-amber-400/[0.055]",
    bar: "from-amber-400 to-orange-300",
  },
} as const;

export function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden border-b border-white/5 bg-black py-20 text-white sm:py-24"
    >
      <div className="bg-grid-dark pointer-events-none absolute inset-0 -z-10 opacity-40" />
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Skills"
            title="Tools I reach for when building."
            description="A practical toolkit built through real projects, not just tutorials. I choose the simplest tool that makes the product better."
          />
          <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium text-slate-300">
            <CheckCircleIcon className="h-3.5 w-3.5 text-emerald-400" />
            Always learning, always shipping
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const GroupIcon = skillGroupIcons[group.icon];
            const styles = groupStyles[group.icon];

            return (
              <div
                key={group.title}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-white/20 hover:bg-white/[0.045]"
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${styles.line}`}
                />

                <div className="flex items-start gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${styles.iconSurface} ${styles.icon}`}
                  >
                    <GroupIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold tracking-tight">
                        {group.title}
                      </h3>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[9px] font-semibold text-slate-500">
                        {group.skills.length}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[11px] leading-5 text-slate-500">
                      {group.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 grid grid-cols-2 gap-2 border-t border-white/5 pt-4">
                  {group.skills.map((skill) => {
                    const SkillIcon = techIcons[skill.icon];

                    return (
                      <li
                        key={skill.name}
                        title={skill.name}
                        className={`group/skill relative flex items-center gap-2.5 overflow-hidden rounded-xl border border-white/5 bg-white/[0.025] px-2.5 py-2.5 pb-3 transition ${styles.tile}`}
                      >
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/5 transition group-hover/skill:scale-105 ${styles.icon}`}
                        >
                          <SkillIcon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-[11px] font-medium text-slate-200">
                            {skill.name}
                          </p>
                          <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-500">
                            {skill.label}
                          </p>
                        </div>
                        <span className="absolute inset-x-2.5 bottom-1 h-0.5 overflow-hidden rounded-full bg-white/10">
                          <span
                            className={`block h-full rounded-full bg-gradient-to-r ${styles.bar}`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            Currently exploring
          </span>
          <ul className="flex flex-wrap gap-1.5">
            {exploring.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
