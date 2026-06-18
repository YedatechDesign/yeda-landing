// "yeda org" brand logo (white variant). Both current placements (Header, Footer)
// sit on a dark navy background, so the white PNG is used directly.
export default function YedaLogo({ color = "white", height = 32 }: { color?: string; height?: number }) {
  const aspectRatio = 339 / 189;
  const width = height * aspectRatio;
  return (
    <img
      src="/yeda-org-logo.png"
      alt="yeda org"
      width={width}
      height={height}
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
