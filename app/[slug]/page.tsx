import { Metadata } from "next";
import Gallery from "@/components/Gallery";
import CtaRibbon from "@/components/CtaRibbon";

// Product data with multiple images per product
const productData: Record<string, any> = {
  "vellfire-hybrid": {
    title: "Vellfire Hybrid",
    variant: "Premium Carpet",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Vellfire Hybrid dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Vellfire Hybrid/WhatsApp Image 2024-08-14 at 12.50.40 (2).jpeg",
        alt: "Vellfire Hybrid - Premium Carpet - Tampak Utama",
      },
      {
        src: "/images/Vellfire Hybrid/WhatsApp Image 2024-08-14 at 12.50.40.jpeg",
        alt: "Vellfire Hybrid - Detail Jahitan",
      },
      {
        src: "/images/Vellfire Hybrid/WhatsApp Image 2024-08-14 at 12.50.41 (2).jpeg",
        alt: "Vellfire Hybrid - Tampak Samping",
      },
    ],
  },
  "innova-2005-2015": {
    title: "Innova 2005 - 2015",
    variant: "Custom Carpet",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Innova 2005 - 2015 dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Innova 2005 - 2015/Foto dari Iyan(2).jpg",
        alt: "Innova 2005 - 2015 - Custom Carpet - Tampak Utama",
      },
      {
        src: "/images/Innova 2005 - 2015/Foto dari Iyan(4).jpg",
        alt: "Innova 2005 - 2015 - Detail Jahitan",
      },
      {
        src: "/images/Innova 2005 - 2015/Foto dari Iyan(6).jpg",
        alt: "Innova 2005 - 2015 - Tampak Samping",
      },
    ],
  },
  "br-v-2022": {
    title: "BR-V 2022",
    variant: "Premium Carpet",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus BR-V 2022 dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/BR-V 2022/IMG-20250829-WA0010.jpg",
        alt: "BR-V 2022 - Premium Carpet - Tampak Utama",
      },
      {
        src: "/images/BR-V 2022/IMG-20250829-WA0015.jpg",
        alt: "BR-V 2022 - Detail Jahitan",
      },
      {
        src: "/images/BR-V 2022/IMG-20250829-WA0016.jpg",
        alt: "BR-V 2022 - Tampak Samping",
      },
    ],
  },
  "cr-v-turbo": {
    title: "CR-V Turbo",
    variant: "Custom Carpet",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus CR-V Turbo dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/CR-V Turbo/Foto dari Iyan.jpg",
        alt: "CR-V Turbo - Custom Carpet - Tampak Utama",
      },
      {
        src: "/images/CR-V Turbo/Foto dari Iyan(4).jpg",
        alt: "CR-V Turbo - Detail Jahitan",
      },
      {
        src: "/images/CR-V Turbo/Foto dari Iyan(5).jpg",
        alt: "CR-V Turbo - Tampak Samping",
      },
    ],
  },
  "freed-2014": {
    title: "Freed 2014",
    variant: "Premium Carpet",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Freed 2014 dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Freed 2014/Foto dari Iyan(1).jpg",
        alt: "Freed 2014 - Premium Carpet - Tampak Utama",
      },
      {
        src: "/images/Freed 2014/Foto dari Iyan(10).jpg",
        alt: "Freed 2014 - Detail Jahitan",
      },
      {
        src: "/images/Freed 2014/Foto dari Iyan(7).jpg",
        alt: "Freed 2014 - Tampak Samping",
      },
    ],
  },
  "jazz-gk5": {
    title: "Jazz GK5",
    variant: "Custom Carpet",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Jazz GK5 dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Jazz GK5/IMG-20250908-WA0043.jpg",
        alt: "Jazz GK5 - Custom Carpet - Tampak Utama",
      },
      {
        src: "/images/Jazz GK5/IMG-20250908-WA0047.jpg",
        alt: "Jazz GK5 - Detail Jahitan",
      },
      {
        src: "/images/Jazz GK5/_storage_emulated_0_Android_media_com.whatsapp.w4b_WhatsApp Business_Media_WhatsApp Business Images_IMG-20250908-WA0048.jpg",
        alt: "Jazz GK5 - Tampak Samping",
      },
    ],
  },
  "xpander-2017-now": {
    title: "Xpander 2017-Now",
    variant: "Premium Carpet",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Xpander 2017-Now dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Xpander 2017-Now/IMG-20250902-WA0041.jpg",
        alt: "Xpander 2017-Now - Premium Carpet - Tampak Utama",
      },
      {
        src: "/images/Xpander 2017-Now/IMG-20250902-WA0042.jpg",
        alt: "Xpander 2017-Now - Detail Jahitan",
      },
      {
        src: "/images/Xpander 2017-Now/IMG-20250902-WA0045.jpg",
        alt: "Xpander 2017-Now - Tampak Samping",
      },
    ],
  },
  "agya": {
    title: "Agya",
    variant: "Custom Carpet",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Agya dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Agya/048acc9d-e987-48d0-9f81-bccf69297411.jpg",
        alt: "Agya - Custom Carpet - Tampak Utama",
      },
      {
        src: "/images/Agya/11aa4dec-25c3-4871-ab3c-6112b00e51b7.jpg",
        alt: "Agya - Detail Jahitan",
      },
      {
        src: "/images/Agya/9b5aa12b-8f8b-41e2-b7fd-695f701ce0e2.jpg",
        alt: "Agya - Tampak Samping",
      },
    ],
  },
  "terios": {
    title: "Terios",
    variant: "Premium Carpet",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Terios dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Terios/Foto dari Iyan(1).jpg",
        alt: "Terios - Premium Carpet - Tampak Utama",
      },
      {
        src: "/images/Terios/Foto dari Iyan(3).jpg",
        alt: "Terios - Detail Jahitan",
      },
      {
        src: "/images/Terios/Foto dari Iyan(4).jpg",
        alt: "Terios - Tampak Samping",
      },
    ],
  },
  "xenia": {
    title: "Xenia",
    variant: "Custom Carpet",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Xenia dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Xenia/IMG-20250904-WA0019.jpg",
        alt: "Xenia - Custom Carpet - Tampak Utama",
      },
      {
        src: "/images/Xenia/IMG-20250904-WA0021.jpg",
        alt: "Xenia - Detail Jahitan",
      },
      {
        src: "/images/Xenia/IMG-20250904-WA0022.jpg",
        alt: "Xenia - Tampak Samping",
      },
    ],
  },
  "luxio": {
    title: "Luxio",
    variant: "Premium Carpet",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Luxio dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Luxio/Foto dari Iyan.jpg",
        alt: "Luxio - Premium Carpet - Tampak Utama",
      },
      {
        src: "/images/Luxio/Foto dari Iyan(2).jpg",
        alt: "Luxio - Detail Jahitan",
      },
      {
        src: "/images/Luxio/Foto dari Iyan(5).jpg",
        alt: "Luxio - Tampak Samping",
      },
    ],
  },
  "destinator-2025": {
    title: "Destinator 2025",
    variant: "Premium Carpet",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Destinator 2025 dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Destinator 2025/IMG-20250902-WA0027.jpg",
        alt: "Destinator 2025 - Premium Carpet - Tampak Utama",
      },
      {
        src: "/images/Destinator 2025/IMG-20250902-WA0029.jpg",
        alt: "Destinator 2025 - Detail Jahitan",
      },
      {
        src: "/images/Destinator 2025/IMG-20250902-WA0030.jpg",
        alt: "Destinator 2025 - Tampak Samping",
      },
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
          {/* Gallery */}
          <Gallery images={product.images} />

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
            {/* Gallery - Sticky */}
            <div className="sticky top-8">
              <Gallery images={product.images} />
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
