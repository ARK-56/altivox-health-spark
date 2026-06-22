import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Star, Check, ShieldCheck, Truck, RotateCw, Phone, ArrowUpRight, Plus, Minus } from "lucide-react";
import { SiteShell, Eyebrow, PillButton } from "@/components/site/shared";
import { products, type Product } from "@/components/site/data";

export const Route = createFileRoute("/shop/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name ?? "Product"} — Altivox Health Solution` },
      { name: "description", content: loaderData?.product.blurb ?? "Home medical equipment." },
      { property: "og:title", content: loaderData?.product.name ?? "Product" },
      { property: "og:description", content: loaderData?.product.blurb ?? "Home medical equipment." },
      ...(loaderData?.product.img ? [{ property: "og:image", content: loaderData.product.img }] : []),
    ],
  }),
  notFoundComponent: () => (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl font-semibold text-ink">Product not found</h1>
        <p className="mt-4 text-muted-foreground">The item you're looking for isn't in our catalog.</p>
        <div className="mt-8"><PillButton to="/shop">Back to Shop</PillButton></div>
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
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };
  const [qty, setQty] = useState(1);
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <SiteShell>
      <section className="bg-surface py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-xs uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
          <Link to="/" className="hover:text-primary">Home</Link><span>/</span>
          <Link to="/shop" className="hover:text-primary">Shop</Link><span>/</span>
          <span className="text-primary">{product.tag}</span>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-border bg-surface aspect-square">
              <img src={product.img} alt={product.name} className="w-full h-full object-cover" width={800} height={800} />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[product.img, product.img, product.img, product.img].map((src, i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-border bg-surface">
                  <img src={src} alt="" className="w-full h-full object-cover opacity-80 hover:opacity-100 cursor-pointer" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Eyebrow>{product.tag}</Eyebrow>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-ink leading-[1.05]">{product.name}</h1>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <div className="flex items-center gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-current" />))}
              </div>
              <span className="text-muted-foreground">{product.rating} · {product.reviews} verified reviews</span>
            </div>
            <p className="mt-6 text-muted-foreground">{product.blurb}</p>

            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-display text-5xl font-semibold text-primary">${product.price}</span>
              <span className="text-sm text-muted-foreground">or covered by Medicare Part B</span>
            </div>

            <ul className="mt-8 space-y-2">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5" /> {h}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center rounded-full border border-border">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="h-11 w-11 grid place-items-center hover:text-primary"><Minus className="h-4 w-4" /></button>
                <span className="w-10 text-center font-medium">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="h-11 w-11 grid place-items-center hover:text-primary"><Plus className="h-4 w-4" /></button>
              </div>
              <PillButton to="/contact">Request This Item</PillButton>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { icon: ShieldCheck, t: "HIPAA-secure intake" },
                { icon: Truck, t: "3–5 day delivery" },
                { icon: RotateCw, t: "30-day returns" },
              ].map((b) => (
                <div key={b.t} className="rounded-2xl border border-border bg-card p-3 text-xs text-muted-foreground flex flex-col gap-2">
                  <b.icon className="h-4 w-4 text-primary" />
                  {b.t}
                </div>
              ))}
            </div>

            <a href="tel:+15550142200" className="mt-8 inline-flex items-center gap-2 text-sm text-primary font-medium">
              <Phone className="h-4 w-4" /> Questions? Call (555) 014-2200
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>You may also like</Eyebrow>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ink">Related equipment</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link to="/shop/$id" params={{ id: p.id }} key={p.id} className="group rounded-3xl bg-card border border-border overflow-hidden flex flex-col">
                <div className="aspect-square bg-surface-strong overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-semibold text-primary">${p.price}</span>
                    <span className="inline-flex items-center gap-1 text-xs text-primary">View <ArrowUpRight className="h-3 w-3" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
