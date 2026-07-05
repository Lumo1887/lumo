export type FigureType =
  | "boxplot"
  | "histogram"
  | "lorenz"
  | "venn"
  | "tree"
  | "distribution-function"
  | "normal-curve"
  | "binomial-bars";

const INK = "#44403c";
const BRAND = "#7c3aed";

function FigureFrame({
  caption,
  children,
}: {
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-6 rounded-xl border border-ink-100 bg-[#fffdf9] p-4">
      <div className="flex justify-center">{children}</div>
      <figcaption className="hand-label mt-2 text-center text-[15px] text-ink-600">
        {caption}
      </figcaption>
    </figure>
  );
}

function Boxplot() {
  return (
    <svg viewBox="0 0 420 160" className="w-full max-w-md" style={{ transform: "rotate(-0.4deg)" }}>
      <line x1="30" y1="80" x2="60" y2="79" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="60" y1="55" x2="60" y2="105" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <rect x="60" y="45" width="110" height="70" fill="#ede9fe" stroke={BRAND} strokeWidth="2.2" />
      <line x1="122" y1="46" x2="120" y2="114" stroke={BRAND} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="170" y1="80" x2="330" y2="81" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="330" y1="58" x2="331" y2="103" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <circle cx="365" cy="80" r="4" fill="none" stroke={INK} strokeWidth="1.8" />
      <text x="30" y="135" className="hand-label" fontSize="15" fill={INK}>Min</text>
      <text x="55" y="30" className="hand-label" fontSize="15" fill={BRAND}>Q1</text>
      <text x="108" y="135" className="hand-label" fontSize="15" fill={BRAND}>Median</text>
      <text x="160" y="30" className="hand-label" fontSize="15" fill={BRAND}>Q3</text>
      <text x="312" y="135" className="hand-label" fontSize="15" fill={INK}>Max</text>
      <text x="352" y="60" className="hand-label" fontSize="14" fill={INK}>Ausreißer</text>
    </svg>
  );
}

function Histogram() {
  const bars = [22, 55, 90, 120, 78, 40, 15];
  return (
    <svg viewBox="0 0 420 200" className="w-full max-w-md" style={{ transform: "rotate(0.3deg)" }}>
      <line x1="40" y1="160" x2="390" y2="160" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="160" x2="40" y2="20" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={55 + i * 46}
          y={160 - h}
          width="36"
          height={h}
          fill="#ddd6fe"
          stroke={BRAND}
          strokeWidth="1.8"
        />
      ))}
      <text x="150" y="188" className="hand-label" fontSize="16" fill={INK}>Klassen (x)</text>
      <text x="6" y="20" className="hand-label" fontSize="15" fill={INK}>Häufig­keits­dichte</text>
    </svg>
  );
}

function Lorenz() {
  return (
    <svg viewBox="0 0 260 260" className="w-full max-w-sm" style={{ transform: "rotate(-0.3deg)" }}>
      <line x1="30" y1="220" x2="230" y2="220" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="220" x2="30" y2="20" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="220" x2="230" y2="20" stroke={INK} strokeWidth="1.6" strokeDasharray="5 5" />
      <path
        d="M30,220 C 90,215 150,190 230,20"
        fill="none"
        stroke={BRAND}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M30,220 C 90,215 150,190 230,20 L230,220 Z" fill="#ede9fe" opacity="0.6" />
      <text x="35" y="240" className="hand-label" fontSize="13" fill={INK}>Bevölkerungsanteil</text>
      <text x="-95" y="18" className="hand-label" fontSize="13" fill={INK} transform="rotate(-90)">Einkommensanteil</text>
      <text x="150" y="70" className="hand-label" fontSize="14" fill={BRAND}>Lorenzkurve</text>
      <text x="150" y="130" className="hand-label" fontSize="13" fill={INK}>Gleichverteilung</text>
    </svg>
  );
}

function Venn() {
  return (
    <svg viewBox="0 0 320 200" className="w-full max-w-sm" style={{ transform: "rotate(0.4deg)" }}>
      <circle cx="130" cy="100" r="70" fill="#ede9fe" fillOpacity="0.7" stroke={BRAND} strokeWidth="2.2" />
      <circle cx="195" cy="100" r="70" fill="#fef3c7" fillOpacity="0.55" stroke="#b45309" strokeWidth="2.2" />
      <text x="90" y="60" className="hand-label" fontSize="20" fill={BRAND}>A</text>
      <text x="225" y="60" className="hand-label" fontSize="20" fill="#b45309">B</text>
      <text x="150" y="105" className="hand-label" fontSize="15" fill={INK}>A∩B</text>
      <path d="M175,130 q20,25 45,15" fill="none" stroke={INK} strokeWidth="1.4" markerEnd="url(#arrow)" />
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={INK} />
        </marker>
      </defs>
      <text x="215" y="165" className="hand-label" fontSize="13" fill={INK}>Schnittmenge</text>
    </svg>
  );
}

