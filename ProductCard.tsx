"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProductCardProps = {
  name: string;
  price: string;
  image: string;
  description: string;
  index?: number;
};

export default function ProductCard({
  name,
  price,
  image,
  description,
  index = 0,
}: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group premium-card gold-glow-hover flex h-full flex-col overflow-hidden"
    >
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-charcoal/50 p-8 md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,98,0.06),transparent_70%)]" />
        <Image
          src={image}
          alt={`${name} — The Scent Bar Belfast home fragrance product`}
          width={180}
          height={180}
          className="relative z-10 h-28 w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 md:h-32"
        />
      </div>

      <div className="flex flex-1 flex-col p-7 md:p-8">
        <h3 className="font-serif text-xl text-cream md:text-[1.375rem]">{name}</h3>
        <p className="mt-2 font-serif text-lg text-gold-light">{price}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted md:text-[0.9375rem] md:leading-7">
          {description}
        </p>
        <Link
          href="/order"
          className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold transition-colors duration-300 hover:text-gold-light"
        >
          Order Now
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </motion.article>
  );
}
