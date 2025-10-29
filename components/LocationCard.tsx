import Image from "next/image";

export default function LocationCard() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-md mx-auto px-4 lg:max-w-6xl">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-2xl md:text-3xl mb-3 text-black" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Datang ke Promate<br />di Tangerang!
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Mau lihat bahan langsung atau sekalian pasang di tempat? Langsung aja mampir ke workshop kita.
            </p>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
            <Image
              src="/static/lokasi.png"
              alt="Lokasi Promate Tangerang - Padina Soho"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Location Info */}
          <div className="space-y-3">
            <h3 className="text-xl text-black">Padina Soho</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Padina Soho Jl. Daan Mogot No.KM. 19 6 15122 Batuceper Banten
            </p>
          </div>

          {/* Button */}
          <a
            href="https://maps.google.com/?q=Padina+Soho+Daan+Mogot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-black text-white font-semibold px-6 py-4 rounded-lg transition-colors hover:bg-gray-800 w-full"
          >
            Lihat di Map
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </a>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-card">
            <Image
              src="/static/lokasi.png"
              alt="Lokasi Promate Tangerang - Padina Soho"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-4xl xl:text-5xl mb-4 text-black" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                Datang ke Promate<br />di Tangerang!
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mau lihat bahan langsung atau sekalian pasang di tempat? Langsung aja mampir ke workshop kita.
              </p>
            </div>

            {/* Location Info */}
            <div className="space-y-3">
              <h3 className="text-2xl text-black">Padina Soho</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Padina Soho Jl. Daan Mogot No.KM. 19 6 15122 Batuceper Banten
              </p>
            </div>

            {/* Button */}
            <a
              href="https://maps.google.com/?q=Padina+Soho+Daan+Mogot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-black text-white font-semibold px-8 py-4 rounded-xl transition-colors hover:bg-gray-800"
            >
              Lihat di Map
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

