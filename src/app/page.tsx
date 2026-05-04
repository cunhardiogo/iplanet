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

const TROCA_WHATS = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Quero avaliar meu aparelho no trade-in.')}`
const MAIN_WHATS = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Quero falar com a iPlanet.')}`

export default function HomePage() {
  return (
    <>
      <TopNav />

      {/* HERO */}
      <header className="ip-page-hero">
        <div className="ip-container">
          <div className="ip-hero-row">
            <div>
              <div className="ip-eyebrow" style={{ color: '#6e6e73', marginBottom: 12 }}>iPLANET · SÃO PAULO &amp; ABC</div>
              <h1 className="ip-loja-title">Tudo Apple.<br /><span style={{ color: '#1d1d1f' }}>Mais perto.</span></h1>
              <p className="ip-page-lede">Zero na caixa ou seminovo revisado. Você escolhe — e a gente entrega, parcela e atende no WhatsApp.</p>
              <div className="ip-hero-ctas">
                <a className="ip-btn-whats" href={MAIN_WHATS} target="_blank" rel="noopener noreferrer">
                  <WhatsGlyph size={16} /> Chamar no WhatsApp
                </a>
                <a className="ip-btn-blue" href="#novidades">Ver produtos</a>
                <a className="ip-link" href="#visite">Visitar a loja ↗</a>
              </div>
            </div>
            <div className="ip-hero-aside">
              <div className="ip-hero-aside-h">Atendimento humano,<br />direto com a gente.</div>
              {stores.map(s => (
                <div key={s.name} className="ip-store-mini">
                  <div className="ip-store-mini-name">{s.name}</div>
                  <div className="ip-store-mini-addr">{s.addr}</div>
                </div>
              ))}
              <div className="ip-store-mini-whats">
                <WhatsGlyph size={12} /> {WHATSAPP_DISPLAY}
              </div>
            </div>
          </div>
          <CategoryRail categories={categories} />
        </div>
      </header>

      {/* ZERO NA CAIXA */}
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

      {/* SEMINOVOS */}
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

      {/* TRADE-IN */}
      <section className="ip-section">
        <div className="ip-container">
          <div className="ip-troca">
            <div>
              <div className="ip-eyebrow" style={{ color: '#fff', opacity: 0.7 }}>TROCA COM UPGRADE</div>
              <div className="ip-troca-title">Tem um Apple antigo? Vira desconto.</div>
              <p className="ip-troca-desc">Manda foto pelo WhatsApp e a gente te dá uma proposta na hora. Seu iPhone, iPad ou Mac usado vira parte do pagamento do novo.</p>
              <div className="ip-hero-ctas">
                <a className="ip-btn-whats" href={TROCA_WHATS} target="_blank" rel="noopener noreferrer">
                  <WhatsGlyph size={16} /> Avaliar pelo WhatsApp
                </a>
                <a className="ip-link" href="#" style={{ color: '#fff' }}>Como funciona ↗</a>
              </div>
            </div>
            <div className="ip-troca-art">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/products/iphone-15-lineup.jpg" alt="iPhones para trade-in" style={{ maxWidth: '100%', borderRadius: 18 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ACESSÓRIOS */}
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

      {/* POR QUE iPLANET */}
      <section className="ip-section">
        <div className="ip-container">
          <SectionTitle headline="Por que a iPlanet" subhead="Ainda mais motivos pra comprar com a gente." />
          <FeatureRow items={features} />
        </div>
      </section>

      {/* VISITE */}
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

      {/* QUICK LINKS */}
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
