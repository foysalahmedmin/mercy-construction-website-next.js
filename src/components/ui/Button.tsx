"use client";

import useRippleEffect from "@/hooks/ui/useRippleEffect";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, RefObject, useImperativeHandle, useRef } from "react";

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface ButtonProps extends ButtonVariants {
  className?: string;
  loadingClassName?: string;
  loading?: "center" | "left" | "right";
  as?: "button" | "a" | "span";
  asChild?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  animation?: boolean;
  [key: string]: any;
}

const buttonVariants = cva(
  "button animate-pop relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-none border border-transparent text-base leading-tight whitespace-nowrap transition-all duration-300 ease-in-out active:scale-95 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "primary bg-accent text-accent-foreground hover:bg-foreground hover:text-background",
        gradient:
          "bg-gradient-to-r from-primary to-secondary text-white border-transparent",
        outline:
          "border hover:border-accent hover:text-accent hover:bg-transparent bg-accent text-accent-foreground",
        ghost:
          "bg-transparent text-accent hover:bg-accent/10 hover:text-accent-foreground",
        link: "text-blue-500 hover:text-blue-700 underline",
        none: "",
      },
      size: {
        default: "h-10 px-4 text-sm",
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        none: "",
      },
      shape: {
        default: "rounded-md",
        icon: "rounded-md aspect-square px-0",
        none: "",
      },
      loading: {
        center: "loading-center",
        left: "loading-left",
        right: "loading-right",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
      loading: "center",
    },
  },
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      loadingClassName,
      variant,
      size,
      shape,
      loading,
      as = "button",
      asChild = false,
      disabled = false,
      isLoading = false,
      animation = false,
      ...props
    },
    ref,
  ) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement);
    useRippleEffect(buttonRef as RefObject<HTMLElement>, !animation);

    const Comp = asChild ? "span" : as;
    return (
      <Comp
        data-as={as || null}
        disabled={disabled || isLoading}
        className={cn(
          buttonVariants({
            variant,
            size,
            shape,
            loading,
            className,
          }),
          {
            [cn("loading", loadingClassName)]: isLoading,
          },
        )}
        ref={buttonRef}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
