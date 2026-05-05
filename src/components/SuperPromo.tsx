import Image from 'next/image'
import WhatsGlyph from './WhatsGlyph'
import { superPromo, WHATSAPP_NUMBER } from '@/lib/data'

const PROMO_WHATS = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Quero garantir o iPhone 16 da promoção (18x sem juros).')}`

export default function SuperPromo() {
  return (
    <section id="promo" className="ip-section">
      <div className="ip-container">
        <div className="ip-promo" style={{ background: superPromo.bg }}>
          {/* Decorative blobs for color */}
          <span className="ip-promo-blob ip-promo-blob-1" aria-hidden="true" />
          <span className="ip-promo-blob ip-promo-blob-2" aria-hidden="true" />
          <span className="ip-promo-blob ip-promo-blob-3" aria-hidden="true" />

          {/* Content */}
          <div className="ip-promo-text">
            <div className="ip-promo-flag">
              <span className="ip-promo-dot" />
              {superPromo.flag}
            </div>
            <h2 className="ip-promo-title">
              <span className="ip-promo-title-accent">{superPromo.titleAccent}</span>
              <br />
              <span>{superPromo.titleRest}</span>
            </h2>
            <p className="ip-promo-desc">{superPromo.desc}</p>
            <div className="ip-promo-price">
              <span className="ip-promo-price-from">A partir de</span>
              <span className="ip-promo-price-main">{superPromo.price}</span>
              <span className="ip-promo-price-instalment">ou {superPromo.installments} sem juros</span>
            </div>
            <p className="ip-promo-bonus">{superPromo.bonus}</p>
            <div className="ip-promo-ctas">
              <a className="ip-btn-whats" href={PROMO_WHATS} target="_blank" rel="noopener noreferrer">
                <WhatsGlyph size={16} /> {superPromo.ctaPrimary}
              </a>
              <a className="ip-link" href="#novidades">{superPromo.ctaSecondary} ↗</a>
            </div>
          </div>

          {/* Product image */}
          <div className="ip-promo-art">
            <span className="ip-promo-glow" aria-hidden="true" />
            <Image
              src={superPromo.img}
              alt={`${superPromo.titleAccent} ${superPromo.titleRest}`}
              width={420}
              height={420}
              className="ip-promo-img"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
