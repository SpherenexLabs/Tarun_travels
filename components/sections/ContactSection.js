import EnquiryForm from "@/components/forms/EnquiryForm";
import Icon from "@/components/ui/Icon";
import { getPublicSiteSettings } from "@/lib/publicSiteSettings";
import { getCabs } from "@/lib/db";
import { cabFleet as staticCabFleet } from "@/data/cabs";

export default async function ContactSection({
  defaultDrop = "",
  defaultCab = "",
  defaultBookingType = "",
}) {
  const [siteSettings, firebaseCabs] = await Promise.all([
    getPublicSiteSettings(),
    getCabs(),
  ]);
  const cabs = firebaseCabs && firebaseCabs.length > 0 ? firebaseCabs : staticCabFleet;

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
            <a href={`tel:+${siteSettings.phone}`}>
              <span><Icon name="phone" /></span>
              <div><small>Call us anytime</small><b>{siteSettings.phoneDisplay}</b></div>
            </a>
            <a href={`mailto:${siteSettings.email}`}>
              <span>@</span>
              <div><small>Write to us</small><b>{siteSettings.email}</b></div>
            </a>
            <a
              href={siteSettings.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span><Icon name="map" /></span>
              <div><small>Find our location</small><b>Google Maps</b></div>
            </a>
            {siteSettings.googleBusinessProfile && (
              <a
                href={siteSettings.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span><Icon name="building" /></span>
                <div><small>View our verified listing</small><b>Google Business Profile</b></div>
              </a>
            )}
            <a
              href={siteSettings.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span><Icon name="instagram" /></span>
              <div><small>Follow our journeys</small><b>Instagram</b></div>
            </a>
            <a
              href={siteSettings.facebook}
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
          cabs={cabs}
        />
      </div>
    </section>
  );
}
