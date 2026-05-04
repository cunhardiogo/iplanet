import { WHATSAPP_NUMBER } from '@/lib/data'

export default function QuickLinks({ items }: { items: string[] }) {
  return (
    <div className="ip-quick">
      <div className="ip-quick-title">Links rápidos</div>
      <div className="ip-quick-row">
        {items.map(label => {
          const href = label === 'Falar no WhatsApp'
            ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Quero falar com a iPlanet.')}`
            : '#'
          return (
            <a key={label} className="ip-quick-pill" href={href}
               {...(href !== '#' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
              {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}
