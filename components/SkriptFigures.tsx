export type FigureType =
  | "boxplot"
  | "histogram"
  | "lorenz"
  | "venn"
  | "tree"
  | "distribution-function"
  | "normal-curve"
  | "binomial-bars"
  | "supply-demand"
  | "budget-line"
  | "cost-curves"
  | "monopoly-graph"
  | "islm"
  | "asad"
  | "phillips-curve"
  | "solow-diagram"
  | "number-line"
  | "sequence-convergence"
  | "unit-circle"
  | "graph-diagram"
  | "binary-tree"
  | "uml-class-box"
  | "state-diagram"
  | "gradient-level-curves"
  | "saddle-surface"
  | "free-body-diagram"
  | "truss-diagram"
  | "shear-moment-diagram"
  | "friction-incline"
  | "stress-element"
  | "beam-bending";

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

function SupplyDemand() {
  return (
    <svg viewBox="0 0 380 220" className="w-full max-w-md" style={{ transform: "rotate(-0.3deg)" }}>
      <line x1="35" y1="190" x2="360" y2="190" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="190" x2="35" y2="20" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="55" y1="30" x2="330" y2="175" stroke={BRAND} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="55" y1="175" x2="330" y2="30" stroke="#b45309" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="192" y1="102" x2="192" y2="190" stroke={INK} strokeWidth="1.2" strokeDasharray="4 5" />
      <line x1="35" y1="102" x2="192" y2="102" stroke={INK} strokeWidth="1.2" strokeDasharray="4 5" />
      <circle cx="192" cy="102" r="4.5" fill={INK} />
      <text x="300" y="24" className="hand-label" fontSize="15" fill={BRAND}>Nachfrage</text>
      <text x="270" y="24" className="hand-label" fontSize="15" fill="#b45309" transform="translate(-10,-16)">Angebot</text>
      <text x="14" y="98" className="hand-label" fontSize="14" fill={INK}>P*</text>
      <text x="185" y="210" className="hand-label" fontSize="14" fill={INK}>Q*</text>
      <text x="150" y="205" className="hand-label" fontSize="15" fill={INK}>Menge</text>
      <text x="4" y="16" className="hand-label" fontSize="15" fill={INK}>Preis</text>
    </svg>
  );
}

function BudgetLine() {
  return (
    <svg viewBox="0 0 380 220" className="w-full max-w-md" style={{ transform: "rotate(0.3deg)" }}>
      <line x1="35" y1="190" x2="360" y2="190" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="190" x2="35" y2="20" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="30" x2="300" y2="190" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M90,190 C 110,90 190,55 320,60" fill="none" stroke={BRAND} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="197" cy="112" r="4.5" fill={BRAND} />
      <text x="205" y="108" className="hand-label" fontSize="14" fill={BRAND}>E*</text>
      <text x="245" y="55" className="hand-label" fontSize="14" fill={BRAND}>Indifferenzkurve</text>
      <text x="235" y="185" className="hand-label" fontSize="14" fill={INK}>Budgetgerade</text>
      <text x="150" y="205" className="hand-label" fontSize="15" fill={INK}>Gut 1</text>
      <text x="4" y="16" className="hand-label" fontSize="15" fill={INK}>Gut 2</text>
    </svg>
  );
}

function CostCurves() {
  return (
    <svg viewBox="0 0 380 210" className="w-full max-w-md" style={{ transform: "rotate(-0.2deg)" }}>
      <line x1="35" y1="185" x2="360" y2="185" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="185" x2="35" y2="20" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <path d="M70,150 C 130,80 260,80 330,150" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <path d="M70,175 C 140,110 250,110 330,175" fill="none" stroke={BRAND} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M110,185 C 150,60 230,60 300,185" fill="none" stroke="#b45309" strokeWidth="2.2" strokeLinecap="round" />
      <text x="335" y="150" className="hand-label" fontSize="14" fill={INK}>AC</text>
      <text x="335" y="178" className="hand-label" fontSize="14" fill={BRAND}>AVC</text>
      <text x="290" y="70" className="hand-label" fontSize="14" fill="#b45309">MC</text>
      <text x="160" y="205" className="hand-label" fontSize="15" fill={INK}>Menge</text>
      <text x="4" y="16" className="hand-label" fontSize="15" fill={INK}>Kosten/Stück</text>
    </svg>
  );
}

