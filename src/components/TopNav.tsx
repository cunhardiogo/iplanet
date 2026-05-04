import Image from 'next/image'

const NAV_ITEMS = ['Loja', 'iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Acessórios', 'Seminovos', 'Trade-in']

export default function TopNav() {
  return (
    <nav className="ip-topnav">
      <div className="ip-topnav-inner">
        <a className="ip-topnav-brand" href="#" aria-label="iPlanet">
          <Image src="/assets/iplanet-logo.jpg" alt="iPlanet" width={100} height={28} style={{ height: 28, width: 'auto', objectFit: 'contain' }} />
        </a>
        {NAV_ITEMS.map(item => (
          <a key={item} className="ip-topnav-link" href="#">{item}</a>
        ))}
        <a className="ip-topnav-link" href="#" aria-label="Buscar">
          <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={1.6}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        </a>
        <a className="ip-topnav-link" href="#" aria-label="Sacola">
          <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={1.6}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg>
        </a>
      </div>
    </nav>
  )
}
