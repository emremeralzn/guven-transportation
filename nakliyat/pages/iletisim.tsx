import { GetStaticProps } from 'next';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import { getSiteData } from '@/lib/data';
import { SiteData } from '@/types';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

// Dynamic import for ContactForm
const ContactForm = dynamic(() => import('@/components/dynamic/ContactForm'), {
  ssr: false
});

interface ContactProps {
  siteData: SiteData;
}

export default function Contact({ siteData }: ContactProps) {
  const seo = {
    title: 'İletişim',
    description: 'Nakliyat hizmetlerimiz için bize ulaşın. 7/24 hizmet, profesyonel ekip, güvenilir taşımacılık.',
    keywords: 'nakliyat iletişim, nakliyat fiyat, taşıma talebi',
    canonical: '/iletisim',
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefon',
      description: '7/24 hizmet veren çağrı merkezimiz',
      contact: siteData.contact.phone,
      link: `tel:${siteData.contact.phone}`,
      action: 'Hemen Ara'
    },
    {
      icon: Mail,
      title: 'E-posta',
      description: 'Detaylı bilgi için e-posta gönderin',
      contact: siteData.contact.email,
      link: `mailto:${siteData.contact.email}`,
      action: 'E-posta Gönder'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Hızlı yanıt için WhatsApp mesajı',
      contact: siteData.contact.whatsapp,
      link: `https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(siteData.contact.whatsappMessage)}`,
      action: 'Mesaj Gönder'
    },
    {
      icon: MapPin,
      title: 'Adres',
      description: 'Ofisimizi ziyaret edin',
      contact: siteData.contact.address,
      link: '#',
      action: 'Konumu Gör'
    }
  ];

  const officeHours = [
    { day: 'Pazartesi - Cuma', hours: '08:00 - 18:00' },
    { day: 'Cumartesi', hours: '09:00 - 17:00' },
    { day: 'Pazar', hours: '10:00 - 16:00' },
    { day: 'Acil Durumlar', hours: '7/24 Hizmet' }
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
              İletişim
            </h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">
              Hızlı teklif ve bilgi için bizimle iletişime geçin
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bizimle İletişime Geçin
            </h2>
            <p className="text-lg text-gray-600">
              Size en uygun iletişim yöntemini seçin ve hemen yanıt alın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {method.description}
                  </p>
                  <p className="text-primary-600 font-medium mb-4">
                    {method.contact}
                  </p>
                  <a
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : '_self'}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="btn-primary text-sm"
                  >
                    {method.action}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm
                phone={siteData.contact.phone}
                email={siteData.contact.email}
                address={siteData.contact.address}
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Clock className="w-6 h-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Çalışma Saatleri</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-primary-600 font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Hızlı Bilgiler
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Sigortalı Hizmet</h4>
                      <p className="text-gray-600 text-sm">Tüm eşyalarınız sigorta kapsamındadır</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Profesyonel Ekip</h4>
                      <p className="text-gray-600 text-sm">Deneyimli ve eğitimli personel</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Modern Araçlar</h4>
                      <p className="text-gray-600 text-sm">Güvenli ve temiz taşıma araçları</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hizmet Verdiğimiz Bölgeler
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  7/24 Türkiye geneli hizmet veriyoruz.
                  İstanbul (Başakşehir) merkezli ekibimizle tüm bölgelere hızlıca ulaşırız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Route Map Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hizmet Güzergahımız
            </h2>
            <p className="text-lg text-gray-600">
              Konum: İstanbul (Başakşehir). Servislerimiz yoğunlukla İstanbul – Kastamonu hattında çalışmaktadır.
            </p>
          </div>

          {/* Custom Route Map */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 mb-8">
            <div className="relative">
              {/* Route Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-blue-600 rounded-full opacity-80"></div>
              
              {/* Route Points */}
              <div className="relative space-y-16">
                {/* İstanbul (Başlangıç) */}
                <div className="flex items-center justify-center">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-10">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div className="ml-6 bg-white rounded-lg p-4 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900">İstanbul (Başakşehir)</h3>
                    <p className="text-gray-600 text-sm">Başlangıç Noktası</p>
                    <p className="text-blue-600 font-semibold text-sm">Merkez Ofis (Konum)</p>
                  </div>
                </div>

                {/* Route Cities */}
                <div className="flex items-center justify-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10">
                    <span className="text-sm font-bold">A</span>
                  </div>
                  <div className="ml-6 bg-white rounded-lg p-4 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900">Ara Durak</h3>
                    <p className="text-gray-600 text-sm">Bolu, Düzce, Sakarya</p>
                    <p className="text-blue-600 font-semibold text-sm">Aktarma Merkezi</p>
                  </div>
                </div>

                {/* Kastamonu (Varış) */}
                <div className="flex items-center justify-center">
                  <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-10">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div className="ml-6 bg-white rounded-lg p-4 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900">Kastamonu</h3>
                    <p className="text-gray-600 text-sm">Varış Noktası</p>
                    <p className="text-blue-600 font-semibold text-sm">Şehir Merkezi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Route Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">540 km</div>
              <div className="text-gray-700 font-medium">Toplam Mesafe</div>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">6-8 saat</div>
              <div className="text-gray-700 font-medium">Ortalama Süre</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">Günlük</div>
              <div className="text-gray-700 font-medium">Sefer Sıklığı</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-red-600 text-white">
        <div className="container-padding text-center">
          <h2 className="text-3xl font-bold mb-6">
            Acil Durum İletişimi
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Acil nakliyat ihtiyaçlarınız için 7/24 hizmet veriyoruz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteData.contact.phone}`}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Acil Durum Hattı</span>
            </a>
            <a
              href={`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Acil nakliyat talebi - ' + siteData.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Acil</span>
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
