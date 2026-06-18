import { siteConfig } from "@/data/site";
import EnquiryForm from "@/components/forms/EnquiryForm";
import Icon from "@/components/ui/Icon";

export default function ContactSection({
  defaultDrop = "",
  defaultCab = "",
  defaultBookingType = "",
}) {
  return (
    <section className="contact section" id="booking">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow"><span />Quick cab booking</span>
          <h2>Where Do You Need<br />a <em>Cab?</em></h2>
          <p>
            Share your pickup, destination and preferred vehicle. Our team will
            confirm availability and fare.
          </p>
          <div className="contact-points">
            <a href={`tel:+${siteConfig.phone}`}>
              <span><Icon name="phone" /></span>
              <div><small>Call us anytime</small><b>{siteConfig.phoneDisplay}</b></div>
            </a>
            <a href={`mailto:${siteConfig.email}`}>
              <span>@</span>
              <div><small>Write to us</small><b>{siteConfig.email}</b></div>
            </a>
            <a
              href={siteConfig.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span><Icon name="map" /></span>
              <div><small>Find our location</small><b>Google Maps</b></div>
            </a>
            {siteConfig.googleBusinessProfile && (
              <a
                href={siteConfig.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span><Icon name="building" /></span>
                <div><small>View our verified listing</small><b>Google Business Profile</b></div>
              </a>
            )}
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span><Icon name="instagram" /></span>
              <div><small>Follow our journeys</small><b>Instagram</b></div>
            </a>
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span><Icon name="facebook" /></span>
              <div><small>Updates and reviews</small><b>Facebook</b></div>
            </a>
          </div>
        </div>
        <EnquiryForm
          defaultDrop={defaultDrop}
          defaultCab={defaultCab}
          defaultBookingType={defaultBookingType}
        />
      </div>
    </section>
  );
}
