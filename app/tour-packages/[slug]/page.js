import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactSection from "@/components/sections/ContactSection";
import Icon from "@/components/ui/Icon";
import { getPackageBySlug, tourPackages } from "@/data/packages";
import { siteConfig } from "@/data/site";
import { createPackageEnquiryUrl } from "@/lib/whatsapp";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return tourPackages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const packageItem = getPackageBySlug(slug);

  if (!packageItem) return {};

  return createPageMetadata({
    title: `${packageItem.name} Tour Package`,
    description: packageItem.description,
    path: `/tour-packages/${packageItem.slug}`,
    image: packageItem.image,
    keywords: [
      `${packageItem.name} package`,
      `${packageItem.destination} tour package`,
      `${packageItem.destination} holiday`,
    ],
  });
}

export default async function PackageDetailsPage({ params }) {
  const { slug } = await params;
  const packageItem = getPackageBySlug(slug);

  if (!packageItem) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: packageItem.name,
    description: packageItem.description,
    image: new URL(packageItem.image, siteConfig.url).toString(),
    touristType: ["Families", "Couples", "Groups"],
    itinerary: packageItem.highlights.map((highlight) => ({
      "@type": "TouristAttraction",
      name: highlight,
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: packageItem.priceValue,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="package-detail-hero">
        <Image
          src={packageItem.image}
          alt={`${packageItem.name} tour in ${packageItem.destination}`}
          fill
          priority
          sizes="100vw"
        />
        <div className="page-hero-overlay" />
        <div className="container package-detail-heading">
          <span className="eyebrow light"><span />{packageItem.destination}</span>
          <h1>{packageItem.name}</h1>
          <div>
            <span><Icon name="clock" size={18} />{packageItem.duration}</span>
            <span>From <b>{packageItem.price}</b> per person</span>
          </div>
        </div>
      </section>

      <section className="package-detail section">
        <div className="container package-detail-grid">
          <article>
            <span className="eyebrow"><span />Package overview</span>
            <h2>A memorable escape,<br /><em>planned for you.</em></h2>
            <p>{packageItem.description}</p>

            <div className="detail-block">
              <h3>Package highlights</h3>
              <ul>
                {packageItem.highlights.map((item) => (
                  <li key={item}><Icon name="map" size={18} />{item}</li>
                ))}
              </ul>
            </div>

            <div className="detail-block">
              <h3>What is included</h3>
              <ul>
                {packageItem.included.map((item) => (
                  <li key={item}><Icon name="check" size={18} />{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="booking-card">
            <span>Starting from</span>
            <strong>{packageItem.price}</strong>
            <small>per person</small>
            <hr />
            <p>Want different dates, pickup city or hotel options? We will customise this package for you.</p>
            <a
              className="btn btn-primary"
              href={createPackageEnquiryUrl(packageItem.name)}
              target="_blank"
              rel="noreferrer"
            >
              Book on WhatsApp <Icon name="arrow" size={17} />
            </a>
            <Link className="btn btn-outline" href={`/contact?package=${packageItem.slug}`}>
              Send an enquiry
            </Link>
          </aside>
        </div>
      </section>

      <ContactSection
        defaultDestination={packageItem.destination}
        defaultPackage={packageItem.name}
      />
    </>
  );
}
