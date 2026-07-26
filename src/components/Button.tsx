import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-brand bg-brand/10 text-brand hover:bg-brand/20 hover:border-brand-highlight",
  secondary:
    "border border-white/10 bg-transparent text-white hover:bg-white/5 hover:border-white/20",
  ghost: "border border-transparent text-zinc-400 hover:text-white hover:bg-white/5",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-6 py-2.5 text-sm font-medium transition-colors duration-150",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
