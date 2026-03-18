import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, ExternalLink } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionWrapper from '../components/SectionWrapper'

const BOOKS = [
  {
    title: 'Speak Life',
    type: 'Book',
    price: 'Free',
    desc: 'A powerful resource on the ministry of words, prayer declarations, and the authority believers carry through speech. Available as a free download.',
    topics: ['Declarations', 'Prayer', 'Faith'],
    accent: 'from-rust-DEFAULT to-amber-site',
    cta: 'Download Free',
    href: '#',
  },
  {
    title: 'Prayer Journal',
    type: 'Journal',
    price: 'Available',
    desc: 'A structured prayer journal designed to help believers develop consistency, depth, and intentionality in their prayer life.',
    topics: ['Intercession', 'Journaling', 'Discipline'],
    accent: 'from-amber-site to-gold-DEFAULT',
    cta: 'Get Your Copy',
    href: '#',
  },
  {
    title: 'Devotional Resource',
    type: 'Devotional',
    price: 'Available',
    desc: 'Daily devotionals crafted to anchor believers in the Word and cultivate a deeper walk with the Holy Spirit.',
    topics: ['Devotion', 'Scripture', 'Growth'],
    accent: 'from-gold-DEFAULT to-gold-light',
    cta: 'Learn More',
    href: '#',
  },
]

export default function Books() {
  return (
    <>
      <PageHero
        label="Books & Resources"
        title="Tools for the Deeper Life"
        subtitle="Faith-based books and journals designed to help believers grow spiritually and develop a deeper prayer life."
        bg="bg-navy-dark"
      />

      <SectionWrapper className="bg-navy">
        <div className="grid md:grid-cols-3 gap-8">
          {BOOKS.map(({ title, type, price, desc, topics, accent, cta, href }) => (
            <div
              key={title}
              className="group border border-white/10 hover:border-gold-DEFAULT/40 flex flex-col overflow-hidden transition-all duration-500 card-hover"
            >
              {/* Cover area */}
              <div className={`bg-gradient-to-br ${accent} aspect-[3/4] relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-texture opacity-20" />
                <div className="relative z-10 text-center px-6">
                  <BookOpen size={40} className="text-white/40 mx-auto mb-4" />
                  <p className="font-accent text-white text-xs tracking-widest uppercase mb-2">{type}</p>
                  <h3 className="font-display text-3xl font-light text-white">{title}</h3>
                  <div className="w-8 h-px bg-white/40 mx-auto my-4" />
                  <p className="font-body text-white/60 text-sm">Esther Adetoun Adeyeye</p>
                </div>
                {/* Price badge */}
                <div className="absolute top-4 right-4 bg-navy-DEFAULT/60 backdrop-blur-sm px-3 py-1">
                  <span className="font-accent text-gold-DEFAULT text-xs tracking-widest uppercase">{price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-navy-dark p-8 flex flex-col flex-1">
                <p className="text-white/60 font-body text-sm leading-relaxed mb-6">{desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {topics.map(t => (
                    <span key={t} className="border border-white/10 text-white/40 font-body text-xs uppercase tracking-widest px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={href}
                  className="mt-auto inline-flex items-center gap-2 text-gold-DEFAULT font-body text-sm tracking-widest uppercase hover:gap-4 transition-all duration-300 group-hover:text-gold-light"
                >
                  {cta} <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Coming Soon */}
      <SectionWrapper className="bg-navy-dark">
        <div className="border border-dashed border-gold-DEFAULT/30 p-12 text-center">
          <p className="section-label mb-4">Coming Soon</p>
          <h2 className="font-display text-3xl font-light text-white mb-4">More Resources on the Way</h2>
          <div className="divider-gold" />
          <p className="text-white/50 font-body mb-8">
            New books, journals, and study materials are being prepared. Stay connected to be the first to know.
          </p>
          <Link to="/contact" className="btn-outline">
            Stay Updated <ArrowRight size={16} />
          </Link>
        </div>
      </SectionWrapper>
    </>
  )
}
