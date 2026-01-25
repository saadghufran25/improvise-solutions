"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20"
      aria-labelledby="about-title"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <Reveal className="space-y-6">
        <div>
          <h2 id="about-title" className="section-title">
            About Us
          </h2>
          <p className="section-subtext">Professional teams for critical on-site operations.</p>
        </div>
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-smoke/70 p-6 shadow-soft md:p-8">
          <p className="text-lg leading-relaxed text-gray-200">
            At Improvise Solutions, we provide more than staffing, we deliver dependable, trained professionals across essential on-site services.
            Our core offering includes licensed security personnel, qualified safety staff, certified traffic marshals, dedicated cleaning teams, and
            experienced general labour.
          </p>
          <p className="text-lg leading-relaxed text-gray-200">
            With practical field experience, we support a wide range of operational needs across construction, commercial, residential, and event
            environments. Every team member is selected carefully, trained thoroughly, and expected to work with discipline, professionalism, and
            respect.
          </p>
          <p className="text-lg leading-relaxed text-gray-200">
            We combine real-world expertise with responsive service and clear coordination, so clients get the right people, at the right time, in the
            right roles. From keeping a site secure, to managing crowds, to filling workforce gaps, Improvise Solutions helps you run operations
            smoothly.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
