import { Link } from 'react-router-dom'
import { ArrowRight, Play, Clock, Users, BookOpen, Mic } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeader from '../components/SectionHeader'
import useScrollAnimation from '../components/hooks/useScrollAnimation'

const MINISTRIES = [
  {
    icon: Clock,
    title: 'Pray With Adetoun',
    desc: 'A global prayer movement with a daily prayer watch from 12:00 AM – 2:00 AM CST. Join thousands of intercessors worldwide.',
    to: '/pray-with-adetoun',
    accent: 'bg-rust-DEFAULT',
  },
  {
    icon: Users,
    title: 'Singles & Miracles',
    desc: 'Strengthening, encouraging, and preparing singles through prayer, teaching, and spiritual guidance.',
    to: '/singles-and-miracles',
    accent: 'bg-amber-site',
  },
  {
    icon: Mic,
    title: 'The Voice of One',
    desc: 'Teachings centered on prayer, revival, and spiritual growth — available on Spotify, Apple Podcasts, and YouTube.',
    to: '/podcast',
    accent: 'bg-gold-DEFAULT',
  },
  {
    icon: BookOpen,
    title: 'Books & Resources',
    desc: 'Faith-based books and journals to help believers deepen their prayer life and grow spiritually.',
    to: '/books',
    accent: 'bg-navy-light',
  },
]

const YOUTUBE_IDS = ['RfwfGavbJC8', 'hWNe7-3quSU', 'jD3ZlM2QM5s']
// https://youtu.be/RfwfGavbJC8
// https://youtu.be/hWNe7-3quSU
// https://youtu.be/jD3ZlM2QM5s

export default function Home() {
  useScrollAnimation()
  return (
    <>
    {/* HERO — animations handled by CSS keyframes */}
    <section className="hero-background relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-dark pt-[40%] pb-[10%] md:pb-0 md:pt-[0%]">
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <p className="section-label mb-6">Revival · Prayer · Discipleship</p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-light text-white leading-none mb-2">
          Heralding Revival
        </h1>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light italic text-gold-DEFAULT mb-8">
          Through Prayer, Truth & Discipleship
        </h2>
        <div className="divider-gold" />
        <p className="text-white/60 text-lg md:text-xl font-body font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Esther Adetoun Adeyeye is an author, prayer leader, and revival voice committed to raising
          intercessors, strengthening believers, and setting generations aflame with the fire of the Holy Spirit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/pray-with-adetoun" className="btn-primary">
            Join Prayer <ArrowRight size={16} />
          </Link>
          <Link to="/ministries" className="btn-outline">
            Explore Ministries
          </Link>
        </div>
      </div>
    </section>

    {/* ABOUT PREVIEW */}
    <SectionWrapper className="bg-navy">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="anim-fade-left">
          <p className="section-label mb-4">About Esther</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight mb-2">
            A Life Dedicated to <span className="italic text-gold-DEFAULT">God's Purposes</span>
          </h2>
          <div className="w-10 h-px bg-gold-DEFAULT my-6" />
          <p className="text-white/60 font-body leading-relaxed mb-6">
            Esther Adetoun Adeyeye is a minister, author, and prayer leader whose life is dedicated to
            advancing God's purposes through prayer, discipleship, and teaching.
          </p>
          <img
            src="/dist/assets/IMG_7386.JPG"
            alt="Pray with Adetoun - Daily Prayers"
            className="w-full max-w-sm rounded-xl my-4 mx-auto block object-contain h-[450px]"
          />
          <p className="text-white/60 font-body leading-relaxed mb-8">
            Her passion is to see lives transformed through the Word of God, to raise disciplined
            intercessors, and to herald a movement of revival marked by the power and presence of the Holy Spirit.
          </p>
          <Link to="/about" className="btn-outline">
            Read Her Story <ArrowRight size={16} />
          </Link>
        </div>

        <div className="relative intercessor-div anim-fade-right">
          <div className="aspect-[3/4] lg:aspect-[4/3] bg-navy-light border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="font-display text-8xl text-gold-DEFAULT/20 font-light">"</div>
                <p className="font-display text-2xl lg:text-[40px] text-white/80 italic leading-relaxed">
                  Raising intercessors. Heralding revival. Setting generations aflame.
                </p>
              </div>
            </div>
            <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-gold-DEFAULT/40" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-gold-DEFAULT/40" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rust-DEFAULT/30 -z-10" />
        </div>
      </div>
    </SectionWrapper>

    {/* MINISTRIES */}
    <SectionWrapper className="bg-navy-dark">
      <SectionHeader
        label="Ministry Expressions"
        title="Ways to Walk Together"
        subtitle="Join a growing global community committed to prayer, revival, and spiritual transformation."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MINISTRIES.map(({ icon: Icon, title, desc, to, accent }, i) => (
          <Link
            key={to}
            to={to}
            className={`group bg-navy border border-white/10 hover:border-gold-DEFAULT/40 p-8 flex flex-col card-hover anim-fade-up delay-${i + 1}`}
          >
            <div className={`w-12 h-12 ${accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <Icon size={20} className="text-white" />
            </div>
            <h3 className="font-display text-xl font-light text-white mb-3 group-hover:text-gold-DEFAULT transition-colors">
              {title}
            </h3>
            <p className="text-white/50 text-sm font-body leading-relaxed flex-1">{desc}</p>
            <div className="mt-6 flex items-center gap-2 text-gold-DEFAULT text-xs tracking-widest uppercase font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Learn More <ArrowRight size={12} />
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>

    {/* PRAYER BANNER */}
    <section className="bg-gradient-to-r from-rust-DEFAULT via-amber-site to-gold-DEFAULT py-16 px-6">
      <div className="max-w-4xl mx-auto text-center anim-scale-in">
        <p className="font-accent text-navy-DEFAULT text-xs tracking-widest2 uppercase mb-4">Daily Prayer Watch</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-navy-DEFAULT mb-4">
          12:00 AM – 2:00 AM CST
        </h2>
        <p className="text-navy-DEFAULT/70 font-body mb-8">
          Join globally through Telegram, Mixlr, and YouTube. Every night. Without fail.
        </p>
        <Link to="/pray-with-adetoun" className="inline-flex items-center gap-2 bg-navy-DEFAULT text-gold-DEFAULT font-body text-sm tracking-widest uppercase px-8 py-4 hover:bg-navy-dark transition-colors">
          Join the Watch <ArrowRight size={16} />
        </Link>
      </div>
    </section>

    {/* LATEST MESSAGES */}
    <SectionWrapper className="bg-navy">
      <SectionHeader label="Latest Sessions" title="Recent Teachings & Prayer Sessions" />
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {YOUTUBE_IDS.map((id, i) => (
          <div
            key={i}
            className={`aspect-video bg-navy-dark border border-white/10 overflow-hidden card-hover anim-fade-up delay-${i + 1}`}
          >
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title={`Message ${i + 1}`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4 anim-fade-up delay-4">
        <a href="https://youtube.com/@estheradetounadeyeye?si=i2nZOPQdkMcsIELx" target="_blank" rel="noopener noreferrer" className="btn-outline">
          Watch on YouTube <ArrowRight size={16} />
        </a>
        <Link to="/media" className="btn-primary">
          View More <ArrowRight size={16} />
        </Link>
      </div>
    </SectionWrapper>
  </>

  )
}
