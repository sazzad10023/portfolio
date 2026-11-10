"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import { ArrowUpRightIcon, CloseIcon, MenuIcon } from "./icons";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  const current = pathname.startsWith("/projects") ? "projects" : active;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-black/70 shadow-[0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
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

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = current === item.id;

            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-full px-3.5 py-2 text-[13px] font-medium transition ${
                    isActive
                      ? "bg-white text-slate-950 shadow-sm"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center lg:flex">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-[13px] font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:shadow-indigo-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Let&apos;s talk
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 shadow-sm backdrop-blur transition hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 lg:hidden"
        >
          {open ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="animate-fade-in border-t border-white/10 bg-black/90 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto max-h-[calc(100vh-4rem)] max-w-6xl overflow-y-auto px-4 py-4 sm:px-6">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = current === item.id;

                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition ${
                        isActive
                          ? "bg-white text-slate-950"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {isActive ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-950/50" />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20"
            >
              Email me
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
