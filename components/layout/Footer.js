import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";
import Brand from "@/components/ui/Brand";
import Icon from "@/components/ui/Icon";

const routes = ["Airport Taxi", "Local Rental", "Bengaluru to Mysuru", "Bengaluru to Coorg", "Bengaluru to Ooty"];

export default function Footer() {
  return (
    <footer>
      <div className="footer-call-strip">
        <div className="container">
          <div>
            <Icon name="phone" size={30} />
            <span><small>Call us for instant booking</small><b>{siteConfig.phoneDisplay}</b></span>
          </div>
          <p>Available 24 hours for airport taxi, local rental and outstation cab booking.</p>
          <a className="btn btn-primary" href={`tel:+${siteConfig.phone}`}>Call Now</a>
        </div>
      </div>
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
          <h4>Popular Services</h4>
          {routes.map((route) => (
            <Link href="/cabs" key={route}>{route}</Link>
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
        <span>Reliable cabs, clear fares and 24/7 support.</span>
      </div>
    </footer>
  );
}
