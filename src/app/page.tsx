import Animations from '@/components/Animations'
import TopNav from '@/components/TopNav'
import CategoryRail from '@/components/CategoryRail'
import SectionTitle from '@/components/SectionTitle'
import ProductCard from '@/components/ProductCard'
import HeroCard from '@/components/HeroCard'
import FeatureRow from '@/components/FeatureRow'
import QuickLinks from '@/components/QuickLinks'
import StoreCard from '@/components/StoreCard'
import Footer from '@/components/Footer'
import WhatsGlyph from '@/components/WhatsGlyph'
import {
  stores, categories, novidades, seminovos, acessorios, features, quickLinks,
  WHATSAPP_NUMBER, WHATSAPP_DISPLAY,
} from '@/lib/data'

const MAIN_WHATS = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Quero falar com a iPlanet.')}`
const TROCA_WHATS = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Quero avaliar meu aparelho no trade-in.')}`

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  )
}

export default function HomePage() {
  return (
    <>
      <Animations />
      <TopNav />

      {/* ── HERO ── */}
      <header className="ip-page-hero">
        <div className="ip-container">
          <div className="ip-hero-row">

            {/* Texto */}
            <div>
              <h1 className="ip-loja-title">
                <span className="hero-line">Compre Apple</span>
                <br />
                <span className="hero-line" style={{ color: '#1d1d1f' }}>com quem entende.</span>
              </h1>
              <p className="ip-page-lede">
                Zero na caixa ou seminovo revisado com 1 ano de garantia.
                Parcele em até 12x, retire na loja ou receba em casa.
              </p>
              <div className="ip-hero-ctas">
                <a className="ip-btn-whats" href={MAIN_WHATS} target="_blank" rel="noopener noreferrer">
                  <WhatsGlyph size={16} /> Chamar no WhatsApp
                </a>
                <a className="ip-btn-blue" href="#novidades">Ver produtos</a>
                <a className="ip-link" href="#visite">Visitar a loja ↗</a>
              </div>
            </div>

            {/* Store finder card 3D */}
            <div className="ip-hero-aside">
              <p className="ip-aside-eyebrow">ONDE ESTAMOS</p>

              <div className="ip-store-pins">
                {stores.map(s => (
                  <a key={s.name} className="ip-store-pin" href={s.mapsUrl} target="_blank" rel="noopener noreferrer">
                    <div className="ip-pin-dot-wrap">
                      <MapPinIcon />
                    </div>
                    <div className="ip-pin-info">
                      <div className="ip-pin-name">{s.shortName}</div>
                      <div className="ip-pin-addr">{s.shortAddr}</div>
                      <div className="ip-pin-hours">
                        {s.hours[0].d} {s.hours[0].h} &nbsp;·&nbsp; Sáb {s.hours[1].h}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <a className="ip-aside-whats" href={MAIN_WHATS} target="_blank" rel="noopener noreferrer">
                <WhatsGlyph size={16} /> {WHATSAPP_DISPLAY}
              </a>
            </div>

          </div>
          <CategoryRail categories={categories} />
        </div>
      </header>

      {/* ── ZERO NA CAIXA ── */}
      <section id="novidades" className="ip-section">
        <div className="ip-container">
          <SectionTitle headline="Zero na caixa" subhead="Lacrados, com nota fiscal e garantia Apple." />
          <div className="ip-rail">
            {novidades.map(it => (
              <div key={it.id} className="ip-rail-item">
                {it.hero ? <HeroCard item={it} /> : <ProductCard item={it} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEMINOVOS ── */}
      <section className="ip-section ip-section-seminovo">
        <div className="ip-container">
          <SectionTitle headline="Seminovos iPlanet" subhead="Revisados, com 1 ano de garantia. Por menos." />
          <div className="ip-rail">
            {seminovos.map(it => (
              <div key={it.id} className="ip-rail-item">
                {it.hero ? <HeroCard item={it} /> : <ProductCard item={it} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRADE-IN ── */}
      <section className="ip-section">
        <div className="ip-container">
          <div className="ip-troca">
            <div>
              <div className="ip-eyebrow" style={{ color: '#fff', opacity: 0.6 }}>TROCA COM UPGRADE</div>
              <div className="ip-troca-title">Tem um Apple antigo?<br />Vira desconto.</div>
              <p className="ip-troca-desc">
                Manda foto pelo WhatsApp e a gente te dá uma proposta na hora.
                Seu iPhone, iPad ou Mac usado vira parte do pagamento do novo.
              </p>
              <div className="ip-hero-ctas">
                <a className="ip-btn-whats" href={TROCA_WHATS} target="_blank" rel="noopener noreferrer">
                  <WhatsGlyph size={16} /> Avaliar pelo WhatsApp
                </a>
                <a className="ip-link" href="#" style={{ color: '#a1a1a6' }}>Como funciona ↗</a>
              </div>
            </div>
            <div className="ip-troca-art">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/products/iphone-15-lineup.jpg" alt="iPhones para trade-in" style={{ maxWidth: '100%', borderRadius: 18 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── ACESSÓRIOS ── */}
      <section className="ip-section">
        <div className="ip-container">
          <SectionTitle headline="Acessórios" subhead="Pra completar seu setup." />
          <div className="ip-rail ip-rail-3up">
            {acessorios.map(it => (
              <div key={it.id} className="ip-rail-item">
                <ProductCard item={it} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUE iPLANET ── */}
      <section className="ip-section">
        <div className="ip-container">
          <SectionTitle headline="Por que a iPlanet" subhead="Ainda mais motivos pra comprar com a gente." />
          <FeatureRow items={features} />
        </div>
      </section>

      {/* ── VISITE ── */}
      <section id="visite" className="ip-section">
        <div className="ip-container">
          <SectionTitle headline="Visite a loja" subhead="A gente te espera. Pode passar pra ver de perto." />
          <div className="ip-rail ip-rail-2up">
            {stores.map(s => (
              <div key={s.name} className="ip-rail-item">
                <StoreCard store={s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="ip-section">
        <div className="ip-container">
          <QuickLinks items={quickLinks} />
        </div>
      </section>

      <Footer />

      {/* FAB */}
      <a className="ip-fab-whats" href={MAIN_WHATS} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
        <WhatsGlyph size={26} />
      </a>
    </>
  )
}
