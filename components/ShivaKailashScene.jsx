export default function ShivaKailashScene() {
  return (
    <svg viewBox="0 0 1200 675" role="img" aria-labelledby="title desc">
      <title id="title">Man sitting on Kailash at the feet of Lord Shiva</title>
      <desc id="desc">
        Stylized night scene with Mount Kailash, Lord Shiva silhouette with trident, and a seeker seated near His feet.
      </desc>

      {/* Sky gradient */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141b3a" />
          <stop offset="100%" stopColor="#0d1027" />
        </linearGradient>
        <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe7b5" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffe7b5" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="moonGlow" cx="50%" cy="18%" r="20%">
          <stop offset="0%" stopColor="#fff7dc" />
          <stop offset="60%" stopColor="#fff7dc" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#fff7dc" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mountain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5f7aa7" />
          <stop offset="100%" stopColor="#2e3a57" />
        </linearGradient>
        <linearGradient id="snow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8f1ff" />
          <stop offset="100%" stopColor="#c8d7f9" />
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>

      <rect x="0" y="0" width="1200" height="675" fill="url(#sky)" />
      <circle cx="920" cy="110" r="180" fill="url(#moonGlow)" />
      <circle cx="920" cy="110" r="55" fill="#fff6d5" />

      {/* Stars */}
      {Array.from({ length: 120 }).map((_, i) => {
        const x = (i * 97) % 1200;
        const y = (i * 61) % 360;
        const r = (i % 5) === 0 ? 1.8 : 1.2;
        const opacity = 0.5 + ((i % 10) / 20);
        return <circle key={i} cx={x} cy={y + 30} r={r} fill="#ffffff" opacity={opacity} />;
      })}

      {/* Distant mountain layers */}
      <g opacity="0.45">
        <path
          d="M0,430 L140,400 240,430 360,395 520,430 640,380 760,410 900,370 1040,400 1200,375 1200,675 0,675 Z"
          fill="#26304a"
        />
      </g>
      <g opacity="0.6">
        <path
          d="M0,470 L160,445 260,475 370,450 520,480 650,440 780,470 920,445 1040,470 1200,455 1200,675 0,675 Z"
          fill="#2b3551"
        />
      </g>

      {/* Mount Kailash main mass */}
      <g transform="translate(0,10)">
        <path
          d="M300,520
             C380,440 420,430 510,380
             C575,345 650,330 705,350
             C760,370 820,420 860,465
             C900,510 930,565 960,600
             L300,600 Z"
          fill="url(#mountain)"
        />
        {/* Snow caps */}
        <path
          d="M560,375 L605,360 L635,368 L660,380 L628,392 L600,400 Z"
          fill="url(#snow)"
          opacity="0.95"
        />
        <path
          d="M705,350 L740,365 L770,388 L735,392 L706,400 L690,385 Z"
          fill="url(#snow)"
          opacity="0.95"
        />
      </g>

      {/* Ambient glow behind figures */}
      <ellipse cx="585" cy="480" rx="210" ry="120" fill="url(#glow)" filter="url(#soft)" opacity="0.55" />

      {/* Lord Shiva silhouette (seated) */}
      <g transform="translate(560,430) scale(1.1)" fill="#0b0f1d">
        {/* Body outline */}
        <path
          d="M-40,95
             C-70,65 -75,20 -50,-10
             C-20,-45 20,-45 50,-10
             C75,20 70,65 40,95
             C25,115 -25,115 -40,95 Z"
          fill="#101630"
        />
        {/* Head */}
        <circle cx="0" cy="-28" r="18" fill="#0d1330" />
        {/* Hair bun */}
        <circle cx="4" cy="-48" r="10" fill="#0a0f26" />
        {/* Crescent hint */}
        <path d="M14,-57 A10,10 0 1,0 30,-57 A7,7 0 1,1 14,-57 Z" fill="#fff7da" opacity="0.9" />
        {/* Tiger skin sash hint */}
        <path d="M-20,70 C-5,50 5,50 20,70 L20,85 L-20,85 Z" fill="#f4b860" opacity="0.9" />
      </g>

      {/* Trident (Trishul) next to Shiva */}
      <g transform="translate(640,360)">
        <rect x="-3" y="-60" width="6" height="220" fill="#e8e8ff" opacity="0.95" />
        <path
          d="M0,-60
             c-16,18 -20,36 -8,56
             c4,-10 8,-16 8,-16
             s4,6 8,16
             c12,-20 8,-38 -8,-56 Z"
          fill="#e8e8ff"
        />
        <circle cx="0" cy="8" r="8" fill="#e8e8ff" />
      </g>

      {/* Seeker (man) sitting near Shiva's feet */}
      <g transform="translate(545,520)" fill="#0b0f1d">
        <circle cx="-12" cy="-26" r="8" fill="#141a36" />
        <path d="M-30,10 C-15,-10 0,-15 10,5 L10,20 L-28,20 Z" fill="#1a2142" />
        <path d="M-26,20 L-10,35 L10,35 L10,20 Z" fill="#111733" />
      </g>

      {/* Foreground ridge */}
      <path
        d="M0,600 C100,585 220,590 340,600 C460,610 640,620 820,610 C990,602 1100,598 1200,600 L1200,675 L0,675 Z"
        fill="#1a2138"
        opacity="0.9"
      />
    </svg>
  );
}

