const cols = [
  { h: 'Loja e Compras', l: ['Encontrar uma loja', 'Horários de atendimento', 'Programa de Reciclagem', 'Pedidos e devoluções', 'Política de garantia'] },
  { h: 'Mac', l: ['Compre Mac', 'Acessórios para Mac', 'Mac em comparação', 'MacBook Pro', 'MacBook Air'] },
  { h: 'iPhone', l: ['Compre iPhone', 'iPhone 17 Pro', 'iPhone Air', 'iPhone 16', 'Trade In'] },
  { h: 'iPlanet', l: ['Sobre a iPlanet', 'Nossas lojas', 'Seminovos', 'Trabalhe com a gente', 'Contato'] },
]

export default function Footer() {
  return (
    <footer className="ip-footer">
      <div className="ip-footer-inner">
        <div className="ip-footer-fineprint">
          1. Pagamento parcelado em até 12x sem juros sujeito a aprovação de crédito. 2. Produtos seminovos revisados pela equipe iPlanet; acompanha nota fiscal e garantia iPlanet de 12 meses. 3. Desconto de 5% no PIX válido para compras acima de R$ 500. Imagens meramente ilustrativas. iPhone, iPad, Mac, Apple Watch, AirPods, MagSafe e Apple são marcas comerciais da Apple Inc., registradas nos EUA e em outros países. iPlanet é revendedora autorizada e não possui vínculo oficial com a Apple Inc.
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
          <div>Copyright © 2025 iPlanet. Loja de revenda de produtos Apple no Brasil.</div>
          <div className="ip-footer-bar-links">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
            <a href="#">Mapa do site</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
