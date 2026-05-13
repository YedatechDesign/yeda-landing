"use client";
import { useEffect } from "react";

export default function AnimationObserver() {
  useEffect(() => {
    // ── Scroll reveal for sections ──────────────────────
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-scale").forEach((el) => {
      revealObserver.observe(el);
    });

    // ── Auto-reveal: section inner containers ───────────
    // Targets every section's first direct div (the max-width wrapper)
    // so all sections animate in without touching individual files.
    const autoTargets: HTMLElement[] = [];
    document.querySelectorAll("main section").forEach((section) => {
      const inner = section.querySelector<HTMLElement>(":scope > div");
      if (inner && !inner.classList.contains("no-reveal")) {
        inner.classList.add("reveal");
        autoTargets.push(inner);
        revealObserver.observe(inner);
      }
    });

    // ── Stagger grid children ───────────────────────────
    const staggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const parent = entry.target as HTMLElement;
            const children = parent.querySelectorAll<HTMLElement>(
              ":scope > div, :scope > a, :scope > li"
            );
            children.forEach((child, i) => {
              if (i < 8) {
                child.style.transitionDelay = `${i * 0.09}s`;
                child.classList.add("reveal-scale");
                // Small timeout so CSS class takes effect before we mark visible
                setTimeout(() => child.classList.add("visible"), 60 + i * 90);
              }
            });
            staggerObserver.unobserve(parent);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".stagger-grid").forEach((el) => {
      staggerObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
      staggerObserver.disconnect();
    };
  }, []);

  return null;
}
