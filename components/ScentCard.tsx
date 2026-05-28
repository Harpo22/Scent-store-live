"use client";

import { motion } from "framer-motion";

type ScentCardProps = {
  name: string;
  index?: number;
};

export default function ScentCard({ name, index = 0 }: ScentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: (index % 10) * 0.04 }}
      whileHover={{ scale: 1.03 }}
      className="group gold-border rounded-md bg-black/30 px-4 py-3 text-center transition-all duration-300 hover:border-gold/50 hover:bg-gold/5 gold-glow-hover"
    >
      <span className="text-sm text-gold-light transition-colors group-hover:text-gold">
        {name}
      </span>
    </motion.div>
  );
}
