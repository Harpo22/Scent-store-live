import type { Metadata } from "next";
import ProductsContent from "./ProductsContent";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Products — Wax Melts, Room Sprays & Reed Diffusers",
  description: `Shop luxury home fragrance in Belfast. Snap bar wax melts from £3, room sprays £5, reed diffusers £15. 20 signature scents from ${SITE.name}.`,
};

export default function ProductsPage() {
  return <ProductsContent />;
}
