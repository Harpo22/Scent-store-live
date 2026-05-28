import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Scent Bar Belfast — a local premium home fragrance brand crafting luxury scents at affordable prices.",
};

export default function AboutPage() {
  return <AboutContent />;
}
