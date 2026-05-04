export default function SectionTitle({ headline, subhead }: { headline: string; subhead: string }) {
  return (
    <div className="ip-section-head">
      <h2 className="ip-section-title">
        <em>{headline}</em>. <span>{subhead}</span>
      </h2>
    </div>
  )
}
