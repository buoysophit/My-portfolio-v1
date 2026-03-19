import { ProjectCard } from "@/components/project-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

export const metadata = {
  title: "Projects",
  description: "A showcase of my projects and work."
};

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-6 w-full mt-4">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-3xl font-bold tracking-tighter">My Projects</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Here is a collection of my recent projects. Click on the image or the links below to view the source code and demo.
        </p>
      </BlurFade>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-4">
        {DATA.projects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 2 + id * 0.05}
          >
            <ProjectCard
              href={project.href}
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
  );
}
