import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { createCabEnquiryUrl } from "@/lib/whatsapp";

const fareConfig = {
  airport: {
    label: "Airport fare",
    getFare: (cab) => cab.airportFare,
    getNote: (cab) => cab.airportLimit,
  },
  outstation: {
    label: "Round trip",
    getFare: (cab) => cab.outstationFare,
    getNote: (cab) => `Driver allowance ${cab.driverAllowance}`,
  },
  local: {
    label: "Local package",
    getFare: (cab) => cab.localFare,
    getNote: (cab) => cab.localLimit,
  },
};

export default function FareCard({ cab, type, showAllFares = false }) {
  const config = fareConfig[type];
  const serviceName = `${cab.name} ${config.label}`;
  const fare = config.getFare(cab);
  const [currency, ...amountParts] = fare.split(" ");
  const amount = amountParts.join(" ");

  return (
    <article className={`fare-card fare-card-${cab.slug}`}>
      <div className="fare-car-image">
        <span className="fare-tag">{cab.tag}</span>
        <Image
          src="/cab-fare-card.png"
          alt={`${cab.name} cab for booking`}
          width={320}
          height={180}
          sizes="(max-width: 480px) 100vw, (max-width: 740px) 50vw, 25vw"
        />
      </div>

      <div className="fare-card-body">
        <div className="fare-card-heading">
          <div>
            <h3>{cab.name}</h3>
            <p>{cab.model}</p>
          </div>
          <div className="fare-price">
            <small>{config.label}</small>
            <b><sup>{currency}</sup>{amount}</b>
          </div>
        </div>

        <div className="fare-capacity">
          <span><Icon name="check" size={14} />{cab.capacity}</span>
          <span><Icon name="check" size={14} />Air conditioned</span>
        </div>

        {showAllFares ? (
          <div className="suv-fare-options">
            <span><small>Local package</small><b>{cab.localFare}</b></span>
            <span><small>Outstation</small><b>{cab.outstationFare}</b></span>
          </div>
        ) : (
          <div className="fare-inclusion">
            <Icon name="clock" size={15} />
            <span>{config.getNote(cab)}</span>
          </div>
        )}

        <p className="fare-extra">Toll, parking and permit charges are additional.</p>

        <div className="fare-actions">
          <Link href={`/contact?cab=${cab.slug}&service=${encodeURIComponent(config.label)}`}>
            Book Now <Icon name="arrow" size={14} />
          </Link>
          <a
            href={createCabEnquiryUrl(serviceName)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${cab.name} on WhatsApp`}
          >
            <Icon name="whatsapp" size={19} />
          </a>
        </div>
      </div>
    </article>
  );
}
