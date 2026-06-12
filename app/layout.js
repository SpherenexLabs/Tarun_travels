import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { siteConfig } from "@/data/site";
import { services } from "@/data/content";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  category: "travel",
  title: {
    default: "Tarun Travel Hub | Cabs, Tours & Holiday Packages",
    template: "%s | Tarun Travel Hub",
  },
  description:
    "Explore curated South India tour packages, private cabs, hotel bookings and custom holidays with Tarun Travel Hub.",
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Tarun Travel Hub | Cabs, Tours & Holiday Packages",
    description: siteConfig.description,
    images: ["/travel-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({ children }) {
  const sameAs = [
    siteConfig.googleBusinessProfile,
    siteConfig.instagram,
    siteConfig.facebook,
  ].filter(Boolean);

  const travelAgencySchema = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: `+${siteConfig.phone}`,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.postalAddress,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: siteConfig.openingHours.days,
      opens: siteConfig.openingHours.opens,
      closes: siteConfig.openingHours.closes,
    },
    hasMap: siteConfig.mapDirectionsUrl,
    sameAs,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Travel services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
