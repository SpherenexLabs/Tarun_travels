import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function PackageCard({ packageItem }) {
  return (
    <article className="package-card">
      <div className="package-image">
        <Image
          src={packageItem.image}
          alt={`${packageItem.name} tour package in ${packageItem.destination}`}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 33vw"
        />
        <span className="tag">{packageItem.tag}</span>
        <span className="duration">
          <Icon name="clock" size={15} /> {packageItem.duration}
        </span>
      </div>
      <div className="package-body">
        <span className="location">
          <Icon name="map" size={15} /> {packageItem.destination}
        </span>
        <h3>{packageItem.name}</h3>
        <div className="package-bottom">
          <span>
            Starts from <b>{packageItem.price}</b>
            <small>per person</small>
          </span>
          <Link
            href={`/tour-packages/${packageItem.slug}`}
            aria-label={`View ${packageItem.name}`}
          >
            <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </article>
  );
}
