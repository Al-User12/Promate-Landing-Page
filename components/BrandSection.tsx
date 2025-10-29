import Image from "next/image";
import ProductCard from "./ProductCard";

interface Product {
  slug: string;
  model: string;
  variant: string;
  image: string;
}

interface BrandSectionProps {
  brandName: string;
  brandLogo: string;
  products: Product[];
}

export default function BrandSection({ brandName, brandLogo, products }: BrandSectionProps) {
  return (
    <div>
      {/* Brand Logo */}
      <div className="px-4 lg:px-6 xl:px-8 mb-4 lg:mb-6">
        <div className="relative w-14 h-10 md:w-16 md:h-12 lg:w-20 lg:h-14">
          <Image
            src={brandLogo}
            alt={`${brandName} logo`}
            fill
            className="object-contain object-left"
          />
        </div>
      </div>
      
      {/* Mobile: Horizontal Scrollable */}
      <div className="lg:hidden overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 pb-2">
          {products.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </div>

      {/* Desktop: Grid Layout */}
      <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 px-6 xl:px-8">
        {products.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
    </div>
  );
}

