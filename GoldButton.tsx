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
  size?: "default" | "large";
};

export default function GoldButton({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
  size = "default",
}: GoldButtonProps) {
  const sizeStyles =
    size === "large"
      ? "min-h-[3.25rem] px-10 py-4 text-sm"
      : "min-h-[3rem] px-8 py-3.5 text-xs md:text-sm";

  const base = `inline-flex items-center justify-center gap-2.5 rounded-sm font-medium uppercase tracking-[0.22em] transition-all duration-500 ${sizeStyles}`;

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black gold-glow gold-glow-hover hover:brightness-105"
      : "gold-border bg-transparent text-gold-light hover:bg-gold/[0.06] gold-glow-hover";

  const content = (
    <motion.span
      className={`${base} ${styles} ${className} ${disabled ? "pointer-events-none opacity-50" : ""}`}
      whileHover={disabled ? undefined : { y: -1 }}
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
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-block w-full sm:w-auto"
    >
      {content}
    </button>
  );
}
