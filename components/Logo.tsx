import Link from "next/link";

export default function Logo({
  withWordmark = true,
  className = "",
  size = 36,
}: {
  withWordmark?: boolean;
  className?: string;
  size?: number;
}) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 font-bold text-ink-900 no-underline ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={withWordmark}
        role={withWordmark ? undefined : "img"}
        aria-label={withWordmark ? undefined : "Lumo Learn"}
      >
        <circle cx="32" cy="32" r="9" fill="#6D46E0" />
        <g stroke="#7C5CFF" strokeWidth={4} strokeLinecap="round">
          <line x1="32" y1="4" x2="32" y2="15" />
          <line x1="32" y1="49" x2="32" y2="60" />
          <line x1="4" y1="32" x2="15" y2="32" />
          <line x1="49" y1="32" x2="60" y2="32" />
          <line x1="12" y1="12" x2="20" y2="20" />
          <line x1="44" y1="44" x2="52" y2="52" />
          <line x1="52" y1="12" x2="44" y2="20" />
          <line x1="20" y1="44" x2="12" y2="52" />
        </g>
      </svg>
      {withWordmark && (
        <span className="font-logo text-[26px] font-semibold tracking-tight text-ink-900">
          Lumo
        </span>
      )}
    </Link>
  );
}
