import type { Feature } from '@/lib/data'

const ICON_COLORS: Record<string, { stroke: string; bg: string; shadow: string }> = {
  shield: { stroke: '#f56300', bg: '#fff1e6', shadow: 'rgba(245,99,0,0.2)' },
  whats:  { stroke: '#1aa852', bg: '#e3f7ec', shadow: 'rgba(37,211,102,0.18)' },
  card:   { stroke: '#0071e3', bg: '#e6f0fa', shadow: 'rgba(0,113,227,0.18)' },
  box:    { stroke: '#8a4ed8', bg: '#f1e8fa', shadow: 'rgba(138,78,216,0.2)' },
}

function FeatureIcon({ kind }: { kind: string }) {
  const color = ICON_COLORS[kind]?.stroke ?? '#f56300'
  const p = { width: 24, height: 24, fill: 'none', stroke: color, strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  switch (kind) {
    case 'card':
      return <svg viewBox="0 0 24 24" {...p}><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 11h20"/><path d="M6 16h4"/></svg>
    case 'box':
      return <svg viewBox="0 0 24 24" {...p}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="M3.27 6.96 12 12l8.73-5.04M12 22V12"/></svg>
    case 'shield':
      return <svg viewBox="0 0 24 24" {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
    case 'whats':
      return <svg viewBox="0 0 24 24" width="24" height="24" fill={color}><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.516 5.26l-.999 3.648 3.972-1.041z"/></svg>
    default:
      return null
  }
}

export default function FeatureRow({ items }: { items: Feature[] }) {
  return (
    <div className="ip-feature-row">
      {items.map(it => {
        const color = ICON_COLORS[it.icon] ?? ICON_COLORS.shield
        return (
          <div key={it.id} className="ip-feature-tile">
            <div className="ip-feature-icon" style={{ background: color.bg, boxShadow: `0 4px 14px ${color.shadow}` }}>
              <FeatureIcon kind={it.icon} />
            </div>
            <div className="ip-feature-title" dangerouslySetInnerHTML={{ __html: it.title }} />
          </div>
        )
      })}
    </div>
  )
}
