import Image from "next/image";

export default function CtaRibbon() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-md mx-auto px-4 lg:max-w-6xl">
        {/* Card Container */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/placeholders/placeholder.svg"
              alt="Background"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="relative px-6 py-12 md:px-12 md:py-16 lg:py-20">
            <div className="space-y-6 lg:text-center lg:max-w-2xl lg:mx-auto">
              {/* Heading */}
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl leading-tight" 
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                Mau Pasang<br />
                Langsung Tanpa<br />
                Ribet?
              </h2>

              {/* Button */}
              <a
                href="https://wa.me/6281234567890?text=Halo%20Promate%2C%20saya%20mau%20Free%20Home%20Service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Free Home Service*
              </a>

              {/* Disclaimer */}
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                *Buat area Jabodetabek atau kalau mau lihat langsung kualitasnya, datang aja ke tempat kami!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

