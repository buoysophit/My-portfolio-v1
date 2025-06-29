import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import { IconCloudDemo } from "@/components/technology/technologyicon";
import GalleryCard from "@/components/gallery-card";
import { IconCloud } from "@/components/magicui/icon-cloud";
import HeroProfile from "@/components/hero-profile";
import Contact from "@/components/contact";
import OSExperience from "@/components/os";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
<main className="flex flex-col min-h-[100dvh] space-y-10 ">
      <HeroProfile />

  <BlurFade delay={BLUR_FADE_DELAY * 12}>
  <GalleryCard />
  </BlurFade>

  <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
  </section>

  <section id="technology">
        <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
          <h2 className="text-xl font-bold mb-4">Technologies I Use</h2>
          <p className="text-sm text-muted-f</div>oreground mb-6">
            Here are some of the main technologies, frameworks, and tools I work
            with regularly:
          </p>
          <div className="flex justify-center">
            <IconCloudDemo />
          </div>
        </BlurFade>
  </section>
      <OSExperience />
  <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
  </section>
  {/* <section id="short-courses">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 8.5}>
            <h2 className="text-xl font-bold">Short Courses</h2>
          </BlurFade>
          {DATA.shortCourses.map((course, id) => (
            <BlurFade
              key={course.title}
              delay={BLUR_FADE_DELAY * 8.7 + id * 0.05}
            >
              <ResumeCard
                key={course.title}
                href={course.href}
                logoUrl={course.logoUrl}
                altText={course.provider}
                title={course.title}
                subtitle={course.provider}
                period={course.completed}
                description={course.description}
              />
            </BlurFade>
          ))}
        </div>
  </section> */}
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
 
  <section id="projects">
              <div className="space-y-12 w-full py-12">
                <BlurFade delay={BLUR_FADE_DELAY * 11}>
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                        My Projects
                      </div>
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Check out my latest work
                      </h2>
                      <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        I&apos;ve worked on a variety of projects, from simple
                        websites to complex web applications. Here are a few of my
                        favorites.
                      </p>
                    </div>
                  </div>
                </BlurFade>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                  {DATA.projects.map((project, id) => (
                    <BlurFade
                      key={project.title}
                      delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                    >
                      <ProjectCard
                        href={project.href}
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        dates={project.dates}
                        tags={project.technologies}
                        image={project.image}
                        video={project.video}
                        links={project.links}
                      />
                    </BlurFade>
                  ))}
                </div>
              </div>
  </section>

<section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <Contact />
        </BlurFade>
</section>
    </main>
  );
}
