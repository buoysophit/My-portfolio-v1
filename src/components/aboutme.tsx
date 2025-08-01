"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import Markdown from "react-markdown";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function About() {
  return (
    <section id="about">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">About Me</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {DATA.summary}
        </Markdown>
      </BlurFade>
    </section>
  );
}