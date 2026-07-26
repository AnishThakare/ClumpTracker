type ComingSoonProps = {
  title: string;
  subtitle?: string;
};

export function ComingSoon({
  title,
  subtitle = "This section is currently under development.",
}: ComingSoonProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
      <div className="max-w-2xl text-left">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 font-display text-xl text-zinc-500">Coming Soon</p>
        <p className="mt-6 text-base text-zinc-400">{subtitle}</p>
      </div>
    </section>
  );
}