function MonopolyGraph() {
  return (
    <svg viewBox="0 0 380 220" className="w-full max-w-md" style={{ transform: "rotate(0.2deg)" }}>
      <line x1="35" y1="190" x2="360" y2="190" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="190" x2="35" y2="20" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="55" y1="35" x2="330" y2="175" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="55" y1="35" x2="200" y2="175" stroke={BRAND} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M70,175 C 140,110 250,110 320,175" fill="none" stroke="#b45309" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="150" y1="112" x2="150" y2="190" stroke={INK} strokeWidth="1.2" strokeDasharray="4 5" />
      <line x1="35" y1="112" x2="150" y2="112" stroke={INK} strokeWidth="1.2" strokeDasharray="4 5" />
      <line x1="35" y1="66" x2="150" y2="66" stroke={INK} strokeWidth="1.2" strokeDasharray="4 5" />
      <circle cx="150" cy="112" r="4" fill="#b45309" />
      <text x="300" y="30" className="hand-label" fontSize="13" fill={INK}>Nachfrage (AR)</text>
      <text x="205" y="70" className="hand-label" fontSize="13" fill={BRAND}>Grenzerlös (MR)</text>
      <text x="290" y="150" className="hand-label" fontSize="13" fill="#b45309">MC</text>
      <text x="10" y="62" className="hand-label" fontSize="13" fill={INK}>Pm</text>
      <text x="140" y="205" className="hand-label" fontSize="13" fill={INK}>Qm</text>
    </svg>
  );
}

function ISLM() {
  return (
    <svg viewBox="0 0 380 220" className="w-full max-w-md" style={{ transform: "rotate(-0.3deg)" }}>
      <line x1="35" y1="190" x2="360" y2="190" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="190" x2="35" y2="20" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="55" y1="30" x2="330" y2="175" stroke={BRAND} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M55,175 C 120,175 200,60 330,35" fill="none" stroke="#b45309" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="196" y1="94" x2="196" y2="190" stroke={INK} strokeWidth="1.2" strokeDasharray="4 5" />
      <line x1="35" y1="94" x2="196" y2="94" stroke={INK} strokeWidth="1.2" strokeDasharray="4 5" />
      <circle cx="196" cy="94" r="4.5" fill={INK} />
      <text x="300" y="24" className="hand-label" fontSize="15" fill={BRAND}>IS</text>
      <text x="300" y="45" className="hand-label" fontSize="15" fill="#b45309">LM</text>
      <text x="14" y="90" className="hand-label" fontSize="14" fill={INK}>i*</text>
      <text x="190" y="210" className="hand-label" fontSize="14" fill={INK}>Y*</text>
      <text x="150" y="205" className="hand-label" fontSize="15" fill={INK}>Y (Einkommen)</text>
      <text x="4" y="16" className="hand-label" fontSize="15" fill={INK}>Zins i</text>
    </svg>
  );
}

function ASAD() {
  return (
    <svg viewBox="0 0 380 220" className="w-full max-w-md" style={{ transform: "rotate(0.2deg)" }}>
      <line x1="35" y1="190" x2="360" y2="190" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="190" x2="35" y2="20" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="220" y1="190" x2="220" y2="30" stroke={INK} strokeWidth="1.8" strokeDasharray="3 5" />
      <line x1="55" y1="35" x2="330" y2="175" stroke={BRAND} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="80" y1="175" x2="300" y2="55" stroke="#b45309" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="205" cy="98" r="4.5" fill={INK} />
      <text x="290" y="28" className="hand-label" fontSize="14" fill={BRAND}>AD</text>
      <text x="270" y="55" className="hand-label" fontSize="14" fill="#b45309">SRAS</text>
      <text x="225" y="35" className="hand-label" fontSize="13" fill={INK}>LRAS</text>
      <text x="200" y="210" className="hand-label" fontSize="14" fill={INK}>Yp</text>
      <text x="150" y="205" className="hand-label" fontSize="15" fill={INK}>Output Y</text>
      <text x="4" y="16" className="hand-label" fontSize="15" fill={INK}>Preisniveau P</text>
    </svg>
  );
}

function PhillipsCurve() {
  return (
    <svg viewBox="0 0 380 200" className="w-full max-w-md" style={{ transform: "rotate(-0.2deg)" }}>
      <line x1="35" y1="170" x2="360" y2="170" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="170" x2="35" y2="20" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <path d="M55,40 C 120,90 160,140 330,160" fill="none" stroke={BRAND} strokeWidth="2.4" strokeLinecap="round" />
      <text x="240" y="120" className="hand-label" fontSize="14" fill={BRAND}>Phillipskurve</text>
      <text x="150" y="188" className="hand-label" fontSize="15" fill={INK}>Arbeitslosigkeit u</text>
      <text x="4" y="16" className="hand-label" fontSize="15" fill={INK}>Inflation π</text>
    </svg>
  );
}

