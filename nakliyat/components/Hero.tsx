import Link from 'next/link';
import { ArrowRight, Shield, Clock, Star } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export default function Hero({ 
  title, 
  subtitle, 
  description, 
  ctaText, 
  ctaLink,
  backgroundImage 
}: HeroProps) {
  const features = [
    { icon: Shield, text: 'Güvenli Taşıma' },
    { icon: Clock, text: 'Hızlı Hizmet' },
    { icon: Star, text: 'Kaliteli Çözüm' },
  ];

  return (
    <section 
      className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 lg:py-32"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(30, 64, 175, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-4 text-primary-100 animate-slide-up">
            {subtitle}
          </p>
          <p className="text-base md:text-lg mb-8 text-gray-200 max-w-3xl mx-auto animate-slide-up">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Link
              href={ctaLink}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="tel:+905551234567"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Hemen Ara
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Icon className="w-6 h-6 text-primary-200" />
                  <span className="text-white font-medium">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
