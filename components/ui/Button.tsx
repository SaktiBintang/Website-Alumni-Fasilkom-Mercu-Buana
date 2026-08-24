"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white" | "gradient";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-3.5 py-1.5 text-xs font-medium rounded-lg gap-1.5",
      md: "px-5 py-2.5 text-sm font-semibold rounded-xl gap-2",
      lg: "px-7 py-3.5 text-base font-semibold rounded-2xl gap-2.5",
    };

    const variantClasses = {
      primary:
        "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 border border-blue-500/30",
      secondary:
        "bg-blue-50 hover:bg-blue-100 text-blue-800 hover:text-blue-900 border border-blue-200/80 shadow-sm",
      outline:
        "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent shadow-sm",
      ghost:
        "text-slate-700 hover:text-blue-700 hover:bg-blue-50/80 bg-transparent",
      white:
        "bg-white hover:bg-slate-50 text-blue-900 shadow-md shadow-slate-900/10 hover:shadow-xl font-semibold border border-slate-100",
      gradient:
        "bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 hover:from-blue-800 hover:via-blue-700 hover:to-sky-700 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 border border-white/20",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-heading transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
            <span>{children}</span>
            {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
