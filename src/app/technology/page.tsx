import { IconCloudDemo } from "@/components/technology/technologyicon";
import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "Technologies",
  description: "An interactive view of my technology stack.",
};

const BLUR_FADE_DELAY = 0.04;

export default function TechnologyPage() {
  return (
    <main className="flex flex-col gap-6 w-full mt-4 items-center justify-center min-h-[60vh]">
      <BlurFade delay={BLUR_FADE_DELAY} className="w-full text-center">
        <h1 className="text-3xl font-bold tracking-tighter">Technology Stack</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          An interactive, fully rendered cloud of my favorite tools and framekworks.
        </p>
      </BlurFade>
      
      <BlurFade delay={BLUR_FADE_DELAY * 2} className="w-full flex justify-center">
        <IconCloudDemo />
      </BlurFade>
    </main>
  );
}
