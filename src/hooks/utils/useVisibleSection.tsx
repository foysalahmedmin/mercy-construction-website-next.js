"use client";

import { useEffect, useState } from "react";

export const useVisibleSection = (ids?: string[], threshold = 0.5) => {
  console.log(ids);
  if (!ids || ids.length === 0) {
    return { visibleSection: null };
  }

  const [visibleSection, setVisibleSection] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      console.log(element);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSection(sectionId);
          }
        },
        { threshold },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [ids, threshold]);

  return { visibleSection };
};
