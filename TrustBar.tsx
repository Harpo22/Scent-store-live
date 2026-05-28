import FadeIn from "./FadeIn";
import { trustSignals } from "@/lib/data";

export default function TrustBar() {
  return (
    <section className="border-y border-gold/10 bg-charcoal/80" aria-label="Why choose us">
      <div className="container-luxury section-padding-sm">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {trustSignals.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="text-center lg:text-left">
                <div className="mx-auto mb-4 h-px w-8 bg-gold/60 lg:mx-0" aria-hidden />
                <h3 className="mb-3 font-serif text-lg text-cream md:text-xl">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted md:text-[0.9375rem]">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
