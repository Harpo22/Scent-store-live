"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import FadeIn from "@/components/FadeIn";
import GoldButton from "@/components/GoldButton";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import PriceGuide from "@/components/PriceGuide";
import TrustBar from "@/components/TrustBar";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import OrderSteps from "@/components/OrderSteps";
import { products } from "@/lib/data";
import { SITE } from "@/lib/config";

export default function HomePage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden luxury-gradient">
        <div className="hero-shimmer pointer-events-none absolute inset-0" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.04),transparent_65%)]"
          aria-hidden
        />

        <div className="container-luxury relative z-10 py-36 text-center md:py-40 lg:py-44">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 md:mb-14"
          >
            <Image
              src="/images/logo.png"
              alt="The Scent Bar Belfast — luxury home fragrance brand logo"
              width={300}
              height={300}
              className="mx-auto h-auto w-44 object-contain md:w-56 lg:w-64"
              priority
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="eyebrow mb-6"
          >
            {SITE.tagline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="heading-display mx-auto max-w-4xl text-4xl md:text-5xl lg:text-6xl xl:text-[3.75rem]"
          >
            Luxury Home Fragrance Designed To Transform Your Space.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="body-lg mx-auto mt-8 max-w-2xl md:mt-10"
          >
            Handcrafted wax melts, room sprays, and reed diffusers from a premium
            Belfast fragrance brand — 20 signature scents, delivered across Northern
            Ireland.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center md:mt-14"
          >
            <GoldButton href="/products" size="large">
              Shop Products
            </GoldButton>
            <GoldButton href="/order" variant="outline" size="large">
              Order Now
            </GoldButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-3 text-gold/40">
            <span className="text-[10px] uppercase tracking-[0.35em]">Discover</span>
            <span className="block h-10 w-px bg-gradient-to-b from-gold/40 to-transparent" />
          </div>
        </motion.div>
      </section>

      <TrustBar />

      {/* Featured Products */}
      <section className="section-padding" aria-labelledby="featured-heading">
        <div className="container-luxury">
          <div id="featured-heading">
            <SectionHeading
            eyebrow="The Collection"
            title="Featured Products"
            description="Premium home fragrance, professionally presented and available in 20 luxury scents."
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {products.map((product, i) => (
              <ProductCard key={product.id} {...product} index={i} />
            ))}
          </div>

          <FadeIn className="mt-16 text-center md:mt-20">
            <Link
              href="/products"
              className="text-xs uppercase tracking-[0.22em] text-gold transition-colors duration-300 hover:text-gold-light"
            >
              View All Products & Scents →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Price List */}
      <section className="section-padding luxury-gradient-subtle border-y border-gold/10">
        <div className="container-luxury">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <p className="eyebrow mb-4">Pricing</p>
              <h2 className="heading-section text-3xl md:text-4xl lg:text-[2.75rem]">
                Luxury Scents, Honest Prices
              </h2>
              <div className="divider-gold mx-0 mt-6" />
              <p className="body-lg mt-8 max-w-md">
                Premium home fragrance shouldn&apos;t feel out of reach. From £3 wax
                melts to £15 reed diffusers — every product is crafted with care and
                priced for everyday luxury in Belfast and beyond.
              </p>
              <div className="mt-10">
                <GoldButton href="/order">Place Your Order</GoldButton>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <PriceGuide />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="section-padding" aria-labelledby="how-to-order">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Simple Process"
            title="How To Order"
            description="Four easy steps from browsing to delivery — all through WhatsApp."
          />
          <OrderSteps />
        </div>
      </section>

      <ReviewsSection />
      <FAQSection />

      {/* CTA */}
      <section className="relative overflow-hidden section-padding">
        <div className="absolute inset-0 luxury-gradient opacity-60" aria-hidden />
        <div className="container-luxury relative max-w-3xl text-center">
          <FadeIn>
            <p className="eyebrow mb-4">Begin Your Order</p>
            <h2 className="heading-section text-3xl md:text-4xl lg:text-[2.75rem]">
              Ready To Transform Your Space?
            </h2>
            <p className="body-lg mx-auto mt-8 max-w-lg">
              Order your favourite scents today via WhatsApp. Fast, personal, and
              proudly local to Belfast.
            </p>
            <div className="mt-12">
              <GoldButton href="/order" size="large">
                Order Now via WhatsApp
              </GoldButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
