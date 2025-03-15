import { useEffect, useState } from "react";

/**
 * Custom hook for lazy loading components
 */
export function useLazyLoad<T>(
  importFn: () => Promise<{ default: T }>,
  options = { threshold: 0.1 }
): T | null {
  const [component, setComponent] = useState<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          importFn().then((mod) => {
            setComponent(mod.default);
          });
          observer.disconnect();
        }
      },
      { threshold: options.threshold }
    );

    const element = document.getElementById("lazy-load-trigger");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.disconnect();
    };
  }, [importFn, options.threshold]);

  return component;
}

/**
 * Optimize image loading priority
 * @param src Image source
 * @returns Object with optimized loading attributes
 */
export function optimizeImageLoading(src: string) {
  return {
    src,
    loading: "lazy" as const,
    decoding: "async" as const,
  };
}

/**
 * Defer non-critical JavaScript
 * @param callback Function to defer
 */
export function deferNonCritical(callback: () => void): void {
  if (typeof window !== "undefined") {
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(callback);
    } else {
      setTimeout(callback, 1);
    }
  }
}
