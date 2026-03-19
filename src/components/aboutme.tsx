"use client";

import React from "react";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function About() {
  return (
    <section id="about">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold mb-4">About Me</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            Hi! I&apos;m{" "}
            <Link href="/gallery" className="hover:underline transition-colors inline-block">
              <strong className="text-foreground font-semibold">BuoySophit</strong>
            </Link>
            , a{" "}
            Computer Science student at{" "}
            <strong className="text-foreground font-semibold">
              Royal University of Phnom Penh
            </strong>
            . I enjoy turning ideas into clean, user-friendly web experiences —
            from sleek UI design to smooth interactions that make a site feel
            alive.
          </p>
          <p>
            My work is fueled by curiosity and creativity. I&apos;m always exploring
            better ways to build for the web, learning modern frameworks, and
            pushing myself to write code that&apos;s both elegant and practical.
          </p>
          <p>
            Outside of coding, I dive deep into the world of anime and
            storytelling.{" "}
            <Link href="/anime" className="hover:underline transition-colors block sm:inline">
              <strong className="text-foreground font-semibold">
                Code by day, anime by night.
              </strong>
            </Link>{" "}
            Stories inspire me — whether they&apos;re animated or written in lines of
            code.
          </p>
        </div>
      </BlurFade>
    </section>
  );
}