"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

type GoldButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function GoldButton({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: GoldButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-8 py-3.5 text-sm font-medium uppercase tracking-[0.2em] transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black gold-glow gold-glow-hover hover:scale-[1.02]"
      : "gold-border bg-transparent text-gold-light hover:bg-gold/10 gold-glow-hover";

  const content = (
    <motion.span
      className={`${base} ${styles} ${className} ${disabled ? "pointer-events-none opacity-50" : ""}`}
      whileTap={disabled ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="inline-block">
      {content}
    </button>
  );
}
