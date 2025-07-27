"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-datasaz-green to-blue-950 text-white border-none relative overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
        glassy: "bg-white/20 dark:bg-gray-900/30 backdrop-blur-md border border-gray-200 dark:border-gray-800 hover:bg-white/30 dark:hover:bg-gray-900/40 text-gray-800 dark:text-gray-200",
        glow: "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-glow hover:shadow-blue-glow",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
      animation: {
        none: "",
        bounce: "transform hover:-translate-y-1 active:translate-y-0 transition-transform",
        scale: "transform hover:scale-105 active:scale-95 transition-transform",
        shine: "btn-shine",
        pulse: "animate-pulse",
        float: "animate-float",
      },
      roundedness: {
        default: "rounded-md",
        full: "rounded-full",
        lg: "rounded-lg",
        xl: "rounded-xl",
        none: "rounded-none",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
      roundedness: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    animation,
    roundedness,
    asChild = false,
    isLoading = false,
    children,
    ...props 
  }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, animation, roundedness, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </div>
        ) : (
          children
        )}
        
        {variant === "gradient" && (
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-lg">
            <div className="absolute left-[--x] top-[--y] h-32 w-32 -translate-x-1/2 -translate-y-1/2 bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-active:transition-none"></div>
          </div>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants }; 