import dynamic from 'next/dynamic';

// Dynamic import for FAQ to reduce initial bundle size
const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-6"></div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="border-b border-gray-200 pb-4">
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: false
});

export default FAQ;
