import { Fragment } from "react";
import { View, Svg, Circle, Ellipse, Line, Rect, Path, Text, StyleSheet } from "@react-pdf/renderer";
import type { FigureType } from "@/components/SkriptFigures";

const INK = "#44403c";
const BRAND = "#7c3aed";
// Muss mit dem in SkriptPdfDocument.tsx registrierten Font.register-Namen
// übereinstimmen (dort auf "DejaVu Sans" umgestellt wegen fehlender
// Logik-/Mathe-Operator-Glyphen im vorherigen Noto-Sans-Subset).
const FONT = "DejaVu Sans";
const DISPLAY_WIDTH = 280;

const styles = StyleSheet.create({
  frame: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#e7e2d8",
    borderRadius: 6,
    backgroundColor: "#fffdf9",
    padding: 10,
    alignItems: "center",
  },
  caption: {
    marginTop: 6,
    fontSize: 9.5,
    color: "#78716c",
    textAlign: "center",
    fontFamily: FONT,
  },
});

function label(size: number) {
  return { fontSize: size, fontFamily: FONT };
}

function Frame({
  viewBox,
  aspect,
  caption,
  children,
}: {
  viewBox: string;
  aspect: number;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.frame} wrap={false}>
      <Svg width={DISPLAY_WIDTH} height={DISPLAY_WIDTH / aspect} viewBox={viewBox}>
        {children}
      </Svg>
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
}

function Boxplot() {
  return (
    <>
      <Line x1={30} y1={80} x2={60} y2={79} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={60} y1={55} x2={60} y2={105} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Rect x={60} y={45} width={110} height={70} fill="#ede9fe" stroke={BRAND} strokeWidth={2.2} />
      <Line x1={122} y1={46} x2={120} y2={114} stroke={BRAND} strokeWidth={2.5} strokeLinecap="round" />
      <Line x1={170} y1={80} x2={330} y2={81} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={330} y1={58} x2={331} y2={103} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Circle cx={365} cy={80} r={4} fill="none" stroke={INK} strokeWidth={1.8} />
      <Text x={30} y={135} fill={INK} style={label(15)}>Min</Text>
      <Text x={55} y={30} fill={BRAND} style={label(15)}>Q1</Text>
      <Text x={95} y={135} fill={BRAND} style={label(15)}>Median</Text>
      <Text x={160} y={30} fill={BRAND} style={label(15)}>Q3</Text>
      <Text x={312} y={135} fill={INK} style={label(15)}>Max</Text>
      <Text x={345} y={60} fill={INK} style={label(13)}>Ausreißer</Text>
    </>
  );
}

function Histogram() {
  const bars = [22, 55, 90, 120, 78, 40, 15];
  return (
    <>
      <Line x1={40} y1={160} x2={390} y2={160} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={40} y1={160} x2={40} y2={20} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      {bars.map((h, i) => (
        <Rect key={i} x={55 + i * 46} y={160 - h} width={36} height={h} fill="#ddd6fe" stroke={BRAND} strokeWidth={1.8} />
      ))}
      <Text x={140} y={188} fill={INK} style={label(15)}>Klassen (x)</Text>
      <Text x={6} y={20} fill={INK} style={label(13)}>Häufigkeitsdichte</Text>
    </>
  );
}

function Lorenz() {
  return (
    <>
      <Line x1={30} y1={220} x2={230} y2={220} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={30} y1={220} x2={30} y2={20} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={30} y1={220} x2={230} y2={20} stroke={INK} strokeWidth={1.6} strokeDasharray="5,5" />
      <Path d="M30,220 C 90,215 150,190 230,20" fill="none" stroke={BRAND} strokeWidth={2.6} strokeLinecap="round" />
      <Path d="M30,220 C 90,215 150,190 230,20 L230,220 Z" fill="#ede9fe" fillOpacity={0.6} />
      <Text x={20} y={14} fill={INK} style={label(11)}>Einkommensanteil</Text>
      <Text x={35} y={240} fill={INK} style={label(12)}>Bevölkerungsanteil</Text>
      <Text x={150} y={70} fill={BRAND} style={label(14)}>Lorenzkurve</Text>
      <Text x={140} y={130} fill={INK} style={label(12)}>Gleichverteilung</Text>
    </>
  );
}

