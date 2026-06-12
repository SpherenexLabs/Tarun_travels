import { siteConfig } from "@/data/site";
import Icon from "@/components/ui/Icon";

export default function MapSection() {
  return (
    <section className="map-section" aria-label="Office location">
      <iframe
        title={`${siteConfig.name} location`}
        src={siteConfig.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="map-card">
        <span className="eyebrow"><span />Visit us</span>
        <h3>{siteConfig.name}</h3>
        <p>{siteConfig.address.map((line) => <span key={line}>{line}<br /></span>)}</p>
        <div className="map-actions">
          <a
            href={siteConfig.mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions <Icon name="arrow" size={16} />
          </a>
          {siteConfig.googleBusinessProfile && (
            <a
              href={siteConfig.googleBusinessProfile}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Business Profile <Icon name="arrow" size={16} />
            </a>
          )}
          {siteConfig.googleReviewUrl && (
            <a
              href={siteConfig.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Write a Google review <Icon name="arrow" size={16} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
