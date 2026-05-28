"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import GoldButton from "./GoldButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/order", label: "Order Now" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold/10 bg-background/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-luxury flex items-center justify-between py-5 md:py-6"
        aria-label="Main navigation"
      >
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="The Scent Bar Belfast — luxury home fragrance logo"
            width={52}
            height={52}
            className="h-11 w-11 object-contain transition-transform duration-500 group-hover:scale-105 md:h-12 md:w-12"
            priority
          />
          <span className="hidden font-serif text-sm uppercase tracking-[0.28em] text-cream sm:block">
            The Scent Bar
          </span>
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative py-1 text-xs uppercase tracking-[0.22em] transition-colors duration-300 hover:text-gold-light ${
                  pathname === link.href ? "text-gold-light" : "text-cream/75"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-px w-full bg-gold"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <GoldButton href="/order">Order Now</GoldButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 flex h-12 w-12 items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex flex-col items-center justify-center gap-1.5">
            <span
              className={`block h-px w-6 bg-gold transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-gold transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-gold transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ delay: 0.05 }}
              className="flex h-full flex-col items-center justify-center gap-10 px-6"
            >
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-2 font-serif text-2xl uppercase tracking-[0.18em] md:text-3xl ${
                      pathname === link.href ? "text-gold-light" : "text-cream"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-4 w-full max-w-xs"
              >
                <GoldButton href="/order" size="large" className="w-full">
                  Order Now
                </GoldButton>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
