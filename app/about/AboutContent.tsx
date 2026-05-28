"use client";

import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import GoldButton from "@/components/GoldButton";
import PriceGuide from "@/components/PriceGuide";
import TrustBar from "@/components/TrustBar";
import { SITE } from "@/lib/config";

const values = [
  {
    title: "Local & Proud",
    text: "Born and based in Belfast, we are a home-grown Northern Ireland business passionate about bringing luxury fragrance to our community.",
  },
  {
    title: "Handcrafted Quality",
    text: "Every wax melt, spray, and diffuser is made with care using premium fragrance oils and quality ingredients.",
  },
  {
    title: "Accessible Luxury",
    text: "We believe everyone deserves a beautifully scented home. Premium experience, honest prices — no compromise on quality.",
  },
];

export default function AboutContent() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden pt-36 pb-20 luxury-gradient md:pt-40 md:pb-28">
        <div className="container-luxury">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <p className="eyebrow mb-4">Our Story</p>
              <h1 className="heading-display text-4xl md:text-5xl lg:text-[3.25rem]">
                A Belfast Brand Built on Beautiful Scent
              </h1>
              <p className="body-lg mt-8">
                {SITE.name} was created with a simple mission: to bring the feeling
                of a luxury fragrance boutique into every home in Belfast and across
                Northern Ireland — without the luxury price tag.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="flex justify-center lg:justify-end">
                <div className="premium-card p-8 gold-glow md:p-12">
                  <Image
                    src="/images/logo.png"
                    alt="The Scent Bar Belfast — local luxury home fragrance brand Northern Ireland"
                    width={400}
                    height={400}
                    className="h-auto w-full max-w-xs object-contain md:max-w-sm"
                    priority
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="section-padding">
        <div className="container-luxury max-w-3xl text-center">
          <FadeIn>
            <p className="eyebrow mb-4">Our Mission</p>
            <h2 className="heading-section text-3xl md:text-4xl lg:text-[2.75rem]">
              Elevating Everyday Spaces
            </h2>
            <div className="divider-gold mt-6" />
            <p className="body-lg mt-8">
              We craft premium home fragrance products that transform ordinary rooms
              into sensory experiences. From the first melt of a snap bar to the
              gentle diffusion of a reed diffuser, every product is designed to make
              your home feel special.
            </p>
            <p className="body-lg mt-6">
              With 20 signature scents ranging from fresh and clean to warm and
              exotic, there is something for every taste and every room across
              Belfast and Northern Ireland.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding luxury-gradient-subtle border-y border-gold/10">
        <div className="container-luxury">
          <SectionHeading eyebrow="What We Stand For" title="Our Values" />
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <article className="premium-card gold-glow-hover h-full p-8 text-center md:p-10">
                  <h3 className="font-serif text-xl text-gold-light md:text-2xl">{value.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-muted md:text-[0.9375rem] md:leading-7">
                    {value.text}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading eyebrow="Crafted With Care" title="Our Product Range" />
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {[
              { src: "/images/snap-bar-wax-melts.png", label: "Wax Melts" },
              { src: "/images/room-sprays.png", label: "Room Sprays" },
              { src: "/images/reed-diffusers.png", label: "Reed Diffusers" },
              { src: "/images/reed-diffuser-refills.png", label: "Refills" },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.08}>
                <div className="premium-card group gold-glow-hover p-8 text-center md:p-10">
                  <div className="flex aspect-square items-center justify-center">
                    <Image
                      src={item.src}
                      alt={`${item.label} — The Scent Bar Belfast`}
                      width={140}
                      height={140}
                      className="h-24 w-auto object-contain transition-transform duration-700 group-hover:scale-105 md:h-28"
                    />
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-[0.2em] text-gold-light">
                    {item.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding luxury-gradient-subtle border-t border-gold/10">
        <div className="container-luxury max-w-4xl">
          <FadeIn className="mb-12 text-center md:mb-14">
            <h2 className="heading-section text-3xl md:text-4xl">
              Luxury Without Compromise
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <PriceGuide />
          </FadeIn>
          <FadeIn className="mt-12 text-center">
            <GoldButton href="/order" size="large">
              Start Your Order
            </GoldButton>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
