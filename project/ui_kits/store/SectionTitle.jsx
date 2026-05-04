// SectionTitle.jsx — coral headline + grey subhead.
function SectionTitle({ headline, subhead, extra }) {
  return (
    <div className="ip-section-head">
      <h2 className="ip-section-title">
        <em>{headline}</em>. <span>{subhead}</span>
      </h2>
      {extra ? <div className="ip-section-extra">{extra}</div> : null}
    </div>
  );
}

window.SectionTitle = SectionTitle;
