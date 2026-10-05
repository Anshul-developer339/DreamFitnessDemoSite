import type { Testimonial } from '../types';

export const GYM_INFO = {
  name: 'Dream Fitness Gym',
  tagline: 'Best Gym in Muradnagar',
  rating: 4.8,
  reviewCount: 45,
  phone: '+91 98709 81234',
  displayPhone: '+91 98709 81234',
  whatsappNumber: '919870981234',
  address: 'Metro Pillar No. 870, 179/2, GT Rd, New Defence Colony, Muradnagar, Mohammadpur Dwedha, Uttar Pradesh 201206',
  landmark: 'Adjacent to Metro Pillar No. 870 on GT Road (Opposite Muradnagar Rapid Rail Corridor)',
  timing: 'Open daily till 11:00 PM',
  timingDetailed: {
    morning: '5:30 AM – 11:30 AM',
    evening: '4:30 PM – 11:00 PM',
    sunday: '6:00 AM – 1:00 PM',
  },
  googleMapsUrl: 'https://maps.google.com/?q=Metro+Pillar+No.+870,+179/2,+GT+Rd,+New+Defence+Colony,+Muradnagar,+Uttar+Pradesh+201206',
};

export const HIGHLIGHTS_DATA = [
  {
    id: 'imported-equipment',
    title: 'Top-Notch Imported Machines',
    description: 'Precision biomechanical angles, heavy duty Olympic rigs, smith machines, and imported cable stations engineered for zero joint stress and maximum muscle growth.',
    stat: '100% Commercial Grade',
    highlightKey: 'Biomechanics',
  },
  {
    id: 'certified-trainers',
    title: 'Humble & Certified Trainers',
    description: 'Polite, approachable, and certified coaches who personalize posture correction, spot your heavy lifts, and design real step-by-step progress routines.',
    stat: '1-on-1 Guidance',
    highlightKey: 'Expert Support',
  },
  {
    id: 'female-trainer',
    title: 'Female Trainer Available',
    description: 'A completely comfortable, respectful, and safe training environment with dedicated female certified coach guidance for weight loss, strength, and posture.',
    stat: 'Safe & Inclusive',
    highlightKey: 'Women Friendly',
  },
  {
    id: 'clean-aura',
    title: 'Clean & Fresh High-Energy Vibe',
    description: 'Air-conditioned, fresh-smelling interior with continuous sanitation, high-energy acoustics, and an uplifting atmosphere that keeps you motivated every rep.',
    stat: 'Sanitized Daily',
    highlightKey: 'Positive Aura',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rohit Sharma',
    role: 'Member since 2023 · Strength Athlete',
    rating: 5,
    date: '3 weeks ago',
    quote: 'Without doubt the best gym in Muradnagar. The imported machines here feel far superior to regular local gyms. Smooth motion, no rattling, and the aura inside is always energetic and clean.',
    highlightTag: 'Imported Equipment',
  },
  {
    id: '2',
    name: 'Pooja Tyagi',
    role: 'Member since 2024 · Fitness Enthusiast',
    rating: 5,
    date: '1 month ago',
    quote: 'As a woman, finding a respectful, comfortable gym was my top priority. The female trainer here is extremely polite, certified, and knowledgeable. The environment is safe and very encouraging.',
    highlightTag: 'Female Trainer Available',
  },
  {
    id: '3',
    name: 'Deepak Choudhary',
    role: 'Member since 2022 · Weight Loss Journey',
    rating: 5,
    date: '2 months ago',
    quote: 'What sets Dream Fitness apart is the pricing and the trainers humility. Extremely reasonable and affordable monthly fee for such high-grade facilities. They genuinely care about your transformation.',
    highlightTag: 'Affordable Pricing',
  },
  {
    id: '4',
    name: 'Vikas Kumar',
    role: 'Local Muradnagar Resident · Calisthenics & Cardio',
    rating: 5,
    date: '1 month ago',
    quote: 'The gym remains open till 11:00 PM, which is a blessing after late office commutes on GT Road. Located right next to Metro Pillar 870, spacious floor capacity, and always smells fresh.',
    highlightTag: 'Open Till 11 PM',
  },
];

export const MEMBERSHIP_PLANS = [
  {
    name: 'Monthly Pass',
    price: '₹999',
    period: '/ month',
    badge: 'Flexible',
    popular: false,
    description: 'Ideal for getting started with zero long-term commitments.',
    features: [
      'Full access to all imported machines',
      'Cardio & strength training floor',
      'Certified trainer general floor guidance',
      'Locker room & shower access',
      'Open daily till 11:00 PM',
    ],
  },
  {
    name: 'Quarterly Transformation',
    price: '₹2,499',
    period: '/ 3 months',
    badge: 'Most Popular',
    popular: true,
    description: 'The sweet spot for visible transformation and routine building.',
    features: [
      'All Monthly Pass benefits',
      'Personalized workout routine chart',
      'Body composition & BMI tracking',
      'Female trainer guidance available',
      'Dietary guidance & hydration coaching',
    ],
  },
  {
    name: 'Annual Champion',
    price: '₹7,999',
    period: '/ year',
    badge: 'Best Value',
    popular: false,
    description: 'Unbeatable rate for year-round fitness & serious athletic gains.',
    features: [
      'Complete 365-day full gym access',
      'Dedicated goal assessment sessions',
      'Priority personal coaching sessions',
      'Free 1-week guest pass for friends',
      'Guaranteed membership freeze up to 30 days',
    ],
  },
];
