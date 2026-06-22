import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight, ShieldCheck, Truck, HeartPulse, Activity, Bed, Phone, Star,
  Check, Plus, Minus, Clock, Stethoscope,
} from "lucide-react";
import heroImg from "@/assets/hero-care.jpg";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";
import { SiteShell, PillButton, Eyebrow } from "@/components/site/shared";
import { products, blogs } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Altivox Health Solution — Home Medical Equipment & Care" },
      { name: "description", content: "Mobility equipment, self-care devices and medical support delivered with insurance verification and zero paperwork stress." },
      { property: "og:title", content: "Altivox Health Solution" },
      { property: "og:description", content: "Mobility equipment, self-care devices and medical support — delivered with care." },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Caregiver holding a patient's hand" className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28 lg:pt-32 lg:pb-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs text-foreground/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Insurance verification · Zero paperwork stress
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] text-ink">
            Care that arrives.{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Equipment that adapts.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
            Altivox Health Solution delivers premium mobility equipment, self-care devices and medical support — coordinated with your insurance and shipped directly to your door.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PillButton to="/shop">Order Products Now</PillButton>
            <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-primary inline-flex items-center gap-2">
              Learn how it works <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid sm:grid-cols-3 gap-4 max-w-xl">
            {[
              { icon: ShieldCheck, t: "HIPAA Secure", d: "End-to-end encrypted intake & records." },
              { icon: Truck, t: "3–5 Day Delivery", d: "Tracked shipping nationwide." },
              { icon: HeartPulse, t: "Care Concierge", d: "A real human on every order." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-border bg-card/80 backdrop-blur p-4">
                <f.icon className="h-5 w-5 text-primary" />
                <div className="mt-3 text-sm font-semibold text-foreground">{f.t}</div>
                <div className="text-xs text-muted-foreground mt-1">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Altivox Health Solution LLC", "Mobility Equipment", "Self-Care Devices", "Medical Support", "Insurance Verified"];
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

function About() {
  const cards = [
    { icon: Stethoscope, title: "Clinically Vetted", body: "Every product reviewed by licensed medical coordinators before it ships." },
    { icon: HeartPulse, title: "Personalized Fit", body: "We match the right equipment to your specific diagnosis and home setup." },
    { icon: Activity, title: "Outcomes First", body: "Follow-up check-ins to make sure your gear is improving daily life." },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Discover what care should feel like</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-ink">
              A predictive, personalized health platform — <span className="text-primary">for people and practitioners.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted-foreground text-base lg:text-lg">
              Our mission is to make life-improving medical equipment more accessible, more affordable, and more aligned with the way you actually live.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              View more about us <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={c.title} className="group rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1" style={{ background: i === 1 ? "var(--gradient-soft)" : undefined }}>
              <div className="h-12 w-12 rounded-2xl bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-ink">{c.title}</h3>
              <p className="mt-3 text-muted-foreground text-sm">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const cats = [
    { title: "Mobility Equipment", body: "Wheelchairs, walkers, scooters and lift chairs — engineered for independence and built to last.", icon: Activity },
    { title: "Self-Care Devices", body: "Monitor vitals at home with precision telemetry — blood pressure, oxygen, glucose, and more.", icon: HeartPulse },
    { title: "Medical Support", body: "Hospital-grade bedding, oxygen and rehabilitation systems for safe, sustained recovery at home.", icon: Bed },
  ];
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Eyebrow>Our range of categories</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink max-w-2xl leading-tight">Three pillars of in-home medical care.</h2>
          </div>
          <PillButton variant="ghost" to="/shop">Browse Catalog</PillButton>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {cats.map((c) => (
            <div key={c.title} className="rounded-3xl bg-card border border-border p-8 flex flex-col h-full">
              <div className="aspect-[4/3] rounded-2xl grid place-items-center text-primary" style={{ background: "var(--gradient-soft)" }}>
                <c.icon className="h-16 w-16" strokeWidth={1.25} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-ink">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground flex-1">{c.body}</p>
              <Link to="/shop" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Order products now <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { t: "What's healthy — not just what's common", d: "We focus on what's optimal for your long-term wellbeing, not just statistical averages." },
    { t: "Instant feedback, anywhere", d: "Submit prescriptions and intake in seconds. Receive a personalized plan without delay." },
    { t: "Your care, fully mapped", d: "We combine equipment, supplies and follow-ups into one coordinated journey." },
    { t: "Real-time signals", d: "Catch problems early with monitoring devices that surface what matters." },
    { t: "One system, any scale", d: "Manage your own care or support 50+ clients. Everything searchable, structured." },
    { t: "Progress that grows with you", d: "Adjust equipment and protocols as your needs evolve over weeks and years." },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Eyebrow>Our process</Eyebrow>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink max-w-3xl leading-tight">
          The smoothest journey from prescription to your front door.
        </h2>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {steps.map((s, i) => (
            <div key={s.t} className="bg-card p-8 hover:bg-surface transition-colors">
              <div className="flex items-center gap-3 text-primary">
                <span className="font-display text-3xl font-semibold">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Eyebrow>Our featured products</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight">Equipment. Devices. Support.</h2>
          </div>
          <PillButton variant="ghost" to="/shop">View All Products</PillButton>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <Link to="/shop/$id" params={{ id: p.id }} key={p.id} className="group rounded-3xl bg-card border border-border overflow-hidden flex flex-col">
              <div className="relative aspect-square bg-surface-strong">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-card/90 backdrop-blur px-3 py-1 rounded-full border border-border">{p.tag}</span>
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-1 text-xs text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-3.5 w-3.5 fill-current" />))}
                  <span className="text-muted-foreground ml-1">{p.rating}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-ink leading-snug">{p.name}</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-display text-xl font-semibold text-primary">${p.price}</span>
                  <span className="text-xs font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground">View</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Marcus Hale", role: "Caregiver to mother, 78", img: t1, quote: "Altivox handled the insurance maze for us. The lift chair arrived in four days and the team called twice to make sure it fit her doorway." },
    { name: "Eleanor Briggs", role: "Patient, post-surgery recovery", img: t2, quote: "After my hip replacement I was dreading the equipment search. Altivox sent exactly what my physical therapist recommended — nothing extra, nothing missing." },
    { name: "Jamie Ortiz, RN", role: "Home Health Nurse", img: t3, quote: "I refer my clients here. The follow-through is the rare thing — they actually check in to make sure the equipment is still working a month later." },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>What clients say</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight">Real stories from the families we serve.</h2>
            <p className="mt-5 text-muted-foreground">We measure success by the quiet weeks afterward — when the equipment works, the paperwork is handled, and life simply continues.</p>
            <div className="mt-8"><PillButton to="/contact">Talk to Our Team</PillButton></div>
          </div>
          <div className="lg:col-span-7 grid gap-5">
            {items.map((it) => (
              <div key={it.name} className="rounded-3xl border border-border bg-card p-6 sm:p-8 flex gap-5">
                <img src={it.img} alt={it.name} loading="lazy" width={80} height={80} className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl object-cover flex-shrink-0" />
                <div>
                  <div className="text-primary font-display text-4xl leading-none">&ldquo;</div>
                  <p className="text-foreground text-sm sm:text-base leading-relaxed">{it.quote}</p>
                  <div className="mt-4 text-sm">
                    <div className="font-semibold text-ink">{it.name}</div>
                    <div className="text-muted-foreground text-xs">{it.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    { q: "Is my information secure?", a: "Yes. We use bank-grade encryption for every intake form, and our staff are HIPAA-trained. Your records are never sold or shared outside your care team." },
    { q: "Is it covered under my Medicare?", a: "Most of our durable medical equipment qualifies for Medicare Part B coverage. Our billing team verifies your benefits before you commit to anything." },
    { q: "Is the information I share protected under HIPAA?", a: "Absolutely. Every element of data transmission, storage and access aligns with HIPAA privacy regulations and state-specific requirements." },
    { q: "When will I get my order?", a: "Once your prescription and insurance are verified, most orders ship within 24 hours and arrive at your home in 3–5 business days, fully tracked." },
    { q: "Do I need an active prescription before ordering?", a: "Durable medical equipment requires a prescription. If you don't have one yet, our coordinators can reach out to your physician on your behalf." },
    { q: "How can I modify or return my equipment?", a: "Reach your dedicated concierge — returns and swaps are handled directly, without complicated forms or restocking surprises." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Eyebrow>Answers to your questions</Eyebrow>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight">Everything you wanted to ask.</h2>
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

function BlogPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Eyebrow>Our blogs & insights</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight">Practical reading for patients and caregivers.</h2>
          </div>
          <PillButton variant="ghost" to="/blogs">View All Blogs</PillButton>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {blogs.slice(0, 3).map((b) => (
            <Link to="/blogs/$slug" params={{ slug: b.slug }} key={b.slug} className="group rounded-3xl border border-border bg-card p-6 flex flex-col hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{b.category}</span>
                <span>{b.read}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink leading-snug flex-1 group-hover:text-primary transition-colors">{b.title}</h3>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span>{b.date}</span>
                <ArrowUpRight className="h-4 w-4 text-primary group-hover:rotate-45 transition-transform" />
              </div>
            </Link>
          ))}
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
          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Eyebrow>No matter who you're caring for</Eyebrow>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">You're in the right place.</h2>
              <p className="mt-6 max-w-xl text-primary-foreground/85">Tell us what you need. We'll verify your insurance, coordinate the prescription, and have equipment at your door — usually within the week.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PillButton to="/contact">Verify Your Insurance</PillButton>
                <a href="tel:+19292530627" className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground px-4 py-3">
                  <Phone className="h-4 w-4" /> Call +1 929 253 0627
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {[
                { icon: Clock, k: "<24h", v: "Insurance reply" },
                { icon: Truck, k: "3–5 days", v: "Door delivery" },
                { icon: Check, k: "98%", v: "Coverage approved" },
                { icon: HeartPulse, k: "10k+", v: "Families served" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl bg-primary-foreground/10 backdrop-blur border border-primary-foreground/15 p-5">
                  <s.icon className="h-5 w-5 text-primary-foreground/80" />
                  <div className="mt-3 font-display text-3xl font-semibold">{s.k}</div>
                  <div className="text-xs text-primary-foreground/70 mt-1">{s.v}</div>
                </div>
              ))}
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
      <About />
      <Categories />
      <Products />
      <Process />
      <Testimonials />
      <Faq />
      <BlogPreview />
      <CTA />
    </SiteShell>
  );
}
