import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
  Video,
  Clock,
  FileText,
  Stethoscope,
  Activity,
  Brain,
  Heart,
  Baby,
  UserPlus,
  Flower2,
  Dumbbell,
  ShieldCheck,
} from "lucide-react";

// ==========================================
// 1. HEALTHCARE CATEGORIES (Single Source of Truth)
// ==========================================
export const healthcareCategories = [
  {
    id: "primary-care",
    title: "Primary Care",
    icon: Stethoscope, // Using actual React components
    color: "bg-blue-500",
  },
  {
    id: "manage-condition",
    title: "Manage Your Condition",
    icon: Activity,
    color: "bg-green-500",
  },
  {
    id: "mental-behavioral-health",
    title: "Mental & Behavioral Health",
    icon: Brain,
    color: "bg-yellow-500",
  },
  {
    id: "sexual-health",
    title: "Sexual Health",
    icon: ShieldCheck,
    color: "bg-pink-500",
  },
  {
    id: "childrens-health",
    title: "Children's Health",
    icon: Baby,
    color: "bg-red-500",
  },
  {
    id: "senior-health",
    title: "Senior Health",
    icon: UserPlus,
    color: "bg-orange-500",
  },
  {
    id: "womens-health",
    title: "Women's Health",
    icon: Flower2,
    color: "bg-purple-500",
  },
  {
    id: "mens-health",
    title: "Men's Health",
    icon: Dumbbell,
    color: "bg-indigo-500",
  },
  {
    id: "wellness",
    title: "Wellness",
    icon: Heart,
    color: "bg-emerald-500",
  },
];

// Dynamically generate the list so you never have to type it twice
export const healthcareCategoriesList = healthcareCategories.map(
  (cat) => cat.title,
);

// ==========================================
// 2. DOCTOR METADATA
// ==========================================
export const specializations = [
  "Cardiologist",
  "Dermatologist",
  "Orthopedic",
  "Pediatrician",
  "Neurologist",
  "Gynecologist",
  "General Physician",
  "ENT Specialist",
  "Psychiatrist",
  "Ophthalmologist",
];

export const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
];

export const consultationTypes = [
  {
    type: "Video Consultation",
    icon: Video,
    description: "Face-to-face consultation via HD video call",
    price: 0,
    recommended: true,
  },
  {
    type: "Voice Call",
    icon: Phone,
    description: "Audio-only consultation via voice call",
    price: -100, // Assuming this means a discount
    recommended: false,
  },
];

// ==========================================
// 3. COMPANY DATA & CONTENT
// ==========================================
export const contactInfo = [
  { icon: Phone, text: "1-888-MEDICARE (1-888-633-4227)" },
  { icon: Mail, text: "support@medicare-plus.com" },
  { icon: MapPin, text: "Available across India" },
];

export const socials = [
  { name: "twitter", icon: Twitter, url: "https://twitter.com/medicare-plus" },
  {
    name: "facebook",
    icon: Facebook,
    url: "https://facebook.com/medicare-plus",
  },
  {
    name: "linkedin",
    icon: Linkedin,
    url: "https://linkedin.com/company/medicare-plus",
  },
  {
    name: "instagram",
    icon: Instagram,
    url: "https://instagram.com/medicare-plus",
  },
];

export const trustLogos = [
  "Business Insider",
  "CBS News",
  "CNBC",
  "Forbes",
  "Fortune",
  "Fox Business",
  "Healthline",
  "Inc.",
  "Men's Health",
  "TechCrunch",
  "The New York Times",
  "WSJ",
];

export const emptyStates = {
  upcoming: {
    icon: Clock,
    title: "No Upcoming Appointments",
    description: "You have no upcoming appointments scheduled.",
  },
  completed: {
    icon: FileText,
    title: "No Completed Appointments",
    description: "Completed consultations will appear here.",
  },
};

// Testimonials and FAQs remain exactly as you had them (they were formatted perfectly).
export const testimonials = [
  {
    rating: 5,
    text: "Doctor was available right away, listened to my symptoms and prescribed the right medication. He made sure to explain the medicines and that was it. Very fast and easy.",
    author: "Pat J.",
    location: "From Texas",
    bgColor: "bg-chart-1/10",
  },
  {
    rating: 5,
    text: "The doctor made me feel comfortable right away, very easy to ask about concerns I might have had and great feedback from my doctors.",
    author: "Patrice P.",
    location: "From New York",
    bgColor: "bg-chart-2/10",
  },
  {
    rating: 5,
    text: "My doctor was very professional, thorough, and careful to ask me numerous relevant questions. She answered my questions not only in a detailed manner, but also in a way I could understand.",
    author: "Betty M.",
    location: "From Tennessee",
    bgColor: "bg-chart-4/10",
  },
  {
    rating: 5,
    text: "It was quick & easy to book the appointment. I was able to get a PC appointment the next morning... within 12 hours! I connected and got my ongoing meds refilled. It was so nice for me living in a rural community.",
    author: "Katherine M.",
    location: "From California",
    bgColor: "bg-chart-5/10",
  },
];

export const faqs = [
  {
    question: "How much does a doctor visit with MediCare+ cost?",
    answer:
      "With insurance, you pay your copay based on your plan. We accept most plans, including Medicare. Without insurance, online doctor visits are $129. You can become a MediCare+ member and pay $44/visit. Membership is $55 for three months and $180 for a yearly membership.",
  },
  {
    question: "Do you accept health insurance?",
    answer:
      "Yes, we accept most major health insurance plans including Medicare, BlueCross BlueShield, Aetna, United Healthcare, Cigna, Humana, and many others. We also accept FSA and HSA payments.",
  },
  {
    question: "What conditions can MediCare+ doctors treat?",
    answer:
      "Our doctors can treat a wide range of conditions including cold and flu symptoms, allergies, skin conditions, mental health concerns, chronic condition management, and much more through virtual consultations.",
  },
  {
    question: "How quickly can I see a doctor?",
    answer:
      "Many of our doctors are available for same-day appointments, and some offer immediate consultations. You can book appointments that fit your schedule, often within hours of your request.",
  },
];

export const footerSections = [
  {
    title: "Company",
    links: [
      { text: "About Us", href: "/about" },
      { text: "Support Center", href: "/support" },
      { text: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "For Healthcare",
    links: [
      { text: "Join as Doctor", href: "/signup/doctor" },
      { text: "Doctor Resources", href: "/doctor-resources" },
    ],
  },
  {
    title: "For Patients",
    links: [
      { text: "Find Doctors", href: "/doctors" },
      { text: "Book Appointment", href: "/signup/patient" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Terms of Service", href: "/terms" },
    ],
  },
];
