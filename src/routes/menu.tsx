import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import muttonBiryani from "@/assets/mutton-biryani.jpg";
import chicken65 from "@/assets/chicken-65.jpg";
import chickenThali from "@/assets/chicken-thali.jpg";
import paneer from "@/assets/paneer-masala.jpg";
import tandoori from "@/assets/tandoori.jpg";
import vegBiryani from "@/assets/veg-biryani.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Hotel Chul Jatra" },
      { name: "description", content: "Explore our biryani, tandoori, curries, thalis and sides at Hotel Chul Jatra, Pune." },
    ],
  }),
  component: Menu,
});

type Item = { name: string; price: string; desc?: string };
type Section = { title: string; img: string; items: Item[] };

const sections: Section[] = [
  {
    title: "Biryani",
    img: muttonBiryani,
    items: [
      { name: "Chicken Biryani", price: "₹360", desc: "Long-grain basmati, marinated chicken, dum cooked." },
      { name: "Mutton Biryani", price: "₹450", desc: "Slow-cooked tender mutton on aromatic rice." },
      { name: "Veg Biryani", price: "₹560", desc: "Long-grain basmati,whole spices, prawns." },
      { name: "Steamed Rice", price: "₹70" },
      { name: "Indrayani Rice", price: "₹60" },
    ],
  },
  {
    title: "Tandoori",
    img: tandoori,
    items: [
      { name: "Tandoori Chicken (Full)", price: "₹420" },
      { name: "Chicken Tikka", price: "₹260" },
      { name: "Seekh Kebab", price: "₹240" },
      { name: "Paneer Tikka", price: "₹240" },
      { name: "Tandoori Roti", price: "₹25" },
    ],
  },
  {
    title: "Starters",
    img: chicken65,
    items: [
      { name: "Chicken 65", price: "₹240" },
      { name: "Chilli Chicken", price: "₹260" },
      { name: "Veg Manchurian", price: "₹180" },
      { name: "Crispy Paneer", price: "₹220" },
    ],
  },
  {
    title: "Thalis",
    img: chickenThali,
    items: [
      { name: "Chicken Thali", price: "₹260", desc: "Curry, rice, roti, salad, sweet." },
      { name: "Mutton Thali", price: "₹340" },
      { name: "Veg Thali", price: "₹180" },
      { name: "Special Family Thali", price: "₹720" },
    ],
  },
  {
    title: "Curries",
    img: paneer,
    items: [
      { name: "Paneer Butter Masala", price: "₹220" },
      { name: "Dal Tadka", price: "₹140" },
      { name: "Chicken Masala", price: "₹240" },
      { name: "Mutton Rogan Josh", price: "₹320" },
    ],
  },
  {
    title: "Rice & Sides",
    img: vegBiryani,
    items: [
      { name: "Jeera Rice", price: "₹140" },
      { name: "Butter Naan", price: "₹40" },
      { name: "Raita", price: "₹60" },
      { name: "Gulab Jamun (2 pc)", price: "₹70" },
    ],
  },
];

function Menu() {
  return (
    <SiteLayout>
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
          <span className="font-display text-sm uppercase tracking-[0.4em]">Our Menu</span>
          <h1 className="mt-2 font-display text-5xl font-bold md:text-6xl">A flavour for every craving</h1>
          <p className="mx-auto mt-4 max-w-2xl">
            Prices are indicative. Please call <a href="tel:9158440062" className="underline underline-offset-4">9158440062</a> to confirm availability or place an order.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl space-y-16 px-6 md:px-10">
          {sections.map((s) => (
            <div key={s.title} className="grid gap-8 md:grid-cols-[1fr_2fr] md:items-start">
              <div className="overflow-hidden rounded-2xl">
                <img src={s.img} alt={s.title} className="aspect-square w-full object-cover" loading="lazy" />
                <h2 className="mt-4 font-display text-3xl font-bold">{s.title}</h2>
              </div>
              <ul className="divide-y rounded-2xl border bg-card p-2 md:p-4">
                {s.items.map((i) => (
                  <li key={i.name} className="flex items-start justify-between gap-6 p-4">
                    <div>
                      <h3 className="font-display text-lg font-semibold">{i.name}</h3>
                      {i.desc && <p className="mt-1 text-sm text-muted-foreground">{i.desc}</p>}
                    </div>
                    <span className="shrink-0 font-display text-lg font-bold text-secondary">{i.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
