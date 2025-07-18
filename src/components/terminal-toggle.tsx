"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useTerminalMode } from "@/context/terminal-mode-context";

export function TerminalToggle() {
  const { isTerminalMode, toggleTerminalMode } = useTerminalMode();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTerminalMode}
      className="size-14"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-8"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
        <polyline points="9,9 12,12 9,15"/>
        <line x1="15" x2="17" y1="15" y2="15"/>
      </svg>
      <span className="sr-only">Toggle terminal mode</span>
    </Button>
  );
}