function SolowDiagram() {
  return (
    <svg viewBox="0 0 380 220" className="w-full max-w-md" style={{ transform: "rotate(0.3deg)" }}>
      <line x1="35" y1="190" x2="360" y2="190" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="190" x2="35" y2="20" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="190" x2="320" y2="45" stroke="#b45309" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M35,190 C 130,80 220,45 330,32" fill="none" stroke={BRAND} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="222" y1="93" x2="222" y2="190" stroke={INK} strokeWidth="1.2" strokeDasharray="4 5" />
      <circle cx="222" cy="93" r="4.5" fill={INK} />
      <text x="330" y="30" className="hand-label" fontSize="13" fill={BRAND}>s·f(k)</text>
      <text x="325" y="45" className="hand-label" fontSize="13" fill="#b45309">(n+δ)k</text>
      <text x="212" y="210" className="hand-label" fontSize="14" fill={INK}>k*</text>
      <text x="150" y="205" className="hand-label" fontSize="15" fill={INK}>Kapital pro Kopf k</text>
    </svg>
  );
}

function NumberLine() {
  return (
    <svg viewBox="0 0 380 100" className="w-full max-w-md" style={{ transform: "rotate(-0.2deg)" }}>
      <line x1="20" y1="55" x2="360" y2="55" stroke={INK} strokeWidth="2" strokeLinecap="round" markerEnd="url(#nl-arrow)" markerStart="url(#nl-arrow-start)" />
      <defs>
        <marker id="nl-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={INK} />
        </marker>
        <marker id="nl-arrow-start" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse">
          <path d="M0,0 L8,4 L0,8 Z" fill={INK} />
        </marker>
      </defs>
      <line x1="140" y1="45" x2="140" y2="65" stroke={INK} strokeWidth="1.6" />
      <line x1="260" y1="45" x2="260" y2="65" stroke={INK} strokeWidth="1.6" />
      <line x1="140" y1="55" x2="260" y2="55" stroke={BRAND} strokeWidth="5" strokeLinecap="round" />
      <text x="132" y="35" className="hand-label" fontSize="15" fill={INK}>a</text>
      <text x="252" y="35" className="hand-label" fontSize="15" fill={INK}>b</text>
      <text x="180" y="88" className="hand-label" fontSize="14" fill={BRAND}>[a, b]</text>
    </svg>
  );
}

function SequenceConvergence() {
  const points = [
    [50, 30], [85, 145], [120, 60], [150, 118], [180, 85], [210, 105], [240, 92], [270, 102], [300, 96], [330, 100],
  ];
  return (
    <svg viewBox="0 0 380 180" className="w-full max-w-md" style={{ transform: "rotate(0.2deg)" }}>
      <line x1="30" y1="155" x2="360" y2="155" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="155" x2="30" y2="15" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="98" x2="360" y2="98" stroke={INK} strokeWidth="1.4" strokeDasharray="5 5" opacity="0.6" />
      <rect x="30" y="88" width="330" height="20" fill="#ede9fe" opacity="0.5" />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={BRAND} />
      ))}
      <text x="365" y="102" className="hand-label" fontSize="15" fill={INK}>a</text>
      <text x="150" y="172" className="hand-label" fontSize="15" fill={INK}>n</text>
      <text x="4" y="16" className="hand-label" fontSize="15" fill={INK}>aₙ</text>
    </svg>
  );
}

function UnitCircle() {
  return (
    <svg viewBox="0 0 260 260" className="w-full max-w-sm" style={{ transform: "rotate(-0.3deg)" }}>
      <line x1="20" y1="150" x2="240" y2="150" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="130" y1="260" x2="130" y2="30" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="130" cy="150" r="100" fill="none" stroke={BRAND} strokeWidth="2.2" />
      <line x1="130" y1="150" x2="200" y2="80" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="200" y1="80" x2="200" y2="150" stroke="#b45309" strokeWidth="2" strokeDasharray="4 5" />
      <line x1="130" y1="150" x2="200" y2="150" stroke="#b45309" strokeWidth="2" strokeDasharray="4 5" />
      <path d="M155,150 A 25,25 0 0 0 148,128" fill="none" stroke={INK} strokeWidth="1.4" />
      <text x="158" y="122" className="hand-label" fontSize="14" fill={INK}>θ</text>
      <text x="205" y="115" className="hand-label" fontSize="13" fill="#b45309">sin θ</text>
      <text x="155" y="168" className="hand-label" fontSize="13" fill="#b45309">cos θ</text>
    </svg>
  );
}

