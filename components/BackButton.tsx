"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    // Set flag that we're returning from detail page
    sessionStorage.setItem('fromDetailPage', 'true');
    console.log('Back button clicked, flag set');
    
    // Navigate back
    router.back();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-brand-line">
      <div className="px-4 py-4 lg:px-6">
        <button
          onClick={handleBack}
          className="transition-transform hover:scale-110"
          aria-label="Kembali"
        >
          <Image
            src="/static/Back-Button.png"
            alt="Back"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </button>
      </div>
    </header>
  );
}

