import { Link } from "react-router-dom";
import { ArrowRight, Church, Mic, Users, Globe } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionWrapper from "../components/SectionWrapper";
import tounsimg3 from "../assets/IMG_2901.png"

const EVENTS = [
  { icon: Church, label: "Church Gatherings" },
  { icon: Mic, label: "Prayer Meetings" },
  { icon: Globe, label: "Conferences" },
  { icon: Users, label: "Women's Events" },
  { icon: Users, label: "Discipleship Gatherings" },
];

const TOPICS = [
  {
    title: "Prayer & Intercession",
    desc: "The call to pray, how to pray with power, and what it means to become a disciplined intercessor.",
    accent: "border-l-rust-DEFAULT",
  },
  {
    title: "Faith & Spiritual Growth",
    desc: "Building a life of faith, trusting God in every season, and growing in spiritual maturity.",
    accent: "border-l-amber-site",
  },
  {
    title: "Revival & the Holy Spirit",
    desc: "The nature of revival, the work of the Holy Spirit, and the believer's role in a move of God.",
    accent: "border-l-gold-DEFAULT",
  },
  {
    title: "Purpose & Destiny",
    desc: "Discovering God's design, walking in calling, and fulfilling divine assignment with courage.",
    accent: "border-l-navy-light",
  },
];

export default function Speaking() {
  return (
    <>
      <PageHero
        label="Speaking & Ministry"
        title="Invite Esther to Minister"
        subtitle="Available to bring a word of fire, prayer, and truth to your gathering."
        bg="bg-navy-dark"
      />
      <img
        src={tounsimg3}
        alt="Pray with Adetoun - Daily Prayers"
        className="w-[90%] max-w-sm rounded-xl mt-4 mx-auto block object-cover"
      />
      {/* EVENTS + TOPICS */}
      <SectionWrapper className="bg-navy">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Event types */}
          <div>
            <p className="section-label mb-6">Event Types</p>
            <h2 className="font-display text-3xl font-light text-white mb-2">
              Where Esther{" "}
              <span className="italic text-gold-DEFAULT">Ministers</span>
            </h2>
            <div className="w-10 h-px bg-gold-DEFAULT my-6" />
            <div className="space-y-3">
              {EVENTS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 border border-white/10 hover:border-gold-DEFAULT/30 p-5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-rust-DEFAULT to-amber-site flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={16} className="text-white" />
                  </div>
                  <p className="font-display text-white text-lg group-hover:text-gold-DEFAULT transition-colors">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Topics */}
          {/* <div>
            <p className="section-label mb-6">Speaking Topics</p>
            <h2 className="font-display text-3xl font-light text-white mb-2">
              Messages That{" "}
              <span className="italic text-gold-DEFAULT">
                Set Hearts Ablaze
              </span>
            </h2>
            <div className="w-10 h-px bg-gold-DEFAULT my-6" />
            <div className="space-y-4">
              {TOPICS.map(({ title, desc, accent }) => (
                <div
                  key={title}
                  className={`border-l-2 ${accent} pl-6 py-2 group`}
                >
                  <h3 className="font-display text-white text-xl mb-1 group-hover:text-gold-DEFAULT transition-colors">
                    {title}
                  </h3>
                  <p className="text-white/50 text-sm font-body leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </SectionWrapper>

      {/* BOOKING CTA */}
      <section className="bg-gradient-to-r from-rust-DEFAULT via-amber-site to-gold-DEFAULT py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-accent text-navy-DEFAULT text-xs tracking-widest2 uppercase mb-4">
            Booking Inquiries
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-DEFAULT mb-4">
            Ready to Extend an Invitation?
          </h2>
          <div className="w-16 h-px bg-navy-DEFAULT/30 mx-auto my-6" />
          <p className="text-navy-DEFAULT/70 font-body mb-10 max-w-xl mx-auto">
            To invite Esther to minister at your church, conference, or
            gathering, please reach out through the contact form with details
            about your event.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-navy-DEFAULT text-gold-DEFAULT font-body text-sm tracking-widest uppercase px-10 py-4 hover:bg-navy-dark transition-colors"
          >
            Send a Speaking Invitation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
