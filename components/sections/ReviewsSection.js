import { reviews as staticReviews } from "@/data/content";
import { siteConfig } from "@/data/site";
import { getReviews, getSiteSettings } from "@/lib/db";
import Icon from "@/components/ui/Icon";

export default async function ReviewsSection() {
  const [firebaseReviews, firebaseSettings] = await Promise.all([
    getReviews(),
    getSiteSettings(),
  ]);

  const reviews =
    firebaseReviews && firebaseReviews.length > 0
      ? firebaseReviews
      : staticReviews;

  const googleReviewUrl =
    firebaseSettings?.googleReviewUrl || siteConfig.googleReviewUrl;

  return (
    <section className="reviews section" id="reviews">
      <div className="container review-grid">
        <div className="review-intro">
          <span className="eyebrow light"><span />Guest stories</span>
          <h2>Journeys they still<br /><em>talk about.</em></h2>
          <p className="review-note">
            Travelled with us? Your honest feedback helps other customers plan
            with confidence.
          </p>
          {googleReviewUrl && (
            <a
              className="btn btn-primary review-button"
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Write a Google review <Icon name="arrow" size={17} />
            </a>
          )}
          <div className="review-policy">
            <Icon name="check" size={17} />
            <small>Reviews should come only from genuine customers.</small>
          </div>
        </div>
        <div className="review-cards">
          {reviews.map((review) => (
            <article key={review.name}>
              <Icon name="quote" size={31} />
              <p>{review.quote}</p>
              <div>
                <span className="avatar">{review.initials}</span>
                <span><b>{review.name}</b><small>{review.trip}</small></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
