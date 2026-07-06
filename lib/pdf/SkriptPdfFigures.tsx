import { View, Svg, Circle, Line, Rect, Path, Text, StyleSheet } from "@react-pdf/renderer";
import type { FigureType } from "@/components/SkriptFigures";

const INK = "#44403c";
const BRAND = "#7c3aed";
const FONT = "Noto Sans";
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
    <View style={styles.frame}>
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

const ASPECTS: Record<FigureType, { viewBox: string; aspect: number }> = {
  boxplot: { viewBox: "0 0 420 160", aspect: 420 / 160 },
  histogram: { viewBox: "0 0 420 200", aspect: 420 / 200 },
  lorenz: { viewBox: "0 0 260 260", aspect: 1 },
  venn: { viewBox: "0 0 320 200", aspect: 320 / 200 },
  tree: { viewBox: "0 0 380 220", aspect: 380 / 220 },
  "distribution-function": { viewBox: "0 0 380 200", aspect: 380 / 200 },
  "normal-curve": { viewBox: "0 0 380 180", aspect: 380 / 180 },
  "binomial-bars": { viewBox: "0 0 400 170", aspect: 400 / 170 },
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
  };

  return (
    <Frame viewBox={viewBox} aspect={aspect} caption={caption}>
      {map[type]}
    </Frame>
  );
}