function Venn() {
  return (
    <>
      <Circle cx={130} cy={100} r={70} fill="#ede9fe" fillOpacity={0.7} stroke={BRAND} strokeWidth={2.2} />
      <Circle cx={195} cy={100} r={70} fill="#fef3c7" fillOpacity={0.55} stroke="#b45309" strokeWidth={2.2} />
      <Text x={90} y={60} fill={BRAND} style={label(20)}>A</Text>
      <Text x={225} y={60} fill="#b45309" style={label(20)}>B</Text>
      <Text x={150} y={105} fill={INK} style={label(15)}>A∩B</Text>
      <Text x={185} y={175} fill={INK} style={label(12)}>Schnittmenge</Text>
    </>
  );
}

function Tree() {
  return (
    <>
      <Circle cx={40} cy={110} r={5} fill={INK} />
      <Line x1={40} y1={110} x2={180} y2={50} stroke={INK} strokeWidth={1.8} />
      <Line x1={40} y1={110} x2={180} y2={170} stroke={INK} strokeWidth={1.8} />
      <Text x={90} y={70} fill={BRAND} style={label(15)}>P(B₁)</Text>
      <Text x={90} y={150} fill={BRAND} style={label(15)}>P(B₂)</Text>

      <Circle cx={180} cy={50} r={4} fill={INK} />
      <Circle cx={180} cy={170} r={4} fill={INK} />

      <Line x1={180} y1={50} x2={330} y2={20} stroke={INK} strokeWidth={1.6} />
      <Line x1={180} y1={50} x2={330} y2={75} stroke={INK} strokeWidth={1.6} />
      <Line x1={180} y1={170} x2={330} y2={145} stroke={INK} strokeWidth={1.6} />
      <Line x1={180} y1={170} x2={330} y2={200} stroke={INK} strokeWidth={1.6} />

      <Text x={220} y={30} fill={INK} style={label(13)}>P(A|B₁)</Text>
      <Text x={218} y={95} fill={INK} style={label(13)}>P(Ā|B₁)</Text>
      <Text x={220} y={140} fill={INK} style={label(13)}>P(A|B₂)</Text>
      <Text x={218} y={215} fill={INK} style={label(13)}>P(Ā|B₂)</Text>
    </>
  );
}

function DistributionFunction() {
  const points: [number, number][] = [
    [100, 170], [100, 130], [170, 130], [170, 95], [230, 95], [230, 60], [300, 60], [300, 30],
  ];
  return (
    <>
      <Line x1={35} y1={170} x2={360} y2={170} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={35} y1={170} x2={35} y2={15} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={35} y1={30} x2={360} y2={30} stroke={INK} strokeWidth={1.2} strokeDasharray="4,5" opacity={0.5} />
      <Path
        d="M35,170 L100,170 L100,130 L170,130 L170,95 L230,95 L230,60 L300,60 L300,30 L360,30"
        fill="none"
        stroke={BRAND}
        strokeWidth={2.6}
        strokeLinecap="round"
      />
      {points.map(([x, y], i) => (
        <Circle key={i} cx={x} cy={y} r={3.2} fill="white" stroke={BRAND} strokeWidth={1.8} />
      ))}
      <Text x={325} y={20} fill={INK} style={label(13)}>1</Text>
      <Text x={175} y={195} fill={INK} style={label(15)}>x</Text>
      <Text x={4} y={20} fill={INK} style={label(15)}>F(x)</Text>
    </>
  );
}

function NormalCurve() {
  return (
    <>
      <Line x1={20} y1={150} x2={360} y2={150} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Path
        d="M20,150 C 80,150 110,30 190,30 C 270,30 300,150 360,150"
        fill="none"
        stroke={BRAND}
        strokeWidth={2.6}
        strokeLinecap="round"
      />
      <Line x1={190} y1={150} x2={190} y2={32} stroke={INK} strokeWidth={1.4} strokeDasharray="5,5" />
      <Path d="M120,150 C130,110 150,45 190,32 C 230,45 250,110 260,150 Z" fill="#ede9fe" fillOpacity={0.6} />
      <Text x={178} y={170} fill={INK} style={label(16)}>μ</Text>
      <Text x={218} y={70} fill={BRAND} style={label(14)}>σ = Streuung</Text>
    </>
  );
}

