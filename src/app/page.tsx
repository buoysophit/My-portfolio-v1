import BlurFade from "@/components/magicui/blur-fade";
import { IconCloudDemo } from "@/components/technology/technologyicon";
import GalleryCard from "@/components/gallery-card";
import HeroProfile from "@/components/hero-profile";
import Contact from "@/components/contact";
import OSExperience from "@/components/os";
import NonTechSkills from "@/components/non-technical";
import Education from "@/components/education";
import About from "@/components/aboutme";
import Skills from "@/components/myskill";
import Projects from "@/components/myproject";
import MyFavAnime from "@/components/myfavanime";
const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 ">
      <HeroProfile />
      <BlurFade delay={BLUR_FADE_DELAY * 12}>
        <GalleryCard />
      </BlurFade>

      <section id="about">
        <About />
      </section>

      <section id="technology">
        <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
          <h2 className="text-xl font-bold mb-4">Technologies</h2>
          <p className="text-sm text-muted-f</div>oreground mb-6">
            Here are some of the main technologies, frameworks, and tools I work
            with regularly:
          </p>
          <div className="flex justify-center">
            <IconCloudDemo />
          </div>
        </BlurFade>
      </section>

      <section id="OS-Experience">
        <OSExperience />

      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <Education />
          </BlurFade>

        </div>
      </section>

      <section id="skills">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <Skills />
        </BlurFade>
      </section>

      <section id="non-tech-skills">
        <NonTechSkills />
      </section>

      <section id="favorite-anime">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <MyFavAnime />
        </BlurFade>
      </section>

      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <Projects />
        </BlurFade>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <Contact />
        </BlurFade>
      </section>
    </main>
  );
}
