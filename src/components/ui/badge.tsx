import * as React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "red" | "gold" | "dark" | "neutral" | "outline";
}

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
    red: "bg-[#DC1F26]/10 text-[#DC1F26] border border-[#DC1F26]/20",
    gold: "bg-[#FACC15]/20 text-amber-950 border border-[#FACC15]/50",
    dark: "bg-zinc-900 text-white border border-zinc-800",
    neutral: "bg-zinc-100 text-zinc-800 border border-zinc-200",
    outline: "bg-transparent text-zinc-700 border border-zinc-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-tight",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
