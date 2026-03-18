import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionWrapper from '../components/SectionWrapper'

const POSTS = [
  {
    slug: 'why-prayer-changes-everything',
    category: 'Prayer',
    title: 'Why Prayer Changes Everything',
    excerpt:
      'Prayer is not a religious ritual — it is the breath of the believer. In this post, we explore what happens in the unseen realm when we press into God with consistency and faith.',
    date: 'March 10, 2025',
    readTime: '5 min read',
    featured: true,
  },
  {
    slug: 'the-intercessor-identity',
    category: 'Intercession',
    title: 'The Intercessor Identity',
    excerpt:
      'Not everyone knows they are called to intercession — but every believer carries the invitation. Discover what it means to stand in the gap for your family, city, and generation.',
    date: 'February 28, 2025',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'waiting-on-god-as-a-single',
    category: 'Singles & Miracles',
    title: 'Waiting on God as a Single',
    excerpt:
      'Waiting is not wasted time. God is doing something profound in the season of singleness — and this post will help you see it through the lens of faith and purpose.',
    date: 'February 14, 2025',
    readTime: '4 min read',
    featured: false,
  },
  {
    slug: 'revival-starts-with-you',
    category: 'Revival',
    title: 'Revival Starts With You',
    excerpt:
      'We often pray for revival to come to our cities and nations — but revival always begins in a single surrendered heart. Here is how to become a carrier of the fire.',
    date: 'January 30, 2025',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'deep-waters-what-it-means-to-pray-for-six-hours',
    category: 'Prayer',
    title: 'Deep Waters: What It Means to Pray for Six Hours',
    excerpt:
      'Monthly, believers gather for Deep Waters Prayer — a six-hour watch of intercession and worship. This post shares what happens when you go beyond the surface in prayer.',
    date: 'January 12, 2025',
    readTime: '5 min read',
    featured: false,
  },
]

const CATEGORIES = ['All', 'Prayer', 'Intercession', 'Revival', 'Singles & Miracles']

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? POSTS
      : POSTS.filter((p) => p.category === activeCategory)

  const featured = POSTS.find((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)

  return (
    <>
      <PageHero
        label="Thoughts & Reflections"
        title="The Blog"
        subtitle="Words rooted in Scripture, prayer, and the journey of faith — written to stir hunger, build faith, and fuel revival."
        bg="bg-navy-dark"
      />

      <SectionWrapper className="bg-navy">

        {/* Featured Post */}
        {activeCategory === 'All' && featured && (
          <div className="border border-white/10 hover:border-gold-DEFAULT/30 transition-all duration-500 grid md:grid-cols-2 overflow-hidden mb-12">
            <div className="bg-gradient-to-br from-rust-DEFAULT to-amber-site min-h-[260px] flex items-end p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-texture opacity-10" />
              <div className="relative z-10">
                <span className="inline-block bg-white/20 text-white font-body text-xs tracking-widest uppercase px-4 py-1.5 mb-4">
                  Featured
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-light text-white leading-tight">
                  {featured.title}
                </h2>
              </div>
            </div>
            <div className="bg-navy-dark p-10 flex flex-col justify-between">
              <div>
                <span className="font-accent text-gold-DEFAULT text-xs tracking-widest uppercase">
                  {featured.category}
                </span>
                <p className="text-white/60 font-body leading-relaxed mt-4 mb-6">
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-white/30 font-body text-xs">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {featured.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                </div>
                <Link
                  to={`/blog/${featured.slug}`}
                  className="inline-flex items-center gap-2 text-gold-DEFAULT font-body text-sm tracking-widest uppercase hover:gap-4 transition-all duration-300"
                >
                  Read <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs tracking-widest uppercase px-5 py-2 border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold-DEFAULT text-navy-DEFAULT border-gold-DEFAULT'
                  : 'border-white/20 text-white/60 hover:border-gold-DEFAULT/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map(({ slug, category, title, excerpt, date, readTime }) => (
            <div
              key={slug}
              className="border border-white/10 hover:border-gold-DEFAULT/30 transition-all duration-500 flex flex-col overflow-hidden group"
            >
              <div className="bg-navy-light p-8 flex-1">
                <span className="font-accent text-gold-DEFAULT text-xs tracking-widest uppercase">
                  {category}
                </span>
                <h3 className="font-display text-xl font-light text-white mt-3 mb-4 leading-snug">
                  {title}
                </h3>
                <p className="text-white/50 font-body text-sm leading-relaxed">{excerpt}</p>
              </div>
              <div className="bg-navy-dark px-8 py-5 flex items-center justify-between">
                <div className="flex items-center gap-4 text-white/30 font-body text-xs">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {readTime}</span>
                </div>
                <Link
                  to={`/blog/${slug}`}
                  className="inline-flex items-center gap-1 text-gold-DEFAULT font-body text-xs tracking-widest uppercase hover:gap-3 transition-all duration-300"
                >
                  Read <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </SectionWrapper>
    </>
  )
}