import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "About — Local Belfast Fragrance Brand",
  description: `Discover ${SITE.name} — a premium handcrafted home fragrance brand based in Belfast, Northern Ireland. Luxury scents at honest prices.`,
};

export default function AboutPage() {
  return <AboutContent />;
}