function GraphDiagram() {
  const nodes: [number, number, string][] = [
    [50, 100, "1"], [150, 40, "2"], [150, 160, "3"], [250, 40, "4"], [250, 160, "5"], [330, 100, "6"],
  ];
  const edges: [number, number][] = [[0, 1], [0, 2], [1, 2], [1, 3], [2, 4], [3, 5], [4, 5], [3, 4]];
  return (
    <svg viewBox="0 0 380 200" className="w-full max-w-md" style={{ transform: "rotate(0.2deg)" }}>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke={INK}
          strokeWidth="1.8"
        />
      ))}
      {nodes.map(([x, y, label], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="16" fill="#ede9fe" stroke={BRAND} strokeWidth="2.2" />
          <text x={x - 4} y={y + 5} className="hand-label" fontSize="14" fill={BRAND}>{label}</text>
        </g>
      ))}
    </svg>
  );
}

function BinaryTree() {
  const edges: [number, number, number, number][] = [
    [190, 35, 100, 95], [190, 35, 280, 95],
    [100, 95, 55, 155], [100, 95, 145, 155],
    [280, 95, 235, 155], [280, 95, 325, 155],
  ];
  const nodes: [number, number, string][] = [
    [190, 35, "M"], [100, 95, "C"], [280, 95, "P"], [55, 155, "B"], [145, 155, "F"], [235, 155, "N"], [325, 155, "R"],
  ];
  return (
    <svg viewBox="0 0 380 190" className="w-full max-w-md" style={{ transform: "rotate(-0.2deg)" }}>
      {edges.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={INK} strokeWidth="1.8" />
      ))}
      {nodes.map(([x, y, label], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="17" fill="#ede9fe" stroke={BRAND} strokeWidth="2.2" />
          <text x={x - 5} y={y + 5} className="hand-label" fontSize="15" fill={BRAND}>{label}</text>
        </g>
      ))}
    </svg>
  );
}

function UmlClassBox() {
  return (
    <svg viewBox="0 0 320 220" className="w-full max-w-sm" style={{ transform: "rotate(0.2deg)" }}>
      <rect x="40" y="20" width="150" height="52" fill="#ede9fe" stroke={BRAND} strokeWidth="2" />
      <line x1="40" y1="42" x2="190" y2="42" stroke={BRAND} strokeWidth="1.6" />
      <text x="80" y="35" className="hand-label" fontSize="14" fill={BRAND}>Fahrzeug</text>
      <text x="50" y="62" className="hand-label" fontSize="11" fill={INK}>+ getFarbe(): Color</text>

      <path d="M115,145 L115,90" stroke={INK} strokeWidth="1.8" />
      <path d="M105,105 L115,88 L125,105 Z" fill="white" stroke={INK} strokeWidth="1.8" />

      <rect x="30" y="145" width="150" height="60" fill="white" stroke={INK} strokeWidth="2" />
      <line x1="30" y1="167" x2="180" y2="167" stroke={INK} strokeWidth="1.4" />
      <line x1="30" y1="186" x2="180" y2="186" stroke={INK} strokeWidth="1.4" />
      <text x="65" y="160" className="hand-label" fontSize="13" fill={INK}>PKW</text>
      <text x="38" y="181" className="hand-label" fontSize="10.5" fill={INK}>− sitzplaetze: int</text>
      <text x="38" y="200" className="hand-label" fontSize="10.5" fill={INK}>+ getFarbe(): Color</text>

      <text x="215" y="55" className="hand-label" fontSize="12" fill={INK}>abstrakte Klasse</text>
      <text x="200" y="185" className="hand-label" fontSize="12" fill={INK}>erbt von Fahrzeug</text>
    </svg>
  );
}

