"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const osData = [
  {
    name: "Windows 11",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows11/windows11-original.svg",
    description: "Primary development environment for modern applications and office productivity",
    badge: "Main OS",
    colors: {
      gradient: "from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30",
      border: "border-blue-200 dark:border-blue-800",
      shadow: "hover:shadow-blue-500/10",
      iconBg: "bg-blue-400",
      title: "text-blue-900 dark:text-blue-100",
      description: "text-blue-700 dark:text-blue-300",
      badge: "bg-blue-600"
    }
  },
  {
    name: "Arch Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg",
    description: "Advanced system for CLI mastery, server management, and custom development setups",
    badge: "Custom Setup",
    colors: {
      gradient: "from-cyan-50 to-teal-100 dark:from-cyan-950/50 dark:to-teal-900/30",
      border: "border-cyan-200 dark:border-cyan-800",
      shadow: "hover:shadow-cyan-500/10",
      iconBg: "bg-cyan-400",
      title: "text-cyan-900 dark:text-cyan-100",
      description: "text-cyan-700 dark:text-cyan-300",
      badge: "bg-cyan-600"
    }
  },
  {
    name: "Ubuntu",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
    description: "Reliable platform for server deployment, DevOps workflows, and containerized applications",
    badge: "Server/DevOps",
    colors: {
      gradient: "from-orange-50 to-red-100 dark:from-orange-950/50 dark:to-red-900/30",
      border: "border-orange-200 dark:border-orange-800",
      shadow: "hover:shadow-orange-500/10",
      iconBg: "bg-orange-400",
      title: "text-orange-900 dark:text-orange-100",
      description: "text-orange-700 dark:text-orange-300",
      badge: "bg-orange-600"
    }
  }
];

export default function OSExperience() {
  return (
    <section id="os-experience">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold flex items-center gap-2">
            OS Experience
          </h2>
        </BlurFade>
        
        <BlurFade delay={BLUR_FADE_DELAY * 9.2}>
          <p className="text-sm text-muted-foreground mb-4">
            I have hands-on experience with multiple operating systems for
            development, study, and work.
          </p>
        </BlurFade>
        
        <BlurFade delay={BLUR_FADE_DELAY * 9.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {osData.map((os, index) => (
              <div
                key={os.name}
                className={`relative overflow-hidden bg-gradient-to-br ${os.colors.gradient} border ${os.colors.border} rounded-3xl p-8 group hover:shadow-2xl ${os.colors.shadow} transition-all duration-500 hover:scale-105`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className={`absolute inset-0 ${os.colors.iconBg} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      <img
                        src={os.icon}
                        alt={os.name}
                        className="w-16 h-16 relative z-10 drop-shadow-lg"
                      />
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold text-center mb-2 ${os.colors.title}`}>
                    {os.name}
                  </h3>
                  <p className={`text-center text-sm ${os.colors.description} mb-4 leading-relaxed`}>
                    {os.description}
                  </p>
                  <div className="flex justify-center">
                    <span className={`${os.colors.badge} text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg`}>
                      {os.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}