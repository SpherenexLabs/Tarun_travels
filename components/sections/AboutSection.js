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
            alt="Comfortable cab journey on a scenic road"
            width={800}
            height={950}
            sizes="(max-width: 720px) 100vw, 50vw"
          />
          <div className="experience-badge">
            <b>24/7</b><span>Cab booking<br />and support</span>
          </div>
        </div>
        <div className="section-copy">
          <span className="eyebrow"><span />About Tarun Travel Hub</span>
          <h2>Cab booking made<br /><em>simple and reliable.</em></h2>
          <p>
            We provide airport taxi, local rental and outstation cab services
            from Bengaluru. From booking confirmation to final drop, our team
            focuses on punctual pickup, clean vehicles and clear communication.
          </p>
          {extended && (
            <p>
              Our fleet includes hatchbacks, sedans, SUVs, Innova vehicles and
              Tempo Travellers. We work with experienced drivers and confirm
              route-based fares before the journey whenever possible.
            </p>
          )}
          <div className="feature-list">
            <div>
              <Icon name="shield" />
              <span><b>Clear fare details</b><small>Route, vehicle and applicable extra charges are explained before booking.</small></span>
            </div>
            <div>
              <Icon name="map" />
              <span><b>Experienced drivers</b><small>Professional drivers familiar with Bengaluru, airport and outstation routes.</small></span>
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
