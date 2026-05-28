"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { faqs } from "@/lib/data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding" aria-labelledby="faq-title">
      <div className="container-luxury max-w-3xl">
        <div id="faq-title">
          <SectionHeading
          eyebrow="Questions"
          title="Frequently Asked"
          description="Everything you need to know about ordering luxury home fragrance from Belfast."
          />
        </div>
        <div className="space-y-3" role="list">
          {faqs.map((faq, i) => (
            <FadeIn key={faq.question} delay={i * 0.05}>
              <div className="premium-card overflow-hidden" role="listitem">
                <button
                  type="button"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02] md:px-8 md:py-6"
                >
                  <span className="font-serif text-base text-cream md:text-lg">{faq.question}</span>
                  <span
                    className={`shrink-0 text-gold transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-gold/10 px-6 pb-6 pt-4 text-sm leading-relaxed text-muted md:px-8 md:pb-7 md:text-[0.9375rem]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
