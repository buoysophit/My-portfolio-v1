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
        <polyline points="4,17 10,11 4,5"></polyline>
        <line x1="12" x2="20" y1="19" y2="19"></line>
      </svg>
      <span className="sr-only">Toggle terminal mode</span>
    </Button>
  );
}