function BinomialBars() {
  const heights = [8, 25, 55, 90, 110, 90, 55, 25, 8];
  return (
    <>
      <Line x1={25} y1={140} x2={380} y2={140} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      {heights.map((h, i) => (
        <Rect key={i} x={35 + i * 39} y={140 - h} width={28} height={h} fill="#ddd6fe" stroke={BRAND} strokeWidth={1.6} />
      ))}
      <Text x={155} y={162} fill={INK} style={label(14)}>Anzahl Erfolge k</Text>
    </>
  );
}

function SupplyDemand() {
  return (
    <>
      <Line x1={35} y1={190} x2={360} y2={190} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={35} y1={190} x2={35} y2={20} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={55} y1={30} x2={330} y2={175} stroke={BRAND} strokeWidth={2.4} strokeLinecap="round" />
      <Line x1={55} y1={175} x2={330} y2={30} stroke="#b45309" strokeWidth={2.4} strokeLinecap="round" />
      <Line x1={192} y1={102} x2={192} y2={190} stroke={INK} strokeWidth={1.2} strokeDasharray="4,5" />
      <Line x1={35} y1={102} x2={192} y2={102} stroke={INK} strokeWidth={1.2} strokeDasharray="4,5" />
      <Circle cx={192} cy={102} r={4.5} fill={INK} />
      <Text x={280} y={24} fill={BRAND} style={label(13)}>Nachfrage</Text>
      <Text x={260} y={44} fill="#b45309" style={label(13)}>Angebot</Text>
      <Text x={14} y={98} fill={INK} style={label(13)}>P*</Text>
      <Text x={185} y={210} fill={INK} style={label(13)}>Q*</Text>
      <Text x={150} y={205} fill={INK} style={label(14)}>Menge</Text>
      <Text x={4} y={16} fill={INK} style={label(14)}>Preis</Text>
    </>
  );
}

function BudgetLine() {
  return (
    <>
      <Line x1={35} y1={190} x2={360} y2={190} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={35} y1={190} x2={35} y2={20} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={35} y1={30} x2={300} y2={190} stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
      <Path d="M90,190 C 110,90 190,55 320,60" fill="none" stroke={BRAND} strokeWidth={2.4} strokeLinecap="round" />
      <Circle cx={197} cy={112} r={4.5} fill={BRAND} />
      <Text x={205} y={108} fill={BRAND} style={label(13)}>E*</Text>
      <Text x={215} y={52} fill={BRAND} style={label(12)}>Indifferenzkurve</Text>
      <Text x={215} y={183} fill={INK} style={label(12)}>Budgetgerade</Text>
      <Text x={150} y={205} fill={INK} style={label(14)}>Gut 1</Text>
      <Text x={4} y={16} fill={INK} style={label(14)}>Gut 2</Text>
    </>
  );
}

function CostCurves() {
  return (
    <>
      <Line x1={35} y1={185} x2={360} y2={185} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={35} y1={185} x2={35} y2={20} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Path d="M70,150 C 130,80 260,80 330,150" fill="none" stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Path d="M70,175 C 140,110 250,110 330,175" fill="none" stroke={BRAND} strokeWidth={2.2} strokeLinecap="round" />
      <Path d="M110,185 C 150,60 230,60 300,185" fill="none" stroke="#b45309" strokeWidth={2.2} strokeLinecap="round" />
      <Text x={335} y={150} fill={INK} style={label(13)}>AC</Text>
      <Text x={335} y={178} fill={BRAND} style={label(13)}>AVC</Text>
      <Text x={280} y={65} fill="#b45309" style={label(13)}>MC</Text>
      <Text x={160} y={205} fill={INK} style={label(14)}>Menge</Text>
      <Text x={4} y={16} fill={INK} style={label(13)}>Kosten/Stück</Text>
    </>
  );
}

