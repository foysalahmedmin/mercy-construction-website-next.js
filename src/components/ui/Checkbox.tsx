"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import {
  ElementType,
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";

type SupportedElements = "input";

type CheckboxProps<T extends ElementType = SupportedElements> = {
  as?: T | React.ElementType;
  asChild?: boolean;
  isLoading?: boolean;
  loadingClassName?: string;
  type?: string;
} & ComponentPropsWithoutRef<T> &
  VariantProps<typeof checkboxVariants>;

const checkboxVariants = cva(
  "checkbox inline-block shrink-0 appearance-none animate-pop transition-all duration-300 ease-in-out cursor-pointer rounded w-[1em] h-[1em] text-[1.25rem] checked:animate-checkbox checked:border-accent disabled:opacity-50 disabled:animate-none disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "border border-current bg-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent",
        gradient: "",
        outline: "",
        ghost: "",
        link: "",
        none: "",
      },
      size: {
        default: "text-[1.5rem]",
        sm: "text-[1.25rem]",
        md: "text-[1.5rem]",
        lg: "text-[1.75rem]",
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
    },
  },
);

const Checkbox = forwardRef<
  ElementRef<SupportedElements>,
  CheckboxProps<SupportedElements>
>(
  (
    {
      className = "primary",
      loadingClassName,
      variant,
      size,
      loading,
      as = "input",
      asChild = false,
      disabled = false,
      isLoading = false,
      type = "checkbox",
      ...props
    },
    ref,
  ) => {
    const Comp = (asChild ? "span" : as || "input") as ElementType;

    return (
      <Comp
        data-as={as || null}
        disabled={disabled || isLoading}
        type={type}
        className={cn(
          checkboxVariants({
            variant,
            size,
            loading,
            className,
          }),
          {
            [cn("loading", loadingClassName)]: isLoading,
          },
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants };
