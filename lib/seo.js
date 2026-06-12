import { siteConfig } from "@/data/site";

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/travel-hero.png",
}) {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url: path,
      images: [
        {
          url: image,
          alt: `${title} - ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
