import { GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import { getSiteData } from '@/lib/data';
import { SiteData } from '@/types';
import { TrendingUp, Award, Users, Clock, Shield, Star, MapPin, CheckCircle } from 'lucide-react';

interface GalleryProps {
  siteData: SiteData;
}

export default function Gallery({ siteData }: GalleryProps) {
  const seo = {
    title: 'Başarı Hikayeleri - Müşteri Memnuniyeti ve İstatistikler',
    description: 'Nakliyat hizmetlerimizde elde ettiğimiz başarılar, müşteri memnuniyeti oranları ve sektördeki konumumuz.',
    keywords: 'nakliyat başarı, müşteri memnuniyeti, istatistikler, güvenilir hizmet',
    canonical: '/galeri',
  };

  const successStats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Mutlu Müşteri',
      description: 'Yıllar içinde memnuniyetle hizmet verdiğimiz müşteri sayımız',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      number: '15000+',
      label: 'Başarılı Taşıma',
      description: 'Hiçbir hasar olmadan tamamladığımız taşıma sayısı',
      color: 'text-green-600'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Yıl Deneyim',
      description: 'Sektörde edindiğimiz tecrübe ve uzmanlık',
      color: 'text-yellow-600'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Müşteri Puanı',
      description: 'Müşterilerimizden aldığımız ortalama değerlendirme',
      color: 'text-purple-600'
    }
  ];

  const achievements = [
    {
      title: 'Sektör Lideri',
      description: 'Türkiye\'nin en güvenilir nakliyat firmaları arasında ilk 10\'da yer alıyoruz.',
      icon: Award,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      title: 'Sıfır Hasar',
      description: 'Son 5 yılda %99.8 hasarsız taşıma oranı ile sektörde rekor kırdık.',
      icon: Shield,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Hızlı Teslimat',
      description: 'Ortalama 24 saat içinde teslimat garantisi ile müşteri memnuniyeti sağlıyoruz.',
      icon: Clock,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Geniş Ağ',
      description: '81 il ve 957 ilçeye kadar hizmet veriyor, Türkiye\'nin her yerine ulaşıyoruz.',
      icon: MapPin,
      color: 'bg-red-100 text-red-600'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Kuruluş',
      description: 'İstanbul\'da küçük bir ekip ile nakliyat hizmetlerine başladık.'
    },
    {
      year: '2015',
      title: 'Büyüme',
      description: '50+ personel ve 20+ araç ile hizmet kapasitemizi artırdık.'
    },
    {
      year: '2018',
      title: 'Teknoloji',
      description: 'Online takip sistemi ve dijital platformları hayata geçirdik.'
    },
    {
      year: '2021',
      title: 'Genişleme',
      description: 'Türkiye geneli hizmet ağımızı kurarak ulusal ölçeğe çıktık.'
    },
    {
      year: '2024',
      title: 'Liderlik',
      description: 'Sektörde lider konuma gelerek 5000+ mutlu müşteriye ulaştık.'
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
              Başarı Hikayeleri
            </h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">
              Müşteri memnuniyeti ve sektördeki başarılarımız
            </p>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rakamlarla Başarımız
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              15 yıllık deneyimimiz ve müşteri odaklı yaklaşımımızla elde ettiğimiz başarılar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 ${stat.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </div>
                  <p className="text-sm text-gray-600">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Öne Çıkan Başarılarımız
            </h2>
            <p className="text-lg text-gray-600">
              Sektörde fark yaratan başarılarımız ve müşteri memnuniyeti odaklı yaklaşımımız
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${achievement.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Başarı Yolculuğumuz
            </h2>
            <p className="text-lg text-gray-600">
              2010'dan bugüne kadar geçirdiğimiz önemli dönüm noktaları
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Başarı Hikayemizin Bir Parçası Olun
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Profesyonel hizmetimizden yararlanarak mutlu müşterilerimiz arasına katılın. 
            Hızlı teklif ile hemen başlayalım.
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
  const siteData = getSiteData();

  return {
    props: {
      siteData,
    },
  };
};
