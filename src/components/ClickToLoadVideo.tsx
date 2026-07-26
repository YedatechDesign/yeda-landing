"use client";

import { useState } from "react";

type ClickToLoadVideoProps = {
  src: string;
  title: string;
};

export default function ClickToLoadVideo({ src, title }: ClickToLoadVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {isLoaded ? (
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsLoaded(true)}
          aria-label={`לחצו לצפייה בסרטון: ${title}`}
          style={{
            position: "absolute", inset: 0, width: "100%", padding: 0, border: "none", cursor: "pointer",
            overflow: "hidden", color: "white",
            background: "radial-gradient(circle at 50% 30%, #15309A 0, #000F61 58%, #000A45 100%)",
            fontFamily: "inherit",
          }}
        >
          <span style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, padding: 24 }}>
            <span style={{ width: 64, height: 64, borderRadius: "50%", background: "#A94700", display: "grid", placeItems: "center", boxShadow: "0 8px 28px rgba(0,0,0,0.35)" }}>
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M8 5v14l11-7z" fill="white" />
              </svg>
            </span>
            <span style={{ fontSize: "clamp(15px, 2vw, 20px)", fontWeight: 700, textShadow: "0 2px 12px rgba(0,0,0,0.65)" }}>לחצו לצפייה בסרטון</span>
          </span>
        </button>
      )}
    </div>
  );
}
