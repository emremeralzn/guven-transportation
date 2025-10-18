import Image from 'next/image';
import { Star } from 'lucide-react';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center mb-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={50}
          height={50}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.location}</p>
          <div className="flex items-center mt-1">
            {renderStars(testimonial.rating)}
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        "{testimonial.text}"
      </p>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{testimonial.service}</span>
        <span>{new Date(testimonial.date).toLocaleDateString('tr-TR')}</span>
      </div>
    </div>
  );
}
