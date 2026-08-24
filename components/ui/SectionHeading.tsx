"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  badge,
  badgeIcon,
  title,
  titleHighlight,
  description,
  align = "center",
  className,
  dark = false,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-12 sm:mb-16",
        alignmentClasses[align],
        className
      )}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className={cn(
            "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-3.5 border shadow-sm",
            dark
              ? "bg-blue-900/60 text-blue-300 border-blue-700/50 backdrop-blur-md"
              : "bg-blue-50 text-blue-700 border-blue-200/80"
          )}
        >
          {badgeIcon && <span className="text-blue-600 dark:text-blue-400">{badgeIcon}</span>}
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight",
          dark ? "text-white" : "text-slate-900"
        )}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="gradient-text-blue bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600">
            {titleHighlight}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed text-balance",
            dark ? "text-blue-100/80" : "text-slate-600"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
