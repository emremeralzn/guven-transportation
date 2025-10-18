import { ReactNode, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import SkipLink from './SkipLink';
import ErrorBoundary from './ErrorBoundary';
import PerformanceOptimizer from './PerformanceOptimizer';
import PerformanceMonitor from './PerformanceMonitor';
import NotificationBanner from './NotificationBanner';
import { SiteData, SEOProps } from '@/types';

// Dynamic imports for non-critical components
const WhatsAppButton = dynamic(() => import('./WhatsAppButton'), {
  ssr: false
});

const ScrollToTop = dynamic(() => import('./ScrollToTop'), {
  ssr: false
});

interface LayoutProps {
  children: ReactNode;
  siteData: SiteData;
  seo?: SEOProps;
}

export default function Layout({ children, siteData, seo }: LayoutProps) {
  const [showNotification, setShowNotification] = useState(true);

  return (
    <ErrorBoundary>
      <SEO siteData={siteData} seo={seo || {}} />
      <PerformanceOptimizer />
      <PerformanceMonitor />
      <div className="min-h-screen flex flex-col">
        <SkipLink />
        {showNotification && (
          <NotificationBanner
            message="🚚 Ücretsiz keşif için hemen arayın! 7/24 hizmet"
            phone={siteData.contact.phone}
            onClose={() => setShowNotification(false)}
          />
        )}
        <Header siteData={siteData} />
        <main id="main-content" className="flex-grow" role="main">
          {children}
        </main>
        <Footer siteData={siteData} />
        <WhatsAppButton 
          phone={siteData.contact.whatsapp}
          message={siteData.contact.whatsappMessage}
        />
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}
