import { tourPackages } from "@/data/packages";
import { siteConfig } from "@/data/site";

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/tour-packages", priority: 0.9, changeFrequency: "weekly" },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap() {
  const lastModified = new Date();

  const pages = staticRoutes.map((route) => ({
    url: new URL(route.path || "/", siteConfig.url).toString(),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const packagePages = tourPackages.map((packageItem) => ({
    url: new URL(`/tour-packages/${packageItem.slug}`, siteConfig.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...packagePages];
}
