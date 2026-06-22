import productWheelchair from "@/assets/product-wheelchair.jpg";
import productBed from "@/assets/product-bed.jpg";
import productOxygen from "@/assets/product-oxygen.jpg";
import productWalker from "@/assets/product-walker.jpg";
import productCpap from "@/assets/product-cpap.jpg";
import productKneeScooter from "@/assets/product-knee-scooter.jpg";
import productBathChair from "@/assets/product-bath-chair.jpg";
import productTransferBench from "@/assets/product-transfer-bench.jpg";
import productPatientLift from "@/assets/product-patient-lift.jpg";
import productHoyerSling from "@/assets/product-hoyer-sling.jpg";

export type Product = {
  id: string;
  img: string;
  name: string;
  hcpcs: string;
  rxRequired?: boolean;
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
    id: "prolite-ultra-wheelchair",
    img: productWheelchair,
    name: "ProLite Ultra Wheelchair",
    hcpcs: "K0001",
    rating: 4.8,
    reviews: 124,
    tag: "Mobility",
    blurb: "Lightweight aluminum-frame wheelchair built for daily comfort and easy transport.",
    highlights: ["Aircraft-grade aluminum frame", "Foldable in under 10 seconds", "Pressure-relief cushion included", "Weight capacity 300 lbs"],
    description: "The ProLite Ultra pairs an aircraft-grade aluminum frame with a contoured, pressure-redistributing cushion. Quick-release wheels and a one-handed fold make it as easy to load into a trunk as it is to navigate a tight hallway.",
    specs: [
      { label: "HCPCS", value: "K0001" },
      { label: "Frame", value: "6061-T6 aluminum" },
      { label: "Weight", value: "24 lbs (without wheels)" },
      { label: "Capacity", value: "300 lbs" },
      { label: "Seat width", value: "18 in (16 / 20 available)" },
      { label: "Warranty", value: "5-year frame / 1-year parts" },
    ],
    inTheBox: ["Wheelchair frame", "Quick-release rear wheels", "Pressure-relief cushion", "Swing-away footrests", "Owner's manual"],
    insurance: "Typically covered under Medicare Part B with prior authorization and a written prescription. Our coordinators handle the paperwork end-to-end.",
  },
  {
    id: "medcare-hospital-bed",
    img: productBed,
    name: "MedCare Hospital Bed",
    hcpcs: "E0260",
    rxRequired: true,
    rating: 4.7,
    reviews: 89,
    tag: "Support",
    blurb: "Semi-electric home hospital bed with adjustable head, foot, and height positioning.",
    highlights: ["Silent dual-motor adjustment", "Built-in side rails", "Pressure-redistribution mattress", "Battery backup included"],
    description: "A full-feature hospital-style bed that fits a home bedroom. Dual silent motors handle multiple positions, side rails fold flush, and the included pressure-redistribution mattress is rated for long-term recovery.",
    specs: [
      { label: "HCPCS", value: "E0260" },
      { label: "Positions", value: "Head, foot, height" },
      { label: "Motors", value: "Dual silent (38 dB)" },
      { label: "Capacity", value: "450 lbs" },
      { label: "Mattress", value: "6-zone pressure redistribution" },
      { label: "Warranty", value: "5-year frame / 2-year electronics" },
    ],
    inTheBox: ["Bed frame & deck", "Pressure-redistribution mattress", "Folding side rails (pair)", "Wired remote", "Battery backup unit"],
    insurance: "Covered under Medicare Part B as durable medical equipment with prescription and CMN. We coordinate delivery and setup.",
  },
  {
    id: "stridesafe-rollator-walker",
    img: productWalker,
    name: "StrideSafe Rollator Walker",
    hcpcs: "E0143",
    rating: 4.9,
    reviews: 256,
    tag: "Mobility",
    blurb: "Four-wheel rollator with padded seat, locking brakes, and tool-free fold.",
    highlights: ["Padded flip-up seat", "Loop-style hand brakes", "Adjustable handle height", "Tool-free fold"],
    description: "A go-anywhere four-wheel rollator with a padded seat for rest stops, loop-style locking brakes, and adjustable handles that fit users from 5'0\" to 6'2\". Folds flat for the back of any car.",
    specs: [
      { label: "HCPCS", value: "E0143" },
      { label: "Frame", value: "Powder-coated steel" },
      { label: "Weight", value: "15 lbs" },
      { label: "Capacity", value: "300 lbs" },
      { label: "Wheel size", value: "8 in casters" },
      { label: "Warranty", value: "2-year limited" },
    ],
    inTheBox: ["Rollator frame", "Padded seat", "Storage pouch", "Owner's manual"],
    insurance: "Covered under Medicare Part B with a prescription. We verify your coverage before shipping.",
  },
  {
    id: "airsense-cpap-machine",
    img: productCpap,
    name: "AirSense CPAP Machine",
    hcpcs: "E0601",
    rxRequired: true,
    rating: 4.8,
    reviews: 198,
    tag: "Support",
    blurb: "Auto-adjusting CPAP with integrated humidifier and quiet 26 dB operation.",
    highlights: ["Auto-adjusting pressure (4–20 cmH2O)", "Heated humidifier", "Quiet 26 dB", "Bluetooth therapy reporting"],
    description: "A clinician-recommended CPAP that auto-titrates pressure throughout the night, runs whisper-quiet, and syncs therapy data to your phone — so your sleep team always has fresh numbers.",
    specs: [
      { label: "HCPCS", value: "E0601" },
      { label: "Pressure range", value: "4–20 cmH2O" },
      { label: "Noise", value: "26 dB" },
      { label: "Humidifier", value: "Integrated, heated" },
      { label: "Connectivity", value: "Bluetooth + cellular reporting" },
      { label: "Warranty", value: "2-year limited" },
    ],
    inTheBox: ["CPAP device", "Heated humidifier chamber", "Heated tubing", "Power supply", "Travel bag"],
    insurance: "Covered under Medicare Part B with a current sleep study and compliance reporting. Our team handles documentation.",
  },
  {
    id: "oxyflow-concentrator",
    img: productOxygen,
    name: "OxyFlow Concentrator",
    hcpcs: "E1390",
    rxRequired: true,
    rating: 4.9,
    reviews: 67,
    tag: "Support",
    blurb: "Stationary 5 LPM oxygen concentrator for continuous home oxygen therapy.",
    highlights: ["Continuous flow 0.5–5 LPM", "Quiet 40 dB operation", "OPI oxygen-purity indicator", "Energy-efficient compressor"],
    description: "Reliable stationary oxygen for daily home use. Continuous flow up to 5 LPM, an oxygen-purity indicator that stays green, and a compressor designed for 24/7 duty cycles.",
    specs: [
      { label: "HCPCS", value: "E1390" },
      { label: "Flow", value: "0.5–5 LPM continuous" },
      { label: "Noise", value: "40 dB" },
      { label: "Power", value: "350 W typical" },
      { label: "Weight", value: "31 lbs" },
      { label: "Warranty", value: "3-year unit" },
    ],
    inTheBox: ["Concentrator unit", "Humidifier bottle", "50-ft oxygen tubing", "Nasal cannula (2)", "User manual"],
    insurance: "Covered under Medicare Part B with qualifying oxygen saturation testing. We coordinate testing and paperwork with your physician.",
  },
  {
    id: "flexride-knee-scooter",
    img: productKneeScooter,
    name: "FlexRide Knee Scooter",
    hcpcs: "E0118",
    rating: 4.9,
    reviews: 312,
    tag: "Mobility",
    blurb: "Four-wheel knee walker with steering, hand brake, and removable basket.",
    highlights: ["Padded knee platform", "Locking hand brake", "8 in tires for indoor + outdoor", "Removable front basket"],
    description: "A hands-free alternative to crutches for foot, ankle, and lower-leg recovery. Steerable front wheels and a locking hand brake make tight indoor turns and outdoor curbs equally manageable.",
    specs: [
      { label: "HCPCS", value: "E0118" },
      { label: "Capacity", value: "300 lbs" },
      { label: "Knee pad", value: "Memory foam, adjustable height" },
      { label: "Tires", value: "8 in PU, non-marking" },
      { label: "Weight", value: "22 lbs" },
      { label: "Warranty", value: "1-year limited" },
    ],
    inTheBox: ["Knee scooter", "Front basket", "Hand brake assembly", "Owner's manual"],
    insurance: "Often reimbursable through FSA / HSA accounts and select Medicare Advantage plans. We can verify your plan in minutes.",
  },
  {
    id: "comfortgrip-bath-chair",
    img: productBathChair,
    name: "ComfortGrip Bath Chair",
    hcpcs: "E0240",
    rating: 4.7,
    reviews: 203,
    tag: "Self-Care",
    blurb: "Height-adjustable shower chair with non-slip feet and drainage holes.",
    highlights: ["Anodized aluminum frame", "Non-slip rubber tips", "Tool-free height adjustment", "Drainage holes prevent pooling"],
    description: "A stable, lightweight shower chair that resists corrosion and adjusts in seconds. Drainage holes keep water from pooling, and the textured seat stays grippy when wet.",
    specs: [
      { label: "HCPCS", value: "E0240" },
      { label: "Frame", value: "Anodized aluminum" },
      { label: "Capacity", value: "300 lbs" },
      { label: "Seat", value: "18 × 13 in, textured" },
      { label: "Height range", value: "13–18 in" },
      { label: "Warranty", value: "Lifetime frame" },
    ],
    inTheBox: ["Bath chair frame", "Backrest", "Non-slip feet (4)", "Assembly tool", "Manual"],
    insurance: "Bathroom safety equipment is generally not covered by Medicare but is eligible for FSA / HSA reimbursement.",
  },
  {
    id: "safestep-transfer-bench",
    img: productTransferBench,
    name: "SafeStep Transfer Bench",
    hcpcs: "E0247",
    rating: 4.8,
    reviews: 178,
    tag: "Self-Care",
    blurb: "Bathtub transfer bench with reversible orientation and dual safety rails.",
    highlights: ["Reversible left or right", "Dual safety rails", "Adjustable leg heights", "Capacity 400 lbs"],
    description: "Bridges the tub wall so you can sit, swing your legs over, and slide into position safely. Reversible setup, independently adjustable legs for uneven tub floors.",
    specs: [
      { label: "HCPCS", value: "E0247" },
      { label: "Frame", value: "Anodized aluminum" },
      { label: "Capacity", value: "400 lbs" },
      { label: "Seat dimensions", value: "26 × 13 in" },
      { label: "Adjustability", value: "Each leg independent" },
      { label: "Warranty", value: "Lifetime frame" },
    ],
    inTheBox: ["Transfer bench", "Backrest", "Safety rail (1)", "Suction-cup feet", "Manual"],
    insurance: "Generally FSA / HSA eligible. Some Medicare Advantage plans cover bathroom safety equipment — we verify your plan first.",
  },
  {
    id: "hydralift-patient-lift",
    img: productPatientLift,
    name: "HydraLift Patient Lift",
    hcpcs: "E0630",
    rxRequired: true,
    rating: 4.8,
    reviews: 45,
    tag: "Support",
    blurb: "Hydraulic patient lift for safe, single-caregiver transfers up to 400 lbs.",
    highlights: ["Hydraulic pump operation", "400 lb safe working load", "Six-point spreader bar", "Rolls on locking casters"],
    description: "A hydraulic lift built for safe one-caregiver transfers between bed, chair, wheelchair, and commode. The six-point spreader bar fits standard slings and keeps the lift point centered.",
    specs: [
      { label: "HCPCS", value: "E0630" },
      { label: "Capacity", value: "400 lbs" },
      { label: "Lift range", value: "4–66 in" },
      { label: "Base", value: "Adjustable, fits standard wheelchairs" },
      { label: "Casters", value: "5 in with rear locks" },
      { label: "Warranty", value: "5-year frame / 2-year pump" },
    ],
    inTheBox: ["Lift frame", "Hydraulic pump assembly", "Six-point spreader bar", "Owner's manual"],
    insurance: "Covered under Medicare Part B with prescription and clinical documentation. Sling is billed separately.",
  },
  {
    id: "easyglide-hoyer-sling",
    img: productHoyerSling,
    name: "EasyGlide Hoyer Sling",
    hcpcs: "E0621",
    rating: 4.7,
    reviews: 92,
    tag: "Support",
    blurb: "Full-body padded sling for use with hydraulic and electric patient lifts.",
    highlights: ["Padded leg sections", "Head support included", "Six lift loops", "Capacity 500 lbs"],
    description: "Universal full-body sling for use with most six-point patient lifts. Padded leg sections and a built-in head support make extended transfers more comfortable.",
    specs: [
      { label: "HCPCS", value: "E0621" },
      { label: "Material", value: "Polyester, machine washable" },
      { label: "Capacity", value: "500 lbs" },
      { label: "Loops", value: "6 (color-coded)" },
      { label: "Sizes", value: "S / M / L / XL" },
      { label: "Warranty", value: "1-year limited" },
    ],
    inTheBox: ["Hoyer sling", "Fitting guide", "Care instructions"],
    insurance: "Covered under Medicare Part B when prescribed alongside a patient lift. We bill the sling and lift together.",
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
