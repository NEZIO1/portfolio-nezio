export function StaticGradientFallback() {
  return (
    <div
      aria-hidden
      className="h-full w-full"
      style={{
        background:
          "radial-gradient(circle at 20% 25%, var(--primary) 0%, transparent 45%), " +
          "radial-gradient(circle at 80% 70%, var(--primary-hover) 0%, transparent 50%), " +
          "var(--background)",
      }}
    />
  );
}
