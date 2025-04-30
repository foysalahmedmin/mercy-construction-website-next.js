import type { Metadata } from "next";
import React from "react";
import MaintainancePage from "./maintainance/page";

export const metadata: Metadata = {
  title: "Mercy Construction",
  description: "Mercy Construction",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MaintainancePage />
      {/* <Header />
      {children}
      <Footer /> */}
    </>
  );
}
