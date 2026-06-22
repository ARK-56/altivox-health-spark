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
            <span>By {post.author}</span>
          </div>
        </div>
      </section>

      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-foreground/90 leading-relaxed">{post.excerpt}</p>

          {post.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mt-10 font-display text-2xl sm:text-3xl font-semibold text-ink">{s.heading}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}

          <div className="mt-12 rounded-3xl border border-border bg-surface p-8">
            <Eyebrow>Key takeaways</Eyebrow>
            <ul className="mt-4 space-y-3">
              {post.takeaways.map((t) => (
                <li key={t} className="flex gap-3 text-foreground"><span className="text-primary mt-1">•</span><span>{t}</span></li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-3xl border border-border bg-card p-8">
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
