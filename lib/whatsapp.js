import { siteConfig } from "@/data/site";

export function createWhatsAppUrl(message, phone = siteConfig.phone) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function createCabEnquiryUrl(service = "a cab", phone = siteConfig.phone) {
  return createWhatsAppUrl(
    `Hello ${siteConfig.name}, I would like to book ${service}.`,
    phone,
  );
}

export const createPackageEnquiryUrl = createCabEnquiryUrl;
