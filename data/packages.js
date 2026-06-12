export const tourPackages = [
  {
    slug: "mysore-heritage-escape",
    name: "Mysore Heritage Escape",
    destination: "Mysore, Karnataka",
    duration: "2 Days / 1 Night",
    price: "INR 6,499",
    priceValue: 6499,
    image:
      "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=85",
    tag: "Weekend special",
    description:
      "A relaxed royal getaway through palaces, gardens, local markets and the timeless charm of Mysore.",
    included: [
      "AC cab for sightseeing",
      "Hotel stay with breakfast",
      "Driver allowance",
      "Pickup and drop",
    ],
    highlights: ["Mysore Palace", "Brindavan Gardens", "Chamundi Hills", "St. Philomena's Church"],
  },
  {
    slug: "coorg-coffee-trails",
    name: "Coorg Coffee Trails",
    destination: "Coorg, Karnataka",
    duration: "3 Days / 2 Nights",
    price: "INR 9,999",
    priceValue: 9999,
    image:
      "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1200&q=85",
    tag: "Most loved",
    description:
      "Breathe in the hills with coffee estates, misty viewpoints, waterfalls and slow, scenic drives.",
    included: [
      "Private AC cab",
      "Resort accommodation",
      "Daily breakfast",
      "Complete sightseeing",
    ],
    highlights: ["Abbey Falls", "Raja's Seat", "Coffee estate walk", "Dubare Elephant Camp"],
  },
  {
    slug: "ooty-mountain-getaway",
    name: "Ooty Mountain Getaway",
    destination: "Ooty, Tamil Nadu",
    duration: "3 Days / 2 Nights",
    price: "INR 10,499",
    priceValue: 10499,
    image:
      "https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?auto=format&fit=crop&w=1200&q=85",
    tag: "Family favourite",
    description:
      "Cool mountain air, tea gardens, beautiful lakes and memorable viewpoints in the Queen of Hills.",
    included: [
      "Doorstep pickup",
      "Quality hotel",
      "Breakfast included",
      "Local sightseeing",
    ],
    highlights: ["Ooty Lake", "Doddabetta Peak", "Botanical Garden", "Tea Factory"],
  },
  {
    slug: "goa-beach-break",
    name: "Goa Beach Break",
    destination: "North and South Goa",
    duration: "4 Days / 3 Nights",
    price: "INR 14,999",
    priceValue: 14999,
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85",
    tag: "Best seller",
    description:
      "A sun-soaked escape with famous beaches, heritage streets, coastal food and easy island energy.",
    included: [
      "Airport transfer",
      "Beachside hotel",
      "Daily breakfast",
      "North and South Goa tour",
    ],
    highlights: ["Calangute Beach", "Old Goa churches", "Panjim", "South Goa coast"],
  },
  {
    slug: "kerala-backwater-bliss",
    name: "Kerala Backwater Bliss",
    destination: "Munnar and Alleppey",
    duration: "5 Days / 4 Nights",
    price: "INR 21,999",
    priceValue: 21999,
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85",
    tag: "Premium escape",
    description:
      "From rolling tea country to peaceful backwaters, discover Kerala at an unhurried pace.",
    included: [
      "Private cab",
      "Premium stays",
      "Breakfast and houseboat meals",
      "All transfers",
    ],
    highlights: ["Munnar tea gardens", "Eravikulam National Park", "Alleppey houseboat", "Backwater cruise"],
  },
  {
    slug: "hampi-heritage-trail",
    name: "Hampi Heritage Trail",
    destination: "Hampi, Karnataka",
    duration: "3 Days / 2 Nights",
    price: "INR 8,999",
    priceValue: 8999,
    image: "/hampi-heritage.png",
    tag: "Culture pick",
    description:
      "Walk through spectacular ruins, ancient temples and sunset landscapes from the Vijayanagara era.",
    included: [
      "AC transport",
      "Hotel stay",
      "Breakfast included",
      "Guided local tour",
    ],
    highlights: ["Virupaksha Temple", "Vittala Temple", "Lotus Mahal", "Hemakuta Hill sunset"],
  },
];

export function getPackageBySlug(slug) {
  return tourPackages.find((item) => item.slug === slug);
}
