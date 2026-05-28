import Image from "next/image";
import Link from "next/link";
import { SITE, WHATSAPP_NUMBER } from "@/lib/config";
import GoldButton from "./GoldButton";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/order", label: "Order Now" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-charcoal" aria-label="Site footer">
      <div className="container-luxury section-padding-sm pb-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Image
              src="/images/logo.png"
              alt="The Scent Bar Belfast logo"
              width={140}
              height={140}
              className="mb-8 h-28 w-auto object-contain md:h-32"
            />
            <p className="max-w-sm text-sm leading-relaxed text-muted md:text-[0.9375rem] md:leading-7">
              {SITE.description}
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gold/80">
              {SITE.location}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4">
            <div>
              <h3 className="eyebrow mb-6 text-gold-light">Navigate</h3>
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/70 transition-colors duration-300 hover:text-gold-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="eyebrow mb-6 text-gold-light">Contact</h3>
              <ul className="space-y-4 text-sm text-cream/70">
                <li>{SITE.location}</li>
                <li>{SITE.deliveryNote}</li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="transition-colors duration-300 hover:text-gold-light"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-light transition-colors duration-300 hover:text-gold"
                  >
                    WhatsApp Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-3">
            <h3 className="eyebrow mb-4 text-gold-light">Ready to order?</h3>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              Place your order in minutes via WhatsApp. Fast, personal, and local.
            </p>
            <GoldButton href="/order">Order Now</GoldButton>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 md:flex-row">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="font-serif text-sm italic text-gold/50">
            Thank you for supporting a local Belfast business
          </p>
        </div>
      </div>
    </footer>
  );
}
