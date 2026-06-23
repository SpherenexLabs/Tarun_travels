import Image from "next/image";
import { galleryItems as staticGallery } from "@/data/content";
import { getGalleryItems } from "@/lib/db";

export default async function GallerySection() {
  const firebaseGallery = await getGalleryItems();

  const galleryItems =
    firebaseGallery && firebaseGallery.length > 0
      ? firebaseGallery
      : staticGallery;

  return (
    <section className="gallery section">
      <div className="container">
        <div className="section-head gallery-head">
          <div>
            <span className="eyebrow"><span />Journeys we serve</span>
            <h2>Comfort on Every <em>Road</em></h2>
          </div>
          <p>Airport transfers, city rides and outstation journeys across South India.</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <figure className={item.className || item.class || ""} key={item.image}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 720px) 100vw, 50vw"
              />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
