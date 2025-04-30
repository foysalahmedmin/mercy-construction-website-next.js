import type { Metadata } from "next";
import React from "react";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: "Mercy Construction",
  description: "Mercy Construction",
};

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This is a server component, we'll use a client component for path-based logic
  return (
    <ClientLayout>
      {children}
    </ClientLayout>
  );
}
