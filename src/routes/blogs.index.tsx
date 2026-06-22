import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteShell, PageHero, Eyebrow } from "@/components/site/shared";
import { blogs } from "@/components/site/data";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Insights & Articles — Altivox Health Solution" },
      { name: "description", content: "Practical articles on home medical equipment, insurance navigation, caregiver support, and recovery." },
      { property: "og:title", content: "Altivox Blogs & Insights" },
      { property: "og:description", content: "Practical reading for patients, families, and caregivers." },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  const [featured, ...rest] = blogs;
  return (
    <SiteShell>
      <PageHero
        eyebrow="Insights & articles"
        title={<>Practical reading for <span className="text-primary">patients and caregivers.</span></>}
        subtitle="Written by our clinical and insurance teams — straight-talk articles on the things families actually ask us about."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Blogs" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link to="/blogs/$slug" params={{ slug: featured.slug }} className="group block rounded-[2rem] border border-border bg-card overflow-hidden lg:grid lg:grid-cols-2">
            <div className="aspect-[16/10] lg:aspect-auto relative" style={{ background: "var(--gradient-primary)" }}>
              <div className="absolute inset-0 grid place-items-center text-primary-foreground/90 font-display text-6xl px-8 text-center leading-tight">
                {featured.category}
              </div>
            </div>
            <div className="p-10 lg:p-14 flex flex-col">
              <div className="text-xs uppercase tracking-widest text-primary">Featured · {featured.read}</div>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-ink leading-tight group-hover:text-primary transition-colors">{featured.title}</h2>
              <p className="mt-4 text-muted-foreground flex-1">{featured.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                <span>{featured.date}</span>
                <span className="inline-flex items-center gap-1 text-primary font-medium">Read article <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" /></span>
              </div>
            </div>
          </Link>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((b) => (
              <Link to="/blogs/$slug" params={{ slug: b.slug }} key={b.slug} className="group rounded-3xl border border-border bg-card p-7 flex flex-col hover:shadow-[var(--shadow-elegant)] transition-shadow">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{b.category}</span>
                  <span className="text-muted-foreground">{b.read}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink leading-snug flex-1 group-hover:text-primary transition-colors">{b.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{b.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{b.date}</span>
                  <ArrowUpRight className="h-4 w-4 text-primary group-hover:rotate-45 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Eyebrow>Stay in the loop</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-ink">One short email a month.</h2>
          <p className="mt-3 text-muted-foreground">Practical tips on equipment, insurance, and caregiving — nothing else.</p>
          <form className="mt-8 flex items-center rounded-full border border-border bg-card overflow-hidden max-w-md mx-auto">
            <input className="flex-1 bg-transparent px-5 py-3 text-sm outline-none" placeholder="you@email.com" />
            <button className="m-1 px-5 h-10 rounded-full bg-primary text-primary-foreground text-sm font-medium">Subscribe</button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
