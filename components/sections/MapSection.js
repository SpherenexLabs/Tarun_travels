import Icon from "@/components/ui/Icon";
import { getPublicSiteSettings } from "@/lib/publicSiteSettings";

export default async function MapSection() {
  const siteSettings = await getPublicSiteSettings();

  return (
    <section className="map-section" aria-label="Office location">
      <iframe
        title={`${siteSettings.name} location`}
        src={siteSettings.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="map-card">
        <span className="eyebrow"><span />Visit us</span>
        <h3>{siteSettings.name}</h3>
        <p>{siteSettings.address.map((line) => <span key={line}>{line}<br /></span>)}</p>
        <div className="map-actions">
          <a
            href={siteSettings.mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions <Icon name="arrow" size={16} />
          </a>
          {siteSettings.googleBusinessProfile && (
            <a
              href={siteSettings.googleBusinessProfile}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Business Profile <Icon name="arrow" size={16} />
            </a>
          )}
          {siteSettings.googleReviewUrl && (
            <a
              href={siteSettings.googleReviewUrl}
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
