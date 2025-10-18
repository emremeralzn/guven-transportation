import dynamic from 'next/dynamic';

// Dynamic import for WhatsAppButton to reduce initial bundle size
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), {
  loading: () => null, // No loading state needed for floating button
  ssr: false
});

export default WhatsAppButton;