function StateDiagram() {
  return (
    <svg viewBox="0 0 380 160" className="w-full max-w-md" style={{ transform: "rotate(-0.2deg)" }}>
      <circle cx="30" cy="80" r="7" fill={INK} />
      <line x1="37" y1="80" x2="85" y2="80" stroke={INK} strokeWidth="1.8" markerEnd="url(#sd-arrow)" />
      <defs>
        <marker id="sd-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={INK} />
        </marker>
      </defs>
      <rect x="90" y="52" width="90" height="56" rx="14" fill="#ede9fe" stroke={BRAND} strokeWidth="2.2" />
      <text x="112" y="86" className="hand-label" fontSize="14" fill={BRAND}>Gestoppt</text>

      <line x1="180" y1="65" x2="250" y2="65" stroke={INK} strokeWidth="1.8" markerEnd="url(#sd-arrow)" />
      <text x="185" y="58" className="hand-label" fontSize="11" fill={INK}>Play</text>
      <line x1="250" y1="100" x2="180" y2="100" stroke={INK} strokeWidth="1.8" markerEnd="url(#sd-arrow)" />
      <text x="190" y="116" className="hand-label" fontSize="11" fill={INK}>Pause</text>

      <rect x="255" y="52" width="100" height="56" rx="14" fill="#fef3c7" stroke="#b45309" strokeWidth="2.2" />
      <text x="270" y="86" className="hand-label" fontSize="14" fill="#b45309">Wiedergabe</text>
    </svg>
  );
}

function GradientLevelCurves() {
  return (
    <svg viewBox="0 0 380 220" className="w-full max-w-md" style={{ transform: "rotate(-0.2deg)" }}>
      <defs>
        <marker id="glc-arrow" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto">
          <path d="M0,0 L9,4.5 L0,9 Z" fill={BRAND} />
        </marker>
      </defs>
      <ellipse cx="190" cy="115" rx="40" ry="28" fill="none" stroke={INK} strokeWidth="1.6" />
      <ellipse cx="190" cy="115" rx="75" ry="52" fill="none" stroke={INK} strokeWidth="1.6" />
      <ellipse cx="190" cy="115" rx="110" ry="76" fill="none" stroke={INK} strokeWidth="1.6" />
      <circle cx="265" cy="115" r="4" fill="#b45309" />
      <line x1="265" y1="85" x2="265" y2="145" stroke="#b45309" strokeWidth="2" strokeDasharray="5 5" />
      <line x1="265" y1="115" x2="325" y2="115" stroke={BRAND} strokeWidth="2.4" strokeLinecap="round" markerEnd="url(#glc-arrow)" />
      <text x="270" y="78" className="hand-label" fontSize="13" fill="#b45309">Tangente an Höhenlinie</text>
      <text x="295" y="108" className="hand-label" fontSize="14" fill={BRAND}>∇f</text>
      <text x="150" y="30" className="hand-label" fontSize="13" fill={INK}>Höhenlinien von f</text>
    </svg>
  );
}

function SaddleSurface() {
  return (
    <svg viewBox="0 0 380 220" className="w-full max-w-md" style={{ transform: "rotate(0.2deg)" }}>
      <path d="M40,60 Q190,130 340,60" fill="none" stroke={BRAND} strokeWidth="2.2" />
      <path d="M40,160 Q190,90 340,160" fill="none" stroke="#b45309" strokeWidth="2.2" />
      <line x1="40" y1="110" x2="340" y2="110" stroke={INK} strokeWidth="1.2" strokeDasharray="4 5" opacity="0.5" />
      <circle cx="190" cy="110" r="5" fill={INK} />
      <text x="200" y="102" className="hand-label" fontSize="14" fill={INK}>Sattelpunkt</text>
      <text x="330" y="52" className="hand-label" fontSize="13" fill={BRAND}>steigt</text>
      <text x="330" y="178" className="hand-label" fontSize="13" fill="#b45309">fällt</text>
    </svg>
  );
}

