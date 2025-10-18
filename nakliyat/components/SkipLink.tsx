import Link from 'next/link';

export default function SkipLink() {
  return (
    <>
      <Link
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200"
        aria-label="Ana içeriğe geç"
      >
        Ana içeriğe geç
      </Link>
      <Link
        href="#navigation"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-primary-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200"
        aria-label="Navigasyona geç"
      >
        Navigasyona geç
      </Link>
    </>
  );
}
