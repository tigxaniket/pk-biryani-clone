import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import interior from "@/assets/restaurant-interior.jpg";
import hero from "@/assets/hero-biryani.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | PK Biryani House No 1" },
      { name: "description", content: "Learn about PK Biryani House No 1 — Pune's home of authentic biryani, tandoori and thalis crafted with traditional recipes." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center text-background md:py-32">
          <span className="font-display text-sm uppercase tracking-[0.4em] text-primary">About Us</span>
          <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">A taste rooted in tradition</h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center md:px-10">
          <img src={interior} alt="Restaurant interior" className="aspect-[4/3] rounded-2xl object-cover shadow-xl" loading="lazy" />
          <div className="space-y-4 text-muted-foreground">
            <p>
              PK Biryani House No 1 is a family restaurant located at 112, MIDC, Moshi, Pimpri-Chinchwad. We serve delicious Vegetarian and Non-Vegetarian Biryani, rich Tandoori dishes, and a wide range of freshly prepared Indian Thalis — perfect for families, friends and quick solo meals.
            </p>
            <p>
              Open every day from 11 AM to 11 PM, we make it easy to enjoy a hearty meal at the restaurant or get your favourites delivered with our <strong>Order Online</strong> service.
            </p>
            <p>
              Every dish is carefully prepared using high-quality ingredients and our specially crafted homemade spices. Our team is committed to great taste, hygiene and warm hospitality — we serve food with love, just the way you like it.
            </p>
            <ul className="grid grid-cols-2 gap-3 pt-2 text-sm text-foreground">
              <li className="rounded-lg border bg-card p-3">🍽️ Family Restaurant</li>
              <li className="rounded-lg border bg-card p-3">📦 Order Online</li>
              <li className="rounded-lg border bg-card p-3">🕚 Open 11 AM – 11 PM</li>
              <li className="rounded-lg border bg-card p-3">🥗 Veg & Non-Veg</li>
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
