"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type TerminalModeContextType = {
  isTerminalMode: boolean;
  toggleTerminalMode: () => void;
};

const TerminalModeContext = createContext<TerminalModeContextType | undefined>(
  undefined
);

export function TerminalModeProvider({ children }: { children: React.ReactNode }) {
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("terminal-mode");
    if (stored) {
      setIsTerminalMode(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("terminal-mode", JSON.stringify(isTerminalMode));
    if (isTerminalMode) {
      document.body.classList.add("terminal-mode");
    } else {
      document.body.classList.remove("terminal-mode");
    }
  }, [isTerminalMode]);

  const toggleTerminalMode = () => {
    setIsTerminalMode((prev) => !prev);
  };

  return (
    <TerminalModeContext.Provider value={{ isTerminalMode, toggleTerminalMode }}>
      {children}
    </TerminalModeContext.Provider>
  );
}

export function useTerminalMode() {
  const context = useContext(TerminalModeContext);
  if (context === undefined) {
    throw new Error("useTerminalMode must be used within a TerminalModeProvider");
  }
  return context;
}