function MonopolyGraph() {
  return (
    <>
      <Line x1={35} y1={190} x2={360} y2={190} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={35} y1={190} x2={35} y2={20} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={55} y1={35} x2={330} y2={175} stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
      <Line x1={55} y1={35} x2={200} y2={175} stroke={BRAND} strokeWidth={2.2} strokeLinecap="round" />
      <Path d="M70,175 C 140,110 250,110 320,175" fill="none" stroke="#b45309" strokeWidth={2.2} strokeLinecap="round" />
      <Line x1={150} y1={112} x2={150} y2={190} stroke={INK} strokeWidth={1.2} strokeDasharray="4,5" />
      <Line x1={35} y1={112} x2={150} y2={112} stroke={INK} strokeWidth={1.2} strokeDasharray="4,5" />
      <Line x1={35} y1={66} x2={150} y2={66} stroke={INK} strokeWidth={1.2} strokeDasharray="4,5" />
      <Circle cx={150} cy={112} r={4} fill="#b45309" />
      <Text x={275} y={30} fill={INK} style={label(11)}>Nachfrage (AR)</Text>
      <Text x={205} y={70} fill={BRAND} style={label(11)}>Grenzerlös (MR)</Text>
      <Text x={280} y={150} fill="#b45309" style={label(12)}>MC</Text>
      <Text x={10} y={62} fill={INK} style={label(12)}>Pm</Text>
      <Text x={140} y={205} fill={INK} style={label(12)}>Qm</Text>
    </>
  );
}

function ISLM() {
  return (
    <>
      <Line x1={35} y1={190} x2={360} y2={190} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={35} y1={190} x2={35} y2={20} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={55} y1={30} x2={330} y2={175} stroke={BRAND} strokeWidth={2.4} strokeLinecap="round" />
      <Path d="M55,175 C 120,175 200,60 330,35" fill="none" stroke="#b45309" strokeWidth={2.4} strokeLinecap="round" />
      <Line x1={196} y1={94} x2={196} y2={190} stroke={INK} strokeWidth={1.2} strokeDasharray="4,5" />
      <Line x1={35} y1={94} x2={196} y2={94} stroke={INK} strokeWidth={1.2} strokeDasharray="4,5" />
      <Circle cx={196} cy={94} r={4.5} fill={INK} />
      <Text x={300} y={24} fill={BRAND} style={label(14)}>IS</Text>
      <Text x={300} y={44} fill="#b45309" style={label(14)}>LM</Text>
      <Text x={14} y={90} fill={INK} style={label(13)}>i*</Text>
      <Text x={190} y={210} fill={INK} style={label(13)}>Y*</Text>
      <Text x={150} y={205} fill={INK} style={label(13)}>Y (Einkommen)</Text>
      <Text x={4} y={16} fill={INK} style={label(14)}>Zins i</Text>
    </>
  );
}

function ASAD() {
  return (
    <>
      <Line x1={35} y1={190} x2={360} y2={190} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={35} y1={190} x2={35} y2={20} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={220} y1={190} x2={220} y2={30} stroke={INK} strokeWidth={1.8} strokeDasharray="3,5" />
      <Line x1={55} y1={35} x2={330} y2={175} stroke={BRAND} strokeWidth={2.4} strokeLinecap="round" />
      <Line x1={80} y1={175} x2={300} y2={55} stroke="#b45309" strokeWidth={2.4} strokeLinecap="round" />
      <Circle cx={205} cy={98} r={4.5} fill={INK} />
      <Text x={280} y={28} fill={BRAND} style={label(13)}>AD</Text>
      <Text x={260} y={52} fill="#b45309" style={label(13)}>SRAS</Text>
      <Text x={225} y={35} fill={INK} style={label(12)}>LRAS</Text>
      <Text x={200} y={210} fill={INK} style={label(13)}>Yp</Text>
      <Text x={150} y={205} fill={INK} style={label(13)}>Output Y</Text>
      <Text x={4} y={16} fill={INK} style={label(13)}>Preisniveau P</Text>
    </>
  );
}

function PhillipsCurve() {
  return (
    <>
      <Line x1={35} y1={170} x2={360} y2={170} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={35} y1={170} x2={35} y2={20} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Path d="M55,40 C 120,90 160,140 330,160" fill="none" stroke={BRAND} strokeWidth={2.4} strokeLinecap="round" />
      <Text x={225} y={115} fill={BRAND} style={label(13)}>Phillipskurve</Text>
      <Text x={150} y={188} fill={INK} style={label(13)}>Arbeitslosigkeit u</Text>
      <Text x={4} y={16} fill={INK} style={label(13)}>Inflation π</Text>
    </>
  );
}

