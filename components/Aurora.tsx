export default function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] animate-aurora rounded-full bg-neon/20 blur-[130px]" />
      <div
        className="absolute top-20 right-0 h-[460px] w-[460px] animate-aurora rounded-full bg-violet/20 blur-[140px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-0 h-[400px] w-[400px] animate-aurora rounded-full bg-lime/10 blur-[120px]"
        style={{ animationDelay: "-11s" }}
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
        }}
      />
    </div>
  );
}
