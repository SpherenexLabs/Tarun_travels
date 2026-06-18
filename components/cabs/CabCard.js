import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { createCabEnquiryUrl } from "@/lib/whatsapp";

export default function CabCard({ cab }) {
  return (
    <article className="package-card cab-card">
      <div className="cab-visual">
        <span className="tag">{cab.tag}</span>
        <Image
          src="/cab-fare-card.png"
          alt={`${cab.name} cab`}
          width={420}
          height={240}
          sizes="(max-width: 740px) 100vw, 33vw"
        />
        <small>{cab.model}</small>
      </div>
      <div className="package-body">
        <span className="location"><Icon name="check" size={14} /> {cab.capacity}</span>
        <h3>{cab.name}</h3>
        <div className="cab-fares">
          <span><small>Airport</small><b>{cab.airportFare}</b></span>
          <span><small>Local 4h/40km</small><b>{cab.localFare}</b></span>
          <span><small>Outstation</small><b>{cab.outstationFare}</b></span>
        </div>
        <p className="fare-note">Toll, parking and permit charges may apply.</p>
        <div className="package-actions">
          <Link className="btn btn-primary" href={`/cabs/${cab.slug}`}>
            View Details
          </Link>
          <a
            className="btn btn-whatsapp"
            href={createCabEnquiryUrl(cab.name)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={16} /> WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
