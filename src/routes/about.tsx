import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import interiorAsset from "@/assets/restaurant-exterior-new.jpg.asset.json";
const interior = interiorAsset.url;
import hero from "@/assets/hero-biryani.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Hotel Chul Jatra" },
      { name: "description", content: "Learn about Hotel Chul Jatra — Pune's home of authentic biryani, tandoori and thalis crafted with traditional recipes." },
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
          <img src={interior} alt="Hotel Chul Jatra restaurant exterior at night" className="aspect-[4/3] rounded-2xl object-cover shadow-xl" loading="lazy" />
          <div className="space-y-4 text-muted-foreground">
            <p>
              At Hotel Chul Jatra, we bring you the real taste of authentic flavours with every bite. Located in Moshi, Pune, our restaurant is renowned for serving delicious Vegetarian and Non-Vegetarian Biryani, rich Tandoori dishes, and a wide range of freshly prepared Indian Thalis.
            </p>
            <p>
              We believe in offering food that is full of taste, freshness and tradition. Every dish is carefully prepared using high-quality ingredients and our specially crafted homemade spices.
            </p>
            <p>
              Whether you're craving aromatic biryani, flavourful tandoori platters or wholesome thalis, we make sure every meal feels satisfying and memorable. Our team is committed to great taste, hygiene and warm hospitality — at Hotel Chul Jatra, we serve food with love, just the way you like it.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
