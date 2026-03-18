import { Mic, ExternalLink, Apple, Youtube, Play } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionWrapper from '../components/SectionWrapper'

const PLATFORMS = [
  {
    icon: Play,
    label: 'Spotify',
    href: 'https://spotify.com',
    desc: 'Listen on Spotify',
    color: 'bg-[#1DB954]',
  },
  {
    icon: Apple,
    label: 'Apple Podcasts',
    href: 'https://podcasts.apple.com',
    desc: 'Listen on Apple Podcasts',
    color: 'bg-[#872EC4]',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    href: 'https://youtube.com',
    desc: 'Watch on YouTube',
    color: 'bg-rust-DEFAULT',
  },
]

const TOPICS = [
  'Prayer & Intercession',
  'Revival',
  'Faith & Trust',
  'The Holy Spirit',
  'Spiritual Discipline',
  'Alignment with Purpose',
  'Hearing God',
  'Kingdom Living',
]

export default function Podcast() {
  return (
    <>
      <PageHero
        label="The Voice of One Podcast"
        title="Teachings to Strengthen & Ignite"
        subtitle="Messages centered on prayer, revival, faith, and alignment with God's purpose — wherever you are."
        bg="bg-navy-dark"
      />

      {/* EMBED PLACEHOLDER + PLATFORMS */}
      <SectionWrapper className="bg-navy">
        <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
          {/* Podcast embed placeholder */}
          <div>
            <p className="section-label mb-6">Latest Episodes</p>
            <div className="border border-gold-DEFAULT/20 bg-navy-dark p-8 relative overflow-hidden mb-6">
              <div className="absolute inset-0 bg-texture opacity-10" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-rust-DEFAULT via-amber-site to-gold-DEFAULT" />
              <div className="relative z-10 flex items-center justify-center min-h-[180px] flex-col gap-4">
                <Mic size={40} className="text-gold-DEFAULT/40" />
                <p className="text-white/40 font-body text-sm text-center">
                  Embed your Spotify or podcast player here.<br />
                  Replace this block with your podcast embed code.
                </p>
                <code className="text-gold-DEFAULT/30 font-mono text-xs bg-navy px-4 py-2">
                  {'<iframe src="https://open.spotify.com/embed/show/YOUR_SHOW_ID" />'}
                </code>
              </div>
            </div>

            {/* Topic tags */}
            <p className="section-label mb-4">Topics We Cover</p>
            <div className="flex flex-wrap gap-2">
              {TOPICS.map(topic => (
                <span
                  key={topic}
                  className="border border-white/10 text-white/60 font-body text-xs tracking-widest uppercase px-4 py-2 hover:border-gold-DEFAULT/40 hover:text-gold-DEFAULT transition-colors cursor-default"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div>
            <p className="section-label mb-6">Listen On</p>
            <div className="space-y-4">
              {PLATFORMS.map(({ icon: Icon, label, href, desc, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border border-white/10 hover:border-gold-DEFAULT/40 p-5 group transition-all duration-300 card-hover"
                >
                  <div className={`w-12 h-12 ${color} flex items-center justify-center shrink-0`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-body text-white text-sm font-medium group-hover:text-gold-DEFAULT transition-colors">{label}</p>
                    <p className="font-body text-white/40 text-xs">{desc}</p>
                  </div>
                  <ExternalLink size={14} className="text-white/20 group-hover:text-gold-DEFAULT transition-colors" />
                </a>
              ))}
            </div>

            <div className="mt-8 border border-gold-DEFAULT/20 p-6 bg-navy-dark">
              <p className="font-display text-xl text-white mb-2">Never Miss an Episode</p>
              <p className="text-white/50 text-sm font-body mb-4">Subscribe on your favourite platform to get notified when new episodes drop.</p>
              <div className="w-8 h-px bg-gold-DEFAULT" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ABOUT THE PODCAST */}
      <SectionWrapper className="bg-navy-dark">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-4">About the Podcast</p>
          <h2 className="font-display text-4xl font-light text-white mb-4">
            One Voice. <span className="italic text-gold-DEFAULT">One Mission.</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-white/60 font-body leading-relaxed mb-4">
            The Voice of One Podcast is a teaching platform sharing messages designed to strengthen believers
            in prayer, revival, faith, and alignment with God's purpose.
          </p>
          <p className="text-white/60 font-body leading-relaxed">
            Each episode is crafted with intention — to ignite hunger for God, provide practical insight
            for the life of prayer, and equip believers to walk with fire in their generation.
          </p>
        </div>
      </SectionWrapper>
    </>
  )
}
