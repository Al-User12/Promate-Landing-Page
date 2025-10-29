import { Metadata } from "next";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import CtaRibbon from "@/components/CtaRibbon";

// Product data with multiple images per product
const productData: Record<string, any> = {
  "land-cruiser-300-gr-sport": {
    title: "Land Cruiser 300 GR Sport",
    variant: "Black Marble + Coil Black",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Land Cruiser 300 GR Sport dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Thumbnail/Land Cruiser 300 GR Sport.png",
        alt: "Land Cruiser 300 GR Sport - Black Marble Coil Black - Thumbnail",
      },
      {
        src: "/images/Toyota/Land Cruiser 300 GR Sport/Foto dari Iyan (7) 1.png",
        alt: "Land Cruiser 300 GR Sport - Tampak Utama",
      },
      {
        src: "/images/Toyota/Land Cruiser 300 GR Sport/Foto dari Iyan (8) 1.png",
        alt: "Land Cruiser 300 GR Sport - Detail Jahitan",
      },
      {
        src: "/images/Toyota/Land Cruiser 300 GR Sport/Foto dari Iyan (9) 1.png",
        alt: "Land Cruiser 300 GR Sport - Tampak Samping",
      },
    ],
  },
  "vellfire-hybrid": {
    title: "Vellfire Hybrid",
    variant: "Black Fire + Coil Black",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Vellfire Hybrid dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Thumbnail/Vellfire Hybrid.png",
        alt: "Vellfire Hybrid - Black Fire Coil Black - Thumbnail",
      },
      {
        src: "/images/Toyota/Vellfire Hybrid/WhatsApp Image 2024-08-14 at 12.50.40 (2).jpeg",
        alt: "Vellfire Hybrid - Tampak Utama",
      },
      {
        src: "/images/Toyota/Vellfire Hybrid/WhatsApp Image 2024-08-14 at 12.50.40.jpeg",
        alt: "Vellfire Hybrid - Detail Jahitan",
      },
      {
        src: "/images/Toyota/Vellfire Hybrid/WhatsApp Image 2024-08-14 at 12.50.41 (2).jpeg",
        alt: "Vellfire Hybrid - Tampak Samping",
      },
    ],
  },
  "innova-2005-2015": {
    title: "Innova 2005 - 2015",
    variant: "Maroon + Coil Maroon",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Innova 2005 - 2015 dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Thumbnail/Innova 2005 - 2015.png",
        alt: "Innova 2005 - 2015 - Maroon Coil Maroon - Thumbnail",
      },
      {
        src: "/images/Toyota/Innova 2005 - 2015/Foto dari Iyan(2).jpg",
        alt: "Innova 2005 - 2015 - Tampak Utama",
      },
      {
        src: "/images/Toyota/Innova 2005 - 2015/Foto dari Iyan(4).jpg",
        alt: "Innova 2005 - 2015 - Detail Jahitan",
      },
      {
        src: "/images/Toyota/Innova 2005 - 2015/Foto dari Iyan(6).jpg",
        alt: "Innova 2005 - 2015 - Tampak Samping",
      },
    ],
  },
  "agya": {
    title: "Agya",
    variant: "Coffee + Coil Coffee",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Agya dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Thumbnail/Agya.png",
        alt: "Agya - Coffee Coil Coffee - Thumbnail",
      },
      {
        src: "/images/Toyota/Agya/048acc9d-e987-48d0-9f81-bccf69297411.jpg",
        alt: "Agya - Tampak Utama",
      },
      {
        src: "/images/Toyota/Agya/11aa4dec-25c3-4871-ab3c-6112b00e51b7.jpg",
        alt: "Agya - Detail Jahitan",
      },
      {
        src: "/images/Toyota/Agya/9b5aa12b-8f8b-41e2-b7fd-695f701ce0e2.jpg",
        alt: "Agya - Tampak Samping",
      },
    ],
  },
  "freed-2014": {
    title: "Freed 2014",
    variant: "Carbon + Coil Black",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Freed 2014 dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Thumbnail/Freed 2014.png",
        alt: "Freed 2014 - Carbon Coil Black - Thumbnail",
      },
      {
        src: "/images/Honda/Freed 2014/Foto dari Iyan(1).jpg",
        alt: "Freed 2014 - Tampak Utama",
      },
      {
        src: "/images/Honda/Freed 2014/Foto dari Iyan(10).jpg",
        alt: "Freed 2014 - Detail Jahitan",
      },
      {
        src: "/images/Honda/Freed 2014/Foto dari Iyan(7).jpg",
        alt: "Freed 2014 - Tampak Samping",
      },
    ],
  },
  "jazz-gk5": {
    title: "Jazz GK5",
    variant: "Maroon",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Jazz GK5 dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Thumbnail/Jazz GK5.png",
        alt: "Jazz GK5 - Maroon - Thumbnail",
      },
      {
        src: "/images/Honda/Jazz GK5/IMG-20250908-WA0043.jpg",
        alt: "Jazz GK5 - Tampak Utama",
      },
      {
        src: "/images/Honda/Jazz GK5/IMG-20250908-WA0047.jpg",
        alt: "Jazz GK5 - Detail Jahitan",
      },
      {
        src: "/images/Honda/Jazz GK5/_storage_emulated_0_Android_media_com.whatsapp.w4b_WhatsApp Business_Media_WhatsApp Business Images_IMG-20250908-WA0048.jpg",
        alt: "Jazz GK5 - Tampak Samping",
      },
    ],
  },
  "cr-v-turbo": {
    title: "CR-V Turbo",
    variant: "Red Valet + Coil Red",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus CR-V Turbo dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Thumbnail/CR-V Turbo.png",
        alt: "CR-V Turbo - Red Valet Coil Red - Thumbnail",
      },
      {
        src: "/images/Honda/CR-V Turbo/Foto dari Iyan.jpg",
        alt: "CR-V Turbo - Tampak Utama",
      },
      {
        src: "/images/Honda/CR-V Turbo/Foto dari Iyan(4).jpg",
        alt: "CR-V Turbo - Detail Jahitan",
      },
      {
        src: "/images/Honda/CR-V Turbo/Foto dari Iyan(5).jpg",
        alt: "CR-V Turbo - Tampak Samping",
      },
    ],
  },
  "br-v-2022": {
    title: "BR-V 2022",
    variant: "Black Marble + Coil Black",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus BR-V 2022 dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Thumbnail/BR-V 2022.png",
        alt: "BR-V 2022 - Black Marble Coil Black - Thumbnail",
      },
      {
        src: "/images/Honda/BR-V 2022/IMG-20250829-WA0010.jpg",
        alt: "BR-V 2022 - Tampak Utama",
      },
      {
        src: "/images/Honda/BR-V 2022/IMG-20250829-WA0015.jpg",
        alt: "BR-V 2022 - Detail Jahitan",
      },
      {
        src: "/images/Honda/BR-V 2022/IMG-20250829-WA0016.jpg",
        alt: "BR-V 2022 - Tampak Samping",
      },
    ],
  },
  "xpander-2017-now": {
    title: "Xpander 2017-Now",
    variant: "Black Marble + Coil Black",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Xpander 2017-Now dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Thumbnail/Xpander 2017-Now.png",
        alt: "Xpander 2017-Now - Black Marble Coil Black - Thumbnail",
      },
      {
        src: "/images/Mitsubihshi/Xpander 2017-Now/IMG-20250902-WA0041.jpg",
        alt: "Xpander 2017-Now - Tampak Utama",
      },
      {
        src: "/images/Mitsubihshi/Xpander 2017-Now/IMG-20250902-WA0042.jpg",
        alt: "Xpander 2017-Now - Detail Jahitan",
      },
      {
        src: "/images/Mitsubihshi/Xpander 2017-Now/IMG-20250902-WA0045.jpg",
        alt: "Xpander 2017-Now - Tampak Samping",
      },
    ],
  },
  "destinator-2025": {
    title: "Destinator 2025",
    variant: "Milk Tea + Coil Beige",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Destinator 2025 dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Thumbnail/Destinator 2025.png",
        alt: "Destinator 2025 - Milk Tea Coil Beige - Thumbnail",
      },
      {
        src: "/images/Mitsubihshi/Destinator 2025/IMG-20250902-WA0027.jpg",
        alt: "Destinator 2025 - Tampak Utama",
      },
      {
        src: "/images/Mitsubihshi/Destinator 2025/IMG-20250902-WA0029.jpg",
        alt: "Destinator 2025 - Detail Jahitan",
      },
      {
        src: "/images/Mitsubihshi/Destinator 2025/IMG-20250902-WA0030.jpg",
        alt: "Destinator 2025 - Tampak Samping",
      },
    ],
  },
  "luxio-2010": {
    title: "Luxio 2010",
    variant: "Black Marble + Coil Black",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Luxio 2010 dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Thumbnail/Luxio 2010.png",
        alt: "Luxio 2010 - Black Marble Coil Black - Thumbnail",
      },
      {
        src: "/images/Daihatsu/Luxio/Foto dari Iyan.jpg",
        alt: "Luxio 2010 - Tampak Utama",
      },
      {
        src: "/images/Daihatsu/Luxio/Foto dari Iyan(2).jpg",
        alt: "Luxio 2010 - Detail Jahitan",
      },
      {
        src: "/images/Daihatsu/Luxio/Foto dari Iyan(5).jpg",
        alt: "Luxio 2010 - Tampak Samping",
      },
    ],
  },
  "xenia": {
    title: "Xenia",
    variant: "Black Marble + Coil Black",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Xenia dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Thumbnail/Xenia.png",
        alt: "Xenia - Black Marble Coil Black - Thumbnail",
      },
      {
        src: "/images/Daihatsu/Xenia/IMG-20250904-WA0019.jpg",
        alt: "Xenia - Tampak Utama",
      },
      {
        src: "/images/Daihatsu/Xenia/IMG-20250904-WA0021.jpg",
        alt: "Xenia - Detail Jahitan",
      },
      {
        src: "/images/Daihatsu/Xenia/IMG-20250904-WA0022.jpg",
        alt: "Xenia - Tampak Samping",
      },
    ],
  },
  "terios": {
    title: "Terios",
    variant: "Black Fire + Coil Black",
    description: [
      "Upgrade tampilan kabin lo ke level berikutnya dengan karpet premium khusus Terios dari Promate. Dibuat pakai teknologi terbaru yang presisi banget, setiap jahitan ngikutin lekukan kabin mobil lo dengan presisi yang sempurna dari ujung ke ujung.",
      "Material 7D premium-nya bukan cuma bikin interior keliatan lebih elegan, tapi juga gampang dibershin. Ada lapisan waterproof yang siap ngelindungin lantai mobil dari air, debu, atau kotoran tanpa bikin lembab.",
      "Cocok buat lo yang pengen kabin tetap rapi, mewah, tapi fungsional. Setiap karpet Promate dibuat khusus sesuai mobil lo, bukan karpet universal yang asal tempel.",
    ],
    images: [
      {
        src: "/images/Thumbnail/Terios.png",
        alt: "Terios - Black Fire Coil Black - Thumbnail",
      },
      {
        src: "/images/Daihatsu/Terios/Foto dari Iyan(1).jpg",
        alt: "Terios - Tampak Utama",
      },
      {
        src: "/images/Daihatsu/Terios/Foto dari Iyan(3).jpg",
        alt: "Terios - Detail Jahitan",
      },
      {
        src: "/images/Daihatsu/Terios/Foto dari Iyan(4).jpg",
        alt: "Terios - Tampak Samping",
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
          href={`https://wa.me/6282125189508?text=Halo%20Promate%2C%20saya%20mau%20tanya%20tentang%20karpet%20mobil%20saya`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-brand-wa hover:bg-green-600 text-white p-4 rounded-full shadow-card transition-all hover:scale-110"
          aria-label="Chat via WhatsApp"
        >
          <Image
            src="/static/Logo-WA.png"
            alt="WhatsApp"
            width={28}
            height={28}
            className="w-7 h-7"
          />
        </a>

        <CtaRibbon />
      </main>
    </>
  );
}
