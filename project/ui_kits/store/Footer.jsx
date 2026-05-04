// Footer.jsx — long legal-text footer (simplified).
function Footer() {
  const cols = [
    { h: 'Loja e Compras', l: ['Encontrar uma loja', 'Genius Bar', 'Workshops gratuitos', 'Programa de Reciclagem', 'Pedidos e devoluções'] },
    { h: 'Mac', l: ['Compre Mac', 'Acessórios para Mac', 'Mac em comparação', 'AppleCare+ para Mac'] },
    { h: 'iPhone', l: ['Compre iPhone', 'Família iPhone', 'iPhone em comparação', 'AppleCare+ para iPhone', 'Trade In'] },
    { h: 'iPlanet', l: ['Sobre a iPlanet', 'Encontre uma loja física', 'Ofertas e descontos', 'Trabalhe com a gente', 'Contato'] },
  ];
  return (
    <footer className="ip-footer">
      <div className="ip-footer-inner">
        <div className="ip-footer-fineprint">
          1. Pagamento parcelado em até 12x sem juros sujeito a aprovação. 2. Desconto educacional disponível para estudantes universitários e professores mediante validação. Imagens meramente ilustrativas. iPhone, iPad, Mac, Apple Watch, AirPods, AirTag, MagSafe e Apple TV são marcas comerciais da Apple Inc.
        </div>
        <div className="ip-footer-grid">
          {cols.map(c => (
            <div key={c.h} className="ip-footer-col">
              <div className="ip-footer-h">{c.h}</div>
              <ul>{c.l.map(i => <li key={i}><a href="#">{i}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="ip-footer-bar">
          <div>iPlanet · Loja autorizada de revenda Apple no Brasil.</div>
          <div className="ip-footer-bar-links">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
            <a href="#">Mapa do site</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
