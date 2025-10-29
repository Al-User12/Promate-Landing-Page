import Hero from "@/components/Hero";
import BrandSection from "@/components/BrandSection";
import LocationCard from "@/components/LocationCard";
import CtaRibbon from "@/components/CtaRibbon";

const brandsData = [
  {
    brandName: "Toyota",
    brandLogo: "/placeholders/placeholder-logo.svg",
    products: [
      {
        slug: "vellfire-hybrid",
        model: "Vellfire Hybrid",
        variant: "Premium Carpet",
        image: "/images/Vellfire Hybrid/WhatsApp Image 2024-08-14 at 12.50.40 (2).jpeg",
      },
      {
        slug: "innova-2005-2015",
        model: "Innova 2005 - 2015",
        variant: "Custom Carpet",
        image: "/images/Innova 2005 - 2015/Foto dari Iyan(2).jpg",
      },
    ],
  },
  {
    brandName: "Honda",
    brandLogo: "/placeholders/placeholder-logo.svg",
    products: [
      {
        slug: "br-v-2022",
        model: "BR-V 2022",
        variant: "Premium Carpet",
        image: "/images/BR-V 2022/IMG-20250829-WA0010.jpg",
      },
      {
        slug: "cr-v-turbo",
        model: "CR-V Turbo",
        variant: "Custom Carpet",
        image: "/images/CR-V Turbo/Foto dari Iyan.jpg",
      },
      {
        slug: "freed-2014",
        model: "Freed 2014",
        variant: "Premium Carpet",
        image: "/images/Freed 2014/Foto dari Iyan(1).jpg",
      },
      {
        slug: "jazz-gk5",
        model: "Jazz GK5",
        variant: "Custom Carpet",
        image: "/images/Jazz GK5/IMG-20250908-WA0043.jpg",
      },
    ],
  },
  {
    brandName: "Mitsubishi",
    brandLogo: "/placeholders/placeholder-logo.svg",
    products: [
      {
        slug: "xpander-2017-now",
        model: "Xpander 2017-Now",
        variant: "Premium Carpet",
        image: "/images/Xpander 2017-Now/IMG-20250902-WA0041.jpg",
      },
    ],
  },
  {
    brandName: "Daihatsu",
    brandLogo: "/placeholders/placeholder-logo.svg",
    products: [
      {
        slug: "agya",
        model: "Agya",
        variant: "Custom Carpet",
        image: "/images/Agya/048acc9d-e987-48d0-9f81-bccf69297411.jpg",
      },
      {
        slug: "terios",
        model: "Terios",
        variant: "Premium Carpet",
        image: "/images/Terios/Foto dari Iyan(1).jpg",
      },
      {
        slug: "xenia",
        model: "Xenia",
        variant: "Custom Carpet",
        image: "/images/Xenia/IMG-20250904-WA0019.jpg",
      },
      {
        slug: "luxio",
        model: "Luxio",
        variant: "Premium Carpet",
        image: "/images/Luxio/Foto dari Iyan.jpg",
      },
    ],
  },
  {
    brandName: "Wuling",
    brandLogo: "/placeholders/placeholder-logo.svg",
    products: [
      {
        slug: "destinator-2025",
        model: "Destinator 2025",
        variant: "Premium Carpet",
        image: "/images/Destinator 2025/IMG-20250902-WA0027.jpg",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        {/* Product Showcase */}
        <section className="px-4 lg:px-6 py-12 lg:py-16 space-y-12 lg:space-y-16">
          <div className="text-center space-y-2 lg:space-y-3">
            <h2
              className="text-2xl lg:text-4xl"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              Katalog Promate
            </h2>
            <p className="text-sm lg:text-base text-gray-400">
              Karpet mobil premium untuk berbagai merek
            </p>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {brandsData.map((brand, index) => (
              <BrandSection
                key={index}
                brandName={brand.brandName}
                brandLogo={brand.brandLogo}
                products={brand.products}
              />
            ))}
          </div>
        </section>

        <LocationCard />
        <CtaRibbon />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/6282125189508?text=Halo%20Promate%2C%20saya%20mau%20tanya%20tentang%20karpet%20mobil%20saya"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-brand-wa hover:bg-green-600 text-white p-4 rounded-full shadow-card transition-all hover:scale-110"
          aria-label="Chat via WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </main>
    </>
  );
}
