import { Globe } from "lucide-react";

export function UnavailableLink({ label, reason }: { label: string; reason: string }) {
  return (
    <span
      tabIndex={0}
      aria-disabled="true"
      className="group/unavailable relative flex items-center gap-2 text-xs font-bold uppercase border-2 border-dashed border-black px-3 py-2 bg-white text-black/50 cursor-not-allowed"
    >
      <Globe className="w-4 h-4" />
      {label}
      <span
        role="tooltip"
        className="pointer-events-none absolute top-full left-0 mt-2 w-56 border-2 border-black bg-neon-yellow text-black px-3 py-2 font-mono text-xs font-bold normal-case shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] opacity-0 group-hover/unavailable:opacity-100 group-focus/unavailable:opacity-100 transition-opacity z-10"
      >
        {reason}
      </span>
    </span>
  );
}
