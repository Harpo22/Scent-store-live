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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group gold-border relative overflow-hidden rounded-lg bg-black/40 p-6 transition-all duration-500 hover:border-gold/50 hover:bg-black/60 gold-glow-hover"
    >
      <div className="relative mx-auto mb-6 flex h-40 w-full items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={160}
          height={160}
          className="h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="mb-2 font-serif text-lg uppercase tracking-wide text-cream">
        {name}
      </h3>
      <p className="mb-3 font-serif text-gold-light">{price}</p>
      <p className="mb-6 text-sm leading-relaxed text-muted">{description}</p>
      <Link
        href="/order"
        className="inline-block text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light"
      >
        Order Now →
      </Link>
    </motion.article>
  );
}
