"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] rounded-card overflow-hidden bg-brand-surface">
        <Image
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
              selectedIndex === index
                ? "border-brand-red"
                : "border-brand-line hover:border-brand-muted"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              unoptimized
            />
          </button>
        ))}
      </div>
    </div>
  );
}

