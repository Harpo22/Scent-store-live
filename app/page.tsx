"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import FadeIn from "@/components/FadeIn";
import GoldButton from "@/components/GoldButton";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";
import { SITE } from "@/lib/config";

const whyChooseUs = [
  {
    title: "Handcrafted in Belfast",
    description:
      "Every product is lovingly made by a local Belfast business, supporting your community with every purchase.",
  },
  {
    title: "Premium Quality",
    description:
      "Luxury-grade fragrances and ingredients that fill your home with long-lasting, beautiful scent.",
  },
  {
    title: "Affordable Luxury",
    description:
      "High-end home fragrance at prices that make everyday indulgence accessible to everyone.",
  },
  {
    title: "20 Signature Scents",
    description:
      "From fresh cotton to exotic orchids — discover a curated collection of scents for every mood.",
  },
];

export default function HomePage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden luxury-gradient">
        <div className="hero-shimmer pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.03),transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <Image
              src="/images/logo.png"
              alt="The Scent Bar Belfast"
              width={280}
              height={280}
              className="mx-auto h-auto w-48 object-contain md:w-64 lg:w-72"
              priority
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 text-xs uppercase tracking-[0.4em] text-gold"
          >
            {SITE.tagline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-3xl leading-tight text-cream md:text-5xl lg:text-6xl"
          >
            Luxury Home Fragrance Products Designed To Elevate Your Space.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
          >
            Discover handcrafted wax melts, room sprays, and reed diffusers from
            Belfast&apos;s finest home fragrance brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <GoldButton href="/products">Shop Products</GoldButton>
            <GoldButton href="/order" variant="outline">
              Order Now
            </GoldButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gold/50">
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="block h-8 w-px bg-gradient-to-b from-gold/50 to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mb-16 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">
              Our Collection
            </p>
            <h2 className="font-serif text-3xl text-cream md:text-4xl">
              Featured Products
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold/50" />
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => (
              <ProductCard key={product.id} {...product} index={i} />
            ))}
          </div>

          <FadeIn className="mt-12 text-center">
            <Link
              href="/products"
              className="text-xs uppercase tracking-[0.2em] text-gold-light transition-colors hover:text-gold"
            >
              View All Products & Scents →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Price List Feature */}
      <section className="border-y border-gold/10 bg-black/50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">
                Our Price List
              </p>
              <h2 className="mb-6 font-serif text-3xl text-cream md:text-4xl">
                Luxury Scents, Honest Prices
              </h2>
              <p className="mb-8 max-w-md text-sm leading-relaxed text-muted">
                Premium home fragrance shouldn&apos;t break the bank. From £3 wax
                melts to £15 reed diffusers — every product is crafted with care
                and priced for everyday luxury.
              </p>
              <GoldButton href="/order">Place Your Order</GoldButton>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="gold-border overflow-hidden rounded-lg p-2 gold-glow">
                <Image
                  src="/images/price-list.png"
                  alt="The Scent Bar Belfast Price List"
                  width={800}
                  height={1000}
                  className="w-full rounded-md object-contain"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mb-16 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl text-cream md:text-4xl">
              The Scent Bar Difference
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold/50" />
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="gold-border h-full rounded-lg p-6 transition-all duration-300 hover:border-gold/50 hover:bg-gold/5">
                  <h3 className="mb-3 font-serif text-lg text-gold-light">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 luxury-gradient opacity-50" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl text-cream md:text-4xl">
              Ready To Transform Your Space?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Order your favourite scents today via WhatsApp. Fast, simple, and
              personal — just the way a local business should be.
            </p>
            <div className="mt-8">
              <GoldButton href="/order">Order Now via WhatsApp</GoldButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
