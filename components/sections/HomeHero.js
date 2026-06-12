import Link from "next/link";
import { siteConfig } from "@/data/site";
import Icon from "@/components/ui/Icon";

export default function HomeHero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <span className="eyebrow light"><span />Your journey, thoughtfully planned</span>
        <h1>Beautiful places.<br /><em>Unforgettable</em> roads.</h1>
        <p>
          Bengaluru-based travel agency for private cabs, curated stays and
          tailor-made tour packages across South India and beyond.
        </p>
        <div className="hero-actions">
          <Link href="/tour-packages" className="btn btn-primary">
            Explore packages <Icon name="arrow" size={18} />
          </Link>
          <a href={`tel:+${siteConfig.phone}`} className="btn btn-ghost">
            <Icon name="phone" size={18} /> Talk to an expert
          </a>
        </div>
        <div className="hero-trust">
          <span><b>Private</b> Cabs and transfers</span>
          <span><b>Custom</b> Tour itineraries</span>
          <span><b>24/7</b> Travel support</span>
        </div>
      </div>
      <div className="hero-card">
        <span>Need a quick quote?</span>
        <strong>Tell us where you want to go.</strong>
        <Link href="/contact">Get free itinerary <Icon name="arrow" size={17} /></Link>
      </div>
    </section>
  );
}
