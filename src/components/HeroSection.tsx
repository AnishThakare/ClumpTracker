import Image from "next/image";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-2">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {siteConfig.name}
              </h1>
              <p className="font-display text-lg text-brand sm:text-xl">
                {siteConfig.tagline}
              </p>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-zinc-400">
              ClumpTracker is an open-source vision framework for FTC that helps
              robots detect and target clusters of game pieces using Limelight
              SnapScript. Designed and maintained by FTC Team 22012 — Loose
              Screws, the project aims to make advanced computer vision simple,
              accessible, and easy to integrate into any robot.
            </p>
          </div>

          <div className="flex justify-start lg:justify-end">
            <div className="relative w-full max-w-md">
              <Image
                src="/logo.png"
                alt="ClumpTracker logo"
                width={480}
                height={480}
                className="h-auto w-full max-w-sm object-contain sm:max-w-md"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4 px-6 lg:px-8">
          <Button href="/pipeline-docs" variant="primary">
            View Documentation
          </Button>
          <Button href="/pipeline-download" variant="secondary">
            Download Pipeline
          </Button>
        </div>
      </section>
    </>
  );
}
