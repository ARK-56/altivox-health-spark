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
  description: string;
  specs: { label: string; value: string }[];
  inTheBox: string[];
  insurance: string;
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
    description: "Engineered for daily independence, the Altivox Lightweight Wheelchair pairs an aircraft-grade aluminum frame with a contoured, pressure-redistributing cushion. The quick-release wheels and one-handed fold make it as easy to load into a trunk as it is to navigate a tight hallway.",
    specs: [
      { label: "Frame", value: "6061-T6 aluminum" },
      { label: "Weight", value: "24 lbs (without wheels)" },
      { label: "Weight capacity", value: "300 lbs" },
      { label: "Seat width", value: "18 in (16 / 20 available)" },
      { label: "Fold time", value: "Under 10 seconds" },
      { label: "Warranty", value: "5-year frame / 1-year parts" },
    ],
    inTheBox: ["Wheelchair frame", "Quick-release rear wheels", "Pressure-relief cushion", "Swing-away footrests", "Owner's manual"],
    insurance: "Typically covered under Medicare Part B with prior authorization and a written prescription. Our coordinators handle the paperwork end-to-end.",
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
    description: "A clinician-grade upper-arm monitor designed for the kitchen counter. Readings sync automatically to Apple Health and Google Fit, so your care team always has the latest numbers — no spreadsheets required.",
    specs: [
      { label: "Cuff size", value: "9–17 in (adult)" },
      { label: "Memory", value: "120 readings, 2 users" },
      { label: "Connectivity", value: "Bluetooth 5.0" },
      { label: "Accuracy", value: "±3 mmHg / ±5% pulse" },
      { label: "Power", value: "4× AA or USB-C" },
      { label: "Warranty", value: "2-year limited" },
    ],
    inTheBox: ["BP monitor base", "Upper-arm cuff", "Storage pouch", "4× AA batteries", "Quick-start guide"],
    insurance: "Often reimbursable through FSA / HSA accounts. Some Medicare Advantage plans cover home BP monitoring — we can verify your plan in minutes.",
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
    description: "A full-feature hospital-style bed that fits a home bedroom. Dual silent motors handle five positions independently, side rails fold flush, and the included pressure-redistribution mattress is rated for long-term recovery.",
    specs: [
      { label: "Positions", value: "Head, foot, height, Trendelenburg" },
      { label: "Motors", value: "Dual silent (38 dB)" },
      { label: "Capacity", value: "450 lbs" },
      { label: "Mattress", value: "6-zone pressure redistribution" },
      { label: "Battery backup", value: "Yes — 4 hr standby" },
      { label: "Warranty", value: "5-year frame / 2-year electronics" },
    ],
    inTheBox: ["Bed frame & deck", "Pressure-redistribution mattress", "Folding side rails (pair)", "Wired remote", "Battery backup unit"],
    insurance: "Covered under Medicare Part B as durable medical equipment with prescription and CMN. We coordinate delivery, setup, and removal of old equipment.",
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
    description: "Travel-ready continuous-flow oxygen that doesn't tether you to the wall. FAA-approved for every U.S. airline, with a swap-friendly battery design and a touchscreen interface that's actually usable.",
    specs: [
      { label: "Flow", value: "Continuous, 0.5–3 LPM" },
      { label: "Battery life", value: "Up to 8 hrs (dual-battery)" },
      { label: "Noise", value: "38 dB at 2 LPM" },
      { label: "Weight", value: "5.0 lbs" },
      { label: "FAA approval", value: "Yes — all U.S. carriers" },
      { label: "Warranty", value: "3-year unit / 1-year battery" },
    ],
    inTheBox: ["Concentrator unit", "Dual battery", "AC + DC power supplies", "Carry case & shoulder strap", "Nasal cannula (2)"],
    insurance: "Covered under Medicare Part B with qualifying oxygen saturation testing. Our team coordinates the testing and paperwork with your physician.",
  },
];

