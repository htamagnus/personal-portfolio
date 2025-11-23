import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string | ReactNode;
  subtitle?: string;
  description?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-6">
      <h2
        className={cn(
          "text-4xl md:text-6xl font-display font-black uppercase mb-4",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "font-mono font-bold text-xl text-black",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
      {description && (
        <p
          className={cn(
            "text-md md:text-xl font-mono text-black max-w-2xl mx-auto font-bold",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

