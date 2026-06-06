export function StarField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `
          radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,.7) 0%, transparent 100%),
          radial-gradient(1px 1px at 25% 40%, rgba(255,255,255,.5) 0%, transparent 100%),
          radial-gradient(1px 1px at 40% 20%, rgba(255,255,255,.6) 0%, transparent 100%),
          radial-gradient(1px 1px at 55% 60%, rgba(255,255,255,.4) 0%, transparent 100%),
          radial-gradient(1px 1px at 70% 10%, rgba(255,255,255,.8) 0%, transparent 100%),
          radial-gradient(1px 1px at 85% 45%, rgba(255,255,255,.5) 0%, transparent 100%),
          radial-gradient(1px 1px at 92% 80%, rgba(255,255,255,.6) 0%, transparent 100%),
          radial-gradient(1px 1px at 5% 75%, rgba(255,255,255,.4) 0%, transparent 100%),
          radial-gradient(1px 1px at 60% 85%, rgba(255,255,255,.5) 0%, transparent 100%),
          radial-gradient(1px 1px at 33% 90%, rgba(255,255,255,.3) 0%, transparent 100%),
          radial-gradient(2px 2px at 78% 30%, rgba(100,180,255,.6) 0%, transparent 100%),
          radial-gradient(2px 2px at 18% 55%, rgba(100,180,255,.4) 0%, transparent 100%)
        `,
      }}
    />
  );
}
