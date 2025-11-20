"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export function Marquee({
  children,
  direction = "left",
  speed = "normal",
  className,
}: MarqueeProps) {
  const speeds = {
    slow: "40s",
    normal: "20s",
    fast: "10s",
  };

  return (
    <div className={cn("overflow-hidden flex whitespace-nowrap", className)}>
      <div
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 animate-scroll will-change-transform",
          direction === "right" && "animate-scroll-reverse"
        )}
        style={{ animationDuration: speeds[speed] }}
      >
        {children}
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 animate-scroll will-change-transform",
          direction === "right" && "animate-scroll-reverse"
        )}
        style={{ animationDuration: speeds[speed] }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
