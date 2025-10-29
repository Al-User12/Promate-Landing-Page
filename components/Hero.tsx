"use client";

import Image from "next/image";
import Rating from "./Rating";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-brand-black">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Hero Image - Full width with bottom rounded corners */}
        <div className="relative w-full aspect-[9/16] max-h-[55vh] rounded-b-[2rem] overflow-hidden">
          <Image
            src="/static/Hero.png"
            alt="Custom Karpet Mobil Premium Promate"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 px-4 pt-6">
          {/* Rating */}
          <div className="mb-4">
            <Rating rating={4.9} />
          </div>

          {/* Text Content */}
          <div className="space-y-3 mb-6">
            <h1 
              className="text-[2rem] leading-[1.1] tracking-tight" 
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              Custom Karpet<br />
              Mobil Premium<br />
              Tangerang
            </h1>
            <p className="text-sm text-gray-400 leading-relaxed">
            Presisi sampai sudut kecil, biar interior mobilmu keliatan makin rapi dan elegan.
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              const productSection = document.querySelector('section:nth-of-type(2)');
              productSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full bg-brand-red hover:bg-red-600 text-white font-semibold px-5 py-3.5 rounded-lg transition-colors flex items-center justify-between shadow-lg mb-6"
          >
            <span className="text-sm">Lihat Contoh & Chat Kita</span>
            <Image
              src="/static/Scroll-Icon.png"
              alt="Scroll"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </button>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 py-6 opacity-50">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet Layout */}
      <div className="hidden lg:flex min-h-screen items-center justify-center p-8">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Image */}
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-card">
            <Image
              src="/static/Hero.png"
              alt="Custom Karpet Mobil Premium Promate"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Rating */}
            <Rating rating={4.9} />

            {/* Text Content */}
            <div className="space-y-6">
              <h1 
                className="text-5xl xl:text-6xl leading-[1.1] tracking-tight" 
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                Custom Karpet<br />
                Mobil Premium<br />
                Tangerang
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              Presisi sampai sudut kecil, biar interior mobilmu keliatan makin rapi dan elegan.
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                const productSection = document.querySelector('section:nth-of-type(2)');
                productSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-between bg-brand-red hover:bg-red-600 text-white font-semibold px-6 py-4 rounded-xl transition-colors shadow-lg max-w-md w-full"
            >
              <span className="text-base">Lihat Contoh & Chat Kita </span>
              <Image
                src="/static/Scroll-Icon.png"
                alt="Scroll"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-3 opacity-50 pt-4">
              <svg
                className="w-5 h-5 text-white animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              <span className="text-sm text-gray-400">Scroll untuk melihat produk</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
