export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  quote: string;
  highlightTag: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  specs: string[];
  image: string;
}

export interface LeadSubmission {
  name: string;
  phone: string;
  goal: string;
  preferredTime: string;
  gender?: string;
  message?: string;
}
