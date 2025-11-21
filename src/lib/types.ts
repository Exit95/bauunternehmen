// Global type declarations
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export interface NavigationItem {
  href: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  details?: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Testimonial {
  text: string;
  author: string;
  project: string;
  location: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FormData {
  name: string;
  email: string;
  telefon: string;
  nachricht: string;
}

export interface ContactFormErrors {
  name: string;
  email: string;
  telefon: string;
  nachricht: string;
}

export {};