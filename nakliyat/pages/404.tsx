import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';
import { getSiteData } from '../lib/data';
import { SEOProps } from '../types';

interface Custom404Props {
  siteData: any;
  seo: SEOProps;
}

export default function Custom404({ siteData, seo }: Custom404Props) {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="max-w-4xl w-full text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative">
              <div className="text-9xl font-bold text-blue-600 opacity-20 mb-4">404</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-blue-600 text-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                  <Search className="w-12 h-12" />
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Sayfa Bulunamadı
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Aradığınız sayfa mevcut değil veya taşınmış olabilir.
            </p>
            <p className="text-gray-500">
              Üzülmeyin, size yardımcı olabiliriz!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              <Home className="w-5 h-5 mr-2" />
              Ana Sayfaya Dön
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Geri Dön
            </button>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Popüler Sayfalar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link 
                href="/hizmetlerimiz"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
              >
                <div className="font-medium text-gray-900">Hizmetlerimiz</div>
                <div className="text-sm text-gray-600">Nakliyat hizmetlerimiz</div>
              </Link>
              
              <Link 
                href="/hakkimizda"
                className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
              >
                <div className="font-medium text-gray-900">Hakkımızda</div>
                <div className="text-sm text-gray-600">Şirket bilgilerimiz</div>
              </Link>
              
              <Link 
                href="/galeri"
                className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200"
              >
                <div className="font-medium text-gray-900">Başarılarımız</div>
                <div className="text-sm text-gray-600">Başarı hikayelerimiz</div>
              </Link>
              
              <Link 
                href="/iletisim"
                className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-200"
              >
                <div className="font-medium text-gray-900">İletişim</div>
                <div className="text-sm text-gray-600">Bize ulaşın</div>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-blue-600 text-white rounded-xl p-6">
            <div className="flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 mr-2" />
              <span className="text-lg font-medium">Yardıma mı ihtiyacınız var?</span>
            </div>
            <p className="text-blue-100 mb-4">
              Aradığınızı bulamadınız mı? Bizimle iletişime geçin, size yardımcı olalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${siteData.contact.phone}`}
                className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium"
              >
                <Phone className="w-4 h-4 mr-2" />
                {siteData.contact.phone}
              </a>
              
              <a 
                href={`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}`}
                className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const siteData = await getSiteData();
  
  const seo: SEOProps = {
    title: 'Sayfa Bulunamadı - 404 | ' + siteData.siteName,
    description: 'Aradığınız sayfa bulunamadı. ' + siteData.siteName + ' ana sayfasına dönün veya bizimle iletişime geçin.',
    canonical: `${siteData.business.name}/404`
  };

  return {
    props: {
      siteData,
      seo
    }
  };
};
