import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/config";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/order", label: "Order Now" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Image
              src="/images/logo.png"
              alt="The Scent Bar Belfast"
              width={120}
              height={120}
              className="mb-6 h-24 w-auto object-contain"
            />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {SITE.description}
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 font-serif text-sm uppercase tracking-[0.25em] text-gold-light">
              Navigate
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 font-serif text-sm uppercase tracking-[0.25em] text-gold-light">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>{SITE.location}</li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-gold-light"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <Link
                  href="/order"
                  className="inline-block text-gold-light transition-colors hover:text-gold"
                >
                  Order via WhatsApp →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 md:flex-row">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="font-serif text-xs italic text-gold/60">
            Thank you for supporting a local business ♥
          </p>
        </div>
      </div>
    </footer>
  );
}
