import Link from "next/link";
import { navItems, profile } from "@/data/portfolio";
import { SocialLinks } from "./social-links";

const footerItems = navItems.filter(
  (item) =>
    item.id === "about" || item.id === "projects" || item.id === "contact",
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${profile.name} — home`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-indigo-600 via-violet-500 to-sky-500 text-[10px] font-bold tracking-tight text-white shadow-md shadow-indigo-500/20 transition group-hover:scale-105">
            {profile.initials}
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">
            {profile.shortName}
            <span className="text-indigo-400">.</span>
          </span>
        </Link>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-[13px] font-medium text-slate-500 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <SocialLinks size="sm" />
          <span className="h-4 w-px bg-white/10" />
          <a
            href={`mailto:${profile.email}`}
            className="text-[13px] font-medium text-slate-500 transition hover:text-white"
          >
            Email
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-[11px] text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} {profile.name}
          </p>
          <p>Dhaka, Bangladesh · Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
