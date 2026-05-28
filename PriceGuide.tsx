import Image from "next/image";
import { products, scents } from "@/lib/data";
import { SITE } from "@/lib/config";

type PriceGuideProps = {
  showScents?: boolean;
  showHeader?: boolean;
  className?: string;
};

export default function PriceGuide({
  showScents = true,
  showHeader = true,
  className = "",
}: PriceGuideProps) {
  return (
    <div
      className={`premium-card gold-glow overflow-hidden ${className}`}
      aria-label="Price list"
    >
      {showHeader && (
        <div className="border-b border-gold/10 px-6 py-8 text-center md:px-10 md:py-10">
          <p className="eyebrow mb-3">The Scent Bar</p>
          <h3 className="font-serif text-2xl tracking-wide text-cream md:text-3xl">
            Price List
          </h3>
          <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted">
            {SITE.location}
          </p>
        </div>
      )}

      <div
        className={`grid gap-0 ${showScents ? "md:grid-cols-2" : ""}`}
      >
        {/* Prices */}
        <div className={`px-6 py-8 md:px-10 md:py-10 ${showScents ? "md:border-r md:border-gold/10" : ""}`}>
          <h4 className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-gold-light">
            Prices
          </h4>
          <ul className="space-y-5">
            {products.map((product) => (
              <li key={product.id} className="flex items-start gap-4">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70"
                  aria-hidden
                />
                <div className="flex min-w-0 flex-1 items-start justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-charcoal-light/60">
                      <Image
                        src={product.image}
                        alt=""
                        width={32}
                        height={32}
                        className="h-7 w-auto object-contain"
                        aria-hidden
                      />
                    </div>
                    <span className="pt-1.5 text-sm leading-snug text-cream md:text-[0.9375rem]">
                      {product.name}
                    </span>
                  </div>
                  <span className="shrink-0 pt-1.5 font-serif text-sm text-gold-light md:text-base">
                    {product.price}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Scents */}
        {showScents && (
          <div className="border-t border-gold/10 px-6 py-8 md:border-t-0 md:px-10 md:py-10">
            <h4 className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-gold-light">
              Scents
            </h4>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {scents.map((scent) => (
                <li key={scent} className="flex items-center gap-3">
                  <span
                    className="h-1 w-1 shrink-0 rounded-full bg-gold/50"
                    aria-hidden
                  />
                  <span className="text-sm text-cream/85 md:text-[0.9375rem]">{scent}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="border-t border-gold/10 px-6 py-5 text-center md:px-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          Thank you for supporting a local business
        </p>
      </div>
    </div>
  );
}
