import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="PK Biryani House logo" className="h-14 w-14 object-contain" />
          <span className="font-display text-xl font-bold tracking-tight md:text-2xl">
            PK Biryani House
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium tracking-wide uppercase transition hover:opacity-70 [&.active]:underline [&.active]:underline-offset-8"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:01205244586"
          className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-secondary lg:inline-flex"
        >
          <Phone className="h-4 w-4" /> Call : 01205244586
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-foreground/10 bg-primary lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium uppercase hover:bg-foreground/10"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:01205244586"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background"
            >
              <Phone className="h-4 w-4" /> Call : 01205244586
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
