import { siteConfig } from "@/data/site";

export function createWhatsAppUrl(message) {
  return `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(message)}`;
}

export function createPackageEnquiryUrl(packageName = "a tour package") {
  return createWhatsAppUrl(
    `Hello ${siteConfig.name}, I would like to enquire about ${packageName}.`,
  );
}
