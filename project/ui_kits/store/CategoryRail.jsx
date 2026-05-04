// CategoryRail.jsx — small product silhouettes above labels.
function CategoryGlyph({ shape }) {
  switch (shape) {
    case 'mac':
      return (
        <svg viewBox="0 0 64 56" width="56" height="48"><rect x="6" y="6" width="52" height="32" rx="2" fill="#cfd6e0" stroke="#1d1d1f" strokeWidth="1"/><rect x="9" y="9" width="46" height="26" rx="1" fill="#1d1d1f"/><rect x="20" y="42" width="24" height="6" fill="#cfd6e0" stroke="#1d1d1f" strokeWidth="1"/></svg>
      );
    case 'iphone':
      return (
        <svg viewBox="0 0 32 56" width="28" height="48"><rect x="2" y="2" width="28" height="52" rx="5" fill="#fff" stroke="#1d1d1f" strokeWidth="1"/><rect x="6" y="6" width="20" height="40" rx="1" fill="#3a4a8b"/></svg>
      );
    case 'ipad':
      return (
        <svg viewBox="0 0 48 56" width="44" height="50"><rect x="2" y="2" width="44" height="52" rx="3" fill="#fff" stroke="#1d1d1f" strokeWidth="1"/><rect x="6" y="6" width="36" height="40" rx="1" fill="#a99fde"/></svg>
      );
    case 'watch':
      return (
        <svg viewBox="0 0 36 56" width="32" height="50"><rect x="6" y="14" width="24" height="28" rx="6" fill="#1d1d1f"/><rect x="10" y="2" width="16" height="14" rx="3" fill="#222"/><rect x="10" y="40" width="16" height="14" rx="3" fill="#222"/></svg>
      );
    case 'airpods':
      return (
        <svg viewBox="0 0 56 40" width="50" height="38"><rect x="2" y="14" width="52" height="22" rx="4" fill="#fff" stroke="#1d1d1f" strokeWidth="1"/><circle cx="14" cy="14" r="6" fill="#fff" stroke="#1d1d1f" strokeWidth="1"/><circle cx="42" cy="14" r="6" fill="#fff" stroke="#1d1d1f" strokeWidth="1"/></svg>
      );
    case 'airtag':
      return (
        <svg viewBox="0 0 40 40" width="38" height="38"><circle cx="20" cy="20" r="16" fill="#fff" stroke="#1d1d1f" strokeWidth="1"/><circle cx="20" cy="20" r="6" fill="#1d1d1f"/></svg>
      );
    case 'tv':
      return (
        <svg viewBox="0 0 40 40" width="36" height="36"><rect x="4" y="4" width="32" height="32" rx="6" fill="#1d1d1f"/><circle cx="20" cy="20" r="6" fill="#fff"/></svg>
      );
    case 'acc':
      return (
        <svg viewBox="0 0 36 56" width="32" height="48"><rect x="2" y="2" width="28" height="52" rx="5" fill="#ff6b6b" stroke="#1d1d1f" strokeWidth="1"/><rect x="6" y="6" width="20" height="40" rx="1" fill="#fff"/></svg>
      );
    default: return null;
  }
}

function CategoryRail({ categories }) {
  return (
    <div className="ip-cat-rail">
      {categories.map(c => (
        <a key={c.id} className="ip-cat-item" href="#">
          <div className="ip-cat-glyph"><CategoryGlyph shape={c.shape} /></div>
          <div className="ip-cat-label">{c.label}</div>
        </a>
      ))}
    </div>
  );
}

window.CategoryRail = CategoryRail;
window.CategoryGlyph = CategoryGlyph;