function SolowDiagram() {
  return (
    <>
      <Line x1={35} y1={190} x2={360} y2={190} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={35} y1={190} x2={35} y2={20} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={35} y1={190} x2={320} y2={45} stroke="#b45309" strokeWidth={2.2} strokeLinecap="round" />
      <Path d="M35,190 C 130,80 220,45 330,32" fill="none" stroke={BRAND} strokeWidth={2.4} strokeLinecap="round" />
      <Line x1={222} y1={93} x2={222} y2={190} stroke={INK} strokeWidth={1.2} strokeDasharray="4,5" />
      <Circle cx={222} cy={93} r={4.5} fill={INK} />
      <Text x={310} y={28} fill={BRAND} style={label(12)}>s·f(k)</Text>
      <Text x={300} y={45} fill="#b45309" style={label(12)}>(n+δ)k</Text>
      <Text x={212} y={210} fill={INK} style={label(13)}>k*</Text>
      <Text x={150} y={205} fill={INK} style={label(13)}>Kapital pro Kopf k</Text>
    </>
  );
}

function NumberLine() {
  return (
    <>
      <Line x1={20} y1={55} x2={360} y2={55} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={140} y1={45} x2={140} y2={65} stroke={INK} strokeWidth={1.6} />
      <Line x1={260} y1={45} x2={260} y2={65} stroke={INK} strokeWidth={1.6} />
      <Line x1={140} y1={55} x2={260} y2={55} stroke={BRAND} strokeWidth={5} strokeLinecap="round" />
      <Text x={132} y={35} fill={INK} style={label(14)}>a</Text>
      <Text x={252} y={35} fill={INK} style={label(14)}>b</Text>
      <Text x={175} y={88} fill={BRAND} style={label(13)}>[a, b]</Text>
    </>
  );
}

function SequenceConvergence() {
  const points: [number, number][] = [
    [50, 30], [85, 145], [120, 60], [150, 118], [180, 85], [210, 105], [240, 92], [270, 102], [300, 96], [330, 100],
  ];
  return (
    <>
      <Line x1={30} y1={155} x2={360} y2={155} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={30} y1={155} x2={30} y2={15} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Line x1={30} y1={98} x2={360} y2={98} stroke={INK} strokeWidth={1.4} strokeDasharray="5,5" opacity={0.6} />
      <Rect x={30} y={88} width={330} height={20} fill="#ede9fe" fillOpacity={0.5} />
      {points.map(([x, y], i) => (
        <Circle key={i} cx={x} cy={y} r={4} fill={BRAND} />
      ))}
      <Text x={340} y={102} fill={INK} style={label(14)}>a</Text>
      <Text x={150} y={172} fill={INK} style={label(14)}>n</Text>
      <Text x={4} y={16} fill={INK} style={label(13)}>aₙ</Text>
    </>
  );
}

function UnitCircle() {
  return (
    <>
      <Line x1={20} y1={150} x2={240} y2={150} stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      <Line x1={130} y1={260} x2={130} y2={30} stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      <Circle cx={130} cy={150} r={100} fill="none" stroke={BRAND} strokeWidth={2.2} />
      <Line x1={130} y1={150} x2={200} y2={80} stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
      <Line x1={200} y1={80} x2={200} y2={150} stroke="#b45309" strokeWidth={2} strokeDasharray="4,5" />
      <Line x1={130} y1={150} x2={200} y2={150} stroke="#b45309" strokeWidth={2} strokeDasharray="4,5" />
      <Text x={158} y={122} fill={INK} style={label(13)}>θ</Text>
      <Text x={205} y={115} fill="#b45309" style={label(12)}>sin θ</Text>
      <Text x={150} y={168} fill="#b45309" style={label(12)}>cos θ</Text>
    </>
  );
}

