import FadeIn from "./FadeIn";
import { orderSteps } from "@/lib/data";

type OrderStepsProps = {
  compact?: boolean;
};

export default function OrderSteps({ compact = false }: OrderStepsProps) {
  return (
    <div
      className={`grid gap-6 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4"} md:gap-8`}
      aria-label="How to order"
    >
      {orderSteps.map((item, i) => (
        <FadeIn key={item.step} delay={i * 0.08}>
          <div className={`${compact ? "premium-card p-6" : "premium-card p-8 md:p-10"} h-full`}>
            <span className="eyebrow text-gold/70">{item.step}</span>
            <h3 className="mt-4 font-serif text-lg text-cream md:text-xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-[0.9375rem]">
              {item.description}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
