import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  fullWidth?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, fullWidth = false, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-16 md:py-24 px-4 md:px-8",
          !fullWidth && "max-w-7xl mx-auto",
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
