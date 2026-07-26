import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-12 lg:px-8">
        <p className="font-display text-base font-semibold text-white">
          {siteConfig.name}
        </p>
        <p className="text-sm text-zinc-500">Open Source FTC Vision Project</p>
        <p className="text-sm text-zinc-500">Created by {siteConfig.team}</p>
        <Link
          href={siteConfig.githubHref}
          className="mt-2 w-fit text-sm text-zinc-400 transition-colors duration-150 hover:text-brand"
        >
          GitHub
        </Link>
      </div>
    </footer>
  );
}
