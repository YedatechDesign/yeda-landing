"use client";

import { useState } from "react";
import Image from "next/image";

type ClickToLoadVideoProps = {
  src: string;
  title: string;
  posterSrc: string;
  posterAlt: string;
};

export default function ClickToLoadVideo({ src, title, posterSrc, posterAlt }: ClickToLoadVideoProps) {
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
          aria-label={`הפעלת הסרטון: ${title}`}
          style={{
            position: "absolute", inset: 0, width: "100%", padding: 0, border: "none", cursor: "pointer",
            overflow: "hidden", color: "white", background: "#000F61", fontFamily: "inherit",
          }}
        >
          <Image
            src={posterSrc}
            alt={posterAlt}
            fill
            sizes="(max-width: 900px) 100vw, 900px"
            style={{ objectFit: "cover", opacity: 0.62 }}
          />
          <span style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,15,97,0.35), rgba(0,0,0,0.64))" }} />
          <span style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, padding: 24 }}>
            <span style={{ width: 64, height: 64, borderRadius: "50%", background: "#F08700", display: "grid", placeItems: "center", boxShadow: "0 8px 28px rgba(0,0,0,0.35)" }}>
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
