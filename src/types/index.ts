export interface Retailer {
  id: string;
  name: string;
  badge: string;
  formats: string[];
  priceHint: string;
  url: string;
  featured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  source: string;
  quote: string;
  rating: number;
  date?: string;
  featured?: boolean;
  type: 'editorial' | 'reader';
}

export interface Chapter {
  id: string;
  title: string;
  subtitle: string;
  readingTime: string;
  excerpt: string;
  transmissionLog: string;
  paragraphs: string[];
}

export interface BookDetails {
  title: string;
  subtitle: string;
  author: string;
  synopsis: string;
  fullBlurb: string[];
  specs: {
    isbn: string;
    pages: number;
    published: string;
    publisher: string;
    genres: string[];
    language: string;
  };
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'story' | 'author' | 'publishing';
}
