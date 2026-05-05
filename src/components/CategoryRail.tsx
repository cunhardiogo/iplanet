import type { Category } from '@/lib/data'

function CategoryGlyph({ shape }: { shape: string }) {
  switch (shape) {

    case 'iphone':
      return (
        <svg viewBox="0 0 44 76" width="32" height="56" fill="none">
          <defs>
            <linearGradient id="ph-body" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f0f0f5"/>
              <stop offset="50%" stopColor="#e5e5ea"/>
              <stop offset="100%" stopColor="#d1d1d8"/>
            </linearGradient>
            <linearGradient id="ph-screen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1c2340"/>
              <stop offset="100%" stopColor="#090d1f"/>
            </linearGradient>
            <linearGradient id="ph-glare" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.18)"/>
              <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
            </linearGradient>
            <filter id="ph-shadow">
              <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.22"/>
            </filter>
          </defs>
          {/* Body */}
          <rect x="2" y="2" width="40" height="72" rx="9" fill="url(#ph-body)" filter="url(#ph-shadow)"/>
          {/* Frame highlight */}
          <rect x="2" y="2" width="40" height="72" rx="9" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
          {/* Screen */}
          <rect x="5" y="7" width="34" height="62" rx="5" fill="url(#ph-screen)"/>
          {/* Dynamic island */}
          <rect x="15" y="11" width="14" height="5" rx="2.5" fill="#05080e"/>
          {/* Screen glare */}
          <rect x="6" y="8" width="10" height="60" rx="3" fill="url(#ph-glare)"/>
          {/* Home indicator */}
          <rect x="15" y="65" width="14" height="2.5" rx="1.25" fill="rgba(255,255,255,0.18)"/>
          {/* Side button */}
          <rect x="0" y="24" width="2.5" height="9" rx="1.2" fill="#c8c8cf"/>
          {/* Volume buttons */}
          <rect x="41.5" y="20" width="2.5" height="7" rx="1.2" fill="#c8c8cf"/>
          <rect x="41.5" y="30" width="2.5" height="7" rx="1.2" fill="#c8c8cf"/>
        </svg>
      )

    case 'mac':
      return (
        <svg viewBox="0 0 80 58" width="64" height="48" fill="none">
          <defs>
            <linearGradient id="mac-lid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8e8ed"/>
              <stop offset="100%" stopColor="#c8c8cf"/>
            </linearGradient>
            <linearGradient id="mac-base" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d8d8df"/>
              <stop offset="100%" stopColor="#c0c0c9"/>
            </linearGradient>
            <linearGradient id="mac-screen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1f35"/>
              <stop offset="100%" stopColor="#0c0e1c"/>
            </linearGradient>
            <filter id="mac-shadow">
              <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.18"/>
            </filter>
          </defs>
          {/* Lid */}
          <rect x="2" y="2" width="76" height="44" rx="4" fill="url(#mac-lid)" filter="url(#mac-shadow)"/>
          <rect x="2" y="2" width="76" height="44" rx="4" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
          {/* Screen */}
          <rect x="6" y="6" width="68" height="36" rx="2" fill="url(#mac-screen)"/>
          {/* Screen glare */}
          <rect x="7" y="7" width="18" height="34" rx="1" fill="rgba(255,255,255,0.04)"/>
          {/* Webcam */}
          <circle cx="40" cy="4" r="1.8" fill="#888" opacity="0.6"/>
          {/* Base */}
          <rect x="0" y="46" width="80" height="10" rx="3" fill="url(#mac-base)"/>
          <rect x="26" y="44" width="28" height="4" rx="0" fill="#b8b8c0"/>
          {/* Keyboard hint */}
          <rect x="10" y="50" width="60" height="2" rx="1" fill="rgba(0,0,0,0.08)"/>
        </svg>
      )

    case 'ipad':
      return (
        <svg viewBox="0 0 52 72" width="40" height="56" fill="none">
          <defs>
            <linearGradient id="ipad-body" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ececf1"/>
              <stop offset="100%" stopColor="#d0d0d8"/>
            </linearGradient>
            <linearGradient id="ipad-screen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b9de8"/>
              <stop offset="100%" stopColor="#5a6acc"/>
            </linearGradient>
            <filter id="ipad-shadow">
              <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.2"/>
            </filter>
          </defs>
          <rect x="2" y="2" width="48" height="68" rx="7" fill="url(#ipad-body)" filter="url(#ipad-shadow)"/>
          <rect x="2" y="2" width="48" height="68" rx="7" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
          <rect x="6" y="8" width="40" height="56" rx="3" fill="url(#ipad-screen)"/>
          {/* Glare */}
          <rect x="7" y="9" width="10" height="54" rx="2" fill="rgba(255,255,255,0.12)"/>
          {/* Camera */}
          <circle cx="26" cy="5" r="2" fill="#c0c0c8" opacity="0.7"/>
          {/* Home button */}
          <circle cx="26" cy="67" r="3" fill="#c8c8cf"/>
        </svg>
      )

    case 'watch':
      return (
        <svg viewBox="0 0 40 68" width="32" height="56" fill="none">
          <defs>
            <linearGradient id="watch-case" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3a3a3f"/>
              <stop offset="100%" stopColor="#1c1c1e"/>
            </linearGradient>
            <linearGradient id="watch-face" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2a2a40"/>
              <stop offset="100%" stopColor="#0a0a1a"/>
            </linearGradient>
            <filter id="watch-shadow">
              <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.3"/>
            </filter>
          </defs>
          {/* Band top */}
          <rect x="11" y="0" width="18" height="18" rx="4" fill="#3a3a3f"/>
          <rect x="12" y="1" width="16" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
          {/* Case */}
          <rect x="4" y="16" width="32" height="36" rx="9" fill="url(#watch-case)" filter="url(#watch-shadow)"/>
          <rect x="4" y="16" width="32" height="36" rx="9" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
          {/* Face */}
          <rect x="7" y="19" width="26" height="30" rx="6" fill="url(#watch-face)"/>
          {/* Watch digits hint */}
          <circle cx="20" cy="34" r="9" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
          <rect x="19" y="26" width="2" height="5" rx="1" fill="rgba(255,255,255,0.5)"/>
          <rect x="25" y="33" width="5" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>
          {/* Crown */}
          <rect x="35" y="28" width="3" height="8" rx="1.5" fill="#4a4a50"/>
          {/* Band bottom */}
          <rect x="11" y="50" width="18" height="18" rx="4" fill="#3a3a3f"/>
          <rect x="12" y="51" width="16" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
        </svg>
      )

    case 'airpods':
      return (
        <svg viewBox="0 0 64 52" width="56" height="46" fill="none">
          <defs>
            <linearGradient id="ap-case" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f5f5f7"/>
              <stop offset="100%" stopColor="#e2e2e7"/>
            </linearGradient>
            <filter id="ap-shadow">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.18"/>
            </filter>
          </defs>
          {/* Case */}
          <rect x="8" y="18" width="48" height="30" rx="8" fill="url(#ap-case)" filter="url(#ap-shadow)"/>
          <rect x="8" y="18" width="48" height="30" rx="8" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1"/>
          {/* Lid groove */}
          <rect x="8" y="29" width="48" height="1" fill="rgba(0,0,0,0.06)"/>
          {/* LED */}
          <circle cx="32" cy="40" r="2" fill="rgba(0,0,0,0.12)"/>
          {/* Left pod */}
          <ellipse cx="16" cy="16" rx="6" ry="6" fill="url(#ap-case)" filter="url(#ap-shadow)"/>
          <ellipse cx="16" cy="16" rx="6" ry="6" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.5"/>
          <rect x="14" y="4" width="4" height="12" rx="2" fill="#f0f0f5"/>
          {/* Right pod */}
          <ellipse cx="48" cy="16" rx="6" ry="6" fill="url(#ap-case)" filter="url(#ap-shadow)"/>
          <ellipse cx="48" cy="16" rx="6" ry="6" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.5"/>
          <rect x="46" y="4" width="4" height="12" rx="2" fill="#f0f0f5"/>
        </svg>
      )

    case 'airtag':
      return (
        <svg viewBox="0 0 52 52" width="44" height="44" fill="none">
          <defs>
            <radialGradient id="at-body" cx="40%" cy="35%">
              <stop offset="0%" stopColor="#f5f5f7"/>
              <stop offset="100%" stopColor="#d8d8df"/>
            </radialGradient>
            <filter id="at-shadow">
              <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.2"/>
            </filter>
          </defs>
          <circle cx="26" cy="26" r="22" fill="url(#at-body)" filter="url(#at-shadow)"/>
          <circle cx="26" cy="26" r="22" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
          <circle cx="26" cy="26" r="9" fill="#1d1d1f"/>
          <circle cx="26" cy="26" r="4" fill="#3a3a3f"/>
          {/* Highlight */}
          <circle cx="20" cy="20" r="4" fill="rgba(255,255,255,0.12)"/>
        </svg>
      )

    case 'acc':
      return (
        <svg viewBox="0 0 56 56" width="48" height="48" fill="none">
          <defs>
            <linearGradient id="acc-cable" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e5e5ea"/>
              <stop offset="100%" stopColor="#c8c8cf"/>
            </linearGradient>
            <filter id="acc-shadow">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.18"/>
            </filter>
          </defs>
          {/* Cable body */}
          <path d="M12 44 C12 44 12 28 28 28 C44 28 44 12 44 12" stroke="url(#acc-cable)" strokeWidth="6" strokeLinecap="round" fill="none" filter="url(#acc-shadow)"/>
          {/* USB-C connector top */}
          <rect x="38" y="6" width="12" height="8" rx="3" fill="#c8c8cf"/>
          <rect x="40" y="8" width="8" height="4" rx="1" fill="#a8a8b0"/>
          {/* Lightning connector bottom */}
          <rect x="6" y="42" width="12" height="8" rx="3" fill="#c8c8cf"/>
          <rect x="8" y="44" width="8" height="4" rx="1" fill="#a8a8b0"/>
        </svg>
      )

    default:
      return null
  }
}

export default function CategoryRail({ categories }: { categories: Category[] }) {
  return (
    <div className="ip-cat-rail">
      {categories.map(c => (
        <a key={c.id} className="ip-cat-item" href={c.href} data-cat={c.id}>
          <div className="ip-cat-glyph"><CategoryGlyph shape={c.shape} /></div>
          <div className="ip-cat-label">{c.label}</div>
        </a>
      ))}
    </div>
  )
}