function FreeBodyDiagram() {
  return (
    <svg viewBox="0 0 380 200" className="w-full max-w-md" style={{ transform: "rotate(-0.2deg)" }}>
      <defs>
        <marker id="fbd-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={BRAND} />
        </marker>
      </defs>
      {/* Balken */}
      <rect x="50" y="90" width="280" height="14" fill="#fef3c7" stroke={INK} strokeWidth="2" />
      {/* Festlager links (zweiwertig) */}
      <path d="M65,104 L45,134 L85,134 Z" fill="none" stroke={INK} strokeWidth="2" />
      <line x1="40" y1="134" x2="90" y2="134" stroke={INK} strokeWidth="2" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={45 + i * 11} y1="134" x2={35 + i * 11} y2="146" stroke={INK} strokeWidth="1.4" />
      ))}
      {/* Loslager rechts (einwertig) */}
      <path d="M290,104 L270,134 L310,134 Z" fill="none" stroke={INK} strokeWidth="2" />
      <circle cx="280" cy="140" r="4" fill="none" stroke={INK} strokeWidth="1.6" />
      <circle cx="300" cy="140" r="4" fill="none" stroke={INK} strokeWidth="1.6" />
      <line x1="270" y1="147" x2="310" y2="147" stroke={INK} strokeWidth="2" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={275 + i * 9} y1="147" x2={267 + i * 9} y2="158" stroke={INK} strokeWidth="1.4" />
      ))}
      {/* Äußere Kraft F */}
      <line x1="190" y1="35" x2="190" y2="88" stroke={BRAND} strokeWidth="2.6" markerEnd="url(#fbd-arrow)" />
      <text x="198" y="45" className="hand-label" fontSize="15" fill={BRAND}>F</text>
      {/* Reaktionskräfte am Festlager */}
      <line x1="65" y1="104" x2="65" y2="78" stroke="#b45309" strokeWidth="2.2" markerEnd="url(#fbd-arrow)" />
      <text x="40" y="72" className="hand-label" fontSize="13" fill="#b45309">Ay</text>
      <line x1="65" y1="104" x2="95" y2="104" stroke="#b45309" strokeWidth="2.2" markerEnd="url(#fbd-arrow)" />
      <text x="98" y="118" className="hand-label" fontSize="13" fill="#b45309">Ax</text>
      {/* Reaktionskraft am Loslager */}
      <line x1="295" y1="104" x2="295" y2="78" stroke="#b45309" strokeWidth="2.2" markerEnd="url(#fbd-arrow)" />
      <text x="300" y="72" className="hand-label" fontSize="13" fill="#b45309">By</text>
      <text x="150" y="185" className="hand-label" fontSize="14" fill={INK}>Freikörperbild: Lager durch Reaktionskräfte ersetzt</text>
    </svg>
  );
}

function TrussDiagram() {
  const A: [number, number] = [50, 150];
  const B: [number, number] = [150, 150];
  const C: [number, number] = [250, 150];
  const D: [number, number] = [100, 60];
  const E: [number, number] = [200, 60];
  return (
    <svg viewBox="0 0 320 200" className="w-full max-w-md" style={{ transform: "rotate(0.2deg)" }}>
      <defs>
        <marker id="truss-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={INK} />
        </marker>
      </defs>
      {/* Untergurt (Druckstab, gestaucht dargestellt) */}
      <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke="#b45309" strokeWidth="3.2" />
      <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke={BRAND} strokeWidth="2.2" />
      {/* Diagonalen/Obergurt */}
      <line x1={A[0]} y1={A[1]} x2={D[0]} y2={D[1]} stroke={BRAND} strokeWidth="2.2" />
      <line x1={D[0]} y1={D[1]} x2={E[0]} y2={E[1]} stroke={BRAND} strokeWidth="2.2" />
      <line x1={E[0]} y1={E[1]} x2={C[0]} y2={C[1]} stroke={BRAND} strokeWidth="2.2" />
      <line x1={D[0]} y1={D[1]} x2={B[0]} y2={B[1]} stroke={BRAND} strokeWidth="2.2" />
      <line x1={E[0]} y1={E[1]} x2={B[0]} y2={B[1]} stroke={BRAND} strokeWidth="2.2" />
      {/* Knoten */}
      {[A, B, C, D, E].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5.5" fill="#fffdf9" stroke={INK} strokeWidth="2" />
      ))}
      {/* Lager */}
      <path d={`M${A[0] - 14},${A[1] + 20} L${A[0]},${A[1]} L${A[0] + 14},${A[1] + 20} Z`} fill="none" stroke={INK} strokeWidth="2" />
      <line x1={A[0] - 18} y1={A[1] + 20} x2={A[0] + 18} y2={A[1] + 20} stroke={INK} strokeWidth="2" />
      <circle cx={C[0] - 6} cy={C[1] + 14} r="3.5" fill="none" stroke={INK} strokeWidth="1.4" />
      <circle cx={C[0] + 6} cy={C[1] + 14} r="3.5" fill="none" stroke={INK} strokeWidth="1.4" />
      <line x1={C[0] - 14} y1={C[1] + 20} x2={C[0] + 14} y2={C[1] + 20} stroke={INK} strokeWidth="2" />
      {/* äußere Kraft */}
      <line x1={E[0]} y1={E[1] - 40} x2={E[0]} y2={E[1] - 4} stroke={INK} strokeWidth="2.4" markerEnd="url(#truss-arrow)" />
      <text x={E[0] + 8} y={E[1] - 30} className="hand-label" fontSize="15" fill={INK}>F</text>
      <text x="55" y="130" className="hand-label" fontSize="12" fill="#b45309">Druckstab</text>
      <text x="205" y="130" className="hand-label" fontSize="12" fill={BRAND}>Zugstab</text>
    </svg>
  );
}

