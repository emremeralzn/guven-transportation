export interface SiteData {
  siteName: string;
  tagline: string;
  description: string;
  keywords: string;
  logo: string;
  favicon: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    whatsapp: string;
    whatsappMessage: string;
  };
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  };
  business: {
    name: string;
    type: string;
    foundingYear: string;
    employees: string;
    serviceAreas: string[];
    languages: string[];
  };
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  detailedDescription?: string;
  features: string[];
  benefits?: string[];
  process?: ProcessStep[];
  price: string;
  icon: string;
  image: string;
  keywords: string;
  metaDescription?: string;
  faq?: ServiceFAQ[];
}

export interface ServicesData {
  services: Service[];
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  service: string;
  avatar: string;
}

export interface TestimonialsData {
  testimonials: Testimonial[];
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface FAQData {
  faq: FAQ[];
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export interface PageProps {
  siteData: SiteData;
  seo: SEOProps;
}
