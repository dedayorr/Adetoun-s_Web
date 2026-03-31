import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionWrapper from "../components/SectionWrapper";

// 📁 Place these images in your src/assets/ folder
import speakLifeCover from "../assets/SpeakLife.png";
import freeCover from "../assets/Free.png";
import prayerJournal from "../assets/MyPrayerJournal.png";

const BOOKS = [
  {
    title: "Speak Life",
    type: "Book",
    price: "Available",
    desc: "A powerful resource on the ministry of words, prayer declarations, and the authority believers carry through speech.",
    topics: ["Declarations", "Prayer", "Faith"],
    cta: "Get on Amazon",
    href: "https://a.co/d/03snjcv7",
    ebook: "https://stan.store/speaklifeebook/p/get-speak-life-ebook-now",
    cover: speakLifeCover,
  },
  {
    title: "My Prayer Journal",
    type: "Journal",
    price: "Available",
    desc: "A 12-week journey of devotion and fellowship with God — a structured journal designed to help believers develop consistency and depth in prayer.",
    topics: ["Intercession", "Journaling", "Discipline"],
    cta: "Get on Amazon",
    href: "https://a.co/d/0dtZN83c",
    cover: prayerJournal,
  },
  {
    title: "Free",
    type: "Devotional",
    price: "Available",
    desc: "A 31-Day Devotional on Lust & Addiction — crafted to anchor believers in the Word and cultivate a deeper walk with the Holy Spirit.",
    topics: ["Devotion", "Scripture", "Freedom"],
    cta: "Get on Amazon",
    href: "https://a.co/d/0hKPULZW",
    cover: freeCover,
  },
];

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
          {BOOKS.map(
            ({ title, type, price, desc, topics, cta, href, ebook, cover }) => (
              <div
                key={title}
                className="group border border-white/10 hover:border-gold-DEFAULT/40 flex flex-col overflow-hidden transition-all duration-500 card-hover"
              >
                {/* Real book cover image */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={cover}
                    alt={`${title} cover`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Price badge */}
                  <div className="absolute top-4 right-4 bg-navy-DEFAULT/70 backdrop-blur-sm px-3 py-1">
                    <span className="font-accent text-gold-DEFAULT text-xs tracking-widest uppercase">
                      {price}
                    </span>
                  </div>
                  {/* Type badge */}
                  <div className="absolute top-4 left-4 bg-navy-DEFAULT/70 backdrop-blur-sm px-3 py-1">
                    <span className="font-accent text-white/70 text-xs tracking-widest uppercase">
                      {type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-navy-dark p-8 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-light text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-white/60 font-body text-sm leading-relaxed mb-6">
                    {desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {topics.map((t) => (
                      <span
                        key={t}
                        className="border border-white/10 text-white/40 font-body text-xs uppercase tracking-widest px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-col gap-3">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold-DEFAULT font-body text-sm tracking-widest uppercase hover:gap-4 transition-all duration-300 group-hover:text-gold-light"
                    >
                      {cta} <ExternalLink size={13} />
                    </a>
                    {ebook && (
                      <a
                        href={ebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white/50 font-body text-sm tracking-widest uppercase hover:text-white/80 hover:gap-4 transition-all duration-300"
                      >
                        Get eBook <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </SectionWrapper>

      {/* Coming Soon */}
      <SectionWrapper className="bg-navy-dark">
        <div className="border border-dashed border-gold-DEFAULT/30 p-12 text-center">
          <p className="section-label mb-4">Coming Soon</p>
          <h2 className="font-display text-3xl font-light text-white mb-4">
            More Resources on the Way
          </h2>
          <div className="divider-gold" />
          <p className="text-white/50 font-body mb-8">
            New books, journals, and study materials are being prepared. Stay
            connected to be the first to know.
          </p>
          <Link to="/contact" className="btn-outline">
            Stay Updated <ArrowRight size={16} />
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
