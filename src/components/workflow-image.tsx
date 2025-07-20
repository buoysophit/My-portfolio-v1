"use client";

import Image from "next/image";
import { useState, useRef } from "react";

interface WorkflowImageProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  className?: string;
  videoSrc?: string; // Optional video source for better mobile performance
}

export function WorkflowImage({ src, alt, title, description, className = "", videoSrc }: WorkflowImageProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [useVideo, setUseVideo] = useState(!!videoSrc);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    window.open(src, '_blank');
  };

  // Check if the image is a GIF
  const isGif = src.toLowerCase().endsWith('.gif');

  // Handle video load success
  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  // Handle video load error - fallback to GIF/image
  const handleVideoError = () => {
    setUseVideo(false);
    setIsVideoLoaded(false);
  };

  return (
    <div className={`relative group overflow-hidden rounded-lg border border-primary/30 shadow-lg bg-muted/20 ${className}`}>
      <div className="relative aspect-video w-full">
        {useVideo && videoSrc ? (
          // Use video for better mobile performance and smaller file sizes
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-105 cursor-pointer"
            onClick={handleClick}
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            style={{ display: isVideoLoaded ? 'block' : 'none' }}
          />
        ) : isGif ? (
          // Use regular img tag for GIFs to ensure better mobile compatibility
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-105 cursor-pointer"
            onClick={handleClick}
            loading="lazy"
            style={{ display: useVideo && !isVideoLoaded ? 'none' : 'block' }}
          />
        ) : (
          // Use Next.js Image component for static images
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-105 cursor-pointer"
            onClick={handleClick}
          />
        )}
        
        {/* Loading placeholder while video is loading */}
        {useVideo && videoSrc && !isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
            <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          </div>
        )}

        <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-lg">
          <div className="p-4 w-full">
            <h4 className="font-semibold text-white mb-2">{title}</h4>
            <p className="text-sm text-gray-200">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
