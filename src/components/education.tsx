import { education, profile } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { CalendarIcon, GraduationCapIcon } from "./icons";

const coursework = [
  "Data Structures",
  "Algorithms",
  "Databases",
  "Software Engineering",
  "Data Mining",
  "Web Technologies",
];

export function Education() {
  return (
    <section id="education" className="bg-black py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="A foundation built on fundamentals."
          description="My academic path gave me the computer-science grounding that sits underneath the products I build today."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300">
                <GraduationCapIcon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Currently studying
              </p>
              <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-white">
                B.Sc. in Computer Science & Engineering
              </h3>
              <p className="mt-1.5 text-xs leading-5 text-slate-400">
                {profile.university}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-white">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Relevant coursework
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {coursework.map((course) => (
                  <li
                    key={course}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ol className="relative space-y-4 border-l border-white/10 pl-6 sm:pl-8">
            {education.map((item) => {
              const dateLabel =
                item.period ??
                (item.passingYear
                  ? `Passing year ${item.passingYear}`
                  : null);

              return (
                <li
                  key={`${item.degree}-${dateLabel ?? "education"}`}
                  className="relative"
                >
                  <span className="absolute -left-[29px] top-6 h-2.5 w-2.5 rounded-full bg-indigo-400 ring-4 ring-black sm:-left-[37px]" />
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-white/20 hover:bg-white/[0.05]">
                    {dateLabel ? (
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-indigo-300">
                        <CalendarIcon className="h-3 w-3" />
                        {dateLabel}
                      </div>
                    ) : null}
                    <h3 className="mt-3 text-base font-semibold tracking-tight text-white">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {item.institution} · {item.location}
                    </p>
                    <p className="mt-2.5 text-[13px] leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
