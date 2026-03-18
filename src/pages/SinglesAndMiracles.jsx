import { Link } from "react-router-dom";
import { ArrowRight, Heart, Star, Shield, BookOpen } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionWrapper from "../components/SectionWrapper";

const PILLARS = [
  {
    icon: Heart,
    title: "Prayer",
    desc: "Learning to bring every desire, every question, and every longing to God in prayer.",
  },
  {
    icon: BookOpen,
    title: "Teaching",
    desc: "Grounded in Scripture, offering practical and spiritual insight for the season of singleness.",
  },
  {
    icon: Shield,
    title: "Character",
    desc: "Building the inner life — integrity, discipline, and spiritual depth — that precedes promotion.",
  },
  {
    icon: Star,
    title: "Faith",
    desc: "Holding on to God's promises concerning marriage, destiny, and divine timing.",
  },
];

export default function SinglesAndMiracles() {
  return (
    <>
      <PageHero
        label="Singles & Miracles"
        title="Strengthened While You Wait"
        subtitle="A ministry devoted to encouraging singles to grow, trust, and walk boldly in their God-given purpose."
        bg="bg-navy-dark"
      />

      {/* INTRO */}
      <SectionWrapper className="bg-navy">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">About the Ministry</p>
            <h2 className="font-display text-4xl font-light text-white leading-tight mb-2">
              Your Season of Singleness is{" "}
              <span className="italic text-gold-DEFAULT">Sacred Ground</span>
            </h2>
            <div className="w-10 h-px bg-gold-DEFAULT my-6" />
            <img
                src="/src/assets/singles&miracle.jpeg"
                alt="Pray with Adetoun - Daily Prayers"
                className="w-full max-w-sm rounded-xl my-4 mx-auto block object-cover"
              />
            <p className="text-white/60 font-body leading-relaxed mb-4">
              Singles & Miracles is a ministry that focuses on encouraging and
              strengthening singles through prayer, teaching, and spiritual
              guidance.
            </p>
           
            <p className="text-white/60 font-body leading-relaxed mb-4">
              The ministry helps singles grow spiritually, trust God's promises
              concerning marriage and destiny, and develop the character and
              faith required to step into what God has prepared.
            </p>
            <p className="text-white/60 font-body leading-relaxed mb-8">
              This is not a season to endure — it is a season to be trained,
              deepened, and prepared. Singles & Miracles walks with you through
              that process.
            </p>
            <a
              href="https://t.me/singlesandmiracles"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Join our community <ArrowRight size={16} />
            </a>
          </div>

          <div className="relative">
            <div className="border border-gold-DEFAULT/30 bg-navy-dark p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-site to-gold-DEFAULT" />
              <div className="absolute inset-0 bg-texture opacity-10" />
              <div className="relative z-10">
                <div className="font-display text-7xl text-gold-DEFAULT/15 font-light mb-2">
                  "
                </div>
                <p className="font-display text-2xl text-white/80 italic leading-relaxed mb-6">
                  God is not withholding from you. He is preparing you. Trust
                  the process.
                </p>
                <div className="w-8 h-px bg-gold-DEFAULT mb-4" />
                <p className="font-accent text-gold-DEFAULT text-xs tracking-widest uppercase">
                  Singles & Miracles
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-rust-DEFAULT/20 -z-10" />
          </div>
        </div>
      </SectionWrapper>

      {/* PILLARS */}
      <SectionWrapper className="bg-navy-dark">
        <div className="text-center mb-14">
          <p className="section-label mb-3">What We Build</p>
          <h2 className="font-display text-4xl font-light text-white">
            Four Pillars of the Ministry
          </h2>
          <div className="divider-gold" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="border border-white/10 hover:border-gold-DEFAULT/40 p-8 group transition-all duration-300 card-hover"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-site to-gold-DEFAULT flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon size={20} className="text-navy-DEFAULT" />
              </div>
              <h3 className="font-display text-xl text-white mb-3 group-hover:text-gold-DEFAULT transition-colors">
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
      {/* <section className="bg-gradient-to-r from-amber-site to-gold-DEFAULT py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-accent text-navy-DEFAULT text-xs tracking-widest uppercase mb-3">
            You Are Not Alone
          </p>
          <h2 className="font-display text-4xl font-light text-navy-DEFAULT mb-4">
            Join the Singles & Miracles Community
          </h2>
          <p className="text-navy-DEFAULT/70 font-body mb-8">
            Stay connected for teachings, prayer sessions, and resources
            designed for this season of your life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-navy-DEFAULT text-gold-DEFAULT font-body text-sm tracking-widest uppercase px-8 py-4 hover:bg-navy-dark transition-colors"
          >
            Stay Connected <ArrowRight size={16} />
          </Link>
        </div>
      </section> */}
    </>
  );
}
