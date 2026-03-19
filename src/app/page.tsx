import HeroProfile from "@/components/hero-profile";
import { SocialGrid } from "@/components/social-grid";
import { StripeDivider } from "@/components/stripe-divider";
import About from "@/components/aboutme";
import Projects from "@/components/myproject";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

// Technology icons rendered as flat rows (sothearo.dev style)
function Technologies() {
  const techIcons = DATA.skillsWithIcons[0].skills;
  return (
    <section id="technology">
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Technologies</h2>
          <Link href="/technology" className="text-sm font-medium hover:underline text-muted-foreground transition-colors group flex items-center gap-1">
            Interactive view <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
        <div className="flex flex-wrap gap-3">
          {techIcons.map((tech) => (
            <div
              key={tech.name}
              title={tech.name}
              className="group relative flex items-center justify-center h-12 w-12 rounded-lg border border-border bg-background hover:bg-accent transition-colors cursor-default"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-7 w-7 object-contain"
              />
              {/* Tooltip */}
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}

// Simple footer
function Footer() {
  return (
    <footer className="flex items-center justify-between py-6 text-xs text-muted-foreground border-t border-border mt-4">
      <span>© {new Date().getFullYear()} BuoySophit. All rights reserved.</span>
      <div className="flex items-center gap-3">
        <Link
          href={DATA.contact.social.GitHub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
          aria-label="GitHub"
        >
          <Icons.github className="h-4 w-4" />
        </Link>
        <Link
          href={DATA.contact.social.LinkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
          aria-label="LinkedIn"
        >
          <Icons.linkedin className="h-4 w-4" />
        </Link>
        <Link
          href={DATA.contact.social.Telegram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
          aria-label="Telegram"
        >
          <Icons.telegram className="h-4 w-4" />
        </Link>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] gap-0">
      {/* Hero */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <HeroProfile />
      </BlurFade>

      {/* Social grid between stripe dividers */}
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="mt-8">
          <StripeDivider />
          <div className="py-4">
            <SocialGrid />
          </div>
          <StripeDivider />
        </div>
      </BlurFade>

      {/* About Me */}
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <div className="py-8">
          <About />
        </div>
      </BlurFade>

      {/* Technologies */}
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <div>
          <StripeDivider />
          <div className="py-8">
            <Technologies />
          </div>
          <StripeDivider />
        </div>
      </BlurFade>

      {/* Projects */}
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <div className="py-8">
          <Projects />
        </div>
      </BlurFade>

      {/* Footer */}
      <Footer />
    </main>
  );
}
