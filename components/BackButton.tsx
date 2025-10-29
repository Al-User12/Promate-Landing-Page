"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BackButton() {
  const router = useRouter();

  useEffect(() => {
    // Save scroll position when leaving page
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const handleBack = () => {
    // Save current scroll is 0 (we're on detail page)
    sessionStorage.setItem('fromDetailPage', 'true');
    router.back();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-brand-line">
      <div className="px-4 py-4 lg:px-6">
        <button
          onClick={handleBack}
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
          <span className="text-sm font-medium">Kembali</span>
        </button>
      </div>
    </header>
  );
}

