export default function RevealTitle({ eyebrow, title, accent, description, right }) {
  return (
    <div className="section-heading" data-reveal>
      <div>
        <div className="section-eyebrow"><span className="blue-dash" />{eyebrow}</div>
        <h2>{title} {accent && <em>{accent}</em>}</h2>
      </div>
      {right || (description && <p className="section-lead">{description}</p>)}
    </div>
  )
}
