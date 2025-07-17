"use client";

import { DATA } from "@/data/resume";
import { Card, CardContent } from "@/components/ui/card";
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
    <section id="favorite-anime">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Favorite Anime
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Anime I Love Watching
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are some of my favorite anime series that I highly recommend.
              </p>
            </div>
          </div>
        </BlurFade>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {DATA.favoriteAnime.map((anime, id) => (
            <BlurFade
              key={anime.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <Card className="group relative overflow-hidden rounded-xl border-0 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative aspect-[3/4] overflow-hidden">
                  {!imageErrors[anime.title] ? (
                    <Image
                      src={anime.poster}
                      alt={`${anime.title} poster`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      onError={() => handleImageError(anime.title)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-4xl mb-2">{anime.icon}</div>
                        <h3 className="text-white font-bold text-lg">{anime.title}</h3>
                        <p className="text-gray-300 text-sm">{anime.genre}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <Badge 
                      variant={anime.status === "Completed" ? "default" : "secondary"}
                      className="text-xs font-medium shadow-lg"
                    >
                      {anime.status}
                    </Badge>
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge 
                      variant="outline" 
                      className="text-xs bg-black/50 text-white border-white/30 backdrop-blur-sm"
                    >
                      ⭐ {anime.rating}
                    </Badge>
                  </div>
                  
                  {/* Content Overlay */}
                  <CardContent className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">{anime.icon}</span>
                        <h3 className="font-bold text-lg leading-tight">
                          {anime.title}
                        </h3>
                      </div>
                      
                      <p className="text-xs text-gray-300 font-medium">
                        {anime.genre}
                      </p>
                      
                      <p className="text-sm text-gray-200 leading-relaxed opacity-90 line-clamp-3 overflow-hidden">
                        {anime.description}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
