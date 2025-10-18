import dynamic from 'next/dynamic';

// Dynamic import for ContactForm to reduce initial bundle size
const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-6"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false
});

export default ContactForm;
