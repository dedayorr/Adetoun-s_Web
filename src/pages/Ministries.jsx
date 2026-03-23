import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Users, Mic, MessageSquare } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionWrapper from '../components/SectionWrapper'

const MINISTRIES = [
  {
    icon: Clock,
    label: 'Global Prayer Movement',
    title: 'Pray With Adetoun',
    desc: [
      'Pray With Adetoun (PWA) is a global prayer movement committed to raising disciplined intercessors who press into God\'s presence consistently and fervently.',
      'The daily prayer watch runs from 🇺🇸 CST: 12:00 AM – 2:00 AM, 🇳🇬 WAT: 6:00 AM – 8:00 AM, 🇬🇧 GMT: 5:00 AM – 7:00 AM gathering believers from around the world in unified intercession.',
      'Once a month, PWA also hosts Deep Waters Prayer — a six-hour extended prayer gathering dedicated to deeper spiritual seeking, renewal, and alignment with God\'s purposes.',
    ],
    to: '/pray-with-adetoun',
    accent: 'from-rust-DEFAULT to-amber-site',
    badge: 'Daily 12AM–2AM CST, 6AM-8AM WAT, 5AM-7AM GMT',
  }, 
  {
    icon: Users,
    label: 'Encouragement & Guidance',
    title: 'Singles & Miracles',
    desc: [
      'Singles & Miracles is a ministry devoted to encouraging and strengthening singles through prayer, teaching, and spiritual guidance.',
      'The ministry helps singles grow spiritually, trust God\'s promises concerning marriage and destiny, and develop character and faith while waiting on the Lord.',
      'Through intentional discipleship, teaching sessions, and prayer, singles are equipped to walk in purpose and stand firm in God\'s design for their lives.',
    ],
    to: '/singles-and-miracles',
    accent: 'from-amber-site to-gold-DEFAULT',
    badge: 'For Singles',
  },
  {
    icon: Mic,
    label: 'Audio Teachings',
    title: 'The Voice of One Podcast',
    desc: [
      'The Voice of One Podcast is a teaching platform sharing messages centered on prayer, revival, faith, and spiritual alignment with God\'s purpose.',
      'Each episode is crafted to strengthen believers, ignite hunger for God, and provide practical insight for the life of prayer and intercession.',
      'Available on Spotify, Apple Podcasts, and YouTube.',
    ],
    to: 'https://open.spotify.com/show/048IHm26dtJt5QwI3vOxcd?si=qfatvqRUTYSbKNrClaBhQA',
    accent: 'from-gold-DEFAULT to-gold-light',
    badge: 'New Episodes Weekly',
  },
  {
    icon: MessageSquare,
    label: 'Ministry & Events',
    title: 'Speaking',
    desc: [
      'Esther is available to minister at church gatherings, prayer meetings, conferences, women\'s events, and discipleship gatherings.',
      'Her messages are rooted in Scripture and delivered with fire — covering topics such as prayer and intercession, revival, faith, purpose, and the work of the Holy Spirit.',
      'To invite Esther to speak at your event, visit the Speaking page.',
    ],
    to: '/speaking',
    accent: 'from-amber-site to-gold-DEFAULT',
    badge: 'Available to Minister',
  },
]

export default function Ministries() {
  return (
    <>
      <PageHero
        label="Ministry Expressions"
        title="Ways We Walk Together"
        subtitle="Every expression of ministry flows from one conviction — that prayer changes everything and revival is possible in our generation."
        bg="bg-navy-dark"
      />

      <SectionWrapper className="bg-navy">
        <div className="space-y-6">
          {MINISTRIES.map(({ icon: Icon, label, title, desc, to, accent, badge }, i) => (
            <div
              key={to}
              className="group grid md:grid-cols-[1fr_2fr] border border-white/10 hover:border-gold-DEFAULT/30 transition-all duration-500 overflow-hidden"
            >
              {/* Left accent panel */}
              <div className={`bg-gradient-to-br ${accent} p-10 flex flex-col justify-between relative overflow-hidden min-h-[220px]`}>
                <div className="absolute inset-0 bg-texture opacity-10" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-white" />
                  </div>
                  <p className="font-accent text-white/70 text-xs tracking-widest uppercase mb-2">{label}</p>
                  <h3 className="font-display text-3xl font-light text-white">{title}</h3>
                </div>
                <div className="relative z-10 mt-6">
                  <span className="inline-block bg-white/20 text-white font-body text-xs tracking-widest uppercase px-4 py-1.5">
                    {badge}
                  </span>
                </div>
                {/* Number watermark */}
                <div className="absolute bottom-4 right-6 font-display text-8xl text-white/5 font-light">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Right content */}
              <div className="bg-navy-dark p-10 flex flex-col justify-between">
                <div className="space-y-4">
                  {desc.map((p, pi) => (
                    <p key={pi} className="text-white/60 font-body leading-relaxed">{p}</p>
                  ))}
                </div>
                <Link
                  to={to}
                  className="inline-flex items-center gap-2 text-gold-DEFAULT font-body text-sm tracking-widest uppercase mt-8 hover:gap-4 transition-all duration-300 group-hover:text-gold-light"
                >
                  Explore {title} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-gradient-to-r from-rust-DEFAULT via-amber-site to-gold-DEFAULT py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-light text-navy-DEFAULT mb-4">
            Ready to Get Involved?
          </h2>
          <p className="text-navy-DEFAULT/70 font-body mb-8">
            Whether you're joining the prayer watch, tuning into the podcast, or inviting Esther to speak — there's a place for you here.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-navy-DEFAULT text-gold-DEFAULT font-body text-sm tracking-widest uppercase px-8 py-4 hover:bg-navy-dark transition-colors"
          >
            Connect With Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
