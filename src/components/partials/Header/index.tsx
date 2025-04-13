"use client";

import { ActiveLink } from "@/components/ui/ActiveLink";
import { Button } from "@/components/ui/Button";
import useScrollPosition from "@/hooks/ui/useScrollPosition";
import { useVisibleSection } from "@/hooks/utils/useVisibleSection";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/#home", name: "Home" },
  {
    href: "/#services",
    name: "Services",
  },
  { href: "/#features", name: "Features" },
  {
    href: "/#projects",
    name: "Projects",
  },
  {
    href: "/blogs",
    name: "Blogs",
  },
];

const Header = ({ className }: { className?: string }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollTop, scrollDirection } = useScrollPosition();
  const { visibleSection } = useVisibleSection(
    ["home", "services", "features", "projects"],
    0.5,
  );
  // Track visible section for navigation highlighting
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // Mobile menu is toggled with the toggleMobileMenu function

  return (
    <>
      <header
        className={cn(
          "text-foreground top-0 right-0 left-0 z-50 h-20 bg-transparent backdrop-blur-xs transition-all duration-300 ease-in-out",
          {
            "dark fixed": pathname === "/",
            "bg-card sticky": pathname !== "/",
            "bg-background/95 shadow-sm": scrollTop > 80 && pathname === "/",
            "-translate-y-full":
              scrollDirection === "down" && scrollTop > 80 && pathname === "/",
            "translate-y-0":
              (scrollDirection === "up" && pathname === "/") ||
              (scrollTop <= 80 && pathname === "/"),
          },
          className,
        )}
      >
        <div className="container flex h-full items-center justify-between">
          <Link
            href="/"
            className="font-display block text-xl font-medium tracking-tight transition-opacity duration-300 hover:opacity-80"
            aria-label="Home"
          >
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>
          <nav className="hidden flex-1 items-center justify-center gap-4 px-0 lg:flex lg:gap-6 lg:px-16">
            {navLinks?.map((link, index) => {
              const url = new URL(link?.href, "http://a");
              const isHashed = !!url.hash;
              return (
                <span key={index}>
                  {isHashed ? (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "underline-effect primary text-sm whitespace-nowrap uppercase",
                        {
                          active: visibleSection === url.hash.replace("#", ""),
                        },
                      )}
                    >
                      {link?.name}
                    </Link>
                  ) : (
                    <ActiveLink
                      key={link.name}
                      href={link.href}
                      className="underline-effect primary text-sm whitespace-nowrap uppercase"
                      activeClassName="active"
                    >
                      {link?.name}
                    </ActiveLink>
                  )}
                </span>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <Link href={"/contact"}>
              <Button asChild={true}>
                <span>GET AN ESTIMATE</span>
              </Button>
            </Link>
            <Link className="hidden lg:block" href={"/vendor-registration"}>
              <Button asChild={true}>
                <span>Vendor Registration</span>
              </Button>
            </Link>
            {/* Mobile Menu Button */}
            <button
              className="flex flex-col space-y-1.5 focus:outline-none lg:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "bg-foreground h-0.5 w-6 transition-all duration-300 ease-in-out",
                  isMobileMenuOpen && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "bg-foreground h-0.5 w-6 transition-all duration-300 ease-in-out",
                  isMobileMenuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "bg-foreground h-0.5 w-6 transition-all duration-300 ease-in-out",
                  isMobileMenuOpen && "-translate-y-2 -rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={cn(
          "bg-card fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500",
          isMobileMenuOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-50",
        )}
      >
        <nav className="flex flex-col items-center gap-4">
          {navLinks?.map((link, index) => {
            const url = new URL(link?.href, "http://a");
            const isHashed = !!url.hash;
            return (
              <span key={index}>
                {isHashed ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "underline-effect primary text-sm whitespace-nowrap uppercase",
                      {
                        active: visibleSection === url.hash.replace("#", ""),
                      },
                    )}
                  >
                    {link?.name}
                  </Link>
                ) : (
                  <ActiveLink
                    key={link.name}
                    href={link.href}
                    className="underline-effect primary text-sm whitespace-nowrap uppercase"
                    activeClassName="active"
                  >
                    {link?.name}
                  </ActiveLink>
                )}
              </span>
            );
          })}
          <Link className="lg:hidden" href={"/vendor-registration"}>
            <Button asChild={true}>
              <span>Vendor Registration</span>
            </Button>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
