"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const BLUR_FADE_DELAY = 0.04;

export default function Projects() {
  return (
    <section id="projects">
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Latest Blog</h2>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all →
          </Link>
        </div>
      </BlurFade>
      <div className="space-y-6">
        {DATA.projects.map((project, id) => (
          <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
            <div className="group space-y-2">
              {/* Title + Links */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold leading-snug group-hover:text-muted-foreground transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                  {project.links?.map((link) => (
                    <Link
                      key={link.type}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      title={link.type}
                    >
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Description */}
              <p className="text-xs text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              {/* Tech tags */}
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-[10px] px-2 py-0 h-5 font-normal"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              {/* Subtle separator */}
              <div className="border-b border-border pt-2" />
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}