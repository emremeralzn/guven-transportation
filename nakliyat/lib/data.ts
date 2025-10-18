import fs from 'fs';
import path from 'path';
import { SiteData, ServicesData, TestimonialsData, FAQData } from '@/types';

const dataDirectory = path.join(process.cwd(), 'data');

export function getSiteData(): SiteData {
  const filePath = path.join(dataDirectory, 'site.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getServicesData(): ServicesData {
  const filePath = path.join(dataDirectory, 'services.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getTestimonialsData(): TestimonialsData {
  const filePath = path.join(dataDirectory, 'testimonials.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getFAQData(): FAQData {
  const filePath = path.join(dataDirectory, 'faq.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getAllServices() {
  const servicesData = getServicesData();
  return servicesData.services;
}

export function getServiceBySlug(slug: string) {
  const services = getAllServices();
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs() {
  const services = getAllServices();
  return services.map(service => ({
    params: {
      slug: service.slug,
    },
  }));
}
