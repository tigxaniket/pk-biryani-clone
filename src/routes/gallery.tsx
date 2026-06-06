import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import muttonBiryani from "@/assets/mutton-biryani.jpg";
import chicken65 from "@/assets/chicken-65.jpg";
import chickenThali from "@/assets/chicken-thali.jpg";
import paneer from "@/assets/paneer-masala.jpg";
import tandoori from "@/assets/tandoori.jpg";
import vegBiryani from "@/assets/veg-biryani.jpg";
import interior from "@/assets/restaurant-interior.jpg";
import hero from "@/assets/hero-biryani.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | PK Biryani House No 1" },
      { name: "description", content: "A look at our dishes and ambience at PK Biryani House No 1 in Karvenagar, Pune." },
    ],
  }),
  component: Gallery,
});

const images = [
  { src: hero, alt: "Chicken biryani" },
  { src: muttonBiryani, alt: "Mutton biryani" },
  { src: tandoori, alt: "Tandoori chicken" },
  { src: chickenThali, alt: "Chicken thali" },
  { src: paneer, alt: "Paneer masala" },
  { src: chicken65, alt: "Chicken 65" },
  { src: vegBiryani, alt: "Veg biryani" },
  { src: interior, alt: "Restaurant interior" },
];

function Gallery() {
  return (
    <SiteLayout>
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
          <span className="font-display text-sm uppercase tracking-[0.4em]">Gallery</span>
          <h1 className="mt-2 font-display text-5xl font-bold md:text-6xl">A feast for the eyes</h1>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 md:grid-cols-4 md:gap-5 md:px-10">
          {images.map((img, i) => (
            <div key={i} className="group overflow-hidden rounded-xl">
              <img src={img.src} alt={img.alt} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
