import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { SiteShell, Eyebrow, PillButton } from "@/components/site/shared";
import { blogs, type Blog } from "@/components/site/data";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = blogs.find((b) => b.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title ?? "Article"} — Altivox Health Solution` },
      { name: "description", content: loaderData?.post.excerpt ?? "Article from Altivox Health Solution." },
      { property: "og:title", content: loaderData?.post.title ?? "Article" },
      { property: "og:description", content: loaderData?.post.excerpt ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl font-semibold text-ink">Article not found</h1>
        <div className="mt-8"><PillButton to="/blogs">Back to Blogs</PillButton></div>
      </div>
    </SiteShell>
  ),
  errorComponent: ({ reset }) => (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-semibold text-ink">Something went wrong</h1>
        <button onClick={reset} className="mt-6 px-5 py-2 rounded-full bg-primary text-primary-foreground">Try again</button>
      </div>
    </SiteShell>
  ),
  component: BlogDetail,
});

function BlogDetail() {
  const { post } = Route.useLoaderData() as { post: Blog };
  const related = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <SiteShell>
      <section className="relative py-16 lg:py-24" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
            <Link to="/" className="hover:text-primary">Home</Link><span>/</span>
            <Link to="/blogs" className="hover:text-primary">Blogs</Link><span>/</span>
            <span className="text-primary">{post.category}</span>
          </div>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink leading-[1.05]">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-xs">{post.category}</span>
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.read} read</span>
          </div>
        </div>
      </section>

      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose-content">
          <p className="text-xl text-foreground/90 leading-relaxed">{post.excerpt}</p>

          <h2 className="mt-12 font-display text-2xl sm:text-3xl font-semibold text-ink">Why this matters</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether you're a first-time caregiver or a clinician coordinating a discharge plan, the gap between &ldquo;what's prescribed&rdquo; and &ldquo;what arrives at the door&rdquo; is where most home recoveries lose momentum. We wrote this guide to close that gap with practical, jargon-free steps you can take this week.
          </p>

          <h2 className="mt-10 font-display text-2xl sm:text-3xl font-semibold text-ink">What we'll cover</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li className="flex gap-3"><span className="text-primary mt-1">•</span><span>The decisions that have the biggest downstream impact on outcomes.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">•</span><span>Common pitfalls that cost families weeks and how to avoid them.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">•</span><span>Specific language to use with insurance representatives.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">•</span><span>When to escalate to a clinical coordinator instead of going it alone.</span></li>
          </ul>

          <h2 className="mt-10 font-display text-2xl sm:text-3xl font-semibold text-ink">Step 1 — Get the right paperwork in motion</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The single fastest way to compress your timeline is to ensure the prescription, diagnosis code, and letter of medical necessity are submitted together. Missing one of these is the most common reason we see delays — and it's the easiest to fix before the first call to your insurer.
          </p>

          <h2 className="mt-10 font-display text-2xl sm:text-3xl font-semibold text-ink">Step 2 — Match the equipment to the home, not the catalog</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Doorway widths, stair count, bathroom layout, and whether the patient lives alone all shape what equipment is actually usable. A spec sheet is a starting point; a quick walkthrough — even via video — saves returns later.
          </p>

          <h2 className="mt-10 font-display text-2xl sm:text-3xl font-semibold text-ink">Step 3 — Plan the first 30 days</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Equipment is only half the recovery. Schedule a check-in at day 3, day 14, and day 30 — either with your physical therapist or your Altivox concierge — to make sure the gear is being used correctly and is still the right fit.
          </p>

          <div className="mt-12 rounded-3xl border border-border bg-surface p-8">
            <Eyebrow>Need a hand?</Eyebrow>
            <h3 className="mt-3 font-display text-2xl font-semibold text-ink">Talk to a real human about your situation.</h3>
            <p className="mt-2 text-muted-foreground">Our coordinators are available 7 days a week and can usually verify insurance the same day.</p>
            <div className="mt-5"><PillButton to="/contact">Contact Altivox</PillButton></div>
          </div>
        </div>
      </article>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Keep reading</Eyebrow>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ink">More from the Altivox blog</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {related.map((b) => (
              <Link to="/blogs/$slug" params={{ slug: b.slug }} key={b.slug} className="group rounded-3xl border border-border bg-card p-7 flex flex-col">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{b.category}</span>
                  <span className="text-muted-foreground">{b.read}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink leading-snug flex-1 group-hover:text-primary transition-colors">{b.title}</h3>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{b.date}</span>
                  <ArrowUpRight className="h-4 w-4 text-primary group-hover:rotate-45 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
