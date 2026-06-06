import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Phone, Star, ChefHat, Flame, Utensils, Leaf, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-biryani.jpg";
import muttonBiryani from "@/assets/mutton-biryani.jpg";
import chicken65 from "@/assets/chicken-65.jpg";
import chickenThaliAsset from "@/assets/chicken-thali-new.avif.asset.json";
const chickenThali = chickenThaliAsset.url;
import paneer from "@/assets/paneer-masala.jpg";
import tandoori from "@/assets/tandoori.jpg";
import vegBiryani from "@/assets/veg-biryani.jpg";
import interiorAsset from "@/assets/restaurant-exterior.jpg.asset.json";
const interior = interiorAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hotel Chul Jatra | Best Biryani & Tandoori in Pune" },
      { name: "description", content: "Authentic veg & non-veg biryani, tandoori specialities and hearty thalis at Hotel Chul Jatra. Karvenagar, Pune. Open 11AM–11PM daily." },
      { property: "og:title", content: "Hotel Chul Jatra" },
      { property: "og:description", content: "Authentic biryani, tandoori and thalis at Hotel Chul Jatra in Karvenagar, Pune." },
    ],
  }),
  component: Home,
});

const dishes = [
  { img: muttonBiryani, name: "Mutton Biryani", desc: "Slow-cooked dum mutton layered with aged basmati." },
  { img: chicken65, name: "Chicken 65", desc: "Fiery South-Indian crispy chicken starter." },
  { img: chickenThali, name: "Chicken Thali", desc: "Wholesome platter with curry, rice, roti & sides." },
  { img: paneer, name: "Paneer Masala", desc: "Creamy tomato-cashew gravy with fresh paneer." },
  { img: tandoori, name: "Tandoori Special", desc: "Charcoal-grilled, smoky and well-marinated." },
  { img: vegBiryani, name: "Veg Biryani", desc: "Aromatic basmati with seasonal veg & whole spices." },
];

const reasons = [
  { icon: ChefHat, title: "Authentic Flavours", desc: "Traditional biryani cooked with aromatic spices and premium ingredients." },
  { icon: Flame, title: "Delicious Tandoori", desc: "Freshly grilled tandoori dishes with bold, smoky flavours." },
  { icon: Utensils, title: "Variety of Thalis", desc: "Complete Veg and Non-Veg thalis full of homely flavour." },
  { icon: Leaf, title: "Fresh Ingredients", desc: "High-quality rice, spices, meat and vegetables every day." },
  { icon: ShieldCheck, title: "Hygienic Kitchen", desc: "Strict hygiene for safe, clean and healthy food." },
  { icon: Heart, title: "Trusted in Pune", desc: "A favourite biryani spot loved for taste and consistency." },
];

const reviews = [
  { name: "Rohan Mehta", text: "The most flavourful biryani in Pune. Perfect spices, fresh ingredients and fast service. A must-visit for biryani lovers!" },
  { name: "Shweta Kulkarni", text: "The tandoori dishes were amazing — juicy, well-marinated and full of taste. Friendly staff and excellent food quality." },
  { name: "Amit Deshmukh", text: "Veg and non-veg thalis are delicious, filling and affordable. Authentic taste and consistent quality. Never disappoints!" },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Authentic chicken biryani" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-32 text-center text-background md:py-44">
          <span className="font-display text-sm uppercase tracking-[0.4em] text-primary">Welcome to</span>
          <h1 className="mt-4 font-display text-5xl font-bold leading-tight md:text-7xl">
            Hotel Chul <span className="text-primary">Jatra</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-background/85 md:text-lg">
            Serving authentic veg and non-veg biryani, rich tandoori flavours and wholesome thalis — crafted with love, freshness and true traditional taste.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 px-7 py-3.5 text-sm font-semibold text-background transition hover:bg-background/10"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center md:px-10">
          <div className="grid grid-cols-2 gap-4">
            <img src={interior} alt="Restaurant interior" className="col-span-2 aspect-[4/3] rounded-2xl object-cover shadow-xl" loading="lazy" />
            <img src={vegBiryani} alt="Veg biryani" className="aspect-square rounded-2xl object-cover shadow-md" loading="lazy" />
            <img src={tandoori} alt="Tandoori chicken" className="aspect-square rounded-2xl object-cover shadow-md" loading="lazy" />
          </div>
          <div>
            <span className="font-display text-sm uppercase tracking-[0.4em] text-secondary">About Us</span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              The real taste of <span className="text-secondary">tradition</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Located in Pune, Hotel Chul Jatra is renowned for serving delicious Vegetarian and Non-Vegetarian Biryani, rich Tandoori dishes and a wide range of freshly prepared Indian Thalis.
            </p>
            <p className="mt-4 text-muted-foreground">
              Every dish is carefully prepared using high-quality ingredients and our specially crafted homemade spices. Our team is committed to great taste, hygiene and warm hospitality — we serve food with love, just the way you like it.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition hover:bg-secondary">
              Explore More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center">
            <span className="font-display text-sm uppercase tracking-[0.4em] text-secondary">Our Menu</span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">From Tandoor to Thali</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Soups, biryanis, tandoori, curries and sweets — a world of flavours on one plate.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map((d) => (
              <article key={d.name} className="group overflow-hidden rounded-2xl bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="overflow-hidden">
                  <img src={d.img} alt={d.name} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold">{d.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
              View Full Menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative isolate overflow-hidden py-20 md:py-28">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-foreground/85" />
        <div className="relative mx-auto max-w-7xl px-6 text-background md:px-10">
          <div className="text-center">
            <span className="font-display text-sm uppercase tracking-[0.4em] text-primary">Why Choose Us</span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Pune's favourite biryani destination</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl border border-background/10 bg-background/5 p-7 backdrop-blur transition hover:border-primary/40 hover:bg-background/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <r.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-background/75">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center">
            <span className="font-display text-sm uppercase tracking-[0.4em] text-secondary">Reviews</span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">What our customers say</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl border bg-card p-7 shadow-sm">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-muted-foreground">"{r.text}"</blockquote>
                <figcaption className="mt-5 font-display text-lg font-semibold">– {r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:px-10 md:text-left">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Hungry already? We're open till 11 PM.</h2>
            <p className="mt-2 text-primary-foreground/80">Call us to order, reserve or arrange catering.</p>
          </div>
          <a href="tel:01205244586" className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition hover:bg-secondary">
            <Phone className="h-4 w-4" /> Call : 01205244586
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
