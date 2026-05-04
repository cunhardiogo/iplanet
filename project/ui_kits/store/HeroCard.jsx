// HeroCard.jsx — full-bleed dark or wash card with real product photo.
function HeroCard({ item, onWhats }) {
  const dark = item.dark;
  const bg = item.tint
    ? `linear-gradient(180deg, ${item.tint[0]}, ${item.tint[1] || item.tint[0]})`
    : '#fff';
  return (
    <div className={"ip-hero-card " + (dark ? 'is-dark ' : '') + (item.wide ? 'is-wide ' : '')}
         style={{ background: bg }}>
      <div className="ip-hero-text">
        {item.eyebrow ? <div className="ip-eyebrow" style={{ color: dark ? '#a1a1a6' : '#6e6e73' }}>{item.eyebrow}</div> : null}
        <div className="ip-flag-row">
          {item.novo ? <span className="ip-novo">NOVO</span> : null}
          {item.seminovo ? <span className="ip-seminovo">SEMINOVO</span> : null}
        </div>
        <div className="ip-hero-title">{item.title}</div>
        {item.desc ? <div className="ip-hero-desc" dangerouslySetInnerHTML={{ __html: item.desc }} /> : null}
        {item.price ? <div className="ip-card-price" style={{ color: dark ? '#a1a1a6' : '#6e6e73' }}>{item.price}</div> : null}
        {onWhats ? (
          <button className="ip-btn-whats ip-btn-whats-hero" onClick={(e) => { e.stopPropagation(); onWhats(item); }}>
            <WhatsGlyph /> Chamar no WhatsApp
          </button>
        ) : null}
      </div>
      <div className="ip-hero-art">
        {item.img ? (
          <img
            src={item.img}
            alt={item.title}
            style={{
              maxWidth: '100%', maxHeight: '100%',
              objectFit: item.imgFit || 'contain',
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

window.HeroCard = HeroCard;
