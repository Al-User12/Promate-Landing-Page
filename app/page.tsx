import Hero from "@/components/Hero";
import BrandSection from "@/components/BrandSection";
import CtaRibbon from "@/components/CtaRibbon";
import LocationCard from "@/components/LocationCard";

const brandsData = [
  {
    brandName: "Toyota",
    brandLogo: "/placeholders/placeholder-logo.svg",
    products: [
      {
        slug: "land-cruiser-300-gr-sport",
        model: "Land Cruiser 300 GR Sport",
        variant: "Black Marble + Coil Black",
        image: "/placeholders/placeholder.svg",
      },
      {
        slug: "alphard-2023",
        model: "Alphard 2023",
        variant: "Black Leather + Coil Black",
        image: "/placeholders/placeholder.svg",
      },
      {
        slug: "toyota-black-fire",
        model: "Toyota",
        variant: "Black Fire + Coil Black",
        image: "/placeholders/placeholder.svg",
      },
      {
        slug: "toyota-maroon",
        model: "Toyota",
        variant: "Maroon + Coil Maroon",
        image: "/placeholders/placeholder.svg",
      },
      {
        slug: "toyota-coffee",
        model: "Toyota",
        variant: "Coffee + Coil Coffee",
        image: "/placeholders/placeholder.svg",
      },
    ],
  },
  {
    brandName: "Mitsubishi",
    brandLogo: "/placeholders/placeholder-logo.svg",
    products: [
      {
        slug: "xpander-2023",
        model: "Xpander 2023",
        variant: "Black Marble + Coil Black",
        image: "/placeholders/placeholder.svg",
      },
      {
        slug: "pajero-sport-2022",
        model: "Pajero Sport 2022",
        variant: "Black Leather + Coil Orange",
        image: "/placeholders/placeholder.svg",
      },
      {
        slug: "mitsubishi-milk-tea",
        model: "Mitsubishi",
        variant: "Milk Tea + Coil Beige",
        image: "/placeholders/placeholder.svg",
      },
    ],
  },
  {
    brandName: "Honda",
    brandLogo: "/placeholders/placeholder-logo.svg",
    products: [
      {
        slug: "br-v-2023",
        model: "BR-V 2023",
        variant: "Black Marble + Coil Black",
        image: "/placeholders/placeholder.svg",
      },
      {
        slug: "crv-2022",
        model: "CR-V 2022",
        variant: "Custom + Coil Black",
        image: "/placeholders/placeholder.svg",
      },
      {
        slug: "honda-carbon",
        model: "Honda",
        variant: "Carbon + Coil Black",
        image: "/placeholders/placeholder.svg",
      },
      {
        slug: "honda-maroon",
        model: "Honda",
        variant: "Maroon",
        image: "/placeholders/placeholder.svg",
      },
      {
        slug: "honda-red-valet",
        model: "Honda",
        variant: "Red Valet + Coil Red",
        image: "/placeholders/placeholder.svg",
      },
    ],
  },
  {
    brandName: "Daihatsu",
    brandLogo: "/placeholders/placeholder-logo.svg",
    products: [
      {
        slug: "daihatsu-black-marble",
        model: "Daihatsu",
        variant: "Black Marble + Coil Black",
        image: "/placeholders/placeholder.svg",
      },
      {
        slug: "daihatsu-black-fire",
        model: "Daihatsu",
        variant: "Black Fire + Coil Black",
        image: "/placeholders/placeholder.svg",
      },
    ],
  },
  {
    brandName: "Wuling",
    brandLogo: "/placeholders/placeholder-logo.svg",
    products: [
      {
        slug: "almaz",
        model: "Almaz",
        variant: "Black Marble + Coil Black",
        image: "/placeholders/placeholder.svg",
      },
      {
        slug: "cortez-2022",
        model: "Cortez 2022",
        variant: "Custom + Coil Black",
        image: "/placeholders/placeholder.svg",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        
        {/* Product Showcase Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="px-4 lg:px-6 xl:px-8 mb-8 lg:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Gak Perlu Bingung
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed max-w-2xl">
              Geser aja, liat contoh karpet Promate di berbagai tipe mobil biar makin yakin sebelum pasang.
            </p>
          </div>
            
          <div className="space-y-8 lg:space-y-12">
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
          href="https://wa.me/6281234567890?text=Halo%20Promate%2C%20saya%20ingin%20tanya%20tentang%20karpet%20mobil%20premium"
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

