import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Check } from "lucide-react";
import { SiteShell, PageHero, Eyebrow, PillButton } from "@/components/site/shared";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Altivox Health Solution — Verify Insurance & Order" },
      { name: "description", content: "Reach the Altivox concierge team to verify insurance, place an order, or ask a clinical question. Replies within 24 hours." },
      { property: "og:title", content: "Contact Altivox" },
      { property: "og:description", content: "Verify insurance, place an order, or talk to a coordinator." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      insurance: String(formData.get("insurance") ?? ""),
      reason: String(formData.get("reason") ?? ""),
      message: String(formData.get("message") ?? ""),
    };
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submit failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call +1 929 253 0627 or try again.");
    } finally {
      setSubmitting(false);
    }
  }


  return (
    <SiteShell>
      <PageHero
        eyebrow="Get in touch"
        title={<>Tell us what you need. <span className="text-primary">We'll handle the rest.</span></>}
        subtitle="Whether you're verifying insurance, requesting a specific item, or just have a question — a real coordinator replies within 24 hours."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            {[
              { icon: Phone, t: "Call us", v: "+1 929 253 0627", sub: "Mon–Sat · 8am–8pm ET", href: "tel:+19292530627" },
              { icon: Mail, t: "Email us", v: "altivoxhs@gmail.com", sub: "We reply within 24 hours", href: "mailto:altivoxhs@gmail.com" },
              { icon: MapPin, t: "Headquarters", v: "971 US Highway 202 N, 8184", sub: "Branchburg, NJ 08876, USA" },
              { icon: Clock, t: "Concierge hours", v: "7 days a week", sub: "8am–8pm ET (urgent line 24/7)" },
            ].map((c) => {
              const Wrapper: React.ElementType = c.href ? "a" : "div";
              return (
                <Wrapper key={c.t} {...(c.href ? { href: c.href } : {})} className="block rounded-3xl border border-border bg-card p-6 hover:shadow-[var(--shadow-elegant)] transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary grid place-items-center flex-shrink-0">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                      <div className="mt-1 font-display text-lg font-semibold text-ink">{c.v}</div>
                      <div className="text-sm text-muted-foreground mt-0.5">{c.sub}</div>
                    </div>
                  </div>
                </Wrapper>
              );
            })}

            <div className="rounded-3xl bg-primary text-primary-foreground p-6 flex items-start gap-4">
              <ShieldCheck className="h-6 w-6 flex-shrink-0" />
              <div>
                <div className="font-display text-lg font-semibold">HIPAA-secure messaging</div>
                <div className="text-sm text-primary-foreground/85 mt-1">All intake forms and uploaded prescriptions are encrypted end-to-end.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-border bg-card p-8 sm:p-10">
              <Eyebrow>Send a message</Eyebrow>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ink">Verify your insurance or request a quote.</h2>

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-primary/10 border border-primary/20 p-6 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground grid place-items-center"><Check className="h-5 w-5" /></div>
                  <div>
                    <div className="font-display text-lg font-semibold text-ink">Thanks — we've got it.</div>
                    <p className="text-sm text-muted-foreground mt-1">A coordinator will be in touch within 24 hours. For urgent questions, call +1 929 253 0627.</p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="mt-8 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Phone" name="phone" type="tel" />
                    <Field label="Insurance provider" name="insurance" placeholder="e.g. Medicare, Aetna" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">I'm reaching out about</label>
                    <select className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary">
                      <option>Verifying insurance coverage</option>
                      <option>Placing a new order</option>
                      <option>Returning or swapping equipment</option>
                      <option>Clinical question</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Share any details — diagnosis, equipment requested, timeline."
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary resize-none"
                    />
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
                    <label className="flex items-start gap-2 text-xs text-muted-foreground max-w-md">
                      <input type="checkbox" required className="mt-1 accent-[oklch(0.32_0.18_273)]" />
                      I consent to Altivox processing the information above to coordinate care. We never sell or share patient data.
                    </label>
                    <PillButton href="#">Submit Request</PillButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Where to find us</Eyebrow>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ink">Headquartered in New Jersey. Serving the entire U.S.</h2>
          <div className="mt-10 rounded-3xl overflow-hidden border border-border h-80 sm:h-96 grid place-items-center" style={{ background: "var(--gradient-soft)" }}>
            <div className="text-center">
              <MapPin className="h-10 w-10 text-primary mx-auto" />
              <div className="mt-4 font-display text-xl font-semibold text-ink">971 US Highway 202 N, 8184</div>
              <div className="text-muted-foreground text-sm mt-1">Branchburg, NJ 08876</div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}
