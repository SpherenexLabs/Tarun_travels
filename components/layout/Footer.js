import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";
import Brand from "@/components/ui/Brand";
import Icon from "@/components/ui/Icon";

const destinations = ["Coorg", "Ooty", "Mysore", "Goa", "Kerala"];

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Brand className="footer-brand" />
          <p>{siteConfig.description}</p>
          <div className="socials">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Tarun Travel Hub on Instagram"
              title="Instagram"
            >
              <Icon name="instagram" />
            </a>
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Tarun Travel Hub on Facebook"
              title="Facebook"
            >
              <Icon name="facebook" />
            </a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          {navigation.slice(1, 6).map((item) => (
            <Link href={item.href} key={item.label}>{item.label}</Link>
          ))}
        </div>
        <div>
          <h4>Top destinations</h4>
          {destinations.map((destination) => (
            <Link href="/tour-packages" key={destination}>{destination}</Link>
          ))}
        </div>
        <div>
          <h4>Contact</h4>
          <p>
            {siteConfig.phoneDisplay}<br />
            {siteConfig.email}<br /><br />
            {siteConfig.address.join(", ")}<br />
            {siteConfig.hours}
          </p>
          <a
            href={siteConfig.mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
          {siteConfig.googleBusinessProfile && (
            <a
              href={siteConfig.googleBusinessProfile}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Business Profile
            </a>
          )}
          {siteConfig.googleReviewUrl && (
            <a
              href={siteConfig.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Write a Google review
            </a>
          )}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; 2026 {siteConfig.name}. All rights reserved.</span>
        <span>Made for journeys worth remembering.</span>
      </div>
    </footer>
  );
}
