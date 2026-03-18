import { ArrowRight, Youtube } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionWrapper from '../components/SectionWrapper'

const CATEGORIES = ['Prayer Sessions']

const VIDEOS = [
  { id: 'RfwfGavbJC8', title: 'Prayer Session', category: 'Prayer Sessions' },
  { id: 'hWNe7-3quSU', title: 'Prayer Session', category: 'Prayer Sessions' },
  { id: 'CiG_6L_t2Ds', title: 'Prayer Session', category: 'Prayer Sessions' },
  { id: 'VogL4wCGdVU', title: 'Prayer Session', category: 'Prayer Sessions' },
  { id: 'Trvq2dYAM6Q', title: 'Prayer Session', category: 'Prayer Sessions' },
  { id: 'eCaitoipG5s', title: 'Prayer Session', category: 'Prayer Sessions' },
  // { id: 'dQw4w9WgXcQ', title: 'Prayer Session', category: 'Prayer Sessions' },
  // { id: 'dQw4w9WgXcQ', title: 'Teaching: The Power of Intercession', category: 'Teachings' },
  // { id: 'dQw4w9WgXcQ', title: 'Sunday Message', category: 'Messages' },
  // { id: 'dQw4w9WgXcQ', title: 'Deep Waters Prayer Broadcast', category: 'Broadcasts' },
  // { id: 'dQw4w9WgXcQ', title: 'Faith & Revival Teaching', category: 'Teachings' },
  // { id: 'dQw4w9WgXcQ', title: 'Midnight Prayer Watch', category: 'Prayer Sessions' },
]
// 'RfwfGavbJC8', 'hWNe7-3quSU', 'jD3ZlM2QM5s'
// https://youtu.be/CiG_6L_t2Ds
// https://youtu.be/VogL4wCGdVU
// https://youtu.be/Trvq2dYAM6Q
// https://youtu.be/eCaitoipG5s

export default function Media() {
  return (
    <>
      <PageHero
        label="Media & Messages"
        title="Watch, Listen & Be Strengthened"
        subtitle="Prayer sessions, teachings, messages, and ministry broadcasts — all in one place."
        bg="bg-navy-dark"
      />

      <SectionWrapper className="bg-navy">
        {/* Category filter (visual only — connect to state for full filtering) */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              className={`font-body text-xs tracking-widest uppercase px-6 py-2.5 border transition-all duration-200 ${
                i === 0
                  ? 'bg-gold-DEFAULT text-navy-DEFAULT border-gold-DEFAULT'
                  : 'border-white/20 text-white/60 hover:border-gold-DEFAULT/40 hover:text-gold-DEFAULT'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {VIDEOS.map(({ id, title, category }, i) => (
            <div key={i} className="group border border-white/10 hover:border-gold-DEFAULT/30 overflow-hidden transition-all duration-300 card-hover">
              <div className="aspect-video bg-navy-dark overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5 bg-navy-dark">
                <span className="text-gold-DEFAULT font-body text-xs tracking-widest uppercase">{category}</span>
                <p className="font-display text-white text-lg mt-1 group-hover:text-gold-DEFAULT transition-colors">{title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube CTA */}
        <div className="text-center">
          <a
            href="https://youtube.com/@estheradetounadeyeye?si=i2nZOPQdkMcsIELx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-rust-DEFAULT text-white font-body text-sm tracking-widest uppercase px-8 py-4 hover:bg-rust-light transition-colors"
          >
            <Youtube size={28} />
            Visit and Subscribe on YouTube for More
            <ArrowRight size={26} />
          </a>
          <p className="text-white/30 font-body text-xs mt-4">
            New content added regularly. Subscribe so you never miss a message.
          </p>
        </div>
      </SectionWrapper>
    </>
  )
}
