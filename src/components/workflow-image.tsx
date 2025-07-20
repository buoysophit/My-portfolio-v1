"use client";

import Image from "next/image";

interface WorkflowImageProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  className?: string;
}

export function WorkflowImage({ src, alt, title, description, className = "" }: WorkflowImageProps) {
  const handleClick = () => {
    window.open(src, '_blank');
  };

  return (
    <div className={`relative group overflow-hidden rounded-lg border border-primary/30 shadow-lg bg-muted/20 ${className}`}>
      <div className="relative aspect-video w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-105 cursor-pointer"
          onClick={handleClick}
        />
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
