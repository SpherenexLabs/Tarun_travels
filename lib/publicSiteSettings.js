import { siteConfig } from "@/data/site";
import { getSiteSettings } from "@/lib/db";
import { cache } from "react";

const PLACEHOLDER_PHONE = "919876543210";
const PLACEHOLDER_PHONE_DISPLAY = "+91 98765 43210";

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmbeddableMapUrl(url) {
  const value = clean(url);

  return (
    value.includes("/maps/embed") ||
    (value.includes("google.com/maps") && value.includes("output=embed"))
  );
}

function isGoogleMapsShortUrl(url) {
  const value = clean(url);

  return value.includes("maps.app.goo.gl") || value.includes("goo.gl/maps");
}

function parseGoogleMapCoordinates(url) {
  const value = clean(url);
  const exactMatch = value.match(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/);

  if (exactMatch) {
    return {
      lat: exactMatch[1],
      lng: exactMatch[2],
    };
  }

  const viewportMatch = value.match(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?),/);

  if (viewportMatch) {
    return {
      lat: viewportMatch[1],
      lng: viewportMatch[2],
    };
  }

  return null;
}

const resolveGoogleMapsShortUrl = cache(async (url) => {
  const value = clean(url);

  if (!isGoogleMapsShortUrl(value)) return value;

  try {
    const response = await fetch(value, {
      redirect: "follow",
      signal: AbortSignal.timeout(3000),
      next: { revalidate: 86400 },
    });

    return response.url || value;
  } catch {
    return value;
  }
});

function createGoogleMapEmbedUrl(location) {
  const query = clean(location);
  const coordinates = parseGoogleMapCoordinates(query);

  if (coordinates) {
    return `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=17&output=embed`;
  }

  if (!query) return siteConfig.mapEmbedUrl;

  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;
}

export async function mergePublicSiteSettings(settings = {}) {
  const mapEmbedUrl = clean(settings.mapEmbedUrl);
  const mapDirectionsUrl = clean(settings.mapDirectionsUrl);
  const googleBusinessProfile = clean(settings.googleBusinessUrl);
  const googleReviewUrl = clean(settings.googleReviewUrl);
  const phoneRaw = clean(settings.phoneRaw);
  const phoneDisplay = clean(settings.phone);
  const email = clean(settings.email);
  const address = clean(settings.address);
  const instagram = clean(settings.instagram);
  const facebook = clean(settings.facebook);
  const mapLocation =
    mapEmbedUrl ||
    mapDirectionsUrl ||
    address ||
    siteConfig.address.join(", ");
  const resolvedMapLocation = await resolveGoogleMapsShortUrl(mapLocation);
  const embeddableMapUrl = isEmbeddableMapUrl(mapEmbedUrl)
    ? mapEmbedUrl
    : createGoogleMapEmbedUrl(resolvedMapLocation);

  return {
    ...siteConfig,
    name: clean(settings.siteName) || siteConfig.name,
    tagline: clean(settings.tagline) || siteConfig.tagline,
    phone:
      phoneRaw && phoneRaw !== PLACEHOLDER_PHONE ? phoneRaw : siteConfig.phone,
    phoneDisplay:
      phoneDisplay && phoneDisplay !== PLACEHOLDER_PHONE_DISPLAY
        ? phoneDisplay
        : siteConfig.phoneDisplay,
    email: email || siteConfig.email,
    address: address ? [address] : siteConfig.address,
    instagram: instagram || siteConfig.instagram,
    facebook: facebook || siteConfig.facebook,
    googleBusinessProfile:
      googleBusinessProfile || siteConfig.googleBusinessProfile,
    googleReviewUrl: googleReviewUrl || siteConfig.googleReviewUrl,
    mapEmbedUrl: embeddableMapUrl,
    mapDirectionsUrl:
      mapDirectionsUrl || mapEmbedUrl || siteConfig.mapDirectionsUrl,
    hasCustomMapLink: Boolean(mapDirectionsUrl || mapEmbedUrl),
    hasEmbeddableMapUrl: isEmbeddableMapUrl(mapEmbedUrl),
  };
}

export async function getPublicSiteSettings() {
  const settings = await getSiteSettings();

  return mergePublicSiteSettings(settings ?? {});
}
