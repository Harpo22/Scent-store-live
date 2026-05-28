"use client";

import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import FadeIn from "@/components/FadeIn";
import GoldButton from "@/components/GoldButton";
import { SITE } from "@/lib/config";

const values = [
  {
    title: "Local & Proud",
    text: "Born and based in Belfast, we are a home-grown business passionate about bringing luxury fragrance to our community.",
  },
  {
    title: "Handcrafted Quality",
    text: "Every wax melt, spray, and diffuser is made with care using premium fragrance oils and quality ingredients.",
  },
  {
    title: "Accessible Luxury",
    text: "We believe everyone deserves a beautifully scented home. Our products deliver a premium experience at honest prices.",
  },
];

export default function AboutContent() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 luxury-gradient">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">
                Our Story
              </p>
              <h1 className="font-serif text-4xl leading-tight text-cream md:text-5xl">
                A Belfast Brand Built on Beautiful Scent
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted">
                {SITE.name} was created with a simple mission: to bring the
                feeling of a luxury fragrance boutique into every home in Belfast
                — without the luxury price tag.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex justify-center">
                <Image
                  src="/images/logo.png"
                  alt="The Scent Bar Belfast Logo"
                  width={400}
                  height={400}
                  className="h-auto w-full max-w-sm object-contain"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">
              Our Mission
            </p>
            <h2 className="font-serif text-3xl text-cream md:text-4xl">
              Elevating Everyday Spaces
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold/50" />
            <p className="mt-8 text-base leading-relaxed text-muted">
              We craft premium home fragrance products that transform ordinary
              rooms into sensory experiences. From the first melt of a snap bar
              to the gentle diffusion of a reed diffuser, every product is
              designed to make your home feel special.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              With 20 signature scents ranging from fresh and clean to warm and
              exotic, there is something for every taste and every room.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-gold/10 bg-black/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">
              What We Stand For
            </p>
            <h2 className="font-serif text-3xl text-cream">Our Values</h2>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="gold-border h-full rounded-lg p-8 text-center transition-all duration-300 hover:border-gold/50 hover:bg-gold/5">
                  <h3 className="mb-4 font-serif text-xl text-gold-light">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {value.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Product showcase */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">
              Crafted With Care
            </p>
            <h2 className="font-serif text-3xl text-cream">
              Our Product Range
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { src: "/images/snap-bar-wax-melts.png", label: "Wax Melts" },
              { src: "/images/room-sprays.png", label: "Room Sprays" },
              { src: "/images/reed-diffusers.png", label: "Reed Diffusers" },
              {
                src: "/images/reed-diffuser-refills.png",
                label: "Refills",
              },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <div className="gold-border group rounded-lg p-6 text-center transition-all duration-300 hover:border-gold/50 gold-glow-hover">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={120}
                    height={120}
                    className="mx-auto mb-4 h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <p className="text-xs uppercase tracking-[0.15em] text-gold-light">
                    {item.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Price list */}
      <section className="border-t border-gold/10 bg-black/50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="mb-8 font-serif text-3xl text-cream">
              Luxury Without Compromise
            </h2>
            <div className="gold-border mx-auto max-w-md overflow-hidden rounded-lg p-2 gold-glow">
              <Image
                src="/images/price-list.png"
                alt="Price List"
                width={600}
                height={750}
                className="w-full rounded-md object-contain"
              />
            </div>
            <div className="mt-10">
              <GoldButton href="/order">Start Your Order</GoldButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
