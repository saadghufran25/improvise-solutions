"use client";

import Reveal from "./Reveal";

const highlights = [
  {
    title: "Security Professionals",
    description:
      "Licensed, trained, and dependable guards who help maintain order, safety, and professionalism across varied situations.",
    icon: ShieldIcon,
  },
  {
    title: "Professional Cleaning Staff",
    description:
      "Reliable teams for routine cleaning, office upkeep, and detailed site cleanups, ensuring clean, safe spaces.",
    icon: SparkleIcon,
  },
  {
    title: "Traffic Marshals",
    description:
      "Certified marshals who guide vehicles and pedestrians, maintain flow, and support safety compliance on site.",
    icon: TrafficIcon,
  },
  {
    title: "Dog Handlers",
    description:
      "Experienced handlers paired with trained dogs for perimeter security, crowd control support, and rapid detection.",
    icon: PawIcon,
  },
  {
    title: "Safety Personnel",
    description:
      "On-site safety support to monitor risks, encourage compliance, and help create safer working environments.",
    icon: HelmetIcon,
  },
  {
    title: "Support 24/7",
    description:
      "On-demand support and quick coordination so clients can request help, adjust staffing, and stay covered anytime.",
    icon: ClockIcon,
  },
];

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20"
      aria-labelledby="highlights-title"
    >
      <Reveal className="mb-8 flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 id="highlights-title" className="section-title">
              Why choose us
            </h2>
            <p className="section-subtext">Operational focus, reliable teams, and clear coordination.</p>
          </div>
          <div
            id="threat"
            className="flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-500/50"
            aria-live="polite"
          >
            <span>Current Threat Level:</span>
            <span>SUBSTANTIAL</span>
          </div>
        </div>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item, index) => (
          <Reveal key={item.title} delay={index * 70} className="h-full">
            <article className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-smoke/70 p-5 shadow-card transition hover:-translate-y-1 hover:border-white/60 hover:shadow-soft">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/20 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-purple-500/20 group-hover:text-blue-400 group-hover:ring-blue-400/40">
                  <item.icon />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 3 5 5.5v6.2c0 3.3 2.9 6.8 7 8.8 4.1-2 7-5.5 7-8.8V5.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 12.5 11 14l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 3.5 13.7 9.7 20 11 13.7 12.3 12 18.5 10.3 12.3 4 11 10.3 9.7 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M6.5 5.5 7.3 8 10 8.7 7.3 9.4 6.5 12 5.7 9.4 3 8.7 5.7 8 6.5 5.5Z" fill="currentColor" />
    </svg>
  );
}

function TrafficIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M10 3h4l1 3.5-2 2L15 11l-1 3H10L9 11l2-2-2-2.5L10 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M6 20h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PawIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <circle cx="7.5" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.5" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 15.5c0-1.4 1.7-2.5 4-2.5s4 1.1 4 2.5c0 1.9-2.6 3-4 3s-4-1.1-4-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function HelmetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M5 14c0-3.9 3.1-7 7-7s7 3.1 7 7v2H5v-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 7V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 16v2h10v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
