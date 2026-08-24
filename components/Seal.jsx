export default function Seal({ className = "seal" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="none" stroke="#b6913f" strokeWidth="2" />
      <circle cx="32" cy="32" r="24.5" fill="none" stroke="#b6913f" strokeWidth="1" />
      <g stroke="#b6913f" strokeWidth="2" fill="none" strokeLinecap="round">
        <line x1="32" y1="17" x2="32" y2="44" />
        <line x1="20" y1="23" x2="44" y2="23" />
        <path d="M20 23 l-5 10 a6 6 0 0 0 10 0 z" />
        <path d="M44 23 l-5 10 a6 6 0 0 0 10 0 z" />
        <line x1="25" y1="46" x2="39" y2="46" />
      </g>
    </svg>
  );
}
