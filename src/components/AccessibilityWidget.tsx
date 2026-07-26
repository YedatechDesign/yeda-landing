"use client";

import { useEffect, useId, useRef, useState } from "react";

type PreferenceKey = "contrast" | "links" | "text" | "motion";
type Preferences = Record<PreferenceKey, boolean>;

const STORAGE_KEY = "orglms-accessibility-preferences-v1";
const DEFAULT_PREFERENCES: Preferences = {
  contrast: false,
  links: false,
  text: false,
  motion: false,
};

const labels: Record<PreferenceKey, string> = {
  contrast: "ניגודיות מוגברת",
  links: "הדגשת קישורים",
  text: "הגדלת טקסט",
  motion: "הפחתת תנועה",
};

function Icon({ kind }: { kind: "accessibility" | "check" | "reset" | "close" }) {
  const paths = {
    accessibility: (
      <>
        <circle cx="12" cy="4" r="2" />
        <path d="M5 8h14M12 6v7M8 21l4-8 4 8M7 13h10" />
      </>
    ),
    check: <path d="M20 6 9 17l-5-5" />,
    reset: <path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5" />,
    close: <path d="M18 6 6 18M6 6l12 12" />,
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[kind]}
    </svg>
  );
}

function applyPreferences(preferences: Preferences) {
  const root = document.documentElement;
  (Object.keys(preferences) as PreferenceKey[]).forEach((key) => {
    root.toggleAttribute(`data-a11y-${key}`, preferences[key]);
  });
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState<Preferences>(DEFAULT_PREFERENCES);
  const [preferencesReady, setPreferencesReady] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    let storedPreferences = DEFAULT_PREFERENCES;
    try {
      const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "{}") as Partial<Preferences>;
      storedPreferences = { ...DEFAULT_PREFERENCES, ...stored };
    } catch {
      storedPreferences = DEFAULT_PREFERENCES;
    }
    queueMicrotask(() => {
      setPreferences(storedPreferences);
      setPreferencesReady(true);
    });
  }, []);

  useEffect(() => {
    applyPreferences(preferences);
    if (!preferencesReady) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    } catch {
      // The active adjustments still work when private browsing blocks storage.
    }
  }, [preferences, preferencesReady]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>("button:not([disabled]), a[href]"),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!panelRef.current?.contains(target) && !triggerRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className="a11y-widget" dir="rtl">
      <button
        ref={triggerRef}
        type="button"
        className="a11y-trigger"
        aria-label="פתיחת אפשרויות נגישות"
        aria-expanded={open}
        aria-controls={open ? "orglms-accessibility-panel" : undefined}
        onClick={() => setOpen((current) => !current)}
      >
        <Icon kind="accessibility" />
      </button>

      {open && (
        <div
          ref={panelRef}
          id="orglms-accessibility-panel"
          className="a11y-panel"
          role="dialog"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
        >
          <div className="a11y-panel-heading">
            <div>
              <h2 id={titleId}>אפשרויות נגישות</h2>
              <p id={descriptionId}>התאימו את התצוגה. הבחירות נשמרות במכשיר הזה.</p>
            </div>
            <button ref={closeRef} type="button" className="a11y-close" aria-label="סגירת אפשרויות נגישות" onClick={close}>
              <Icon kind="close" />
            </button>
          </div>

          <div className="a11y-options" aria-label="התאמות תצוגה">
            {(Object.keys(labels) as PreferenceKey[]).map((key) => (
              <button
                key={key}
                type="button"
                className="a11y-option"
                aria-pressed={preferences[key]}
                onClick={() => setPreferences((current) => ({ ...current, [key]: !current[key] }))}
              >
                <span>{labels[key]}</span>
                <span className="a11y-check" aria-hidden="true">{preferences[key] && <Icon kind="check" />}</span>
              </button>
            ))}
          </div>

          <div className="a11y-actions">
            <button type="button" className="a11y-reset" onClick={() => setPreferences(DEFAULT_PREFERENCES)}>
              <Icon kind="reset" />
              איפוס
            </button>
            <a href="mailto:coo@yedalms.io?subject=%D7%A0%D7%92%D7%99%D7%A9%D7%95%D7%AA%20%D7%91%D7%90%D7%AA%D7%A8%20orglms.co.il">
              דיווח על בעיית נגישות
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
