import Link from "next/link";
import { siteConfig } from "@/data/site";
import Brand from "@/components/ui/Brand";
import Icon from "@/components/ui/Icon";
import { getPublicSiteSettings } from "@/lib/publicSiteSettings";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Booking", href: "/contact#booking" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const seoTripColumns = [
  [
    "Airport Cab/Taxi from MG Road to Bangalore Airport",
    "Airport Cab/Taxi from Whitefield to Bangalore Airport",
    "Airport Cab/Taxi from Electronic City to Bangalore Airport",
    "Airport Cab/Taxi from Hebbal to Bangalore Airport",
    "Airport Cab/Taxi from Yelahanka to Bangalore Airport",
    "Bangalore to Coorg",
    "Bangalore to Ooty",
  ],
  [
    "Airport Cab/Taxi from Indiranagar to Bangalore Airport",
    "Airport Cab/Taxi from Banashankari to Bangalore Airport",
    "Airport Cab/Taxi from Frazer Town to Bangalore Airport",
    "Airport Cab/Taxi from Jayanagar to Bangalore Airport",
    "Bangalore to Coimbatore",
    "Bangalore to Pondicherry",
    "Bangalore to Mysore",
  ],
  [
    "Airport Cab/Taxi from Koramangala to Bangalore Airport",
    "Airport Cab/Taxi from Basavanagudi to Bangalore Airport",
    "Airport Cab/Taxi from Rajajinagar to Bangalore Airport",
    "Airport Cab/Taxi from Marathahalli to Bangalore Airport",
    "Bangalore to Chennai",
    "Bangalore to Tirupati",
    "Bangalore to Mangalore",
  ],
];

export default async function Footer() {
  const s = await getPublicSiteSettings();

  return (
    <footer id="footer">
      <div className="container footer-touch">
        <div className="footer-touch-copy">
          <h3>GET IN TOUCH WITH US</h3>
          <h4>{s.name} - Bengaluru</h4>
          <p>
            {s.address.join(", ")}<br />
            Airport taxi, local cab rental and outstation cab booking across Bengaluru.
          </p>
          <p>
            Devanahalli, Whitefield, Electronic City, Koramangala, Indiranagar,<br />
            Jayanagar, Hebbal, Marathahalli and nearby Bangalore locations.
          </p>
          <h4>Help</h4>
          <p>
            <strong>24/7 Customer Support</strong><br />
            Website: {siteConfig.url.replace(/^https?:\/\//, "")}<br />
            Call - {s.phoneDisplay}<br />
            Whatsapp - {s.phoneDisplay}<br />
            E- Mail - {s.email}
          </p>
        </div>
        <div className="footer-touch-side">
          <Brand className="footer-touch-brand" />
          <div className="footer-touch-socials">
            <a
              href={s.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Tarun Travel Hub on Facebook"
            >
              <Icon name="facebook" />
            </a>
            <a
              href={s.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Tarun Travel Hub on Instagram"
            >
              <Icon name="instagram" />
            </a>
          </div>
          <nav className="footer-touch-nav" aria-label="Footer navigation">
            {footerNav.map((item, index) => (
              <span key={item.label}>
                <Link href={item.href}>{item.label}</Link>
                {index < footerNav.length - 1 && <b>/</b>}
              </span>
            ))}
          </nav>
          <p className="footer-touch-rights">All Rights Reserved 2026</p>
        </div>
      </div>
      <div className="container footer-seo">
        <h4>Book Popular Trips with {s.name} - Airport Taxi with <em>24/7 Services</em></h4>
        <div className="footer-trip-columns">
          {seoTripColumns.map((column, index) => (
            <div key={`footer-trip-column-${index}`}>
              {column.map((label) => (
                <Link href={label.includes("Airport") ? "/airport-cabs" : "/outstation-cabs"} key={label}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
