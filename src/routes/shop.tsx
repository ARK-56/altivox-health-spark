import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Star, ArrowUpRight, SlidersHorizontal } from "lucide-react";
import { SiteShell, PageHero, Eyebrow } from "@/components/site/shared";
import { products } from "@/components/site/data";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Home Medical Equipment — Altivox Health Solution" },
      { name: "description", content: "Browse wheelchairs, monitors, hospital beds, oxygen concentrators and more. Insurance-verified ordering with concierge support." },
      { property: "og:title", content: "Shop — Altivox Health Solution" },
      { property: "og:description", content: "Browse our catalog of mobility equipment, self-care devices and medical support." },
    ],
  }),
  component: ShopPage,
});

const categories = ["All", "Mobility", "Self-Care", "Support"] as const;

function ShopPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const visible = filter === "All" ? products : products.filter((p) => p.tag === filter);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Our catalog"
        title={<>Equipment, devices and support — <span className="text-primary">curated for home.</span></>}
        subtitle="Every product in our catalog is reviewed by our clinical team. Tap any item for spec sheets, insurance notes, and concierge ordering."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Shop" }]}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                    filter === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <SlidersHorizontal className="h-4 w-4" />
              <span>Showing {visible.length} products</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((p) => (
              <Link
                to="/shop/$id"
                params={{ id: p.id }}
                key={p.id}
                className="group rounded-3xl bg-card border border-border overflow-hidden flex flex-col hover:shadow-[var(--shadow-elegant)] transition-shadow"
              >
                <div className="relative aspect-square bg-surface-strong">
                  <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-card/90 backdrop-blur px-3 py-1 rounded-full border border-border">{p.tag}</span>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-1 text-xs text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-3.5 w-3.5 fill-current" />))}
                    <span className="text-muted-foreground ml-1">{p.rating} · {p.reviews} reviews</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink leading-snug">{p.name}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{p.blurb}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-display text-2xl font-semibold text-primary">${p.price}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                      View details <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl text-center px-4">
          <Eyebrow>Don't see what you need?</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-ink">We source specialty equipment on request.</h2>
          <p className="mt-4 text-muted-foreground">If your clinician has prescribed something specific, our coordinators can locate it, verify your insurance, and ship it to your door.</p>
        </div>
      </section>
    </SiteShell>
  );
}
