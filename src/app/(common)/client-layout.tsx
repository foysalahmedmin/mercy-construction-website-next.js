"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import MaintainancePage from "./maintainance/page";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Only show normal layout for vendor-registration route
  const isVendorRegistration = pathname === "/vendor-registration";
  
  if (isVendorRegistration) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }
  
  // For all other routes, show maintenance page
  return <MaintainancePage />;
}
