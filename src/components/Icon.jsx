// Monoline drafting icon set. Thin strokes, no fill — currentColor driven.
// Replaces every emoji in the app. Add a new icon by adding a key to PATHS.
const PATHS = {
  // --- Method families ---
  search: <><circle cx="12" cy="12" r="8.5" /><path d="M12 6.5 14.2 12 12 17.5 9.8 12Z" /><circle cx="12" cy="12" r="0.6" /></>,
  optimization: <><path d="M4 8h16M4 16h16" /><circle cx="9" cy="8" r="2.1" /><circle cx="15" cy="16" r="2.1" /></>,
  learning: <><path d="M4 4v16h16" /><path d="M6.5 15.5 10 12l3 2 5-6" /><circle cx="18" cy="8" r="0.7" /></>,
  deep: <><path d="M12 3 21 7.5 12 12 3 7.5Z" /><path d="M3 12 12 16.5 21 12" /><path d="M3 16.5 12 21 21 16.5" /></>,
  llm: <><path d="M4 5h16v11h-9l-4 3v-3H4Z" /><path d="M8 9h8M8 12.5h5" /></>,
  production: <><path d="M3 20.5h18" /><path d="M5 20.5v-8l5 3v-3l5 3V7l4 2v11.5" /><path d="M8.5 20.5v-3M13 20.5v-3" /></>,

  // --- Risks ---
  cost: <><path d="M4 4h7.5L20 12.5 12.5 20 4 11.5Z" /><circle cx="8" cy="8" r="1.4" /></>,
  bias: <><path d="M12 3.5v17M5.5 20.5h13M6.5 7.5h11" /><path d="M6.5 7.5 4 12.5a2.5 2.5 0 0 0 5 0Z" /><path d="M17.5 7.5 20 12.5a2.5 2.5 0 0 1-5 0Z" /></>,
  hallucination: <><path d="M12 3.5a8.5 8.5 0 1 0 5.5 15" strokeDasharray="1.6 2.4" /><path d="M9.5 11h.01M14.5 11h.01" /><path d="M9.5 15c1.6-1.2 3.4-1.2 5 0" /></>,
  privacy: <><path d="M12 3 5.5 5.8v5.2c0 4.3 2.9 7.2 6.5 8.6 3.6-1.4 6.5-4.3 6.5-8.6V5.8Z" /><rect x="9.5" y="10.8" width="5" height="4" rx="0.6" /><path d="M10.4 10.8V9.4a1.6 1.6 0 0 1 3.2 0v1.4" /></>,

  // --- Production system nodes ---
  data: <><path d="M5 6c0-1.4 3.1-2.5 7-2.5S19 4.6 19 6v12c0 1.4-3.1 2.5-7 2.5S5 19.4 5 18Z" /><path d="M5 6c0 1.4 3.1 2.5 7 2.5S19 7.4 19 6M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" /></>,
  check: <path d="M5 12.5 9.5 17 19 7" />,
  exchange: <><path d="M4 9h14l-3.2-3.2M20 15H6l3.2 3.2" /></>,
  pulse: <path d="M3 12h4l2.2-6.5 3.6 13 2.2-6.5H21" />,
  shield: <><path d="M12 3 5.5 5.8v5.2c0 4.3 2.9 7.2 6.5 8.6 3.6-1.4 6.5-4.3 6.5-8.6V5.8Z" /><path d="M9 12l2.2 2.2L15.5 10" /></>,
  fallback: <><path d="M9 6.5 4 11.5l5 5" /><path d="M4 11.5h11a5 5 0 0 1 5 5v1" /></>,
  human: <><circle cx="12" cy="8" r="3.6" /><path d="M4.5 20a7.5 7.5 0 0 1 15 0" /></>,

  // --- Domain pills ---
  vision: <><path d="M2.5 12S6.5 6 12 6s9.5 6 9.5 6-4 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="2.6" /></>,
  audio: <path d="M4 10v4M8 6.5v11M12 4v16M16 7.5v9M20 10v4" />,
  multimodal: <><circle cx="9.5" cy="12" r="6" /><circle cx="14.5" cy="12" r="6" /></>,

  // --- Pathfinding markers ---
  origin: <><path d="M12 21s-6-5.7-6-10a6 6 0 0 1 12 0c0 4.3-6 10-6 10Z" /><circle cx="12" cy="11" r="2.2" /></>,
  package: <><path d="M12 3 20 7v10l-8 4-8-4V7Z" /><path d="M4 7l8 4 8-4M12 11v10" /></>,

  // --- UI ---
  share: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4.5" /></>,
  external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4.5" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  arrowDown: <path d="M12 4v15M6 13l6 6 6-6" />,
  arrowRight: <path d="M4 12h15M13 6l6 6-6 6" />,
  replay: <><path d="M20 12a8 8 0 1 1-2.4-5.7" /><path d="M20 4v4h-4" /></>,
};

export default function Icon({ name, size = 24, stroke = 1.6, className = '', ...rest }) {
  const glyph = PATHS[name];
  if (!glyph) return null;
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {glyph}
    </svg>
  );
}
