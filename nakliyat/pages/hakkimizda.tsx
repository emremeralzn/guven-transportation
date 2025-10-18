import { GetStaticProps } from 'next';
import Image from 'next/image';
import Layout from '@/components/Layout';
import TestimonialCard from '@/components/TestimonialCard';
import { getSiteData, getTestimonialsData } from '@/lib/data';
import { SiteData, TestimonialsData } from '@/types';
import { Users, Award, Truck, Clock } from 'lucide-react';

interface AboutProps {
  siteData: SiteData;
  testimonialsData: TestimonialsData;
}

export default function About({ siteData, testimonialsData }: AboutProps) {
  const seo = {
    title: 'Hakkımızda - Güvenilir Nakliyat Hizmetleri',
    description: '15 yıllık deneyimimizle profesyonel nakliyat hizmetleri sunuyoruz. Güvenli, hızlı ve ekonomik taşımacılık çözümleri.',
    keywords: 'nakliyat firması, taşımacılık şirketi, güvenilir nakliyat, profesyonel hizmet',
    canonical: '/hakkimizda',
  };

  const stats = [
    { icon: Users, number: '5000+', label: 'Mutlu Müşteri' },
    { icon: Truck, number: '15000+', label: 'Başarılı Taşıma' },
    { icon: Award, number: '15+', label: 'Yıl Deneyim' },
    { icon: Clock, number: '24/7', label: 'Hizmet' },
  ];

  const values = [
    {
      title: 'Güvenilirlik',
      description: 'Müşterilerimizin eşyalarını kendi eşyalarımız gibi koruyoruz. Her taşımada güvenliği ön planda tutuyoruz.',
      icon: '🛡️'
    },
    {
      title: 'Kalite',
      description: 'Profesyonel ekip ve modern araçlarla kaliteli hizmet sunuyoruz. Sürekli gelişim ve iyileştirme odaklıyız.',
      icon: '⭐'
    },
    {
      title: 'Müşteri Memnuniyeti',
      description: 'Müşteri memnuniyeti bizim önceliğimizdir. Her projede müşteri beklentilerini aşmaya çalışıyoruz.',
      icon: '😊'
    },
    {
      title: 'İnovasyon',
      description: 'Teknolojik gelişmeleri takip ederek hizmet kalitemizi sürekli geliştiriyoruz.',
      icon: '🚀'
    }
  ];

  return (
    <Layout siteData={siteData} seo={seo}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dtgayqxdr/image/upload/v1760706988/GuvenNakliyat-logo_dl4xhx.png')`
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/70 to-primary-800/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Hakkımızda
            </h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">
              {siteData.business.name} olarak 15 yıldır güvenilir nakliyat hizmetleri sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hikayemiz
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  2010 yılında kurulan {siteData.business.name}, nakliyat sektöründe güvenilirliği ve 
                  kaliteyi bir araya getiren bir hizmet anlayışıyla yola çıktı.
                </p>
                <p>
                  Başlangıçta küçük bir ekiple İstanbul'da hizmet vermeye başlayan firmamız, 
                  müşteri memnuniyeti odaklı yaklaşımı sayesinde hızla büyüdü.
                </p>
                <p>
                  Bugün {siteData.business.employees} kişilik profesyonel ekibimiz ve modern araç 
                  filomuzla Türkiye genelinde hizmet veriyoruz.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dtgayqxdr/image/upload/v1760700526/guven_pbpxmu.jpg"
                alt="Firma hikayesi"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rakamlarla Biz
            </h2>
            <p className="text-lg text-gray-600">
              Yıllar içinde elde ettiğimiz başarılarımız
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-lg text-gray-600">
              Hizmet anlayışımızı şekillendiren temel değerlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Misyonumuz</h3>
              <p className="text-lg text-primary-100 leading-relaxed">
                Müşterilerimizin eşyalarını en güvenli ve hızlı şekilde taşıyarak, 
                onlara en iyi nakliyat deneyimini yaşatmak. Kaliteli hizmet ve 
                güvenilirlik ilkelerimizle sektörde öncü olmak.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-6">👁️</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Vizyonumuz</h3>
              <p className="text-lg text-primary-100 leading-relaxed">
                Türkiye'nin en güvenilir ve tercih edilen nakliyat firması olmak. 
                Teknolojik yeniliklerle hizmet kalitemizi sürekli geliştirerek, 
                müşteri memnuniyetinde sektör standardını belirlemek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Müşteri Deneyimleri
            </h2>
            <p className="text-lg text-gray-600">
              Hizmetlerimizden memnun kalan müşterilerimizin yorumları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Bizimle Çalışmaya Hazır mısınız?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Profesyonel ekibimizle tanışmak ve hizmetlerimizden faydalanmak için 
            hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/iletisim"
              className="btn-primary"
            >
              İletişime Geç
            </a>
            <a
              href="/hizmetlerimiz"
              className="btn-secondary"
            >
              Hizmetlerimizi İncele
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const siteData = getSiteData();
    const testimonialsData = getTestimonialsData();

    return {
      props: {
        siteData,
        testimonialsData,
      },
    };
  } catch (error) {
    console.error('Error in getStaticProps for hakkimizda:', error);
    return {
      notFound: true,
    };
  }
};
