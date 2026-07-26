import Image from "next/image";

// "yeda org" brand logo (white variant).
export default function YedaLogo({ height = 32, priority = false }: { height?: number; priority?: boolean }) {
  const aspectRatio = 339 / 189;
  const width = Math.round(height * aspectRatio);
  return (
    <Image
      src="/yeda-org-logo.png"
      alt="yeda org"
      width={width}
      height={height}
      priority={priority}
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
