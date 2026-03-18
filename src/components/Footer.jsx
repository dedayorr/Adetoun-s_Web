import { Link } from 'react-router-dom'
import { Youtube, Send, Radio, Mic2 } from 'lucide-react'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Esther' },
  { to: '/ministries', label: 'Ministries' },
  { to: '/pray-with-adetoun', label: 'Pray With Adetoun' },
  { to: '/singles-and-miracles', label: 'Singles & Miracles' },
  { to: '/podcast', label: 'The Voice of One' },
  { to: '/books', label: 'Books & Resources' },
  { to: '/media', label: 'Media' },
  { to: '/speaking', label: 'Speaking' },
  { to: '/contact', label: 'Contact' },
]

const SOCIAL = [
  { href: 'https://youtube.com/@estheradetounadeyeye?si=i2nZOPQdkMcsIELx', icon: Youtube, label: 'YouTube' },
  { href: 'https://t.me/praywithadetoun', icon: Send, label: 'Telegram' },
  { href: 'https://praywithadetoun.mixlr.com/', icon: Radio, label: 'Mixlr' },
  { href: 'https://open.spotify.com/show/048IHm26dtJt5QwI3vOxcd?si=qfatvqRUTYSbKNrClaBhQA', icon: Mic2, label: 'Podcast' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/10">
      <div className="bg-gradient-to-r from-rust via-amber-site to-gold py-5 px-6 text-center">
        <p className="font-accent text-navy text-sm tracking-widest uppercase">
          Daily Prayer Watch · 12:00 AM – 2:00 AM CST · Join on Telegram, Mixlr & YouTube
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="font-accent text-gold text-xs tracking-widest2 uppercase mb-1">Esther Adetoun</div>
          <div className="font-display text-white text-2xl font-light mb-4">Adeyeye</div>
          <div className="w-10 h-px bg-gold mb-4" />
          <p className="text-white/50 text-sm leading-relaxed font-body">
            Heralding Revival Through Prayer, Truth, and Discipleship.
          </p>
          <div className="flex gap-4 mt-6">
            {SOCIAL.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="section-label mb-6">Navigation</h4>
          <ul className="space-y-3">
            {LINKS.slice(0, 5).map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-white/50 text-sm hover:text-gold transition-colors font-body">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="section-label mb-6 opacity-0 select-none">Nav</h4>
          <ul className="space-y-3">
            {LINKS.slice(5).map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-white/50 text-sm hover:text-gold transition-colors font-body">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/30 text-xs font-body">
          © {new Date().getFullYear()} Esther Adetoun Adeyeye. All rights reserved.
        </p>
        <p className="text-white/20 text-xs font-body italic">
          "Raising intercessors. Heralding revival."
        </p>
      </div>
    </footer>
  )
}
