"use client";

import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import FadeIn from "@/components/FadeIn";
import ProductCard from "@/components/ProductCard";
import ScentCard from "@/components/ScentCard";
import GoldButton from "@/components/GoldButton";
import { products, scents } from "@/lib/data";

export default function ProductsContent() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="relative overflow-hidden pt-32 pb-16 luxury-gradient">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <FadeIn>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">
              Our Collection
            </p>
            <h1 className="font-serif text-4xl text-cream md:text-5xl">
              Products
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Handcrafted home fragrance products, made with premium ingredients
              and available in 20 signature scents.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => (
              <ProductCard key={product.id} {...product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Price List */}
      <section className="border-y border-gold/10 bg-black/50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <FadeIn>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">
              Official Price List
            </p>
            <h2 className="mb-8 font-serif text-3xl text-cream">
              Full Price Guide
            </h2>
            <div className="gold-border mx-auto max-w-2xl overflow-hidden rounded-lg p-2 gold-glow">
              <Image
                src="/images/price-list.png"
                alt="The Scent Bar Belfast Official Price List"
                width={800}
                height={1000}
                className="w-full rounded-md object-contain"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Scents */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">
              Signature Collection
            </p>
            <h2 className="font-serif text-3xl text-cream md:text-4xl">
              Available Scents
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted">
              Choose from 20 carefully curated fragrances. Mention your preferred
              scents when placing your order.
            </p>
            <div className="mx-auto mt-4 h-px w-16 bg-gold/50" />
          </FadeIn>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {scents.map((scent, i) => (
              <ScentCard key={scent} name={scent} index={i} />
            ))}
          </div>

          <FadeIn className="mt-16 text-center">
            <GoldButton href="/order">Order Your Scents</GoldButton>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
