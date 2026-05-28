"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "none";
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
}: FadeInProps) {
  const initial =
    direction === "up"
      ? { opacity: 0, y: 24 }
      : direction === "down"
        ? { opacity: 0, y: -24 }
        : { opacity: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
