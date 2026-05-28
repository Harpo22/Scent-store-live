"use client";

import PageTransition from "@/components/PageTransition";
import FadeIn from "@/components/FadeIn";
import OrderForm from "@/components/OrderForm";

export default function OrderContent() {
  return (
    <PageTransition>
      <section className="relative min-h-screen overflow-hidden pt-32 pb-24 luxury-gradient">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">
              Place Your Order
            </p>
            <h1 className="font-serif text-4xl text-cream md:text-5xl">
              Order Now
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Fill in your details below and send your order directly via
              WhatsApp. We&apos;ll confirm your order and arrange delivery.
            </p>
            <div className="mx-auto mt-4 h-px w-16 bg-gold/50" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="gold-border rounded-xl bg-black/40 p-8 md:p-10 gold-glow">
              <OrderForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
