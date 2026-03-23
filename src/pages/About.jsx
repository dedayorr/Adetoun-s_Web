import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionWrapper from "../components/SectionWrapper";
import tounimg from "../pages/images/img2.jpg";

const VALUES = [
  {
    title: "Prayer",
    desc: "Building a lifestyle of intercession and communion with God.",
  },
  {
    title: "Revival",
    desc: "Heralding a movement marked by the power and presence of the Holy Spirit.",
  },
  {
    title: "Discipleship",
    desc: "Raising believers who are rooted, disciplined, and purposeful.",
  },
  {
    title: "The Word",
    desc: "Anchoring every ministry expression in the truth of Scripture.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        label="About Esther"
        title="A Life Poured Out for Revival"
        subtitle="Author · Prayer Leader · Minister · Revival Voice"
        bg="bg-navy-dark"
      />

      {/* BIO */}
      <SectionWrapper className="bg-navy">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Quote card */}
          <div className="relative">
            <div className="aspect-[4/5] lg:aspect-[5/6] bg-navy-light border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-DEFAULT/10 via-transparent to-rust-DEFAULT/10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                <img
                  src={tounimg}
                  alt="Pray with Adetoun - Daily Prayers"
                  className="w-full max-w-sm rounded-xl my-4 mx-auto block object-cover lg:h-"
                />
                <p className="font-accent text-gold-DEFAULT text-xs tracking-widest uppercase">
                  Esther Adetoun Adeyeye
                </p>
              </div>
              <div className="absolute top-5 left-5 w-10 h-10 border-l border-t border-gold-DEFAULT/40" />
              <div className="absolute bottom-5 right-5 w-10 h-10 border-r border-b border-gold-DEFAULT/40" />
            </div>
            <div className="absolute -bottom-5 -left-5 w-28 h-28 bg-amber-site/20 -z-10" />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="section-label">Her Story</p>
            <h2 className="font-display text-4xl font-light text-white leading-tight">
              A Voice Stirring Hearts to{" "}
              <span className="italic text-gold-DEFAULT">
                Prayer and Revival
              </span>
            </h2>
            <div className="w-10 h-px bg-gold-DEFAULT" />
            <p className="text-white/60 font-body leading-relaxed">
              Esther Adetoun Adeyeye is a minister, author, and prayer leader
              devoted to advancing God’s purposes through prayer, discipleship,
              and the ministry of the Spirit, raising a generation grounded in
              truth and set ablaze by the Holy Spirit.
            </p>
            <p className="text-white/60 font-body leading-relaxed">
              Her life and calling are centered on igniting intercession,
              strengthening believers in their walk with God, and heralding
              revival through prayer, discipleship, and the ministry of the Holy
              Spirit.
            </p>
            <p className="text-white/60 font-body leading-relaxed">
              Through teaching, writing, and prayer gatherings, she equips
              believers to cultivate intimacy with God and walk boldly in their
              God-given purpose. Her ministry expressions have impacted lives
              across the globe.
            </p>
            <p className="text-white/60 font-body leading-relaxed">
              Esther is the convener of Pray With Adetoun, a global prayer
              movement with expressions including the Daily Prayer Watch (12:00
              AM – 2:00 AM CST), the Audio Podcast Prayers, and the monthly
              6-hour Deep Waters prayer gathering. She is also the convener of
              Singles & Miracles and the Voice of One Podcast, reaching diverse
              audiences with messages of faith, alignment, and transformation.
            </p>
            <p className="text-white/60 font-body leading-relaxed">
              She currently serves as a Minister and Prayer Leader at KingsWord
              International Church under the apostolic oversight of Dr. Kay and
              Pastor May Ijisesan.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link to="/pray-with-adetoun" className="btn-primary">
                Join Prayer Watch <ArrowRight size={16} />
              </Link>
              <Link to="/speaking" className="btn-outline">
                Invite Esther to Speak
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CORE VALUES */}
      <SectionWrapper className="bg-navy-dark">
        <div className="text-center mb-14">
          <p className="section-label mb-3">What Drives Her</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white">
            Core Pillars of Ministry
          </h2>
          <div className="divider-gold" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map(({ title, desc }, i) => (
            <div
              key={title}
              className="relative border border-white/10 p-8 hover:border-gold-DEFAULT/40 transition-all duration-300 group"
            >
              <div className="absolute top-6 right-6 font-accent text-4xl text-white/5 group-hover:text-gold-DEFAULT/10 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="w-8 h-px bg-gold-DEFAULT mb-6" />
              <h3 className="font-display text-2xl font-light text-white mb-3 group-hover:text-gold-DEFAULT transition-colors">
                {title}
              </h3>
              <p className="text-white/50 text-sm font-body leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-gradient-to-r from-rust-DEFAULT via-amber-site to-gold-DEFAULT py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-light text-navy-DEFAULT mb-4">
            Be Part of the Movement
          </h2>
          <p className="text-navy-DEFAULT/70 font-body mb-8">
            Join thousands of intercessors walking in prayer and revival across
            the globe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/pray-with-adetoun"
              className="inline-flex items-center justify-center gap-2 bg-navy-DEFAULT text-gold-DEFAULT font-body text-sm tracking-widest uppercase px-8 py-4 hover:bg-navy-dark transition-colors"
            >
              Join Prayer Watch <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-navy-DEFAULT text-navy-DEFAULT font-body text-sm tracking-widest uppercase px-8 py-4 hover:bg-navy-DEFAULT/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
