export default function Stars({
  value,
  size = "text-base",
}: {
  value: number;
  size?: string;
}) {
  const rounded = Math.round(value);
  return (
    <span className={size} aria-label={`${value} von 5 Sternen`}>
      <span className="text-amber-500">{"★".repeat(rounded)}</span>
      <span className="text-ink-200">{"★".repeat(5 - rounded)}</span>
    </span>
  );
}
