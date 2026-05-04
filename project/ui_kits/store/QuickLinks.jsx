// QuickLinks.jsx — outlined pill utility nav.
function QuickLinks({ items }) {
  return (
    <div className="ip-quick">
      <div className="ip-quick-title">Links rápidos</div>
      <div className="ip-quick-row">
        {items.map(label => (
          <a key={label} className="ip-quick-pill" href="#">{label}</a>
        ))}
      </div>
    </div>
  );
}

window.QuickLinks = QuickLinks;
