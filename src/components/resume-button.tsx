"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { CloseIcon, DownloadIcon, MailIcon } from "./icons";

type ResumeButtonProps = {
  className?: string;
  variant?: "primary" | "secondary";
};

export function ResumeButton({
  className = "",
  variant = "secondary",
}: ResumeButtonProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20 hover:-translate-y-0.5 hover:shadow-indigo-500/30"
      : "border border-white/10 bg-white/5 text-slate-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10";

  if (profile.resumeAvailable) {
    return (
      <a
        href={profile.resumeUrl}
        download
        className={`${base} ${styles} ${className}`}
      >
        <DownloadIcon className="h-4 w-4" />
        Download resume
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${base} ${styles} ${className}`}
      >
        <DownloadIcon className="h-4 w-4" />
        Download resume
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-dialog-title"
        >
          <button
            type="button"
            aria-label="Close resume dialog"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="animate-fade-in relative w-full max-w-md rounded-3xl border border-white/10 bg-zinc-950 p-7 shadow-2xl shadow-black/60">
            <button
              type="button"
              aria-label="Close resume dialog"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <CloseIcon className="h-4 w-4" />
            </button>

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
              <DownloadIcon className="h-6 w-6" />
            </div>

            <h2
              id="resume-dialog-title"
              className="mt-5 text-xl font-semibold tracking-tight text-white"
            >
              Resume coming soon
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              I&apos;m putting the finishing touches on my resume. In the
              meantime, send me an email and I&apos;ll share a copy right away.
            </p>

            <a
              href={`mailto:${profile.email}?subject=Resume%20request`}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              <MailIcon className="h-4 w-4" />
              Email me for a copy
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
