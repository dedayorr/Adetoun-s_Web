import { useState } from "react";
import emailjs from "@emailjs/browser";
import PageHero from "../components/PageHero";
import SectionWrapper from "../components/SectionWrapper";

const MINISTRIES = [
  "Singles & Miracles",
  "Podcast",
  "Pray with Adetoun",
  "Books",
  "Other",
];

const PARTNERSHIP_TYPES = [
  "Financial Support",
  "Volunteering Time",
  "Prayer Support",
  "Skills / Services",
];

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  ministry: "",
  partnershipType: "",
  reason: "",
};

export default function Partnership() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_a9fzeul",  
        "YOUR_TEMPLATE_ID",  
        {
          full_name: form.fullName,
          email: form.email,
          phone: form.phone,
          ministry: form.ministry,
          partnership_type: form.partnershipType,
          reason: form.reason || "Not provided",
        },
        "YOUR_PUBLIC_KEY"   
      );
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        label="Partner With Us"
        title="Join the Mission"
        subtitle="Every partnership whether through prayer, time, skills, or giving — advances the Kingdom. Find where you're called."
        bg="bg-navy-dark"
      />

      {/* WHY PARTNER */}
      <SectionWrapper className="bg-navy">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-4">Why Partner</p>
          <h2 className="font-display text-3xl font-light text-white mb-4">
            You Are Part of{" "}
            <span className="italic text-gold-DEFAULT">This Work</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-white/60 font-body leading-relaxed mb-4">
            This ministry exists because people answered the call not just to
            receive, but to give. Whether through intercession, showing up to
            serve, offering your skills, or sowing financially, your partnership
            keeps this mission moving forward.
          </p>
          <p className="text-white/60 font-body leading-relaxed">
            Choose the area you feel called to support and let us know how you'd
            like to get involved. Every contribution matters.
          </p>
        </div>
      </SectionWrapper>

      {/* FORM */}
      <SectionWrapper className="bg-navy-dark">
        <div className="max-w-2xl mx-auto">
          <p className="section-label mb-4 text-center">Partnership Form</p>
          <h2 className="font-display text-3xl font-light text-white mb-2 text-center">
            Get Involved
          </h2>
          <div className="divider-gold mb-10" />

          {status === "success" ? (
            <div className="border border-gold-DEFAULT/30 bg-navy p-10 text-center">
              <p className="font-display text-2xl text-white mb-3">
                Thank You for Partnering
              </p>
              <p className="text-white/60 font-body text-sm">
                Your submission has been received. We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-white/60 font-body text-xs tracking-widest uppercase mb-2">
                  Full Name <span className="text-gold-DEFAULT">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full bg-navy border border-white/10 focus:border-gold-DEFAULT/50 text-white font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/20"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/60 font-body text-xs tracking-widest uppercase mb-2">
                  Email Address <span className="text-gold-DEFAULT">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-navy border border-white/10 focus:border-gold-DEFAULT/50 text-white font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/20"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white/60 font-body text-xs tracking-widest uppercase mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+234 000 000 0000"
                  className="w-full bg-navy border border-white/10 focus:border-gold-DEFAULT/50 text-white font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/20"
                />
              </div>

              {/* Ministry */}
              <div>
                <label className="block text-white/60 font-body text-xs tracking-widest uppercase mb-2">
                  Which Ministry Would You Like to Partner With?{" "}
                  <span className="text-gold-DEFAULT">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {MINISTRIES.map((m) => (
                    <button
                      type="button"
                      key={m}
                      onClick={() => setForm((prev) => ({ ...prev, ministry: m }))}
                      className={`border px-4 py-3 font-body text-xs tracking-widest uppercase transition-all duration-200 text-left ${
                        form.ministry === m
                          ? "border-gold-DEFAULT text-gold-DEFAULT bg-gold-DEFAULT/10"
                          : "border-white/10 text-white/50 hover:border-white/30"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
                {/* hidden input for validation */}
                <input
                  type="text"
                  name="ministry"
                  required
                  value={form.ministry}
                  onChange={() => {}}
                  className="sr-only"
                  tabIndex={-1}
                />
              </div>

              {/* Partnership Type */}
              <div>
                <label className="block text-white/60 font-body text-xs tracking-widest uppercase mb-2">
                  How Would You Like to Partner?{" "}
                  <span className="text-gold-DEFAULT">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {PARTNERSHIP_TYPES.map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() =>
                        setForm((prev) => ({ ...prev, partnershipType: p }))
                      }
                      className={`border px-4 py-3 font-body text-xs tracking-widest uppercase transition-all duration-200 text-left ${
                        form.partnershipType === p
                          ? "border-gold-DEFAULT text-gold-DEFAULT bg-gold-DEFAULT/10"
                          : "border-white/10 text-white/50 hover:border-white/30"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  name="partnershipType"
                  required
                  value={form.partnershipType}
                  onChange={() => {}}
                  className="sr-only"
                  tabIndex={-1}
                />
              </div>

              {/* Reason (Optional) */}
              <div>
                <label className="block text-white/60 font-body text-xs tracking-widest uppercase mb-2">
                  Why This Ministry?{" "}
                  <span className="text-white/30">(Optional)</span>
                </label>
                <textarea
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Share what led you here..."
                  className="w-full bg-navy border border-white/10 focus:border-gold-DEFAULT/50 text-white font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/20 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 font-body text-sm">
                  Something went wrong. Please try again or reach out directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center"
              >
                {status === "sending" ? "Submitting..." : "Submit Partnership Request"}
              </button>
            </form>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}