function GraphDiagram() {
  const nodes: [number, number, string][] = [
    [50, 100, "1"], [150, 40, "2"], [150, 160, "3"], [250, 40, "4"], [250, 160, "5"], [330, 100, "6"],
  ];
  const edges: [number, number][] = [[0, 1], [0, 2], [1, 2], [1, 3], [2, 4], [3, 5], [4, 5], [3, 4]];
  return (
    <>
      {edges.map(([a, b], i) => (
        <Line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={INK} strokeWidth={1.8} />
      ))}
      {nodes.map(([x, y, txt], i) => (
        <Fragment key={i}>
          <Circle cx={x} cy={y} r={16} fill="#ede9fe" stroke={BRAND} strokeWidth={2.2} />
          <Text x={x - 4} y={y + 5} fill={BRAND} style={label(13)}>{txt}</Text>
        </Fragment>
      ))}
    </>
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
    <>
      {edges.map(([x1, y1, x2, y2], i) => (
        <Line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={INK} strokeWidth={1.8} />
      ))}
      {nodes.map(([x, y, txt], i) => (
        <Fragment key={i}>
          <Circle cx={x} cy={y} r={17} fill="#ede9fe" stroke={BRAND} strokeWidth={2.2} />
          <Text x={x - 5} y={y + 5} fill={BRAND} style={label(14)}>{txt}</Text>
        </Fragment>
      ))}
    </>
  );
}

function UmlClassBox() {
  return (
    <>
      <Rect x={40} y={20} width={150} height={52} fill="#ede9fe" stroke={BRAND} strokeWidth={2} />
      <Line x1={40} y1={42} x2={190} y2={42} stroke={BRAND} strokeWidth={1.6} />
      <Text x={78} y={35} fill={BRAND} style={label(13)}>Fahrzeug</Text>
      <Text x={50} y={62} fill={INK} style={label(10)}>+ getFarbe(): Color</Text>

      <Path d="M115,145 L115,90" stroke={INK} strokeWidth={1.8} fill="none" />
      <Path d="M105,105 L115,88 L125,105 Z" fill="white" stroke={INK} strokeWidth={1.8} />

      <Rect x={30} y={145} width={150} height={60} fill="white" stroke={INK} strokeWidth={2} />
      <Line x1={30} y1={167} x2={180} y2={167} stroke={INK} strokeWidth={1.4} />
      <Line x1={30} y1={186} x2={180} y2={186} stroke={INK} strokeWidth={1.4} />
      <Text x={62} y={160} fill={INK} style={label(12)}>PKW</Text>
      <Text x={36} y={181} fill={INK} style={label(9.5)}>− sitzplaetze: int</Text>
      <Text x={36} y={200} fill={INK} style={label(9.5)}>+ getFarbe(): Color</Text>

      <Text x={210} y={55} fill={INK} style={label(11)}>abstrakte Klasse</Text>
      <Text x={198} y={185} fill={INK} style={label(11)}>erbt von Fahrzeug</Text>
    </>
  );
}

function StateDiagram() {
  return (
    <>
      <Circle cx={30} cy={80} r={7} fill={INK} />
      <Line x1={37} y1={80} x2={85} y2={80} stroke={INK} strokeWidth={1.8} />
      <Path d="M78,74 L88,80 L78,86 Z" fill={INK} />
      <Rect x={90} y={52} width={90} height={56} rx={14} fill="#ede9fe" stroke={BRAND} strokeWidth={2.2} />
      <Text x={108} y={86} fill={BRAND} style={label(13)}>Gestoppt</Text>

      <Line x1={180} y1={65} x2={250} y2={65} stroke={INK} strokeWidth={1.8} />
      <Path d="M243,60 L253,65 L243,70 Z" fill={INK} />
      <Text x={185} y={58} fill={INK} style={label(10)}>Play</Text>
      <Line x1={250} y1={100} x2={180} y2={100} stroke={INK} strokeWidth={1.8} />
      <Path d="M187,95 L177,100 L187,105 Z" fill={INK} />
      <Text x={190} y={116} fill={INK} style={label(10)}>Pause</Text>

      <Rect x={255} y={52} width={100} height={56} rx={14} fill="#fef3c7" stroke="#b45309" strokeWidth={2.2} />
      <Text x={268} y={86} fill="#b45309" style={label(13)}>Wiedergabe</Text>
    </>
  );
}

