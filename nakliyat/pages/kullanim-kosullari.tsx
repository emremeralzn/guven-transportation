import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FileText, Scale, AlertTriangle, Shield, Clock, Phone } from 'lucide-react';
import Layout from '../components/Layout';
import { getSiteData } from '../lib/data';
import { SEOProps } from '../types';

interface TermsOfServiceProps {
  siteData: any;
  seo: SEOProps;
}

export default function TermsOfService({ siteData, seo }: TermsOfServiceProps) {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
      </Head>

      <Layout siteData={siteData}>
        {/* Header Section */}
        <section className="py-12 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
          <div className="container-padding">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Scale className="w-16 h-16 mr-4" />
                <h1 className="text-4xl font-bold">Kullanım Koşulları</h1>
              </div>
              <p className="text-xl text-indigo-100">
                Hizmetlerimizi kullanırken uymanız gereken kurallar ve koşullar
              </p>
              <p className="text-indigo-200 mt-2">
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
                  <FileText className="w-8 h-8 text-indigo-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Genel Hükümler</h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    Bu kullanım koşulları, {siteData.siteName} tarafından sunulan nakliyat ve lojistik hizmetlerinin 
                    kullanımına ilişkin kuralları ve koşulları belirler. Web sitemizi ziyaret ederek veya 
                    hizmetlerimizi kullanarak bu koşulları kabul etmiş sayılırsınız.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Bu koşulları dikkatlice okuyun ve anlayın. Hizmetlerimizi kullanmaya devam etmeniz, 
                    bu koşulları kabul ettiğiniz anlamına gelir.
                  </p>
                </div>
              </div>

              {/* Service Terms */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Hizmet Koşulları</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Hizmet Kapsamı</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Kastamonu - İstanbul arası nakliyat hizmetleri</li>
                      <li>Eşya taşıma ve lojistik çözümleri</li>
                      <li>Paketleme ve ambalajlama hizmetleri</li>
                      <li>Sigorta ve güvenlik hizmetleri</li>
                      <li>Müşteri desteği ve takip hizmetleri</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Hizmet Standartları</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Profesyonel ve güvenli taşıma</li>
                      <li>Zamanında teslimat taahhüdü</li>
                      <li>Eşyaların hasarsız taşınması</li>
                      <li>Şeffaf fiyatlandırma</li>
                      <li>7/24 müşteri desteği</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Customer Responsibilities */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Müşteri Yükümlülükleri</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Doğru Bilgi Verme</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Kişisel bilgilerin doğruluğu</li>
                      <li>Eşya listesinin eksiksiz verilmesi</li>
                      <li>Değerli eşyaların bildirilmesi</li>
                      <li>Adres bilgilerinin doğruluğu</li>
                      <li>İletişim bilgilerinin güncelliği</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Hazırlık Yükümlülükleri</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Eşyaların taşımaya hazır hale getirilmesi</li>
                      <li>Yasak eşyaların bildirilmesi</li>
                      <li>Teslimat için uygun zaman belirlenmesi</li>
                      <li>Gerekli belgelerin hazırlanması</li>
                      <li>Ödemelerin zamanında yapılması</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Payment Terms */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ödeme Koşulları</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Ödeme Yöntemleri</h4>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Nakit ödeme</li>
                        <li>• Banka transferi</li>
                        <li>• Kredi kartı</li>
                        <li>• Kurumsal ödeme</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Ödeme Zamanları</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Hizmet öncesi</li>
                        <li>• Hizmet sırasında</li>
                        <li>• Hizmet sonrası</li>
                        <li>• Taksitli ödeme</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Fiyatlandırma</h4>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• Şeffaf fiyatlar</li>
                        <li>• Ek ücret yok</li>
                        <li>• Grup indirimleri</li>
                        <li>• Kurumsal anlaşmalar</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-900 mb-1">Önemli Uyarı</h4>
                        <p className="text-yellow-800 text-sm">
                          Ödeme yapılmadan hizmet sunulamaz. Gecikmiş ödemeler için faiz uygulanabilir.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Liability and Insurance */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Sorumluluk ve Sigorta</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Şirket Sorumluluğu</h3>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <ul className="list-disc list-inside space-y-2 text-blue-900">
                        <li>Eşyaların güvenli taşınması</li>
                        <li>Hasarlı eşyaların tazmini</li>
                        <li>Zamanında teslimat</li>
                        <li>Profesyonel hizmet sunumu</li>
                        <li>Müşteri memnuniyeti</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Sigorta Kapsamı</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Kapsanan Durumlar</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• Taşıma sırasında hasar</li>
                          <li>• Kaybolma durumları</li>
                          <li>• Doğal afetler</li>
                          <li>• Kazalar</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2">Kapsam Dışı</h4>
                        <ul className="text-red-700 text-sm space-y-1">
                          <li>• Müşteri hatası</li>
                          <li>• Yanlış bilgi</li>
                          <li>• Yasak eşyalar</li>
                          <li>• Doğal aşınma</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cancellation and Refund */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">İptal ve İade Koşulları</h2>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">İptal Koşulları</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Hizmet öncesi: %100 iade</li>
                        <li>Hizmet başlangıcından 2 saat öncesi: %50 iade</li>
                        <li>Hizmet başladıktan sonra: İade yok</li>
                        <li>Mücbir sebep durumları: Özel değerlendirme</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">İade Süreci</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>İptal talebi 24 saat içinde değerlendirilir</li>
                        <li>Onaylanan iadeler 3-5 iş günü içinde yapılır</li>
                        <li>Banka transferi ile iade</li>
                        <li>İade belgesi gönderilir</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dispute Resolution */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Uyuşmazlık Çözümü</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Çözüm Yolları</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Doğrudan iletişim ve müzakere</li>
                      <li>Müşteri hizmetleri müdahalesi</li>
                      <li>Üst yönetim değerlendirmesi</li>
                      <li>Arabuluculuk (gerekirse)</li>
                      <li>Hukuki süreç (son çare)</li>
                    </ol>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">Müşteri Hakları</h4>
                        <p className="text-blue-800 text-sm">
                          Tüm müşterilerimiz tüketici haklarından yararlanır ve şikayetlerini 
                          Tüketici Hakem Heyetleri'ne iletebilir.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-indigo-600 text-white rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">İletişim ve Destek</h2>
                <p className="text-indigo-100 mb-6">
                  Bu kullanım koşulları hakkında sorularınız varsa veya hizmetlerimizle ilgili 
                  destek ihtiyacınız bulunuyorsa bizimle iletişime geçebilirsiniz.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">İletişim Bilgileri</h3>
                    <div className="flex items-center mb-2">
                      <Phone className="w-4 h-4 mr-2" />
                      <span className="text-indigo-100">{siteData.contact.phone}</span>
                    </div>
                    <p className="text-indigo-100">{siteData.contact.address}</p>
                    <p className="text-indigo-100">{siteData.contact.email}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Çalışma Saatleri</h3>
                    <p className="text-indigo-100">Pazartesi - Cuma: 08:00 - 18:00</p>
                    <p className="text-indigo-100">Cumartesi: 09:00 - 16:00</p>
                    <p className="text-indigo-100">Pazar: Kapalı</p>
                    <p className="text-indigo-100 mt-2">Acil durumlar: 7/24</p>
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
    title: 'Kullanım Koşulları | ' + siteData.siteName,
    description: siteData.siteName + ' kullanım koşulları ve hizmet şartları. Nakliyat hizmetlerimizi kullanırken uymanız gereken kurallar.',
    canonical: `${siteData.business.name}/kullanim-kosullari`
  };

  return {
    props: {
      siteData,
      seo
    }
  };
};
