export interface FeaturedReview {
  name: string;
  text: string;
  rating: number;
}

export interface OpeningHoursSpecial {
  weekday: string;
  weekend: string;
}

export interface SiteData {
  name: string;
  slogan: string;
  aboutLabel: string;
  title: string;
  aboutImage: string;
  calmLine: string;
  intro: string;
  features: Array<{
    name: string;
    icon: string;
  }>;
  hours: string;
  establishedYear: number;
  establishYear: number;
  area: string;
  capacity: number;
  visitors: number;
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
  facebookPage: string;
  instagramHandle: string;
  tiktokHandle: string;
  featured_reviews: FeaturedReview[];
  opening_hours_special: OpeningHoursSpecial;
  services: string[];
  notes: string[];
}

export interface HeroImage {
  src: string;
  alt: string;
}

export interface HeroData {
  images: HeroImage[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface GalleryData {
  title: string;
  description: string;
  images: GalleryImage[];
}

export interface Corner {
  id: number;
  name: string;
  description: string;
  highlight: string;
  image: string;
  features: string[];
  bestTime: string;
  tags: string[];
}

export interface CornersData {
  corners: Corner[];
}

export interface MenuItem {
  name: string;
  description: string;
  image: string;
  tags: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

export interface MenuData {
  title: string;
  subtitle: string;
  featured: string[];
  seasonal: string[];
  categories: MenuCategory[];
}

export interface SocialData {
  facebook: string;
  instagram: string;
  youtube: string;
  twitter: string;
  zalo: string;
  tiktok: string;
}

export interface Testimonial {
  name: string;
  avatar: string;
  text: string;
  rating: number;
  date: string;
}

export interface TestimonialsData {
  testimonials: Testimonial[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  faqs: FaqItem[];
}

export interface LandingData {
  site: SiteData;
  hero: HeroData;
  gallery: GalleryData;
  corners: CornersData;
  menu: MenuData;
  social: SocialData;
  testimonials: TestimonialsData;
  faq: FaqData;
}
