type Variant = "dark" | "light";

/**
 * Logo original enviada pelo cliente. Basta existir o arquivo
 * public/logo.png no repositório para o site usá-la no lugar da
 * recriação vetorial (a detecção acontece em app/page.tsx).
 * Em fundos escuros ela é exibida sobre um cartão branco.
 */
export function CustomLogo({
  onDark = false,
  className,
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/logo.png"
      alt="BlueVisa"
      className={`${onDark ? "rounded-xl bg-white p-1.5" : ""} ${className ?? ""}`}
    />
  );
}

/**
 * Marca BlueVisa recriada em vetor: o "B" com o avião decolando,
 * a faixa de estrelas e as listras vermelhas da bandeira americana.
 * variant="dark": cores originais (navy), para fundos claros.
 * variant="light": versão clara, para fundos azul-marinho.
 */
export function LogoMark({
  variant = "dark",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const id = variant === "dark" ? "lgd" : "lgl";
  const bTop = variant === "dark" ? "#1B4F8F" : "#FFFFFF";
  const bBottom = variant === "dark" ? "#0A2342" : "#BBD8F0";
  const band = variant === "dark" ? "#0A2342" : "#1B4F8F";
  const stripe = variant === "dark" ? "#C0392B" : "#E14848";
  const plane = variant === "dark" ? "#0A2342" : "#7CC3EA";

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden focusable="false">
      <defs>
        <linearGradient id={`${id}-b`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={bTop} />
          <stop offset="1" stopColor={bBottom} />
        </linearGradient>
      </defs>

      {/* B */}
      <text
        x="44"
        y="79"
        textAnchor="middle"
        fontFamily="var(--font-display), system-ui, sans-serif"
        fontWeight="800"
        fontSize="88"
        fill={`url(#${id}-b)`}
      >
        B
      </text>

      {/* trilha do avião */}
      <path
        d="M56 54 Q 72 40 84 26"
        fill="none"
        stroke={plane}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 6"
      />
      {/* avião */}
      <g transform="translate(86 18) rotate(-42) scale(0.62)">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill={plane} transform="translate(-12 -12)" />
      </g>

      {/* faixa de estrelas */}
      <path
        d="M6 72 Q 32 92 60 74 Q 76 63 87 45 L 80 41 Q 70 57 56 67 Q 34 81 12 66 Z"
        fill={band}
      />
      {[
        [20, 73, 1],
        [31, 76.5, 1.3],
        [42, 74.5, 1],
        [34, 69, 0.8],
        [48, 69.5, 1.1],
        [57, 63, 0.8],
      ].map(([x, y, s], i) => (
        <path
          key={i}
          d="M0 -3.2 L0.95 -0.99 L3.04 -0.99 L1.54 0.38 L2.35 2.59 L0 1.32 L-2.35 2.59 L-1.54 0.38 L-3.04 -0.99 L-0.95 -0.99 Z"
          fill="#FFFFFF"
          transform={`translate(${x} ${y}) scale(${s})`}
        />
      ))}

      {/* listras vermelhas */}
      <path d="M38 86 Q 62 82 80 62" fill="none" stroke={stripe} strokeWidth="5" strokeLinecap="round" />
      <path d="M48 93 Q 68 88 84 69" fill="none" stroke={stripe} strokeWidth="5" strokeLinecap="round" />
      <path d="M60 99 Q 75 94 88 76" fill="none" stroke={stripe} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function LogoType({
  variant = "dark",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={`font-display font-extrabold tracking-tight ${
        variant === "dark" ? "text-ink" : "text-white"
      } ${className ?? ""}`}
    >
      Blue<span className="text-blue">Visa</span>
    </span>
  );
}

export default function Logo({
  variant = "dark",
  markClass = "h-10 w-10",
  typeClass = "text-2xl",
  className,
}: {
  variant?: Variant;
  markClass?: string;
  typeClass?: string;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark variant={variant} className={markClass} />
      <LogoType variant={variant} className={typeClass} />
    </span>
  );
}
