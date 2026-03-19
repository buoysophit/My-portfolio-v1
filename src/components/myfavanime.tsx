"use client";

import { DATA } from "@/data/resume";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function MyFavAnime() {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  const handleImageError = (animeTitle: string) => {
    setImageErrors(prev => ({ ...prev, [animeTitle]: true }));
  };

  return (
    <section id="favorite-anime" className="flex flex-col gap-6 w-full mt-4">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-3xl font-bold tracking-tighter">My Favorite Anime</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          A collection of animated series and movies that I dive into after a long day of coding.
        </p>
      </BlurFade>
        
      <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
        {DATA.favoriteAnime.map((anime, id) => (
          <BlurFade
            key={anime.title}
            delay={BLUR_FADE_DELAY * 2 + id * 0.05}
          >
            <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                {!imageErrors[anime.title] ? (
                  <Image
                    src={anime.poster}
                    alt={`${anime.title} poster`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    onError={() => handleImageError(anime.title)}
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-4xl mb-2">{anime.icon}</div>
                    </div>
                  </div>
                )}
              </div>
              <CardHeader className="px-2 pt-2 pb-1">
                <div className="space-y-1">
                  <CardTitle className="mt-1 text-sm leading-tight flex items-center gap-1.5 line-clamp-1">
                    {anime.icon} {anime.title}
                  </CardTitle>
                  <p className="font-sans text-[10px] text-muted-foreground">
                    {anime.genre}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col px-2 pb-2 pt-0 w-full">
                <p className="text-pretty font-sans text-[11px] text-muted-foreground line-clamp-3">
                  {anime.description}
                </p>
              </CardContent>
              <CardFooter className="px-2 pb-2 mt-auto">
                <div className="flex flex-wrap gap-1">
                  <Badge variant={anime.status === "Completed" ? "secondary" : "default"} className="px-1 py-0 text-[10px] font-medium leading-none">
                    {anime.status}
                  </Badge>
                  <Badge variant="outline" className="px-1 py-0 text-[10px] font-medium leading-none">
                    ⭐ {anime.rating}
                  </Badge>
                </div>
              </CardFooter>
            </Card>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
