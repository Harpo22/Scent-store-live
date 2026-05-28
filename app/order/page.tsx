import type { Metadata } from "next";
import OrderContent from "./OrderContent";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Order Now — WhatsApp Ordering",
  description: `Order luxury home fragrance from ${SITE.name} via WhatsApp. Fast ordering with collection and delivery across Belfast and Northern Ireland.`,
};

export default function OrderPage() {
  return <OrderContent />;
}
