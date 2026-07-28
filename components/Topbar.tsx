export default function Topbar() {
  return (
    <div className="border-b border-line bg-neon/[0.06] px-4 py-2.5 text-center">
      <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-neon md:text-[13px]">
        <span className="mr-2 inline-block h-2 w-2 animate-blink rounded-full bg-neon align-middle" />
        Aceitamos apenas 3 novas clínicas por mês — garanta a sua vaga
      </p>
    </div>
  );
}
