import type { Metadata } from "next";
import ProductsContent from "./ProductsContent";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse snap bar wax melts, room sprays, reed diffusers and refills. 20 luxury scents available from The Scent Bar Belfast.",
};

export default function ProductsPage() {
  return <ProductsContent />;
}
