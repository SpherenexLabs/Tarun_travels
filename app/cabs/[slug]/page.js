import Link from "next/link";
import { notFound } from "next/navigation";
import ContactSection from "@/components/sections/ContactSection";
import Icon from "@/components/ui/Icon";
import { cabFleet, getCabBySlug } from "@/data/cabs";
import { createCabEnquiryUrl } from "@/lib/whatsapp";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return cabFleet.map((cab) => ({ slug: cab.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cab = getCabBySlug(slug);
  if (!cab) return {};

  return createPageMetadata({
    title: `${cab.name} Cab Booking in Bengaluru`,
    description: `${cab.description} View airport, local and outstation fares and book ${cab.name} by WhatsApp.`,
    path: `/cabs/${cab.slug}`,
    keywords: [
      `${cab.name} cab Bengaluru`,
      `${cab.name} airport taxi`,
      `${cab.name} outstation fare`,
    ],
  });
}

export default async function CabDetailsPage({ params }) {
  const { slug } = await params;
  const cab = getCabBySlug(slug);
  if (!cab) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${cab.name} Cab Booking`,
    description: cab.description,
    areaServed: "Bengaluru",
    provider: {
      "@type": "TaxiService",
      name: "Tarun Travel Hub",
    },
    offers: [
      { "@type": "Offer", name: "Airport taxi", priceCurrency: "INR", price: cab.airportFare.replace(/\D/g, "") },
      { "@type": "Offer", name: "Local rental", priceCurrency: "INR", price: cab.localFare.replace(/\D/g, "") },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="cab-detail-hero">
        <div className="container cab-detail-heading">
          <div className="cab-detail-icon"><Icon name="car" size={115} /></div>
          <div>
            <span className="eyebrow light"><span />{cab.model}</span>
            <h1>{cab.name} Cab Booking</h1>
            <p><Icon name="check" size={18} /> {cab.capacity}</p>
          </div>
        </div>
      </section>

      <section className="package-detail section">
        <div className="container package-detail-grid">
          <article>
            <span className="eyebrow"><span />Vehicle details</span>
            <h2>Comfortable Cab for Every Ride</h2>
            <p>{cab.description}</p>

            <div className="cab-detail-fares">
              <div><small>Airport fare</small><b>{cab.airportFare}</b><span>fixed package*</span></div>
              <div><small>Local fare</small><b>{cab.localFare}</b><span>4 hours / 40 km*</span></div>
              <div><small>Outstation fare</small><b>{cab.outstationFare}</b><span>minimum km applies*</span></div>
            </div>

            <div className="detail-block">
              <h3>Vehicle features</h3>
              <ul>
                {cab.features.map((feature) => (
                  <li key={feature}><Icon name="check" size={18} />{feature}</li>
                ))}
              </ul>
            </div>
            <p className="fare-disclaimer">
              *Indicative fare only. Toll, parking, state permit, waiting and driver allowance may be charged separately.
            </p>
          </article>

          <aside className="booking-card">
            <span>Airport fare starts from</span>
            <strong>{cab.airportFare}</strong>
            <small>{cab.capacity}</small>
            <hr />
            <p>Share the pickup, drop, date and time to receive final fare confirmation.</p>
            <a className="btn btn-whatsapp" href={createCabEnquiryUrl(cab.name)} target="_blank" rel="noopener noreferrer">
              Book on WhatsApp <Icon name="whatsapp" size={17} />
            </a>
            <Link className="btn btn-outline" href={`/contact?cab=${cab.slug}`}>
              Send Booking Enquiry
            </Link>
          </aside>
        </div>
      </section>

      <ContactSection defaultCab={cab.name} />
    </>
  );
}