function ShearMomentDiagram() {
  return (
    <svg viewBox="0 0 380 260" className="w-full max-w-md" style={{ transform: "rotate(-0.2deg)" }}>
      {/* N(s) */}
      <line x1="30" y1="35" x2="360" y2="35" stroke={INK} strokeWidth="1.6" opacity="0.5" />
      <line x1="30" y1="60" x2="360" y2="60" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
      <text x="4" y="40" className="hand-label" fontSize="14" fill={INK}>N(s)</text>
      {/* Q(s): Sprung an Lastangriffspunkt */}
      <line x1="30" y1="105" x2="30" y2="105" stroke={INK} strokeWidth="0" />
      <path d="M30,120 L200,120 L200,150 L360,150" fill="none" stroke={BRAND} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="200" y1="120" x2="200" y2="150" stroke={BRAND} strokeWidth="1.4" strokeDasharray="3 4" />
      <line x1="30" y1="135" x2="360" y2="135" stroke={INK} strokeWidth="1.2" opacity="0.35" />
      <text x="4" y="125" className="hand-label" fontSize="14" fill={BRAND}>Q(s)</text>
      {/* M(s): Knick am Lastangriffspunkt */}
      <path d="M30,240 L200,175 L360,225" fill="none" stroke="#b45309" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="30" y1="240" x2="360" y2="240" stroke={INK} strokeWidth="1.2" opacity="0.35" />
      <text x="4" y="200" className="hand-label" fontSize="14" fill="#b45309">M(s)</text>
      <text x="150" y="255" className="hand-label" fontSize="13" fill={INK}>Sprung in Q, Knick in M unter Einzellast</text>
    </svg>
  );
}

function FrictionIncline() {
  return (
    <svg viewBox="0 0 380 220" className="w-full max-w-md" style={{ transform: "rotate(0.2deg)" }}>
      <defs>
        <marker id="fric-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={INK} />
        </marker>
      </defs>
      <path d="M30,190 L340,190 L340,60 Z" fill="#fef3c7" opacity="0.5" stroke={INK} strokeWidth="2" />
      <rect x="180" y="118" width="60" height="40" fill="#ede9fe" stroke={BRAND} strokeWidth="2.2" transform="rotate(-21 180 158)" />
      {/* Gewichtskraft */}
      <line x1="205" y1="150" x2="205" y2="200" stroke={INK} strokeWidth="2.2" markerEnd="url(#fric-arrow)" />
      <text x="210" y="195" className="hand-label" fontSize="13" fill={INK}>G</text>
      {/* Normalkraft */}
      <line x1="205" y1="150" x2="175" y2="105" stroke={BRAND} strokeWidth="2.2" markerEnd="url(#fric-arrow)" />
      <text x="150" y="100" className="hand-label" fontSize="13" fill={BRAND}>N</text>
      {/* Haftkraft (Kraftkegel) */}
      <line x1="205" y1="150" x2="255" y2="163" stroke="#b45309" strokeWidth="2.2" markerEnd="url(#fric-arrow)" />
      <text x="260" y="160" className="hand-label" fontSize="13" fill="#b45309">H</text>
      <path d="M225,140 A 30,30 0 0 1 245,150" fill="none" stroke={INK} strokeWidth="1.4" />
      <text x="238" y="128" className="hand-label" fontSize="12" fill={INK}>φ₀</text>
      <text x="40" y="205" className="hand-label" fontSize="13" fill={INK}>Schiefe Ebene mit Haftreibungskegel</text>
    </svg>
  );
}

