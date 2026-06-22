import productWheelchair from "@/assets/product-wheelchair.jpg";
import productMonitor from "@/assets/product-monitor.jpg";
import productBed from "@/assets/product-bed.jpg";
import productOxygen from "@/assets/product-oxygen.jpg";

export type Product = {
  id: string;
  img: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  tag: "Mobility" | "Self-Care" | "Support";
  blurb: string;
  highlights: string[];
};

export const products: Product[] = [
  {
    id: "lightweight-wheelchair",
    img: productWheelchair,
    name: "Premium Lightweight Wheelchair",
    price: 489,
    rating: 4.8,
    reviews: 214,
    tag: "Mobility",
    blurb: "Foldable aluminum frame with ergonomic seating for daily comfort.",
    highlights: ["Aircraft-grade aluminum frame", "Foldable in under 10 seconds", "Pressure-relief cushion included", "Weight capacity 300 lbs"],
  },
  {
    id: "bp-monitor",
    img: productMonitor,
    name: "Digital Blood Pressure Monitor",
    price: 89,
    rating: 4.9,
    reviews: 412,
    tag: "Self-Care",
    blurb: "Clinically accurate readings in under 30 seconds, with app sync.",
    highlights: ["Upper-arm cuff, FDA-cleared", "Stores 120 readings", "Bluetooth sync to Apple Health", "Irregular heartbeat detection"],
  },
  {
    id: "home-care-bed",
    img: productBed,
    name: "Adjustable Home Care Bed",
    price: 1290,
    rating: 4.7,
    reviews: 88,
    tag: "Support",
    blurb: "Five-position electric adjustment for recovery and comfort.",
    highlights: ["Silent dual-motor adjustment", "Built-in side rails", "Pressure-redistribution mattress", "Battery backup included"],
  },
  {
    id: "oxygen-concentrator",
    img: productOxygen,
    name: "Portable Oxygen Concentrator",
    price: 1450,
    rating: 4.9,
    reviews: 156,
    tag: "Support",
    blurb: "Continuous flow, FAA-approved, with quiet 38 dB operation.",
    highlights: ["FAA-approved for travel", "Up to 8 hours battery life", "Whisper-quiet 38 dB", "Touchscreen control"],
  },
];

export type Blog = {
  slug: string;
  title: string;
  read: string;
  date: string;
  category: string;
  excerpt: string;
};

export const blogs: Blog[] = [
  { slug: "navigating-medicare-coverage", title: "Navigating Medicare Coverage for Home Medical Equipment", read: "9 min", date: "12 Apr, 2026", category: "Insurance", excerpt: "A practical walkthrough of Part B benefits, prior authorization, and what to expect when ordering durable equipment." },
  { slug: "choosing-the-right-wheelchair", title: "Choosing the Right Wheelchair for Long-Term Comfort", read: "7 min", date: "02 Apr, 2026", category: "Mobility", excerpt: "Weight, width, cushion, and propulsion — the four decisions that matter most when picking a chair you'll live with." },
  { slug: "home-monitoring-blood-pressure", title: "Home Monitoring: Getting Blood Pressure Readings You Can Trust", read: "5 min", date: "21 Mar, 2026", category: "Self-Care", excerpt: "Cuff placement, posture, time of day — small changes that make a meaningful difference in the numbers you report." },
  { slug: "preparing-home-for-recovery", title: "Preparing Your Home for Post-Surgery Recovery", read: "8 min", date: "09 Mar, 2026", category: "Recovery", excerpt: "What to remove, what to add, and how to lay out a single floor so the first three weeks home are simpler." },
  { slug: "oxygen-therapy-basics", title: "Oxygen Therapy at Home: A Plain-English Guide", read: "10 min", date: "28 Feb, 2026", category: "Support", excerpt: "Flow rates, tubing safety, travel rules, and the difference between a concentrator and a tank." },
  { slug: "caregiver-burnout", title: "How Caregivers Avoid Burnout in the First 90 Days", read: "6 min", date: "14 Feb, 2026", category: "Caregivers", excerpt: "A simple weekly rhythm that protects your energy without compromising the care you provide." },
];
