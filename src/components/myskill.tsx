"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Skills() {
  return (
    <section id="skills">
      <div className="flex flex-col gap-y-2">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-lg font-semibold">Skills</h2>
        </BlurFade>

        {/* Skills with Icons */}
        <div className="space-y-1">
          {DATA.skillsWithIcons.map((category, categoryIndex) => (
            <BlurFade
              key={categoryIndex}
              delay={BLUR_FADE_DELAY * 9.2 + categoryIndex * 0.1}
            >
              <div className="space-y-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <BlurFade
                      key={skill.name}
                      delay={
                        BLUR_FADE_DELAY * 9.4 +
                        categoryIndex * 0.1 +
                        skillIndex * 0.05
                      }
                    >
                      <div className="flex flex-col items-center p-2 rounded-md border border-border bg-card hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Fallback: Simple Skills Badges */}
        <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              Additional Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {DATA.skills
                .filter((skill) =>
                  !DATA.skillsWithIcons.some((cat) =>
                    cat.skills.some((s) =>
                      s.name.toLowerCase().includes(skill.toLowerCase())
                    )
                  )
                )
                .map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 11 + id * 0.05}
                  >
                    <div className="flex items-center gap-2 p-2 rounded-md border border-border bg-card hover:shadow-md transition-shadow">
                      <span className="text-sm font-medium text-foreground">
                        {skill}
                      </span>
                    </div>
                  </BlurFade>
                ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}