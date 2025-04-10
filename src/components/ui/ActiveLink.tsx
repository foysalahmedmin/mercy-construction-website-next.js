"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, ReactNode } from "react";

interface ActiveLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  activeClassName?: string;
  [key: string]: any;
}

const trimPath = (path = ""): string => {
  try {
    const url = new URL(path, "http://a");
    const trimmed = url.pathname.replace(/^\/|\/$/g, "");
    return trimmed;
  } catch {
    return "";
  }
};

const checkActivePath = ({
  currentPath,
  path,
}: {
  currentPath: string;
  path: string;
}): boolean => {
  if (!currentPath || !path) {
    return false;
  } else {
    return (
      trimPath(currentPath) === trimPath(path) ||
      currentPath?.startsWith(trimPath(path) + "/")
    );
  }
};

const ActiveLink = forwardRef<HTMLAnchorElement, ActiveLinkProps>(
  ({ children, href, className, activeClassName, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = checkActivePath({ currentPath: pathname, path: href });

    return (
      <Link
        href={href || ""}
        className={cn(className, {
          [cn("text-primary", activeClassName)]: isActive,
        })}
        {...props}
        ref={ref}
      >
        {children}
      </Link>
    );
  },
);

ActiveLink.displayName = "ActiveLink";

export { ActiveLink };
