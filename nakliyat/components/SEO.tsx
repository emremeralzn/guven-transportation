import Head from 'next/head';
import { SEOProps, SiteData } from '@/types';

interface SEOComponentProps {
  siteData: SiteData;
  seo: SEOProps;
}

export default function SEO({ siteData, seo }: SEOComponentProps) {
  const {
    title = siteData.siteName,
    description = siteData.description,
    keywords = siteData.keywords,
    canonical,
    image = siteData.logo,
    type = 'website',
    publishedTime,
    modifiedTime,
    author = siteData.business.name,
    section,
    tags = []
  } = seo;

  const fullTitle = title === siteData.siteName ? title : `${title} | ${siteData.siteName}`;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  // Enhanced JSON-LD with more structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#business`,
    name: siteData.business.name,
    description: description,
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: siteData.logo,
      width: 200,
      height: 200
    },
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630
    },
    telephone: siteData.contact.phone,
    email: siteData.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteData.contact.address,
      addressCountry: 'TR'
    },
    foundingDate: siteData.business.foundingYear,
    numberOfEmployees: siteData.business.employees,
    areaServed: siteData.business.serviceAreas.map(area => ({
      '@type': 'City',
      name: area
    })),
    serviceType: siteData.business.type,
    sameAs: [
      siteData.social.facebook,
      siteData.social.instagram,
      siteData.social.twitter,
      siteData.social.linkedin
    ].filter(Boolean),
    openingHours: [
      'Mo-Su 00:00-23:59'
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Nakliyat Hizmetleri',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Evden Eve Nakliyat'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ofis Taşıma'
          }
        }
      ]
    }
  };

  // Breadcrumb structured data
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: siteUrl
      }
    ]
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/favicon.svg" />
      <link rel="manifest" href="/manifest.json" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteData.siteName} />
      <meta property="og:locale" content="tr_TR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta name="author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Performance and Security */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta name="referrer" content="origin-when-cross-origin" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://res.cloudinary.com" />
      <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </Head>
  );
}
