"use client";

import Image from "next/image";
import Link from "next/link";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";

const BLUR_FADE_DELAY = 0.04;

export default function HeroProfile() {
  return (
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
            <Link
              href="/assets/pdf/Buoysophit-CV-2025.pdf"
              download
              className="inline-flex items-center gap-1.5 font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              View Resume ↓
            </Link>
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
  );
}