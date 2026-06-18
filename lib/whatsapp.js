import { siteConfig } from "@/data/site";

export function createWhatsAppUrl(message) {
  return `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(message)}`;
}

export function createCabEnquiryUrl(service = "a cab") {
  return createWhatsAppUrl(
    `Hello ${siteConfig.name}, I would like to book ${service}.`,
  );
}

export const createPackageEnquiryUrl = createCabEnquiryUrl;
