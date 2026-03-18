import { useState } from 'react'
import { ArrowRight, Youtube, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionWrapper from '../components/SectionWrapper'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const SOCIALS = [
  { icon: Youtube, label: 'YouTube', handle: '@EstherAdeyeye', href: 'https://youtube.com/@estheradetounadeyeye?si=i2nZOPQdkMcsIELx', color: 'bg-rust-DEFAULT' },
  { icon: FaInstagram, label: 'Instagram', handle: '@adeyeye_adetoun', href: 'https://www.instagram.com/adeyeye_adetoun?igsh=MXdyeTF2M3oxbzNxcA%3D%3D&utm_source=qr', },
  // { icon: Radio, label: 'Mixlr', handle: 'Pray With Adetoun', href: 'https://mixlr.com', color: 'bg-amber-site' },
  { icon: FaFacebook, label: 'Facebook', handle: 'Esther Adetoun Adeyeye', href: 'https://www.facebook.com/estheradetounadeyeye',  },
]

const INQUIRY_TYPES = [
  'General Inquiry',
  'Speaking Invitation',
  'Ministry Collaboration',
  'Books & Resources',
  'Prayer Request',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // TODO: wire to your form backend (Formspree, EmailJS, Netlify Forms, etc.)
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        label="Contact & Connect"
        title="Reach Out & Connect"
        subtitle="For speaking invitations, ministry collaborations, or general inquiries — we'd love to hear from you."
        bg="bg-navy-dark"
      />

      <SectionWrapper className="bg-navy">
        <div className="grid md:grid-cols-[2fr_1fr] gap-16 items-start">

          {/* FORM */}
          <div>
            <p className="section-label mb-6">Send a Message</p>

            {submitted ? (
              <div className="border border-gold-DEFAULT/30 bg-navy-dark p-10 text-center">
                <CheckCircle size={40} className="text-gold-DEFAULT mx-auto mb-4" />
                <h3 className="font-display text-3xl text-white mb-2">Message Received</h3>
                <div className="w-8 h-px bg-gold-DEFAULT mx-auto my-4" />
                <p className="text-white/60 font-body">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-xs tracking-widest uppercase text-white/50 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-navy-dark border border-white/10 focus:border-gold-DEFAULT/60 text-white font-body text-sm px-5 py-3.5 outline-none transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs tracking-widest uppercase text-white/50 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-navy-dark border border-white/10 focus:border-gold-DEFAULT/60 text-white font-body text-sm px-5 py-3.5 outline-none transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-white/50 mb-2">
                    Nature of Inquiry
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full bg-navy-dark border border-white/10 focus:border-gold-DEFAULT/60 text-white font-body text-sm px-5 py-3.5 outline-none transition-colors appearance-none"
                  >
                    <option value="">Select an option</option>
                    {INQUIRY_TYPES.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-white/50 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Share your message, inquiry, or invitation details here..."
                    className="w-full bg-navy-dark border border-white/10 focus:border-gold-DEFAULT/60 text-white font-body text-sm px-5 py-3.5 outline-none transition-colors placeholder:text-white/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  Send Message <ArrowRight size={16} />
                </button>

                <p className="text-white/20 text-xs font-body text-center">
                  We typically respond within 2–3 business days.
                </p>
              </form>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="space-y-8">
            <div>
              <p className="section-label mb-6">Follow & Connect</p>
              <div className="space-y-3">
                {SOCIALS.map(({ icon: Icon, label, handle, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 border border-white/10 hover:border-gold-DEFAULT/30 p-4 group transition-all duration-300"
                  >
                    <div className={`w-10 h-10 ${color} flex items-center justify-center shrink-0`}>
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-body text-white text-sm group-hover:text-gold-DEFAULT transition-colors">{label}</p>
                      <p className="font-body text-white/40 text-xs">{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="border border-gold-DEFAULT/20 p-6 bg-navy-dark relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-rust-DEFAULT via-amber-site to-gold-DEFAULT" />
              <p className="section-label mb-3">Prayer Watch</p>
              <p className="font-display text-2xl text-white font-light mb-2">12:00 AM – 2:00 AM CST, 6:00 AM - 8:00 AM WAT</p>
              <div className="w-6 h-px bg-gold-DEFAULT mb-3" />
              <p className="text-white/50 text-sm font-body mb-4">
                Join nightly on Telegram, Mixlr, or YouTube.
              </p>
              <a
                href="https://t.me/praywithadetoun"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold-DEFAULT text-xs font-body tracking-widest uppercase hover:gap-4 transition-all duration-300"
              >
                Join on Telegram <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
