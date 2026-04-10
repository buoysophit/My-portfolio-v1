"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";

const BLUR_FADE_DELAY = 0.04;

function ComingSoonToast({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (visible) {
      const t = setTimeout(onClose, 3000);
      return () => clearTimeout(t);
    }
  }, [visible, onClose]);

  return (
    <div
      aria-live="assertive"
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 9999,
        pointerEvents: visible ? "auto" : "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.25s ease, transform 0.25s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "0.75rem 1rem",
          background: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
          border: "1px solid hsl(var(--border))",
          borderRadius: "var(--radius)",
          boxShadow:
            "0 4px 24px rgba(0,0,0,0.10), 0 1.5px 4px rgba(0,0,0,0.06)",
          fontSize: "0.875rem",
          fontWeight: 500,
          minWidth: "220px",
          maxWidth: "320px",
        }}
      >
        {/* Icon */}
        <span style={{ fontSize: "1.1rem", lineHeight: 1 }}>🚧</span>

        <span style={{ flex: 1 }}>
          <span style={{ display: "block", fontWeight: 600 }}>Coming Soon</span>
          <span
            style={{
              display: "block",
              color: "hsl(var(--muted-foreground))",
              fontSize: "0.78rem",
              fontWeight: 400,
              marginTop: "0.1rem",
            }}
          >
            Resume is being updated.
          </span>
        </span>

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Dismiss"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "hsl(var(--muted-foreground))",
            padding: "0.15rem",
            display: "flex",
            alignItems: "center",
            lineHeight: 1,
            fontSize: "1rem",
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default function HeroProfile() {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <section className="flex flex-row items-center gap-8 pt-16">
        {/* Left: Text */}
        <div className="flex-1 space-y-4">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            text={`Hello, I'm ${DATA.name}.`}
          />

          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              I&apos;m a{" "}
              <strong className="text-foreground font-semibold">
                Frontend Developer
              </strong>{" "}
              based in Phnom Penh who loves building clean, functional web
              experiences.{" "}
              <span>
                <Link href="/anime" className="font-semibold text-foreground hover:underline transition-colors">
                  Code by day, anime by night.
                </Link>{" "}
                Always excited about{" "}
                <strong className="text-foreground font-semibold">
                  creating something amazing
                </strong>
                .
              </span>
            </p>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex items-center gap-3 text-sm">
              <button
                onClick={() => setShowToast(true)}
                className="inline-flex items-center gap-1.5 font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors cursor-pointer"
              >
                View Resume ↓
              </button>
              <span className="text-muted-foreground">·</span>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact Me →
              </Link>
            </div>
          </BlurFade>
        </div>

        {/* Right: Avatar */}
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="relative shrink-0">
            <div className="h-40 w-40 sm:h-48 sm:w-48 rounded-none overflow-hidden border-2 border-border shadow-sm">
              <Image
                src={DATA.avatarUrl}
                alt={DATA.name}
                width={192}
                height={192}
                className="object-cover object-top w-full h-full"
                priority
              />
            </div>
            {/* Online dot */}
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500 border-2 border-background" />
            </span>
          </div>
        </BlurFade>
      </section>

      <ComingSoonToast
        visible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}