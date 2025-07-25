// src/types/product.ts

export interface Medium {
  url: string;
  type: string;
  provider: string;
}

export interface Checklist {
  title: string;
}

export interface Seo {
  title: string;
  description: string;
  keywords: string[];
}

export interface CtaText {
  button: string;
}

export interface Section {
  type: string;
  title?: string;
  content?: string;
  items?: string[];
}

export interface Product {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}
