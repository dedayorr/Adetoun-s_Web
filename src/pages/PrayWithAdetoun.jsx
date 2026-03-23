import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Radio,
  Send,
  Youtube,
  Droplets,
} from "lucide-react";
import PageHero from "../components/PageHero";
import SectionWrapper from "../components/SectionWrapper";
import tounsimg2 from "../assets/dailyprayer.png";

const PLATFORMS = [
  {
    icon: Send,
    label: "Telegram",
    href: "https://t.me/praywithadetoun",
    color: "bg-rust-DEFAULT",
  },
  {
    icon: Radio,
    label: "Mixlr",
    href: "https://praywithadetoun.mixlr.com/",
    color: "bg-amber-site",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com/@estheradetounadeyeye?si=i2nZOPQdkMcsIELx",
    color: "bg-gold-DEFAULT",
  },
];

const HOW_STEPS = [
  {
    step: "01",
    title: "Join our Platform",
    desc: "Connect via Telegram, Mixlr, or YouTube — wherever is easiest for you.",
  },
  {
    step: "02",
    title: "Show Up at 12 AM CST",
    desc: "Set your alarm. The watch begins at midnight and runs until 2:00 AM CST. 6:00 AM WAT, every night. Kindly convert to your time zone",
  },
  {
    step: "03",
    title: "Pray Together",
    desc: "Come with an open heart to pray, worship, intercede, and press in alongside believers across the globe.",
  },
  {
    step: "04",
    title: "Deep Waters Monthly",
    desc: "Join the extended six-hour prayer gathering once a month for an encounter with God",
  },
];

export default function PrayWithAdetoun() {
  return (
    <>
      <PageHero
        label="Pray With Adetoun"
        title="The Global Prayer Watch"
        subtitle="Every night, intercessors across the world gather in unified prayer. Will you join us?"
        bg="bg-navy-dark"
      />

      {/* TIME BANNER */}
      <section className="bg-gradient-to-r from-rust-DEFAULT via-amber-site to-gold-DEFAULT py-10 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Heading (always on top) */}

          {/* Main content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* LEFT SIDE */}
            <div className="flex- text-center md:text-left">
              <p className="font-accent text-navy-DEFAULT md:text-[30px] tracking-widest uppercase text-center md:text-left mb-4 md:mb-0">
                Daily Prayer Watch
              </p>
              <p className="font-display text-3xl text-navy-DEFAULT font-light">
                🇺🇸 CST: 12:00 AM – 2:00 AM <br />
                🇳🇬 WAT: 6:00 AM – 8:00 AM <br />
                🇬🇧 GMT: 5:00 AM – 7:00 AM
              </p>

              {/* Platforms */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                {PLATFORMS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-navy-DEFAULT/20 hover:bg-navy-DEFAULT/40 text-navy-DEFAULT font-body text-sm tracking-widest uppercase py-2.5 transition-colors"
                  >
                    <Icon size={16} /> {label}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE (IMAGE ONLY) */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src={tounsimg2}
                alt="Pray with Adetoun - Daily Prayers"
                className="w-full max-w-sm rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <SectionWrapper className="bg-navy">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">About Pray With Adetoun (PWA)</p>
            <h2 className="font-display text-4xl font-light text-white leading-tight mb-2">
              A Movement of{" "}
              <span className="italic text-gold-DEFAULT">
                Consistent Prayer & Intercession
              </span>
            </h2>
            <div className="w-10 h-px bg-gold-DEFAULT my-6" />
            <p className="text-white/60 font-body leading-relaxed mb-4">
              Pray With Adetoun (PWA) is a global prayer movement committed to
              strengthening believers to live a life of consistent, fervent
              prayer, and intercession.
            </p>
            <p className="text-white/60 font-body leading-relaxed mb-4">
              At the heart of PWA is the Daily Prayer Watch, held from 12:00 AM
              to 2:00 AM CST, a sacred altar where believers across nations
              gather in unity to seek God. Whether in Lagos, London, or Los
              Angeles, this global company joins through Telegram, Mixlr, and
              YouTube to press into His presence.
            </p>
            <p className="text-white/60 font-body leading-relaxed mb-4">
              Pray With Adetoun is more than a meeting. It is a movement. A
              people being shaped in the place of prayer, growing in spiritual
              discipline, and aligning with the purposes of God.
            </p>
            <p className="text-white/60 font-body leading-relaxed">
              Prayer is not a programme, it is a lifestyle and PWA exists to
              help believers build and sustain that lifestyle.
            </p>
          </div>

          {/* Deep Waters card */}
          <div className="border border-gold-DEFAULT/30 bg-navy-dark relative overflow-hidden p-10">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rust-DEFAULT via-amber-site to-gold-DEFAULT" />
            <div className="absolute inset-0 bg-texture opacity-10" />
            <div className="relative z-10">
              <Droplets size={32} className="text-gold-DEFAULT mb-6" />
              <p className="section-label mb-2">
                Make it Deep Waters 6-hour Prayer
              </p>
              <h3 className="font-display text-3xl font-light text-white mb-4">
                Deep Waters Prayer
              </h3>
              <div className="w-8 h-px bg-gold-DEFAULT mb-6" />
              <p className="text-white/60 font-body leading-relaxed mb-4">
                Once a month, the Pray With Adetoun community gathers for an
                extended six-hour prayer session.
              </p>
              <p className="text-white/60 font-body leading-relaxed mb-6">
                Deep Waters is a time of deep spiritual travail, divine
                impartation of the Holy Spirit, and alignment with God’s
                purposes. It goes beyond the daily watch into extended prayers,
                worship, intercession, and encounters that transform lives.
              </p>
              <div className="flex gap-2 flex-wrap">
                {PLATFORMS.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${color} flex items-center gap-2 text-white font-body text-xs tracking-widest uppercase px-4 py-2 hover:opacity-90 transition-opacity`}
                  >
                    <Icon size={13} /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* HOW TO JOIN */}
      <SectionWrapper className="bg-navy-dark">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Getting Started</p>
          <h2 className="font-display text-4xl font-light text-white">
            How to Join the Watch
          </h2>
          <div className="divider-gold" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_STEPS.map(({ step, title, desc }) => (
            <div
              key={step}
              className="relative border border-white/10 hover:border-gold-DEFAULT/40 p-8 transition-all duration-300 group"
            >
              <div className="font-accent text-5xl text-gold-DEFAULT/20 font-light mb-4 group-hover:text-gold-DEFAULT/40 transition-colors">
                {step}
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

      {/* JOIN CTA */}
      <section className="bg-gradient-to-br from-navy-dark to-navy py-20 px-6 text-center border-t border-gold-DEFAULT/20">
        <div className="max-w-3xl mx-auto">
          <p className="section-label mb-4">Join the Movement</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
            The Watch Awaits You
          </h2>
          <div className="divider-gold" />
          {/* <p className="text-white/60 font-body mb-10">
            Intercessors show up every night/morning. Tonight could be your
            first night.
          </p> */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {PLATFORMS.map(({ icon: Icon, label, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${color} inline-flex items-center justify-center gap-2 text-white font-body text-sm tracking-widest uppercase px-8 py-4 hover:opacity-90 transition-opacity`}
              >
                <Icon size={16} /> Join on {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
