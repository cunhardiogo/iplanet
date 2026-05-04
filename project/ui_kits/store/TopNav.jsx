// TopNav.jsx — translucent blurred top navigation bar.
// The leading mark is the iPlanet logo (replaces Apple's mark).
function TopNav() {
  const items = ['Loja', 'iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Acessórios', 'Seminovos', 'Trade-in'];
  return (
    <div className="ip-topnav">
      <div className="ip-topnav-inner">
        <a className="ip-topnav-brand" href="#" aria-label="iPlanet">
          <img src="../../assets/iplanet-logo.jpg" alt="iPlanet" />
        </a>
        {items.map(it => (
          <a key={it} className="ip-topnav-link" href="#">{it}</a>
        ))}
        <a className="ip-topnav-link" href="#" aria-label="Buscar">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        </a>
        <a className="ip-topnav-link" href="#" aria-label="Sacola">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg>
        </a>
      </div>
    </div>
  );
}

window.TopNav = TopNav;
