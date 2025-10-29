"use client";

import { useEffect, useLayoutEffect } from "react";

export default function ScrollRestoration() {
  // Disable default scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Restore scroll position after navigation
  useLayoutEffect(() => {
    const fromDetailPage = sessionStorage.getItem('fromDetailPage');
    const savedPosition = sessionStorage.getItem('homeScrollPosition');

    if (fromDetailPage === 'true' && savedPosition) {
      const scrollY = parseInt(savedPosition, 10);
      console.log('Restoring scroll to:', scrollY);
      
      // Try multiple times to ensure it works
      const restoreScroll = () => {
        window.scrollTo(0, scrollY);
      };

      // Immediate
      restoreScroll();

      // After animation frame
      requestAnimationFrame(() => {
        restoreScroll();
      });

      // Fallback after small delay
      setTimeout(() => {
        restoreScroll();
        console.log('Scroll restored to:', window.scrollY);
      }, 50);

      // Clean up flags after a delay
      setTimeout(() => {
        sessionStorage.removeItem('fromDetailPage');
      }, 1000);
    }
  }, []);

  // Save scroll position continuously
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      // Debounce scroll save
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        sessionStorage.setItem('homeScrollPosition', window.scrollY.toString());
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}

