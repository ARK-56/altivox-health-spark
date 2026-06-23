import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight, ShieldCheck, Truck, Star, Plus, Minus,
  CheckCircle2, PackageCheck, ClipboardCheck, HeartHandshake, Lock, BadgeCheck,
} from "lucide-react";
import heroImg from "@/assets/hero-care.jpg";
import { SiteShell, PillButton, Eyebrow } from "@/components/site/shared";
import { products, blogs } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Altivox Health Solution — Medical Equipment For Your Needs" },
      { name: "description", content: "Premium durable medical equipment delivered with care. From wheelchairs to respiratory devices, we provide FDA-certified products with professional guidance." },
      { property: "og:title", content: "Altivox Health Solution" },
      { property: "og:description", content: "Premium durable medical equipment delivered with care — FDA-certified, HIPAA-compliant, free shipping on orders over $100." },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Premium medical equipment in a clinical setting" className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28 lg:pt-32 lg:pb-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs text-foreground/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Welcome to Altivox Health Solution
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] text-ink">
            Medical Equipment{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              For Your Needs
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
            Premium durable medical equipment delivered with care. From wheelchairs to respiratory devices, we provide FDA-certified products with professional guidance.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PillButton to="/shop">Browse Equipment</PillButton>
            <a href="#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-primary inline-flex items-center gap-2">
              How It Works <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-14 grid sm:grid-cols-3 gap-4 max-w-xl">
            {[
              { icon: BadgeCheck, t: "FDA Certified", d: "Products meet FDA classification standards." },
              { icon: ShieldCheck, t: "HIPAA Compliant", d: "End-to-end encrypted intake & records." },
              { icon: Truck, t: "Free Shipping $100+", d: "Tracked delivery nationwide." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-border bg-card/80 backdrop-blur p-4">
                <f.icon className="h-5 w-5 text-primary" />
                <div className="mt-3 text-sm font-semibold text-foreground">{f.t}</div>
                <div className="text-xs text-muted-foreground mt-1">{f.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-border bg-card/80 backdrop-blur px-5 py-3">
            <div className="font-display text-2xl font-semibold text-primary">260k+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest">Satisfied Patients</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Altivox Health Solution", "FDA Certified", "HIPAA Compliant", "Free Shipping $100+", "Insurance Verified"];
  return (
    <div className="border-y border-border bg-primary text-primary-foreground overflow-hidden">
      <div className="marquee-track flex whitespace-nowrap py-5">
        {[...items, ...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-6 px-6 text-sm font-medium uppercase tracking-[0.2em]">
            <span>{it}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/60" />
          </div>
        ))}
      </div>
    </div>
  );
}

function WhyAltivox() {
  const features = [
    { icon: ClipboardCheck, t: "Simple, Seamless Process", d: "Purchase your DME equipment online and schedule delivery in minutes — fast, easy, and secure." },
    { icon: Truck, t: "Fast & Reliable Delivery", d: "Standard shipping or white-glove delivery for heavy equipment — we handle the logistics." },
    { icon: BadgeCheck, t: "FDA Certified Products", d: "Every product meets FDA classification standards with proper HCPCS coding for insurance claims." },
    { icon: PackageCheck, t: "Digital Order Tracking", d: "Track your order in real-time from warehouse to doorstep with full visibility." },
    { icon: HeartHandshake, t: "Designed for Patient Care", d: "Equipment selected with patient comfort and clinical efficacy as top priorities." },
  ];
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Why Altivox</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-ink">
              Smarter Health <span className="text-primary">Equipment.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted-foreground text-base lg:text-lg">
              A modern way to source the durable medical equipment you need — built around the patient, not the paperwork.
            </p>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={f.t} className="group rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1" style={{ background: i === 1 ? "var(--gradient-soft)" : undefined }}>
              <div className="h-12 w-12 rounded-2xl bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-ink">{f.t}</h3>
              <p className="mt-3 text-muted-foreground text-sm">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Eyebrow>Featured</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight">Recommended For You</h2>
          </div>
          <PillButton variant="ghost" to="/shop">View All →</PillButton>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((p) => (
            <Link to="/shop/$id" params={{ id: p.id }} key={p.id} className="group rounded-3xl bg-card border border-border overflow-hidden flex flex-col">
              <div className="relative aspect-square bg-surface-strong">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                {p.rxRequired && <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1 rounded-full">Rx Required</span>}
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-1 text-xs text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-3.5 w-3.5 fill-current" />))}
                  <span className="text-muted-foreground ml-1">({p.reviews})</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-ink leading-snug">{p.name}</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">HCPCS: {p.hcpcs}</span>
                  <span className="text-xs font-medium text-primary inline-flex items-center gap-1">View Details →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <PillButton to="/shop">View All Products →</PillButton>
        </div>
      </div>
    </section>
  );
}

function Privacy() {
  const points = [
    "Your health data stays private",
    "We comply with HIPAA and global privacy standards",
    "You can trust Altivox to safeguard your information",
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <Eyebrow>Privacy</Eyebrow>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight">
            Your Data is Our <span className="text-primary">Top Priority.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            At Altivox Health Solution, we prioritize your privacy and security. Our platform employs advanced encryption and strict data protection protocols to safeguard your information.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <PillButton variant="ghost" to="/about">Learn More</PillButton>
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="rounded-[2rem] overflow-hidden border border-border" style={{ background: "var(--gradient-soft)" }}>
            <div className="aspect-[5/4] grid place-items-center p-12">
              <div className="rounded-3xl bg-card border border-border p-8 w-full max-w-sm shadow-[var(--shadow-elegant)]">
                <Lock className="h-8 w-8 text-primary" />
                <div className="mt-5 font-display text-2xl font-semibold text-ink">End-to-end Encrypted</div>
                <p className="mt-2 text-sm text-muted-foreground">Every intake form, prescription, and record is encrypted in transit and at rest.</p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-surface p-3">
                    <div className="text-xs text-muted-foreground">Compliance</div>
                    <div className="text-sm font-semibold text-ink mt-1">HIPAA</div>
                  </div>
                  <div className="rounded-2xl bg-surface p-3">
                    <div className="text-xs text-muted-foreground">Encryption</div>
                    <div className="text-sm font-semibold text-ink mt-1">AES-256</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogPreview() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Eyebrow>Blog</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight max-w-3xl">
              Discover helpful insights, health tips, and the science behind our approach.
            </h2>
          </div>
          <PillButton variant="ghost" to="/blogs">View all</PillButton>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {blogs.slice(0, 3).map((b) => (
            <Link to="/blogs/$slug" params={{ slug: b.slug }} key={b.slug} className="group rounded-3xl border border-border bg-card p-6 flex flex-col hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{b.date} · {b.read} read</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink leading-snug group-hover:text-primary transition-colors">{b.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground flex-1">{b.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Read article <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    { q: "What is Altivox Health Solution?", a: "Altivox Health Solution is a trusted provider of durable medical equipment (DME), offering FDA-certified products from wheelchairs and hospital beds to respiratory devices. We provide a seamless online purchasing experience with professional support." },
    { q: "How does the ordering process work?", a: "Browse our catalog, place your order, and our team verifies your prescription and insurance coverage. Once approved, equipment ships directly to your door — usually within 3–5 business days, fully tracked." },
    { q: "Do I need a prescription for all products?", a: "Most durable medical equipment requires a valid prescription. Products that require Rx are clearly marked. If you don't have a prescription yet, our coordinators can work directly with your physician." },
    { q: "Is my order covered by insurance?", a: "Most of our DME catalog qualifies for Medicare Part B coverage, and we work with most major commercial plans. Our billing team verifies your benefits before you commit to anything." },
    { q: "How secure is my data?", a: "Every element of data transmission, storage, and access aligns with HIPAA privacy regulations. Records and intake forms are encrypted end-to-end and accessible only to your assigned care team." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight">Have questions? We're here to help.</h2>
          <div className="mt-6">
            <PillButton to="/contact">Contact Us</PillButton>
          </div>
        </div>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button key={f.q} onClick={() => setOpen(isOpen ? -1 : i)} className="w-full text-left py-6 flex gap-6 items-start group">
                <span className="font-display text-sm text-primary font-semibold w-8 pt-1">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">{f.q}</h3>
                    <span className="h-9 w-9 rounded-full border border-border grid place-items-center text-primary flex-shrink-0">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </div>
                  {isOpen && <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-3xl">{f.a}</p>}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] p-10 sm:p-16 lg:p-20 text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-80 w-80 rounded-full bg-primary-foreground/5 blur-3xl" />
          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs uppercase tracking-widest">
              260k+ Satisfied Patients
            </div>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
              Trustworthy Care for You and Your Family.
            </h2>
            <p className="mt-6 text-primary-foreground/85 text-base sm:text-lg">
              Comprehensive, compassionate healthcare services designed to support your family's well-being at every stage of life.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <PillButton to="/shop">Browse Equipment</PillButton>
              <PillButton variant="ghost" to="/contact">Contact Us</PillButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <SiteShell>
      <Hero />
      <Marquee />
      <WhyAltivox />
      <Featured />
      <Privacy />
      <BlogPreview />
      <Faq />
      <CTA />
    </SiteShell>
  );
}
