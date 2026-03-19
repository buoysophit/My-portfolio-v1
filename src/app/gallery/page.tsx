import GalleryCard from "@/components/gallery-card";
import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "Gallery",
  description: "A visual showcase of projects and moments.",
};

const BLUR_FADE_DELAY = 0.04;

export default function GalleryPage() {
  return (
    <main className="flex flex-col gap-6 w-full mt-4">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-3xl font-bold tracking-tighter">Gallery</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          A visual showcase of captures and projects.
        </p>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="-mt-12">
          <GalleryCard />
        </div>
      </BlurFade>
    </main>
  );
}
