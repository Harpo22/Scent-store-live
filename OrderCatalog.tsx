import Image from "next/image";
import { products, scents } from "@/lib/data";

type OrderCatalogProps = {
  showProducts?: boolean;
  showScents?: boolean;
};

export default function OrderCatalog({
  showProducts = true,
  showScents = true,
}: OrderCatalogProps) {
  if (showProducts && !showScents) {
    return (
      <div className="premium-card gold-glow overflow-hidden" aria-label="Products reference">
        <div className="border-b border-gold/10 px-6 py-4 md:px-8">
          <p className="eyebrow text-gold-light">Products</p>
        </div>
        <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4 sm:gap-4 md:p-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center rounded-sm border border-gold/10 bg-charcoal-light/30 p-3 text-center transition-colors duration-300 hover:border-gold/25 md:p-4"
            >
              <div className="mb-3 flex h-14 w-full items-center justify-center md:mb-4 md:h-16">
                <Image
                  src={product.image}
                  alt=""
                  width={56}
                  height={56}
                  className="h-12 w-auto object-contain md:h-14"
                  aria-hidden
                />
              </div>
              <h3 className="text-[0.625rem] font-medium uppercase leading-snug tracking-[0.12em] text-gold-light sm:text-[0.6875rem] md:tracking-[0.14em]">
                {product.name}
              </h3>
              <p className="mt-1.5 font-serif text-xs text-cream md:mt-2 md:text-sm">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <aside
      className="premium-card gold-glow flex h-full flex-col overflow-hidden"
      aria-label="Scents reference"
    >
      <div className="border-b border-gold/10 px-6 py-5 md:px-8 md:py-6">
        <p className="eyebrow mb-2 text-gold-light">Reference Guide</p>
        <h2 className="font-serif text-xl text-cream md:text-2xl">Available Scents</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          All products available in these fragrances.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 md:px-8 md:py-7">
        {showProducts && (
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center rounded-sm border border-gold/10 bg-charcoal-light/30 p-3 text-center md:p-4"
              >
                <div className="mb-3 flex h-12 w-full items-center justify-center md:h-14">
                  <Image
                    src={product.image}
                    alt=""
                    width={48}
                    height={48}
                    className="h-10 w-auto object-contain md:h-12"
                    aria-hidden
                  />
                </div>
                <h3 className="text-[0.625rem] font-medium uppercase leading-snug tracking-[0.12em] text-gold-light">
                  {product.name}
                </h3>
                <p className="mt-1 font-serif text-xs text-cream">{product.price}</p>
              </div>
            ))}
          </div>
        )}

        {showScents && (
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {scents.map((scent) => (
              <li
                key={scent}
                className="rounded-sm border border-gold/10 bg-charcoal-light/40 px-3 py-2 text-sm text-cream/85"
              >
                {scent}
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
