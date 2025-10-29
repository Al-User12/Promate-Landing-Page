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
            src="/placeholders/placeholder.svg"
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
              Promate tampilkan kabin kecil lebih interior mobilmu sesetan rapi dan elegan.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20Promate%2C%20saya%20mau%20lihat%20contoh%20karpet"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-brand-red hover:bg-red-600 text-white font-semibold px-5 py-3.5 rounded-lg transition-colors flex items-center justify-between shadow-lg mb-6"
          >
            <span className="text-sm">Lihat Contoh & Chat Kita</span>
            <div className="bg-white rounded-full p-2">
              <svg className="w-4 h-4 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
          </a>

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
              src="/static/hero.png"
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
                Promate tampilkan kabin kecil lebih interior mobilmu sesetan rapi dan elegan.
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/6281234567890?text=Halo%20Promate%2C%20saya%20mau%20lihat%20contoh%20karpet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between bg-brand-red hover:bg-red-600 text-white font-semibold px-6 py-4 rounded-xl transition-colors shadow-lg max-w-md w-full"
            >
              <span className="text-base">Lihat Contoh & Chat Kita</span>
              <div className="bg-white rounded-full p-2.5">
                <svg className="w-5 h-5 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
            </a>

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
