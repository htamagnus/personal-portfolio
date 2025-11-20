"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-neon-pink text-black border-2 border-black hover:bg-neon-yellow",
      secondary: "bg-neon-green text-black border-2 border-black hover:bg-neon-blue",
      outline: "bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-background",
      ghost: "bg-transparent text-foreground hover:bg-black/5",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, x: -2, y: -2, boxShadow: "4px 4px 0px 0px var(--foreground)" }}
        whileTap={{ scale: 0.98, x: 0, y: 0, boxShadow: "0px 0px 0px 0px var(--foreground)" }}
        className={cn(
          "relative font-bold uppercase tracking-wider transition-colors duration-200",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
