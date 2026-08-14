"use client";

import { useEffect } from "react";

const SCRIPT_ID = "targetbob-project-script";
const TARGETBOB_ORIGIN = "https://app.targetbob.ai";

function titleTargetBobFrames(root: ParentNode = document) {
  root.querySelectorAll<HTMLIFrameElement>(`iframe[src^="${TARGETBOB_ORIGIN}"]`).forEach((frame) => {
    const isTrigger = frame.src.includes("/trigger");
    frame.title = isTrigger ? "פתיחת העוזר החכם של Yeda" : "העוזר החכם של Yeda";
  });
}

export default function TargetBobLoader() {
  useEffect(() => {
    const observer = new MutationObserver(() => titleTargetBobFrames());
    observer.observe(document.body, { childList: true, subtree: true });
    titleTargetBobFrames();

    if (window.location.pathname.replace(/\/+$/, "") === "/todah") {
      observer.disconnect();
      return;
    }

    let loaded = Boolean(document.getElementById(SCRIPT_ID));
    const load = () => {
      if (loaded) return;
      loaded = true;

      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = `${TARGETBOB_ORIGIN}/embed/project.js`;
      script.async = true;
      script.dataset.env = "prod";
      script.dataset.projectId = "56bf7b28-76db-47aa-8695-4892b7acbd63";
      script.addEventListener("load", () => titleTargetBobFrames(), { once: true });
      document.head.appendChild(script);
    };

    const events: Array<keyof WindowEventMap> = ["scroll", "pointerdown", "touchstart", "keydown"];
    events.forEach((eventName) => window.addEventListener(eventName, load, { once: true, passive: eventName !== "keydown" }));
    const timer = window.setTimeout(load, 2500);

    return () => {
      observer.disconnect();
      events.forEach((eventName) => window.removeEventListener(eventName, load));
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