function Tree() {
  return (
    <svg viewBox="0 0 380 220" className="w-full max-w-md" style={{ transform: "rotate(-0.3deg)" }}>
      <circle cx="40" cy="110" r="5" fill={INK} />
      <line x1="40" y1="110" x2="180" y2="50" stroke={INK} strokeWidth="1.8" />
      <line x1="40" y1="110" x2="180" y2="170" stroke={INK} strokeWidth="1.8" />
      <text x="95" y="70" className="hand-label" fontSize="15" fill={BRAND}>P(B₁)</text>
      <text x="95" y="150" className="hand-label" fontSize="15" fill={BRAND}>P(B₂)</text>

      <circle cx="180" cy="50" r="4" fill={INK} />
      <circle cx="180" cy="170" r="4" fill={INK} />

      <line x1="180" y1="50" x2="330" y2="20" stroke={INK} strokeWidth="1.6" />
      <line x1="180" y1="50" x2="330" y2="75" stroke={INK} strokeWidth="1.6" />
      <line x1="180" y1="170" x2="330" y2="145" stroke={INK} strokeWidth="1.6" />
      <line x1="180" y1="170" x2="330" y2="200" stroke={INK} strokeWidth="1.6" />

      <text x="245" y="30" className="hand-label" fontSize="13" fill={INK}>P(A|B₁)</text>
      <text x="245" y="95" className="hand-label" fontSize="13" fill={INK}>P(Ā|B₁)</text>
      <text x="245" y="140" className="hand-label" fontSize="13" fill={INK}>P(A|B₂)</text>
      <text x="245" y="215" className="hand-label" fontSize="13" fill={INK}>P(Ā|B₂)</text>
    </svg>
  );
}

function DistributionFunction() {
  return (
    <svg viewBox="0 0 380 200" className="w-full max-w-md" style={{ transform: "rotate(0.3deg)" }}>
      <line x1="35" y1="170" x2="360" y2="170" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="170" x2="35" y2="15" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="30" x2="360" y2="30" stroke={INK} strokeWidth="1.2" strokeDasharray="4 5" opacity="0.5" />
      <path
        d="M35,170 L100,170 L100,130 L170,130 L170,95 L230,95 L230,60 L300,60 L300,30 L360,30"
        fill="none"
        stroke={BRAND}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {[
        [100, 170], [100, 130], [170, 130], [170, 95], [230, 95], [230, 60], [300, 60], [300, 30],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.2" fill="white" stroke={BRAND} strokeWidth="1.8" />
      ))}
      <text x="330" y="20" className="hand-label" fontSize="13" fill={INK}>1</text>
      <text x="180" y="195" className="hand-label" fontSize="15" fill={INK}>x</text>
      <text x="4" y="20" className="hand-label" fontSize="15" fill={INK}>F(x)</text>
    </svg>
  );
}

function NormalCurve() {
  return (
    <svg viewBox="0 0 380 180" className="w-full max-w-md" style={{ transform: "rotate(-0.2deg)" }}>
      <line x1="20" y1="150" x2="360" y2="150" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M20,150 C 80,150 110,30 190,30 C 270,30 300,150 360,150"
        fill="none"
        stroke={BRAND}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M190,150 C 190,150 190,150 190,150 L190,32"
        stroke={INK}
        strokeWidth="1.4"
        strokeDasharray="5 5"
      />
      <path
        d="M120,150 C130,110 150,45 190,32 C 230,45 250,110 260,150 Z"
        fill="#ede9fe"
        opacity="0.6"
      />
      <text x="182" y="170" className="hand-label" fontSize="16" fill={INK}>μ</text>
      <text x="230" y="70" className="hand-label" fontSize="14" fill={BRAND}>σ = Streuung</text>
    </svg>
  );
}

function BinomialBars() {
  const heights = [8, 25, 55, 90, 110, 90, 55, 25, 8];
  return (
    <svg viewBox="0 0 400 170" className="w-full max-w-md" style={{ transform: "rotate(0.3deg)" }}>
      <line x1="25" y1="140" x2="380" y2="140" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      {heights.map((h, i) => (
        <rect
          key={i}
          x={35 + i * 39}
          y={140 - h}
          width="28"
          height={h}
          fill="#ddd6fe"
          stroke={BRAND}
          strokeWidth="1.6"
        />
      ))}
      <text x="170" y="162" className="hand-label" fontSize="15" fill={INK}>Anzahl Erfolge k</text>
    </svg>
  );
}

export default function SkriptFigure({
  type,
  caption,
}: {
  type: FigureType;
  caption: string;
}) {
  const map: Record<FigureType, React.ReactNode> = {
    boxplot: <Boxplot />,
    histogram: <Histogram />,
    lorenz: <Lorenz />,
    venn: <Venn />,
    tree: <Tree />,
    "distribution-function": <DistributionFunction />,
    "normal-curve": <NormalCurve />,
    "binomial-bars": <BinomialBars />,
  };

  return <FigureFrame caption={caption}>{map[type]}</FigureFrame>;
}
