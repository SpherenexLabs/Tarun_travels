import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function AboutSection({ extended = false }) {
  return (
    <section className="intro section">
      <div className="container intro-grid">
        <div className="photo-stack">
          <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85"
            alt="Friends enjoying a scenic road trip"
            width={800}
            height={950}
            sizes="(max-width: 720px) 100vw, 50vw"
          />
          <div className="experience-badge">
            <b>10</b><span>Years of<br />happy journeys</span>
          </div>
        </div>
        <div className="section-copy">
          <span className="eyebrow"><span />About Tarun Travel Hub</span>
          <h2>Travel made personal,<br /><em>simple and joyful.</em></h2>
          <p>
            We are a Bengaluru-based travel team helping families, couples and
            groups discover incredible destinations without the planning stress.
            From your first call to the final drop, one dedicated expert stays
            with you.
          </p>
          {extended && (
            <p>
              Our itineraries balance must-see places with breathing room. We
              work with dependable drivers and carefully selected stays, while
              keeping every quote clear and every journey flexible.
            </p>
          )}
          <div className="feature-list">
            <div>
              <Icon name="shield" />
              <span><b>Trusted and transparent</b><small>No hidden costs. Just clear plans and dependable service.</small></span>
            </div>
            <div>
              <Icon name="map" />
              <span><b>Local travel expertise</b><small>Routes, stays and experiences selected by people who know them.</small></span>
            </div>
          </div>
          {!extended && (
            <Link className="text-link" href="/about">
              Learn more about us <Icon name="arrow" size={17} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
