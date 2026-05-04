import WhatsGlyph from './WhatsGlyph'
import type { Store } from '@/lib/data'
import { WHATSAPP_NUMBER } from '@/lib/data'

export default function StoreCard({ store }: { store: Store }) {
  const whatsMsg = encodeURIComponent(`Olá! Quero saber mais sobre a ${store.name}.`)

  return (
    <div className="ip-store-card">
      <div className="ip-store-map">
        <svg viewBox="0 0 400 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="200" fill="#e8eef4"/>
          <path d="M0 80 L160 60 L260 110 L400 90" stroke="#cfd8e3" strokeWidth="14" fill="none"/>
          <path d="M40 0 L80 200" stroke="#cfd8e3" strokeWidth="10" fill="none"/>
          <path d="M280 0 L320 200" stroke="#cfd8e3" strokeWidth="10" fill="none"/>
          <circle cx="200" cy="100" r="14" fill="#f56300"/>
          <circle cx="200" cy="100" r="6" fill="#fff"/>
        </svg>
      </div>
      <div className="ip-store-body">
        <div className="ip-store-name">{store.name}</div>
        <div className="ip-store-addr">{store.addr}</div>
        <div className="ip-store-hours">
          {store.hours.map(h => (
            <div key={h.d} className="ip-store-hours-row">
              <span>{h.d}</span><span>{h.h}</span>
            </div>
          ))}
        </div>
        <div className="ip-store-ctas">
          <a className="ip-btn-blue-outline" href={store.mapsUrl} target="_blank" rel="noopener noreferrer">Ver no mapa</a>
          <a className="ip-btn-whats-sm" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsMsg}`} target="_blank" rel="noopener noreferrer">
            <WhatsGlyph size={12} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
