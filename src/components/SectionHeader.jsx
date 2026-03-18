export default function SectionHeader({ label, title, subtitle, centered = true }) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      {label && <p className="section-label mb-3">{label}</p>}
      <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight">
        {title}
      </h2>
      <div className={`divider-gold ${centered ? '' : '!mx-0'}`} />
      {subtitle && (
        <p className="text-white/60 font-body leading-relaxed max-w-2xl mx-auto mt-4">
          {subtitle}
        </p>
      )}
    </div>
  )
}
