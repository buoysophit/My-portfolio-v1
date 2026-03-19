"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { DATA } from "@/data/resume";
import { SunIcon, MoonIcon, LaptopIcon } from "lucide-react";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Web Audio API helper for dynamic sound effects without assets
  const playSound = React.useCallback((type: "open" | "select" = "open") => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = "sine";
      
      if (type === "open") {
        // A pleasant pop sound for opening
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);
      } else {
        // A slightly different pop for selecting
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.05);
      }
      
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch(e) {
      // Ignore audio context errors 
    }
  }, []);

  React.useEffect(() => {
    if (open) {
      playSound("open");
    }
  }, [open, playSound]);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    playSound("select"); // Play sound on selection
    command();
  }, [playSound]);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] bg-background/80 backdrop-blur-sm sm:pt-[20vh] transition-all"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-2xl">
        <div className="flex items-center border-b border-border px-4 gap-2">
          <Command.Input 
            autoFocus
            className="flex h-14 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground" 
            placeholder="Type a command or search..." 
          />
          <button 
            onClick={() => setOpen(false)}
            className="text-xs font-medium text-muted-foreground hover:text-foreground sm:hidden p-2"
          >
            Cancel
          </button>
          <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 uppercase">
            Esc
          </kbd>
        </div>
        <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2 cmdk-list">
          <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
            No results found.
          </Command.Empty>
          
          <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            {DATA.navbar.map((navItem) => (
              <Command.Item
                key={navItem.href}
                className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-1"
                onSelect={() => {
                  runCommand(() => router.push(navItem.href as string));
                }}
              >
                <navItem.icon className="mr-2 h-4 w-4" />
                <span>{navItem.label}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Separator className="h-px bg-border my-2 mx-1" />

          <Command.Group heading="Theme" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            <Command.Item
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground mt-1"
              onSelect={() => runCommand(() => setTheme("light"))}
            >
              <SunIcon className="mr-2 h-4 w-4" />
              <span>Light Theme</span>
            </Command.Item>
            <Command.Item
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground mt-1"
              onSelect={() => runCommand(() => setTheme("dark"))}
            >
              <MoonIcon className="mr-2 h-4 w-4" />
              <span>Dark Theme</span>
            </Command.Item>
            <Command.Item
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground mt-1"
              onSelect={() => runCommand(() => setTheme("system"))}
            >
              <LaptopIcon className="mr-2 h-4 w-4" />
              <span>System Theme</span>
            </Command.Item>
          </Command.Group>

          <Command.Separator className="h-px bg-border my-2 mx-1" />

          {DATA.projects && DATA.projects.length > 0 && (
            <Command.Group heading="Projects" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
              {DATA.projects.map((project) => (
                <Command.Item
                  key={project.title}
                  className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground mt-1"
                  onSelect={() => {
                    if (project.href) {
                      runCommand(() => window.open(project.href, "_blank"));
                    }
                  }}
                >
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 mr-2">
                     <span className="text-[8px]">🎯</span>
                  </div>
                  <span>{project.title}</span>
                </Command.Item>
              ))}
            </Command.Group>
          )}

        </Command.List>
      </div>
    </Command.Dialog>
  );
}
