"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 transition-opacity duration-150 hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
            priority
          />
          <span className="font-display text-sm font-semibold tracking-tight text-white">
            ClumpTracker
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm transition-colors duration-150",
                  active
                    ? "text-brand"
                    : "text-zinc-400 hover:text-white hover:bg-white/5",
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-zinc-300 transition-colors duration-150 hover:border-white/20 hover:bg-white/5 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 px-6 py-3 lg:hidden"
          aria-label="Main mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm transition-colors duration-150",
                      active
                        ? "text-brand bg-brand/5"
                        : "text-zinc-400 hover:text-white hover:bg-white/5",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
