import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo-chul-jatra.jpg.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
        <div>
          <img src={logo.url} alt="Hotel Chul Jatra logo" className="h-20 w-20 rounded-full object-cover" loading="lazy" />
          <p className="mt-4 text-sm text-background/70">
            Authentic biryani, tandoori and thalis served fresh every day in Pune.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-primary">Address</h4>
          <p className="mt-3 flex items-start gap-2 text-sm text-background/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            Mhatre Bridge, 100 feet, DP Rd, near Saibaba Mandir, Vakil Nagar, Karvenagar, Pune, Maharashtra 411052
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-primary">Contact & Timings</h4>
          <p className="mt-3 flex items-center gap-2 text-sm text-background/80">
            <Phone className="h-4 w-4 text-primary" /> 01205244586
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-background/80">
            <Clock className="h-4 w-4 text-primary" /> Mon–Sun · 11:00 AM – 11:00 PM
          </p>
          <p className="mt-1 text-xs text-background/60">All days open</p>
        </div>

        <div>
          <h4 className="font-display text-lg text-primary">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-background/80">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/menu" className="hover:text-primary">Menu</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-xs text-background/60 md:px-10">
          © {new Date().getFullYear()} PK Biryani House No 1. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
