import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BrowserWindowProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export function BrowserWindow({ children, className, title = "ABOUT ME" }: BrowserWindowProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-neon-pink translate-x-2 translate-y-2 border-2 border-black" />
      <div className={cn("relative bg-white border-2 border-black z-10", className)}>
        <div className="h-12 bg-neon-green border-b-2 border-black flex items-center px-4 justify-between">
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-black bg-white" />
            <div className="w-4 h-4 rounded-full border-2 border-black bg-white" />
            <div className="w-4 h-4 rounded-full border-2 border-black bg-white" />
          </div>
          
          <div className="flex items-center gap-4">
            {title && <span className="font-mono font-bold uppercase text-sm hidden sm:block">{title}</span>}
            <div className="w-6 h-6 flex items-center justify-center font-bold text-xl cursor-pointer hover:text-neon-pink transition-colors">
              ×
            </div>
          </div>
        </div>
        
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
