"use client";

import { tourPackages } from "@/data/packages";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import Icon from "@/components/ui/Icon";

export default function EnquiryForm({
  defaultDestination = "",
  defaultPackage = "",
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Tarun Travel Hub, I would like to make a travel enquiry.",
      "",
      `Customer name: ${data.get("name")}`,
      `Mobile number: ${data.get("mobile")}`,
      `Email ID: ${data.get("email")}`,
      `Destination: ${data.get("destination")}`,
      `Number of persons: ${data.get("persons")}`,
      `Travel date: ${data.get("travelDate")}`,
      `Package interest: ${data.get("packageInterest") || "Custom package"}`,
      `Message / special requirement: ${data.get("message") || "None"}`,
    ].join("\n");

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span>Booking enquiry</span>
        <h3>Plan your perfect trip</h3>
        <p>Fill in your travel details and our team will contact you with a personalised quote.</p>
      </div>

      <div className="form-row">
        <div>
          <label htmlFor="enquiry-name">Customer name *</label>
          <input
            autoComplete="name"
            id="enquiry-name"
            maxLength={80}
            name="name"
            placeholder="Enter your full name"
            required
            type="text"
          />
        </div>
        <div>
          <label htmlFor="enquiry-mobile">Mobile number *</label>
          <input
            autoComplete="tel"
            id="enquiry-mobile"
            inputMode="tel"
            maxLength={18}
            name="mobile"
            pattern="[0-9+() -]{10,18}"
            placeholder="+91 00000 00000"
            required
            title="Enter a valid mobile number"
            type="tel"
          />
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-email">Email ID *</label>
        <input
          autoComplete="email"
          id="enquiry-email"
          maxLength={120}
          name="email"
          placeholder="you@example.com"
          required
          type="email"
        />
      </div>

      <div className="form-row">
        <div>
          <label htmlFor="enquiry-destination">Travel destination *</label>
          <input
            defaultValue={defaultDestination}
            id="enquiry-destination"
            list="travel-destinations"
            maxLength={100}
            name="destination"
            placeholder="Where do you want to go?"
            required
            type="text"
          />
          <datalist id="travel-destinations">
            {tourPackages.map((item) => (
              <option value={item.destination} key={item.slug} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor="enquiry-persons">Number of persons *</label>
          <input
            id="enquiry-persons"
            max="50"
            min="1"
            name="persons"
            placeholder="2"
            required
            type="number"
          />
        </div>
      </div>

      <div className="form-row">
        <div>
          <label htmlFor="enquiry-date">Travel date *</label>
          <input id="enquiry-date" name="travelDate" required type="date" />
        </div>
        <div>
          <label htmlFor="enquiry-package">Package interest</label>
          <select
            defaultValue={defaultPackage}
            id="enquiry-package"
            name="packageInterest"
          >
            <option value="">Custom / Not decided</option>
            {tourPackages.map((item) => (
              <option value={item.name} key={item.slug}>{item.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-message">Message / special requirement</label>
        <textarea
          id="enquiry-message"
          maxLength={1000}
          name="message"
          placeholder="Pickup city, hotel preference, children travelling, meal requirements..."
          rows={5}
        />
      </div>

      <button className="btn btn-dark" type="submit">
        Send enquiry on WhatsApp <Icon name="whatsapp" size={18} />
      </button>
      <small>
        By submitting, you agree to be contacted regarding this travel enquiry.
      </small>
    </form>
  );
}
