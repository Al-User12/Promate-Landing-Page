"use client";

import { useEffect } from "react";

export default function ScrollRestoration() {
  useEffect(() => {
    // Check if returning from detail page
    const fromDetailPage = sessionStorage.getItem('fromDetailPage');
    const savedPosition = sessionStorage.getItem('scrollPosition');

    if (fromDetailPage === 'true' && savedPosition) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition));
        sessionStorage.removeItem('fromDetailPage');
      }, 100);
    }
  }, []);

  // Save scroll position when navigating away
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}

