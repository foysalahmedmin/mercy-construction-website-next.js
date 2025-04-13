"use client";

import { useEffect, useState } from "react";

export const useVisibleSection = (ids?: string[], threshold = 0.5) => {
  const [visibleSection, setVisibleSection] = useState<string | null>(null);

  useEffect(() => {
    // Skip effect if no ids are provided
    if (!ids || ids.length === 0) return;
    
    const observers: IntersectionObserver[] = [];

    ids.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
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

  // Return null if no ids are provided
  if (!ids || ids.length === 0) {
    return { visibleSection: null };
  }

  return { visibleSection };
};