function GradientLevelCurves() {
  return (
    <>
      <Ellipse cx={190} cy={115} rx={40} ry={28} fill="none" stroke={INK} strokeWidth={1.6} />
      <Ellipse cx={190} cy={115} rx={75} ry={52} fill="none" stroke={INK} strokeWidth={1.6} />
      <Ellipse cx={190} cy={115} rx={110} ry={76} fill="none" stroke={INK} strokeWidth={1.6} />
      <Circle cx={265} cy={115} r={4} fill="#b45309" />
      <Line x1={265} y1={85} x2={265} y2={145} stroke="#b45309" strokeWidth={2} strokeDasharray="5 5" />
      <Line x1={265} y1={115} x2={325} y2={115} stroke={BRAND} strokeWidth={2.4} strokeLinecap="round" />
      <Path d="M320,110 L330,115 L320,120 Z" fill={BRAND} />
      <Text x={266} y={80} fill="#b45309" style={label(10)}>Tangente an Höhenlinie</Text>
      <Text x={296} y={108} fill={BRAND} style={label(12)}>∇f</Text>
      <Text x={150} y={28} fill={INK} style={label(11)}>Höhenlinien von f</Text>
    </>
  );
}

function SaddleSurface() {
  return (
    <>
      <Path d="M40,60 Q190,130 340,60" fill="none" stroke={BRAND} strokeWidth={2.2} />
      <Path d="M40,160 Q190,90 340,160" fill="none" stroke="#b45309" strokeWidth={2.2} />
      <Line x1={40} y1={110} x2={340} y2={110} stroke={INK} strokeWidth={1.2} strokeDasharray="4 5" opacity={0.5} />
      <Circle cx={190} cy={110} r={5} fill={INK} />
      <Text x={200} y={104} fill={INK} style={label(12)}>Sattelpunkt</Text>
      <Text x={330} y={50} fill={BRAND} style={label(11)}>steigt</Text>
      <Text x={330} y={178} fill="#b45309" style={label(11)}>fällt</Text>
    </>
  );
}

const ASPECTS: Record<FigureType, { viewBox: string; aspect: number }> = {
  boxplot: { viewBox: "0 0 420 160", aspect: 420 / 160 },
  histogram: { viewBox: "0 0 420 200", aspect: 420 / 200 },
  lorenz: { viewBox: "0 0 260 260", aspect: 1 },
  venn: { viewBox: "0 0 320 200", aspect: 320 / 200 },
  tree: { viewBox: "0 0 380 220", aspect: 380 / 220 },
  "distribution-function": { viewBox: "0 0 380 200", aspect: 380 / 200 },
  "normal-curve": { viewBox: "0 0 380 180", aspect: 380 / 180 },
  "binomial-bars": { viewBox: "0 0 400 170", aspect: 400 / 170 },
  "supply-demand": { viewBox: "0 0 380 220", aspect: 380 / 220 },
  "budget-line": { viewBox: "0 0 380 220", aspect: 380 / 220 },
  "cost-curves": { viewBox: "0 0 380 210", aspect: 380 / 210 },
  "monopoly-graph": { viewBox: "0 0 380 220", aspect: 380 / 220 },
  islm: { viewBox: "0 0 380 220", aspect: 380 / 220 },
  asad: { viewBox: "0 0 380 220", aspect: 380 / 220 },
  "phillips-curve": { viewBox: "0 0 380 200", aspect: 380 / 200 },
  "solow-diagram": { viewBox: "0 0 380 220", aspect: 380 / 220 },
  "number-line": { viewBox: "0 0 380 100", aspect: 380 / 100 },
  "sequence-convergence": { viewBox: "0 0 380 180", aspect: 380 / 180 },
  "unit-circle": { viewBox: "0 0 260 260", aspect: 1 },
  "graph-diagram": { viewBox: "0 0 380 200", aspect: 380 / 200 },
  "binary-tree": { viewBox: "0 0 380 190", aspect: 380 / 190 },
  "uml-class-box": { viewBox: "0 0 320 220", aspect: 320 / 220 },
  "state-diagram": { viewBox: "0 0 380 160", aspect: 380 / 160 },
  "gradient-level-curves": { viewBox: "0 0 380 220", aspect: 380 / 220 },
  "saddle-surface": { viewBox: "0 0 380 220", aspect: 380 / 220 },
};

export default function PdfFigure({ type, caption }: { type: FigureType; caption: string }) {
  const { viewBox, aspect } = ASPECTS[type];
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
  };

  return (
    <Frame viewBox={viewBox} aspect={aspect} caption={caption}>
      {map[type]}
    </Frame>
  );
}
