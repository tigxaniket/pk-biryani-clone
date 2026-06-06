import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | PK Biryani House No 1" },
      { name: "description", content: "Visit or call PK Biryani House No 1 in Karvenagar, Pune. Open daily 11 AM – 11 PM." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
          <span className="font-display text-sm uppercase tracking-[0.4em]">Get In Touch</span>
          <h1 className="mt-2 font-display text-5xl font-bold md:text-6xl">We'd love to serve you</h1>
          <p className="mx-auto mt-4 max-w-2xl">
            Reach out for orders, reservations or catering. Fresh biryani, tandoori delights and flavourful thalis — every day.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:px-10">
          <div className="space-y-6">
            <InfoCard icon={MapPin} title="Address" body="112, MIDC, Moshi, Pune, Pimpri-Chinchwad, Maharashtra 411062" />
            <InfoCard icon={Phone} title="Phone" body={<a href="tel:01205244586" className="hover:text-secondary">01205244586</a>} />
            <InfoCard icon={Mail} title="Email" body={<a href="mailto:hello@pkbiryanihouse.in" className="hover:text-secondary">hello@pkbiryanihouse.in</a>} />
            <InfoCard icon={Clock} title="Timings" body="Mon – Sun · 11:00 AM – 11:00 PM (All days open)" />
          </div>

          <form
            className="space-y-4 rounded-2xl border bg-card p-6 shadow-sm md:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll get back to you shortly.");
            }}
          >
            <h2 className="font-display text-2xl font-bold">Send us a message</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Name" name="name" required />
              <Input label="Phone" name="phone" type="tel" required />
            </div>
            <Input label="Email" name="email" type="email" />
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mx-auto mt-16 max-w-6xl px-6 md:px-10">
          <div className="flex flex-col items-center gap-4 rounded-2xl border bg-card p-10 text-center shadow-sm">
            <MapPin className="h-10 w-10 text-primary" />
            <h3 className="font-display text-2xl font-bold">Find us on the map</h3>
            <p className="max-w-xl text-sm text-muted-foreground">
              112, MIDC, Moshi, Pune, Pimpri-Chinchwad, Maharashtra 411062. Tap below to open turn-by-turn directions in Google Maps.
            </p>
            <a
              href="https://maps.app.goo.gl/VsyYGHbK1gAJiEru5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function InfoCard({ icon: Icon, title, body }: { icon: React.ComponentType<{ className?: string }>; title: string; body: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border bg-card p-6 shadow-sm">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
