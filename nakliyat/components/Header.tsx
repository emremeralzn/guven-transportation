import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, X, Phone, Mail, Star, Award, Clock } from 'lucide-react';
import { SiteData } from '@/types';

interface HeaderProps {
  siteData: SiteData;
}

export default function Header({ siteData }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda'},
    { name: 'Hizmetlerimiz', href: '/hizmetlerimiz'},
    { name: 'Başarı', href: '/galeri' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a 
                href={`tel:${siteData.contact.phone}`}
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:animate-pulse" />
                <span className="font-medium">{siteData.contact.phone}</span>
              </a>
              <a 
                href={`mailto:${siteData.contact.email}`}
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:animate-pulse" />
                <span className="font-medium">{siteData.contact.email}</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="font-medium">4.9/5 Müşteri Memnuniyeti</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="font-medium">7/24 Hizmet</span>
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full">
                <span className="font-semibold">7/24 Hizmet</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white shadow-lg sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'shadow-xl bg-white/95 backdrop-blur-sm' : ''
      }`}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src={siteData.logo}
                  alt={siteData.siteName}
                  width={50}
                  height={50}
                  className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {siteData.siteName}
                </h1>
                <p className="text-xs text-gray-600 font-medium">{siteData.tagline}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav id="navigation" className="hidden lg:flex space-x-1" role="navigation" aria-label="Ana navigasyon">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-2 py-1 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm hover:bg-transparent"
                  aria-current={router.pathname === item.href ? 'page' : undefined}
                >
                  <span>{item.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link
                href="/iletisim"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
              >
                Hızlı Teklif
              </Link>
              <Link
                href={`tel:${siteData.contact.phone}`}
                className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-1 text-sm"
              >
                <Phone className="w-3 h-3" />
                <span>Ara</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Menüyü aç/kapat"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`} />
                <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 top-3 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="lg:hidden bg-white border-t border-gray-200 animate-slide-down"
            role="navigation"
            aria-label="Mobil navigasyon"
          >
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                  aria-current={router.pathname === item.href ? 'page' : undefined}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  href="/iletisim"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hızlı Teklif
                </Link>
                <Link
                  href={`tel:${siteData.contact.phone}`}
                  className="block w-full px-4 py-3 bg-green-600 text-white rounded-lg font-medium text-center hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span>Hemen Ara</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
