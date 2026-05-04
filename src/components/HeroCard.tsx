import Image from 'next/image'
import WhatsGlyph from './WhatsGlyph'
import type { Product } from '@/lib/data'
import { WHATSAPP_NUMBER } from '@/lib/data'

export default function HeroCard({ item }: { item: Product }) {
  const msg = encodeURIComponent(`Olá! Tenho interesse no ${item.title}.`)
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`

  const bg = item.tint
    ? `linear-gradient(180deg, ${item.tint[0]}, ${item.tint[1] ?? item.tint[0]})`
    : '#fff'

  const classes = ['ip-hero-card', item.dark ? 'is-dark' : '', item.wide ? 'is-wide' : ''].filter(Boolean).join(' ')

  return (
    <div className={classes} style={{ background: bg }}>
      <div className="ip-hero-text">
        {item.eyebrow && (
          <div className="ip-eyebrow" style={{ color: item.dark ? '#a1a1a6' : '#6e6e73' }}>{item.eyebrow}</div>
        )}
        <div className="ip-flag-row">
          {item.novo && <span className="ip-novo">NOVO</span>}
          {item.seminovo && <span className="ip-seminovo-badge">SEMINOVO</span>}
        </div>
        <div className="ip-hero-title">{item.title}</div>
        {item.desc && <div className="ip-hero-desc" dangerouslySetInnerHTML={{ __html: item.desc }} />}
        {item.price && (
          <div className="ip-card-price" style={{ color: item.dark ? '#a1a1a6' : '#6e6e73' }}>{item.price}</div>
        )}
        <a className="ip-btn-whats ip-btn-whats-hero" href={href} target="_blank" rel="noopener noreferrer">
          <WhatsGlyph /> Chamar no WhatsApp
        </a>
      </div>
      {item.img && (
        <div className="ip-hero-art">
          <Image
            src={item.img}
            alt={item.title}
            fill
            style={{ objectFit: item.imgFit || 'contain', objectPosition: 'bottom center' }}
            sizes="(max-width: 920px) 100vw, 400px"
          />
        </div>
      )}
    </div>
  )
}
