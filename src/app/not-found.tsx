import Link from "next/link";
import { ArrowLeftIcon, ArrowUpRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-black px-4 py-24 sm:px-6 lg:px-8">
      <div className="bg-dots pointer-events-none absolute inset-0 -z-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="mx-auto w-full max-w-2xl text-center">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-indigo-400">
          Error 404
        </p>
        <h1 className="mt-5 text-balance text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
          This page is off the map.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back to something useful.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back home
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[13px] font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Browse projects
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
