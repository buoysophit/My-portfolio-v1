"use client";

import { useTerminalMode } from "@/context/terminal-mode-context";
import { cn } from "@/lib/utils";

interface TerminalWrapperProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function TerminalWrapper({ 
  children, 
  title = "terminal", 
  className 
}: TerminalWrapperProps) {
  const { isTerminalMode } = useTerminalMode();

  if (!isTerminalMode) {
    return <>{children}</>;
  }

  return (
    <div className={cn(
      "relative bg-card border rounded-lg overflow-hidden shadow-lg",
      className
    )}>
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-muted border-b">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm text-muted-foreground font-mono">
            ┌─[{title}]
          </span>
        </div>
        <div className="text-xs text-muted-foreground font-mono">
          arch@portfolio:~
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 bg-card">
        <div className="text-sm font-mono mb-2">
          <span className="text-green-400">┌─[</span>
          <span className="text-green-400">arch</span>
          <span className="text-white">@</span>
          <span className="text-blue-400">portfolio</span>
          <span className="text-green-400">]─[</span>
          <span className="text-blue-400">~</span>
          <span className="text-green-400">]</span>
        </div>
        <div className="text-sm font-mono mb-2">
          <span className="text-green-400">└─$</span>
          <span className="text-white"> cat {title}.md</span>
          <span className="cursor"></span>
        </div>
        <div className="border-l-2 border-green-400 pl-4 ml-2">
          {children}
        </div>
      </div>
    </div>
  );
}
