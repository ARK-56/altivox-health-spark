import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/altivox-logo.png.asset.json";

export function Logo({ className = "h-10" }: { className?: string }) {
  return <img src={logo.url} alt="Altivox Health Solution" className={className} />;
}

export function PillButton({
  children,
  variant = "primary",
  to,
  href,
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  to?: string;
  href?: string;
}) {
  const base = "inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2 text-sm font-medium transition-all group";
  const styles = variant === "primary"
    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-card)]"
    : "border border-border bg-card text-foreground hover:bg-surface";
  const inner = (
    <>
      {children}
      <span className="ml-1 grid h-9 w-9 place-items-center rounded-full bg-primary-foreground text-primary group-hover:rotate-45 transition-transform">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </>
  );
  if (to) return <Link to={to} className={`${base} ${styles}`}>{inner}</Link>;
  return <a href={href ?? "#"} className={`${base} ${styles}`}>{inner}</a>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
      <Sparkles className="h-3 w-3 text-primary" />
      {children}
    </div>
  );
}

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/shop", label: "Shop" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
              className="hover:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <PillButton to="/contact">Get in Touch</PillButton>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo className="h-16 w-auto" />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Altivox Health Solution LLC — premium home medical equipment, coordinated with care.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5" /> <span>971 US Highway 202 N, 8184<br />Branchburg, NJ 08876</span></div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +1 929 253 0627</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> altivoxhs@gmail.com</div>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-widest text-foreground font-semibold">Shop</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-primary">Mobility</Link></li>
              <li><Link to="/shop" className="hover:text-primary">Self-Care</Link></li>
              <li><Link to="/shop" className="hover:text-primary">Support</Link></li>
              <li><Link to="/shop" className="hover:text-primary">Oxygen</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-widest text-foreground font-semibold">Company</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/blogs" className="hover:text-primary">Blogs</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-foreground font-semibold">Newsletter</div>
            <p className="mt-4 text-sm text-muted-foreground">Tips on home care, equipment and insurance — once a month.</p>
            <form className="mt-4 flex items-center rounded-full border border-border bg-background overflow-hidden">
              <input className="flex-1 bg-transparent px-4 py-3 text-sm outline-none" placeholder="you@email.com" />
              <button className="m-1 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Altivox Health Solution LLC. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">HIPAA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  breadcrumb?: { label: string; to?: string }[];
}) {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-ink leading-[1.02] max-w-4xl">
          {title}
        </h1>
        {subtitle && <p className="mt-6 max-w-2xl text-muted-foreground text-lg">{subtitle}</p>}
        {breadcrumb && (
          <div className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
            {breadcrumb.map((b, i) => (
              <span key={b.label} className="flex items-center gap-2">
                {b.to ? <Link to={b.to} className="hover:text-primary">{b.label}</Link> : <span className="text-primary">{b.label}</span>}
                {i < breadcrumb.length - 1 && <span>/</span>}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

