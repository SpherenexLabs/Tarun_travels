import Image from "next/image";
import { galleryItems } from "@/data/content";

export default function GallerySection() {
  return (
    <section className="gallery section">
      <div className="container">
        <div className="section-head gallery-head">
          <div>
            <span className="eyebrow"><span />Travel diary</span>
            <h2>Moments from the <em>road</em></h2>
          </div>
          <p>Real places, warm memories and a thousand reasons to take that trip.</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <figure className={item.className || ""} key={item.image}>
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
