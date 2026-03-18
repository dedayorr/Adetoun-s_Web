export default function PageHero({ label, title, subtitle, bg = 'bg-navy-dark' }) {
  return (
    <section className={`${bg} relative pt-36 pb-20 px-6 overflow-hidden`}>
      <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rust/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {label && <p className="section-label mb-4">{label}</p>}
        <h1 className="font-display text-5xl md:text-7xl font-light text-white leading-tight mb-4">
          {title}
        </h1>
        <div className="divider-gold" />
        {subtitle && (
          <p className="text-white/60 text-lg font-body font-light leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
