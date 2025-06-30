"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function NonTechSkills() {
  return (
    <section id="non-tech-skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <h2 className="text-xl font-bold">Non-Technical Skills</h2>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DATA.nonTechSkills.map((skill, id) => (
            <BlurFade
              key={skill.skill}
              delay={BLUR_FADE_DELAY * 12.5 + id * 0.05}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {skill.skill}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.category}
                    </p>
                  </div>
                  <span
                    className={`ml-auto px-2 py-1 rounded-full text-xs font-medium
                    ${
                      skill.level === "Advanced"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : skill.level === "Proficient"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {skill.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}