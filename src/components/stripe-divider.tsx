export function StripeDivider() {
  return (
    <div
      className="w-full h-[30px] my-0"
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, transparent, transparent 4px, currentColor 4px, currentColor 5px)",
        opacity: 0.08,
      }}
      aria-hidden="true"
    />
  );
}
