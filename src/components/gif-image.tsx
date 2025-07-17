"use client";

import Image from "next/image";
import { useState } from "react";

interface GifImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export function GifImage({ src, alt, width, height, className, priority = false }: GifImageProps) {
  const [imageError, setImageError] = useState(false);
  const isGif = src.endsWith('.gif');

  if (imageError) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-200 dark:bg-gray-700`}>
        <span className="text-sm text-gray-500">Image not available</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      unoptimized={isGif}
      onError={() => setImageError(true)}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{
        objectFit: 'cover',
        objectPosition: 'top'
      }}
    />
  );
}
