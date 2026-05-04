// App.jsx — composes the iPlanet store landing page.
const { useState } = React;

function App() {
  const data = window.iPlanetData;
  const [toast, setToast] = useState('');

  const onWhats = (item) => {
    const msg = item ? `Olá! Tenho interesse no ${item.title}.` : 'Olá! Quero falar com a iPlanet.';
    setToast(`Abrindo WhatsApp (${data.whatsappDisplay}) com: "${msg}"`);
    setTimeout(() => setToast(''), 2400);
  };

  return (
    <div className="ip-app">
      <TopNav />

      {/* HERO — bold iPlanet promise */}
      <header className="ip-page-hero">
        <div className="ip-container">
          <div className="ip-hero-row">
            <div>
              <div className="ip-eyebrow" style={{ color: 'var(--ip-fg-2)', marginBottom: 12 }}>iPLANET · SÃO PAULO &amp; ABC</div>
              <h1 className="ip-loja-title">Tudo Apple.<br/><span style={{ color: '#1d1d1f' }}>Mais perto.</span></h1>
              <p className="ip-page-lede">Zero na caixa ou seminovo revisado. Você escolhe — e a gente entrega, parcela e atende no WhatsApp.</p>
              <div className="ip-hero-ctas">
                <button className="ip-btn-whats" onClick={() => onWhats()}><WhatsGlyph size={16} /> Chamar no WhatsApp</button>
                <a className="ip-btn-blue" href="#novidades">Ver produtos</a>
                <a className="ip-link" href="#visite">Visitar a loja ↗</a>
              </div>
            </div>
            <div className="ip-hero-aside">
              <div className="ip-hero-aside-h">Atendimento humano,<br/>direto com a gente.</div>
              {data.stores.map(s => (
                <div key={s.name} className="ip-store-mini">
                  <div className="ip-store-mini-name">{s.name}</div>
                  <div className="ip-store-mini-addr">{s.addr}</div>
                </div>
              ))}
              <div className="ip-store-mini-whats">
                <WhatsGlyph size={12} /> {data.whatsappDisplay}
              </div>
            </div>
          </div>
          <CategoryRail categories={data.categories} />
        </div>
      </header>

      {/* NOVIDADES — zero na caixa */}
      <section id="novidades" className="ip-section">
        <div className="ip-container">
          <SectionTitle headline="Zero na caixa" subhead="Lacrados, com nota fiscal e garantia Apple." />
          <div className="ip-rail">
            {data.novidades.map(it => (
              <div key={it.id} className="ip-rail-item">
                {it.hero ? <HeroCard item={it} onWhats={onWhats} /> : <ProductCard item={it} onWhats={onWhats} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEMINOVOS — the iPlanet differentiator */}
      <section className="ip-section ip-section-seminovo">
        <div className="ip-container">
          <SectionTitle headline="Seminovos iPlanet" subhead="Revisados, com 1 ano de garantia. Por menos." />
          <div className="ip-rail">
            {data.seminovos.map(it => (
              <div key={it.id} className="ip-rail-item">
                {it.hero ? <HeroCard item={it} onWhats={onWhats} /> : <ProductCard item={it} onWhats={onWhats} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TROCA — trade-in */}
      <section className="ip-section">
        <div className="ip-container">
          <div className="ip-troca">
            <div>
              <div className="ip-eyebrow" style={{ color: '#fff', opacity: 0.7 }}>TROCA COM UPGRADE</div>
              <div className="ip-troca-title">{data.troca.title}</div>
              <p className="ip-troca-desc">{data.troca.subtitle}</p>
              <div className="ip-hero-ctas">
                <button className="ip-btn-whats" onClick={() => onWhats({ title: 'Avaliação trade-in' })}><WhatsGlyph size={16} /> {data.troca.cta1}</button>
                <a className="ip-link" href="#" style={{ color: '#fff' }}>{data.troca.cta2} ↗</a>
              </div>
            </div>
            <div className="ip-troca-art">
              <img src="../../assets/products/iphone-15-lineup.jpg" alt="iPhones para trade-in" />
            </div>
          </div>
        </div>
      </section>

      {/* ACESSÓRIOS */}
      <section className="ip-section">
        <div className="ip-container">
          <SectionTitle headline="Acessórios" subhead="Pra completar seu setup." />
          <div className="ip-rail ip-rail-3up">
            {data.acessorios.map(it => (
              <div key={it.id} className="ip-rail-item">
                <ProductCard item={it} onWhats={onWhats} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY iPlanet */}
      <section className="ip-section">
        <div className="ip-container">
          <SectionTitle headline="Por que a iPlanet" subhead="Ainda mais motivos pra comprar com a gente." />
          <FeatureRow items={data.features} />
        </div>
      </section>

      {/* VISITE — physical stores */}
      <section id="visite" className="ip-section">
        <div className="ip-container">
          <SectionTitle headline="Visite a loja" subhead="A gente te espera. Pode passar pra ver de perto." />
          <div className="ip-rail ip-rail-2up">
            {data.stores.map(s => (
              <div key={s.name} className="ip-rail-item">
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
                    <div className="ip-store-name">{s.name}</div>
                    <div className="ip-store-addr">{s.addr}</div>
                    <div className="ip-store-hours">
                      {s.hours.map(h => (
                        <div key={h.d} className="ip-store-hours-row">
                          <span>{h.d}</span><span>{h.h}</span>
                        </div>
                      ))}
                    </div>
                    <div className="ip-store-ctas">
                      <a className="ip-btn-blue-outline" href="#">Ver no mapa</a>
                      <button className="ip-btn-whats-sm" onClick={() => onWhats({ title: `Loja ${s.name}` })}><WhatsGlyph size={12} /> WhatsApp</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ip-section">
        <div className="ip-container">
          <QuickLinks items={data.quickLinks} />
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp button */}
      <button className="ip-fab-whats" aria-label="Falar no WhatsApp" onClick={() => onWhats()}>
        <WhatsGlyph size={26} />
      </button>

      {toast ? <div className="ip-toast">{toast}</div> : null}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
