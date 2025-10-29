"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  slug: string;
  model: string;
  variant: string;
  image: string;
}

export default function ProductCard({ slug, model, variant, image }: ProductCardProps) {
  const handleClick = () => {
    // Save current scroll position
    const currentScroll = window.scrollY;
    sessionStorage.setItem('homeScrollPosition', currentScroll.toString());
    console.log('Saved scroll position:', currentScroll);
  };

  return (
    <Link 
      href={`/${slug}`}
      onClick={handleClick}
      className="flex-shrink-0 w-[200px] md:w-[240px] lg:w-full group"
    >
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-3 transition-transform duration-300 lg:group-hover:scale-[1.02]">
        <Image
          src={image}
          alt={`${model} - ${variant}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm md:text-base lg:group-hover:text-brand-red transition-colors">{model}</h3>
        <p className="text-xs md:text-sm text-gray-400">{variant}</p>
      </div>
    </Link>
  );
}

