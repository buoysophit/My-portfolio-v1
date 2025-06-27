import React from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title?: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: '/assets/img/g2.png', alt: 'Gallery Image 1', title: 'Project 1' },
  { id: 2, src: '/assets/img/g3.png', alt: 'Gallery Image 2', title: 'Project 2' },
  { id: 3, src: '/assets/img/g4.png', alt: 'Gallery Image 3', title: 'Project 3' },
  { id: 4, src: '/assets/img/g5.png', alt: 'Gallery Image 4', title: 'Project 4' },
  { id: 5, src: '/assets/img/g6.png', alt: 'Gallery Image 5', title: 'Project 5' },
  { id: 6, src: '/assets/img/g7.png', alt: 'Gallery Image 6', title: 'Project 6' },
];

const GalleryCard: React.FC = () => {
  return (
    <section className="py-16 px-1 ">
      <div className="max-w-6xl mx-auto">
   
        {/* 2 column grid for mobile, 3 column grid for desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative w-full h-80 bg-gray-200 dark:bg-gray-700">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
          />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryCard;