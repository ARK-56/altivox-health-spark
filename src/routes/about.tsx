import { createFileRoute } from "@tanstack/react-router";
import { HeartPulse, ShieldCheck, Stethoscope, Truck, Users, Award, Target, Compass } from "lucide-react";
import heroImg from "@/assets/hero-care.jpg";
import { SiteShell, PageHero, Eyebrow, PillButton } from "@/components/site/shared";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Altivox Health Solution — Our Mission and Team" },
      { name: "description", content: "Learn how Altivox Health Solution LLC coordinates premium home medical equipment with insurance, prescription handling, and caregiver support." },
      { property: "og:title", content: "About Altivox Health Solution" },
      { property: "og:description", content: "A patient-first home medical equipment partner with a clinically vetted catalog and a real human on every order." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    { icon: HeartPulse, t: "Patient-first", d: "Every recommendation starts from what the patient actually needs at home — not what's easiest to ship." },
    { icon: ShieldCheck, t: "HIPAA by default", d: "Records and intake forms are encrypted end-to-end, accessible only to your assigned care team." },
    { icon: Stethoscope, t: "Clinically vetted", d: "Our catalog is reviewed by licensed clinicians, not just product managers." },
    { icon: Truck, t: "Door-to-door", d: "We deliver, install when needed, and follow up to make sure the equipment fits your home." },
  ];

  const stats = [
    { k: "10k+", v: "Families served" },
    { k: "98%", v: "Insurance approval rate" },
    { k: "<24h", v: "Average intake response" },
    { k: "50", v: "U.S. states covered" },
  ];

  const team = [
    { name: "Dr. Priya Anand", role: "Chief Clinical Officer", bio: "20 years in geriatric care and home health planning." },
    { name: "Daniel Okafor", role: "Head of Insurance Coordination", bio: "Former Medicare claims lead, now translator-in-chief." },
    { name: "Sara Lin, RN", role: "Patient Concierge Lead", bio: "Builds the team that follows up after every delivery." },
  ];

  return (
    <SiteShell>
      <PageHero
        eyebrow="About Altivox"
        title={<>Home medical equipment, <span className="text-primary">delivered with judgment.</span></>}
        subtitle="We started Altivox because finding the right equipment shouldn't feel like a second job. Today we serve families and clinicians across the country with a coordinated, paperwork-free experience."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <img src={heroImg} alt="Care team supporting a patient" className="rounded-3xl shadow-[var(--shadow-elegant)] w-full object-cover" width={1920} height={1280} loading="lazy" />
            <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-card border border-border p-5 shadow-[var(--shadow-card)]">
              <div className="font-display text-3xl font-semibold text-primary">2019</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">Founded</div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight">Built by clinicians and caregivers who'd lived the friction.</h2>
            <p className="mt-6 text-muted-foreground">
              Altivox Health Solution LLC was founded after our team spent years watching families lose weeks navigating insurance, prescriptions, and conflicting supplier advice. We rebuilt the process around a single idea: a real person, every time, who owns the outcome.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today we partner with physicians, physical therapists, and home health agencies across the country to deliver durable medical equipment that actually fits the people who'll use it.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.v} className="rounded-2xl border border-border bg-card p-5">
                  <div className="font-display text-3xl font-semibold text-primary">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Target, t: "Our Mission", d: "Make life-improving medical equipment more accessible, more affordable, and more aligned with how you actually live." },
              { icon: Compass, t: "Our Vision", d: "A future where every home recovery is supported by the right equipment, the right people, and zero paperwork." },
            ].map((b) => (
              <div key={b.t} className="rounded-3xl border border-border bg-card p-10">
                <b.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{b.t}</h3>
                <p className="mt-3 text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>What we believe</Eyebrow>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink max-w-2xl leading-tight">Four values that shape every order.</h2>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.t} className="rounded-3xl border border-border bg-card p-7">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary grid place-items-center">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ink max-w-2xl leading-tight">The people behind your care.</h2>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {team.map((t) => (
              <div key={t.name} className="rounded-3xl border border-border bg-card p-8">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary grid place-items-center">
                  <Users className="h-8 w-8" />
                </div>
                <div className="mt-6 font-display text-xl font-semibold text-ink">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-primary mt-1">{t.role}</div>
                <p className="mt-3 text-sm text-muted-foreground">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] p-10 sm:p-16 text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
            <Award className="h-10 w-10 text-primary-foreground/70" />
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold leading-tight max-w-2xl">Ready to see how Altivox is different?</h2>
            <p className="mt-4 max-w-xl text-primary-foreground/85">Share your prescription or insurance details and we'll have a coordinator reach out within 24 hours.</p>
            <div className="mt-8"><PillButton to="/contact">Verify Your Insurance</PillButton></div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
