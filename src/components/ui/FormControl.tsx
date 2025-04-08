import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";

const formControlVariants = cva(
  "inline-flex items-center justify-between gap-2 rounded-lg transition-colors disabled:cursor-not-allowed disabled:opacity-50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-card text-foreground",
        gradient: "bg-gradient-to-r from-primary to-secondary text-white",
        outline: "border border-input bg-transparent text-foreground",
        ghost: "bg-transparent shadow-none text-foreground",
        link: "bg-transparent underline-offset-4 hover:underline text-primary p-0 h-auto",
        none: "",
      },
      size: {
        default: "h-10 px-4 text-sm",
        sm: "h-8 px-3 text-sm",
        md: "h-12 px-5 text-base",
        lg: "h-14 px-6 text-lg",
        none: "",
      },
      loading: {
        center: "justify-center",
        left: "justify-start",
        right: "justify-end",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type FormControlProps = ComponentPropsWithoutRef<"input"> &
  VariantProps<typeof formControlVariants> & {
    as?: React.ElementType;
    asChild?: boolean;
    isLoading?: boolean;
    loadingClassName?: string;
  };

const FormControl = forwardRef<ComponentRef<"input">, FormControlProps>(
  (
    {
      className,
      loadingClassName,
      variant,
      size,
      loading,
      as = "input",
      asChild = false,
      disabled = false,
      isLoading = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? "span" : as;

    return (
      <Comp
        data-as={as || null}
        disabled={disabled || isLoading}
        className={cn(
          formControlVariants({ variant, size, loading }),
          className,
          isLoading && cn("loading", loadingClassName),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

FormControl.displayName = "FormControl";

export { FormControl, formControlVariants };
