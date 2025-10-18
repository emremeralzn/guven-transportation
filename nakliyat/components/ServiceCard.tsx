import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {service.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {service.description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex justify-between items-center">
          <span className="text-primary-600 font-semibold text-lg">
            {service.price}
          </span>
          <Link
            href={`/hizmetlerimiz/${service.slug}`}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
          >
            Detayları Gör
          </Link>
        </div>
      </div>
    </div>
  );
}
