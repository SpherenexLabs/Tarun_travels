export const siteConfig = {
  name: "Tarun Travel Hub",
  shortName: "Tarun",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  tagline: "Explore more. Worry less.",
  description:
    "Curated holidays, dependable cabs and travel memories made with care.",
  category: "Travel Agency",
  phoneDisplay: "+91 98765 43210",
  phone: "919876543210",
  email: "hello@taruntravelhub.com",
  address: ["MG Road, Bengaluru", "Karnataka 560001"],
  postalAddress: {
    streetAddress: "MG Road",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN",
  },
  hours: "Mon - Sun, 24 hours",
  openingHours: {
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/",
  facebook:
    process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/",
  googleBusinessProfile:
    process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL || "",
  googleReviewUrl:
    process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "",
  mapEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    "https://www.google.com/maps?q=Bengaluru%2C%20Karnataka&z=12&output=embed",
  mapDirectionsUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_DIRECTIONS_URL ||
    "https://maps.google.com/?q=Bengaluru,Karnataka",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/tour-packages" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];
