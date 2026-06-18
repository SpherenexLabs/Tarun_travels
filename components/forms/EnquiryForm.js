"use client";

import { bookingTypes, cabFleet } from "@/data/cabs";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import Icon from "@/components/ui/Icon";

export default function EnquiryForm({
  defaultDrop = "",
  defaultCab = "",
  defaultBookingType = "",
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Tarun Travel Hub, I would like to book a cab.",
      "",
      `Customer name: ${data.get("name")}`,
      `Mobile number: ${data.get("mobile")}`,
      `Email ID: ${data.get("email") || "Not provided"}`,
      `Pickup location: ${data.get("pickup")}`,
      `Drop location: ${data.get("drop")}`,
      `Pickup date: ${data.get("pickupDate")}`,
      `Pickup time: ${data.get("pickupTime")}`,
      `Booking type: ${data.get("bookingType")}`,
      `Preferred cab: ${data.get("cabType") || "Any suitable cab"}`,
      `Passengers: ${data.get("passengers")}`,
      `Special requirement: ${data.get("message") || "None"}`,
    ].join("\n");

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span>Cab booking enquiry</span>
        <h3>Book Your Cab</h3>
        <p>Enter your journey details and receive fare confirmation on WhatsApp.</p>
      </div>

      <div className="form-row">
        <div>
          <label htmlFor="enquiry-name">Customer name *</label>
          <input autoComplete="name" id="enquiry-name" maxLength={80} name="name" placeholder="Full name" required type="text" />
        </div>
        <div>
          <label htmlFor="enquiry-mobile">Mobile number *</label>
          <input autoComplete="tel" id="enquiry-mobile" inputMode="tel" maxLength={18} name="mobile" pattern="[0-9+() -]{10,18}" placeholder="+91 00000 00000" required title="Enter a valid mobile number" type="tel" />
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-email">Email ID</label>
        <input autoComplete="email" id="enquiry-email" maxLength={120} name="email" placeholder="you@example.com" type="email" />
      </div>

      <div className="form-row">
        <div>
          <label htmlFor="enquiry-pickup">Pickup location *</label>
          <input id="enquiry-pickup" maxLength={120} name="pickup" placeholder="Enter pickup address" required type="text" />
        </div>
        <div>
          <label htmlFor="enquiry-drop">Drop location *</label>
          <input defaultValue={defaultDrop} id="enquiry-drop" maxLength={120} name="drop" placeholder="Enter destination" required type="text" />
        </div>
      </div>

      <div className="form-row">
        <div>
          <label htmlFor="enquiry-date">Pickup date *</label>
          <input id="enquiry-date" name="pickupDate" required type="date" />
        </div>
        <div>
          <label htmlFor="enquiry-time">Pickup time *</label>
          <input id="enquiry-time" name="pickupTime" required type="time" />
        </div>
      </div>

      <div className="form-row">
        <div>
          <label htmlFor="enquiry-booking-type">Booking type *</label>
          <select defaultValue={defaultBookingType} id="enquiry-booking-type" name="bookingType" required>
            <option value="" disabled>Select service</option>
            {bookingTypes.map((type) => <option value={type} key={type}>{type}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="enquiry-cab">Preferred cab</label>
          <select defaultValue={defaultCab} id="enquiry-cab" name="cabType">
            <option value="">Any suitable cab</option>
            {cabFleet.map((cab) => <option value={cab.name} key={cab.slug}>{cab.name} - {cab.capacity}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-passengers">Number of passengers *</label>
        <input id="enquiry-passengers" max="20" min="1" name="passengers" placeholder="2" required type="number" />
      </div>

      <div>
        <label htmlFor="enquiry-message">Message / special requirement</label>
        <textarea id="enquiry-message" maxLength={1000} name="message" placeholder="Flight number, luggage details, child seat or other requirements..." rows={4} />
      </div>

      <button className="btn btn-dark" type="submit">
        Get Fare on WhatsApp <Icon name="whatsapp" size={18} />
      </button>
      <small>Final fare will be confirmed based on route, date and cab availability.</small>
    </form>
  );
}
