"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ArrowDownIcon, MapPinIcon } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function HeroProfile() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Right Image */}
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              {/* Decorative background elements */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl" />
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-secondary/10 blur-2xl" />

              {/* Main image container */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-muted/50 to-muted border backdrop-blur-sm">
                <Image
                  src={DATA.avatarUrl}
                  alt={DATA.name}
                  width={400}
                  height={500}
                  className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-4 right-4 mx-auto w-fit">
                <Badge className="bg-background/90 text-foreground backdrop-blur-sm border shadow-lg">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                  Available for opportunities
                </Badge>
              </div>
            </div>
          </div>
        </BlurFade>
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPinIcon className="h-4 w-4" />
              <span>{DATA.location}</span>
            </div>
          </BlurFade>

          <div className="space-y-4">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
              yOffset={8}
              text={`Hi, I'm ${DATA.name}`}
            />

            <BlurFadeText
              delay={BLUR_FADE_DELAY * 2}
              className="text-xl text-muted-foreground sm:text-2xl"
              text={DATA.description}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex gap-3">
                <Button size="lg" className="group">
                  <ArrowDownIcon className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  View Resume
                </Button>
                <Button variant="outline" size="lg">
                  Contact Me
                </Button>
              </div>
            </div>
          </BlurFade>
        </div>


      </div>

      {/* Bottom section with additional info */}
      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <div className="mt-16 text-center">
          {/* <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            {DATA.summary}
          </p> */}
        </div>
      </BlurFade>
    </section>
  );
}