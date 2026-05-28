"use client";

import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import ScentCard from "@/components/ScentCard";
import GoldButton from "@/components/GoldButton";
import FadeIn from "@/components/FadeIn";
import PriceGuide from "@/components/PriceGuide";
import { products, scents } from "@/lib/data";

export default function ProductsContent() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden pt-36 pb-20 luxury-gradient md:pt-40 md:pb-24">
        <div className="container-luxury text-center">
          <FadeIn>
            <p className="eyebrow mb-4">The Collection</p>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl">Products</h1>
            <p className="body-lg mx-auto mt-8 max-w-2xl">
              Handcrafted home fragrance from Belfast — premium wax melts, room
              sprays, reed diffusers and refills in 20 signature scents.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding pt-0" aria-labelledby="product-grid">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Shop"
            title="Our Product Range"
            description="Every product is available across our full scent collection. Mention your choices when ordering."
            className="mb-14 md:mb-16"
          />
          <div id="product-grid" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {products.map((product, i) => (
              <ProductCard key={product.id} {...product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding luxury-gradient-subtle border-y border-gold/10">
        <div className="container-luxury max-w-4xl">
          <FadeIn className="mb-12 text-center md:mb-14">
            <p className="eyebrow mb-4">Official Pricing</p>
            <h2 className="heading-section text-3xl md:text-4xl">Full Price Guide</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <PriceGuide />
          </FadeIn>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="scents-collection">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="20 Signature Scents"
            title="Available Fragrances"
            description="From fresh and clean to warm and exotic — choose your perfect scent when placing your order."
          />
          <div
            id="scents-collection"
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5"
          >
            {scents.map((scent, i) => (
              <ScentCard key={scent} name={scent} index={i} />
            ))}
          </div>
          <FadeIn className="mt-16 text-center md:mt-20">
            <GoldButton href="/order" size="large">
              Order Your Scents
            </GoldButton>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
