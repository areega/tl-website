export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  relationship: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}