"use client";

import PageTransition from "@/components/PageTransition";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import OrderForm from "@/components/OrderForm";
import OrderSteps from "@/components/OrderSteps";
import FAQSection from "@/components/FAQSection";
import { SITE } from "@/lib/config";

export default function OrderContent() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden pt-36 pb-16 luxury-gradient md:pt-40 md:pb-20">
        <div className="container-luxury text-center">
          <FadeIn>
            <p className="eyebrow mb-4">Place Your Order</p>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl">Order Now</h1>
            <p className="body-lg mx-auto mt-8 max-w-xl">
              Choose your products and scents from the dropdowns, add them to your
              order, and send everything directly via WhatsApp. We&apos;ll confirm
              and arrange collection or delivery across {SITE.region}.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding pt-0" aria-labelledby="order-form">
        <div className="container-luxury max-w-3xl">
          <FadeIn>
            <div className="premium-card gold-glow p-8 md:p-12 lg:p-14">
              <h2 id="order-form" className="sr-only">
                Order form
              </h2>
              <OrderForm />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding luxury-gradient-subtle border-y border-gold/10">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="How It Works"
            title="Your Order Journey"
            description="Select your items, send via WhatsApp, and we'll take care of the rest."
          />
          <OrderSteps compact />
        </div>
      </section>

      <FAQSection />
    </PageTransition>
  );
}
