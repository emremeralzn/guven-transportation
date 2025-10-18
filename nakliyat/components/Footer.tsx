import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { SiteData } from '@/types';

interface FooterProps {
  siteData: SiteData;
}

export default function Footer({ siteData }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
    { name: 'Başarı', href: '/galeri' },
    { name: 'İletişim', href: '/iletisim' },
    { name: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
    { name: 'Kullanım Koşulları', href: '/kullanim-kosullari' },
  ];

  const services = [
    { name: 'Evden Eve Nakliyat', href: '/hizmetlerimiz/evden-eve-nakliyat' },
    { name: 'Ofis Taşıma', href: '/hizmetlerimiz/ofis-tasima' },
    { name: 'Şehir İçi Taşıma', href: '/hizmetlerimiz/sehir-ici-tasima' },
    { name: 'Şehirler Arası Nakliyat', href: '/hizmetlerimiz/sehirler-arasi-nakliyat' },
    { name: 'Özel Eşya Taşıma', href: '/hizmetlerimiz/ozel-esya-tasima' },
    { name: 'Depo Hizmetleri', href: '/hizmetlerimiz/depo-hizmetleri' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: siteData.social.facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: siteData.social.instagram, color: 'hover:text-pink-600' },
    { name: 'Twitter', icon: Twitter, href: siteData.social.twitter, color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: siteData.social.linkedin, color: 'hover:text-blue-700' },
  ];

  // Stats section removed per request

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Stats Section removed */}

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <Image
                  src={siteData.logo}
                  alt={siteData.siteName}
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{siteData.siteName}</h3>
                <p className="text-sm text-gray-400 font-medium">{siteData.tagline}</p>
              </div>
            </Link>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              {siteData.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 p-2 rounded-full bg-gray-800 hover:bg-gray-700`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm group-hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm group-hover:translate-x-1"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">İletişim</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  {siteData.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                  <Mail className="w-5 h-5 text-green-400" />
                </div>
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm font-medium"
                >
                  {siteData.contact.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center group-hover:bg-purple-600/30 transition-colors mt-0.5">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-gray-300 text-sm font-medium">
                  {siteData.contact.address}
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center group-hover:bg-orange-600/30 transition-colors">
                  <Clock className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-gray-300 text-sm font-medium">
                  7/24 Hizmet
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {siteData.business.name}. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/gizlilik-politikasi"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="/kullanim-kosullari"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium"
              >
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
