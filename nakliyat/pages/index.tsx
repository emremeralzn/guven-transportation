import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import HeroSlider from '@/components/HeroSlider';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { getSiteData, getServicesData, getTestimonialsData, getFAQData } from '@/lib/data';
import { SiteData, ServicesData, TestimonialsData, FAQData } from '@/types';

// Dynamic imports for non-critical components
const FAQ = dynamic(() => import('@/components/dynamic/FAQ'), {
  ssr: false
});

interface HomeProps {
  siteData: SiteData;
  servicesData: ServicesData;
  testimonialsData: TestimonialsData;
  faqData: FAQData;
}

export default function Home({ siteData, servicesData, testimonialsData, faqData }: HomeProps) {
  const featuredServices = servicesData.services.slice(0, 3);
  const featuredTestimonials = testimonialsData.testimonials.slice(0, 3);

  const seo = {
    title: `${siteData.siteName} - ${siteData.tagline}`,
    description: siteData.description,
    keywords: siteData.keywords,
    canonical: '/',
  };

  const heroSlides = [
    {
      id: 1,
      title: "Güvenilir Nakliyat Hizmetleri",
      subtitle: "Eşyalarınızı Güvenle Taşıyoruz",
      description: "Profesyonel ekibimiz ve modern araçlarımızla evden eve, ofis taşıma ve şehirler arası nakliyat hizmetleri sunuyoruz. 15 yıllık deneyimimizle güvenli taşımacılık.",
      backgroundImage: "https://res.cloudinary.com/dtgayqxdr/image/upload/v1760793338/guvenilir-nakliyat_ybmaa5.png",
      ctaText: "Hızlı Teklif",
      ctaLink: "/iletisim",
      features: ["Güvenli Taşıma", "Hızlı Hizmet", "Sigortalı", "Profesyonel Ekip"],
      highlightTitle: "Güvenli Taşıma",
      highlightDescription: "Modern araçlarımız ve deneyimli ekibimizle"
    },
    {
      id: 2,
      title: "Ofis Taşıma Uzmanı",
      subtitle: "İşinizi Aksatmadan Taşıyoruz",
      description: "Ofis taşıma konusunda uzman ekibimiz, iş yerinizin faaliyetlerini aksatmadan hızlı ve düzenli taşıma hizmeti sunar. Teknik ekipmanlarınızı özenle koruruz.",
      backgroundImage: "https://res.cloudinary.com/dtgayqxdr/image/upload/v1760793200/ofistasima_gqm2tn.png",
      ctaText: "Ofis Taşıma",
      ctaLink: "/hizmetlerimiz/ofis-tasima",
      features: ["Hafta Sonu Taşıma", "Teknik Destek", "Hızlı Kurulum", "Dosya Güvenliği"],
      highlightTitle: "Profesyonel Kurulum",
      highlightDescription: "Teknik ekipmanlarınızı özenle koruyoruz"
    },
    {
      id: 3,
      title: "Şehirler Arası Nakliyat",
      subtitle: "Türkiye Geneli Hizmet",
      description: "Türkiye'nin her yerine güvenli nakliyat hizmeti. Modern araçlarımız ve deneyimli ekibimizle eşyalarınızı zamanında ve güvenle teslim ederiz.",
      backgroundImage: "https://res.cloudinary.com/dtgayqxdr/image/upload/v1760793614/test_jq1yeu.png",
      ctaText: "Fiyat Al",
      ctaLink: "/iletisim",
      features: ["Türkiye Geneli", "Güvenli Araçlar", "Zamanında Teslimat", "Profesyonel Ekip"],
      highlightTitle: "Güvenli Taşıma",
      highlightDescription: "Modern araçlarımız ve deneyimli ekibimizle"
    }
  ];

  return (
    <Layout siteData={siteData} seo={seo}>
      {/* Hero Slider */}
      <HeroSlider slides={heroSlides} />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Her türlü nakliyat ihtiyacınız için kapsamlı hizmetlerimizle yanınızdayız.
              Güvenli, hızlı ve ekonomik çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="text-center">
            <a
              href="/hizmetlerimiz"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Tüm Hizmetleri Gör</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="text-lg text-gray-600">
              15 yıllık deneyimimiz ve müşteri memnuniyeti odaklı hizmet anlayışımızla fark yaratıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🛡️',
                title: 'Güvenli Taşıma',
                description: 'Tüm eşyalarınız sigortalı ve güvenli bir şekilde taşınır.'
              },
              {
                icon: '⚡',
                title: 'Hızlı Hizmet',
                description: 'Modern araçlarımız ve deneyimli ekibimizle hızlı teslimat.'
              },
              {
                icon: '💰',
                title: 'Uygun Fiyat',
                description: 'Rekabetçi fiyatlarımızla bütçenize uygun çözümler.'
              },
              {
                icon: '⭐',
                title: 'Kaliteli Hizmet',
                description: 'Müşteri memnuniyeti odaklı profesyonel hizmet anlayışı.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Müşteri Yorumları
            </h2>
            <p className="text-lg text-gray-600">
              Müşterilerimizin deneyimlerini okuyun ve güvenilirliğimizi keşfedin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/hakkimizda#testimonials"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <span>Tüm Yorumları Gör</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hızlı Teklif İçin Hemen İletişime Geçin
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Profesyonel ekibimiz ihtiyacınızı hızla değerlendirir ve en uygun fiyatı sunar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/iletisim"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Keşif Talebi
            </a>
            <a
              href={`tel:${siteData.contact.phone}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Hemen Ara
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqData.faq} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const siteData = getSiteData();
  const servicesData = getServicesData();
  const testimonialsData = getTestimonialsData();
  const faqData = getFAQData();

  return {
    props: {
      siteData,
      servicesData,
      testimonialsData,
      faqData,
    },
  };
};
