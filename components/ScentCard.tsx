"use client";

import { motion } from "framer-motion";

type ScentCardProps = {
  name: string;
  index?: number;
};

export default function ScentCard({ name, index = 0 }: ScentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group premium-card px-4 py-4 text-center md:px-5 md:py-5 gold-glow-hover"
    >
      <span className="text-sm text-gold-light/90 transition-colors duration-300 group-hover:text-gold md:text-[0.9375rem]">
        {name}
      </span>
    </motion.div>
  );
}
