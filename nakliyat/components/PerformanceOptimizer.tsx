import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks: Array<{ href: string; as: string; type?: string; crossOrigin?: string }> = [
      // Add other critical resources here if needed
    ];

    preloadLinks.forEach(({ href, as, type, crossOrigin }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
    });

    // Service Worker registration for caching
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    // Intersection Observer for lazy loading with better performance
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('animate-fade-in-up');
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Observe elements with lazy class
    const lazyElements = document.querySelectorAll('.lazy-animate');
    lazyElements.forEach((el) => observer.observe(el));

    // Preload critical images
    const criticalImages = document.querySelectorAll('img[data-priority="true"]');
    criticalImages.forEach((img) => {
      const imageElement = img as HTMLImageElement;
      if (imageElement.src) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = imageElement.src;
        link.as = 'image';
        document.head.appendChild(link);
      }
    });

    // Resource hints for external domains
    const resourceHints = [
      { href: 'https://res.cloudinary.com', rel: 'preconnect' },
      { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
      { href: 'https://fonts.gstatic.com', rel: 'preconnect', crossOrigin: 'anonymous' },
    ];

    resourceHints.forEach(({ href, rel, crossOrigin }) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
