import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { getSiteData, getServiceBySlug, getAllServiceSlugs } from '@/lib/data';
import { SiteData, Service } from '@/types';
import { CheckCircle, ArrowLeft, Phone, Mail } from 'lucide-react';

interface ServiceDetailProps {
  siteData: SiteData;
  service: Service;
}

export default function ServiceDetail({ siteData, service }: ServiceDetailProps) {
  const seo = {
    title: `${service.title} - Profesyonel Nakliyat Hizmeti | ${siteData.siteName}`,
    description: service.metaDescription || service.detailedDescription || service.description,
    keywords: service.keywords,
    canonical: `/hizmetlerimiz/${service.slug}`,
    image: service.image,
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.metaDescription || service.detailedDescription || service.description,
    "provider": {
      "@type": "Organization",
      "name": siteData.siteName,
      "telephone": siteData.contact?.phone || "",
      "email": siteData.contact?.email || "",
      "address": siteData.contact?.address || ""
    },
    "areaServed": "Turkey",
    "serviceType": service.title,
    "offers": {
      "@type": "Offer",
      "description": service.price,
      "priceCurrency": "TRY"
    },
    "image": service.image,
    "url": `https://${(siteData.siteName || "nakliyat").toLowerCase().replace(/\s+/g, '')}.com/hizmetlerimiz/${service.slug}`
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Layout siteData={siteData} seo={seo}>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary-600">
              Ana Sayfa
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/hizmetlerimiz" className="text-gray-500 hover:text-primary-600">
              Hizmetlerimiz
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{service.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/hizmetlerimiz"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tüm Hizmetlere Dön
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {service.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {service.detailedDescription || service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/iletisim"
                  className="btn-primary inline-flex items-center justify-center space-x-2"
                >
                  <span>Hızlı Teklif</span>
                  <Phone className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="btn-secondary inline-flex items-center justify-center space-x-2"
                >
                  <span>Hemen Ara</span>
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src={service.image}
                alt={`${service.title} hizmeti - Profesyonel nakliyat`}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hizmet Özellikleri
              </h2>
              <div className="space-y-4">
                {(service.features || []).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
              
              {/* Benefits Section */}
              {service.benefits && Array.isArray(service.benefits) && service.benefits.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Avantajlarımız
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Hizmet Bilgileri
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Hizmet Türü:</span>
                  <span className="text-gray-900">{service.title}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Fiyat:</span>
                  <span className="text-primary-600 font-semibold">{service.price}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Sigorta:</span>
                  <span className="text-green-600 font-medium">Dahil</span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-700">Hizmet Süresi:</span>
                  <span className="text-gray-900">1-3 Gün</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Hızlı İletişim</h4>
                <div className="space-y-3">
                  <a
                    href={`tel:${siteData.contact.phone}`}
                    className="flex items-center space-x-3 text-primary-600 hover:text-primary-700"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{siteData.contact.phone}</span>
                  </a>
                  <a
                    href={`mailto:${siteData.contact.email}`}
                    className="flex items-center space-x-3 text-primary-600 hover:text-primary-700"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{siteData.contact.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      {service.process && Array.isArray(service.process) && service.process.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Hizmet Sürecimiz
              </h2>
              <p className="text-lg text-gray-600">
                Bu hizmeti nasıl aldığınızı adım adım keşfedin
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(service.process || []).map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faq && Array.isArray(service.faq) && service.faq.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sık Sorulan Sorular
              </h2>
              <p className="text-lg text-gray-600">
                {service.title} hizmeti hakkında merak ettikleriniz
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {(service.faq || []).map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}


      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-padding text-center">
          <h2 className="text-3xl font-bold mb-6">
            Bu Hizmetten Yararlanmaya Hazır mısınız?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Hızlı teklif için hemen iletişime geçin ve size özel fiyat alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Keşif Talebi
            </Link>
            <a
              href={`tel:${siteData.contact.phone}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Hemen Ara
            </a>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllServiceSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const siteData = getSiteData();
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      siteData,
      service,
    },
  };
};
