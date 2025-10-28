import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaRibbon from "@/components/CtaRibbon";

// Product data with single image per product
const productData: Record<string, any> = {
  "land-cruiser-300-gr-sport": {
    title: "Land Cruiser 300 GR Sport",
    variant: "Black Marble • Coil Black",
    brand: "Toyota",
    image: "/placeholders/placeholder.svg",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Land Cruiser 300 GR Sport dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
  },
  "alphard-2023": {
    title: "Alphard 2023",
    variant: "Black Leather • Coil Black",
    brand: "Toyota",
    image: "/placeholders/placeholder.svg",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Alphard 2023 dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
  },
  "toyota-black-fire": {
    title: "Toyota",
    variant: "Black Fire • Coil Black",
    brand: "Toyota",
    image: "/placeholders/placeholder.svg",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Toyota dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
  },
  "toyota-maroon": {
    title: "Toyota",
    variant: "Maroon • Coil Maroon",
    brand: "Toyota",
    image: "/placeholders/placeholder.svg",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Toyota dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
  },
  "toyota-coffee": {
    title: "Toyota",
    variant: "Coffee • Coil Coffee",
    brand: "Toyota",
    image: "/placeholders/placeholder.svg",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Toyota dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
  },
  "xpander-2023": {
    title: "Xpander 2023",
    variant: "Black Marble • Coil Black",
    brand: "Mitsubishi",
    image: "/placeholders/placeholder.svg",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Xpander 2023 dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
  },
  "pajero-sport-2022": {
    title: "Pajero Sport 2022",
    variant: "Black Leather • Coil Orange",
    brand: "Mitsubishi",
    image: "/placeholders/placeholder.svg",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Pajero Sport 2022 dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
  },
  "mitsubishi-milk-tea": {
    title: "Mitsubishi",
    variant: "Milk Tea • Coil Beige",
    brand: "Mitsubishi",
    image: "/placeholders/placeholder.svg",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Mitsubishi dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
  },
  "br-v-2023": {
    title: "BR-V 2023",
    variant: "Black Marble • Coil Black",
    brand: "Honda",
    image: "/placeholders/placeholder.svg",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus BR-V 2023 dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
  },
  "crv-2022": {
    title: "CR-V 2022",
    variant: "Custom • Coil Black",
    brand: "Honda",
    image: "/placeholders/placeholder.svg",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus CR-V 2022 dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
  },
  "honda-carbon": {
    title: "Honda",
    variant: "Carbon • Coil Black",
    brand: "Honda",
    image: "/placeholders/placeholder.svg",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Honda dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
  },
  "honda-maroon": {
    title: "Honda",
    variant: "Maroon",
    brand: "Honda",
    image: "/placeholders/placeholder.svg",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Honda dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
  },
  "honda-red-valet": {
    title: "Honda",
    variant: "Red Valet • Coil Red",
    brand: "Honda",
    image: "/placeholders/placeholder.svg",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Honda dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
  },
  "daihatsu-black-marble": {
    title: "Daihatsu",
    variant: "Black Marble • Coil Black",
    brand: "Daihatsu",
    image: "/placeholders/placeholder.svg",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Daihatsu dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
  },
  "daihatsu-black-fire": {
    title: "Daihatsu",
    variant: "Black Fire • Coil Black",
    brand: "Daihatsu",
    image: "/placeholders/placeholder.svg",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Daihatsu dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
  },
  "almaz": {
    title: "Almaz",
    variant: "Black Marble • Coil Black",
    brand: "Wuling",
    image: "/placeholders/placeholder.svg",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Almaz dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
  },
  "cortez-2022": {
    title: "Cortez 2022",
    variant: "Custom • Coil Black",
    brand: "Wuling",
    image: "/placeholders/placeholder.svg",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Cortez 2022 dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
  },
};

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = productData[params.slug];
  
  if (!product) {
    return {
      title: "Produk Tidak Ditemukan - Promate",
    };
  }

  return {
    title: `${product.title} - ${product.variant} | Promate`,
    description: product.description[0],
    openGraph: {
      title: `${product.title} - ${product.variant}`,
      description: product.description[0],
      type: "website",
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = productData[params.slug];

  if (!product) {
    return (
      <>
        <main className="container mx-auto px-4 py-16 text-center min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl mb-4">Produk Tidak Ditemukan</h1>
          <p className="text-gray-400 mb-8">
            Maaf, produk yang Anda cari tidak tersedia.
          </p>
          <a
            href="/"
            className="inline-block bg-brand-red hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Kembali ke Beranda
          </a>
        </main>
      </>
    );
  }

  // Get other products from the same brand
  const relatedProducts = Object.entries(productData)
    .filter(([slug, p]) => p.brand === product.brand && slug !== params.slug)
    .slice(0, 3)
    .map(([slug, p]) => ({
      slug,
      title: p.title,
      variant: p.variant,
      image: p.image,
    }));

  return (
    <>
      <main className="min-h-screen">
        {/* Back Button */}
        <div className="px-4 py-6 lg:px-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden px-4 pb-12 space-y-6">
          {/* Main Image */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-brand-surface">
            <Image
              src={product.image}
              alt={`${product.title} - ${product.variant}`}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          {/* Related Products Gallery */}
          {relatedProducts.length > 0 && (
            <div className="grid grid-cols-4 gap-2">
              {relatedProducts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/${related.slug}`}
                  className="relative aspect-square rounded-lg overflow-hidden border-2 border-brand-line hover:border-brand-red transition-colors"
                >
                  <Image
                    src={related.image}
                    alt={`${related.title} - ${related.variant}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </Link>
              ))}
            </div>
          )}

          {/* Title & Variant */}
          <div className="space-y-2">
            <h1 className="text-2xl" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              {product.title}
            </h1>
            <p className="text-base text-gray-400">{product.variant}</p>
          </div>

          {/* Description */}
          <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
            {product.description.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block px-6 xl:px-8 pb-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            {/* Gallery */}
            <div className="sticky top-8 space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-brand-surface">
                <Image
                  src={product.image}
                  alt={`${product.title} - ${product.variant}`}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* Related Products Gallery */}
              {relatedProducts.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {relatedProducts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/${related.slug}`}
                      className="relative aspect-square rounded-lg overflow-hidden border-2 border-brand-line hover:border-brand-red transition-colors"
                    >
                      <Image
                        src={related.image}
                        alt={`${related.title} - ${related.variant}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Title & Variant */}
              <div className="space-y-3">
                <h1 className="text-4xl xl:text-5xl" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                  {product.title}
                </h1>
                <p className="text-xl text-gray-400">{product.variant}</p>
              </div>

              {/* Description */}
              <div className="space-y-5 text-base text-gray-300 leading-relaxed">
                {product.description.map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/6281234567890?text=Halo%20Promate%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(product.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-brand-wa hover:bg-green-600 text-white p-4 rounded-full shadow-card transition-all hover:scale-110"
          aria-label="Chat via WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>

        <CtaRibbon />
      </main>
    </>
  );
}
