import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
      return;
    }

    // Performance Observer for Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        const metrics: PerformanceMetrics = {};
        
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              metrics.fcp = entry.startTime;
            }
            break;
          case 'largest-contentful-paint':
            metrics.lcp = entry.startTime;
            break;
          case 'first-input':
            metrics.fid = (entry as any).processingStart - entry.startTime;
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              metrics.cls = (entry as any).value;
            }
            break;
          case 'navigation':
            metrics.ttfb = (entry as any).responseStart - (entry as any).requestStart;
            break;
        }

        // Send metrics to analytics (replace with your analytics service)
        if (Object.keys(metrics).length > 0) {
          console.log('Performance Metric:', metrics);
          // Example: sendToAnalytics(metrics);
        }
      });
    });

    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      observer.observe({ entryTypes: ['paint', 'navigation'] });
    }

    // Resource timing analysis
    const analyzeResources = () => {
      const resources = performance.getEntriesByType('resource');
      
      const slowResources = resources.filter((resource: any) => {
        const duration = resource.responseEnd - resource.startTime;
        return duration > 1000; // Resources taking more than 1 second
      });

      if (slowResources.length > 0) {
        console.warn('Slow resources detected:', slowResources);
      }
    };

    // Analyze resources after page load
    if (document.readyState === 'complete') {
      analyzeResources();
    } else {
      window.addEventListener('load', analyzeResources);
    }

    // Memory usage monitoring (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      console.log('Memory usage:', {
        used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
        total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
        limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
