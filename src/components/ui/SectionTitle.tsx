import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";

// ---------- SectionTitle ----------
const sectionTitleVariants = cva("group mb-8 md:mb-12 space-y-4 max-w-xl", {
  variants: {
    variant: {
      center:
        "center mx-auto pb-2 px-4 text-center after:border-b-2 after:border-primary after:mx-auto",
      left: "left text-left after:mr-auto",
      right: "right text-right after:ml-auto",
      none: "",
    },
  },
  defaultVariants: {
    variant: "left",
  },
});

type SectionTitleProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof sectionTitleVariants>;

const SectionTitle = forwardRef<ComponentRef<"div">, SectionTitleProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        className={cn(sectionTitleVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
SectionTitle.displayName = "SectionTitle";

// ---------- Title ----------
type TitleProps = ComponentPropsWithoutRef<"h1">;

const Title = forwardRef<ComponentRef<"h1">, TitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        className={cn("text-4xl md:text-6xl", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Title.displayName = "Title";

// ---------- Subtitle ----------
type SubtitleProps = ComponentPropsWithoutRef<"span">;

const Subtitle = forwardRef<ComponentRef<"span">, SubtitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        className={cn(
          "border-primary after:bg-primary relative inline-block py-1 capitalize after:absolute after:top-5/9 after:-right-2 after:bottom-0 after:inline-block after:h-[0.0625rem] after:w-12 after:translate-x-full after:content-['_']",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Subtitle.displayName = "Subtitle";

// ---------- Description ----------
type DescriptionProps = ComponentPropsWithoutRef<"p">;

const Description = forwardRef<ComponentRef<"div">, DescriptionProps>(
  ({ className, ...props }, ref) => {
    return <div className={cn("mt-4", className)} ref={ref} {...props} />;
  },
);
Description.displayName = "Description";

// ---------- Exports ----------
export { Description, SectionTitle, Subtitle, Title };