export type Blog = {
  slug: string;
  title: string;
  read: string;
  date: string;
  category: string;
  excerpt: string;
  author: string;
  sections: { heading: string; body: string }[];
  takeaways: string[];
};

export const blogs: Blog[] = [
  {
    slug: "navigating-medicare-coverage",
    title: "Navigating Medicare Coverage for Home Medical Equipment",
    read: "9 min",
    date: "12 Apr, 2026",
    category: "Insurance",
    excerpt: "A practical walkthrough of Part B benefits, prior authorization, and what to expect when ordering durable equipment.",
    author: "Priya Raman, Insurance Lead",
    sections: [
      { heading: "What Medicare Part B actually covers", body: "Part B covers a wide range of durable medical equipment (DME) — wheelchairs, hospital beds, oxygen, walkers, CPAP — when prescribed for use in the home. The key phrase is medically necessary: your physician must document why the equipment is essential and you must use a Medicare-approved supplier." },
      { heading: "Prior authorization, in plain English", body: "Some equipment requires Medicare to approve the order before it ships. This is not a denial — it's a paperwork step. A well-prepared submission (prescription, diagnosis code, supporting clinical notes) typically clears in 3–5 business days." },
      { heading: "What you'll pay", body: "After your Part B deductible, you generally pay 20% of the Medicare-approved amount. Supplemental (Medigap) plans often pick up that 20%. Medicare Advantage plans vary — check your plan's DME benefit and preferred-supplier list." },
      { heading: "Common pitfalls", body: "The two most frequent delays we see: a prescription that's missing the diagnosis code, and a supplier who isn't Medicare-enrolled. We pre-verify both before placing an order, which is why our average turnaround is days, not weeks." },
    ],
    takeaways: ["Get the prescription, diagnosis code, and clinical notes together up front.", "Confirm your supplier is Medicare-enrolled before ordering.", "Plan for 3–5 business days when prior auth is required."],
  },
  {
    slug: "choosing-the-right-wheelchair",
    title: "Choosing the Right Wheelchair for Long-Term Comfort",
    read: "7 min",
    date: "02 Apr, 2026",
    category: "Mobility",
    excerpt: "Weight, width, cushion, and propulsion — the four decisions that matter most when picking a chair you'll live with.",
    author: "Dr. Marcus Hale, Clinical Director",
    sections: [
      { heading: "Start with weight", body: "Frame weight determines whether the chair gets used or sits in a closet. A chair you can lift into a trunk is a chair you'll take to the grocery store. Anything over 30 lbs becomes a two-person job in most homes." },
      { heading: "Seat width is non-negotiable", body: "Too narrow causes pressure injuries; too wide causes shoulder strain when propelling. Measure hip width seated, add an inch on each side, and round to the nearest standard size (16, 18, 20 in)." },
      { heading: "The cushion does the heavy lifting", body: "A good cushion outlasts two chair frames. Look for pressure-redistribution foam or gel for daily use, and budget for a replacement every 18–24 months." },
      { heading: "Self-propel or attendant-push?", body: "Honest answer: think about a year from now, not today. If your strength is likely to improve, lean self-propel. If recovery is uncertain, attendant-push frames are lighter and easier to transport." },
    ],
    takeaways: ["Keep the chair under 30 lbs if anyone will be lifting it.", "Measure seat width seated, not standing.", "Treat the cushion as a consumable — plan to replace it."],
  },
  {
    slug: "home-monitoring-blood-pressure",
    title: "Home Monitoring: Getting Blood Pressure Readings You Can Trust",
    read: "5 min",
    date: "21 Mar, 2026",
    category: "Self-Care",
    excerpt: "Cuff placement, posture, time of day — small changes that make a meaningful difference in the numbers you report.",
    author: "Nina Okafor, RN",
    sections: [
      { heading: "Same time, same arm, same chair", body: "Blood pressure shifts throughout the day. To trend meaningfully, take readings at the same two times daily (morning before coffee, evening before dinner), on the same arm, in the same seated position." },
      { heading: "Cuff placement matters more than the device", body: "The cuff goes on bare skin, snug enough that you can slide one finger underneath, with the bottom edge an inch above the elbow crease. Over a sleeve adds 10–40 mmHg of noise." },
      { heading: "Sit still for five minutes first", body: "Walking up the stairs and immediately taking a reading will give you a number that scares you for no reason. Sit, feet flat, back supported, for five quiet minutes before measuring." },
    ],
    takeaways: ["Same arm, same time, same chair — every day.", "Cuff on bare skin, snug but not tight.", "Five quiet minutes before the first reading."],
  },
  {
    slug: "preparing-home-for-recovery",
    title: "Preparing Your Home for Post-Surgery Recovery",
    read: "8 min",
    date: "09 Mar, 2026",
    category: "Recovery",
    excerpt: "What to remove, what to add, and how to lay out a single floor so the first three weeks home are simpler.",
    author: "Elena Vasquez, Recovery Coordinator",
    sections: [
      { heading: "Pick one floor and commit", body: "If you have stairs, set up everything you need on a single level — bed, bathroom, kitchen access. Even if you can manage stairs, you shouldn't have to during recovery." },
      { heading: "Remove the trip hazards", body: "Throw rugs, loose cords, low ottomans. Pets that weave around your feet. The first two weeks are the highest-risk window for falls — clear the runway." },
      { heading: "Add the right equipment, not all the equipment", body: "A raised toilet seat, a shower bench, and a grab bar near the shower handle most situations. Skip the catalog of gadgets and add only what your specific procedure requires." },
    ],
    takeaways: ["One floor, everything reachable.", "Trip hazards out before you come home.", "Three pieces of bathroom equipment cover most needs."],
  },
  {
    slug: "oxygen-therapy-basics",
    title: "Oxygen Therapy at Home: A Plain-English Guide",
    read: "10 min",
    date: "28 Feb, 2026",
    category: "Support",
    excerpt: "Flow rates, tubing safety, travel rules, and the difference between a concentrator and a tank.",
    author: "Dr. Marcus Hale, Clinical Director",
    sections: [
      { heading: "Concentrator vs. tank — which when?", body: "Concentrators pull oxygen from room air and never need refilling, so they're the daily-use default. Tanks are still useful as a backup for power outages and for brief outings when battery life is tight." },
      { heading: "Flow rates aren't a dial-it-yourself setting", body: "Your prescription specifies a flow rate (often 2 LPM continuous). Don't adjust it based on how you feel — too high can suppress your drive to breathe, too low won't reach therapeutic saturation." },
      { heading: "Tubing safety in plain terms", body: "No open flames within 6 feet. No smoking in the home — full stop. Keep tubing run flat against walls so it doesn't become a trip hazard for you or visitors." },
    ],
    takeaways: ["Concentrator daily, tank for backup.", "Don't change flow rate without your physician.", "Six feet from any flame, always."],
  },
  {
    slug: "caregiver-burnout",
    title: "How Caregivers Avoid Burnout in the First 90 Days",
    read: "6 min",
    date: "14 Feb, 2026",
    category: "Caregivers",
    excerpt: "A simple weekly rhythm that protects your energy without compromising the care you provide.",
    author: "Nina Okafor, RN",
    sections: [
      { heading: "Schedule rest like a medication", body: "If rest isn't on the calendar, it doesn't happen. Block two two-hour windows per week where someone else — a family member, a respite service — is on duty. Non-negotiable." },
      { heading: "Outsource the logistics, not the love", body: "You don't need to be the one who calls the pharmacy, schedules transport, or fights with insurance. Those are concierge tasks. Save your energy for presence." },
      { heading: "Watch for the early signs", body: "Sleep disruption, irritability with the person you're caring for, skipped meals. These are the early flags. Address them in the first week you notice them, not the third." },
    ],
    takeaways: ["Two protected rest windows per week, on the calendar.", "Outsource logistics; protect presence.", "Treat early burnout signs as urgent, not eventual."],
  },
];
