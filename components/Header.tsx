import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-black/95 backdrop-blur-sm border-b border-brand-line">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image
              src="/placeholders/placeholder-logo.svg"
              alt="Promate Logo"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <span className="text-xl font-bold">Promate</span>
        </Link>
        <Rating rating={4.9} />
      </div>
    </header>
  );
}

