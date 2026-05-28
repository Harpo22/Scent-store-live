import { WHATSAPP_NUMBER } from "./config";

export function buildWhatsAppOrderUrl(
  fullName: string,
  phone: string,
  address: string,
  order: string
): string {
  const message = `Hey, I'd like to place an order
Full Name: ${fullName.trim()}
Phone Number: ${phone.trim()}
Address: ${address.trim()}
Order:
${order.trim()}`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
