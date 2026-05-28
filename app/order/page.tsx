import type { Metadata } from "next";
import OrderContent from "./OrderContent";

export const metadata: Metadata = {
  title: "Order Now",
  description:
    "Place your order with The Scent Bar Belfast via WhatsApp. Quick, easy, and personal.",
};

export default function OrderPage() {
  return <OrderContent />;
}
