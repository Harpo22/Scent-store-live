import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { reviews } from "@/lib/data";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold text-sm" aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="section-padding luxury-gradient-subtle" aria-labelledby="reviews-heading">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved Across Northern Ireland"
          description="Real feedback from customers who've transformed their homes with our scents."
        />
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {reviews.map((review, i) => (
            <FadeIn key={review.name} delay={i * 0.1}>
              <article className="premium-card gold-glow-hover flex h-full flex-col p-8 md:p-10">
                <Stars count={review.rating} />
                <blockquote className="mt-6 flex-1 text-sm leading-relaxed text-cream/90 md:text-[0.9375rem] md:leading-7">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <footer className="mt-8 border-t border-gold/10 pt-6">
                  <cite className="not-italic">
                    <span className="block font-serif text-base text-gold-light">{review.name}</span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-muted">
                      {review.location}
                    </span>
                  </cite>
                </footer>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
