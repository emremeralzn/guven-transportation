import { GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';
import { getSiteData, getServicesData } from '@/lib/data';
import { SiteData, ServicesData } from '@/types';

interface ServicesProps {
  siteData: SiteData;
  servicesData: ServicesData;
}

export default function Services({ siteData, servicesData }: ServicesProps) {
  const seo = {
    title: 'Nakliyat Hizmetlerimiz - Evden Eve, Ofis Taşıma',
    description: 'Profesyonel nakliyat hizmetleri: Evden eve nakliyat, ofis taşıma, şehir içi ve şehirler arası taşımacılık. Güvenli ve hızlı çözümler.',
    keywords: 'nakliyat hizmetleri, evden eve nakliyat, ofis taşıma, şehir içi taşıma, şehirler arası nakliyat',
    canonical: '/hizmetlerimiz',
  };

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
              Hizmetlerimiz
            </h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">
              Her türlü nakliyat ihtiyacınız için kapsamlı hizmetlerimizle yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kapsamlı Nakliyat Çözümleri
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Evden eve nakliyattan ofis taşımaya, özel eşya taşımadan depo hizmetlerine 
              kadar geniş hizmet yelpazemizle ihtiyaçlarınızı karşılıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hizmet Sürecimiz
            </h2>
            <p className="text-lg text-gray-600">
              Nakliyat sürecinizi nasıl yönettiğimizi keşfedin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Talep Alımı',
                description: 'İhtiyacınızı dinleyip eşyalar ve adres bilgilerinizi netleştiririz.',
                icon: '🗂️'
              },
              {
                step: '02',
                title: 'Planlama',
                description: 'Taşıma tarihi ve detayları planlanır. Gerekli malzemeler hazırlanır.',
                icon: '📅'
              },
              {
                step: '03',
                title: 'Paketleme',
                description: 'Eşyalarınız profesyonel ekip tarafından özenle paketlenir ve korunur.',
                icon: '📦'
              },
              {
                step: '04',
                title: 'Taşıma & Teslimat',
                description: 'Eşyalarınız güvenle taşınır ve yeni adresinde yerleştirilir.',
                icon: '🚚'
              }
            ].map((process, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <div className="text-4xl mb-4">{process.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Neden Hizmetlerimizi Tercih Etmelisiniz?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: '🛡️',
                    title: 'Sigortalı Taşıma',
                    description: 'Tüm eşyalarınız tam sigorta kapsamında güvenle taşınır.'
                  },
                  {
                    icon: '⚡',
                    title: 'Hızlı ve Güvenilir',
                    description: 'Modern araçlar ve deneyimli ekip ile zamanında teslimat.'
                  },
                  {
                    icon: '💰',
                    title: 'Uygun Fiyatlar',
                    description: 'Rekabetçi fiyatlar ve şeffaf maliyet yapısı.'
                  },
                  {
                    icon: '🔧',
                    title: 'Montaj Hizmeti',
                    description: 'Mobilya montaj ve demontaj hizmetleri dahil.'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dtgayqxdr/image/upload/v1760703575/sehirlararasinakliyat_2_yixpbv.png"
                alt="Neden bizi seçmelisiniz"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hizmetlerimizden Yararlanmaya Hazır mısınız?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Hızlı teklif için hemen iletişime geçin ve size özel çözümlerimizi keşfedin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/iletisim"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Hızlı Teklif Al
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
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const siteData = getSiteData();
    const servicesData = getServicesData();

    return {
      props: {
        siteData,
        servicesData,
      },
    };
  } catch (error) {
    console.error('Error in getStaticProps for hizmetlerimiz:', error);
    return {
      notFound: true,
    };
  }
};
