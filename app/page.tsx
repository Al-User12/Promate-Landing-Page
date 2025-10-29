import Image from "next/image";
import Hero from "@/components/Hero";
import BrandSection from "@/components/BrandSection";
import LocationCard from "@/components/LocationCard";
import CtaRibbon from "@/components/CtaRibbon";

const brandsData = [
  {
    brandName: "Toyota",
    brandLogo: "/images/Logo/Logo-Toyota.png",
    products: [
      {
        slug: "land-cruiser-300-gr-sport",
        model: "Land Cruiser 300 GR Sport",
        variant: "Black Marble + Coil Black",
        image: "/images/Thumbnail/Land Cruiser 300 GR Sport.png",
      },
      {
        slug: "vellfire-hybrid",
        model: "Vellfire Hybrid",
        variant: "Black Fire + Coil Black",
        image: "/images/Thumbnail/Vellfire Hybrid.png",
      },
      {
        slug: "innova-2005-2015",
        model: "Innova 2005 - 2015",
        variant: "Maroon + Coil Maroon",
        image: "/images/Thumbnail/Innova 2005 - 2015.png",
      },
      {
        slug: "agya",
        model: "Agya",
        variant: "Coffee + Coil Coffee",
        image: "/images/Thumbnail/Agya.png",
      },
    ],
  },
  {
    brandName: "Honda",
    brandLogo: "/images/Logo/Logo-Honda.png",
    products: [
      {
        slug: "freed-2014",
        model: "Freed 2014",
        variant: "Carbon + Coil Black",
        image: "/images/Thumbnail/Freed 2014.png",
      },
      {
        slug: "jazz-gk5",
        model: "Jazz GK5",
        variant: "Maroon",
        image: "/images/Thumbnail/Jazz GK5.png",
      },
      {
        slug: "cr-v-turbo",
        model: "CR-V Turbo",
        variant: "Red Valet + Coil Red",
        image: "/images/Thumbnail/CR-V Turbo.png",
      },
      {
        slug: "br-v-2022",
        model: "BR-V 2022",
        variant: "Black Marble + Coil Black",
        image: "/images/Thumbnail/BR-V 2022.png",
      },
    ],
  },
  {
    brandName: "Mitsubishi",
    brandLogo: "/images/Logo/Logo-Mitsubishi.png",
    products: [
      {
        slug: "xpander-2017-now",
        model: "Xpander 2017-Now",
        variant: "Black Marble + Coil Black",
        image: "/images/Thumbnail/Xpander 2017-Now.png",
      },
      {
        slug: "destinator-2025",
        model: "Destinator 2025",
        variant: "Milk Tea + Coil Beige",
        image: "/images/Thumbnail/Destinator 2025.png",
      },
    ],
  },
  {
    brandName: "Daihatsu",
    brandLogo: "/images/Logo/Logo-Daihatsu.png",
    products: [
      {
        slug: "luxio-2010",
        model: "Luxio 2010",
        variant: "Black Marble + Coil Black",
        image: "/images/Thumbnail/Luxio 2010.png",
      },
      {
        slug: "xenia",
        model: "Xenia",
        variant: "Black Marble + Coil Black",
        image: "/images/Thumbnail/Xenia.png",
      },
      {
        slug: "terios",
        model: "Terios",
        variant: "Black Fire + Coil Black",
        image: "/images/Thumbnail/Terios.png",
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
              Gak Perlu Bingung
            </h2>
            <p className="text-sm lg:text-base text-gray-400">
            Geser aja, liat contoh karpet Promate di berbagai tipe mobil biar makin yakin sebelum pasang.
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
          className="fixed bottom-6 right-6 z-50 transition-all hover:scale-110"
          aria-label="Chat via WhatsApp"
        >
          <Image
            src="/static/Logo-WA.png"
            alt="WhatsApp"
            width={56}
            height={56}
            className="w-14 h-14"
          />
        </a>
      </main>
    </>
  );
}
