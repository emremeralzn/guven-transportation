import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Shield, Eye, Lock, Database, UserCheck, Globe } from 'lucide-react';
import Layout from '../components/Layout';
import { getSiteData } from '../lib/data';
import { SEOProps } from '../types';

interface PrivacyPolicyProps {
  siteData: any;
  seo: SEOProps;
}

export default function PrivacyPolicy({ siteData, seo }: PrivacyPolicyProps) {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
      </Head>

      <Layout siteData={siteData}>
        {/* Header Section */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container-padding">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-16 h-16 mr-4" />
                <h1 className="text-4xl font-bold">Gizlilik Politikası</h1>
              </div>
              <p className="text-xl text-blue-100">
                Kişisel verilerinizin korunması bizim için önemlidir
              </p>
              <p className="text-blue-200 mt-2">
                Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-padding">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Giriş</h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {siteData.siteName} olarak, kişisel verilerinizin güvenliği ve gizliliği bizim için en önemli konulardan biridir. 
                    Bu gizlilik politikası, web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda 
                    kişisel bilgilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi vermektedir.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Bu politikayı dikkatlice okuyun ve sorularınız varsa bizimle iletişime geçmekten çekinmeyin.
                  </p>
                </div>
              </div>

              {/* Data Collection */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Database className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Toplanan Bilgiler</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Kişisel Bilgiler</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Ad ve soyad</li>
                      <li>E-posta adresi</li>
                      <li>Telefon numarası</li>
                      <li>Adres bilgileri</li>
                      <li>Şirket bilgileri (kurumsal müşteriler için)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Teknik Bilgiler</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>IP adresi</li>
                      <li>Tarayıcı türü ve versiyonu</li>
                      <li>İşletim sistemi bilgileri</li>
                      <li>Ziyaret edilen sayfalar ve süre</li>
                      <li>Referans URL'leri</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Usage */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <UserCheck className="w-8 h-8 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Bilgilerin Kullanımı</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Hizmet Sunumu</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Nakliyat hizmetlerinin sunulması</li>
                      <li>Sipariş işlemlerinin gerçekleştirilmesi</li>
                      <li>Müşteri desteği sağlanması</li>
                      <li>Fatura ve ödeme işlemleri</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">İletişim</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Hizmet güncellemeleri</li>
                      <li>Pazarlama iletişimleri</li>
                      <li>Müşteri anketleri</li>
                      <li>Önemli duyurular</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Protection */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Lock className="w-8 h-8 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Veri Güvenliği</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Kişisel verilerinizi korumak için aşağıdaki güvenlik önlemlerini almaktayız:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>SSL şifreleme teknolojisi</li>
                    <li>Güvenli sunucu altyapısı</li>
                    <li>Düzenli güvenlik güncellemeleri</li>
                    <li>Erişim kontrolü ve yetkilendirme</li>
                    <li>Düzenli veri yedekleme</li>
                    <li>Personel gizlilik eğitimleri</li>
                  </ul>
                </div>
              </div>

              {/* Cookies */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Çerezler (Cookies)</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Web sitemizde kullanıcı deneyimini geliştirmek için çerezler kullanmaktayız:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Zorunlu Çerezler</h4>
                      <p className="text-blue-700 text-sm">Sitenin temel işlevselliği için gerekli</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Analitik Çerezler</h4>
                      <p className="text-green-700 text-sm">Site kullanımını analiz etmek için</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Pazarlama Çerezleri</h4>
                      <p className="text-purple-700 text-sm">Kişiselleştirilmiş içerik için</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rights */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Haklarınız</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">KVKK Kapsamında</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                      <li>İşlenen verileriniz hakkında bilgi talep etme</li>
                      <li>Verilerinizin işlenme amacını öğrenme</li>
                      <li>Yurt içi/yurt dışı aktarılan üçüncü kişileri bilme</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Düzeltme ve Silme</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Eksik veya yanlış verilerin düzeltilmesini isteme</li>
                      <li>Belirli şartlarda verilerin silinmesini isteme</li>
                      <li>İşlenen verilerin üçüncü kişilere aktarılması halinde bilgilendirilme</li>
                      <li>İşlenen verilere karşı zararın giderilmesini talep etme</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-blue-600 text-white rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">İletişim</h2>
                <p className="text-blue-100 mb-6">
                  Gizlilik politikamız hakkında sorularınız varsa veya kişisel verilerinizle ilgili 
                  talepleriniz bulunuyorsa bizimle iletişime geçebilirsiniz.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">İletişim Bilgileri</h3>
                    <p className="text-blue-100">{siteData.contact.address}</p>
                    <p className="text-blue-100">{siteData.contact.phone}</p>
                    <p className="text-blue-100">{siteData.contact.email}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Veri Sorumlusu</h3>
                    <p className="text-blue-100">{siteData.siteName}</p>
                    <p className="text-blue-100">KVKK Uyumluluk Sorumlusu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const siteData = await getSiteData();
  
  const seo: SEOProps = {
    title: 'Gizlilik Politikası | ' + siteData.siteName,
    description: siteData.siteName + ' gizlilik politikası ve kişisel verilerin korunması hakkında bilgiler. KVKK uyumlu veri işleme süreçlerimiz.',
    canonical: `${siteData.business.name}/gizlilik-politikasi`
  };

  return {
    props: {
      siteData,
      seo
    }
  };
};