function StressElement() {
  return (
    <svg viewBox="0 0 340 220" className="w-full max-w-md" style={{ transform: "rotate(-0.2deg)" }}>
      <defs>
        <marker id="stress-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={BRAND} />
        </marker>
      </defs>
      {/* Würfel (isometrisch angedeutet) */}
      <polygon points="90,150 220,150 250,110 120,110" fill="#ede9fe" opacity="0.5" stroke={INK} strokeWidth="2" />
      <polygon points="90,150 90,60 120,20 120,110" fill="#ede9fe" opacity="0.7" stroke={INK} strokeWidth="2" />
      <polygon points="90,60 220,60 250,20 120,20" fill="#fef3c7" opacity="0.6" stroke={INK} strokeWidth="2" />
      <line x1="220" y1="150" x2="220" y2="60" stroke={INK} strokeWidth="2" />
      <line x1="250" y1="110" x2="250" y2="20" stroke={INK} strokeWidth="2" />
      {/* Normalspannungen sigma_x auf rechter Fläche */}
      <line x1="220" y1="105" x2="270" y2="105" stroke={BRAND} strokeWidth="2.4" markerEnd="url(#stress-arrow)" />
      <text x="272" y="100" className="hand-label" fontSize="14" fill={BRAND}>σx</text>
      {/* sigma_y oben */}
      <line x1="170" y1="40" x2="170" y2="0" stroke={BRAND} strokeWidth="2.4" markerEnd="url(#stress-arrow)" />
      <text x="176" y="10" className="hand-label" fontSize="14" fill={BRAND}>σy</text>
      {/* tau_xy Schubspannung */}
      <line x1="220" y1="130" x2="220" y2="90" stroke="#b45309" strokeWidth="2.2" markerEnd="url(#stress-arrow)" />
      <text x="226" y="118" className="hand-label" fontSize="13" fill="#b45309">τxy</text>
      <text x="60" y="200" className="hand-label" fontSize="13" fill={INK}>Spannungszustand am Volumenelement</text>
    </svg>
  );
}

function BeamBending() {
  return (
    <svg viewBox="0 0 380 180" className="w-full max-w-md" style={{ transform: "rotate(-0.2deg)" }}>
      <defs>
        <marker id="bend-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={BRAND} />
        </marker>
      </defs>
      {/* unverformte Lage */}
      <line x1="30" y1="70" x2="350" y2="70" stroke={INK} strokeWidth="1.6" strokeDasharray="5 5" opacity="0.5" />
      {/* Biegelinie */}
      <path d="M30,70 C 130,70 150,140 190,140 C 230,140 250,70 350,70" fill="none" stroke={BRAND} strokeWidth="2.6" strokeLinecap="round" />
      {/* Lager */}
      <path d="M20,70 L30,70 L38,90 L22,90 Z" fill="none" stroke={INK} strokeWidth="2" />
      <line x1="15" y1="90" x2="45" y2="90" stroke={INK} strokeWidth="2" />
      <circle cx="342" cy="82" r="3.6" fill="none" stroke={INK} strokeWidth="1.4" />
      <path d="M340,70 L350,70 L358,90 L342,90 Z" fill="none" stroke={INK} strokeWidth="2" />
      <line x1="335" y1="90" x2="363" y2="90" stroke={INK} strokeWidth="2" />
      {/* Durchbiegung f */}
      <line x1="190" y1="70" x2="190" y2="140" stroke={INK} strokeWidth="1.4" strokeDasharray="3 4" />
      <line x1="200" y1="70" x2="200" y2="140" stroke={INK} strokeWidth="1" markerEnd="url(#bend-arrow)" />
      <text x="205" y="108" className="hand-label" fontSize="14" fill={INK}>f</text>
      <text x="130" y="30" className="hand-label" fontSize="14" fill={INK}>w(x): Biegelinie</text>
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
    "supply-demand": <SupplyDemand />,
    "budget-line": <BudgetLine />,
    "cost-curves": <CostCurves />,
    "monopoly-graph": <MonopolyGraph />,
    islm: <ISLM />,
    asad: <ASAD />,
    "phillips-curve": <PhillipsCurve />,
    "solow-diagram": <SolowDiagram />,
    "number-line": <NumberLine />,
    "sequence-convergence": <SequenceConvergence />,
    "unit-circle": <UnitCircle />,
    "graph-diagram": <GraphDiagram />,
    "binary-tree": <BinaryTree />,
    "uml-class-box": <UmlClassBox />,
    "state-diagram": <StateDiagram />,
    "gradient-level-curves": <GradientLevelCurves />,
    "saddle-surface": <SaddleSurface />,
    "free-body-diagram": <FreeBodyDiagram />,
    "truss-diagram": <TrussDiagram />,
    "shear-moment-diagram": <ShearMomentDiagram />,
    "friction-incline": <FrictionIncline />,
    "stress-element": <StressElement />,
    "beam-bending": <BeamBending />,
  };

  return <FigureFrame caption={caption}>{map[type]}</FigureFrame>;
}
