import Image from 'next/image'
import WhatsGlyph from './WhatsGlyph'
import type { Product } from '@/lib/data'
import { WHATSAPP_NUMBER } from '@/lib/data'

export default function ProductCard({ item }: { item: Product }) {
  const msg = encodeURIComponent(`Olá! Tenho interesse no ${item.title}.`)
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`

  return (
    <div className="ip-card">
      <div className="ip-card-art">
        {item.img && (
          <Image
            src={item.img}
            alt={item.title}
            fill
            style={{ objectFit: item.imgFit || 'contain', objectPosition: 'center' }}
            sizes="(max-width: 600px) 50vw, (max-width: 960px) 33vw, 220px"
          />
        )}
      </div>

      {/* body com flex: 1 garante que o botão sempre vai para o fundo */}
      <div className="ip-card-body">
        <div className="ip-flag-row">
          {item.novo && <span className="ip-novo">NOVO</span>}
          {item.seminovo && <span className="ip-seminovo-badge">SEMINOVO</span>}
          {item.last && <span className="ip-last">ÚLTIMA UNIDADE</span>}
        </div>
        {item.eyebrow && <div className="ip-eyebrow">{item.eyebrow}</div>}
        <div className="ip-card-title">{item.title}</div>
        {item.desc && <div className="ip-card-desc" dangerouslySetInnerHTML={{ __html: item.desc }} />}
        {item.priceOld && <div className="ip-card-price-old">{item.priceOld}</div>}
        {item.price && <div className="ip-card-price">{item.price}</div>}

        {/* spacer empurra o botão para o fundo do card */}
        <div className="ip-card-spacer" />

        <a className="ip-btn-whats" href={href} target="_blank" rel="noopener noreferrer">
          <WhatsGlyph /> Chamar no WhatsApp
        </a>
      </div>
    </div>
  )
}
