"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
  variant?: "default" | "glass" | "bordered" | "gradient";
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      hoverEffect = true,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default:
        "bg-white border border-slate-200/80 shadow-soft",
      glass:
        "glass-card shadow-soft",
      bordered:
        "bg-white/90 border-2 border-blue-100/80 shadow-sm",
      gradient:
        "bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white border border-blue-800/40 shadow-xl",
    };

    return (
      <motion.div
        ref={ref}
        whileHover={
          hoverEffect
            ? { y: -6, transition: { duration: 0.25, ease: "easeOut" } }
            : undefined
        }
        className={cn(
          "rounded-2xl p-6 transition-all duration-300 relative overflow-hidden",
          variantStyles[variant],
          hoverEffect && "hover:shadow-soft-xl hover:border-blue-300/80",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
